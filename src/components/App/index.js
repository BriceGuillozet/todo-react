import React from 'react';
import './styles.scss';

import Form from '../Form';
import Counter from '../Counter';
import Tasks from '../Tasks';

import data from '../../data/tasks';

class TodoApp extends React.Component {
  state = {
    list: data,
    inputText: 'Ajouter une tâche...',
  }

  render() {
    const { list, inputText } = this.state;
    const stillTodoCount = list.filter((todo) => !todo.done).length;

    return (
      <div className="app">
        <Form
          inputText={inputText}
          onInputChange={(enteredText) => {
            console.log(`l'user a tapé ${enteredText}`);
          }}
          onFormSubmit={() => {
            console.log("L'use à appuyé sur entrée");
          }}
        />
        <Counter
          total={stillTodoCount}
        />
        <Tasks
          list={list}
          onTodoCheck={(todo) => {
            console.log(todo);
          }}
        />
      </div>
    );
  }
}

export default TodoApp;
