import React,{Component} from "react"; 
import {Link } from "react-router-dom";
import "./navigation.css";
class Navigation extends Component {
  render() {
    return (
      <div> 
        <ul>
          <li><Link to="/home">Home</Link></li>
          <li><Link to="/signup">Signup</Link></li>
          <li><Link to="/login">Login</Link></li>
          <li><Link to="/logout">Logout</Link></li>
          <li><Link to="/board">board</Link></li>
        </ul>
      </div>
    );
    
  }
}

export default Navigation;