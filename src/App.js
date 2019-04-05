import React from 'react';
import { Switch, Route, withRouter } from 'react-router-dom';

import Header from './components/header/header.component';

import HomePage from './pages/homepage/homepage.component';
import ShopPage from './pages/shop/shop.component';
import ContactPage from './pages/contact/contact.component';
import SignInAndSignUp from './pages/sign-in-and-sign-up/sign-in-and-sign-up.component';

import { auth, createUserProfileDocument } from './firebase/firebase.utils';

import './App.scss';

class App extends React.Component {
  state = {
    currentUser: null
  };

  unsubscribeFromAuth = null;

  componentDidMount = () => {
    this.unsubscribeFromAuth = auth.onAuthStateChanged(async userAuth => {
      // userAuth returns null when auth.signOut() is called
      if (userAuth) {
        const userRef = await createUserProfileDocument(userAuth);

        userRef.onSnapshot(snapShot => {
          this.setState({
            currentUser: { id: snapShot.id, ...snapShot.data() }
          });
        });
      }

      this.setState({ currentUser: userAuth });
    });
  };

  componentWillUnmount = async () => {
    this.unsubscribeFromAuth();
  };

  render() {
    const { currentUser } = this.state;
    return (
      <div className='App'>
        <Header currentUser={currentUser} />
        <Switch>
          <Route exact path='/' component={HomePage} />
          <Route exact path='/shop' component={ShopPage} />
          <Route exact path='/contact' component={ContactPage} />
          <Route exact path='/signIn' component={SignInAndSignUp} />
        </Switch>
      </div>
    );
  }
}

export default withRouter(App);
