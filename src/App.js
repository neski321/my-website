import React from 'react';
import Portfolio from './components/Portfolio';
import './index.css';



function App() {
  return (
    <div className="app">
      <Portfolio />
      <footer className="footer">
        <p>Contact: neskinescharles@gmail.com</p>
        <p>LinkedURL: <a href="https://www.linkedin.com/in/neskines-o-5205b3177/" target='_blank' rel="noopener noreferrer" className='linkedin-link'>LinkedIN profile</a></p>
      </footer>
    </div>
  );
}

export default App;