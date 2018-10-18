import React, {Component} from 'react';
import {Button, Card, CardBody, CardHeader, Col, Row, Badge, Table, ButtonDropdown, DropdownToggle, DropdownMenu, DropdownItem,} from 'reactstrap';

import deviceData from "../Devices/DeviceData";



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

class Buttons extends Component {

  constructor(props) {
    super(props);

    this.toggle = this.toggle.bind(this);
    this.state = {
      dropdownOpen: new Array(19).fill(false),
    };
  }

  toggle(i) {
    const newArray = this.state.dropdownOpen.map((element, index) => { return (index === i ? !element : false); });
    this.setState({
      dropdownOpen: newArray,
    });
  }

  render() {
    const deviceList = deviceData.filter((device) => device.id < 10);
    return (

      <div className="animated fadeIn">
        <Card className="col-12">
          <CardHeader>
            <strong>Devices Controller</strong>
          </CardHeader>
          <CardBody>
            <div >
              <ButtonDropdown isOpen={this.state.dropdownOpen[0]} toggle={() => { this.toggle(0); }}>
                <DropdownToggle caret>
                  Devices Dropdown
                </DropdownToggle>
                <DropdownMenu right>
                  <DropdownItem header>Header</DropdownItem>
                  <DropdownItem disabled>Device 1.</DropdownItem>
                  <DropdownItem>Device 2.</DropdownItem>
                  <DropdownItem>Device 3.</DropdownItem>
                </DropdownMenu>
              </ButtonDropdown>
            </div>
          </CardBody>
        </Card>

        <Row>
          <Col className="col-md-6 offset-md-3">
            <Card >
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
              <CardBody >
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
                  {deviceList.map((device, index) =>
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

export default Buttons;
