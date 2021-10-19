import {UPDATE_CHATS  } from "./types/chatsTypes";

const InitialState = { chatList: null };


function chatsReducer(state = InitialState, action) {
  switch (action.type) {
    case UPDATE_CHATS:
      return { chatList: action.payload };
    
    default:
      return state;
  }
}

export default chatsReducer;
