# native-starter 😎😁😁😎
Packages to be installed are specified below to get started with React, Redux, React Redux, Redux Thunk, React Native, React Navigation.

"dependencies": {
    "@expo/vector-icons": "^6.3.1",
    "axios": "^0.18.0",
    "native-base": "^2.7.2",
    "react": "16.4.1",
    "react-native": "0.56.0",
    "react-navigation": "^2.9.3",
    "react-redux": "^5.0.7",
    "redux": "^4.0.0",
    "redux-thunk": "^2.3.0"
  },
  
  🤩Please Install these dependencies in order to work on these starter project, and ensure the react native installation and support for the libraries to be installed from the official react native webiste
  https://facebook.github.io/react-native/docs/getting-started .
  
  
  # Important Links to reference the dependencies and its requirement

  1. https://reactnavigation.org/docs/en/getting-started.html 😃 - Get started with the react-navigation.
  
  2. https://github.com/expo/vector-icons 🤪 - Know bit of using icons from expo which built on top of @oblador/react-native-vector-icons.
  
  3. https://github.com/axios/axios 🤓 - Get started with network request library.
  
  4. https://redux.js.org/basics/usagewithreact 🧐🤔 - Know bit redux for state management.
  
  5. https://facebook.github.io/react-native/docs/getting-started 😀😃 - Get started with react-native.
  
  6. https://github.com/reduxjs/redux-thunk 🤔 - Know bit redux-thunk(middleware).
  
  7. https://docs.nativebase.io/docs/GetStarted.html 🤪😝 - Li'l bit save your time, reducing stylings and work around for UI.
  

# File Structure handled-In

# src
    => actions (folder)
       => AuthActions.js
       => index.js
       => types.js
    => common (folder)
       => Spinner.js
    => components (folder)
       => auth (folder)
          => Login.js
       => FirstScreen.js (These files you can move to your respective folder such as dashborad/home or anything)
       => SecondScreen.js
       => ThirdScreen.js
       => ...
    => images (folder)
       => * Add images here.
    => reducers (folder)
       => AuthReducer.js
       => index.js
    => routing (folder)
       => Auth.js
       => NavigationService.js
       => Router.js
       => SplashScreen.js
