import React from 'react';
import PropTypes from 'prop-types';
import './style.scss';

class Form extends React.Component {
  input = React.createRef();

  componentDidMount() {
    this.input.current.focus();
  }

  render() {
    const { onFormSubmit, onInputChange, inputText } = this.props;
    return (
      <form onSubmit={(evt) => {
        evt.preventDefault();
        onFormSubmit();
      }}
      >
        <input
          ref={this.input}
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
  }
}

Form.propTypes = {
  inputText: PropTypes.string.isRequired,
  onInputChange: PropTypes.func.isRequired,
  onFormSubmit: PropTypes.func.isRequired,
};

export default Form;
