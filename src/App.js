import {v4 as uuidv4} from 'uuid'
import {useState} from 'react'
import './App.css'

const App = () => {
  const [countList, setCountList] = useState([])
  const [countInput, setCountInput] = useState('')

  const handleCountInput = e => {
    setCountInput(e.target.value)
  }

  const handleAddBut = e => {
    e.preventDefault() // Prevent page reload on form submit
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
                <p>
                  {eachItem.inputData}: {eachItem.inputData.length}
                </p>
              </li>
            ))}
          </ul>
        )}
      </div>
      <div className="container2">
        <h1>Character Counter</h1>
        <form onSubmit={handleAddBut}>
          <input
            type="text"
            placeholder="Enter the Characters here"
            value={countInput}
            onChange={handleCountInput}
          />
          <button type="submit">Add</button>
        </form>
      </div>
    </div>
  )
}

export default App
