import '../src/Css/App.css'
import { Route, BrowserRouter as Router, Routes } from 'react-router-dom'
import HomePage from './HomePage'
import TodoApp from './Pages/TodoApp'
import Counter from './Pages/Counter';

const DATA = [
  { id: "todo-0", name: "Eat", completed: true },
  { id: "todo-1", name: "Sleep", completed: false },
  { id: "todo-2", name: "Repeat", completed: false },
];
function App() {
  return (
    <Router>
    <Routes>
        <Route index element={<HomePage />} />
        <Route path='todoApp' element={<TodoApp dataTasks= {DATA}/>} />
        <Route path='counter' element={<Counter/>}/>
    </Routes>
  </Router>
  
  )
}

export default App
