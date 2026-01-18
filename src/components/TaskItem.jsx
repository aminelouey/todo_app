function TaskItem({ task, onToggle, onDelete }) {
    return (
        <div className={`task-item ${task.completed ? 'completed' : ''}`}>
            <label className="task-checkbox">
                <input
                    type="checkbox"
                    checked={task.completed}
                    onChange={() => onToggle(task.id)}
                />
                <span className="checkbox-custom"></span>
            </label>

            <span className="task-text">{task.text}</span>

            <button
                className="delete-btn"
                onClick={() => onDelete(task.id)}
                title="Supprimer"
            >
                🗑️
            </button>
        </div>
    )
}

export default TaskItem
