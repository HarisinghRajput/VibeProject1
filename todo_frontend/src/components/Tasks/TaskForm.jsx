import { useState } from 'react';
import Input from '../UI/Input';
import Button from '../UI/Button';

const TaskForm = ({ onTaskCreated }) => {
    const [title, setTitle] = useState('');
    const [description, setDescription] = useState('');
    const [error, setError] = useState('');
    const [loading, setLoading] = useState(false);

    const handleSubmit = async (e) => {
        e.preventDefault();
        setError('');

        if (!title.trim()) {
            setError('Task title is required');
            return;
        }

        setLoading(true);
        const success = await onTaskCreated({ title: title.trim(), description: description.trim() });
        setLoading(false);

        if (success) {
            setTitle('');
            setDescription('');
        } else {
            setError('Failed to create task. Please try again.');
        }
    };

    return (
        <form onSubmit={handleSubmit} className="card mb-4">
            <h3 className="card-title">Add New Task</h3>

            {error && (
                <div className="form-error mb-2">{error}</div>
            )}

            <Input
                label="Title"
                placeholder="What needs to be done?"
                value={title}
                onChange={(e) => setTitle(e.target.value)}
            />

            <div className="form-group">
                <label className="form-label">Description (Optional)</label>
                <textarea
                    className="form-input form-textarea"
                    placeholder="Add more details..."
                    value={description}
                    onChange={(e) => setDescription(e.target.value)}
                />
            </div>

            <Button type="submit" variant="primary" loading={loading}>
                {loading ? 'Adding...' : 'Add Task'}
            </Button>
        </form>
    );
};

export default TaskForm;
