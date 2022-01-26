import React, { Component } from "react";
import { Container, Row, Col } from "react-bootstrap";
import './VideoItem.css'

export default class VideoItem extends Component {
  render() {
    return (
      <Container fluid={true}>
        <Row>
          <Col md="auto">
            <label className="checkbox">
              <input className="checkbox-input" type="checkbox" />
              <span className="checkbox-checkmark-box">
                <span className="checkbox-checkmark"></span>
              </span>
            </label>
          </Col>
          <Col style={{paddingLeft: "0px"}}>
          <div class="d-inline-flex p-2" > 
            {this.props.title}
            </div>
          </Col>
        </Row>
      </Container>
    );
  }
}
