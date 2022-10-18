import React from 'react'
import Button from './Button'

const Header = ({setShowAddTask,showAddTask}) => {
  return (<div>
    <div className='header'>Task-Tracker</div>
    <Button showAddTask={showAddTask} setShowAddTask={setShowAddTask}/>
    
    </div>
  )
}

export default Header