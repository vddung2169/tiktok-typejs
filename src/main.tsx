import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.tsx'

import GlobalStyle from './Components/GlobalStyle/index.ts'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <GlobalStyle>
      <App />
    </GlobalStyle>
  </StrictMode>,
)
