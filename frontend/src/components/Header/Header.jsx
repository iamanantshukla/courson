import React, { Component } from "react";
import { Container, Nav, Navbar } from "react-bootstrap";
import { withRouter } from "react-router-dom";

class Header extends Component {

  constructor(props){
    super(props)
    this.state={
      page: 1,
      text: "",
      url: "",
    }
  }

  componentDidMount(){
    switch (this.props.location.pathname) {
      case '/':
        this.setState({page: 1, text: "Login", url: "/login"})
        break;
      case '/login':
        this.setState({page: 2, text: "", url: ""})
        break;
      case '/dashboard':
        this.setState({page: 3, text: "Logout", url:"/"})
        break;
      case '/course':
        this.setState({page: 4, text: "Go Home", url: "/dashboard"})
        break;
    
      default:
        this.setState({page: 1, text: "Login", url: "/login"})
        break;
    }
  }



  render() {
    return (
      <Navbar bg="#ffffff00" variant="dark">
        <Container fluid={true} style={{paddingLeft: "24px"}}>
          <Navbar.Brand href="#home">
            <img
              alt=""
              src="https://user-images.githubusercontent.com/59929888/150590550-dddc14c7-0a91-4eda-98ed-80f4adb8d671.svg"
              height= "48px"
	            width= "auto"
              className="d-inline-block align-center"
            />
          </Navbar.Brand>
          <Nav>
          <button
              class="ghost-button align-center"
              onClick={() => {
                this.props.history.push(this.state.url);
              }}
            >
              {this.state.text}
          </button>
          </Nav>
        </Container>
      </Navbar>
    );
  }
}

export default withRouter(Header);
