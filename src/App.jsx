import { useState, useEffect } from 'react'
import TaskForm from './components/TaskForm'
import Filters from './components/Filters'
import TaskList from './components/TaskList'
import './App.css'

const STORAGE_KEY = 'todo-app-tasks'

function App() {
  // État principal des tâches - initialisé depuis localStorage
  const [tasks, setTasks] = useState(() => {
    const saved = localStorage.getItem(STORAGE_KEY)
    return saved ? JSON.parse(saved) : []
  })
  
  // État du filtre actuel
  const [filter, setFilter] = useState('all')

  // Persistance dans localStorage à chaque changement
  useEffect(() => {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(tasks))
  }, [tasks])

  // Ajouter une nouvelle tâche
  const addTask = (text) => {
    const newTask = {
      id: crypto.randomUUID(), // Clé unique (pas d'index!)
      text: text.trim(),
      completed: false,
      createdAt: Date.now()
    }
    setTasks(prevTasks => [newTask, ...prevTasks])
  }

  // Marquer une tâche comme terminée/non terminée
  const toggleTask = (id) => {
    setTasks(prevTasks => 
      prevTasks.map(task => 
        task.id === id ? { ...task, completed: !task.completed } : task
      )
    )
  }

  // Supprimer une tâche
  const deleteTask = (id) => {
    setTasks(prevTasks => prevTasks.filter(task => task.id !== id))
  }

  // Filtrer les tâches selon le filtre actif
  const filteredTasks = tasks.filter(task => {
    if (filter === 'active') return !task.completed
    if (filter === 'completed') return task.completed
    return true // 'all'
  })

  // Compteur de tâches restantes
  const remainingCount = tasks.filter(task => !task.completed).length

  return (
    <div className="app">
      <header className="app-header">
        <h1 className="app-title">📋 To-Do List</h1>
        <p className="app-subtitle">Gérez vos tâches quotidiennes</p>
      </header>

      <main className="app-container">
        <TaskForm onAddTask={addTask} />
        
        <Filters 
          currentFilter={filter} 
          onFilterChange={setFilter} 
        />
        
        <TaskList 
          tasks={filteredTasks}
          onToggle={toggleTask}
          onDelete={deleteTask}
        />

        <footer className="app-footer">
          <span className="task-counter">
            <strong>{remainingCount}</strong> tâche{remainingCount !== 1 ? 's' : ''} restante{remainingCount !== 1 ? 's' : ''}
          </span>
        </footer>
      </main>
    </div>
  )
}

export default App
