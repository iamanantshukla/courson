import axios from "axios";


class Playlist {
  constructor() {
    this.getVideoItems = this.getVideoItems.bind(this);
    this.setVideoWatched = this.setVideoWatched.bind(this);
    this.removeVideoWatched = this.removeVideoWatched.bind(this);
  }

  getVideoItems(playlistId) {
    const link = "http://localhost:8000/playlist/get/info";
    return axios({
      url: link,
      method: "GET",
      params: {
        playlist_id: playlistId,
      },
    });
  }

  setVideoWatched(playlistId, videoId){
    const link = "http://localhost:8000/playlist/add/video";
    return axios({
      url: link,
      method: "POST",
      params: {
        user_id: "61d34453df7630c2ca7efe34",
        playlist_id: playlistId,
        video_id: videoId
      },
    });
  }

  removeVideoWatched(playlistId, videoId){
    const link = "http://localhost:8000/playlist/remove/video";
    return axios({
      url: link,
      method: "POST",
      params: {
        user_id: "61d34453df7630c2ca7efe34",
        playlist_id: playlistId,
        video_id: videoId
      },
    });
  }

}

export default new Playlist();
