import React, { Component } from 'react'
import $ from 'jquery'
import {Link} from 'react-router'
import Grid from 'react-bootstrap/lib/Grid'
import Row from 'react-bootstrap/lib/Row'
import Col from 'react-bootstrap/lib/Col'

import TopImg from '../SubPage/top-img.jpg'
import './properties.less'
export default class subpage extends Component {
	constructor(props) {
		super(props);
		this.state = {
			projects: []
		}
	}

	componentDidMount() {
		let that = this
		$.ajax({
			url: 'http://121.42.204.70:3000/api/allProjects?callback=?',
			dataType: 'jsonp',
		})
		.done(function(data) {
			if(data.status == 'success') {
				that.setState({
					projects: data.projects
				})
			}
		})
		.fail(function() {
			console.log("error");
		})
		.always(function() {
			console.log("complete");
		});
		
	}

	render() {
		return(
			<div className="properties-page">
				<div className="top-img-cont">
					<img src={TopImg} />
				</div>
				{this.state.projects.map((project) =>
				<Grid className="content">
					<Row>
						<Col md={4}>
              <div className="image-wrapper">
                <Link to={"/properties/"+project.name}>
                  <img src={"http://121.42.204.70:3000"+project.imgs[0]} />
                </Link>
              </div>
						</Col>
						<Col md={8}>
							<h3>{project.name}</h3>
							<p>{project.intro.slice(0,350)}<a className="read-more">...read more</a></p>
						</Col>
					</Row>
				</Grid>
				)}
			</div>
		)
	}
}