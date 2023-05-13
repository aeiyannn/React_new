import React from "react";
import {Row} from "react-bootstrap";
import Col from 'react-bootstrap/Col';
import Pic from "./Card";
function About(){
    return(
        <>
        <h1 style={{textAlign:'center'}}>About Us</h1>
        <Row>
        <Col>
        <img src="https://media.gettyimages.com/id/671254230/photo/white-bengal-panthera-tigris-facing-camera.jpg?s=612x612&w=gi&k=20&c=laVFCw5EGGReXpS5Sbax2hYymBUv4R2M4ZSTfaUvNR8=" alt="" />
    </Col>
    <Col>
        <p className="fs-5">The white tiger or bleached tiger is a leucistic pigmentation variant of the Mainland tiger. It is reported in the wild from time to time in the Indian states of Madhya Pradesh, Assam, West Bengal, Bihar, Odisha, in the Sunderbans region and especially in the former State of Rewa. It has the typical black stripes of a tiger, but its coat is otherwise white or near-white. The white Bengal tigers are distinctive due to the color of their fur. The white fur is caused by a lack of the pigment pheomelanin, which is found in Bengal tigers with orange color fur. When compared to Bengal tigers, the white Bengal tigers tend to grow faster and heavier than the orange Bengal tiger</p>
        </Col>
        </Row>
        <Pic/>
        </>
    )
}
export default About
