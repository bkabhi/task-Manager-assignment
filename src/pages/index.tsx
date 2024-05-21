import TaskList from '../components/TaskList';
import { useDispatch } from 'react-redux';
import { useState, useEffect } from 'react';
import { addTask, setTasks } from '../redux/actions';
import { LocalStorageKeys } from '@/model/constant';

const Home: React.FC = () => {
  const [newTask, setNewTask] = useState('');
  const dispatch = useDispatch();

  useEffect(() => {
    const storedTasks = localStorage.getItem(LocalStorageKeys.TASKS);
    if (storedTasks) {
      dispatch(setTasks(JSON.parse(storedTasks)));
    }
  }, [dispatch]);

  const handleAddTask = () => {
    if (newTask.trim()) {
      const newTaskObject = { id: Date.now(), title: newTask, completed: false };
      dispatch(addTask(newTaskObject));
      setNewTask('');
    }
  };

  return (
    <div className="min-h-screen bg-gray-100">
      <div className="max-w-md mx-auto p-4 bg-white rounded shadow">
        <h1 className="text-2xl font-bold mb-4">Task Manager</h1>
        <div className="flex mb-4">
          <input
            type="text"
            value={newTask}
            onChange={e => setNewTask(e.target.value)}
            className="flex-grow p-2 border rounded-l"
            placeholder="Enter task title"
          />
          <button onClick={handleAddTask} className="bg-blue-500 text-white p-2 rounded-r">Add</button>
        </div>
        <TaskList />
      </div>
    </div>
  );
};

export default Home;
