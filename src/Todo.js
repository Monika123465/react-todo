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
      <form onSubmit={onformsubmit}>
        <h1>Todo</h1>
        <input type='text' placeholder='Add Todo' onChange={oninputChange} />
        <button type='submit'>Add Todo </button>
      </form>

      {
        todo.map(el => {
          return <div key={el.id}>
            <h1>{el.text} </h1>
            <button onClick={() => {handleUpdate(el.id)}}>{el.isDone ? "completed" : "not completed"}</button>
            <button onClick={()=>{handleDelete(el.id)}}>Remove Todo</button>
          </div>




        })
      }
    </>
  )
}

export default Todo