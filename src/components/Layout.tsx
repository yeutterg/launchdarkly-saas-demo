import React from 'react';
import { Link, Outlet, useLocation } from 'react-router-dom';
import { Chatbot } from './Chatbot';
import { useStore } from '../store/useStore';

export function Layout() {
  const chatbotEnabled = useStore((state) => state.chatbotEnabled);
  const toggleChatbot = useStore((state) => state.toggleChatbot);
  const location = useLocation();

  return (
    <div className="min-h-screen bg-gray-100">
      <nav className="bg-white shadow-lg">
        <div className="max-w-7xl mx-auto px-4">
          <div className="flex justify-between h-16">
            <div className="flex space-x-8">
              <Link to="/" className={`flex items-center ${location.pathname === '/' ? 'font-bold text-gray-900 bg-gray-200 p-2 rounded' : 'text-gray-700 hover:text-gray-900'}`}>
                Dental Office Manager
              </Link>
              <Link to="/patients" className={`flex items-center ${location.pathname === '/patients' ? 'font-bold text-gray-900 bg-gray-200 p-2 rounded' : 'text-gray-600 hover:text-gray-900'}`}>
                Patients
              </Link>
              <Link to="/messages" className={`flex items-center ${location.pathname === '/messages' ? 'font-bold text-gray-900 bg-gray-200 p-2 rounded' : 'text-gray-600 hover:text-gray-900'}`}>
                Messages
              </Link>
              <Link to="/calendar" className={`flex items-center ${location.pathname === '/calendar' ? 'font-bold text-gray-900 bg-gray-200 p-2 rounded' : 'text-gray-600 hover:text-gray-900'}`}>
                Calendar
              </Link>
            </div>
            <div className="flex items-center">
              <button
                onClick={toggleChatbot}
                className="inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700"
              >
                {chatbotEnabled ? 'Disable Assistant' : 'Enable Assistant'}
              </button>
            </div>
          </div>
        </div>
      </nav>

      <main className="max-w-7xl mx-auto py-6 px-4 sm:px-6 lg:px-8">
        <Outlet />
      </main>

      {chatbotEnabled && <Chatbot />}
    </div>
  );
}