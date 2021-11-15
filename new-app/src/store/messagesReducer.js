import { UPDATE_MESSAGE } from "./types/messagesTypes";

const initialState = {
  messageList: null 
};

function messegesReducer(state = initialState, action) {
  switch (action.type) {
    case UPDATE_MESSAGE: {
      return { ...state, messageList: action.payload };
    }
    default:
      return state;
  }
}

export default messegesReducer;
