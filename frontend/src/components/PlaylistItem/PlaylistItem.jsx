import React, { Component } from "react";
import { Col, Container, Row, Card, Image } from "react-bootstrap";
import "./PlaylistItem.css";
import "../../../node_modules/react-step-progress-bar/styles.css";
import { ProgressBar } from "react-step-progress-bar";

export default class PlaylistItem extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    console.log(this.props);

    return (
      <>
        <Container>
          <Row className="parent-row">
            <Col sm={4}>
              <Row>
              <img
                className="playlistItem-thumbnail"
                src="https://i.ytimg.com/vi/yEHCfRWz-EI/sddefault.jpg"
                alt="playlist thumbnail"
              />
              </Row>
            </Col>
            <Col className="right-column" sm={8}>
              <Row className="add-space"><Col>{this.props.name}</Col></Row>
              <Row className="add-space"><Col>{this.props.channel}</Col></Row>
              <Row className="add-space">
                <Col>
                <ProgressBar
                  percent={75}
                  filledBackground="linear-gradient(to right, #fefb72, #f0bb31)"
                />
                </Col>
              </Row>
            </Col>
          </Row>
        </Container>
      </>
    );
  }
}
