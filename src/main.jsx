import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'

// --> import provider
import { CharacterProvider } from './context/CharacterContext.jsx'

createRoot(document.getElementById('root')).render(
  <CharacterProvider>
    <StrictMode>
      <App />
    </StrictMode>,
  </CharacterProvider>
)
