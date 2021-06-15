
import './App.css';
import './mystyle.css';
import Navbar from './component/Navbar';
import Home from './component/Home';
import Login from './component/Login';
import Cakedetails from './component/Cakedetails';
import Search from './component/Search';
import PageNotFound from './component/PageNotFound';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Cart from './component/Cart';
import Checkout from './component/Checkout';
import Signup from './component/Signup';
import Logout from './component/Logout';

var userDetails = {
	userName: "Vinayak",
	password: "123456"
}



function App() {
  return (
    <Router>
      <Navbar sitetitle="MyReactApp" mylink="test" userDetails={userDetails} ></Navbar>
      <Switch>
        <Route exact path="/" > <Home/> </Route>     
        <Route exact path="/login" component={Login} />      
        <Route exact path="/logout" component={Logout} />      
        <Route exact path="/register" component={Signup} />      
        <Route path="/cake/:cakeid" component={Cakedetails} />      
        <Route path="/search" component={Search} />      
        <Route exact path="/cart" component={Cart} />      
        <Route path="/checkout" component={Checkout} />      
        <Route Link="/*"> <PageNotFound /> </Route> 
      </Switch>
           
    </Router>
  );
}

export default App;
