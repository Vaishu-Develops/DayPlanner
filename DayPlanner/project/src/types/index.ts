export interface Task {
  id: string;
  title: string;
  description?: string;
  startTime: string;
  endTime: string;
  priority: Priority;
  category: Category;
  completed: boolean;
  createdAt: string;
}

export type TimeBlock = {
  hour: number;
  tasks: Task[];
};

export type Priority = 'low' | 'medium' | 'high';
export type Category = 'work' | 'personal' | 'health' | 'errands';

export interface TaskFilter {
  category?: Category;
  priority?: Priority;
  completed?: boolean;
  search?: string;
}