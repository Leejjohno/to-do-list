import { createElement } from 'react';
import './App.css';
import Todo from './components/Todo';

const [textBox, setTextBox] = useState("Enter Task Here")

function App() {
  const submitHandler = (textBox) => {
    if (textBox === "" || "Enter Task Here") {
      return;
    } else { (createElement(Todo))
    }
  }

  return (
    <div className='App'>
      <div className='container'>
        <Input textbox={textBox} />
          <button createElement={createElement}></button>
        <listItem />
      </div>
    </div>
  )
}

export default App;
