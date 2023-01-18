import { useContext } from 'react'
import './App.css'

import Content from './Content'
import { ThemeContext, ThemeProvider } from './ThemeContext'


function App() {
  
  const { theme, toggleTheme } = useContext(ThemeContext)

  return (
      <div>
          <button onClick={toggleTheme}>Toggle theme</button>
          <Content />
      </div>
  )
}

export default App