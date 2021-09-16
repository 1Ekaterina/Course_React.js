import Message from './Components/Message/Message';
import InputForm from './Components/InputForm/InputForm';
import { useEffect, useState } from "react";

function App() {

  const [messageList, setMessageList] = useState([
    {
      author: "макфлай", text: "Док, а как же все эти разговоры, что нельзя менять будущее? Про пространственно-временной континуум."
    }, 
    {  
      author: "Док", text: "Да я подумал, ну его к черту, этот континуум" 
    }
  ]);

  useEffect(() => {
    if (messageList[messageList.length - 1].author !== "Док") {
      setTimeout(() => {
        setMessageList((prev) => [...prev, { author: "Док", text: "Я всё понял, спасибо" }])
      }, 2000);
    }
  }, [messageList]);

  return (
    <div className="App">
      <Message messageList={messageList} />
      <InputForm setMessageList={setMessageList} />
    </div>
  );
}

export default App;