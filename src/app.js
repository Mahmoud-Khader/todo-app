import React, { useContext } from 'react';
import ToDo from './components/todo/todo';

import 'bootstrap/dist/css/bootstrap.min.css';
import SettingsForm from './context/settingForm'
import Header from './components/header/Header';
import '@blueprintjs/core/lib/css/blueprint.css'
import '@blueprintjs/icons/lib/css/blueprint-icons.css'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Login from './components/login/login';
import Auth from './components/login/auth';
import LoginProvider from './context/loginContext';
import SettingsContext from './context/context';


function App() {
  return (
    <>
              <SettingsContext>
      <LoginProvider>
        <Login />
        <Router>
          <Header />
          <Switch>
            <Auth capability="read">
              <Route exact path='/'>
                <ToDo />
              </Route>
            {/* <Auth capability="create"> */}
              <Route exact path='/settingsForm'>
                <SettingsForm />
              </Route>
            {/* </Auth> */}
            </Auth >

          </Switch>


        </Router>
      </LoginProvider>
               </SettingsContext>
    </>
  );
}

export default App;