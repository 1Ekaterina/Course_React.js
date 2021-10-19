const express = require("express"); 
const logger = require("morgan"); 
const app = express();
const cors = require("cors"); 

app.use(express.urlencoded({ extended: false })); 
app.use(express.json()); 
app.use(cors()); 
app.use(logger("dev")); 

const users = [{ email: "sobaka@mail.ru", password: "sobaka" }];
const chats = { chatList: [{ id: "id0", name: "БОТ" }] };
const messages = {
  messageList: {
    ["id0"]: [
      {
        id: 0,
        text: "Добро пожаловать",
        author: "БОТ",
      },
    ],
  },
};

app.post("/auth", (req, res) => {
  const { email, password } = req.body;
  if (email && password) {
    for (let i = 0; i < users.length; i++) {
      if (users[i].email === email && users[i].password === password) {
        return res.json(users[i]);
      }
    }
  }
  res.sendStatus(400);
});

app.get("/chats", (req, res) => {
  return res.json(chats.chatList);
});

app.post("/chats", (req, res) => {
  const { chatName } = req.body;
  if (chatName) {
    chats.chatList.push({ id: `id${chats.chatList.length}`, name: chatName });
    return res.json(chats.chatList);
  }
});

app.delete("/chats", (req, res) => {
  const { id } = req.query;
  if (id) {
    chats.chatList = chats.chatList.filter((el) => el.id !== id);
    delete messages.messageList[id];
    return res.json(chats.chatList);
  }
});

app.get("/messages", (req, res) => {
  return res.json(messages.messageList);
});

app.post("/messages", (req, res) => {
  const { chatId, text, author } = req.body;
  if (chatId && author) {
    const currentList = messages.messageList[chatId] || [];
    messages.messageList = {
      ...messages.messageList,
      [chatId]: [
        ...currentList,
        {
          id: currentList.length,
          text: text,
          author: author,
        },
      ],
    };
  }
  return res.json(messages.messageList);
});

app.listen(3000, () => {
  console.log("server start");
});