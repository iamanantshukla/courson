import React from "react";

import testService from "../services/TestService";

class TestComponent extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      msg: "not fetched",
    };
  }

  componentDidMount() {
    testService.getTest("http://localhost:3001/test").then((response) => {
      console.log(response);
      this.setState({
        msg: response.data.message,
      });
    });
  }

  render() {
    return (
      <div>
        <h1>{this.state.msg}</h1>
      </div>
    );
  }
}

export default TestComponent;
