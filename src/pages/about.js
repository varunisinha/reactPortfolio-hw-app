//importing files required
import React from "react";
import { Col, Jumbotron, Container, Row } from 'react-bootstrap'
import ABOUT from "../components/about";

import "./style.css";

//creating about function
function About() {
  return (
    <div style={{ backgroundColor: "black" }}>
      <Jumbotron
        style={{ backgroundColor: "grey", textAlign: 'center' }}
      >
        <h1 >About Me</h1>
      </Jumbotron>
      <Container >

        <Row style={{ textAlign: 'center' }}>
          <Col size="md-12 s-12">
            <ABOUT className="bg-light"></ABOUT>
          </Col>
        </Row>
        <Row>
          <Col size="md-12" style={{ width: "100%" }}>
            <div></div>
          </Col>
        </Row>
      </Container>
    </div>
  );
}

//exporting to use elsewhere
export default About;
