import React, { Component } from 'react';
import { /*Badge,*/ DropdownItem, DropdownMenu, DropdownToggle, Nav, NavItem, NavLink } from 'reactstrap';
import PropTypes from 'prop-types';

import { /*AppAsideToggler*/ AppHeaderDropdown, AppNavbarBrand, AppSidebarToggler } from '@coreui/react';
//import logo from '../../assets/img/brand/logo.svg'
//import sygnet from '../../assets/img/brand/sygnet.svg'
import IOT from '../../assets/img/brand/IOT.png';

const propTypes = {
  children: PropTypes.node,
};

const defaultProps = {};

class DefaultHeader extends Component {
  render() {

    // eslint-disable-next-line
    const { children, ...attributes } = this.props;

    return (
      <React.Fragment>
        <AppSidebarToggler className="d-lg-none" display="md" mobile />
        <AppNavbarBrand
          full={{ src: IOT, width: 80, height: 40, alt: 'IOT Logo', }}
          minimized={{ src: IOT, width: 40, height: 20, alt: 'IOT Logo' }}
        />
        <AppSidebarToggler className="d-md-down-none" display="lg" />

        <Nav className="d-md-down-none" navbar>
          <NavItem className="px-3">
            <NavLink href="/">Dashboard</NavLink>
          </NavItem>
          <NavItem className="px-3">
            <NavLink href="#/users">Users</NavLink>
          </NavItem>
{/*          <NavItem className="px-3">
            <NavLink href="#">Settings</NavLink>
          </NavItem>*/}
        </Nav>
        <Nav className="ml-auto" navbar>
{/*          <NavItem className="d-md-down-none">
            <NavLink href="#"><i className="icon-bell"></i><Badge pill color="danger">5</Badge></NavLink>
          </NavItem>
          <NavItem className="d-md-down-none">
            <NavLink href="#"><i className="icon-list"></i></NavLink>
          </NavItem>
          <NavItem className="d-md-down-none">
            <NavLink href="#"><i className="icon-location-pin"></i></NavLink>
          </NavItem>*/}
          <AppHeaderDropdown direction="down">
            <DropdownToggle nav >

              <i className="icon-user" style={{"fontSize":"2rem"}}/>

              {/*<i className="fa fa-user-o fa-2x mt-4" />*/}
            </DropdownToggle>
            <DropdownMenu right style={{ right: 'auto' }}>
              <DropdownItem header tag="div" className="text-center"><strong>Settings</strong></DropdownItem>
              <DropdownItem><i className="fa fa-wrench"/> Settings</DropdownItem>
              <DropdownItem><i className="fa fa-lock"/> Logout</DropdownItem>
            </DropdownMenu>
          </AppHeaderDropdown>
        </Nav>
        {/*<AppAsideToggler className="d-md-down-none" />*/}
        {/*<AppAsideToggler className="d-lg-none" mobile />*/}
      </React.Fragment>
    );
  }
}

DefaultHeader.propTypes = propTypes;
DefaultHeader.defaultProps = defaultProps;

export default DefaultHeader;
