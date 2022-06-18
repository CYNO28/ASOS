import axios from "axios";
import {  GET_DATA_ERROR, GET_DATA_LOADING, GET_DATA_SUCCESS } from "./action.type";

export const getData = (path) => (dispatch) => {
    dispatch({ type: GET_DATA_LOADING });
  axios.get(`http://localhost:8080/${path}`)
  .then((res) => {
    dispatch({
      type: GET_DATA_SUCCESS,
      payload: res.data,
    });
  }).catch((err) => {
    dispatch({
      type: GET_DATA_ERROR,
    });
  })
};
