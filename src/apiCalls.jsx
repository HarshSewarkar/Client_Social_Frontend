import axios from "axios";
const apiUrl = import.meta.env.VITE_REACT_APP_API_URL;

export const loginCall = async (userCredential, dispatch) => {
  dispatch({ type: "LOGIN_START" });
  try {
    const res = await axios.post(`${apiUrl}auth/login`,userCredential);
    dispatch({
      type: "LOGIN_SUCCESS",
      payload: res.data,
    });
  } catch (error) {
    dispatch({
      type: "LOGIN_FAILURE",
      payload: error,
    });
  }
};
