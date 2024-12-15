import React from 'react';
import { Task } from '../../types';
import { CheckCircle2, Circle } from 'lucide-react';

interface TaskItemProps {
  task: Task;
  onToggle: (taskId: string) => void;
}

export function TaskItem({ task, onToggle }: TaskItemProps) {
  return (
    <div
      className={`mb-2 p-3 rounded-xl border transition-all duration-200 ${
        task.completed 
          ? 'bg-gray-50 border-gray-100' 
          : `${getPriorityColor(task.priority)} hover:shadow-soft`
      }`}
    >
      <div className="flex items-start gap-3">
        <button
          onClick={() => onToggle(task.id)}
          className="mt-1 focus:outline-none transition-transform hover:scale-110"
        >
          {task.completed ? (
            <CheckCircle2 className="w-5 h-5 text-green-500" />
          ) : (
            <Circle className="w-5 h-5 text-primary-400" />
          )}
        </button>
        <div className="flex-1">
          <h3 className={`font-medium ${
            task.completed ? 'text-gray-500 line-through' : 'text-gray-900'
          }`}>
            {task.title}
          </h3>
          {task.description && (
            <p className="text-sm text-gray-600 mt-1">{task.description}</p>
          )}
          <div className="flex flex-wrap gap-2 mt-2">
            <span className="text-xs px-2 py-1 rounded-full bg-primary-100 text-primary-700 font-medium">
              {task.startTime} - {task.endTime}
            </span>
            <span className={getCategoryStyle(task.category)}>
              {task.category}
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}

function getPriorityColor(priority: Task['priority']) {
  switch (priority) {
    case 'high':
      return 'bg-red-50 border-red-100';
    case 'medium':
      return 'bg-amber-50 border-amber-100';
    default:
      return 'bg-white border-gray-100';
  }
}

function getCategoryStyle(category: Task['category']) {
  switch (category) {
    case 'work':
      return 'text-xs px-2 py-1 rounded-full bg-blue-100 text-blue-700 font-medium';
    case 'personal':
      return 'text-xs px-2 py-1 rounded-full bg-purple-100 text-purple-700 font-medium';
    case 'health':
      return 'text-xs px-2 py-1 rounded-full bg-green-100 text-green-700 font-medium';
    case 'errands':
      return 'text-xs px-2 py-1 rounded-full bg-orange-100 text-orange-700 font-medium';
  }
}