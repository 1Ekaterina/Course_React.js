import { useParams, Redirect } from "react-router-dom";
import Messages from "../Messages/Messages";
import InputForm from "../InputForm/InputForm";
import { useSelector, shallowEqual } from "react-redux";
import Header from "../Header/Header";

function ChatPage() {
  const { chatId } = useParams();
  const currentChat = useSelector(
    (state) => state.chats.chatList.find((el) => el.id === chatId),
    shallowEqual
  );
  console.log(currentChat);
  return (
    <>
      {currentChat ? (
        <>
          <Header />
          <p>{currentChat.name}</p>
          <Messages chatId={chatId} />
          <InputForm chatId={chatId} />
        </>
      ) : (
        <Redirect to="/" />
      )}
    </>
  );
}

export default ChatPage;
