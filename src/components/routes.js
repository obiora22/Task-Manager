import React from "react";
import {Route} from "react-router-dom";
import Home from "./Home/index";
import Signup from "./Signup/index"; 
import Login from "./Login/index";
import Logout from "./Logout/index";
import KanbanContainer from "../containers/KanbanContainer";
import cardList from "../data";

export default class Routes extends React.Component {
  render () {
    return (
      <div> 
        <Route path="/home" component={Home}/>
        <Route path="/signup" component={Signup}/>
        <Route path="/login" component={Login}/>
        <Route path="/logout" component={Logout}/>
        {/* <Route path="/board" render={ props => 
          <KanbanBoard {...props} cards={cardList}/>
        }/> */}
        <Route path="/board" component={KanbanContainer} />
      </div>
    );
  }
}