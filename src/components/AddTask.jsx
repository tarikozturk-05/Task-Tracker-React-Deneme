import React,{useState} from 'react'

const AddTask = ({addTask}) => {
    const [text, setText] = useState("");

    const [day, setDay] = useState("")

    const handleSubmit=(e)=>{

      e.preventDefault();
      addTask({text,day})
      // console.log(text);
      setText("")
      setDay("")

    }
    

  return (
 
        <form onSubmit={handleSubmit} action="" className='container'>
        <label htmlFor="text">Task</label> <br />
        <input type="text" id='text' onChange={(e)=> setText(e.target.value)} value={text} placeholder='AddTask' required />

<br />
<br />
        <label htmlFor="dayTime">Day & Time</label> <br />
        <input type="date" id='dayTime' onChange={(e)=> setDay(e.target.value)} value={day} placeholder='Add Day & Time' required/>
<br />
<br />
        <input id='save' type="submit" value="saveTask"/>
</form>
    
  )
}

export default AddTask