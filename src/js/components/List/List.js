import React, { Component } from 'react'
import $ from 'jquery' 
import './List.less'
export default class List extends Component {
	constructor(props) {
		super(props)
		this.state = {
			lists: []
		}
	}

	//当即将接收到父组件传来的props时触发，此时nextProps为即将替换的props
	componentWillReceiveProps(nextProps) {
		var that = this
		console.log('List 组件的 componentWillReceiveProps 的 nextProps.listTitle：' + nextProps.listTitle)
		if(nextProps.listTitle != '') {
			$.ajax({
				url: './data.json',
				type: 'GET',
				dataType: 'json'
			})
			.done(function(data) {
				console.log("success")
				that.setState({
					lists: data.articles
				})
			})
			.fail(function() {
				console.log("error")
			})
			.always(function() {
				console.log("complete")
			})
		}
		else {
			that.setState({
				lists: []
			})
		}
	}
		
	

	render() {
		let list = this.state.lists.map(function(e, i) {
			return <li key={i}>{e.title}</li>;
		})

		return(
			<div id="list">
				<p className="list-title">{this.props.listTitle}</p>
				<ul className="list-ul">
					{list}
				</ul>
			</div>
		)
	}
}