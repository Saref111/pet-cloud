import { BrowserRouter, Switch, Route } from 'react-router-dom'
import Header from "./Header/Header";
import './app.scss'
import Registration from "./Auth/Registration";
import Login from './Auth/Login';


function App() {
  return (
    <BrowserRouter>
      <div className="app">
        <Header />
        <Switch>
          <Route path="/registration" component={Registration} />
        </Switch>
        <Switch>
          <Route path="/login" component={Login} />
        </Switch>
      </div>
    </BrowserRouter>
  );
}

export default App;
