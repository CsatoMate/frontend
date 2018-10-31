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
  FormGroup,
  Form,
  InputGroup,
  Input,
  InputGroupAddon,
  InputGroupText,
  Modal,
  ModalBody,
  ModalFooter,
  ModalHeader,
} from 'reactstrap';
//import Slider from 'react-rangeslider'

import deviceData from "../Devices/DeviceData";
import {AppSwitch} from "@coreui/react";



function UserRow(props) {
  const device = props.device;

  const getBadge = (status) => {
    return status === 'ENABLED' ? 'success' :
      status === 'DISABLED' ? 'secondary' : 'primary'
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
      dropdownOpen: false,
      sliderValue: 22,
      switchStatus: false,
      sensor: '',
      deviceName: 'Devices Dropdown',
      tempUnit: '°C',

      modalOpen: false,
    };
    this.deviceList = deviceData.filter((item) => item.auth === 'ENABLED');
    this.handleDropChange = this.handleDropChange.bind(this);
    this.toggle = this.toggle.bind(this);
    this.onSubmit = this.onSubmit.bind(this);
    this.setModal = this.setModal.bind(this);
  }

  toggle() {
    this.setState(prevState => ({
      dropdownOpen: !prevState.dropdownOpen
    }));
  }

  handleChange = (value) => {
    this.setState({
      sliderValue: value
    })
  };

  handleDropChange(e) {
    console.log("DropItem: ", e.target.value);
    let data = deviceData.filter((item) => item.id.toString() === e.target.value);
    console.log("Data: ", data);
    this.setState(prevState => ({
      modalOpen: !prevState.modalOpen,
      sensor: data[0].sensor,
      deviceName: data[0].name,
      sliderValue: data[0].value,
      switchStatus: data[0].value === 'ON',
      tempUnit: data[0].tempUnit
    }))
  }

  setModal(){
    this.setState(prevState => ({
      modalOpen: !prevState.modalOpen,
    }));
  }

  deviceSetter(type) {
    if (type === "DS18B20") {
      return (

            <Form action="" method="post">
              <Modal isOpen={this.state.modalOpen} toggle={this.setModal}
                     className={'modal-primary ' + this.props.className}>
                <ModalHeader toggle={this.setModal}>Modify values</ModalHeader>
                <ModalBody>
                  <FormGroup>
                    <InputGroup>
                      <InputGroupAddon addonType="prepend">
                        <InputGroupText>Temperature:</InputGroupText>
                      </InputGroupAddon>
                      <Input type="text" id="tempMin" name="tempMin" placeholder="Min value"
                             autoComplete="name" defaultValue={this.state.devName} onChange={this.setHandleName}/>
                      <InputGroupAddon addonType="append">
                        <InputGroupText>-</InputGroupText>
                      </InputGroupAddon>
                      <Input type="text" id="tempMax" name="tempMax" placeholder="Max value"
                             autoComplete="name" defaultValue={this.state.devName} onChange={this.setHandleName}/>
                      <InputGroupAddon addonType="append">
                        <InputGroupText><i className="fa fa-thermometer-half"/></InputGroupText>
                      </InputGroupAddon>
                    </InputGroup>
                  </FormGroup>
óra formátumot kell keríteni meg bekötni
                  <FormGroup>
                    <InputGroup>
                      <InputGroupAddon addonType="prepend">
                        <InputGroupText>Time:</InputGroupText>
                      </InputGroupAddon>
                      <Input type="text" id="timeStart" name="timeStart" placeholder="Start time"
                             autoComplete="name" defaultValue={this.state.devName} onChange={this.setHandleName}/>
                      <InputGroupAddon addonType="append">
                        <InputGroupText>-</InputGroupText>
                      </InputGroupAddon>
                      <Input type="text" id="timeEnd" name="timeEnd" placeholder="End time"
                             autoComplete="name" defaultValue={this.state.devName} onChange={this.setHandleName}/>
                      <InputGroupAddon addonType="append">
                        <InputGroupText><i className="fa fa-clock-o"/></InputGroupText>
                      </InputGroupAddon>
                    </InputGroup>
                  </FormGroup>

                </ModalBody>
                <ModalFooter>
{/*                  <Button type="submit" color="primary" onClick={this.modifiyDevice.bind(this, this.state)}>Save</Button>{' '}
                  <Button color="secondary" onClick={this.toggle}>Cancel</Button>*/}
                </ModalFooter>
              </Modal>
            </Form>


        /*        <div className='slider'>
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
                  }}>{this.state.sliderValue} {this.state.tempUnit}
                  </div>
                </div>*/
      )
    }

    if (type === "ENERGY") {
      return (
        <div className="row justify-content-center">
          <AppSwitch className={'mx-1 switch-lg'} variant={'pill'} color={'success'} outline={'alt'}
                     label
                     defaultChecked={this.state.switchStatus}
                     onChange={console.log("Változott: ", this.state.switchStatus)}/>
        </div>
      )
    }
    return null;
  }

  onSubmit() {
    console.log("Elküldve:", this.state);
  }

  render() {
    return (
      <div className="animated fadeIn">
        <Card className="col-md-6 offset-md-3">
          <CardHeader>
            <strong>Devices Controller</strong>
          </CardHeader>
          <CardBody>
            <div className="row ">
              <div className="col-auto mr-auto">
                <ButtonDropdown isOpen={this.state.dropdownOpen} toggle={this.toggle}>
                  <DropdownToggle caret>
                    {this.state.deviceName}
                  </DropdownToggle>
                  <DropdownMenu right>
                    {this.deviceList.map((device) =>
                      <DropdownItem onClick={this.handleDropChange} key={device.id}
                                    value={device.id} name={device.name}>{device.name}</DropdownItem>
                    )}
                  </DropdownMenu>
                </ButtonDropdown>
              </div>
              <div className="col-auto"><Button type="submit" color="primary" onClick={this.onSubmit}>Save</Button>
              </div>
            </div>

            {this.deviceSetter(this.state.sensor)}

          </CardBody>
        </Card>

        <Row>
          <Col className="col-md-6 offset-md-3">
            <Card>
              <CardHeader>
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
                  {deviceData.map((device, index) =>
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
