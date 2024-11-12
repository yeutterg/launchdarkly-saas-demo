import React, { useState } from 'react';
import { useStore } from '../store/useStore';

export function Chatbot() {
  const [input, setInput] = useState('');
  const selectedPatient = useStore((state) => state.selectedPatient);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // In a real app, this would integrate with an AI service
    setInput('');
  };

  return (
    <div className="fixed bottom-4 right-4 w-80 bg-white rounded-lg shadow-xl">
      <div className="p-4 border-b">
        <h3 className="text-lg font-medium">Dental Assistant AI</h3>
      </div>
      <div className="h-64 overflow-y-auto p-4">
        <div className="space-y-4">
          {selectedPatient && (
            <div className="bg-gray-100 p-3 rounded-lg">
              <p className="text-sm">
                Currently viewing: {selectedPatient.name}
                <br />
                Next appointment:{' '}
                {selectedPatient.appointments
                  .filter((apt) => apt.status === 'scheduled')
                  .sort((a, b) => new Date(a.date).getTime() - new Date(b.date).getTime())[0]?.date}
              </p>
            </div>
          )}
        </div>
      </div>
      <form onSubmit={handleSubmit} className="p-4 border-t">
        <div className="flex space-x-2">
          <input
            type="text"
            value={input}
            onChange={(e) => setInput(e.target.value)}
            placeholder="Ask a question..."
            className="flex-1 rounded-md border-gray-300 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
          />
          <button
            type="submit"
            className="px-4 py-2 bg-indigo-600 text-white rounded-md hover:bg-indigo-700"
          >
            Send
          </button>
        </div>
      </form>
    </div>
  );
}