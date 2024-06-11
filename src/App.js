import React from 'react';
import Portfolio from './components/Portfolio';
import { Analytics } from '@vercel/analytics/react';
import './index.css';

function App() {
  return (
    <div className="app">
      <Portfolio />
      <footer className="footer">
        <h2>Contact: nmotieno@myseneca.ca</h2>
        <h3>LinkedIN:  <a href="https://www.linkedin.com/in/neskines-o-5205b3177/" target='_blank' rel="noopener noreferrer" className='linkedin-link'> Let's Connect</a></h3>
        <h3>GitHub:  <a href="https://github.com/neski321" target='_blank' rel="noopener noreferrer" className='linkedin-link'> Happy coding!</a></h3>
      </footer>
      <Analytics />
    </div>
  );
}

export default App;