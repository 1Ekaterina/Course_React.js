import {
  Button,
  Dialog,
  DialogTitle,
  TextField,
  List,
  ListItem,
} from "@material-ui/core";
import { useState } from "react";
import { useDispatch, useSelector, shallowEqual } from "react-redux";
import { addChat, deleteChat } from "../../action/chatsAction";
import { Link } from "react-router-dom";
import Header from "../Header/Header";
import "./module.chats.css";

function Chats() {
  const [visible, setVisible] = useState(false);
  const [newChatName, setNewChatName] = useState("");

  const chats = useSelector((state) => state.chats.chatList, shallowEqual);
  const dispatch = useDispatch();

  const handleClose = () => setVisible(false);
  const handleOpen = () => setVisible(true);
  const handleChange = (e) => setNewChatName(e.target.value);
  const onAddChat = () => {
    dispatch(addChat(newChatName));
    setNewChatName("");
    handleClose();
  };
  const handleDelete = (id) => {
    dispatch(deleteChat(id));
  };

  return (
    <>
      <Header />
      <div>
        <List>
          {chats
            ? chats.map((el) => (
                <div className="wrapper" key={el.id}>
                  <ListItem>
                    <Link to={`/chats/${el.id}`} className="chatName">{el.name}</Link>
                  </ListItem>
                  <button
                    className="delete-chat"
                    title="Удалить чат"
                    onClick={() => handleDelete(el.id)}
                  >
                    X
                  </button>
                </div>
              ))
            : null}
        </List>
        <Button className="add-chat" onClick={handleOpen}>
          Добавить чат
        </Button>
      </div>
      <Dialog open={visible} onClose={handleClose}>
        <DialogTitle>Введите название нового чата</DialogTitle>
        <TextField value={newChatName} onChange={handleChange} />
        <Button onClick={onAddChat} disabled={!newChatName}>
          Submit
        </Button>
      </Dialog>
    </>
  );
}

export default Chats;
