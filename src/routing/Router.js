import { createStackNavigator } from 'react-navigation';
import Login from './../components/auth/Login';
import FirstScreen from './../components/FirstScreen';
import SecondScreen from './../components/SecondScreen';


export const DashboardModule = createStackNavigator({
  
  FirstScreen: {
    screen: FirstScreen,
    navigationOptions: {
      header: null
  }
  },
  SecondScreen: {
    screen: SecondScreen
  },
})

const LoginModule = createStackNavigator(
  {
    Login: {
      screen: Login ,
      navigationOptions: {
          header: null
      }
    },
  },
  {
  initialRouteName: 'Login',
  }
);

export const createRootNavigator = (signedIn = false) => {
  return createStackNavigator(
    {
      Drawer: {
        screen: DashboardModule,  
        navigationOptions: {
          gesturesEnabled: false
        }
      },
      Login: {
        screen: LoginModule,
        navigationOptions: {
          gesturesEnabled: false
        }
      }
    },
    {
      headerMode: "none",
      mode: "card",
      initialRouteName: signedIn ? "Drawer" : "Login"
    }
  );
};
