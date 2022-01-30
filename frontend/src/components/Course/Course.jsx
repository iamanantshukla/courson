import React, { Component } from "react";
import { Container, Row, Col } from "react-bootstrap";
import { withRouter } from "react-router-dom";
import Player from "../Player/Player";
import Playlist from "../../services/Playlist";
import VideoItem from "../VideoItem/VideoItem";
import "./Course.css";

class Course extends Component {
  constructor(props) {
    super(props);
    this.state = {
      loading: true,
      selected: 0,
      videos: [],
      playlistId: this.props.location.state.detail.playlist_id,
      id: this.props.location.state.detail._id,
      videoWatched: this.props.location.state.detail.video_watched,
    };
  }

  componentDidMount() {
    Playlist.getVideoItems(this.state.playlistId)
      .then((response) => {
        //console.log(response.data)
        this.setState({ videos: response.data, loading: false });
      })
      .catch((err) => {
        alert(err.response.data.message);
      });
  }

  handleVideoItemClick(playlistId, videoId, watched) {
    try {
      if (watched) {
        Playlist.removeVideoWatched(playlistId, videoId)
          .then((response) => {
            console.log("Removed video");
          })
          .catch((err) => {
            alert(err.response.data.message);
          });
      } else {
        Playlist.setVideoWatched(playlistId, videoId)
          .then((response) => {
            console.log("Added video");
          })
          .catch((err) => {
            console.log(err);
          });
      }
    } catch (error) {
      console.log(error);
    }
  }

  render() {
    const { videos, loading, selected, videoWatched, id } = this.state;

    console.log(id, videoWatched);

    if (loading) {
      return <>Loading</>;
    }

    return (
      <Container fluid={true}>
        <Row>
          <Col sm="8">
            <Player videoUrl={videos[selected].snippet.resourceId.videoId} />
          </Col>
          <Col sm="4" className="video-items">
            {videos.map((item, index) => {
              var watched = false;
              var videoId = item.snippet.resourceId.videoId;
              if (videoWatched.includes(videoId)) {
                watched = true;
              }
              return (
                <Row
                  onClick={() => {
                    this.setState({ selected: index });
                  }}
                >
                  <VideoItem
                    title={item.snippet.title}
                    playlistId={id}
                    watched={watched}
                    videoId={videoId}
                    onVideoClick={this.handleVideoItemClick}
                  />
                </Row>
              );
            })}
          </Col>
        </Row>
      </Container>
    );
  }
}

export default withRouter(Course);
