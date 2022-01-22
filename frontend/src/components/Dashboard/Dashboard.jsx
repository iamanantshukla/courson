import React, { Component, useEffect } from "react";
import { Container, Row, Col } from "react-bootstrap";
import PlaylistItem from "../PlaylistItem/PlaylistItem";

export default class Dashboard extends Component {

  constructor(props){
    super(props)
    this.state = {
      playlistItems : []
    }  
  }
  

  componentDidMount(){
    var item = {
      playlist_name: "Nodejs tutorial",
      playlist_channel: "Code with Harry"
    }
    this.setState({ playlistItems: [...this.state.playlistItems, item, item, item] })
  }

  render() {
    return (
      <>
        <Container>
          <Row>
            <Col>
              {this.state.playlistItems.map((item) =>{
                return <PlaylistItem name={item.playlist_name} channel = {item.playlist_channel} />;
              })}
            </Col>
            <Col></Col>
          </Row>
        </Container>
      </>
    );
  }
}
