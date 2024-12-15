import React from 'react';
import { Task } from '../types';
import { Clock, CheckCircle2, Circle } from 'lucide-react';

interface TimeBlockProps {
  hour: number;
  tasks: Task[];
  onTaskToggle: (taskId: string) => void;
}

export function TimeBlock({ hour, tasks, onTaskToggle }: TimeBlockProps) {
  const formattedHour = `${hour.toString().padStart(2, '0')}:00`;

  return (
    <div className="flex gap-4 py-4 border-b border-gray-100">
      <div className="w-20 flex items-start pt-1">
        <Clock className="w-4 h-4 text-gray-400 mr-2" />
        <span className="text-sm text-gray-600">{formattedHour}</span>
      </div>
      <div className="flex-1">
        {tasks.map((task) => (
          <div
            key={task.id}
            className={`mb-2 p-3 rounded-lg ${
              task.completed ? 'bg-gray-50' : getPriorityColor(task.priority)
            }`}
          >
            <div className="flex items-start gap-2">
              <button
                onClick={() => onTaskToggle(task.id)}
                className="mt-1 focus:outline-none"
              >
                {task.completed ? (
                  <CheckCircle2 className="w-5 h-5 text-green-500" />
                ) : (
                  <Circle className="w-5 h-5 text-gray-400" />
                )}
              </button>
              <div className="flex-1">
                <h3 className={`font-medium ${task.completed ? 'text-gray-500 line-through' : 'text-gray-900'}`}>
                  {task.title}
                </h3>
                {task.description && (
                  <p className="text-sm text-gray-600 mt-1">{task.description}</p>
                )}
                <div className="flex gap-2 mt-2">
                  <span className="text-xs px-2 py-1 rounded-full bg-gray-100 text-gray-600">
                    {task.startTime} - {task.endTime}
                  </span>
                  <span className="text-xs px-2 py-1 rounded-full bg-blue-100 text-blue-700">
                    {task.category}
                  </span>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

function getPriorityColor(priority: Task['priority']) {
  switch (priority) {
    case 'high':
      return 'bg-red-50';
    case 'medium':
      return 'bg-yellow-50';
    default:
      return 'bg-white';
  }
}