import { useState } from 'react'
import './App.css'

function App() {
  // Array of colors 
  const colors = ['#FF5733', '#33FF57', '#3357FF', '#F033FF', '#FF33F0']
  const [colorIndex, setColorIndex] = useState(0)

  const changeBackgroundColor = () => {
    // Calculate the next index and wrapp around to 0 when at the end
    setColorIndex((prevIndex) => (prevIndex + 1) % colors.length)
  }

  return (
    <div 
      className="app-container"
      style={{ backgroundColor: colors[colorIndex] }}
    >
      <button 
        className="color-button"
        onClick={changeBackgroundColor}
      >
        Change Color
      </button>
    </div>
  )
}

export default App