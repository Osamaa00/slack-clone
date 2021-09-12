import './App.css';
import Header from './components/Header/Header'
import Sidebar from './components/Sidebar/Sidebar';

function App() {
  return (
    <div className="App">
    
      {/* Header component */}
      <Header />
      <div className="app__body">
        {/* Sidebar component */}
        <Sidebar />
      </div>
      {/* React Router - Chat Screen*/}
    </div>
  );
}

export default App;
