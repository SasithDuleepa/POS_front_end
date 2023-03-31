import React, { Component } from 'react'
import {BrowserRouter as Router,Route, Switch} from "react-router-dom";
import Employee from './employee/employee'
import Store from './store/store'
import Summery from './summery/summery';

import './owner.css'

class Owner extends Component{
  constructor(props){
      super(props);
      this.state = {message:<Employee/>}
  }
  updateContent_0 = () => {
      this.setState({ message:<Employee/>});
      
  } 
    updateContent_1 = () => {
        this.setState({ message:<Store/>});
        
    } 
    updateContent_2 = () => {
      this.setState({ message:<Summery/>});
      
  }
    render(){
      return(
          <div>
            <div className='owner_navs'>
          <button  className='owner_navs1' active='true' onClick={this.updateContent_0}>employee</button><br/>
          <button className='owner_navs2' onClick={this.updateContent_1}> Stores</button><br/>
          <button className='owner_navs3' onClick={this.updateContent_2}> Summery</button><br/>
          </div>

          <Router>
          <Switch>    
             <Route  exact>{ this.state.message }</Route>
          </Switch>
        </Router>
          </div>
      )
    }



}
export default Owner;
