import {
  EMAIL_CHANGED,
  PASSWORD_CHANGED,
  LOGIN_USER,
  LOGIN_USER_SUCCESS,
  LOGIN_USER_FAIL,
  CLOSE_MODAL
} from './types';
import axios from 'axios';
import { onSignIn } from './../routing/Auth';
import NavigationService from './../routing/NavigationService';

export const emailChanged = (text) => {
  return {
    type: EMAIL_CHANGED,
    payload: text
  };
};

export const passwordChanged = (text) => {
  return {
    type: PASSWORD_CHANGED,
    payload: text
  };
};

export const loginUser = ({ email, password }) => {
  return (dispatch) => {
    dispatch({ type: LOGIN_USER });

      axios.post('http://192.168.0.103:3000/getToken', {
        email: email,
        password: password
      })
      .then((user) => loginUserSuccess(dispatch, user))
      .catch(() => loginUserFail(dispatch));
  };
};

const loginUserFail = (dispatch) => {
  dispatch({ type: LOGIN_USER_FAIL });
};

const loginUserSuccess = (dispatch, user) => {
  dispatch({
    type: LOGIN_USER_SUCCESS,
    payload: user
  });
  onSignIn('isLoggedIn')
  .then(() => NavigationService.navigateReset());
};

export const closeModal = () => {
  return {
    type: CLOSE_MODAL,
  }
}
        