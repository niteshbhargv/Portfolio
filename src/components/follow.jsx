import React, { Component } from 'react'

export default class About extends Component {
	render(){
		return(
			<div>
				<section id="contact">
					<div className="container">
						<div style={{textAlign: "center"}}>
							<img src="/images/logo.jpeg" alt="LOGO" style={{width: "200px", borderRadius: "120%", paddingBottom: "30px"}}></img>
							<div style={{background: "linear-gradient(to right, #4458dc , #854fee)", color: "white", padding: "80px 0"}}>
								<h1 style={{paddingBottom: "20px"}}>Contact</h1>
								<a href="mailto:bhavesh.bhargv@gmail.com" style={{color: "white", textDecoration: "none"}}>bhavesh.bhargv@gmail.com</a>
								<h1 style={{padding: "40px 0"}}>Follow ME</h1>
								<div className="follow">
									<a href="https://angel.co/bhavesh-bhargava-1" rel="noopener noreferrer" target="_blank" style={{paddingRight: "70px"}}>
										<i className="fa fa-angellist"></i>
									</a>
									<a href="https://www.facebook.com/bhavesh.bhargv" rel="noopener noreferrer" target="_blank" style={{paddingRight: "70px"}}>
										<i className="fa fa-facebook-official"></i>
									</a>
									<a href="https://www.linkedin.com/in/bhavesh-bhargava-80ab2a10b" rel="noopener noreferrer" target="_blank" style={{paddingRight: "70px"}}>
										<i className="	fa fa-linkedin-square"></i>
									</a>
									<a href="https://www.instagram.com/bhaveshbhargava" rel="noopener noreferrer" target="_blank">
										<i className="fa fa-instagram"></i>
									</a>
								</div>	
							</div>	
						</div>	
					</div>
				</section>
			</div>
		)
	}
}