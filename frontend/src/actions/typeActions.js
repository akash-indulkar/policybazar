import axios from "axios";

export const getAllTypes = () => async (dispatch) => {
  dispatch({
    type: "GET_TYPES_REQUEST",
  });

  try {

    let response = await axios.get("/api/types/getAllTypes");
    console.log(response);
    dispatch({ type: "GET_TYPES_SUCCESS", payload: response.data });

  } catch (error) {
    console.log(error)
    dispatch({ type: "GET_TYPES_FAILED", payload: error });
  }

};

export const getAllTypes1 = () => async (dispatch) => {
  dispatch({
    type: "GET_TYPES1_REQUEST",
  });

  try {

    let response = await axios.get("https://policybazaarclone.herokuapp.com/api/types1/getAllTypes1");
    console.log(response);
    dispatch({ type: "GET_TYPES1_SUCCESS", payload: response.data });

  } catch (error) {
    console.log(error)
    dispatch({ type: "GET_TYPES1_FAILED", payload: error });
  }

};
