import React, { Component } from 'react'
import {Link} from 'react-router'
import $ from 'jquery'
import Carousel from 'react-bootstrap/lib/Carousel'
import Grid from 'react-bootstrap/lib/Grid'
import Row from 'react-bootstrap/lib/Row'
import Col from 'react-bootstrap/lib/Col'

import './home.less'
import { CONFIG } from '../../config'
import HomeCarouselImg1 from '../../img/1.jpg'
import HomeCarouselImg2 from '../../img/2.jpg'
import HomeCarouselImg3 from '../../img/3.jpg'
import HomeCarouselImg4 from '../../img/4.jpg'
import HomeCarouselImg5 from '../../img/5.jpg'
import HomeCarouselImg6 from '../../img/6.jpg'
import HomeCarouselImg7 from '../../img/7.jpg'
import HomeCarouselImg8 from '../../img/8.jpg'
import HomeCarouselImg9 from '../../img/9.jpg'
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
		console.log(CONFIG)
		$.ajax({
			url: CONFIG.server+'/api/fourProjects?callback=?',
			dataType: 'jsonp',
		})
		.done(function(data) {
			console.log(data)
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
			    </Carousel.Item>
			    <Carousel.Item>
			      <img src={HomeCarouselImg2}/>
			    </Carousel.Item>
			    <Carousel.Item>
			      <img src={HomeCarouselImg3}/>
			    </Carousel.Item>
			    <Carousel.Item>
			      <img src={HomeCarouselImg4}/>
			    </Carousel.Item>
			    <Carousel.Item>
			      <img src={HomeCarouselImg5}/>
			    </Carousel.Item>
			    <Carousel.Item>
			      <img src={HomeCarouselImg6}/>
			    </Carousel.Item>
			    <Carousel.Item>
			      <img src={HomeCarouselImg7}/>
			    </Carousel.Item>
			    <Carousel.Item>
			      <img src={HomeCarouselImg8}/>
			    </Carousel.Item>
			    <Carousel.Item>
			      <img src={HomeCarouselImg9}/>
			    </Carousel.Item>

			  </Carousel>
			  <section className="featured-projects">
			  	<Grid>
				    <Row className="show-grid">
				      <Col md={12}><h2 className="header-spacer text-center">精选项目</h2></Col>
				      {this.state.projects.map((project) => 
				      <Col md={6} className="featured-item">
				      	<Link to={"/properties/"+project.name}>
				      		<img src={CONFIG.server+project.imgs[0]} />
				      	</Link>
				      	<h4>
				      		<Link to={"/properties/"+project.name}>{project.name}</Link>
				      	</h4>
				      	<p>
				      		{project.intro.slice(0,350) + '...'}
				      	</p>
				      </Col>
				      )}
				    </Row>
				  </Grid>
			  </section>
			  
			  <aside className="callout-bottom">
			  	<h2 className="header-spacer text-center">Karma概况</h2>
			  	<p>成立于1985年，Karma Developers是Karma企业集团的创始成员，在美丽的塞浦路斯东海岸建设高品质的房产项目。             
  迄今为止，我们已经建成、出售并交付了超过70个房产项目，继续推动和促进新颖独特的新房产开发。</p>
			  </aside>
		  </div>
		)
	}
}