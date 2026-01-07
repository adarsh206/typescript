
import './App.css'
import { UserCard } from './components/01_RequiredOptionalProps'
import { GreetA, GreetB } from './components/02_defaultProps'


function App() {

  return (
   <div>
    <h1>Hello Typescript</h1>
    <UserCard id = "1" name = "Adarsh" subtitle = {<p>Subtitle</p>}/>
    <GreetA />
    <GreetA name = "Adarsh" />
    <GreetB />
    
   </div>
  )
}

export default App
