import React, { Component } from "react";
import { Card, ProgressBar } from "react-bootstrap";

export default class PlaylistItem extends Component {

  constructor(props){
    super(props)
  }

  render() {
    console.log(this.props)
    return(
      <>
        <Card>
          <Card.Body>
            <Card.Title>{this.props.name}</Card.Title>
            <Card.Text>
            {this.props.channel}
            </Card.Text>
            <ProgressBar now={60} />
          </Card.Body>
        </Card>
      </>
    );
  }
}

