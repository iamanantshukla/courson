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

  addplaylist(playlist){
    const link = "http://localhost:3001/playlist/add";
    return axios({
      url: link,
      method: "POST",
      params: {
        user_id: "61d34453df7630c2ca7efe34",
        playlist_id: playlist
      },
    });
  }

}

export default new User();
