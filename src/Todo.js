import React, { useState } from 'react'

const Todo = () => {
  const [input, setInput] = useState("")
  const [todo, setTodo] = useState([])

  const oninputChange = (e) => {
  
    setInput(e.target.value)
  }

  const onformsubmit = (e) => {
    e.preventDefault()
    setTodo([...todo, { text: input, isDone: false, id: Math.random() * 100000 }])
  }

  const handleUpdate = (id) => {
  
    let localTodo = [...todo];
    for(let i = 0; i< localTodo.length; i++) {
      if(localTodo[i].id === id ) {
        if(localTodo[i].isDone === false) {
          localTodo[i].isDone = true
        }else {
          localTodo[i].isDone = false
        }
      
        break;
      }
    }
    setTodo(localTodo);
  }
  const handleDelete=(id)=>{
   const removeItem=todo.filter((todos)=>{

    return todos.id !== id
   })
    
    
      setTodo(removeItem)
  }



  return (
    <>
    <div  style={{width:"50%" ,margin:"auto",marginTop:'100px',boxShadow: 'rgba(100, 100, 111, 0.2) 0px 7px 29px 0px',backgroundColor:"skyblue",color:'white',paddingBottom:"40px"}}>
      <form onSubmit={onformsubmit} style={{marginBottom:"40px"}}>
        <h1 style={{fontSize:"25px",margin:"40px",paddingTop:"40px"}}>Todo</h1>
        <input style={{width:"400px",height:'30px',color:"black"}} type='text' placeholder='Add Todo' onChange={oninputChange} />
        <button style={{width:"100px",height:"40px",border:"1px solid blueviolet",marginLeft:'20px',backgroundColor:"violet"}} type='submit'>Add Todo </button>
      </form>

      {
        todo.map(el => {
          return <div key={el.id} style={{display:"flex",gap:"40px",margin:"auto",marginBottom:"20px"}}>
            <h1 style={{width:"400px",marginLeft:"60px"}}>{el.text} </h1>
            <button style={{width:"200px",height:"40px",border:"1px solid blueviolet",marginLeft:'20px',backgroundColor:"violet"}} onClick={() => {handleUpdate(el.id)}}>{el.isDone ? "completed" : "not completed"}</button>
            <button style={{width:"120px",height:"40px",border:"1px solid blueviolet",marginLeft:'20px',backgroundColor:"violet"}} onClick={()=>{handleDelete(el.id)}}>Remove Todo</button>
          </div>




        })
      }</div>

    </>
  )
}

export default Todo