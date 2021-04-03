import React, { Component } from "react";
import "./App.css";
import { connect } from "react-redux";
import {
  userAnswer,
  submit,
  endSession,
  updateProfile,
  changeRestaurant,
  changeRoomServices,
  changeTransport,
  conditions,
  increase,
  decrease,
  addProduct,
  removeProduct,
  clearCart,
} from "./redux/actions";

import Home from "./Home";
import Login from "./Login/Login";
import Welcome from "./Welcome";
import Profile from "./Profile";
import Transports from "./services/Transport/Transports";
import Restaurants from "./services/Restaurants/Restaurants";
import RoomServices from "./services/Room Service/RoomServices";
import ShowRestaurant from "./services/Restaurants/ShowRestaurant";
import ShowRoomServices from "./services/Room Service/ShowRoomServices";
import ShowTransport from "./services/Transport/ShowTransport";

import { BrowserRouter as Router, Route } from "react-router-dom";
import Prices from "./Prices";

import Store from "./ShoppingCart/pages/store/Store";
import Cart from "./ShoppingCart/pages/cart/Cart";
import About from "./ShoppingCart/pages/About";

import Store1 from "./ShoppingCart1/pages/store/Store";
import Cart1 from "./ShoppingCart1/pages/cart/Cart";
import About1 from "./ShoppingCart1/pages/About";

import Store2 from "./ShoppingCart2/pages/store/Store";
import Cart2 from "./ShoppingCart2/pages/cart/Cart";
import About2 from "./ShoppingCart2/pages/About";
import ListaService from "./services/Room Service/ListaService";
import NavBar from "./NavBar";

class App extends Component {
  constructor(props) {
    super(props);
    this.timerlog = null;
    this.submit = this.submit.bind(this);
    this.conditions = this.conditions.bind(this);
  }

  submit() {
    this.props.dispatch(submit(this.props.clients));
    let alert = document.querySelector("#alert");
    alert.style.visibility = "visible";
    this.timerlog = setTimeout(() => (alert.style.visibility = "hidden"), 5000);
  }

  componentWillUnmount() {
    clearTimeout(this.timerlog);
  }

  conditions() {
    this.props.dispatch(conditions());
  }

  render() {
    return (
      <div>
        <Router>
          <Route
            exact
            path="/"
            render={() => (
              <Home
                login={this.props.login}
                update={(newData) => {
                  this.props.dispatch(
                    updateProfile(this.props.login.id, newData)
                  );
                }}
                client={this.props.clients[this.props.login.id - 1]}
              />
            )}
          />

          <Route
            path="/welcome/"
            render={() => (
              <Welcome conditions={this.conditions} login={this.props.login} />
            )}
          ></Route>

          <Route
            path="/login/"
            render={(props) => (
              <Login
                {...props}
                clients={this.props.clients}
                login={this.props.login}
                onUserAnswer={(
                  dni = this.props.login.dniAnswer,
                  room = this.props.login.roomAnswer
                ) => {
                  this.props.dispatch(userAnswer(dni, room));
                }}
                submitFunction={this.submit}
              />
            )}
          ></Route>

          <Route
            path="/profile/"
            render={(props) => (
              <Profile
                {...props}
                conditions={this.conditions}
                client={this.props.clients[this.props.login.id - 1]}
                login={this.props.login}
                update={(newData) => {
                  this.props.dispatch(
                    updateProfile(this.props.login.id, newData)
                  );
                }}
                endSession={() => {
                  this.props.dispatch(endSession());
                }}
              />
            )}
          />

          <Route
            exact
            path="/services/transport/"
            render={(props) => (
              <Transports
                {...props}
                client={this.props.clients[this.props.login.id - 1]}
                login={this.props.login}
                transports={this.props.services.transports}
                onChangeTransport={(answer) => {
                  this.props.dispatch(changeTransport(answer));
                }}
              />
            )}
          />

          <Route
            path="/services/transport/show_transport/"
            render={(props) => (
              <ShowTransport
                {...props}
                login={this.props.login}
                client={this.props.clients[this.props.login.id - 1]}
                update={(newData) => {
                  this.props.dispatch(
                    updateProfile(this.props.login.id, newData)
                  );
                }}
                currentTransport={
                  this.props.services.transports[this.props.currentService]
                }
              />
            )}
          />

          <Route
            exact
            path="/services/restaurants/"
            render={(props) => (
              <Restaurants
                {...props}
                restaurants={this.props.services.restaurants}
                client={this.props.clients[this.props.login.id - 1]}
                login={this.props.login}
                onChangeRestaurant={(answer) => {
                  this.props.dispatch(changeRestaurant(answer));
                }}
              />
            )}
          />

          <Route
            path="/services/restaurants/show_restaurant/"
            render={(props) => (
              <ShowRestaurant
                {...props}
                currentRestaurant={
                  this.props.services.restaurants[this.props.currentService]
                }
                client={this.props.clients[this.props.login.id - 1]}
                update={(newData) => {
                  this.props.dispatch(
                    updateProfile(this.props.login.id, newData)
                  );
                }}
                login={this.props.login}
              />
            )}
          />

          <Route
            path="/services/room_services/"
            render={(props) => (
              <RoomServices
                {...props}
                client={this.props.clients[this.props.login.id - 1]}
                login={this.props.login}
                roomServices={this.props.services.roomServices}
                onChangeRoomServices={(answer) => {
                  this.props.dispatch(changeRoomServices(answer));
                }}
              />
            )}
          />

          <Route
            exact
            path="/services/room_services/show_room_services/"
            render={(props) => (
              <ShowRoomServices
                {...props}
                login={this.props.login}
                currentRoomServices={
                  this.props.services.roomServices[this.props.currentService]
                }
              />
            )}
          />

          <Route
            path="/prices/"
            render={() => (
              <Prices
                login={this.props.login}
                client={this.props.clients[this.props.login.id - 1]}
              />
            )}
          />

          <Route
            exact
            path="/shopping/"
            render={() => (
              <div>
                <NavBar></NavBar>
                <Store
                  client={this.props.clients[this.props.login.id - 1]}
                  login={this.props.login}
                  products={this.props.products}
                  cartItems={this.props.cartItems}
                  increase={(product) => {
                    this.props.dispatch(increase(product));
                  }}
                  addProduct={(product) => {
                    this.props.dispatch(addProduct(product));
                  }}
                />
              </div>
            )}
          />

          <Route
            path="/shopping/cart"
            render={() => (
              <Cart
                products={this.props.products}
                cartItems={this.props.cartItems}
                clearCart={() => {
                  this.props.dispatch(clearCart());
                }}
                increase={(product) => {
                  this.props.dispatch(increase(product));
                }}
                decrease={(product) => {
                  this.props.dispatch(decrease(product));
                }}
                removeProduct={(product) => {
                  this.props.dispatch(removeProduct(product));
                }}
                clients = {this.props.clients}
                login = {this.props.login}
              />
            )}
          />

          <Route path="/shopping/about" component={About} />

          <Route
            exact
            path="/shopping1/"
            render={() => (
              <div>
                <NavBar></NavBar>
                <Store1
                  client={this.props.clients[this.props.login.id - 1]}
                  login={this.props.login}
                  products1={this.props.products1}
                  cartItems={this.props.cartItems}
                  increase={(product) => {
                    this.props.dispatch(increase(product));
                  }}
                  addProduct={(product) => {
                    this.props.dispatch(addProduct(product));
                  }}
                />
              </div>
            )}
          />

          <Route
            path="/shopping1/cart"
            render={() => (
              <Cart1
                products1={this.props.products1}
                cartItems={this.props.cartItems}
                clearCart={() => {
                  this.props.dispatch(clearCart());
                }}
                increase={(product) => {
                  this.props.dispatch(increase(product));
                }}
                decrease={(product) => {
                  this.props.dispatch(decrease(product));
                }}
                removeProduct={(product) => {
                  this.props.dispatch(removeProduct(product));
                }}
              />
            )}
          />

          <Route path="/shopping1/about" component={About1} />

          <Route
            exact
            path="/shopping2/"
            render={() => (
              <div>
                <NavBar></NavBar>
                <Store2
                  client={this.props.clients[this.props.login.id - 1]}
                  login={this.props.login}
                  products2={this.props.products2}
                  cartItems={this.props.cartItems}
                  increase={(product) => {
                    this.props.dispatch(increase(product));
                  }}
                  addProduct={(product) => {
                    this.props.dispatch(addProduct(product));
                  }}
                />
              </div>
            )}
          />

          <Route
            path="/shopping2/cart"
            render={() => (
              <Cart2
                products2={this.props.products2}
                cartItems={this.props.cartItems}
                clearCart={() => {
                  this.props.dispatch(clearCart());
                }}
                increase={(product) => {
                  this.props.dispatch(increase(product));
                }}
                decrease={(product) => {
                  this.props.dispatch(decrease(product));
                }}
                removeProduct={(product) => {
                  this.props.dispatch(removeProduct(product));
                }}

              />
            )}
          />

          <Route path="/shopping2/about" component={About2} />
        </Router>
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    ...state,
  };
}

export default connect(mapStateToProps)(App);
