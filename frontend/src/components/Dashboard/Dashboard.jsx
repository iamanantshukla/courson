import React, { Component, useEffect } from "react";
import { Row, Col, Modal, Button } from "react-bootstrap";
import PlaylistItem from "../PlaylistItem/PlaylistItem";
import Playlist from "../Playlist/Playlist";
import Header from "../Header/Header";
import "./Dashboard.css";
import User from "../../services/User";
import Container from "react-bootstrap/Container";

export default class Dashboard extends Component {
  constructor(props) {
    super(props);
    this.state = {
      loading: true,
      playlistItems: [],
      modalshow: false,
      playlistUrl: "",
      selected: 0,
    };

    this.handleInput = this.handleInput.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  componentDidMount() {
    User.getUserInfo("xyz")
      .then((response) => {
        const playlists = response.data;
        this.setState({
          playlistItems: playlists,
          loading: false
        });
      })
      .catch((err) => {
        alert(err.response.data.message);
      });
  }

  handleInput(event) {
    this.setState({
      [event.target.id]: event.target.value,
    });
  }

  handleSubmit(event) {
    User.addplaylist(this.state.playlistUrl)
      .then((response) => {
        alert(response.data.message);
      })
      .catch((err) => {
        alert(err.response.data.message);
      });
  }

  render() {
    const { loading, playlistItems, selected } = this.state;

    if(loading){
      return(
        <>
        Loading
        </>
      )
    }

    return (
      <>
        <Modal
        show={this.state.modalshow}
        className="add-playlist-modal"
          size="lg"
          aria-labelledby="contained-modal-title-vcenter"
          centered
          onHide={() => this.setState({modalshow: false})}
        >
          <Modal.Header className="add-playlist-modal-header" closeButton>
            <Modal.Title id="contained-modal-title-vcenter">
            Add Playlist
            </Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <h5>Insert Playlist url</h5>
            <input
                                type="text"
                                name="playlistUrl"
                                class="form-style"
                                placeholder="Enter Playlist Url"
                                id="playlistUrl"
                                autocomplete="off"
                                onChange={this.handleInput}
                              />
          </Modal.Body>
          <Modal.Footer className="add-playlist-modal-header">
            <Button onClick={() => this.setState({modalshow: false})}>Add</Button>
          </Modal.Footer>
        </Modal>

        <a href="" class="logo">
          <img
            src="https://user-images.githubusercontent.com/59929888/150590550-dddc14c7-0a91-4eda-98ed-80f4adb8d671.svg"
            alt=""
          />
        </a>
        <Container fluid={true} className="dashboard-container">
          <Row>
            <Col >
              {playlistItems.map((item, index) => {
                return (
                  <Row
                    className="playlist-item"
                    onClick={() => {
                      this.setState({ selected: index });
                    }}
                  >
                    <PlaylistItem
                      color={selected === index ? "black" : "#1f2029"}
                      name={item.playlist_name}
                      channel={item.playlist_channel}
                      thumbnail={item.playlist_thumbnail}
                    />
                  </Row>
                );
              })}

              <Row className="playlist-add-button">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="48"
                  height="48"
                  fill="currentColor"
                  class="bi bi-plus-circle"
                  viewBox="0 0 16 16"
                  onClick={() =>
                    this.setState({
                      modalshow: true,
                    })
                  }
                >
                  <path d="M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14zm0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16z" />
                  <path d="M8 4a.5.5 0 0 1 .5.5v3h3a.5.5 0 0 1 0 1h-3v3a.5.5 0 0 1-1 0v-3h-3a.5.5 0 0 1 0-1h3v-3A.5.5 0 0 1 8 4z" />
                </svg>
              </Row>
            </Col>
            <Col>
              <Playlist playlist={playlistItems[selected]}/>
            </Col>
          </Row>
        </Container>
      </>
    );
  }
}
