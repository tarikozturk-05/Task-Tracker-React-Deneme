import { useState } from 'react';
import './App.css';
import AddTask from './components/AddTask';
import Header from './components/Header';

function App() {
    const [showAddTask, setShowAddTask] = useState(true)

  return (
    <div className="App">
      <Header showAddTask={showAddTask} setShowAddTask={setShowAddTask}/>
      {showAddTask && <AddTask/>}
    
    </div>
  );
}

export default App;
