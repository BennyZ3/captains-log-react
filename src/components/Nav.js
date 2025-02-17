import { Component } from "react";
import { Link } from "react-router-dom";
import "./Nav.css";

class Nav extends Component {
  render() {
    return (
      <div className="navBar">
        <Link to="/">
          <h1 className="logo">Captain's Log</h1>
          {/* <div className="homeButton">HOME</div> */}
        </Link>
        <Link to="/logs">
          <button className="logButton">LOGS</button>
        </Link>
        <Link to="/logs/new">
          <button className="newLogButton">NEW</button>
        </Link>
      </div>
    );
  }
}

export default Nav;
