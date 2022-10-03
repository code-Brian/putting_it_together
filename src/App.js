import './App.css'
import PersonCard from './components/PersonCard'

function App() {
  return (
    <div className="App">
      <PersonCard
        lastName={ "Marsh" }
        firstName={ "Stan" }
        hairColor={ "Dark brown" }
        // age is being passed in as default value for state
        age={ 10 }
      />
    </div>
  )
}

export default App
