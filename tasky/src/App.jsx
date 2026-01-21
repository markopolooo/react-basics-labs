import './App.css';
import React from 'react';
import Task from './components/Task';


function App() {
  return (
    <div className="container">
      <h1>Tasky</h1>
      <Task title="Dishes" deadline="Today" description="wash dishes and drown." />
      <Task title="Laundry" deadline="Tomorrow" description="fold and organize laundry" />
      <Task title="Grocery Shopping" deadline="This Weekend" description="buy groceries for the week" />
    </div>
  );
}

export default App;
