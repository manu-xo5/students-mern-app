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
import { useEffect, useState } from "react";
import Api from "./helpers/api";
import Navbar from "./components/Nav";

const App = () => {
  const [students, setStudents] = useState([]);

  useEffect(() => {
    const _main = async () => {
      const data = await Api.getStudents();
      if (data?.students) setStudents(data.students);
    };

    window.addEventListener("visibilitychange", _main);
    _main();

    return () => window.removeEventListener("visibilitychange", _main);
  }, []);

  return (
    <TokenProvider>
      <UserProvider>
        <BrowserRouter>
          <Navbar className="desktop" />
          <main>
            <Switch>
              <Route path="/" children={<Home students={students} />} exact />
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
export default App;
