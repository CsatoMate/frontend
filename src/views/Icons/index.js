import React, { Component } from 'react';
import { Button, Card, CardBody, CardHeader, Col, Row } from 'reactstrap';

class Buttons extends Component {
  render() {
    return (
      <div className="animated fadeIn">
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
              <Col col="6" sm="4" md="2" xl className="mb-3 mb-xl-0"></Col>
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
              <Col col="6" sm="4" md="2" xl className="mb-3 mb-xl-0"></Col>
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
              <Col col="6" sm="4" md="2" xl className="mb-3 mb-xl-0"></Col>
            </Row>
          </CardBody>
        </Card>
        <Card>
          <CardHeader>
            <strong>Ghost Buttons</strong>
          </CardHeader>
          <CardBody>
            <p>
              Use
              <code>.btn-ghost-*</code> class for ghost buttons.
            </p>
            <Row className="align-items-center">
              <Col col="12" xl className="mb-3 mb-xl-0">
                Normal
              </Col>
              <Col col="6" sm="4" md="2" xl className="mb-3 mb-xl-0">
                <Button block color="ghost-primary">Primary</Button>
              </Col>
              <Col col="6" sm="4" md="2" xl className="mb-3 mb-xl-0">
                <Button block color="ghost-secondary">Secondary</Button>
              </Col>
              <Col col="6" sm="4" md="2" xl className="mb-3 mb-xl-0">
                <Button block color="ghost-success">Success</Button>
              </Col>
              <Col col="6" sm="4" md="2" xl className="mb-3 mb-xl-0">
                <Button block color="ghost-warning">Warning</Button>
              </Col>
              <Col col="6" sm="4" md="2" xl className="mb-3 mb-xl-0">
                <Button block color="ghost-danger">Danger</Button>
              </Col>
              <Col col="6" sm="4" md="2" xl className="mb-3 mb-xl-0">
                <Button block color="ghost-info">Info</Button>
              </Col>
              <Col col="6" sm="4" md="2" xl className="mb-3 mb-xl-0">
                <Button block color="ghost-light">Light</Button>
              </Col>
              <Col col="6" sm="4" md="2" xl className="mb-3 mb-xl-0">
                <Button block color="ghost-dark">Dark</Button>
              </Col>
              <Col col="6" sm="4" md="2" xl className="mb-3 mb-xl-0"></Col>
            </Row>
            <Row className="align-items-center mt-3">
              <Col col="12" xl className="mb-3 mb-xl-0">
                Active State
              </Col>
              <Col col="6" sm="4" md="2" xl className="mb-3 mb-xl-0">
                <Button block active color="ghost-primary" aria-pressed="true">Primary</Button>
              </Col>
              <Col col="6" sm="4" md="2" xl className="mb-3 mb-xl-0">
                <Button block active color="ghost-secondary" aria-pressed="true">Secondary</Button>
              </Col>
              <Col col="6" sm="4" md="2" xl className="mb-3 mb-xl-0">
                <Button block active color="ghost-success" aria-pressed="true">Success</Button>
              </Col>
              <Col col="6" sm="4" md="2" xl className="mb-3 mb-xl-0">
                <Button block active color="ghost-warning" aria-pressed="true">Warning</Button>
              </Col>
              <Col col="6" sm="4" md="2" xl className="mb-3 mb-xl-0">
                <Button block active color="ghost-danger" aria-pressed="true">Danger</Button>
              </Col>
              <Col col="6" sm="4" md="2" xl className="mb-3 mb-xl-0">
                <Button block active color="ghost-info" aria-pressed="true">Info</Button>
              </Col>
              <Col col="6" sm="4" md="2" xl className="mb-3 mb-xl-0">
                <Button block active color="ghost-light" aria-pressed="true">Light</Button>
              </Col>
              <Col col="6" sm="4" md="2" xl className="mb-3 mb-xl-0">
                <Button block active color="ghost-dark" aria-pressed="true">Dark</Button>
              </Col>
              <Col col="6" sm="4" md="2" xl className="mb-3 mb-xl-0"></Col>
            </Row>
            <Row className="align-items-center mt-3">
              <Col col="12" xl className="mb-3 mb-xl-0">
                Disabled
              </Col>
              <Col col="6" sm="4" md="2" xl className="mb-3 mb-xl-0">
                <Button block color="ghost-primary" disabled>Primary</Button>
              </Col>
              <Col col="6" sm="4" md="2" xl className="mb-3 mb-xl-0">
                <Button block color="ghost-secondary" disabled>Secondary</Button>
              </Col>
              <Col col="6" sm="4" md="2" xl className="mb-3 mb-xl-0">
                <Button block color="ghost-success" disabled>Success</Button>
              </Col>
              <Col col="6" sm="4" md="2" xl className="mb-3 mb-xl-0">
                <Button block color="ghost-warning" disabled>Warning</Button>
              </Col>
              <Col col="6" sm="4" md="2" xl className="mb-3 mb-xl-0">
                <Button block color="ghost-danger" disabled>Danger</Button>
              </Col>
              <Col col="6" sm="4" md="2" xl className="mb-3 mb-xl-0">
                <Button block color="ghost-info" disabled>Info</Button>
              </Col>
              <Col col="6" sm="4" md="2" xl className="mb-3 mb-xl-0">
                <Button block color="ghost-light" disabled>Light</Button>
              </Col>
              <Col col="6" sm="4" md="2" xl className="mb-3 mb-xl-0">
                <Button block color="ghost-dark" disabled>Dark</Button>
              </Col>
              <Col col="6" sm="4" md="2" xl className="mb-3 mb-xl-0"></Col>
            </Row>
          </CardBody>
        </Card>
        <Card>
          <CardHeader>
            <strong>Square Buttons</strong>
          </CardHeader>
          <CardBody>
            <p>
              Use
              <code>.btn-square</code> class for square buttons.
            </p>
            <Row className="align-items-center">
              <Col col="12" xl className="mb-3 mb-xl-0">
                Normal
              </Col>
              <Col col="6" sm="4" md="2" xl className="mb-3 mb-xl-0">
                <Button block color="primary" className="btn-square">Primary</Button>
              </Col>
              <Col col="6" sm="4" md="2" xl className="mb-3 mb-xl-0">
                <Button block color="secondary" className="btn-square">Secondary</Button>
              </Col>
              <Col col="6" sm="4" md="2" xl className="mb-3 mb-xl-0">
                <Button block color="success" className="btn-square">Success</Button>
              </Col>
              <Col col="6" sm="4" md="2" xl className="mb-3 mb-xl-0">
                <Button block color="warning" className="btn-square">Warning</Button>
              </Col>
              <Col col="6" sm="4" md="2" xl className="mb-3 mb-xl-0">
                <Button block color="danger" className="btn-square">Danger</Button>
              </Col>
              <Col col="6" sm="4" md="2" xl className="mb-3 mb-xl-0">
                <Button block color="info" className="btn-square">Info</Button>
              </Col>
              <Col col="6" sm="4" md="2" xl className="mb-3 mb-xl-0">
                <Button block color="light" className="btn-square">Light</Button>
              </Col>
              <Col col="6" sm="4" md="2" xl className="mb-3 mb-xl-0">
                <Button block color="dark" className="btn-square">Dark</Button>
              </Col>
              <Col col="6" sm="4" md="2" xl className="mb-3 mb-xl-0">
                <Button block color="link" className="btn-square">Link</Button>
              </Col>
            </Row>
            <Row className="align-items-center mt-3">
              <Col col="12" xl className="mb-3 mb-xl-0">
                Active State
              </Col>
              <Col col="6" sm="4" md="2" xl className="mb-3 mb-xl-0">
                <Button active block color="primary" className="btn-square" aria-pressed="true">Primary</Button>
              </Col>
              <Col col="6" sm="4" md="2" xl className="mb-3 mb-xl-0">
                <Button active block color="secondary" className="btn-square" aria-pressed="true">Secondary</Button>
              </Col>
              <Col col="6" sm="4" md="2" xl className="mb-3 mb-xl-0">
                <Button active block color="success" className="btn-square" aria-pressed="true">Success</Button>
              </Col>
              <Col col="6" sm="4" md="2" xl className="mb-3 mb-xl-0">
                <Button active block color="warning" className="btn-square" aria-pressed="true">Warning</Button>
              </Col>
              <Col col="6" sm="4" md="2" xl className="mb-3 mb-xl-0">
                <Button active block color="danger" className="btn-square" aria-pressed="true">Danger</Button>
              </Col>
              <Col col="6" sm="4" md="2" xl className="mb-3 mb-xl-0">
                <Button active block color="info" className="btn-square" aria-pressed="true">Info</Button>
              </Col>
              <Col col="6" sm="4" md="2" xl className="mb-3 mb-xl-0">
                <Button active block color="light" className="btn-square" aria-pressed="true">Light</Button>
              </Col>
              <Col col="6" sm="4" md="2" xl className="mb-3 mb-xl-0">
                <Button active block color="dark" className="btn-square" aria-pressed="true">Dark</Button>
              </Col>
              <Col col="6" sm="4" md="2" xl className="mb-3 mb-xl-0">
                <Button active block color="link" className="btn-square" aria-pressed="true">Link</Button>
              </Col>
            </Row>
            <Row className="align-items-center mt-3">
              <Col col="12" xl className="mb-3 mb-xl-0">
                Disabled
              </Col>
              <Col col="6" sm="4" md="2" xl className="mb-3 mb-xl-0">
                <Button block color="primary" className="btn-square" disabled>Primary</Button>
              </Col>
              <Col col="6" sm="4" md="2" xl className="mb-3 mb-xl-0">
                <Button block color="secondary" className="btn-square" disabled>Secondary</Button>
              </Col>
              <Col col="6" sm="4" md="2" xl className="mb-3 mb-xl-0">
                <Button block color="success" className="btn-square" disabled>Success</Button>
              </Col>
              <Col col="6" sm="4" md="2" xl className="mb-3 mb-xl-0">
                <Button block color="warning" className="btn-square" disabled>Warning</Button>
              </Col>
              <Col col="6" sm="4" md="2" xl className="mb-3 mb-xl-0">
                <Button block color="danger" className="btn-square" disabled>Danger</Button>
              </Col>
              <Col col="6" sm="4" md="2" xl className="mb-3 mb-xl-0">
                <Button block color="info" className="btn-square" disabled>Info</Button>
              </Col>
              <Col col="6" sm="4" md="2" xl className="mb-3 mb-xl-0">
                <Button block color="light" className="btn-square" disabled>Light</Button>
              </Col>
              <Col col="6" sm="4" md="2" xl className="mb-3 mb-xl-0">
                <Button block color="dark" className="btn-square" disabled>Dark</Button>
              </Col>
              <Col col="6" sm="4" md="2" xl className="mb-3 mb-xl-0">
                <Button block color="link" className="btn-square" disabled>Link</Button>
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
                <Button outline color="secondary" >Outline Button</Button>
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












/*
import CoreUIIcons from './CoreUIIcons';
import Flags from './Flags';
import FontAwesome from './FontAwesome';
import SimpleLineIcons from './SimpleLineIcons';

export {
  CoreUIIcons, Flags, FontAwesome, SimpleLineIcons
};
*/
