import { useState } from 'react'

function TaskForm({ onAddTask }) {
    const [text, setText] = useState('')

    const handleSubmit = (e) => {
        e.preventDefault() // Empêcher le rechargement de la page

        if (!text.trim()) return // Ne pas ajouter de tâche vide

        onAddTask(text)
        setText('') // Réinitialiser l'input
    }

    return (
        <form className="task-form" onSubmit={handleSubmit}>
            <input
                type="text"
                className="task-input"
                placeholder="Ajouter une nouvelle tâche..."
                value={text}
                onChange={(e) => setText(e.target.value)}
                autoFocus
            />
            <button type="submit" className="add-btn">
                Ajouter
            </button>
        </form>
    )
}

export default TaskForm
