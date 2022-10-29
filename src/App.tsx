import { useState } from 'react'
import GuestList from './state/GuestLIst'
import UserSearch from './state/UserSearch'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="App">
      <UserSearch />
    </div>
  )
}

export default App
