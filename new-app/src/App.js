import { makeStyles } from "@material-ui/core/styles";
import MessagesScreen from "./MessagesScreen";
import InputScreen from "./InputScreen";
import ChatsScreen from "./ChatsScreen";
import { useEffect, useState } from "react";
import { ThemeProvider, createTheme } from "@material-ui/core/styles";

const theme = createTheme({
  palette: {
    primary: {
      main: "#FFFFFF",
    },
    secondary: {
      main: "#FFFFFF",
    },
  },
});

const useStyles = makeStyles(() => ({
  app: {
    display: "flex",
    justifyContent: "center",
    alignContent: "center",
  },
  mainWindow: {
    width: "450px",
    height: "500px",
    display: "flex",
    flexDirection: "column",
  },
  chatsListWindow: {
    width: "120px",
    height: "500px",
    display: "flex",
    flexDirection: "column",
  },
}));


function App() {
 const classes = useStyles();

  const usersNames = {
    USER: "Пользователь1",
    BOT: "Бот",
  };

  const botMessage = "Ожидайте ответа сотрудника";

  const [inputText, setInputText] = useState("");   //Сообщение в поле ввода 
  const [chatsList, setChatsList] = useState([]);   // Массив объектов чатов
  const [messagesList, setMessagesList] = useState([]);  // Массив объектов сообщений 
  const [lastName, setLastName] = useState();

  useEffect(() => {
    setChatsList((prev) => [
      ...prev,
      {
        id: "01",
        name: "Чат1",
      },
    ]);
    setChatsList((prev) => [
      ...prev,
      {
        id: "02",
        name: "Чат2",
      },
    ]);
  }, []);

  
  const storeMessageToList = (text, name) => {
    setMessagesList((prev) => [
      ...prev,
      {
        text: text,
        author: name,
      },
    ]);
    setLastName(name);
  };

  const onSendMessage = (name) => {
    storeMessageToList(inputText, name);
    setInputText("");
  };

  useEffect(() => {
    if (!!lastName && lastName !== usersNames.BOT) {
      setTimeout(() => {
        storeMessageToList(botMessage, usersNames.BOT);
      }, 1000);
    }
  }, [lastName]);

  return (
   <ThemeProvider theme={theme}>
      <div className={classes.app}>
        <div className={classes.chatsListWindow}>
          <ChatsScreen chats={chatsList} />
        </div>
        <div className={classes.mainWindow}>
          <MessagesScreen messages={messagesList} />
          <InputScreen
            value={inputText}
            onChange={setInputText}
            onSendMessage={onSendMessage}
            name={usersNames.USER}
          />
        </div>
      </div>
    </ThemeProvider>
  );
}

export default App;