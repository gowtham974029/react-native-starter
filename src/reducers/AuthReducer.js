import {
    EMAIL_CHANGED,
    PASSWORD_CHANGED,
    LOGIN_USER,
    LOGIN_USER_SUCCESS,
    LOGIN_USER_FAIL,
    CLOSE_MODAL,
  } from '../actions/types';
  
  const INITIAL_STATE = {
    email: '',
    password: '',
    user: null,
    error: '',
    loading: false,
    modalVisible: false,
  };
  
  export default (state = INITIAL_STATE, action) => {
    switch (action.type) {
      case EMAIL_CHANGED:
        return { ...state, email: action.payload };
      case PASSWORD_CHANGED:
        return { ...state, password: action.payload };
      case LOGIN_USER:
        return { ...state, loading: true, error: '', modalVisible: true };
        case LOGIN_USER_SUCCESS:
        return { ...state, ...INITIAL_STATE, user: action.payload, modalVisible: false, loading: false };
      case LOGIN_USER_FAIL:
        return { ...state, error: 'Authentication Failed', password: '', loading: false, modalVisible: false };
      case CLOSE_MODAL:
      return { ...state, loading: false, modalVisible: false };
        default:
        return state;
    }
  };