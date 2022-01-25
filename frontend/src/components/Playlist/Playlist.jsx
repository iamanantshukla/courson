import React, { Component } from "react";
import { Button, Col, Container, Row } from "react-bootstrap";
import "./Playlist.css";
import { ProgressBar } from "react-step-progress-bar";

export default class Playlist extends Component {

  constructor(props){
    super(props)

    this.state={
      watchhours: "",
      totalhours: "",
      playlist: props.playlist
    }

    this.secondstoHours=this.secondstoHours.bind(this)

  }

  static getDer


  componentDidMount(){
    this.secondstoHours(this.props.playlist.hours_total, true);
    this.secondstoHours(this.props.playlist.hours_total - this.props.playlist.hours_watched, false);
  }

  componentDidUpdate(){
    this.secondstoHours(this.props.playlist.hours_total, true);
    this.secondstoHours(this.props.playlist.hours_total - this.props.playlist.hours_watched, false);
  }

  secondstoHours(d, total){
    d = Number(d);
    var h = Math.floor(d / 3600);
    var m = Math.floor(d % 3600 / 60);
    var s = Math.floor(d % 3600 % 60);

    var hDisplay = h > 0 ? h + (h == 1 ? " hour, " : " hours, ") : "";
    var mDisplay = m > 0 ? m + (m == 1 ? " minute, " : " minutes, ") : "";
    var sDisplay = s > 0 ? s + (s == 1 ? " second" : " seconds") : "";
    
    return <>{hDisplay + mDisplay + sDisplay}</>
  }

  render() {
    return (
      <Container className="playlist-container" style={{marginTop: '8px'}}>
        <Row>
          {/*thumbnail*/}
          <img
            className="playlist-thumbnail"
            src={this.props.playlist.playlist_thumbnail}
            alt="Playlist thumbnail"
          />
        </Row>
        <Row className="add-space">
          {/* Title */}
          <div className="playlist-title">{this.props.playlist.playlist_name}</div>
        </Row>
        <Row className="add-space">
          {/* Description */}
          <div className="playlist-hours-left">
            Watch Time left :   {this.secondstoHours(this.props.playlist.hours_total - this.props.playlist.hours_watched)}
          </div>
        </Row>
        <Row className="add-space">
        <ProgressBar
                  percent={100*this.props.playlist.hours_watched/this.props.playlist.hours_total}
                  filledBackground="linear-gradient(to right, #fefb72, #f0bb31)"
                />
        </Row>
        <Row className="add-space">
          {/* Description */}
          <div className="playlist-hours-left">
            Videos watched: 5/9
          </div>
        </Row>
        <Row className="add-space">
        <ProgressBar
                  percent={60}
                  filledBackground="linear-gradient(to right, #fefb72, #f0bb31)"
                />
        </Row>
        <Row>
          {/* Start button */}
          <a href="#" class="btn mt-4" >
            Start
          </a>
        </Row>
      </Container>
    );
  }
}
