import React from 'react';
import Portfolio from './components/Portfolio';
import { Analytics } from '@vercel/analytics/react';
import './index.css';

function App() {
  return (
    <div className="app">
      <Portfolio />
      <footer className="footer">
        <p>Contact: neskinescharles@gmail.com</p>
        <p>LinkedIN:  <a href="https://www.linkedin.com/in/neskines-o-5205b3177/" target='_blank' rel="noopener noreferrer" className='linkedin-link'> Let's Connect</a></p>
        <p>GitHub:  <a href="https://github.com/neski321" target='_blank' rel="noopener noreferrer" className='linkedin-link'> Happy coding!</a></p>
      </footer>
      <Analytics />
    </div>
  );
}

export default App;