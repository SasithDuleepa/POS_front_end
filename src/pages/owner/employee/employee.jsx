import React, { Component } from 'react'
import {BrowserRouter as Router,Route, Switch} from "react-router-dom";
import './employee.css'


import Addnew from './addnew';
import Search from './search';
class Employee extends Component{
    constructor(props){
        super(props);
        this.state = {message:<Addnew/>}
    }
    updateContent_0 = () => {
        this.setState({ message:<Addnew/>});
        
    } 
      updateContent_1 = () => {
          this.setState({ message:<Search/>});
          
      } 
      render(){
        console.log(this.state.message.type.name)
        return(
            <div>
                <div className='owner_employee'>
            <button className={this.state.message.type.name==="Addnew"?"active-owner-employee":"owner-employee-default"} onClick={this.updateContent_0}>Add new employee</button><br/>
            <button className={this.state.message.type.name==="FindItem"?"active-owner-employee":"owner-employee-default"} onClick={this.updateContent_1}> Searh employee</button><br/>
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
export default Employee;
