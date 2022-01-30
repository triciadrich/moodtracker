import { Router } from '@reach/router';
import Main from './Views/Main';
import History from './Views/History';
import Edit from './Views/Edit';
import Resources from './Views/Resources';
import './App.css';

function App() {
  
  return (
    <div className="App">
      <Router>
        <Main path="/home" />
        <History path="/log" />
        <Edit path="/edit/:id" />
        <Resources path="/resources"/>
      </Router>
    </div>
  );
}

export default App;
