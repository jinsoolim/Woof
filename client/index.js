import React from 'react';
import { render } from 'react-dom';
import App from './App.jsx';
import './styles.css';

render(<App style="width: 100%; display: flex; justify-content: center;"/>, document.getElementById('app'));
