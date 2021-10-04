import { createStore, combineReducers } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";
import profileReducer from "./profileReducer";
import chatsReducer from "./chatsReducer";
import messagesReducer from "./messagesReducer";

const reducers = combineReducers({
  profile: profileReducer,
  chats: chatsReducer,
  messages: messagesReducer,
});

export const store = createStore(reducers, composeWithDevTools());
