import React, { Component } from "react";
import GuestPage from "./Components/GuestPage";
import UserPage from "./Components/UserPage";

class App extends Component {

  constructor() {
    super();

    this.state = {
      isLoggedIn: false
    };
  }

  login = () => {
    this.setState({
      isLoggedIn: true
    });
  };

  logout = () => {
    this.setState({
      isLoggedIn: false
    });
  };

  render() {

    if (this.state.isLoggedIn) {
      return (
        <div>
          <UserPage />
          <button onClick={this.logout}>Logout</button>
        </div>
      );
    }

    return (
      <div>
        <GuestPage />
        <button onClick={this.login}>Login</button>
      </div>
    );
  }
}

export default App;