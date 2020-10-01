import React from "react";

import "../../App.css"


function Header(props) {
  return (
    <div className="jumbotron">
      <h1 className="display-4">TIME OUT WHEEL</h1>
      <p className="lead">
        Oh No! You're in Time-Out!
      </p>
      <hr class="my-4"></hr>
      <p>
        Spin to see how many seconds you'll have to stay!
      </p>
    </div>
  );
}

export default Header;