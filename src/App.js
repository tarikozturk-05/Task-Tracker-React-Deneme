import { useState } from 'react';
import './App.css';
import AddTask from './components/AddTask';
import Header from './components/Header';
import Tasks from './components/Tasks';

function App() {
    const [showAddTask, setShowAddTask] = useState(true)
    //? ************
    const [tasks, setTasks] = useState([{
      text:"Do Homework",
      day:"11 11 2023",
      id:1,
      isDone:false
    }])


    const addTask=(newTask)=>{
      const id= Math.floor(Math.random()*1000 +1);
      const addNewTask = {id,...newTask}
      setTasks([...tasks,addNewTask])
    }
  return (
    <div className="App">
      <Header showAddTask={showAddTask} setShowAddTask={setShowAddTask}/>
      {showAddTask && <AddTask addTask={addTask} />}
      <Tasks tasks={tasks}/>
    
    </div>
  );
}

export default App;
