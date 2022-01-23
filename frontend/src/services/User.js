import axios from "axios";

class User {
  constructor() {
    this.getUserInfo = this.getUserInfo.bind(this);
  }

  getUserInfo(username) {
    const link = "http://localhost:3001/playlist/get";
    return axios({
      url: link,
      method: "GET",
      params: {
        user_id: "61d34453df7630c2ca7efe34",
      },
    });
  }
}

export default new User();
