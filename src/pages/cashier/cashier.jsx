import React, { Component } from 'react'
import {BrowserRouter as Router,Route, Switch} from "react-router-dom";
import AddNew from './addNew'
import Find from './find'

class Cashier extends Component{
    constructor(props){
        super(props);
        this.state = {message:<AddNew/>}
    }
    updateContent_0 = () => {
        this.setState({ message:<AddNew/>});
        
    } 
      updateContent_1 = () => {
          this.setState({ message:<Find/>});
          
      } 
     
      render(){
        return(
            <div className='stockkeeper'>
            <div className='stockkeeper_navs'>
            <button  className='stockkeeper_navs1' onClick={this.updateContent_0}>Add bill</button><br/>
            <button className='stockkeeper_navs2' onClick={this.updateContent_1}> Find bill</button><br/>
            
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
  

