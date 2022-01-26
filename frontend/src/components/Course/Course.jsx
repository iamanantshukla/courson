import React, { Component } from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import Player from '../Player/Player';
import Playlist from '../../services/Playlist';
import VideoItem from '../VideoItem/VideoItem';

export default class Course extends Component {

  constructor(props){
    super(props)
    this.state = {
      videos: []
    }
  }

  componentDidMount(){
    Playlist.getVideoItems("PL-7t9DoIELCRwhcSVB239acbfjlvBDwiZ").then((response)=>{
      //console.log(response.data)
      this.setState({videos : response.data})
    }).catch((err)=>{
      alert(err.response.data.message)
    })
  }

  render() {
    const {videos} = this.state;
    return(
        <Container fluid={true}>
            <Row><a href="" >
          <img
            src="https://user-images.githubusercontent.com/59929888/150590550-dddc14c7-0a91-4eda-98ed-80f4adb8d671.svg"
            alt=""
          />
        </a></Row>
            <Row>
            <Col sm="9">
                <Player/>
            </Col>
            <Col sm="3">
            {videos.map((item, index) => {
                return (
                  <Row>
                    <VideoItem title = {item.snippet.title}/>
                  </Row>
                );
              })}
            </Col>
            </Row>
        </Container>
    );
  }
}
