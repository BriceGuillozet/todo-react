import React from 'react';
import PropTypes from 'prop-types';
import classname from 'classnames';
import './style.scss';

const Tasks = ({ list, onTodoCheck, onTodoRemove, onTodoFav }) => (
  <ul className="todo-list">
    {list.map((todoObject) => (
      <li
        key={todoObject.id}
        className={classname({
          todo: true,
          'todo--done': todoObject.done,
          'todo--fav': todoObject.fav,
        })}
      >
        <input
          checked={todoObject.done}
          className="todo--checkbox"
          type="checkbox"
          onChange={() => {
            onTodoCheck(todoObject);
          }}
        />
        <span className="todo--text">{todoObject.label}</span>
        <button
          type="button"
          className="todo--remove"
          onClick={() => {
            onTodoRemove(todoObject);
          }}
        >
          X
        </button>
        <button
          type="button"
          className="todo--remove"
          onClick={() => {
            onTodoFav(todoObject);
          }}
        >
          {todoObject.fav ? '⭐' : '✰' }
        </button>
      </li>
    ))}
  </ul>
);

Tasks.propTypes = {
  list: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      label: PropTypes.string.isRequired,
      done: PropTypes.bool.isRequired,
    }),
  ).isRequired,
  onTodoCheck: PropTypes.func.isRequired,
  onTodoRemove: PropTypes.func.isRequired,
  onTodoFav: PropTypes.func.isRequired,
};

export default Tasks;
