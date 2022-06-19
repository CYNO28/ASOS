import {
  GET_DATA_SUCCESS,
  GET_DATA_LOADING,
  GET_DATA_ERROR,
} from "./action.type";
const istate = {
  products: {},
  loading: true,
  show:true,
};
export const reducer = (state = istate, action) => {
  switch (action.type) {
    case GET_DATA_SUCCESS:
      return { ...state, products: action.payload, loading: false };
    case GET_DATA_LOADING:
      return { ...state, loading: true };
    case GET_DATA_ERROR:
      return { ...state, loading: false };
      case "Show_join":
      return { ...state, show: true };
      case "Hide_join":
      return { ...state, show: false };
      default:
      return state;
  }
};
