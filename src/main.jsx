import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { Toaster } from 'react-hot-toast'

ReactDOM.createRoot(document.getElementById('root')).render(
   <div>
    <Toaster position="top-center" reverseOrder={false} />
    <App />
    </div>
)
