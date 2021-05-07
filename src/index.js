import React from 'react';
import ReactDOM from 'react-dom';
import './styles/index.css';
import Board from './components/Board';
import { observe } from './Game';

observe((knightPosition) =>
  ReactDOM.render(
    <Board knightPosition={knightPosition} />,
    document.getElementById('root')
  )
);
