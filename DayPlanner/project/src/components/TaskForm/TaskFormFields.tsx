import React from 'react';
import { Priority, Category } from '../../types';

interface FormData {
  title: string;
  description: string;
  startTime: string;
  endTime: string;
  priority: Priority;
  category: Category;
}

interface TaskFormFieldsProps {
  formData: FormData;
  onChange: (data: FormData) => void;
}

export function TaskFormFields({ formData, onChange }: TaskFormFieldsProps) {
  const handleChange = (field: keyof FormData, value: string) => {
    onChange({
      ...formData,
      [field]: value,
    });
  };

  return (
    <div className="space-y-4">
      <div>
        <label className="block text-sm font-medium text-gray-700">Title</label>
        <input
          type="text"
          value={formData.title}
          onChange={(e) => handleChange('title', e.target.value)}
          className="mt-1 block w-full rounded-lg border-gray-200 shadow-sm focus:border-primary-300 focus:ring focus:ring-primary-200 focus:ring-opacity-50"
          required
        />
      </div>
      <div>
        <label className="block text-sm font-medium text-gray-700">Description</label>
        <textarea
          value={formData.description}
          onChange={(e) => handleChange('description', e.target.value)}
          className="mt-1 block w-full rounded-lg border-gray-200 shadow-sm focus:border-primary-300 focus:ring focus:ring-primary-200 focus:ring-opacity-50"
          rows={2}
        />
      </div>
      <div className="grid grid-cols-2 gap-4">
        <div>
          <label className="block text-sm font-medium text-gray-700">Start Time</label>
          <input
            type="time"
            value={formData.startTime}
            onChange={(e) => handleChange('startTime', e.target.value)}
            className="mt-1 block w-full rounded-lg border-gray-200 shadow-sm focus:border-primary-300 focus:ring focus:ring-primary-200 focus:ring-opacity-50"
            required
          />
        </div>
        <div>
          <label className="block text-sm font-medium text-gray-700">End Time</label>
          <input
            type="time"
            value={formData.endTime}
            onChange={(e) => handleChange('endTime', e.target.value)}
            className="mt-1 block w-full rounded-lg border-gray-200 shadow-sm focus:border-primary-300 focus:ring focus:ring-primary-200 focus:ring-opacity-50"
            required
          />
        </div>
      </div>
      <div className="grid grid-cols-2 gap-4">
        <div>
          <label className="block text-sm font-medium text-gray-700">Priority</label>
          <select
            value={formData.priority}
            onChange={(e) => handleChange('priority', e.target.value as Priority)}
            className="mt-1 block w-full rounded-lg border-gray-200 shadow-sm focus:border-primary-300 focus:ring focus:ring-primary-200 focus:ring-opacity-50"
          >
            <option value="low">Low</option>
            <option value="medium">Medium</option>
            <option value="high">High</option>
          </select>
        </div>
        <div>
          <label className="block text-sm font-medium text-gray-700">Category</label>
          <select
            value={formData.category}
            onChange={(e) => handleChange('category', e.target.value as Category)}
            className="mt-1 block w-full rounded-lg border-gray-200 shadow-sm focus:border-primary-300 focus:ring focus:ring-primary-200 focus:ring-opacity-50"
          >
            <option value="work">Work</option>
            <option value="personal">Personal</option>
            <option value="health">Health</option>
            <option value="errands">Errands</option>
          </select>
        </div>
      </div>
    </div>
  );
}