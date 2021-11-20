import { faFacebookF, faFacebookMessenger, faGitSquare, faGooglePlusSquare } from '@fortawesome/free-brands-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';

const Footer = () => {
    return (
        <>
        
            <Container fluid={true} className="bg-dark p-4 text-white text-center mt-5">
					<Row>
						<Col lg={3} md={6} sm={12}>
							<p className="footerTitle">Address</p>
							<p className="footerText">
								Plot 15, Road 71, Gulshan Dhaka 1212, Bangladesh
							</p>
							<p className="footerTitle">Chittagong Shop</p>
							<p className="footerText">
								23/A, M M Ali Road, Golpahar Moor Mehdibag, Chittagong. Cell:
								01914 001210
							</p>
						</Col>
						<Col lg={3} md={6} sm={12}>
							<p className="footerTitle">Social Pages</p>
							<a className="footerLink" href="http://google.com">
								Men's World
							</a>
							<a className="footerLink" href="http://google.com">
								Woman's World
							</a>
							<a className="footerLink" href="http://google.com">
								24/7 Online Delivary
							</a>
							<a className="footerLink" href="http://google.com">
							Home Deliavary
							</a>
						</Col>
						<Col lg={3} md={6} sm={12}>
							<p className="footerTitle">Career</p>
							<a className="footerLink" href="http://google.com">
								Job Opening
							</a>
							<a className="footerLink" href="http://google.com">
								Upoload Your CV
							</a>
							<a className="footerLink" href="http://google.com">
								Application Form
							</a>
							<a className="footerLink" href="http://google.com">
								Vacancy List
							</a>
						</Col>
						<Col lg={3} md={6} sm={12}>
							<p className="footerTitle">Emergency?</p>
							<p className="footerText">01914 001210</p>
							<p className="footerTitle">Social Links</p>
							<p>
								<a href="http://google.com">
									<FontAwesomeIcon className="bulletIconS me-1" icon={faFacebookF} />
								</a>
								<a href="http://google.com">
									<FontAwesomeIcon
										className="bulletIconS me-1"
										icon={faFacebookMessenger}
									/>
								</a>
								<a href="http://google.com">
									<FontAwesomeIcon className="bulletIconS me-1" icon={faGitSquare} />
								</a>
								<a href="http://google.com">
									<FontAwesomeIcon
										className="bulletIconS me-1"
										icon={faGooglePlusSquare}
									/>
								</a>
							</p>
						</Col>
					</Row>
				</Container>
				<div className="copyright text-center  text-white p-4">Copyright @GhoriGhor</div>
			</>
        
        
    );
};

export default Footer;