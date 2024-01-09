import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { Toaster } from 'react-hot-toast'
import { ContextProvider } from './ContextProvider/ThemeContext.jsx'

ReactDOM.createRoot(document.getElementById('root')).render(
   <ContextProvider>
    <Toaster position="top-center" reverseOrder={false} />
    <App />
    </ContextProvider>
)
