import React from 'react';
import { useNavigate } from 'react-router-dom';
import { useStore } from '../store/useStore';

export function PatientList() {
  const patients = useStore((state) => state.patients);
  const navigate = useNavigate();

  return (
    <div className="bg-white shadow overflow-hidden sm:rounded-md">
      <ul className="divide-y divide-gray-200">
        {patients.map((patient) => {
          // Get the most recent chat message
          const recentChat = patient.chats[patient.chats.length - 1];

          return (
            <li key={patient.id}>
              <div
                className="block hover:bg-gray-50 cursor-pointer"
                onClick={() => navigate(`/patients/${patient.id}`)}
              >
                <div className="px-4 py-4 sm:px-6">
                  <div className="flex items-center justify-between">
                    <div className="text-sm font-medium text-indigo-600 truncate">{patient.name}</div>
                    <div className="ml-2 flex-shrink-0 flex">
                      <span className={`px-2 inline-flex text-xs leading-5 font-semibold rounded-full ${patient.appointments.filter((apt) => apt.status === 'scheduled').length > 0 ? 'bg-green-100 text-green-800' : 'bg-red-100 text-red-800'}`}>
                        {patient.appointments.filter((apt) => apt.status === 'scheduled').length} upcoming
                      </span>
                    </div>
                  </div>
                  <div className="mt-2 sm:flex sm:justify-between">
                    <div className="sm:flex">
                      <p className="flex items-center text-sm text-gray-500">
                        {patient.email}
                      </p>
                      <p className="mt-2 flex items-center text-sm text-gray-500 sm:mt-0 sm:ml-6">
                        {patient.phone}
                      </p>
                      <p className="mt-2 flex items-center text-sm text-gray-500 sm:mt-0 sm:ml-6">
                      <strong>Last msg:</strong>&nbsp;{recentChat.message}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </li>
          );
        })}
      </ul>
    </div>
  );
}