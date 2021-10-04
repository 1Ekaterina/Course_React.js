import { ADD_MESSAGE } from "../store/types/messagesTypes";

const addMessage = (chatId, message, author) => ({
  type: ADD_MESSAGE,
  chatId,
  message,
  author,
});

export default addMessage;
