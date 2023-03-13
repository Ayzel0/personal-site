import About from './components/About'
import Intro from './components/Intro'
import Navbar from './components/Navbar'
import Socials from './components/Socials'
import Counter from './components/Counter'
import './App.css'

function App() {
  return (
    <div className="app-container">
      <Navbar />
      <div className="grid-for-socials">
        <Socials />
        <div>
          <Intro />
          <About />
        </div>
      </div>
    </div>
  )
}

export default App;