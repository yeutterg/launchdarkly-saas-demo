import React from 'react';
import { useParams } from 'react-router-dom';
import { useStore } from '../store/useStore';
import { format, addDays } from 'date-fns';

export function PatientDetail() {
  const { id } = useParams();
  const patients = useStore((state) => state.patients);
  const setSelectedPatient = useStore((state) => state.setSelectedPatient);
  const cancelAppointment = useStore((state) => state.cancelAppointment);
  const rescheduleAppointment = useStore((state) => state.rescheduleAppointment);

  const patient = patients.find((p) => p.id === id);

  React.useEffect(() => {
    setSelectedPatient(patient || null);
    return () => setSelectedPatient(null);
  }, [patient, setSelectedPatient]);

  if (!patient) {
    return <div>Patient not found</div>;
  }

  return (
    <div className="space-y-6">
      <div className="bg-white shadow px-4 py-5 sm:rounded-lg sm:p-6">
        <h2 className="text-lg font-medium text-gray-900">{patient.name}</h2>
        <div className="mt-2 text-sm text-gray-500">
          <p>{patient.email}</p>
          <p>{patient.phone}</p>
        </div>
      </div>

      <div className="bg-white shadow sm:rounded-lg">
        <div className="px-4 py-5 sm:p-6">
          <h3 className="text-lg font-medium text-gray-900">Appointments</h3>
          <div className="mt-4 space-y-4">
            {patient.appointments.map((appointment) => (
              <div
                key={appointment.id}
                className="border rounded-lg p-4 flex items-center justify-between"
              >
                <div>
                  <p className="font-medium">
                    {format(new Date(appointment.date), 'PPP')} - {appointment.type}
                  </p>
                  <p className="text-sm text-gray-500">Provider: {appointment.provider}</p>
                  <p className="text-sm text-gray-500">Status: {appointment.status}</p>
                </div>
                {appointment.status === 'scheduled' && (
                  <div className="space-x-2">
                    <button
                      onClick={() => cancelAppointment(patient.id, appointment.id)}
                      className="px-4 py-2 bg-red-600 text-white rounded-md hover:bg-red-700"
                    >
                      Cancel
                    </button>
                    <button
                      onClick={() =>
                        rescheduleAppointment(
                          patient.id,
                          appointment.id,
                          format(addDays(new Date(appointment.date), 7), "yyyy-MM-dd'T'HH:mm")
                        )
                      }
                      className="px-4 py-2 bg-indigo-600 text-white rounded-md hover:bg-indigo-700"
                    >
                      Reschedule
                    </button>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className="bg-white shadow sm:rounded-lg">
        <div className="px-4 py-5 sm:p-6">
          <h3 className="text-lg font-medium text-gray-900">Chat History</h3>
          <div className="mt-4 space-y-4">
            {patient.chats.map((chat) => (
              <div
                key={chat.id}
                className={`p-4 rounded-lg ${
                  chat.sender === 'office' ? 'bg-indigo-50 ml-8' : 'bg-gray-50 mr-8'
                }`}
              >
                <p className="text-sm text-gray-900">{chat.message}</p>
                <p className="text-xs text-gray-500 mt-1">
                  {format(new Date(chat.timestamp), 'PPp')}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}