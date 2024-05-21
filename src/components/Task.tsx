import { useDispatch } from 'react-redux';
import { deleteTask, toggleTaskCompletion } from '../redux/actions';

interface TaskProps {
    id: number;
    title: string;
    completed: boolean;
}

const Task: React.FC<TaskProps> = ({ id, title, completed }) => {
    const dispatch = useDispatch();

    const handleToggle = () => {
        dispatch(toggleTaskCompletion(id));
    };

    const handleDelete = () => {
        dispatch(deleteTask(id));
    };

    return (
        <div className="flex justify-between items-center p-2 border-b">
            <div>
                <input
                    type="checkbox"
                    checked={completed}
                    onChange={handleToggle}
                    className="mr-2"
                />
                <span className={completed ? 'line-through' : ''}>{title}</span>
            </div>
            <button onClick={handleDelete} className="text-red-500">Delete</button>
        </div>
    );
};

export default Task;
