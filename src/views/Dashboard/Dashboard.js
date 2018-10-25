import React, {Component} from 'react';
import {
  Card,
  CardBody,
  Col,
  Row,
/*  Badge,
  Button,
  ButtonDropdown,
  ButtonGroup,
  ButtonToolbar,
  CardFooter,
  CardHeader,
  CardTitle,
  Dropdown,
  DropdownItem,
  DropdownMenu,
  DropdownToggle,
  Progress,
  Table,*/
} from 'reactstrap';
import {AppSwitch} from "@coreui/react";
import DashboardData from "./DashboardData";


class DeviceTile extends Component {

  device;
  constructor(props) {
    super();
    this.state = {
        chkbox: props.device.power ==="ON", //Check
        color: this.getColor(props.device.unitType)
    };
    this.device = props.device;
  }

  /**
   * Set tile background color
   * @param type
   * @returns {string}
   */
  getColor(type) {
    return type === "°C" ? "text-white bg-info" :
      type === "A" ? "text-white bg-danger" : "text-white bg-warning"
  }

  /**
   * Button switch ON/OFF, update DB record
   * @param device
   */
  setDeviceAuth(device) {
    console.log(device);
  }

  render() {
    return (
      <Col xs="12" sm="8" lg="2">
        <Card className={this.state.color} >
          <CardBody>
            <div className="row justify-content-center">
              <div className="text-value">{this.device.name}</div>
            </div>
            <div className="row justify-content-around">
              <div className="col-6">
                <AppSwitch className={'mx-1 switch-lg'} variant={'pill'} color={'success'} outline={'alt'} label
                           defaultChecked={this.state.chkbox} onChange={this.setDeviceAuth.bind(this, this.device)}/>
              </div>
              <div className="text-value col-6">{this.device.value} {this.device.unitType}</div>
            </div>
          </CardBody>
          <div className="row align-self-center">
            {this.device.update}
          </div>
        </Card>
      </Col>
    )
  }
}

class Dashboard extends Component {
  render() {
    const deviceList = DashboardData.filter((device) => device.auth === "ENABLED");
    return (
      <div className="animated fadeIn">
        <Row>
          {deviceList.map((device, index) =>
            <DeviceTile key={index} device={device}/>
          )}
        </Row>
      </div>
    );
  }
}

export default Dashboard;
