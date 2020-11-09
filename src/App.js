/** @format */
import React from "react";
//React Router DOM
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
//Page
import About from "./pages/About";
import Cart from "./pages/Cart";
import Checkout from "./pages/Checkout";
import Error from "./pages/Error";
import Home from "./pages/Home";
import Login from "./pages/Login";
import Products from "./pages/Products";
import ProductDetails from "./pages/ProductDetails";
import Header from "./components/Header";
import Alert from "./components/Alert";
import PrivateRoute from "./components/PrivateRoute";
//Component
const App = () => {
  return (
    <div>
      <Router>
        <Header />
        <Alert />
        <Switch>
          <Route exact path="/">
            <Home />
          </Route>
          <Route exact path="/about">
            <About />
          </Route>
          <Route exact path="/cart">
            <Cart />
          </Route>
          <PrivateRoute exact path="/checkout" name="john" msg="hello">
            <Checkout />
          </PrivateRoute>
          <Route exact path="/login">
            <Login />
          </Route>
          <Route exact path="/products">
            <Products />
          </Route>
          <Route exact path="/login">
            <Login />
          </Route>

          <Route
            exact
            path="/products/:id"
            children={<ProductDetails></ProductDetails>}
          ></Route>

          <Route path="*">
            <Error />
          </Route>
        </Switch>
      </Router>
    </div>
  );
};

export default App;
