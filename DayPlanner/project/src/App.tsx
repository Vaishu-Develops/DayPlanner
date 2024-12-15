import React, { useState } from 'react';
import { CalendarCheck } from 'lucide-react';
import { Task, TaskFilter } from './types';
import { TimeBlockList } from './components/TaskList/TimeBlockList';
import { TaskForm } from './components/TaskForm';
import { FilterBar } from './components/TaskFilters/FilterBar';
import { useLocalStorage } from './hooks/useLocalStorage';
import { filterTasks, organizeTasksByHour } from './utils/taskUtils';

export default function App() {
  const [tasks, setTasks] = useLocalStorage<Task[]>('tasks', []);
  const [filter, setFilter] = useState<TaskFilter>({});

  const handleAddTask = (newTask: Omit<Task, 'id' | 'completed' | 'createdAt'>) => {
    const task: Task = {
      ...newTask,
      id: crypto.randomUUID(),
      completed: false,
      createdAt: new Date().toISOString(),
    };
    setTasks([...tasks, task]);
  };

  const handleTaskToggle = (taskId: string) => {
    setTasks(tasks.map(task =>
      task.id === taskId ? { ...task, completed: !task.completed } : task
    ));
  };

  const filteredTasks = filterTasks(tasks, filter);
  const timeBlocks = organizeTasksByHour(filteredTasks);

  return (
    <div className="min-h-screen bg-gradient-to-br from-primary-50 to-secondary-50">
      <header className="bg-white shadow-soft">
        <div className="max-w-5xl mx-auto px-4 py-6 sm:px-6 lg:px-8">
          <div className="flex items-center gap-3">
            <CalendarCheck className="w-8 h-8 text-primary-600" />
            <h1 className="text-2xl font-bold bg-gradient-to-r from-primary-600 to-secondary-600 text-transparent bg-clip-text">
              Day Planner
            </h1>
          </div>
        </div>
      </header>

      <main className="max-w-5xl mx-auto px-4 py-8 sm:px-6 lg:px-8">
        <div className="bg-white/80 backdrop-blur-sm rounded-2xl shadow-soft">
          <div className="p-6">
            <TaskForm onAddTask={handleAddTask} />
            <FilterBar filter={filter} onFilterChange={setFilter} />
            <TimeBlockList
              timeBlocks={timeBlocks}
              onTaskToggle={handleTaskToggle}
            />
          </div>
        </div>
      </main>
    </div>
  );
}