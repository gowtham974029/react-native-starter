import { AsyncStorage } from "react-native";


export const onSignIn = (USER_KEY) => AsyncStorage.setItem(USER_KEY, "true");

export const onSignOut = (USER_KEY) => AsyncStorage.removeItem(USER_KEY);

export const isSignedIn = (USER_KEY) => {
  return new Promise((resolve, reject) => {
    AsyncStorage.getItem(USER_KEY)
      .then(res => {
        if (res !== null) {
          resolve(true);
        } else {
          resolve(false);
        }
      })
      .catch(err => reject(err));
  });
};
