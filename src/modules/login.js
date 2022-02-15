/* Action Types */
const AUTO_SIGN_IN = 'login/AUTO_SIGN_IN';
const SIGN_IN = 'login/SING_IN';
const SIGN_OUT = 'login/SIGN_OUT';

/* Action Creators */
export const autoSignIn = (accessToken) => ({
  type: AUTO_SIGN_IN,
  isLoggedIn: true,
  accessToken,
});

export const signIn = (accessToken) => ({
  type: SIGN_IN,
  isLoggedIn: true,
  accessToken,
});

export const signOut = () => ({
  type: SIGN_OUT,
  isLoggedIn: false,
  accessToken: null,
});

/* Initial state */
const initialState = {
  isLoggedIn: false,
  accessToken: null,
  uid: null,
  loginType: null,
};

/* Reducer */
export default function login(state = initialState, action) {
  switch (action.type) {
    case SIGN_IN:
      return {
        ...state,
        isLoggedIn: action.isLoggedIn,
      };
    case AUTO_SIGN_IN:
      return {
        ...state,
        accessToken: action.accessToken,
        isLoggedIn: action.isLoggedIn,
      };
    case SIGN_OUT:
      return {
        ...state,
        isLoggedIn: action.isLoggedIn,
      };
    default:
      return state;
  }
}
