const AuthReducer = (state, action) => {
  switch (action.type) {
    case "LOGIN_START":
      return {
        User: null,
        isFecthing: true,
        error: false,
      };

    case "LOGIN_SUCCESS":
      return {
        User: action.payload,
        isFecthing: false,
        error: false,
      };

    case "LOGIN_FAILURE":
      return {
        User: null,
        isFecthing: false,
        error: action.payload,
      };
    default:
      return state;
  }
};

export default AuthReducer;
