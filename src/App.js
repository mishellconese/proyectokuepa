import React from "react";
import Links from "./components/Links";
import "./App.css";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Header from "./components/header/header";
import Footer from "./components/footer/footer";
import Home from "./components/home/home";
import Login from "./components/login/login"
import Cerrar from "./components/cerrar/cerrar"

function App() {
  return (
    <Router>
      <Header/>
      <Switch>
        <Route path="/" exact component={Login}/>
        <Route path="/cerrar" exact component={Cerrar}/>
        <Route path="/home" exact component={Home}/>
        <Route path="/registro">
          <div className="container p-14">
            <div className="row">
              <Links />
            </div>
             <ToastContainer />
          </div>
        </Route>
      </Switch>
      <Footer/>
    </Router>
  );
}

export default App;
