import React, { Component } from 'react'
import {BrowserRouter as Router,Route, Switch} from "react-router-dom";
import AddNewbill from './addNew'
import Findbill from './find'
import './cashier.css'

class Cashier extends Component{
    constructor(props){
        super(props);
        this.state = {message:<AddNewbill/>}
    }
    updateContent_0 = () => {
        this.setState({ message:<AddNewbill/>});
        
    } 
      updateContent_1 = () => {
          this.setState({ message:<Findbill/>});
          
      } 
     
      render(){
        console.log(this.state.message.type.name)
        return(
            <div className='stockkeeper'>
            <div className='stockkeeper_navs'>
            <button   className={this.state.message.type.name==="AddNewbill"?"active-cashier":"cashier-default"} onClick={this.updateContent_0}>Add bill</button><br/>
            <button className={this.state.message.type.name==="Findbill"?"active-cashier":"cashier-default"} onClick={this.updateContent_1}> Find bill</button><br/>
            
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
  export default Cashier;
  

