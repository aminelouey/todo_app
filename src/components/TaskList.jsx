import TaskItem from './TaskItem'

function TaskList({ tasks, onToggle, onDelete }) {
    if (tasks.length === 0) {
        return (
            <div className="task-list">
                <div className="empty-state">
                    <div className="empty-icon">📝</div>
                    <p className="empty-text">Aucune tâche à afficher</p>
                </div>
            </div>
        )
    }

    return (
        <div className="task-list">
            {tasks.map(task => (
                <TaskItem
                    key={task.id}
                    task={task}
                    onToggle={onToggle}
                    onDelete={onDelete}
                />
            ))}
        </div>
    )
}

export default TaskList
