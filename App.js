import React, { Component } from 'react';
import SplashScreen from './src/routing/SplashScreen';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import ReduxThunk from 'redux-thunk';
import reducers from './src/reducers';

export default class App extends Component {
  render() {
    const store = createStore(reducers, {}, applyMiddleware(ReduxThunk));
    return (   
        <Provider store={store}>
           <SplashScreen/>
        </Provider>
    );
  }
}
