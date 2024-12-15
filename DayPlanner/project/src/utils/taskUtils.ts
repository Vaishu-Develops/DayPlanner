import { Task, TimeBlock, TaskFilter } from '../types';

export const sortTasks = (tasks: Task[]): Task[] => {
  return [...tasks].sort((a, b) => {
    // Sort by time first
    const timeComparison = a.startTime.localeCompare(b.startTime);
    if (timeComparison !== 0) return timeComparison;
    
    // Then by priority
    const priorityOrder = { high: 0, medium: 1, low: 2 };
    return priorityOrder[a.priority] - priorityOrder[b.priority];
  });
};

export const filterTasks = (tasks: Task[], filter: TaskFilter): Task[] => {
  return tasks.filter(task => {
    if (filter.category && task.category !== filter.category) return false;
    if (filter.priority && task.priority !== filter.priority) return false;
    if (filter.completed !== undefined && task.completed !== filter.completed) return false;
    if (filter.search) {
      const searchLower = filter.search.toLowerCase();
      return (
        task.title.toLowerCase().includes(searchLower) ||
        task.description?.toLowerCase().includes(searchLower)
      );
    }
    return true;
  });
};

export const organizeTasksByHour = (tasks: Task[]): TimeBlock[] => {
  const timeBlocks: TimeBlock[] = [];
  for (let hour = 0; hour < 24; hour++) {
    const tasksInHour = tasks.filter(task => {
      const taskHour = parseInt(task.startTime.split(':')[0]);
      return taskHour === hour;
    });
    timeBlocks.push({ hour, tasks: sortTasks(tasksInHour) });
  }
  return timeBlocks;
};