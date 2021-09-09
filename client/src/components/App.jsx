import { BrowserRouter, Switch, Route } from 'react-router-dom'
import Header from "./Header/Header";
import Registration from "./Registration/Registration";
import './app.scss'


function App() {
  return (
    <BrowserRouter>
      <div className="app">
        <Header />
        <Switch>
          <Route path="/registration" component={Registration}/>
        </Switch>
      </div>
    </BrowserRouter>
  );
}

export default App;
