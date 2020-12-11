import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Error404 from './components/Error404';
import Home from './components/Home';
import Login from './components/Login';
import Navbar from './components/Nav';
import Profile from './components/Profile';
import Proute from './components/Proute';
import Signup from './components/Signup';
import Student from './components/Student';
import { TokenProvider } from './context/token';
import { UserProvider } from './context/user';

const App = () => {
  return (
    <TokenProvider>
      <UserProvider>
        <BrowserRouter>
          <Navbar className='desktop' />
          <main>
            <Switch>
              <Route path='/' component={Home} exact />
              <Route path='/students' component={Student} />
              <Proute path='/profile' component={Profile} />
              <Proute path='/login' component={Login} reverse />
              <Proute path='/signup' component={Signup} reverse />
              <Route path='*' component={Error404} />
            </Switch>
          </main>
        </BrowserRouter>
      </UserProvider>
    </TokenProvider>
  );
};
export default App;
