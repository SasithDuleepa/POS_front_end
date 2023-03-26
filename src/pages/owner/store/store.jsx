import React, { Component } from 'react'
import {BrowserRouter as Router,Route, Switch} from "react-router-dom";
import './store.css'

import Addnew from './add';
import Search from './search';
class Store extends Component{
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
        return(
            <div>
                <div className='owner_stores'>
            <button className='owner_stores_add' onClick={this.updateContent_0}>Add new item</button><br/>
            <button className="owner_stores_search" onClick={this.updateContent_1}> Searh items</button><br/>
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
