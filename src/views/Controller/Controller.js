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
 /* ButtonDropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem,*/
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
//import {AppSwitch} from "@coreui/react";
import TimeInput from 'react-time-input';


/*function UserRow(props) {
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
}*/

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
      startTime: '08:45',
      stopTime: '16:16',
    };
    this.deviceList = deviceData.filter((item) => item.auth === 'ENABLED');
    this.handleDropChange = this.handleDropChange.bind(this);
    this.toggle = this.toggle.bind(this);
    this.onSubmit = this.onSubmit.bind(this);
    this.setModal = this.setModal.bind(this);
    this.onStartTimeChangeHandler = this.onStartTimeChangeHandler.bind(this);
    this.onStopTimeChangeHandler = this.onStopTimeChangeHandler.bind(this);
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

  handleTableChange(data) {
    this.setState(prevState => ({
      modalOpen: !prevState.modalOpen,
      sensor: data.sensor,
      deviceName: data.name,
      sliderValue: data.value,
      switchStatus: data.value === 'ON',
      tempUnit: data.tempUnit
    }))
  }

  setModal() {
    this.setState(prevState => ({
      modalOpen: !prevState.modalOpen,
    }));
  }

  onStartTimeChangeHandler(value) {
    this.setState({
      startTime: value
    })
  }

  onStopTimeChangeHandler(value) {
    this.setState({
      stopTime: value
    })
  }

  onSubmit() {
    console.log("Elküldve:", this.state);
  }

  deviceSetter(type) {
    if (type === "DS18B20") {
      return (
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
          <FormGroup>
            <InputGroup>
              <InputGroupAddon addonType="prepend">
                <InputGroupText>Time:</InputGroupText>
              </InputGroupAddon>

              <TimeInput
                initTime={this.state.startTime}
                ref="TimeInputWrapper"
                className='form-control'
                //mountFocus='true'
                onTimeChange={this.onStartTimeChangeHandler}
              />
              <InputGroupAddon addonType="append">
                <InputGroupText>-</InputGroupText>
              </InputGroupAddon>
              <TimeInput
                initTime={this.state.stopTime}
                ref="TimeInputWrapper"
                className='form-control'
                //mountFocus='true'
                onTimeChange={this.onStopTimeChangeHandler}
              />
              <InputGroupAddon addonType="append">
                <InputGroupText><i className="fa fa-clock-o"/></InputGroupText>
              </InputGroupAddon>
            </InputGroup>
          </FormGroup>
        </ModalBody>


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

    if (type === "DHT22") {
      return (
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
          <FormGroup>
            <InputGroup>
              <InputGroupAddon addonType="prepend">
                <InputGroupText>Humidity:</InputGroupText>
              </InputGroupAddon>
              <Input type="text" id="humidityMin" name="humidityMin" placeholder="Min value"
                     autoComplete="name" defaultValue={this.state.devName} onChange={this.setHandleName}/>
              <InputGroupAddon addonType="append">
                <InputGroupText>-</InputGroupText>
              </InputGroupAddon>
              <Input type="text" id="humidityMax" name="humidityMax" placeholder="Max value"
                     autoComplete="name" defaultValue={this.state.devName} onChange={this.setHandleName}/>
              <InputGroupAddon addonType="append">
                <InputGroupText>%</InputGroupText>
              </InputGroupAddon>
            </InputGroup>
          </FormGroup>
        </ModalBody>
      )
    }

    if (type === "ENERGY") {
      return (
        <ModalBody>
          <FormGroup>
            <InputGroup>
              <InputGroupAddon addonType="prepend">
                <InputGroupText>Time:</InputGroupText>
              </InputGroupAddon>

              <TimeInput
                initTime={this.state.startTime}
                ref="TimeInputWrapper"
                className='form-control'
                //mountFocus='true'
                onTimeChange={this.onStartTimeChangeHandler}
              />
              <InputGroupAddon addonType="append">
                <InputGroupText>-</InputGroupText>
              </InputGroupAddon>
              <TimeInput
                initTime={this.state.stopTime}
                ref="TimeInputWrapper"
                className='form-control'
                //mountFocus='true'
                onTimeChange={this.onStopTimeChangeHandler}
              />
              <InputGroupAddon addonType="append">
                <InputGroupText><i className="fa fa-clock-o"/></InputGroupText>
              </InputGroupAddon>
            </InputGroup>
          </FormGroup>

          <FormGroup>
            <InputGroup>
              <InputGroupAddon addonType="prepend">
                <InputGroupText>Energy usage:</InputGroupText>
              </InputGroupAddon>
              <Input type="text" id="energy" name="energy" placeholder="Min value"
                     autoComplete="name" />
              <InputGroupAddon addonType="append">
                <InputGroupText>-</InputGroupText>
              </InputGroupAddon>
              <Input type="text" id="energy" name="energy" placeholder="Max value"
                     autoComplete="name" />
              <InputGroupAddon addonType="append">
                <InputGroupText>kWh</InputGroupText>
              </InputGroupAddon>
            </InputGroup>
          </FormGroup>

          <FormGroup>
            <InputGroup>
              <InputGroupAddon addonType="prepend">
                <InputGroupText>Power usage:</InputGroupText>
              </InputGroupAddon>
              <Input type="text" id="power" name="power" placeholder="Min value"
                     autoComplete="name" />
              <InputGroupAddon addonType="append">
                <InputGroupText>-</InputGroupText>
              </InputGroupAddon>
              <Input type="text" id="power" name="power" placeholder="Max value"
                     autoComplete="name" />
              <InputGroupAddon addonType="append">
                <InputGroupText>W</InputGroupText>
              </InputGroupAddon>
            </InputGroup>
          </FormGroup>

          <FormGroup>
            <InputGroup>
              <InputGroupAddon addonType="prepend">
                <InputGroupText>Voltage usage:</InputGroupText>
              </InputGroupAddon>
              <Input type="text" id="voltage" name="voltage" placeholder="Min value"
                     autoComplete="name" />
              <InputGroupAddon addonType="append">
                <InputGroupText>-</InputGroupText>
              </InputGroupAddon>
              <Input type="text" id="voltage" name="voltage" placeholder="Max value"
                     autoComplete="name" />
              <InputGroupAddon addonType="append">
                <InputGroupText>V</InputGroupText>
              </InputGroupAddon>
            </InputGroup>
          </FormGroup>
          <FormGroup>
            <InputGroup>
              <InputGroupAddon addonType="prepend">
                <InputGroupText>Line current usage:</InputGroupText>
              </InputGroupAddon>
              <Input type="text" id="lineCurrent" name="lineCurrent" placeholder="Min value"
                     autoComplete="name" />
              <InputGroupAddon addonType="append">
                <InputGroupText>-</InputGroupText>
              </InputGroupAddon>
              <Input type="text" id="lineCurrent" name="lineCurrent" placeholder="Max value"
                     autoComplete="name" />
              <InputGroupAddon addonType="append">
                <InputGroupText>A</InputGroupText>
              </InputGroupAddon>
            </InputGroup>
          </FormGroup>
        </ModalBody>
      )
    }
    return null;
  }

  userRow(data) {
    const device = data;

    const getBadge = (status) => {
      return status === 'ENABLED' ? 'success' :
        status === 'DISABLED' ? 'secondary' : 'primary'
    };

    return (
      <tr key={device.id.toString()} onClick={this.handleTableChange.bind(this, device)} style={{'cursor': 'pointer'}}>
        <th scope="row">{device.id}</th>
        <td>{device.name}</td>
        <td>{device.sensor}</td>
        <td><Badge color={getBadge(device.auth)}>{device.auth}</Badge></td>
      </tr>
    )
  }

  render() {
    return (
      <div className="animated fadeIn">

            {/*            <div className="row ">
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
            </div>*/}

            <Form action="" method="post">
              <Modal isOpen={this.state.modalOpen} toggle={this.setModal}
                     className={'modal-primary ' + this.props.className}>
                <ModalHeader toggle={this.setModal}>Modify values</ModalHeader>

                {this.deviceSetter(this.state.sensor)}

                <ModalFooter>
                  <Button type="submit" color="primary" onClick={this.onSubmit}>Save</Button>{' '}
                  <Button color="secondary" onClick={this.setModal}>Cancel</Button>
                </ModalFooter>
              </Modal>
            </Form>

        <Row>
          <Col className="col-md-6 offset-md-3">
            <Card>
              <CardHeader>
                <Row className="align-items-center">
                  <Col col="10" xl className="mb-3 mb-xl-0">
                    <i className="fa fa-align-justify"/> <strong> DEVICES CONTROLLER</strong>
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
                  </tr>
                  </thead>
                  <tbody>
                  {deviceData.map((device) =>
                    //<UserRow key={index} device={device} change={this.handleDropChange}/>
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

export default Controller;
