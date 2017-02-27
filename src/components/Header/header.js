import React, { Component } from 'react'
import { Link } from 'react-router'
import Navbar from 'react-bootstrap/lib/Navbar'
import Nav from 'react-bootstrap/lib/Nav'
import NavItem from 'react-bootstrap/lib/NavItem'
import NavDropdown from 'react-bootstrap/lib/NavDropdown'
import MenuItem from 'react-bootstrap/lib/MenuItem'
import './header.less'
import LOGO from '../../img/logo.png'

export default class header extends Component {
	constructor(props) {
		super(props);
		
	}
	render() {
		return (
		  <Navbar collapseOnSelect>
		    <Navbar.Header>
		      <Navbar.Brand>
		        <a href="#" className="logo">
		        <img src={LOGO} /></a>
		      </Navbar.Brand>
		      <Navbar.Toggle className="mb-btn" />
		    </Navbar.Header>
		    <Navbar.Collapse>
		      <Nav pullRight>
		      	<li role="presentation" class><Link role="button" to="/subpage/cyprus">塞浦路斯</Link></li>
		      	<li role="presentation" class><Link role="button" to="/properties">房地产</Link></li>
		        <li role="presentation" class=""><Link role="button" to="/subpage/Buying Process">购买流程</Link></li>
		        <li role="presentation" class=""><Link role="button" to="/subpage/PERMANENT RESIDENCY">永久居留权</Link></li>
		        <li role="presentation" class=""><Link role="button" to="/subpage/PASSPORT PROGRAM">护照计划</Link></li>
		        <li role="presentation" class=""><Link role="button" to="/subpage/KARMA">KARMA</Link></li>
		        <li role="presentation" class=""><Link role="button" to="/contact">联系方式</Link></li>
		      </Nav>
		    </Navbar.Collapse>
		  </Navbar>
		)
	}
}