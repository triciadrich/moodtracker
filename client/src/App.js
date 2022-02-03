import { useState } from 'react';
import { Router } from '@reach/router';
import Main from './Views/Main';
import History from './Views/History';
import Edit from './Views/Edit';
import Resources from './Views/Resources';
import LoginView from './Views/LoginView';
import RegistrationView from './Views/RegistrationView';
import './App.css';

function App(props) {

  const [loggedIn, setLoggedIn] = useState(false);
  
  return (
    <div className="App">
      <Router>
        <Main path="/home" loggedIn={loggedIn} setLoggedIn={setLoggedIn} />
        <History path="/log" loggedIn={loggedIn} setLoggedIn={setLoggedIn} />
        <Edit path="/edit/:id" loggedIn={loggedIn} setLoggedIn={setLoggedIn} />
        <Resources path="/resources" loggedIn={loggedIn} setLoggedIn={setLoggedIn} />
        <LoginView path="/" loggedIn={loggedIn} setLoggedIn={setLoggedIn} />
        <RegistrationView path="/register" loggedIn={loggedIn} setLoggedIn={setLoggedIn} />
      </Router>
    </div>
  );
}

export default App;
