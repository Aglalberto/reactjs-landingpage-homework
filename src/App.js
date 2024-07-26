import './App.css';
import Home from './components/home.js';

import Content from './components/content/content.js';
import Navbar from './components/navbar/navbar.js';


function App() {
  return (
    <div className="main">
      <Navbar/>
      <Content/>
    </div>
  );
}

export default App;