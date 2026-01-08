
import './App.css'
import { UserCard } from './components/01_RequiredOptionalProps'
import { GreetA, GreetB } from './components/02_defaultProps'
import { Panel, RequiredChildrenPanel } from './components/03_ChildrenReactNode'
import { Button } from './components/05_ComponentProps'
import { Counter } from './components/06_state'


function App() {

  return (
   <div>
    <h1>Hello Typescript</h1>
    <UserCard id = "1" name = "Adarsh" subtitle = {<p>Subtitle</p>}/>
    <GreetA />
    <GreetA name = "Adarsh" />
    <GreetB />
    <Panel title='Panel1'/>
    <Panel title='Panel2' children={<ul><li>One Click</li></ul>}/>
    <RequiredChildrenPanel title= "Hello" children={<p>Children Present</p>}/>
    <RequiredChildrenPanel title='Hello Again'>
      Some Children Content
    </RequiredChildrenPanel>
    <Button onClick={() => alert('Button Clicked')} variant='primary'>
      Text
    </Button>
    <Counter />
    
   </div>
  )
}

export default App
