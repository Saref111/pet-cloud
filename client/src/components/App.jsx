import { BrowserRouter, Switch, Route } from 'react-router-dom'
import Header from "./Header/Header";
import './app.scss'
import Registration from "./Auth/Registration";
import Login from './Auth/Login';
import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';
import { auth } from '../utils/user';


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
          !isAuth &&
          <Switch>
            <Route path="/login" component={Login} />
            <Route path="/registration" component={Registration} />
          </Switch>
        }
      </div>
    </BrowserRouter>
  );
}

export default App;
