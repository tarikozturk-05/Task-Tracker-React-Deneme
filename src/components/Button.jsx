import React from 'react'

const Button = ({setShowAddTask,showAddTask}) => {
  return (
    <div>
        <button onClick={()=> setShowAddTask(!showAddTask)}>Close Add Task Bar</button>
    </div>
  )
}

export default Button