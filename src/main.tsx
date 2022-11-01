import { StrictMode, Suspense } from 'react'
import { createRoot } from 'react-dom/client'

import App from './App'
import './index.css'

createRoot(document.getElementById('root') as HTMLElement).render(
  <StrictMode>
    <Suspense>
      <App />
    </Suspense>
  </StrictMode>
)
