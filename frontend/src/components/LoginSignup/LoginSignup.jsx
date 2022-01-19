import React, { Component } from "react";
import "./LoginSignup.css";
import { Alert, Container } from "react-bootstrap";
import loginSignup from '../../services/LoginSignup'

export class LoginSignup extends Component {
  constructor(props) {
    super(props);
    this.state = {
      option: 1,
      username: "",
      name: "",
      password: ""
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

    console.log("Clicked")

    switch (this.state.option) {
      case 1:
        //login
        loginSignup.postLogin(this.state.username, this.state.password).then((response)=>{
          alert(response.data.message)
        }).catch((err)=>{
          alert(err.response.data.message)
        })
        break;
      case 2:
        loginSignup.postSignup(this.state.username, this.state.password, this.state.name).then((response)=>{
          alert(response.data.message)
        }).catch((err)=>{
          alert(err.response.data.message)
        })
        break;

      case 3:
        //forgot
        break;
    
      default:
        break;
    }
    
    

  }

  render() {
    return (
      <Container className="login-signup-container">
        <div className="container-login">
          <header>
            <div
              className={
                "header-headings " +
                (this.state.option === 1
                  ? "sign-in"
                  : this.state.option === 2
                  ? "sign-up"
                  : "forgot")
              }
            >
              <span>Sign in to your account</span>
              <span>Create an account</span>
              <span>Reset your password</span>
            </div>
          </header>
          <ul className="options">
            <li
              className={this.state.option === 1 ? "active" : ""}
              onClick={() => this.setState({ option: 1 })}
            >
              Sign in
            </li>
            <li
              className={this.state.option === 2 ? "active" : ""}
              onClick={() => this.setState({ option: 2 })}
            >
              Sign up
            </li>
            <li
              className={this.state.option === 3 ? "active" : ""}
              onClick={() => this.setState({ option: 3 })}
            >
              Forgot
            </li>
          </ul>
          <form
            className="account-form"
            onSubmit={(evt) => evt.preventDefault()}
          >
            <div
              className={
                "account-form-fields " +
                (this.state.option === 1 ? "sign-in" : this.state.option === 2 ? "sign-up" : "forgot")
              }
            >
              <input
                id="username"
                name="username"
                type="text"
                placeholder="Username"
                onChange={this.handleInput}
                required
              />
              <input
                id="password"
                name="password"
                type="password"
                placeholder="Password"
                onChange={this.handleInput}
                required={this.state.option === 1 || this.state.option === 2 ? true : false}
                disabled={this.state.option === 3 ? true : false}
              />

              <input
                id="name"
                name="name"
                type="text"
                placeholder="Full Name"
                onChange={this.handleInput}
                
                required={this.state.option === 2 ? true : false}
                disabled={this.state.option === 1 || this.state.option === 3 ? true : false}
              />
            </div>
            <button
              className="btn-submit-form"
              type="submit"
              onClick={this.handleSubmit} 
            >
              {this.state.option === 1
                ? "Sign in"
                : this.state.option === 2
                ? "Sign up"
                : "Reset password"}
            </button>
          </form>
        </div>
      </Container>
    );
  }
}

export default LoginSignup;
