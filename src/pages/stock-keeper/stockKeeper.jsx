import React, { Component } from 'react'
import {BrowserRouter as Router,Route, Switch} from "react-router-dom";
import './stockkeeper.css'

import Add_item from './add_item'
import FindItem from './findItem'

class StockKeeper extends Component{
    constructor(props){
        super(props);
        this.state = {message:<Add_item/>}
    }
    updateContent_0 = () => {
        this.setState({ message:<Add_item/>});
        
    } 
      updateContent_1 = () => {
          this.setState({ message:<FindItem/>});
          
      } 
     
      render(){
        console.log(this.state.message.type.name)
        return(
            <div className='stockkeeper'>
            <div className='stockkeeper_navs'>
            <button   className={this.state.message.type.name==="Add_item"?"active-sk":"sk-default"} onClick={this.updateContent_0}>Add item</button><br/>
            <button className={this.state.message.type.name==="FindItem"?"active-sk":"sk-default"} onClick={this.updateContent_1}> Find item</button><br/>
            
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
  export default StockKeeper;
  
