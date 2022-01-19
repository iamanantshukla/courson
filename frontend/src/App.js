import logo from "./logo.svg";
import "./App.css";
//import TestComponent from "./components/TestComponent";
import LoginSignup from "./components/LoginSignup/LoginSignup";
import Home from "./components/Home/Home";
import Footer from "./components/Footer/Footer";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import Dashboard from "./components/Dashboard/Dashboard";

function App() {
  return (
    <div className="routes">
      <BrowserRouter>
          <Switch>
            <Route exact path={"/"} component={Home} />
            <Route exact path={"/login"} component={LoginSignup} />
            <Route exact path={"/dashboard"} component={Dashboard}/>
          </Switch>
      </BrowserRouter>
      <Footer/>
    </div>
  );
}

export default App;
