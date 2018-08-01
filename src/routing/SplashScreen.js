import React from "react";
import { createRootNavigator } from "./Router";
import { isSignedIn } from "./Auth";
import NavigationService from './NavigationService';

export default class SplashScreen extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      signedIn: false,
      checkedSignIn: false
    };
  }

  componentWillMount() {
    isSignedIn('isLoggedIn')
      .then(res => this.setState({ signedIn: res, checkedSignIn: true }))
      .catch(err => alert("An error occurred"));
  }

  render() {
    const { checkedSignIn, signedIn } = this.state;

    // If we haven't checked AsyncStorage yet, don't render anything (better ways to do this)
    if (!checkedSignIn) {
       return null;
    }

    const Layout = createRootNavigator(signedIn);
    return  <Layout 
              ref={navigatorRef => {
                NavigationService.setTopLevelNavigator(navigatorRef);
              }}
            /> 
     }
  }
