import React from 'react';
import { TimeBlock as TimeBlockType } from '../../types';
import { Clock } from 'lucide-react';
import { TaskItem } from './TaskItem';

interface TimeBlockListProps {
  timeBlocks: TimeBlockType[];
  onTaskToggle: (taskId: string) => void;
}

export function TimeBlockList({ timeBlocks, onTaskToggle }: TimeBlockListProps) {
  return (
    <div className="space-y-1">
      {timeBlocks.map((timeBlock) => (
        <div key={timeBlock.hour} className="flex gap-4 py-4 border-b border-gray-100">
          <div className="w-20 flex items-start pt-1">
            <Clock className="w-4 h-4 text-gray-400 mr-2" />
            <span className="text-sm text-gray-600">
              {timeBlock.hour.toString().padStart(2, '0')}:00
            </span>
          </div>
          <div className="flex-1">
            {timeBlock.tasks.map((task) => (
              <TaskItem
                key={task.id}
                task={task}
                onToggle={onTaskToggle}
              />
            ))}
          </div>
        </div>
      ))}
    </div>
  );
}