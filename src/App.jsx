import { useState } from 'react'
import './App.css'
import Frame from './Frame.jsx'


function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div className="App">
        <h1>CV Application</h1>
        <div>This application allows one to enter their information and transform it into a CV.</div>
        <Frame />
      </div>
    </>
  )
}

export default App
