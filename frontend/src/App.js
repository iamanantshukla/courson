import logo from "./logo.svg";
import "./App.css";
//import TestComponent from "./components/TestComponent";
import "bootstrap/dist/css/bootstrap.min.css";
// import LoginSignup from "./components/LoginSignup/LoginSignup";
import Home from "./components/Home/Home";
import Footer from "./components/Footer/Footer";
import { BrowserRouter, Route, Switch, Redirect } from "react-router-dom";
import Dashboard from "./components/Dashboard/Dashboard";
import React, { Component } from "react";
import LoginSignup from "./components/LoginSignup/LoginSignup";
import Course from "./components/Course/Course"
import VideoItem from "./components/VideoItem/VideoItem";

export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      loginStatus: true,
    };
    this.loggedIn = this.loggedIn.bind(this);
    this.loggedIn();
  }

  loggedIn() {

    var loggedIn = localStorage.getItem("LoginStatus");

    console.log(loggedIn)

    if (loggedIn === "true") {
      this.state.loginStatus = true;
    }else {
      this.state.loginStatus = false;
    }


  }

  render() {
    return (
      <Course/>
      // <div className="routes">
      //   <BrowserRouter>
      //     <Switch>
      //       <Route exact path={"/"} component={Home} />
      //       <Route exact path={"/login"} component={LoginSignup} />
      //       <Route exact path={"/dashboard"}>
      //         {this.state.loginStatus ?  <Dashboard/> : <Redirect to = "/login"/>}
      //       </Route>
      //     </Switch>
      //   </BrowserRouter>
      // </div>
    );
  }
}
