import ListOfTodos from './components/ListOfTodos';
import React, {createElement, useState} from "react";
import Test from './components/Test';

export const App = () => {
  const [todo, setTodo] = useState ()
  const [todoArray, setTodoArray] = useState ([])

  const handleChange = (event) => {
    console.log(event.target.value)
    setTodo(event.target.value)
    console.log("Todo: ", todo)
  }

  const submitHandler = (event) => {
    event.preventDefault()
    const tempArray = [...todoArray]
    tempArray.push(todo)
    setTodoArray(tempArray)
    setTodo("")
  }

  return (
    <div className='App'>
      <div className='container'>
        <input value={todo} placeholder="Enter Task Here" onChange={ handleChange }/>
          <button onClick={ submitHandler }
          >+</button>
        <ListOfTodos todoArray={todoArray}/>
        <Test />
      </div>
    </div>
  )
}

export default App;
