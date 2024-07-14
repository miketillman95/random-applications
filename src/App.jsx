import '../src/Css/App.css'
import { Route, BrowserRouter as Router, Routes } from 'react-router-dom'
import HomePage from './HomePage'
import TodoApp from './Pages/TodoApp'

function App() {
  return (
    <Router>
    <Routes>
        <Route index element={<HomePage />} />
        <Route path='todoApp' element={<TodoApp/>} />
    </Routes>
  </Router>
  
  )
}

export default App
