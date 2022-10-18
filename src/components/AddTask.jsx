import React,{useState} from 'react'

const AddTask = () => {
      
    const [task, setTask] = useState({task:"ders çalış!!",
date:"--",
isDone:false}
)
const handleTask=(e)=>{

    setTask({ ...task ,task: task.task,
        date: task.date  } )
    e.target.value="";


}

  return (
 
        <form action="" className='container'>
        <label htmlFor="text">Task</label> <br />
        <input type="text" id='text' value={task.task} placeholder='AddTask'/>

<br />
<br />
        <label htmlFor="dayTime">Day & Time</label> <br />
        <input type="date" id='dayTime' value={task.date} placeholder='Add Day & Time'/>
<br />
<br />
        <button onClick={handleTask}>Save Task</button>
</form>
    
  )
}

export default AddTask