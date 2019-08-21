import React, { Component } from 'react'

export default class About extends Component {
	render(){
		return(
			<div>
				<section id="about-me">
					<div className="container  about_me">
						<div className="row">
							<div className="column" >
								<img src="/images/aboutMe.jpg" alt="about ME" style={{width: "75%", borderRadius: "75px"}}></img>
							</div>
							<div className="column">
								<div style={{paddingtop: "90px"}}>
									<h1>ABOUT ME</h1>
									<p>This is Bhavesh Bhargava. I have completed my BE from SVITS in computer science. I love front end development and design</p>
								</div>
								<div>
									<a type="button" href="documents/Bhavesh_resume.pdf" download="bhavesh_bhargava_resume">DOWNLOAD CV</a>
								</div>
							</div>	
						</div>
					</div>
				</section>
			</div>
		)
	}
}