import {v4 as uuidv4} from 'uuid'
import {useState} from 'react'
import './App.css'

// Replace your code here
const App = () => {
  const [countList, setCountList] = useState([
    {id: uuidv4(), inputData: 'hello world'},
  ])
  const [countInput, setCountInput] = useState('')
  const handleCountInput = e => {
    setCountInput(e.target.value)
  }
  const handleAddBut = () => {
    if (countInput.trim() !== '') {
      const newItem = {id: uuidv4(), inputData: countInput}
      setCountList(prevState => [...prevState, newItem])
      setCountInput('')
    }
  }

  return (
    <div className="main-container">
      <div className="container1">
        <h1>Count the characters like a Boss...</h1>
        {countList.length === 0 ? (
          <img
            src="https://assets.ccbp.in/frontend/react-js/no-user-inputs-img.png"
            alt="no user inputs"
          />
        ) : (
          <ul>
            {countList.map(eachItem => (
              <li key={eachItem.id}>
                <div>
                  <h1>
                    {eachItem.inputData}: {eachItem.inputData.length}
                  </h1>
                </div>
              </li>
            ))}
          </ul>
        )}
      </div>
      <div className="container2">
        <h1>Characters Counter</h1>
        <input
          type="text"
          placeholder="enter the value"
          value={countInput}
          onChange={handleCountInput}
        />
        <button onClick={handleAddBut}>Add</button>
      </div>
    </div>
  )
}

export default App
