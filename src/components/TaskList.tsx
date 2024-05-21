import { useSelector } from 'react-redux';
import Task from './Task';
import { RootState } from '../redux/store';

const TaskList: React.FC = () => {
    const tasks = useSelector((state: RootState) => state.tasks);

    return (
        <div className="max-w-md mx-auto p-4 bg-white rounded shadow">
            {tasks.map(task => (
                <Task key={task.id} {...task} />
            ))}
        </div>
    );
};

export default TaskList;
