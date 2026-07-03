import { useEffect, useState } from 'react'
import { ThemeProvider } from './contexts/theme'
import ThemeButton from './components/themeButton'
import Card from './components/Card'

function App() {
  const [themeMode, setThemeMode] = useState('light')

  const lightTheme = () =>{
    setThemeMode("light")
  }

  const darkTheme = () =>{
    setThemeMode("dark")
  }

  useEffect(() => {
    document.querySelector('html').classList.remove("light", "dark");
    document.querySelector('html').classList.add(themeMode);

  }, [themeMode])
  

  return (
  <ThemeProvider value={{themeMode, lightTheme, darkTheme}}>
    <div className='flex flex-wrap min-h-screen justify-center items-center'>
      <div className='w-full flex flex-col items-center justify-center'>
        <div className='w-full max-w-sm items-center h-full'>
          <ThemeButton/>
        </div>
        <div className='w-full max-w-sm items-center h-full'>
          <Card/>
        </div>
      </div>
    </div>
  </ThemeProvider>
  )
}

export default App
