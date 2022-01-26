import axios from "axios";

class Playlist {
  constructor() {
    this.getVideoItems = this.getVideoItems.bind(this);
  }

  getVideoItems(playlistId) {
    const link = "http://localhost:3001/playlist/get/info";
    return axios({
      url: link,
      method: "GET",
      params: {
        playlist_id: playlistId,
      },
    });
  }

}

export default new Playlist();
