import React, { Component } from 'react'

export default class Skills extends Component {
	render(){
		return(
			<div>
				<section id="skills">
					<div className="container">
						<div style={{textAlign: "center"}}>
							<h1>SKILLS KNOWN</h1>
						</div>
						<div className="row style_featured">
							<div className="column">
		                		<div>
		                    		<img src="/images/develope.jpg" alt="img" style={{borderRadius: "10%"}}></img>
		                    		<h2 style={{paddingTop: "20px"}}>Web Development</h2>
		                    		<p style={{fontSize: "14px", paddingTop: "20px"}}>Advance knowledge of HTML and basic knowledge of JavaScript, MySql and PHP.</p>
		                		</div>
		            		</div>	
	            			<div className="column">
		                		<div>
		                    		<img src="/images/design.jpg" alt="img" style={{borderRadius: "10%"}}></img>
		                    		<h2 style={{paddingTop: "20px"}}>Web Design</h2>
		                    		<p style={{fontSize: "14px", paddingTop: "20px"}}>Advance knowledge of CSS and basic knowledge of bootstrap.</p>
		                		</div>
		            		</div>	     
        				</div>
					</div>
				</section>
			</div>
		)
	}
}