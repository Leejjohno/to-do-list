import Todo from './components/Todo';
import React, {useState} from "react";

export const App = () => {
  const [textBox, setTextBox] = useState("Enter Task Here")

  const submitHandler = (textBox) => {
    if (textBox === "" || "Enter Task Here") {
      return;
    } else { (submitHandler(Todo))
    }
  }

  return (
    <div className='App'>
      <div className='container'>
        <input textbox={textBox} />
          <button setTextBox={submitHandler(Todo)}></button>
        <listItem />
      </div>
    </div>
  )
}

export default App;
