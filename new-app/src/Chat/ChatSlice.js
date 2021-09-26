import { createSlice } from "@reduxjs/toolkit";

export const ChatSlice = createSlice({
  name: "chat",
  initialState: {
    messagesList: [],
  },
  reducers: {
    addMessage: (state, action) => {
      state.messagesList.push(action.payload);
    },
  },
});

export const { addMessage } =
  ChatSlice.actions;

export default ChatSlice.reducer;