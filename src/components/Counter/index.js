import React from 'react';
import PropTypes from 'prop-types';
import './style.scss';

const Counter = ({ total }) => (
  <p className="todo-counter">
    {total} {total > 1 ? 'tâches' : 'tâche'} en cours
  </p>
);

Counter.propTypes = {
  total: PropTypes.number.isRequired,
};

export default Counter;
