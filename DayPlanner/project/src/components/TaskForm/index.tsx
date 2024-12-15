import React, { useState } from 'react';
import { Task, Priority, Category } from '../../types';
import { Plus } from 'lucide-react';
import { TaskFormFields } from './TaskFormFields';

interface TaskFormProps {
  onAddTask: (task: Omit<Task, 'id' | 'completed' | 'createdAt'>) => void;
}

export function TaskForm({ onAddTask }: TaskFormProps) {
  const [isOpen, setIsOpen] = useState(false);
  const [formData, setFormData] = useState({
    title: '',
    description: '',
    startTime: '',
    endTime: '',
    priority: 'medium' as Priority,
    category: 'work' as Category,
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onAddTask(formData);
    setIsOpen(false);
    setFormData({
      title: '',
      description: '',
      startTime: '',
      endTime: '',
      priority: 'medium',
      category: 'work',
    });
  };

  return (
    <div className="mb-6">
      {!isOpen ? (
        <button
          onClick={() => setIsOpen(true)}
          className="group flex items-center gap-2 px-5 py-2.5 text-sm font-medium text-white bg-gradient-to-r from-primary-600 to-secondary-600 rounded-lg transition-all hover:shadow-lg hover:-translate-y-0.5"
        >
          <Plus className="w-5 h-5 transition-transform group-hover:rotate-90" />
          Add New Task
        </button>
      ) : (
        <form onSubmit={handleSubmit} className="bg-white p-6 rounded-xl shadow-soft border border-gray-100">
          <TaskFormFields
            formData={formData}
            onChange={setFormData}
          />
          <div className="flex justify-end gap-3 mt-6">
            <button
              type="button"
              onClick={() => setIsOpen(false)}
              className="px-4 py-2 text-sm font-medium text-gray-700 hover:bg-gray-50 rounded-lg transition-colors"
            >
              Cancel
            </button>
            <button
              type="submit"
              className="px-4 py-2 text-sm font-medium text-white bg-gradient-to-r from-primary-600 to-secondary-600 rounded-lg transition-all hover:shadow-md hover:-translate-y-0.5"
            >
              Add Task
            </button>
          </div>
        </form>
      )}
    </div>
  );
}