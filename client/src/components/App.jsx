import { BrowserRouter, Switch, Route, Redirect } from 'react-router-dom'
import Header from "./Header/Header";
import './app.scss'
import Registration from "./Auth/Registration";
import Login from './Auth/Login';
import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';
import { auth } from '../utils/user';
import Disk from './Disk/Disk';


function App() {
  const isAuth = useSelector((state) => state.user.isAuth)
  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(auth())
  })

  return (
    <BrowserRouter>
      <div className="app">
        <Header />
        {
          !isAuth ?
            <Switch>
              <Route path="/login" component={Login} />
              <Route path="/registration" component={Registration} />
              <Redirect to="/login" />
            </Switch>
            :
            <Switch>
              <Route exact path="/" component={Disk} />
              <Redirect to="/" />
            </Switch>
        }
      </div>
    </BrowserRouter>
  );
}

export default App;
