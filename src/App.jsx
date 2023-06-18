import React from 'react';
import TaskBox from './components/TaskBox';
import TaskList from './components/TaskList';

const App = () => {
  return (
    <div className=" mx-auto">
      <TaskBox></TaskBox>
      <TaskList></TaskList>
    </div>
  );
};

export default App;