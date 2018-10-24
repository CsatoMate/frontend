import React, { Component } from 'react';
import Highcharts from 'highcharts/highstock';
import {
  HighchartsStockChart, Chart, withHighcharts, XAxis, YAxis, Title, Legend,
  AreaSplineSeries, SplineSeries, Navigator, RangeSelector, Tooltip
} from 'react-jsx-highstock';
import deviceData from "./DeviceData";


function makeData() {
  const data = [];
  const log = deviceData;
  log.map(item =>{
    data.push( [new Date(item.update).getTime(), item.value]);
  });
  return data;
}

class Charts extends Component {

  constructor (props) {
    super(props);
    this.state = {
      data2: makeData()
    };
  }

  render() {
    const { data2 } = this.state;

    return (
      <div >
        <HighchartsStockChart>
          <Chart zoomType="x"/>

          <Title>Temperature Chart</Title>

          <Legend>
            <Legend.Title>Legend</Legend.Title>
          </Legend>

          <RangeSelector>
            <RangeSelector.Button count={1} type="day">Day</RangeSelector.Button>
            <RangeSelector.Button count={7} type="day">Week</RangeSelector.Button>
            <RangeSelector.Button count={1} type="month">Month</RangeSelector.Button>
            <RangeSelector.Button type="all">All</RangeSelector.Button>
            <RangeSelector.Input boxBorderColor="#7cb5ec" />
          </RangeSelector>

          <Tooltip />

          <XAxis>
            <XAxis.Title>Time</XAxis.Title>
          </XAxis>

{/*          <YAxis>
            <YAxis.Title>Price</YAxis.Title>
            <AreaSplineSeries id="profit" name="Profit" data={data1} />
            <SplineSeries id="temp" name="Temperature" data={data2} />
          </YAxis>*/}

          <YAxis>
            <YAxis.Title rotation={0}>°C</YAxis.Title>
            <AreaSplineSeries id="temp" name="Temperature" data={data2} />
          </YAxis>

          <Navigator>
            {/*<Navigator.Series seriesId="profit" />*/}
            <Navigator.Series seriesId="temp" />
          </Navigator>
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

  handleChange(e) {
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
                  <DropdownToggle caret onChange={this.handleChange.bind(this)}>
                    {this.state.active_dropdown}
                  </DropdownToggle>
                  <DropdownMenu right>
                    {this.deviceList.map((device) =>
                      <DropdownItem onClick={this.handleChange.bind(this)} key={device.id}
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
