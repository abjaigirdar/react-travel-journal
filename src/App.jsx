import './App.css'
import Hero from './components/Hero'
import Navbar from './components/Navbar'
import Data from './components/Data'

function App() {

  const elements = Data.map((items) => {
    return (
      <Hero 
      key={items.id}
      {...items}
      />
    )
  })

  return (
    <div className="App">
      <Navbar/>
      <div className='main--hero--div'>
        {elements}
        </div>
    </div>
  )
}

export default App
