import React, { Component } from 'react';
import { createDrawerNavigator } from 'react-navigation';

import SecondScreen from './../components/SecondScreen';
import ThirdScreen from './../components/ThirdScreen';

class FirstScreen extends Component {
    
    render() {
        return(
            <MyApp />
        );
    }
}
const MyApp = createDrawerNavigator({
    SecondScreen: {
      screen: SecondScreen,
    },
    ThirdScreen: {
      screen: ThirdScreen
    }
  });
export default FirstScreen;