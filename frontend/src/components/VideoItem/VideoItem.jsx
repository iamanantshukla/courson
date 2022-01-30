import React, { Component } from "react";
import { Container, Row, Col, Card } from "react-bootstrap";
import "./VideoItem.css";

export default class VideoItem extends Component {

  constructor(props){
    super(props)
    this.state = {
      checked: this.props.watched,
      videoId: this.props.videoId,
      playlistId: this.props.playlistId,        
    }

    this.handleClick = this.handleClick.bind(this)
  }

  handleClick(event){
    this.setState({
      checked: !this.state.checked
    })
    this.props.onVideoClick(this.state.playlistId, this.state.videoId, this.state.checked)
  }

  render() {
    return (
      <>
        <Card body={true}>
          <Row>
            <Col md="auto">
              <div class="d-inline-flex p-2">
                <label className="checkbox">
                  <input className="checkbox-input" type="checkbox" checked={this.checked} onClick={this.handleClick}/>
                  <span className="checkbox-checkmark-box">
                    <span className="checkbox-checkmark"></span>
                  </span>
                </label>
              </div>
            </Col>
            <Col style={{ paddingLeft: "0px" }}>
              <div class="d-inline-flex p-2">{this.props.title}</div>
            </Col>
          </Row>
        </Card>
        <hr />
      </>
    );
  }
}
