import axios from "axios";

class TestService {
  constructor() {
    this.getTest = this.getTest.bind(this);
  }
  getTest(link) {
    return axios({
      url: link,
      method: "GET",
    });
  }
}

export default new TestService();
