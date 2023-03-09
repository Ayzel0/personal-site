import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import Intro from './components/Intro'
import Navbar from './components/Navbar'
import './styles/intro.css'
import './styles/navbar.css'
// import './index.css'

/*
ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Navbar />
    <Intro />
  </React.StrictMode>,
)
*/

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
)