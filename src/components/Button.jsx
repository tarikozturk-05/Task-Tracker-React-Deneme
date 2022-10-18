import React from 'react'

const Button = ({setShowAddTask,showAddTask}) => {
  return (
    <div>
        <button onClick={()=> setShowAddTask(!showAddTask)}>{showAddTask?"Close Add Task Bar":"Open Add Task Bar" }</button>
   <hr style={{height:"5px" , backgroundColor: "aquamarine", borderRadius: "10px" }} /> </div>
  )
}

export default Button