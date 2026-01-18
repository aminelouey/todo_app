function Filters({ currentFilter, onFilterChange }) {
    const filters = [
        { id: 'all', label: 'Toutes' },
        { id: 'active', label: 'En cours' },
        { id: 'completed', label: 'Terminées' }
    ]

    return (
        <div className="filters">
            {filters.map(filter => (
                <button
                    key={filter.id}
                    className={`filter-btn ${currentFilter === filter.id ? 'active' : ''}`}
                    onClick={() => onFilterChange(filter.id)}
                >
                    {filter.label}
                </button>
            ))}
        </div>
    )
}

export default Filters
