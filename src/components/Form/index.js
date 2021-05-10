import React from 'react';
import PropTypes from 'prop-types';
import './style.scss';

const Form = ({ inputText, onInputChange, onFormSubmit }) => (
  <form onSubmit={(evt) => {
    evt.preventDefault();
    onFormSubmit();
  }}
  >
    <input
      type="text"
      className="todo-input"
      placeholder="Saisir une tâche"
      value={inputText}
      onChange={(evt) => {
        const enteredText = evt.target.value;
        onInputChange(enteredText);
      }}
    />

  </form>
);

Form.propTypes = {
  inputText: PropTypes.string.isRequired,
  onInputChange: PropTypes.func.isRequired,
  onFormSubmit: PropTypes.func.isRequired,
};

export default Form;
