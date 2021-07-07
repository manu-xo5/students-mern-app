import { BrowserRouter, Route, Switch } from "react-router-dom";
import { Error404 } from "./pages/Error404";
import { Home } from "./pages/index";
import { Login } from "./pages/Login";
import { Navbar } from "./components/Nav";
import { Profile } from "./pages/Profile";
import { Proute } from "./components/Proute";
import { Signup } from "./pages/Signup";
import { Student } from "./components/Student";
import { TokenProvider } from "./context/token";
import { UserProvider } from "./context/user";

export const App = () => {
  return (
    <TokenProvider>
      <UserProvider>
        <BrowserRouter>
          <Navbar className="desktop" />
          <main>
            <Switch>
              <Route path="/" component={Home} exact />
              <Route path="/students" component={Student} />
              <Proute path="/profile" component={Profile} />
              <Proute path="/login" component={Login} reverse />
              <Proute path="/signup" component={Signup} reverse />
              <Route path="*" component={Error404} />
            </Switch>
          </main>
        </BrowserRouter>
      </UserProvider>
    </TokenProvider>
  );
};
