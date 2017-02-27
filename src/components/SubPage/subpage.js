import React, { Component } from 'react'
import $ from 'jquery'
import Grid from 'react-bootstrap/lib/Grid'
import { CONFIG } from '../../config.js'

import TopImg from './top-img.jpg'
import './subpage.less'
export default class subpage extends Component {
	constructor(props) {
		super(props);
		this.state = {}
	}

	getSubPage() {
		let title = this.props.params.title

		$.ajax({
			url: CONFIG.server+'/api/subpage',
			dataType: 'jsonp',
			data: {
				callback: '?',
				title: title
			},
		})
		.done(function(data) {
			console.log(data);
			$('.content').html(data.subpage.content)
		})
		.fail(function() {
			console.log("error");
		})
		.always(function() {
			console.log("complete");
		});
		
	}

	componentDidUpdate(prevProps, prevState) {
		if(prevProps.params.title != this.props.params.title) {
			this.getSubPage()
		}
	}

	componentDidMount() {
		this.getSubPage()
	}

	render() {
		return(
			<div className="sub-page">
				<div className="top-img-cont">
					<img src={TopImg} />
				</div>
				<Grid className="content">

				</Grid>
			</div>
		)
	}
}