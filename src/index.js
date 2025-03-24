import React from 'react';
import ReactDOM from 'react-dom/client';
// import './index.css';
// import App from './App';

import StaticRating from './StarRating';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    {/* <App /> */}
    <StaticRating
      maxRating={5}
      messages={('Terrible', 'Bad', 'Okay', 'Good', 'Amazing')}
    />
    <StaticRating size={24} color='red' className='test' />
  </React.StrictMode>
);
