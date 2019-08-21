import React, { Component } from 'react'

export default class Header extends Component {
	render(){
		return(
			<div>
				<header>
					<nav className="navbar navbar-expand-lg">
						<a href="/index.html">
							<img src="/images/logo.jpeg" alt="LOGO" style={{width: "80px", borderRadius: "100%"}}></img>
						</a>
						<ul className="navbar-nav">
							<li className="nav-item">
								<a className="nav-link" href="#home">Home</a>
							</li>
							<li className="nav-item">
								<a className="nav-link" href="#about-me">About</a>
							</li>
							<li className="nav-item">
								<a className="nav-link" href="#skills">SKILLS</a>
							</li>
							<li className="nav-item">
								<a className="nav-link" href="#contact">Contact</a>
							</li>
						</ul>
					</nav>
				</header>
			</div>
		)
	}
}