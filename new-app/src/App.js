import { BrowserRouter as Router, Switch, Route, BrowserRouter} from "react-router-dom";
import Chat from "./Chat/index.js";
import Profile from "./Profile";
import Home from "./Home.js"

function App() {
 return (
   <BrowserRouter>
      <Switch>

        <Route path="/profile">
          <Profile />
        </Route>

        <Route
          exact
          path="/chat"
        >
          <Chat />
        </Route>

        <Route exact path="/">
          <Home />
        </Route>

        <Route>
          <h3>Page not found</h3>
        </Route>

      </Switch>
   </BrowserRouter>
 );
}

export default App;