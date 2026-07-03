import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import Clock from './Clock.jsx'
import IncAndDec from './IncAndDec.jsx'
import List from './List.jsx'
import UnControlled from './Uncontrolled.jsx'
import Form from './Form.jsx'
createRoot(document.getElementById('root')).render(
  <>
  <UnControlled/>
  </>
)
