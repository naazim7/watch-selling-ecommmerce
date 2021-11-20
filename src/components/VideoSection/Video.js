import { faPlayCircle } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React, { useState } from 'react';
import { Button, Col, Container, Modal, Row } from 'react-bootstrap';
import { BigPlayButton, Player } from 'video-react';
import "video-react/dist/video-react.css";

const Video = () => {
 const [show, setShow] = useState(false);

 const handleClose = () => setShow(false);
 const handleShow = () => setShow(true);







    return (
			<>
				<Container className="text-center mx-auto my-2">
					<Row>
						<Col className="videoCard">
							<div>
								<h1 className="text-primary">Offering</h1>
								<p className="fs-1">
									11.11 Offer
								</p>
								<p onClick={handleShow}>
									<FontAwesomeIcon className="videoIcon" icon={faPlayCircle} />
								</p>
							</div>
						</Col>
					</Row>
				</Container>

				<Modal size="lg" show={show} onHide={handleClose}>
					<Modal.Body>
						<Player
							playsInline
							poster="/assets/poster.png"
							src="https://media.w3.org/2010/05/sintel/trailer_hd.mp4">
							<BigPlayButton position="center" />
						</Player>
					</Modal.Body>
					<Modal.Footer>
						<Button variant="primary" onClick={handleClose}>
							X
						</Button>
					</Modal.Footer>
				</Modal>
			</>
		);
};

export default Video;