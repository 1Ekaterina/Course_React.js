import { createStore, combineReducers, applyMiddleware  } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";
import profileReducer from "./profileReducer";
import chatsReducer from "./chatsReducer";
import messagesReducer from "./messagesReducer";
import thunk from "redux-thunk";
import { persistStore, persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage";
import quotesReducer from "./quotesReducer";

const persistConfig = {
  key: "socialNet",
  storage,
  blacklist: ["quotes"],
};

const rootReducer  = combineReducers({
  profile: profileReducer,
  chats: chatsReducer,
  messages: messagesReducer,
  quotes: quotesReducer,
});

const persistedReducer = persistReducer(persistConfig, rootReducer);

export const store = createStore(
  persistedReducer,
  composeWithDevTools(applyMiddleware(thunk))
);

export const persistor = persistStore(store);
