import React from 'react';
import { v4 as uuidv4 } from 'uuid';

import Form from '../Form';
import Counter from '../Counter';
import Tasks from '../Tasks';

import './styles.scss';
import data from '../../data/tasks';

class TodoApp extends React.Component {
  state = {
    list: data,
    inputText: '',
  };

  changeInputText = (enteredText) => {
    this.setState({
      inputText: enteredText,
    });
  };

  addTodo = () => {
    const { inputText, list } = this.state;
    const newTodo = {
      id: uuidv4(),
      label: inputText,
      done: false,
    };
    const newList = [...list, newTodo];
    this.setState({
      list: newList,
      inputText: '',
    });
  };

  handleTodoCheck = (todo) => {
    const { list } = this.state;
    const newList = list.map((todoObject) => {
      if (todoObject.id === todo.id) {
        const newObject = {
          ...todoObject,
          done: !todoObject.done,
        };
        return newObject;
      }
      return todoObject;
    });
    this.setState({
      list: newList,
    });
  }

  render() {
    const { list, inputText } = this.state;
    const stillTodoCount = list.filter((todo) => !todo.done).length;

    return (
      <div className="app">
        <Form
          inputText={inputText}
          onInputChange={this.changeInputText}
          onFormSubmit={this.addTodo}
        />
        <Counter
          total={stillTodoCount}
        />
        <Tasks
          list={list}
          onTodoCheck={this.handleTodoCheck}
        />
      </div>
    );
  }
}

export default TodoApp;
