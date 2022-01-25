import React, { Component } from "react";
import { Container, Row } from "react-bootstrap";

export default class Header extends Component {
  render() {
    return (
      <Container style={{width: '100%'}}>
        <Row>
          <a href="" class="logo" target="_blank">
            <img
              src="https://user-images.githubusercontent.com/59929888/150590550-dddc14c7-0a91-4eda-98ed-80f4adb8d671.svg"
              alt=""
            />
          </a>
        </Row>
      </Container>
    );
  }
}
