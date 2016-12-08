import React, { Component } from 'react'
import $ from 'jquery'
import Carousel from 'react-bootstrap/lib/Carousel'
import Grid from 'react-bootstrap/lib/Grid'
import Row from 'react-bootstrap/lib/Row'
import Col from 'react-bootstrap/lib/Col'

import './home.less'
import HomeCarouselImg1 from '../../img/home.jpg'
import HomeCarouselImg2 from '../../img/home2.jpg'
import HomeCarouselImg3 from '../../img/home3.jpg'
import Fp1 from '../../img/fp1.jpg'
import Fp2 from '../../img/fp2.jpg'
import Fp3 from '../../img/fp3.jpg'
import Fp4 from '../../img/fp4.jpg'
import Infor1 from '../../img/infor1.png'
import Infor2 from '../../img/infor2.png'
import Infor3 from '../../img/infor3.png'
import Man1 from '../../img/man1.png'
import Man2 from '../../img/man2.png'
import Man3 from '../../img/man3.png'
export default class header extends Component {
	constructor(props) {
		super(props);
		this.state = {
			projects: []
		}
	}

	componentDidMount() {
		let that = this
		$.ajax({
			url: 'http://localhost:3000/api/fourProjects?callback=?',
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
		return (
			<div>
			  <Carousel controls={false}>
			    <Carousel.Item>
			      <img src={HomeCarouselImg1}/>
			      <Carousel.Caption>
			        {/*<h3>First slide label</h3>
			        <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>*/}
			      </Carousel.Caption>
			    </Carousel.Item>
			    <Carousel.Item>
			      <img src={HomeCarouselImg2}/>
			    </Carousel.Item>
			    <Carousel.Item>
			      <img src={HomeCarouselImg3}/>
			    </Carousel.Item>
			  </Carousel>
			  <section className="featured-projects">
			  	<Grid>
				    <Row className="show-grid">
				      <Col md={12}><h2 className="header-spacer text-center">Featured Projects</h2></Col>
				      {this.state.projects.map((project) => 
				      <Col md={6} className="featured-item">
				      	<img src={'http://localhost:3000'+project.imgs[0]} />
				      	<h4>
				      		<a href="">{project.name}</a>
				      	</h4>
				      	<p>
				      		{project.intro.slice(0,350) + '...'}
				      	</p>
				      </Col>
				      )}
				    </Row>
				  </Grid>
			  </section>
			  <aside className="callout">
			  	
			  </aside>
			  <section className="information">
			  	<Grid>
			  		<Col md={12}><h2 className="header-spacer text-center">Information</h2></Col>
			  		<Col md={4}>
			  			<img src={Infor1} />
			  			<h4 className="text-center">About Cyprus</h4>
			  		</Col>
			  		<Col md={4}>
			  			<img src={Infor2} />
			  			<h4 className="text-center">Financing</h4>
			  		</Col>
			  		<Col md={4}>
			  			<img src={Infor3} />
			  			<h4 className="text-center">Buying Process</h4>
			  		</Col>
			  	</Grid>
			  </section>
			  <section className="testimonials">
			  	<Grid>
			  		<Col md={12}><h2 className="header-spacer text-center">Testimonials</h2></Col>
			  		<Col md={4}>
			  			<p>Thanking  Karma team for all their help, they made our experience a pleasure  and have made us feel like they are part of our family, they are the best!</p>
			  			<img src={Man1} />
			  			<span className="man-name">Viviane Matta</span>
			  		</Col>
			  		<Col md={4}>
			  			<p>Karma DevelopmentsDevelopments The trustworthy people with The professional capabilities in the Cypriot Market! An Organization you can TRUST!</p>
			  			<img src={Man2} />
			  			<span className="man-name">Viviane Matta</span>
			  		</Col>
			  		<Col md={4}>
			  			<p>What attracted me to Karma was that the quality of their work and the elegant designs of their properties, as well as their personal touch and friendly attitude.</p>
			  			<img src={Man3} />			
			  			<span className="man-name">Viviane Matta</span>
			  		</Col>
			  	</Grid>
			  </section>
			  <aside className="callout-bottom">
			  	<h2 className="header-spacer text-center">Get to know Karma</h2>
			  	<p>Established in 1985, Karma Developers is the founding member of the Karma Group of Companies, constructing quality properties along the desirable east coast of Cyprus.Today, we have constructed, sold and delivered more than 70 separate projects and continue to progress and prosper with new and unique property developments.</p>
			  </aside>
		  </div>
		)
	}
}