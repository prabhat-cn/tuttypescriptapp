import React from 'react';
import { v4 as uuidv4 } from 'uuid';
import './App.css';
import Greet from './components/Greet';
import Person from './components/Person';
import Personlist from './components/Personlist';

function App() {
  const PersonName = {
    first: 'Rahul',
    last: 'kumar',
  };

  const nameList = [
    {
      id: uuidv4(),
      first: 'Brouse',
      last: 'Wing',
    },
    {
      id: uuidv4(),
      first: 'Robart',
      last: 'Brouse',
    },
    {
      id: uuidv4(),
      first: 'Task',
      last: 'Master',
    },
    {
      id: uuidv4(),
      first: 'Henry',
      last: 'Kavil',
    },
    {
      id: uuidv4(),
      first: 'William',
      last: 'Jonz',
    },
    {
      id: uuidv4(),
      first: 'Lara',
      last: 'Croft',
    },
  ];

  return (
    <div className="App">
      <Greet name="Capital Numbers" messageCount={10} isLogedIn={false} />
      <Person name={PersonName} />
      <Personlist names={nameList} />
    </div>
  );
}

export default App;
