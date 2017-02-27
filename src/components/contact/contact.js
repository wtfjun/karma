import React, { Component } from 'react'
import Grid from 'react-bootstrap/lib/Grid'
import Row from 'react-bootstrap/lib/Row'
import Col from 'react-bootstrap/lib/Col'
import Form from 'react-bootstrap/lib/Form'
import FormGroup from 'react-bootstrap/lib/FormGroup'
import FormControl from 'react-bootstrap/lib/FormControl'
import Button from 'react-bootstrap/lib/Button'
import ControlLabel from 'react-bootstrap/lib/ControlLabel'
import Checkbox from 'react-bootstrap/lib/Checkbox'
import $ from 'jquery'
import { CONFIG } from '../../config'

import TopImg from '../SubPage/top-img.jpg'
import './contact.less'
export default class contact extends Component {
	constructor(props) {
		super(props);
	}

	sendMessageAction() {
		$('#name').siblings('span').html('')
		$('#email').siblings('span').html('')
		$('#subject').siblings('span').html('')
		$('#message').siblings('span').html('')
		let name = $('#name').val()
		let email = $('#email').val()
		let subject = $('#subject').val()
		let message = $('#message').val()
		if(name.length <= 0 ){
			$('#name').siblings('span').html('The field is required.')
			return
		}
		if(email.length <= 0 ){
			$('#email').siblings('span').html('The field is required.')
			return
		}
		if(!(email.search(/^\w+((-\w+)|(\.\w+))*\@[A-Za-z0-9]+((\.|-)[A-Za-z0-9]+)*\.[A-Za-z0-9]+$/) != -1)) {
			$('#email').siblings('span').html('The e-mail address entered is invalid.')
			return
		}
		if(subject.length <= 0 ){
			$('#subject').siblings('span').html('The field is required.')
			return
		}
		if(message.length <= 0 ){
			$('#message').siblings('span').html('The field is required.')
			return
		}
		$.ajax({
			url: CONFIG.server+'/api/message',
			dataType: 'jsonp',
			data: {
				name: name,
				email: email,
				subject: subject,
				message: message
			},
		})
		.done(function(data) {
			if(data.status=='success') {
				$('#submit').siblings('span').html(data.status)
				$('#name').val('')
				$('#email').val('')
				$('#subject').val('')
				$('#message').val('')
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
		return (
			<div className="contact-page">
				<div className="top-img-cont">
					<img src={TopImg} />
				</div>
				<Grid className="content">
					<Row>
						<Col md={6} xs={12}>
							<br />
							<Form horizontal>
						    <FormGroup controlId="formHorizontalName">
						      <Col componentClass={ControlLabel} sm={4}>
						        Your Name
						      </Col>
						      <Col sm={8}>
						        <FormControl type="text" placeholder="name" id="name" />
						        <span style={{color: 'red', fontSize: '12px'}}></span>
						      </Col>
						    </FormGroup>

						    <FormGroup controlId="formHorizontalEmail">
						      <Col componentClass={ControlLabel} sm={4}>
						        Your Email
						      </Col>
						      <Col sm={8}>
						        <FormControl type="email" placeholder="email" id="email" />
						        <span style={{color: 'red', fontSize: '12px'}}></span>
						      </Col>
						    </FormGroup>

						    <FormGroup controlId="formHorizontalSubject">
						      <Col componentClass={ControlLabel} sm={4}>
						        Subject
						      </Col>
						      <Col sm={8}>
						        <FormControl type="text" placeholder="subject" id="subject" />
						        <span style={{color: 'red', fontSize: '12px'}}></span>
						      </Col>
						    </FormGroup>

						    <FormGroup controlId="formHorizontalMessage">
						      <Col componentClass={ControlLabel} sm={4}>
						        Your Message
						      </Col>
						      <Col sm={8}>
						      	<FormControl id="message" componentClass="textarea" placeholder="message" rows={10} />
						      	<span style={{color: 'red', fontSize: '12px'}}></span>
						      </Col>
						    </FormGroup>

						    <FormGroup>
						      <Col smOffset={4} sm={8}>
						        <Button id="submit" onClick={this.sendMessageAction} style={{ width: '100%' }}>
						          Send
						        </Button>
						        <span style={{ fontSize: '12px'}}></span>
						      </Col>
						    </FormGroup>
						  </Form>
						</Col>

						<Col md={6} xs={12}>
							<h1>联系我们</h1>

							<p>Karma Developers，我们努力提供一个专业和个性化的服务，以满足每一位客户的要求和期望。我们经验丰富的销售团队会在这里听取您的需求和建议。我们建立持久的客户关系的同时，努力助力每位客户寻找梦想家园。</p>


							<p>
								如您需要更详尽的信息或对我们的项目有任何疑问，欢迎发送电子邮件给我们，我们会据您的需求给予细致的解答。

								<hr style={{ borderColor: '#C2C2C2'}} />
							</p>

							<p>
								Karma Developers<br />
								客服热线：+86-18344026268<br />
								客服邮箱：info@karma-hk.com<br /><br />
								English-language：<a href="http://karmadevelopers.com/">http://karmadevelopers.com/</a>
<br />
							
							</p>
						</Col>
					</Row>
				</Grid>
			</div>
		)
	}
}