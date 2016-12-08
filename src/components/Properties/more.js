import React, { Component } from 'react'
import $ from 'jquery'
import Grid from 'react-bootstrap/lib/Grid'
import Row from 'react-bootstrap/lib/Row'
import Col from 'react-bootstrap/lib/Col'
import Carousel from 'react-bootstrap/lib/Carousel'

import TopImg from '../SubPage/top-img.jpg'
import C from './c.jpg'
import D from './d.jpg'
import './more.less'
export default class subpage extends Component {
	constructor(props) {
		super(props);
		this.state = {
			project: {
				name: '',
				imgs: []
			}
		}
	}

	componentDidMount() {
		let that = this
		$.ajax({
			url: 'http://121.42.204.70:3000/api/project?callback=?',
			dataType: 'jsonp',
			data: {
				name: that.props.params.name
			}
		})
		.done(function(data) {
			if(data.status == 'success') {
				console.log(data)
				that.setState({
					project: data.project
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
			<div className="more-properties-page">
				<div className="top-img-cont">
					<img src={TopImg} />
				</div>
				<Grid className="content">
					<h3>{this.state.project.name}</h3>
					<hr />
					<Carousel>
						{this.state.project.imgs.map((img) =>
				    <Carousel.Item>
				      <img src={"http://121.42.204.70:3000"+img} />
				    </Carousel.Item>
				    )}
				  </Carousel>
					<p>{this.state.project.intro}</p>
					<hr />
				</Grid>
			</div>
		)
	}
}