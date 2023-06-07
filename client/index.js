import React from 'react';
import { createRoot } from 'react-dom/client';
import { Provider } from 'react-redux';
import store from './store.js'
import './styles.css'
import MainContainer from './containers/MainContainer.jsx';

const App = () => {
  return <MainContainer />;
};

const root = createRoot(document.getElementById('root')); 
root.render(<App />);
