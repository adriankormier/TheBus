import React from 'react';
import { createRoot } from 'react-dom/client';
import './styles.css';
import MainContainer from './containers/MainContainer.jsx';

const App = () => {
  return <MainContainer />;
};

const root = createRoot(document.getElementById('root'));
root.render(<App />);
