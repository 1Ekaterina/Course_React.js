import { configureStore } from "@reduxjs/toolkit";
import ChatReducer from "./Chat/ChatSlice.js";
import ProfileReducer from "./Profile/Profile.js";

export default configureStore({
  reducer: {
    chat: ChatReducer,
    profile: ProfileReducer,
  },
});