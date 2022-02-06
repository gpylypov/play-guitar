import React, { Component } from "react";

class NotFound extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div>
        <h1>404 Not Found</h1>
        <p>
          The page you requested couldn't be found. Are you trying to go to{" "}
          <a href="https://play-guitar.herokuapp.com">https://play-guitar.herokuapp.com</a> ?
        </p>
      </div>
    );
  }
}

export default NotFound;
