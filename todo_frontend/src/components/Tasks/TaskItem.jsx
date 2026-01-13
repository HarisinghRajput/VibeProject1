import { useState } from 'react';
import Button from '../UI/Button';
import Modal from '../UI/Modal';
import Input from '../UI/Input';

const TaskItem = ({ task, onToggleComplete, onUpdate, onDelete }) => {
    const [isEditModalOpen, setIsEditModalOpen] = useState(false);
    const [isDeleteModalOpen, setIsDeleteModalOpen] = useState(false);
    const [editTitle, setEditTitle] = useState(task.title);
    const [editDescription, setEditDescription] = useState(task.description || '');
    const [loading, setLoading] = useState(false);

    const handleToggleComplete = async () => {
        await onToggleComplete(task.id, task.completed);
    };

    const handleEdit = () => {
        setEditTitle(task.title);
        setEditDescription(task.description || '');
        setIsEditModalOpen(true);
    };

    const handleSaveEdit = async () => {
        if (!editTitle.trim()) return;

        setLoading(true);
        await onUpdate(task.id, {
            title: editTitle.trim(),
            description: editDescription.trim()
        });
        setLoading(false);
        setIsEditModalOpen(false);
    };

    const handleDelete = async () => {
        setLoading(true);
        await onDelete(task.id);
        setLoading(false);
        setIsDeleteModalOpen(false);
    };

    return (
        <>
            <div className={`task-item ${task.completed ? 'completed' : ''}`}>
                <div className="task-header">
                    <input
                        type="checkbox"
                        className="task-checkbox"
                        checked={task.completed}
                        onChange={handleToggleComplete}
                    />
                    <div className="task-content">
                        <h4 className="task-title">{task.title}</h4>
                        {task.description && (
                            <p className="task-description">{task.description}</p>
                        )}
                    </div>
                    <div className="task-actions">
                        <Button variant="secondary" size="sm" onClick={handleEdit}>
                            Edit
                        </Button>
                        <Button variant="danger" size="sm" onClick={() => setIsDeleteModalOpen(true)}>
                            Delete
                        </Button>
                    </div>
                </div>
            </div>

            {/* Edit Modal */}
            <Modal
                isOpen={isEditModalOpen}
                onClose={() => setIsEditModalOpen(false)}
                title="Edit Task"
                footer={
                    <>
                        <Button variant="secondary" onClick={() => setIsEditModalOpen(false)}>
                            Cancel
                        </Button>
                        <Button variant="primary" onClick={handleSaveEdit} loading={loading}>
                            Save Changes
                        </Button>
                    </>
                }
            >
                <Input
                    label="Title"
                    value={editTitle}
                    onChange={(e) => setEditTitle(e.target.value)}
                />
                <div className="form-group">
                    <label className="form-label">Description</label>
                    <textarea
                        className="form-input form-textarea"
                        value={editDescription}
                        onChange={(e) => setEditDescription(e.target.value)}
                    />
                </div>
            </Modal>

            {/* Delete Confirmation Modal */}
            <Modal
                isOpen={isDeleteModalOpen}
                onClose={() => setIsDeleteModalOpen(false)}
                title="Delete Task"
                footer={
                    <>
                        <Button variant="secondary" onClick={() => setIsDeleteModalOpen(false)}>
                            Cancel
                        </Button>
                        <Button variant="danger" onClick={handleDelete} loading={loading}>
                            Delete
                        </Button>
                    </>
                }
            >
                <p>Are you sure you want to delete "{task.title}"?</p>
                <p className="text-secondary" style={{ fontSize: '0.875rem' }}>
                    This action cannot be undone.
                </p>
            </Modal>
        </>
    );
};

export default TaskItem;
