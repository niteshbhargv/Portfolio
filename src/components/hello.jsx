import React, { Component } from 'react'

export default class Hello extends Component {
	render(){
		return (
			<div>
				<section id="home" style={{marginTop: "100px"}}>		
					<div className="container">
						<div className="row">
							<div className="column hello_b" style={{paddingTop: "90px"}}>
								<div>
									<h3>Hello</h3>
									<h1>I Am {"\n"} BHAVESH BHARGAVA</h1>
									<h5>Front-end Developer</h5>
								</div>
								<div>
									<a type="button" href="documents/Bhavesh_resume.pdf"  download="bhavesh_bhargava_resume">GET CV</a>
								</div>
							</div>	
							<div className="column">
								<img src="/images/bhavesh.jpg" alt="Its me" style={{width: "100%", borderRadius: "75px"}}></img>
							</div>
						</div>
					</div>
				</section>
			</div>
		)
	}
}