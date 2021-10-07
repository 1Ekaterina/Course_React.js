import { ADD_MESSAGE } from "./types/messagesTypes";

const initialState = {
  messageList: {
    ["id0"]: [
      {
        id: 0,
        text: "Задайте интересующий вас вопрос и наши сотрудники ответят на него",
        author: "БОТ",
      },
    ],
  },
};

function messegesReducer(state = initialState, action) {
  switch (action.type) {
    case ADD_MESSAGE: {
      const currentList = state.messageList[action.chatId] || [];
      return {
        ...state,
        messageList: {
          ...state.messageList,
          [action.chatId]: [
            ...currentList,
            {
              id: currentList.length,
              text: action.message,
              author: action.author,
            },
          ],
        },
      };
    }
    default:
      return state;
  }
}

export default messegesReducer;
