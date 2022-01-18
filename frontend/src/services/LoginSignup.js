import axios from "axios";

class LoginSignup {
  constructor() {
    this.postSignup = this.postSignup.bind(this);
  }
  postSignup(username, password, name) {
    const link = "http://localhost:3001/user/register"
    return axios({
      url: link,
      method: "POST",
      data: {
          "name": name,
          "username": username,
          "password": password
      }
    });
  }

  postLogin(username, password) {
    const link = "http://localhost:3001/user/login"
    return axios({
      url: link,
      method: "POST",
      data: {
          "username": username,
          "password": password
      }
    });
  }

}

export default new LoginSignup();
