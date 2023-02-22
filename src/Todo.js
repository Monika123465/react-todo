import React, { useState } from 'react'

const Todo = () => {
  const [input, setInput] = useState("")
  const [todo, setTodo] = useState([])

  const oninputChange = (e) => {

    setInput(e.target.value)
  }

  const onformsubmit = (e) => {
    e.preventDefault()
    setTodo([...todo, {text: input, isDone: false}])
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
          return <h1>{el.text}</h1>
          
          
        })
      }
    </>
  )
}

export default Todo