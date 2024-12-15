import React from 'react';
import { Category, Priority, TaskFilter } from '../../types';
import { Search } from 'lucide-react';

interface FilterBarProps {
  filter: TaskFilter;
  onFilterChange: (filter: TaskFilter) => void;
}

export function FilterBar({ filter, onFilterChange }: FilterBarProps) {
  return (
    <div className="bg-gradient-to-r from-primary-50 to-secondary-50 p-6 rounded-xl mb-6 border border-gray-100">
      <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
        <div className="relative">
          <Search className="absolute left-3 top-2.5 h-4 w-4 text-primary-400" />
          <input
            type="text"
            placeholder="Search tasks..."
            value={filter.search || ''}
            onChange={(e) => onFilterChange({ ...filter, search: e.target.value })}
            className="pl-10 w-full rounded-lg border-gray-200 shadow-sm focus:border-primary-300 focus:ring focus:ring-primary-200 focus:ring-opacity-50"
          />
        </div>
        
        <select
          value={filter.category || ''}
          onChange={(e) => onFilterChange({ 
            ...filter, 
            category: e.target.value as Category || undefined 
          })}
          className="rounded-lg border-gray-200 shadow-sm focus:border-primary-300 focus:ring focus:ring-primary-200 focus:ring-opacity-50"
        >
          <option value="">All Categories</option>
          <option value="work">Work</option>
          <option value="personal">Personal</option>
          <option value="health">Health</option>
          <option value="errands">Errands</option>
        </select>

        <select
          value={filter.priority || ''}
          onChange={(e) => onFilterChange({ 
            ...filter, 
            priority: e.target.value as Priority || undefined 
          })}
          className="rounded-lg border-gray-200 shadow-sm focus:border-primary-300 focus:ring focus:ring-primary-200 focus:ring-opacity-50"
        >
          <option value="">All Priorities</option>
          <option value="high">High</option>
          <option value="medium">Medium</option>
          <option value="low">Low</option>
        </select>

        <select
          value={filter.completed === undefined ? '' : filter.completed.toString()}
          onChange={(e) => onFilterChange({
            ...filter,
            completed: e.target.value === '' ? undefined : e.target.value === 'true'
          })}
          className="rounded-lg border-gray-200 shadow-sm focus:border-primary-300 focus:ring focus:ring-primary-200 focus:ring-opacity-50"
        >
          <option value="">All Status</option>
          <option value="false">Active</option>
          <option value="true">Completed</option>
        </select>
      </div>
    </div>
  );
}