import { BrowserRouter, Route, Switch } from "react-router-dom";
import ChatPage from "../ChatPage/ChatPage";
import Chats from "../Chats/Chats";
import Header from "../Header/Header";
import NotFound from "../NotFound/NotFound";
import Profile from "../Profile/Profile";

function Router() {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/" component={Header}></Route>
        <Route exact path="/profile" component={Profile}></Route>
        <Route exact path="/chats" component={Chats}></Route>
        <Route exact path="/chats/:chatId" component={ChatPage}></Route>
        <Route path="*" component={NotFound}></Route>
      </Switch>    
    </BrowserRouter>
  );
}

export default Router;
