import React from 'react';
import PropTypes from 'prop-types';
import './style.scss';

const Tasks = () => (

  <ul className="todo-list">
    <li className="todo todo--done">
      <input checked className="todo--checkbox" type="checkbox" />
      <span className="todo--text">Texte de la todo</span>
    </li>
    <li className="todo">
      <input className="todo--checkbox" type="checkbox" />
      <span className="todo--text">Texte de la todo</span>
    </li>
    <li className="todo">
      <input className="todo--checkbox" type="checkbox" />
      <span className="todo--text">Texte de la todo</span>
    </li>
    <li className="todo">
      <input className="todo--checkbox" type="checkbox" />
      <span className="todo--text">Texte de la todo</span>
    </li>
  </ul>
);

export default Tasks;
