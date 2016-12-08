import React, { Component } from 'react'
import { Link } from 'react-router'
import Navbar from 'react-bootstrap/lib/Navbar'
import Nav from 'react-bootstrap/lib/Nav'
import NavItem from 'react-bootstrap/lib/NavItem'
import NavDropdown from 'react-bootstrap/lib/NavDropdown'
import MenuItem from 'react-bootstrap/lib/MenuItem'
import './header.less'

export default class header extends Component {
	constructor(props) {
		super(props);
		
	}
	render() {
		return (
		  <Navbar collapseOnSelect>
		    <Navbar.Header>
		      <Navbar.Brand>
		        <a href="#" className="logo">LOGO</a>
		      </Navbar.Brand>
		      <Navbar.Toggle />
		    </Navbar.Header>
		    <Navbar.Collapse>
		      <Nav pullRight>
		      	<li role="presentation" class><Link role="button" to="/subpage/cyprus">CYPRUS</Link></li>
		      	<li role="presentation" class><Link role="button" to="/properties">PROPERTIES</Link></li>
		        <li role="presentation" class=""><Link role="button" to="/subpage/Buying Process">BUYING PROCESS</Link></li>
		        <li role="presentation" class=""><Link role="button" to="/subpage/financing">FINANCING</Link></li>
		        <li role="presentation" class=""><Link role="button" to="/subpage/PERMANENT RESIDENCY">PERMANENT RESIDENCY</Link></li>
		        <li role="presentation" class=""><Link role="button" to="/subpage/PASSPORT PROGRAM">PASSPORT PROGRAM</Link></li>
		        <li role="presentation" class=""><Link role="button" to="/subpage/KARMA">KARMA</Link></li>
		        <li role="presentation" class=""><Link role="button" to="/contact">CONTACT</Link></li>
		      </Nav>
		    </Navbar.Collapse>
		  </Navbar>
		)
	}
}