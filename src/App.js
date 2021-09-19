import './App.css';
import Header from './components/Header/Header'
import Sidebar from './components/Sidebar/Sidebar';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Chat from './components/Chat/Chat';

function App() {
  return (
    <div className="App">
      <Router>
        {/* Header component */}
        <Header />
        <div className="app__body">
          {/* Sidebar component */}
          <Sidebar />
          <Switch>
            <Route path="/room/:roomId">
              <Chat />
            </Route>
            <Route path="/">
              <h1>Welcome</h1>
            </Route>
          </Switch>
        </div>
        {/* React Router - Chat Screen*/}
      </Router>
    </div>
  );
}

export default App;
