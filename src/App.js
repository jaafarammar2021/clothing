import "./App.css";
import { Route, Switch } from "react-router-dom";
import HomePage from "./pages/homepage/HomePage";
import ShopPage from "./pages/shop/shop";
import Header from "./components/header/header";
import SignInandSignUpPage from "./pages/signin-signup/signin-signup";
import React from "react";
import { auth, createUserProfileDocuemnt } from "./firebase/firebase.utils";
class App extends React.Component {
  constructor() {
    super();
    this.state = {
      currentUser: null,
    };
  }
  unsubscribedFromAuth = null;
  componentDidMount() {
    this.unsubscribedFromAuth = auth.onAuthStateChanged(async (userAuth) => {
      if (userAuth) {
        const userRef = await createUserProfileDocuemnt(userAuth);
        userRef.onSnapshot((snapShot) => {
          this.setState({
            currentUser: {
              id: snapShot.id,
              ...snapShot.data(),
            },
          });
        });
      } else {
        this.setState({ currentUser: userAuth });
      }
    });
  }
  componentWillUnmount() {
    this.unsubscribedFromAuth();
  }

  render() {
    return (
      <div>
        <Header currentUser={this.state.currentUser} />
        <Switch>
          <Route exact path="/" component={HomePage} />
          <Route path="/shop" component={ShopPage} />
          <Route path="/signin" component={SignInandSignUpPage} />
        </Switch>
      </div>
    );
  }
}

export default App;
