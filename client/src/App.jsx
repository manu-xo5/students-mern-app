import Home from './components/Home';
import Nav from './components/Nav';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Login from './components/Login';
import Error404 from './components/Error404';
import Signup from './components/Signup';
import { TokenProvider } from './context/token';
import { UserProvider } from './context/user';

const App = () => {
  return (
    <TokenProvider>
      <UserProvider>
        <BrowserRouter>
          <header>
            <Nav />
          </header>
          <main>
            <Switch>
              <Route path='/' exact>
                <Home />
              </Route>
              <Route path='/login'>
                <Login />
              </Route>
              <Route path='/signup'>
                <Signup />
              </Route>
              <Route path='*'>
                <Error404 />
              </Route>
            </Switch>
          </main>
        </BrowserRouter>
      </UserProvider>
    </TokenProvider>
  );
};
export default App;
