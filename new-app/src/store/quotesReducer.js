import { STATUSES } from "../action/quotesAction";
import {
  GET_QUOTE_REQUEST,
  GET_QUOTE_SUCCESS,
  GET_QUOTE_FAILURE,
} from "./types/quotesTypes";

const InitialState = {
  quotesList: [],
  loading: false,
  request: STATUSES.IDLE,
  error: null,
};

function quotesReducer(state = InitialState, action) {
  switch (action.type) {
    case GET_QUOTE_REQUEST:
      return {
        ...state,
        request: STATUSES.REQUEST,
        loading: true,
        error: null,
      };

    case GET_QUOTE_SUCCESS:
      // как лучше добавлять цитаты в массив quotes : через ...state или через push?
      // state.quotes.push(action.payload);
      return {
        ...state,
        quotesList: [...state.quotesList, action.payload],
        request: STATUSES.SUCCESS,
        loading: false,
      };

    case GET_QUOTE_FAILURE:
      return {
        ...state,
        request: STATUSES.FAILURE,
        error: action.payload,
        loading: false,
      };

    default:
      return state;
  }
}

export default quotesReducer;