import Home from "./components/Home";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import Proute from "./components/Proute";
import Login from "./components/Login";
import Profile from "./components/Profile";
import Error404 from "./components/Error404";
import Signup from "./components/Signup";
import { TokenProvider } from "./context/token";
import { UserProvider } from "./context/user";
import Student from "./components/Student";

const App = () => {
  return (
    <TokenProvider>
      <UserProvider>
        <BrowserRouter>
          <main>
            <Switch>
              <Route path="/" component={Home} exact />
              <Route path="/students" component={Student} />
              <Proute path="/profile" component={Profile} />
              <Proute path="/login" component={Login} reverse />
              <Route path="/signup" component={Signup} />
              <Route path="*" component={Error404} />
            </Switch>
          </main>
        </BrowserRouter>
      </UserProvider>
    </TokenProvider>
  );
};
export default App;
