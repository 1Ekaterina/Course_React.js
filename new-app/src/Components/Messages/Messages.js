import "./messages.css";
import { useDispatch, useSelector, shallowEqual } from "react-redux";
import { useEffect } from "react";
import addMessage from "../../action/messagesActions";

function Messages({ chatId }) {
  const messages = useSelector(
    (state) => state.messages.messageList[chatId],
    shallowEqual
  );

  const dispatch = useDispatch();

  useEffect(() => {
    if (chatId === "id0" && messages[messages.length - 1].author !== "БОТ") {
      setTimeout(() => {
        dispatch(
          addMessage(chatId, "Сообщение принято", "БОТ")
        );
      }, 2000);
    }
  }, [messages]);

  return (
    <p className="messages">
      {messages
        ? messages.map((el) => (
              <p key={el.id}>
                <span >{el.author + ": "}</span>
                <span>{el.text}</span>
              </p>            
            
          ))
        : null}
    </p>
  );
}

export default Messages;
