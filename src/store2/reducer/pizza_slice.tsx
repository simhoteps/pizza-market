import React, { useEffect } from "react";
import {
  FETCH_PIZZAS_FAILURE,
  FETCH_PIZZAS_REQUEST,
  FETCH_PIZZAS_SUCCESS,
} from "store2/actions/pizza_data_action";

const initialState = {
  loading: false,
  pizzas: [],
  error: "",
};

const pizzasReducer = (state = initialState, action: any) => {
  switch (action.type) {
    case FETCH_PIZZAS_REQUEST:
      return {
        ...state,
        loading: true,
      };
    case FETCH_PIZZAS_SUCCESS:
      return {
        ...state,
        loading: false,
        pizzas: action.payload,
        error: "",
      };
    case FETCH_PIZZAS_FAILURE:
      return {
        ...state,
        loading: false,
        pizzas: [],
        error: action.payload,
      };
    default:
      return state;
  }
};

export default pizzasReducer;
