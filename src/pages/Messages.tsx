import React from 'react';
import { useStore } from '../store/useStore';
import { useNavigate } from 'react-router-dom';

export function Messages() {
  const patients = useStore((state) => state.patients);
  const navigate = useNavigate();

  // Flatten and sort messages from all patients
  const messages = patients.flatMap(patient => 
    patient.chats.map(chat => ({
      patientId: patient.id,
      patientName: patient.name,
      message: chat.message,
      timestamp: chat.timestamp,
    }))
  ).sort((a, b) => new Date(b.timestamp).getTime() - new Date(a.timestamp).getTime());

  return (
    <div className="bg-white shadow sm:rounded-lg p-6">
      <div className="mt-4 space-y-4">
        {messages.map((msg, index) => (
          <div 
            key={index} 
            className="p-4 border rounded-lg bg-gray-50 cursor-pointer hover:bg-gray-100"
            onClick={() => navigate(`/patients/${msg.patientId}`)}
          >
            <p className="font-medium">{msg.patientName}</p>
            <p className="text-sm text-gray-700">{msg.message}</p>
            <p className="text-xs text-gray-500">{new Date(msg.timestamp).toLocaleString()}</p>
          </div>
        ))}
      </div>
    </div>
  );
}