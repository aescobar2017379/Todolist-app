//import useLocalStorage from './hooks/useLocalStorage'
import TodoList from './components/TodoList'

function App() {
  return (
    <div className="container">
      <header>
        <h1>Almacenadora de Tareas</h1>
      </header>
      <TodoList />
    </div>
  )
}

export default App