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
  Modal,
  ModalBody,
  ModalFooter,
  ModalHeader,
  FormGroup,
  Form,
  InputGroup,
  Input,
  InputGroupAddon,
  InputGroupText,
  /*ButtonDropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem,*/
} from 'reactstrap';

import deviceData from "./DeviceData";
import {AppSwitch} from "@coreui/react";


/*function UserRow(props) {
  const device = props.device;
  //const deviceLink = `#/users/${device.id}`;

  const getBadge = (status) => {
    return status === 'ENABLED' ? 'success' :
      status === 'DISABLED' ? 'secondary' : 'primary'
    /!*
      status === 'Pending' ? 'warning' :
        status === 'Banned' ? 'danger' :
          'primary'*!/
  };

  return (
    <tr key={device.id.toString()}>
      <th scope="row">{device.id}</th>
      <td>{device.name}</td>
      <td>{device.type}</td>
      {/!*<td>{device.UserID}</td>*!/}
      <td><Badge color={getBadge(device.auth)}>{device.auth}</Badge></td>
      <td><Button outline color="primary" onClick={props.toggle}>Add device</Button></td>
    </tr>
  )
}*/

class Buttons extends Component {

  constructor(props) {
    super(props);
    this.state = {
      modal: false,
      devName: '',
      typeName: '',
      authStatus: false,
      dropdownOpen: false,
    };
    this.toggle = this.toggle.bind(this);
    this.toggleDrop = this.toggleDrop.bind(this);
    this.setHandleType = this.setHandleType.bind(this);
    this.setHandleName = this.setHandleName.bind(this);
    this.setHandleAuth = this.setHandleAuth.bind(this);
  }

  toggle() {
    this.setState({
      modal: !this.state.modal,
    });
  }

  toggleDrop() {
    this.setState(prevState => ({
      dropdownOpen: !prevState.dropdownOpen
    }));
  }

  setHandleType(event) {
    this.setState({
      typeName: event.target.value
    });
  }

  setHandleName(event){
    this.setState({
      devName: event.target.value
    })
  }

  setHandleAuth(event){
    this.setState({
      switchStatus: event.target.checked
    })
  }

  loadModalData(dev) {
    console.log("EZZZ:", dev);

    this.setState({
      modal: !this.state.modal,
      devName: dev.name,
      switchStatus: dev.auth === 'ENABLED',
      typeName: dev.type,
      selectedID: dev.id,
    });
  }

  userRow(data) {
    const device = data;
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
        <td><Badge color={getBadge(device.auth)}>{device.auth}</Badge></td>
        <td><Button outline color="primary" onClick={this.loadModalData.bind(this, device)}>Modify</Button></td>
      </tr>
    )
  }


  modifiyDevice(state) {
    console.log("módosítás", state);
  }

  render() {
    const deviceList = deviceData.filter((device) => device.id < 10);
    return (

      <div className="animated fadeIn">
        <Row>
          <Col className="col-md-6 offset-md-3">
            <Card>
              <CardHeader>
                <Row className="align-items-center">
                  <Col col="10" xl className="mb-3 mb-xl-0">
                    <i className="fa fa-align-justify"/> DEVICES
                  </Col>
{/*                  <Col col="10" sm="3" md="3" className="mb-3 mb-xl-0">
                    <Button block outline color="primary" onClick={this.toggle}>Add device</Button>
                  </Col>*/}
                </Row>
              </CardHeader>
              <CardBody>
                <Form action="" method="post">
                  <Modal isOpen={this.state.modal} toggle={this.toggle}
                         className={'modal-primary ' + this.props.className}>
                    <ModalHeader toggle={this.toggle}>Add new device</ModalHeader>
                    <ModalBody>
                      <FormGroup>
                        <InputGroup>
                          <InputGroupAddon addonType="prepend">
                            <InputGroupText>Device name:</InputGroupText>
                          </InputGroupAddon>
                          <Input type="text" id="deviceName" name="deviceName" placeholder="Device name"
                                 autoComplete="name" defaultValue={this.state.devName} onChange={this.setHandleName}/>
                          <InputGroupAddon addonType="append">
                            <InputGroupText><i className="fa fa-microchip"/></InputGroupText>
                          </InputGroupAddon>
                        </InputGroup>
                      </FormGroup>
                      <FormGroup>
                        <InputGroup>
                          <InputGroupAddon addonType="prepend">
                            <InputGroupText>Device type:</InputGroupText>
                          </InputGroupAddon>
                          <select className="form-control" name="typeName" id="typeName" value={this.state.typeName}
                                  onChange={this.setHandleType}>
                            <option value="TH16">TH16</option>
                            <option value="POW">POW</option>
                          </select>
                          <InputGroupAddon addonType="append">
                            <InputGroupText><i className="cui-globe icons"/></InputGroupText>
                          </InputGroupAddon>
                        </InputGroup>
                      </FormGroup>
                      <FormGroup row>
                        <Col md="4">
                          <InputGroup>
                            <InputGroupText>Authentication:</InputGroupText>

                          </InputGroup>
                        </Col>
                        <Col>
                          <AppSwitch className={'mx-1 switch-lg'} variant={'pill'} color={'success'} outline={'alt'}
                                     label
                                     defaultChecked={this.state.authStatus} onChange={this.setHandleAuth}/>
                        </Col>
                      </FormGroup>
                    </ModalBody>
                    <ModalFooter>
                      <Button type="submit" color="primary" onClick={this.modifiyDevice.bind(this, this.state)}>Save</Button>{' '}
                      <Button color="secondary" onClick={this.toggle}>Cancel</Button>
                    </ModalFooter>
                  </Modal>
                </Form>


                <Table responsive hover>
                  <thead>
                  <tr>
                    <th scope="col">id</th>
                    <th scope="col">Name</th>
                    <th scope="col">Type</th>
                    <th scope="col">Auth</th>
                    <th scope="col">Modify</th>
                  </tr>
                  </thead>
                  <tbody>
                  {deviceList.map((device) =>
                    this.userRow(device)
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
