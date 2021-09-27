import React from 'react';
import ToDo from './components/todo/todo';
// import SettingsContext from './context/context';
import 'bootstrap/dist/css/bootstrap.min.css';
import SettingsForm from './context/settingForm'
import Header from './components/header/Header';
import '@blueprintjs/core/lib/css/blueprint.css'
import '@blueprintjs/icons/lib/css/blueprint-icons.css'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';



function App() {
  return (
    <>
      <Router>
        <Header />
        <Switch>
          {/* <SettingsContext> */}
            <Route exact path='/'>
              <ToDo />
            </Route>
            <Route exact path='/settingsForm'>
              <SettingsForm />
            </Route>
          {/* </SettingsContext> */}
        </Switch>
      </Router>
    </>
  );
}

export default App;