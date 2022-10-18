import React from 'react'
import Task from './Task'

const Tasks = ({tasks}) => {
  
  return (
    <div>
      {tasks.map((item,index)=>(

        <Task key={index} item={item}/>
              ))}


    </div>
    
  )
}

export default Tasks