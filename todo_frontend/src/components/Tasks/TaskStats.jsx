const TaskStats = ({ tasks }) => {
    const totalTasks = tasks.length;
    const completedTasks = tasks.filter(task => task.completed).length;
    const pendingTasks = totalTasks - completedTasks;

    return (
        <div className="stats-grid">
            <div className="stat-card slide-up">
                <div className="stat-value">{totalTasks}</div>
                <div className="stat-label">Total Tasks</div>
            </div>

            <div className="stat-card slide-up" style={{ animationDelay: '0.1s' }}>
                <div className="stat-value" style={{ color: 'var(--success)' }}>
                    {completedTasks}
                </div>
                <div className="stat-label">Completed</div>
            </div>

            <div className="stat-card slide-up" style={{ animationDelay: '0.2s' }}>
                <div className="stat-value" style={{ color: 'var(--warning)' }}>
                    {pendingTasks}
                </div>
                <div className="stat-label">Pending</div>
            </div>
        </div>
    );
};

export default TaskStats;
