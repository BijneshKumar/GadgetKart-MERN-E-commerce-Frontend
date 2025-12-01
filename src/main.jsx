import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import '../node_modules/bootstrap/dist/css/bootstrap.css'
import App from './App.jsx'
import AppState from './context/AppState.jsx'


createRoot(document.getElementById('root')).render(
  <AppState>
    <App />
  </AppState>,
)
