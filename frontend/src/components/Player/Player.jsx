import ReactPlayer from "react-player/youtube";
import React, { Component } from "react";
import { Button, Col, Container, Row } from "react-bootstrap";
import './Player.css'

export default class Player extends Component {
  render() {
    return (
      <Container fluid={true}>
        <Row>
          <ReactPlayer
            className="react-player"
            url="https://www.youtube.com/watch?v=RGKi6LSPDLU"
            controls={true}
            height="40vw"
            width="100vw"
          />
        </Row>
        <Row>
          <Col >
            <a href="#" class="btn mt-4">
              Previous
            </a>
          </Col >
          <Col>
          <div class="d-flex flex-row-reverse">
            <a href="#" class="btn mt-4">
              Next
            </a>
            </div>
          </Col>
        </Row>
      </Container>
    );
  }
}
