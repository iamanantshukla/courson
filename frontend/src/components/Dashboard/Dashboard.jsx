import React, { Component, useEffect } from "react";
import { Container, Row, Col } from "react-bootstrap";
import PlaylistItem from "../PlaylistItem/PlaylistItem";
import Playlist from "../Playlist/Playlist";
import Header from "../Header/Header";
import "./Dashboard.css";
import User from "../../services/User";

export default class Dashboard extends Component {
  constructor(props) {
    super(props);
    this.state = {
      playlistItems: [],
    };
  }

  componentDidMount() {
    // var item = {
    //   playlist_name: "Nodejs tutorial",
    //   playlist_channel: "Code with Harry",
    // };
    // this.setState({
    //   playlistItems: [
    //     ...this.state.playlistItems,
    //     item,
    //     item,
    //     item,
    //     item,
    //     item,
    //     item,
    //   ],
    // });

    User.getUserInfo("xyz")
      .then((response) => {
        console.log(response.data);
        this.setState({
          playlistItem: response.data,
        });
        console.log(this.state.playlistItem);
      })
      .catch((err) => {
        alert(err.response.data.message);
      });
  }

  render() {
    return (
      <>
        <Header />
        <Container className="dashboard-container">
          <Row>
            <Col>
              {this.state.playlistItems.map((item) => {
                return (
                  <PlaylistItem
                    name={item.playlist_name}
                    channel={item.playlist_channel}
                  />
                );
              })}
            </Col>
            <Col>
              <Playlist />
            </Col>
          </Row>
        </Container>
      </>
    );
  }
}
