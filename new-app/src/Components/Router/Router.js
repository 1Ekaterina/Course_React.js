import { BrowserRouter, Route } from "react-router-dom";
import ChatPage from "../ChatPage/ChatPage";
import Chats from "../Chats/Chats";
import Header from "../Header/Header";
import Profile from "../Profile/Profile";

function Router() {
  return (
    <BrowserRouter>
      <Route exact path="/" component={Header}></Route>
      <Route exact path="/profile" component={Profile}></Route>
      <Route exact path="/chats" component={Chats}></Route>
      <Route exact path="/chats/:chatId" component={ChatPage}></Route>
    </BrowserRouter>
  );
}

export default Router;
