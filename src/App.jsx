import { useState } from 'react'
import heroImg from './assets/hero.png'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import './App.css'

function App() {
  // We use hooks to make changes in UI.

  let [counter, setCounter] = useState(15) 
  
  // we can add any thing iside these (initil value).
  // let counter = 15. We can also give any name to the variable instead of setCounter.

  const addValue = () => {
    console.log("Clicked", counter);
    
  //  counter = counter + 1

  // setCounter(counter) // we can use this also but then we have to remove counter = counter + 1.
    if (counter < 20){
     setCounter(counter => counter + 1) // add new vlue to be added.  
     setCounter(prevCounter => prevCounter + 1) 
     setCounter(prevCounter => prevCounter + 1) 
     setCounter(prevCounter => prevCounter + 1) // because react use fibre which works on diffin algorithm sends the task in batches here all task is same that's why it wil increase only one time.If i have to do so then we have to do the above things.
    }
  }

  const removeValue = () => {
    if (counter > 0){
      setCounter(counter - 1)
    }
  }

  return (
    <>
    <h1>React</h1>
    <h2>Counter value: {counter}</h2>
    <button
    onClick={addValue}>Add Value {counter}</button>
    <br />
    <button
    onClick={removeValue}>Remove value {counter}</button>
    </>
  )
}

export default App
