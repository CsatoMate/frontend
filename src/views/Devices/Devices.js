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
  InputGroupText
} from 'reactstrap';

import deviceData from "./DeviceData";


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
    this.state = {
      modal: false,
    };
    this.toggle = this.toggle.bind(this);
  }

  toggle() {
    this.setState({
      modal: !this.state.modal,
    });
  }


  addDevice() {

  }

  render() {
    const deviceList = deviceData.filter((device) => device.id < 10);
    return (

      <div className="animated fadeIn">
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
                    <Button block outline color="primary" onClick={this.toggle}>Add device</Button>
                  </Col>
                </Row>
              </CardHeader>

              <CardBody>
                <Form action="" method="post">
                  <Modal isOpen={this.state.modal} toggle={this.toggle} className={'modal-primary ' + this.props.className}>
                    <ModalHeader toggle={this.toggle} >Add new device</ModalHeader>
                    <ModalBody>
                      <FormGroup>
                        <InputGroup>
                          <Input type="text" id="deviceName" name="deviceName" placeholder="Device name"
                                 autoComplete="name"/>
                          <InputGroupAddon addonType="append">
                            <InputGroupText><i className="fa fa-microchip"/></InputGroupText>
                          </InputGroupAddon>
                        </InputGroup>
                      </FormGroup>
                      <FormGroup>
                        <InputGroup>
                          <Input type="text" id="typeName" name="typeName" placeholder="Device type"
                                 autoComplete="name"/>
                          <InputGroupAddon addonType="append">
                            <InputGroupText><i className="cui-globe icons"/></InputGroupText>
                          </InputGroupAddon>
                        </InputGroup>
                      </FormGroup>
                      <FormGroup>
                        <InputGroup>
                          <Input type="text" id="userID" name="userID" placeholder="User ID"
                                 autoComplete="name"/>
                          <InputGroupAddon addonType="append">
                            <InputGroupText><i className="fa fa-user"/></InputGroupText>
                          </InputGroupAddon>
                        </InputGroup>
                      </FormGroup>


                      <FormGroup>
                        <InputGroup>
                          <Input type="boolean" id="email2" name="email2" placeholder="Email" autoComplete="username"/>
                          <InputGroupAddon addonType="append">
                            <InputGroupText><i className="fa fa-envelope"/></InputGroupText>
                          </InputGroupAddon>
                        </InputGroup>
                      </FormGroup>
                      <FormGroup>
                        <InputGroup>
                          <Input type="password" id="password2" name="password2" placeholder="Password"
                                 autoComplete="current-password"/>
                          <InputGroupAddon addonType="append">
                            <InputGroupText><i className="fa fa-asterisk"/></InputGroupText>
                          </InputGroupAddon>
                        </InputGroup>
                      </FormGroup>

                    </ModalBody>
                    <ModalFooter>
                      <Button color="primary" onClick={this.toggle}>Save</Button>{' '}
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

        <Card>
          <CardHeader>
            <strong>Outline Buttons</strong>
          </CardHeader>
          <CardBody>
            <Row className="align-items-center">
              <Col col="12" xl className="mb-3 mb-xl-0">
                Normal
              </Col>
              <Col col="6" sm="4" md="2" xl className="mb-3 mb-xl-0">
                <Button block outline color="primary">Primary</Button>
              </Col>
              <Col col="6" sm="4" md="2" xl className="mb-3 mb-xl-0">
                <Button block outline color="secondary">Secondary</Button>
              </Col>
              <Col col="6" sm="4" md="2" xl className="mb-3 mb-xl-0">
                <Button block outline color="success">Success</Button>
              </Col>
              <Col col="6" sm="4" md="2" xl className="mb-3 mb-xl-0">
                <Button block outline color="warning">Warning</Button>
              </Col>
              <Col col="6" sm="4" md="2" xl className="mb-3 mb-xl-0">
                <Button block outline color="danger">Danger</Button>
              </Col>
              <Col col="6" sm="4" md="2" xl className="mb-3 mb-xl-0">
                <Button block outline color="info">Info</Button>
              </Col>
              <Col col="6" sm="4" md="2" xl className="mb-3 mb-xl-0">
                <Button block outline color="light">Light</Button>
              </Col>
              <Col col="6" sm="4" md="2" xl className="mb-3 mb-xl-0">
                <Button block outline color="dark">Dark</Button>
              </Col>
            </Row>
            <Row className="align-items-center mt-3">
              <Col col="12" xl className="mb-3 mb-xl-0">
                Active State
              </Col>
              <Col col="6" sm="4" md="2" xl className="mb-3 mb-xl-0">
                <Button block outline active color="primary" aria-pressed="true">Primary</Button>
              </Col>
              <Col col="6" sm="4" md="2" xl className="mb-3 mb-xl-0">
                <Button block outline active color="secondary" aria-pressed="true">Secondary</Button>
              </Col>
              <Col col="6" sm="4" md="2" xl className="mb-3 mb-xl-0">
                <Button block outline active color="success" aria-pressed="true">Success</Button>
              </Col>
              <Col col="6" sm="4" md="2" xl className="mb-3 mb-xl-0">
                <Button block outline active color="warning" aria-pressed="true">Warning</Button>
              </Col>
              <Col col="6" sm="4" md="2" xl className="mb-3 mb-xl-0">
                <Button block outline active color="danger" aria-pressed="true">Danger</Button>
              </Col>
              <Col col="6" sm="4" md="2" xl className="mb-3 mb-xl-0">
                <Button block outline active color="info" aria-pressed="true">Info</Button>
              </Col>
              <Col col="6" sm="4" md="2" xl className="mb-3 mb-xl-0">
                <Button block outline active color="light" aria-pressed="true">Light</Button>
              </Col>
              <Col col="6" sm="4" md="2" xl className="mb-3 mb-xl-0">
                <Button block outline active color="dark" aria-pressed="true">Dark</Button>
              </Col>
            </Row>
            <Row className="align-items-center mt-3">
              <Col col="12" xl className="mb-3 mb-xl-0">
                Disabled
              </Col>
              <Col col="6" sm="4" md="2" xl className="mb-3 mb-xl-0">
                <Button block outline color="primary" disabled>Primary</Button>
              </Col>
              <Col col="6" sm="4" md="2" xl className="mb-3 mb-xl-0">
                <Button block outline color="secondary" disabled>Secondary</Button>
              </Col>
              <Col col="6" sm="4" md="2" xl className="mb-3 mb-xl-0">
                <Button block outline color="success" disabled>Success</Button>
              </Col>
              <Col col="6" sm="4" md="2" xl className="mb-3 mb-xl-0">
                <Button block outline color="warning" disabled>Warning</Button>
              </Col>
              <Col col="6" sm="4" md="2" xl className="mb-3 mb-xl-0">
                <Button block outline color="danger" disabled>Danger</Button>
              </Col>
              <Col col="6" sm="4" md="2" xl className="mb-3 mb-xl-0">
                <Button block outline color="info" disabled>Info</Button>
              </Col>
              <Col col="6" sm="4" md="2" xl className="mb-3 mb-xl-0">
                <Button block outline color="light" disabled>Light</Button>
              </Col>
              <Col col="6" sm="4" md="2" xl className="mb-3 mb-xl-0">
                <Button block outline color="dark" disabled>Dark</Button>
              </Col>

            </Row>
          </CardBody>
        </Card>
        <Card>
          <CardBody>
            <Row className="align-items-center">
              <Col col="2" className="mb-3 mb-xl-0 text-center">
                <Button color="secondary" outline size="sm">Outline Button</Button>
              </Col>
            </Row>
            <Row className="align-items-center mt-3">
              <Col col="2" className="mb-3 mb-xl-0 text-center">
                <Button outline color="secondary">Outline Button</Button>
              </Col>

            </Row>
            <Row className="align-items-center mt-3">
              <Col col="2" className="mb-3 mb-xl-0 text-center">
                <Button outline color="secondary" size="lg">Outline Button</Button>
              </Col>
            </Row>
          </CardBody>
        </Card>
      </div>
    );
  }
}

export default Buttons;
