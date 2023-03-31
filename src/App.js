
import './App.css';

import {BrowserRouter as Router,Route, BrowserRouter} from "react-router-dom";
import {Switch} from "react-router-dom";

import Login from './pages/login/login';
import Landing from './pages/wellcome/landing';
import Owner from './pages/owner/owner';
import StockKeeper from './pages/stock-keeper/stockKeeper';
import Cashier from './pages/cashier/cashier';
import Navibar from './components/navbar/navbar';

function App() {
  return (
    <div className="App">
      <Navibar/>
      <BrowserRouter>
      <Router>    
     <Switch>   
    
     <Route path="/" exact> <Landing/>  </Route>
     <Route path="/log_in" exact> <Login/>  </Route>
       <Route path="/owner" exact> <Owner/>  </Route>
       <Route path="/stock_keeper" exact> <StockKeeper/>  </Route>
       <Route path="/cashier" exact> <Cashier/>  </Route>
     
       
       
       
      </Switch>
    </Router>
    </BrowserRouter>

    {/* <Router>
      <Switch>
    <Route path="/" component={Landing}/>
    <Route path="/log_in" component={Login}/>
    <Route path="/owner" component={Owner}/>
    <Route path="/stock_keeper" component={StockKeeper}/>
    </Switch>
    </Router> */}
    </div>
  );
}

export default App;
