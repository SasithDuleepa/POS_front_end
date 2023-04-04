import React, { Component } from 'react'
import {BrowserRouter as Router,Route, Switch} from "react-router-dom";
import './store.css'

import Addnewitem from './add';
import Searchitem from './search';
class Store extends Component{
    constructor(props){
        super(props);
        this.state = {message:<Addnewitem/>}
    }
    updateContent_0 = () => {
        this.setState({ message:<Addnewitem/>});
        
    } 
      updateContent_1 = () => {
          this.setState({ message:<Searchitem/>});
          
      } 
      render(){
       
        return(
            <div>
                <div className='owner_stores'>
            <button className={this.state.message.type.name==="Addnewitem"?"active-stores-item":"default-stores-search"} onClick={this.updateContent_0}>Add new item</button><br/>
            <button className={this.state.message.type.name==="FindItem"?"active-stores-item":"default-stores-search"} onClick={this.updateContent_1}> Searh items</button><br/>
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
export default Store;
