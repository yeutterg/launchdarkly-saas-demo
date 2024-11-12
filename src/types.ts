export interface Patient {
  id: string;
  name: string;
  email: string;
  phone: string;
  appointments: Appointment[];
  chats: ChatMessage[];
}

export interface Appointment {
  id: string;
  patientId: string;
  date: string;
  type: 'checkup' | 'cleaning' | 'filling' | 'root-canal';
  provider: string;
  status: 'scheduled' | 'completed' | 'cancelled';
}

export interface ChatMessage {
  id: string;
  sender: 'patient' | 'office';
  message: string;
  timestamp: string;
}

export interface Staff {
  id: string;
  name: string;
  role: 'dentist' | 'hygienist';
}