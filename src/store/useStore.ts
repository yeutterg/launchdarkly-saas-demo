import { create } from 'zustand';
import { Patient, Appointment, Staff } from '../types';
import { mockPatients } from '../mockData';

interface Store {
  patients: Patient[];
  staff: Staff[];
  selectedPatient: Patient | null;
  chatbotEnabled: boolean;
  setSelectedPatient: (patient: Patient | null) => void;
  toggleChatbot: () => void;
  cancelAppointment: (patientId: string, appointmentId: string) => void;
  rescheduleAppointment: (patientId: string, appointmentId: string, newDate: string) => void;
}

export const useStore = create<Store>((set) => ({
  patients: mockPatients,
  staff: [
    { id: '1', name: 'Dr. Smith', role: 'dentist' },
    { id: '2', name: 'Dr. Johnson', role: 'dentist' },
    { id: '3', name: 'Sarah Wilson', role: 'hygienist' },
    { id: '4', name: 'Mike Brown', role: 'hygienist' },
  ],
  selectedPatient: null,
  chatbotEnabled: true,
  setSelectedPatient: (patient) => set({ selectedPatient: patient }),
  toggleChatbot: () => set((state) => ({ chatbotEnabled: !state.chatbotEnabled })),
  cancelAppointment: (patientId, appointmentId) =>
    set((state) => ({
      patients: state.patients.map((patient) =>
        patient.id === patientId
          ? {
              ...patient,
              appointments: patient.appointments.map((apt) =>
                apt.id === appointmentId ? { ...apt, status: 'cancelled' } : apt
              ),
            }
          : patient
      ),
    })),
  rescheduleAppointment: (patientId, appointmentId, newDate) =>
    set((state) => ({
      patients: state.patients.map((patient) =>
        patient.id === patientId
          ? {
              ...patient,
              appointments: patient.appointments.map((apt) =>
                apt.id === appointmentId ? { ...apt, date: newDate } : apt
              ),
            }
          : patient
      ),
    })),
}));