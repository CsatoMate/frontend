import React, {Component} from 'react';
import {
  Button,
  Card,
  CardBody,
  CardHeader,
  Col,
  Row,
  Badge,
  Table,
  ButtonDropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem,
} from 'reactstrap';
import Slider from 'react-rangeslider'

import deviceData from "../Devices/DeviceData";
import {AppSwitch} from "@coreui/react";


function UserRow(props) {
  const device = props.device;
  //const deviceLink = `#/users/${device.id}`;

  const getBadge = (status) => {
    return status === 'ENABLED' ? 'success' :
      status === 'DISABLED' ? 'secondary' : 'primary'
    /*
      status === 'Pending' ? 'warning' :
        status === 'Banned' ? 'danger' :
          'primary'*/
  };

  return (
    <tr key={device.id.toString()}>
      <th scope="row">{device.id}</th>
      <td>{device.name}</td>
      <td>{device.type}</td>
      <td>{device.UserID}</td>
      <td><Badge color={getBadge(device.auth)}>{device.auth}</Badge></td>
    </tr>
  )
}

class Controller extends Component {

  constructor(props) {
    super(props);

    this.toggle = this.toggle.bind(this);
    this.state = {
      dropdownOpen: new Array(19).fill(false),
      sliderValue: 12.5,
      authStatus: false,
      dropItem: '',
    };
    this.deviceList = deviceData;
    this.handleDropChange = this.handleDropChange.bind(this);
  }

  toggle(i) {
    const newArray = this.state.dropdownOpen.map((element, index) => {
      return (index === i ? !element : false);
    });
    this.setState({
      dropdownOpen: newArray,
    });
  }

  handleChange = (value) => {
    this.setState({
      sliderValue: value
    })
  };

  handleDropChange(e) {
    console.log("DropItem: ", e.target.value);

    this.setState({
      dropItem: e.target.value
    })
  }

  deviceSetter(type) {
    if (type === "TH16") {
      return (
        <div className='slider'>
          <Slider
            min={10}
            max={50}
            value={this.state.sliderValue}
            step={0.5}
            labels={{10: '10', 30: '30', 50: '50'}}
            onChange={this.handleChange}
          />
          <div className='value' style={{
            'textAlign': 'center',
            'marginTop': '40px',
            'fontWeight': 'bold',
            'fontSize': '20px'
          }}>{this.state.sliderValue} °C
          </div>
        </div>
      )
    }

    if (type === "POW") {
      return (
        <div className="row justify-content-center">
          <AppSwitch className={'mx-1 switch-lg'} variant={'pill'} color={'success'} outline={'alt'}
                     label
                     defaultChecked={this.state.authStatus} onChange={console.log("változott")}/>
        </div>
      )
    }
    return null;
  }

  render() {
    const deviceList = deviceData.filter((device) => device.id < 10);

    return (

      <div className="animated fadeIn">
        <Card className="col-md-6 offset-md-3">
          <CardHeader>
            <strong>Devices Controller</strong>
          </CardHeader>
          <CardBody>
            <div className="row ">
              <div className="col-auto mr-auto">
                <ButtonDropdown isOpen={this.state.dropdownOpen[0]} toggle={() => {
                  this.toggle(0);
                }}>
                  <DropdownToggle caret>
                    Devices Dropdown
                  </DropdownToggle>
                  <DropdownMenu right>
                    {this.deviceList.map((device) =>
                      <DropdownItem onClick={this.handleDropChange} key={device.id}
                                    value={device.type} name={device.name}>{device.name}</DropdownItem>
                    )}

                    <DropdownItem value='TH16' onClick={this.handleDropChange}>TH16</DropdownItem>
                    <DropdownItem value='POW' onClick={this.handleDropChange}>POW</DropdownItem>
                  </DropdownMenu>
                </ButtonDropdown>
              </div>
              <div className="col-auto"><Button type="submit" color="primary">Save</Button></div>
            </div>

            {this.deviceSetter(this.state.dropItem)}

{/*            <div className='slider'>
              <Slider
                min={10}
                max={50}
                value={this.state.sliderValue}
                step={0.5}
                labels={{10: '10', 30: '30', 50: '50'}}
                onChange={this.handleChange}
              />
              <div className='value' style={{
                'textAlign': 'center',
                'marginTop': '40px',
                'fontWeight': 'bold',
                'fontSize': '20px'
              }}>{this.state.sliderValue} °C
              </div>
            </div>*/}
          </CardBody>
        </Card>

        <Row>
          <Col className="col-md-6 offset-md-3">
            <Card>
              <CardHeader>
                {/*<small className="text-muted">example</small>*/}
                <Row className="align-items-center">
                  <Col col="10" xl className="mb-3 mb-xl-0">
                    <i className="fa fa-align-justify"/> DEVICES
                  </Col>
                  <Col col="10" sm="3" md="3" className="mb-3 mb-xl-0">
                    <Button block outline color="primary">Add device</Button>
                  </Col>
                </Row>
              </CardHeader>
              <CardBody>
                <Table responsive hover>
                  <thead>
                  <tr>
                    <th scope="col">id</th>
                    <th scope="col">Name</th>
                    <th scope="col">Type</th>
                    <th scope="col">UserID</th>
                    <th scope="col">Auth</th>
                  </tr>
                  </thead>
                  <tbody>
                  {this.deviceList.map((device, index) =>
                    <UserRow key={index} device={device}/>
                  )}
                  </tbody>
                </Table>
              </CardBody>
            </Card>
          </Col>
        </Row>


      </div>
    );
  }
}

export default Controller;
