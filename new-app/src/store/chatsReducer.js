import { ADD_CHAT, DELETE_CHAT } from "./types/chatsTypes";

const InitialState = { chatList: [{ id: "id0", name: "БОТ" }] };
let count = 0;

function chatsReducer(state = InitialState, action) {
  switch (action.type) {
    case ADD_CHAT:
      count++;
      return {
        ...state,
        chatList: [
          ...state.chatList,
          {
            id: `id${count}`,
            name: action.payload,
          },
        ],
      };

    case DELETE_CHAT:
      return {
        ...state,
        chatList: state.chatList.filter((el) => el.id !== action.payload),
      };

    default:
      return state;
  }
}

export default chatsReducer;
