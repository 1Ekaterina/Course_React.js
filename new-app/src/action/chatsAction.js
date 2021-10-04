import { ADD_CHAT, DELETE_CHAT } from "../store/types/chatsTypes";

// function addChat(name) {
//   type: ADD_CHAT,
//   payload: name,
// }

export const addChat = (name) => ({
  type: ADD_CHAT,
  payload: name,
});

export const deleteChat = (id) => ({
  type: DELETE_CHAT,
  payload: id,
});

// export { addChat };
