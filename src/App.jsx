import { useState } from 'react'
import Post from './Posts'
import './App.css'
import Posts from './Posts'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <h3>React core concepts Reacp</h3>
      <hr />

      <ol>
        <li>Components</li>
        <li>JSX</li>
        <li>Props</li>
        <li>state</li>
        <li>Event Handler</li>
        <li> load data</li>
      </ol>
      <hr />
      <Posts></Posts>
    </>
  )
}

export default App
