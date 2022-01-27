import React, { Component } from "react";
import { Container, Row, Col } from "react-bootstrap";
import { withRouter } from "react-router-dom";
import Player from "../Player/Player";
import Playlist from "../../services/Playlist";
import VideoItem from "../VideoItem/VideoItem";
import './Course.css'

class Course extends Component {
  constructor(props) {
    super(props);
    this.state = {
      loading: true,
      selected: 0,
      videos: [],
    };
  }

  componentDidMount() {
    Playlist.getVideoItems(this.props.location.state.detail)
      .then((response) => {
        //console.log(response.data)
        this.setState({ videos: response.data, loading: false });
      })
      .catch((err) => {
        alert(err.response.data.message);
      });
  }

  render() {
    const { videos, loading, selected } = this.state;

    if(loading){
      return(
        <>
        Loading
        </>
      )
    }

    return (
      <Container fluid={true}>
        <Row>
          <Col sm="8">
            <Player videoUrl={videos[selected].snippet.resourceId.videoId} />
          </Col>
          <Col sm="4" className="video-items">
            {videos.map((item, index) => {
              return (
                <Row onClick={()=>{
                  this.setState({selected: index})
                }}>
                  <VideoItem title={item.snippet.title} />
                </Row>
              );
            })}
          </Col>
        </Row>
      </Container>
    );
  }
}

export default withRouter(Course)