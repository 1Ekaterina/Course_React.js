import "./messages.css";
import { useDispatch } from "react-redux";
import { useEffect } from "react";
import { botReply } from "../../action/messagesActions";

function Messages({ chatId, messages  }) {

  const dispatch = useDispatch();

  useEffect(() => {
    if (chatId === "id0" && messages[messages.length - 1].author !== "БОТ") {
        dispatch(
         botReply(chatId)
        );
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
