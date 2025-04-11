import React from 'react'

function Header({ onDarkModeClick, isDarkMode }) {
    
  return (
    <div>
        <button onClick={onDarkModeClick}>
        {isDarkMode ? "Light" : "Dark"} Mode
        </button>
    </div>
  )
}

export default Header