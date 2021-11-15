import { BrowserRouter, Route, Switch } from "react-router-dom";
import ChatPage from "../ChatPage/ChatPage";
import Chats from "../Chats/Chats";
import HomePage from "../HomePage/HomePage";
import NotFound from "../NotFound/NotFound";
import Profile from "../Profile/Profile";
import AnimeQuotes from "../AnimeQuotes/AnimeQuotes";
import PrivateRoute from "./PrivateRoute";

function Router() {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/" component={HomePage}></Route>
        <PrivateRoute exact path="/profile" component={Profile}></PrivateRoute>
        <PrivateRoute exact path="/chats" component={Chats}></PrivateRoute>
        <PrivateRoute
          exact
          path="/chats/:chatId"
          component={ChatPage}
        ></PrivateRoute>
        <PrivateRoute
          exact
          path="/quotes"
          component={AnimeQuotes}
        ></PrivateRoute>
        <PrivateRoute path="*" component={NotFound}></PrivateRoute>
      </Switch>
    </BrowserRouter>
  );
}

export default Router;
