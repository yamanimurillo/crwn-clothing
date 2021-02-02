//Components
import React from 'react';
import { Route, Switch, Redirect } from 'react-router-dom';
import Header from './components/header/header.component';
import { connect } from 'react-redux';
import { setCurrentUser } from './redux/user/user.actions';

//Pages
import HomePage from './pages/homepage/homepage.component';
import ShopPage from './pages/shop/shop.component';
import LoginPage from './pages/login/login.component';
import CheckoutPage from './components/checkout/checkout.component';

import { auth, createUserProfileDocument } from './firebase/firebase.utils'

//CSS
import './App.css';

class App extends React.Component {

  unsuscribeFromAuth = null;

  componentDidMount() {

    const { setCurrentUser } = this.props;

    this.unsuscribeFromAuth = auth.onAuthStateChanged(async userAuth => {

      if (userAuth) {
        const userRef = await createUserProfileDocument(userAuth);

        userRef.onSnapshot(snapshot => {

          setCurrentUser({
            id: snapshot.id,
            ...snapshot.data()
          });

        });
      }

      setCurrentUser(userAuth);
    });
  }

  componentWillUnmount() {
    this.unsuscribeFromAuth();
  }

  render() {

    return (
      <div>
        <Header />
        <Switch>  
          <Route exact path='/' component={HomePage} />
          <Route exact path='/shop' component={ShopPage} />
          <Route exact path='/checkout' component={CheckoutPage} />
          <Route exact path='/login' render={() => this.props.currentUser ? <Redirect to='/'></Redirect>: <LoginPage></LoginPage> } />    
        </Switch>
      </div>
    );

  }

}

const mapStateToProps = (state) => {
  return {
    currentUser: state.user.currentUser
  }
};

const mapDispatchToProps = (dispatch) => {
  return {
    setCurrentUser: (user) => {
      return dispatch(setCurrentUser(user));
    }
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(App);
