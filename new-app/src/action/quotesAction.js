import {
  GET_QUOTE_REQUEST,
  GET_QUOTE_SUCCESS,
  GET_QUOTE_FAILURE,
} from "../store/types/quotesTypes";

export const STATUSES = {
  IDLE: 0,
  REQUEST: 1,
  SUCCESS: 2,
  FAILURE: 3,
};

export const getQuoteRequest = () => ({
  type: GET_QUOTE_REQUEST,
});

export const getQuoteSuccess = (quote) => ({
  type: GET_QUOTE_SUCCESS,
  payload: quote,
});

export const getQuoteFailure = (err) => ({
  type: GET_QUOTE_FAILURE,
  payload: err,
});

export const getRandomQuote = () => async (dispatch) => {
  dispatch(getQuoteRequest());

  try {
    const response = await fetch("https://animechan.vercel.app/api/random");
    if (!response.ok) {
      throw new Error(`Request failed with status ${response.status}`);
    }
    const result = await response.json();
    dispatch(getQuoteSuccess(result));
  } catch (err) {
    dispatch(getQuoteFailure(err.message));
  }
};

export const getQuotesByAnimeName = (anime) => async (dispatch) => {
  dispatch(getQuoteRequest());
  try {
    const response = await fetch(
      `https://animechan.vercel.app/api/random/anime?title=${anime}`
    );
    if (!response.ok) {
      throw new Error(`Request failed with status ${response.status}`);
    }
    const result = await response.json();
    dispatch(getQuoteSuccess(result));
  } catch (err) {
    dispatch(getQuoteFailure(err.message));
  }
};