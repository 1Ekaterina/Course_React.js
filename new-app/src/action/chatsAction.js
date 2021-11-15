import { UPDATE_CHATS  } from "../store/types/chatsTypes";

export const updateChats = (data) => ({
  type: UPDATE_CHATS,
  payload: data,
});

export const getChats = () => async (dispatch) => {
  const responce = await fetch("http://localhost:3001/chats");
  const data = await responce.json();
  dispatch(updateChats(data));
};

export const addChat = (chatName) => async (dispatch) => {
  const responce = await fetch("http://localhost:3001/chats", {
    method: "POST",
    headers: { "Content-type": "application/json" },
    body: JSON.stringify({ chatName }),
  });
  const data = await responce.json();
  dispatch(updateChats(data));
};

export const deleteChat = (id) => async (dispatch) => {
  const responce = await fetch(`http://localhost:3001/chats?id=${id}`, {
    method: "DELETE",
  });
  const data = await responce.json();
  dispatch(updateChats(data));
};

