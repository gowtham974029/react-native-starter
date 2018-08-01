import { NavigationActions, StackActions } from 'react-navigation';

let _navigator;

function setTopLevelNavigator(navigatorRef) {
    _navigator = navigatorRef;
  }
  
  function navigate(routeName, params) {
    _navigator.dispatch(
      NavigationActions.navigate({
        routeName,
        params,
      })
    );
  }

  function navigateReset() {
    _navigator.dispatch(
      StackActions.reset({
        index: 0,
        key: null,
        actions: [
            NavigationActions.navigate({routeName: 'Drawer'})
        ]
      })
    );
  }
  export default {
    navigate,
    navigateReset,
    setTopLevelNavigator,
  };