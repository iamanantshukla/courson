import React, { Component } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Alert, Container } from "react-bootstrap";
import loginSignup from "../../services/LoginSignup";

import "./LoginSignup.css";

export default class SignInUp extends Component {
  constructor(props) {
    super(props);
    this.state = {
      option: 1,
      username: "",
      name: "",
      password: "",
    };

    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleInput = this.handleInput.bind(this);
  }

  handleInput(event) {
    this.setState({
      [event.target.id]: event.target.value,
    });
  }

  handleSubmit(e) {
    switch (this.state.option) {
      case 1:
        //login
        loginSignup
          .postLogin(this.state.username, this.state.password)
          .then((response) => {
            localStorage.setItem("LoginStatus", "true");
            localStorage.setItem("LoginUsername", this.state.username);
            this.props.history.push("/dashboard", {});
          })
          .catch((err) => {
            alert(err.response.data.message);
          });
        break;
      case 2:
        loginSignup
          .postSignup(this.state.username, this.state.password, this.state.name)
          .then((response) => {
            localStorage.setItem("LoginStatus", "true");
            localStorage.setItem("LoginUsername", this.state.username);
            this.props.history.push("/dashboard", {});
          })
          .catch((err) => {
            alert(err.response.data.message);
          });
        break;

      default:
        break;
    }
  }

  render() {
    return (
      <>

        <div class="section">
          <div class="container">
            <div class="row full-height justify-content-center">
              <div class="col-12 text-center align-self-center py-5">
                <div class="section pb-5 pt-5 pt-sm-2 text-center">
                  <h6 class="mb-0 pb-3">
                    <span>Log In </span>
                    <span>Sign Up</span>
                  </h6>
                  <input
                    class="checkbox"
                    type="checkbox"
                    id="reg-log"
                    name="reg-log"
                  />
                  <label for="reg-log"></label>
                  <div class="card-3d-wrap mx-auto">
                    <div class="card-3d-wrapper">
                      <div class="card-front">
                        <div class="center-wrap">
                          <div class="section text-center">
                            <h4 class="mb-4 pb-3">Log In</h4>
                            <div class="form-group">
                              <input
                                type="text"
                                name="username"
                                class="form-style"
                                placeholder="Your Username"
                                id="username"
                                autocomplete="off"
                                onChange={this.handleInput}
                              />
                            </div>
                            <div class="form-group mt-2">
                              <input
                                type="password"
                                name="password"
                                class="form-style"
                                placeholder="Your Password"
                                id="password"
                                autocomplete="off"
                                onChange={this.handleInput}
                              />
                            </div>
                            <a
                              href="#"
                              class="btn mt-4"
                              onClick={this.handleSubmit}
                            >
                              submit
                            </a>
                            <p class="mb-0 mt-4 text-center">
                              <a href="#0" class="link">
                                Forgot your password?
                              </a>
                            </p>
                          </div>
                        </div>
                      </div>
                      <div class="card-back">
                        <div class="center-wrap">
                          <div class="section text-center">
                            <h4 class="mb-4 pb-3">Sign Up</h4>
                            <div class="form-group">
                              <input
                                type="text"
                                name="name"
                                class="form-style"
                                placeholder="Your Full Name"
                                id="name"
                                autocomplete="off"
                                onChange={this.handleInput}
                              />
                            </div>
                            <div class="form-group mt-2">
                              <input
                                type="text"
                                name="username"
                                class="form-style"
                                placeholder="Your Username"
                                id="username"
                                autocomplete="off"
                                onChange={this.handleInput}
                              />
                            </div>
                            <div class="form-group mt-2">
                              <input
                                type="password"
                                name="password"
                                class="form-style"
                                placeholder="Your Password"
                                id="password"
                                autocomplete="off"
                                onChange={this.handleInput}
                              />
                            </div>
                            <a
                              href="#"
                              class="btn mt-4"
                              onClick={this.handleSubmit}
                            >
                              submit
                            </a>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </>
    );
  }
}
