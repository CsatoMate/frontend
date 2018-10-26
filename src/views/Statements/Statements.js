import React, {Component} from 'react';
import Highcharts from 'highcharts/highstock';
import {
  HighchartsStockChart, Chart, withHighcharts, XAxis, YAxis, Title, Legend,
  AreaSplineSeries, RangeSelector, Tooltip
} from 'react-jsx-highstock';
import deviceData from "./DeviceData";


import {
  ButtonDropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem,
} from 'reactstrap';

import deviceList from "./DeviceList";

function makeData(deviceName) {
  const data = [];
  let log = deviceData;

  if (deviceName !== "") {
    log = deviceData.filter((item) => item.name === deviceName);
    log.map(item => {
      data.push([new Date(item.update).getTime(), item.value]);
    });
    return data;
  }

  return null;
}

class Charts extends Component {

  constructor(props) {
    super(props);
    this.state = {
      data2: makeData(""),
      dropdownOpen: false,
      active_dropdown: "Devices dropdown",
      unitType: "",
      measureName: " ",
    };
    this.deviceList = deviceList;
    this.toggle = this.toggle.bind(this);
  }

  toggle() {
    this.setState(prevState => ({
      dropdownOpen: !prevState.dropdownOpen
    }));
  }

  handleChange(e) {
    console.log("Target: ", e.target);
    let selected = this.getUnitType(e.target.value);

    this.setState({
      active_dropdown: e.target.name,
      data2: makeData(e.target.name),
      unitType: selected.unitType,
      measureName: selected.measureName,
    })
  }

  getUnitType(id) {
      let item = this.deviceList.filter((devID) => devID.id.toString() === id);
      console.log(id, item);
      return item[0];
  }

  render() {
    return (
      <div>
        <div className="card-header-actions">
          <ButtonDropdown isOpen={this.state.dropdownOpen} toggle={this.toggle}>
            <DropdownToggle caret onChange={this.handleChange.bind(this)}>
              Select Device
            </DropdownToggle>
            <DropdownMenu right>
              {this.deviceList.map((device) =>
                <DropdownItem onClick={this.handleChange.bind(this)} key={device.id}
                              value={device.id} name={device.name}>{device.name}</DropdownItem>
              )}
            </DropdownMenu>
          </ButtonDropdown>
        </div>
        <HighchartsStockChart>
          <Chart zoomType="x"/>

          <Title>Statements Chart</Title>

          <Legend>
            <Legend.Title>Legend</Legend.Title>
          </Legend>

          <RangeSelector>
            <RangeSelector.Button count={1} type="day">Day</RangeSelector.Button>
            <RangeSelector.Button count={7} type="day">Week</RangeSelector.Button>
            <RangeSelector.Button count={1} type="month">Month</RangeSelector.Button>
            <RangeSelector.Button type="all">All</RangeSelector.Button>
            <RangeSelector.Input boxBorderColor="#7cb5ec"/>
          </RangeSelector>

          <Tooltip/>

          <XAxis>
            <XAxis.Title>Time</XAxis.Title>
          </XAxis>

          <YAxis>
            <YAxis.Title rotation={0}>{this.state.unitType}</YAxis.Title>
            <AreaSplineSeries id="measure" name={this.state.measureName} data={this.state.data2}/>
          </YAxis>
        </HighchartsStockChart>

      </div>
    );
  }
}

export default withHighcharts(Charts, Highcharts);


/*
import React, {Component} from 'react';
import {Line} from 'react-chartjs-2';
import {
  Card,
  CardBody,
  CardColumns,
  CardHeader,
  ButtonDropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem,
} from 'reactstrap';
import {CustomTooltips} from '@coreui/coreui-plugin-chartjs-custom-tooltips';

import deviceList from "./DeviceList";

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
      dropdownOpen: false,
      active_dropdown: "Devices dropdown",
      line: {
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
      }
    };
    this.deviceList = deviceList;
  }

  toggle() {
    this.setState(prevState => ({
      dropdownOpen: !prevState.dropdownOpen
    }));
  }

  setHandleType(e) {
    console.log(e.target);
    this.setState({
        active_dropdown: e.target.name,
        line: {
          labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August'],
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
              data: [165, 59, 180, 81, 156, 55, 140, 3],
            },
          ],
        }
      }
    )
  }

  render() {
    return (
      <div className="animated fadeIn">
        <CardColumns className="cols-2" style={{"columnCount": "1"}}>
          <Card>
            <CardHeader>
              <i className="icon-speedometer"/>

              Temperature Line Chart
              <div className="card-header-actions">
                <ButtonDropdown isOpen={this.state.dropdownOpen} toggle={this.toggle}>
                  <DropdownToggle caret onChange={this.setHandleType.bind(this)}>
                    {this.state.active_dropdown}
                  </DropdownToggle>
                  <DropdownMenu right>
                    {this.deviceList.map((device) =>
                      <DropdownItem onClick={this.setHandleType.bind(this)} key={device.id}
                                    value={device.id} name={device.name}>{device.name}</DropdownItem>
                    )}
                  </DropdownMenu>
                </ButtonDropdown>
              </div>
              <br/>
            </CardHeader>
            <CardBody>
              <div className="chart-wrapper">
                <Line data={this.state.line} options={options}/>
              </div>
            </CardBody>
          </Card>
        </CardColumns>
      </div>
    );
  }
}

export default Charts;
*/
