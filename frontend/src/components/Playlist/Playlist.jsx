import React, { Component } from "react";
import { Button, Col, Container, Row } from "react-bootstrap";
import "./Playlist.css"

export default class Playlist extends Component {
  render() {
    return (
      <Container>
        <Row>
          {/*thumbnail*/}
          <img className="playlist-thumbnail"
            src="https://i.ytimg.com/vi/yEHCfRWz-EI/sddefault.jpg"
            alt="Playlist thumbnail"
          />
        </Row>
        <Row>
          {/* Title */}
          <div className="playlist-title">
          Nodejs Tutorial
          </div>
        </Row>
        <Row>
          {/* Description */}
          <div className="playlist-description">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque
            vestibulum tristique ante, et luctus turpis. Vestibulum aliquam
            velit mi, ac fermentum leo vulputate eget. Nulla elit tortor,
            ultricies et odio.
            </div>
        </Row>
        <Row>{/* Hours left */}
        <div className="playlist-progress">
                Hours Left: 36
                </div>
        </Row>
        <Row>{/* Start button */}
        <Button className="playlist-start-button">Start</Button>
        </Row>
      </Container>
    );
  }
}
