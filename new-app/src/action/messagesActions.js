import { ADD_MESSAGE } from "../store/types/messagesTypes";

export const addMessage = (chatId, message, author) => ({
  type: ADD_MESSAGE,
  chatId,
  message,
  author,
});

export const botReply = (chatId) => (dispatch) => {
  setTimeout(() => {
    dispatch(
      addMessage(chatId, "Отступитесь, и вам принесут тортик.", "ГЛаДОС")
    );
  }, 2000);
};

