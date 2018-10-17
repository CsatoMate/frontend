import React, { Component } from 'react';
import { Line } from 'react-chartjs-2';
import { Card, CardBody, CardColumns, CardHeader, ButtonDropdown, DropdownToggle, DropdownMenu, DropdownItem, Badge, Col, Row, Button, Table} from 'reactstrap';
import { CustomTooltips } from '@coreui/coreui-plugin-chartjs-custom-tooltips';

import deviceData from "../Devices/DeviceData";


function UserRow(props) {
  const device = props.device;

  const getBadge = (status) => {
    return status === 'ON' ? 'success' :
      status === 'OFF' ? 'secondary' : 'primary'
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
const line = {
  labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July'],
  datasets: [
    {
      label: 'Temperature',
      fill: false,
      lineTension: 0.1,
      backgroundColor: 'rgba(75,192,192,0.4)',
      borderColor: 'rgba(75,192,192,1)',
      borderCapStyle: 'butt',
      borderDash: [],
      borderDashOffset: 0.0,
      borderJoinStyle: 'miter',
      pointBorderColor: 'rgba(75,192,192,1)',
      pointBackgroundColor: '#fff',
      pointBorderWidth: 1,
      pointHoverRadius: 5,
      pointHoverBackgroundColor: 'rgba(75,192,192,1)',
      pointHoverBorderColor: 'rgba(220,220,220,1)',
      pointHoverBorderWidth: 2,
      pointRadius: 3,
      pointHitRadius: 10,
      data: [65, 59, 80, 81, 56, 55, 40],
    },
  ],
};



const options = {
  tooltips: {
    enabled: false,
    custom: CustomTooltips
  },
  maintainAspectRatio: false
};

class Charts extends Component {

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
        <CardColumns className="cols-2">
          <Card>
            <CardHeader>
              <i className="icon-speedometer"/>

              Temperature Line Chart
              <div className="card-header-actions">
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
              <br/>
            </CardHeader>
            <CardBody>
              <div className="chart-wrapper">
                <Line data={line} options={options} />
              </div>
            </CardBody>
          </Card>


        {/*<Col xl={6}>*/}
          <Card >
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
        {/*</Col>*/}
        </CardColumns>
      </div>
    );
  }
}

export default Charts;
