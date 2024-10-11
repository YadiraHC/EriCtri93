import { useState } from 'react'

import './App.css'
import DataGrid from './components/Dashboard/DataGrid';

function App() {
  const [count, setCount] = useState(0)

  return (
     <DataGrid/>
  )
}

export default App