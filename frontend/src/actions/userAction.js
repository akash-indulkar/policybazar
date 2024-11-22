import axios from "axios";

export const registerUser = (user) => async (dispatch) => {
  dispatch({ type: "USER_REGISTER_REQUEST" });

  try {
    const response = await axios.post("/api/users/register", user);
   
  ;
    alert(`User Successfully registred with the number - ${user.value}`);
    
    dispatch({ type: "USER_REGISTER_SUCCESS" });
  } catch (error) {
    dispatch({ type: "USER_REGISTER_FAILEED", payload: error });

    alert(`User Already Exist with the number - ${user.value}`);
  }
};

export const loginUser = (user) => async (dispatch) => {
  dispatch({ type: "USER_LOGIN_REQUEST" });

  try {
    const response = await axios.post("/api/users/login", user);
    console.log(response);

    dispatch({ type: "USER_LOGIN_SUCCESS", payload: response.data });

    localStorage.setItem("currentUser", JSON.stringify(response.data));
    window.location.href = "/login_otp";
  } catch (error) {
    dispatch({ type: "USER_LOGIN_FAILEED", paload: error });
    alert("Invalid Credentials");
  }
};
