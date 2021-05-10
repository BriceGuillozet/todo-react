import React from 'react';
import './styles.scss';

import Form from '../Form';
import Counter from '../Counter';
import Tasks from '../Tasks';

import data from '../../data/tasks';

const App = () => (
  <div className="app">
    <Form
      inputText="texte en cours de saisi"
      onInputChange={(enteredText) => {
        console.log(`l'user a tapé ${enteredText}`);
      }}
      onFormSubmit={() => {
        console.log("L'use à appuyé sur entrée");
      }}
    />
    <Counter
      total={1}
    />
    <Tasks
      list={data}
      onTodoCheck={(todo) => {
        console.log(todo);
      }}
    />
  </div>
);

export default App;
