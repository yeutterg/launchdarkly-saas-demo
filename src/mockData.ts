import { Patient } from './types';
import { addDays, subDays, format } from 'date-fns';

const today = new Date();

export const mockPatients: Patient[] = [
  {
    id: '1',
    name: 'John Doe',
    email: 'john@example.com',
    phone: '(555) 123-4567',
    appointments: [
      {
        id: 'a1',
        patientId: '1',
        date: format(addDays(today, 1), "yyyy-MM-dd'T'HH:mm"),
        type: 'checkup',
        provider: 'Dr. Smith',
        status: 'scheduled',
      },
      {
        id: 'a2',
        patientId: '1',
        date: format(addDays(today, 3), "yyyy-MM-dd'T'HH:mm"),
        type: 'cleaning',
        provider: 'Dr. Johnson',
        status: 'scheduled',
      },
    ],
    chats: [
      {
        id: 'c1',
        sender: 'office',
        message: 'Hi John, just confirming your appointment next week.',
        timestamp: format(subDays(today, 2), "yyyy-MM-dd'T'HH:mm"),
      },
      {
        id: 'c2',
        sender: 'patient',
        message: 'Thanks for confirming. Will I need X-rays?',
        timestamp: format(subDays(today, 2), "yyyy-MM-dd'T'HH:mm"),
      },
    ],
  },
  {
    id: '2',
    name: 'Jane Smith',
    email: 'jane@example.com',
    phone: '(555) 987-6543',
    appointments: [
      {
        id: 'a3',
        patientId: '2',
        date: format(addDays(today, 2), "yyyy-MM-dd'T'HH:mm"),
        type: 'filling',
        provider: 'Dr. Johnson',
        status: 'scheduled',
      },
      {
        id: 'a4',
        patientId: '2',
        date: format(addDays(today, 5), "yyyy-MM-dd'T'HH:mm"),
        type: 'checkup',
        provider: 'Dr. Smith',
        status: 'scheduled',
      },
    ],
    chats: [
      {
        id: 'c3',
        sender: 'office',
        message: 'Your insurance pre-authorization was approved.',
        timestamp: format(subDays(today, 5), "yyyy-MM-dd'T'HH:mm"),
      },
    ],
  },
  {
    id: '3',
    name: 'Alice Johnson',
    email: 'alice@example.com',
    phone: '(555) 111-2222',
    appointments: [
      {
        id: 'a5',
        patientId: '3',
        date: format(addDays(today, 4), "yyyy-MM-dd'T'HH:mm"),
        type: 'consultation',
        provider: 'Dr. Lee',
        status: 'scheduled',
      },
    ],
    chats: [
      {
        id: 'c4',
        sender: 'office',
        message: 'Hi Alice, your checkup is scheduled for next month.',
        timestamp: format(subDays(today, 1), "yyyy-MM-dd'T'HH:mm"),
      },
    ],
  },
  {
    id: '4',
    name: 'Bob Brown',
    email: 'bob@example.com',
    phone: '(555) 333-4444',
    appointments: [
      {
        id: 'a6',
        patientId: '4',
        date: format(addDays(today, 3), "yyyy-MM-dd'T'HH:mm"),
        type: 'cleaning',
        provider: 'Sarah Wilson',
        status: 'scheduled',
      },
    ],
    chats: [
      {
        id: 'c5',
        sender: 'patient',
        message: 'Can I reschedule my cleaning appointment?',
        timestamp: format(subDays(today, 3), "yyyy-MM-dd'T'HH:mm"),
      },
    ],
  },
  {
    id: '5',
    name: 'Charlie Davis',
    email: 'charlie@example.com',
    phone: '(555) 555-6666',
    appointments: [
      {
        id: 'a7',
        patientId: '5',
        date: format(subDays(today, 10), "yyyy-MM-dd'T'HH:mm"),
        type: 'filling',
        provider: 'Dr. Johnson',
        status: 'completed',
      },
    ],
    chats: [
      {
        id: 'c6',
        sender: 'office',
        message: 'Your filling appointment was successful.',
        timestamp: format(subDays(today, 9), "yyyy-MM-dd'T'HH:mm"),
      },
    ],
  },
  {
    id: '6',
    name: 'Diana Prince',
    email: 'diana@example.com',
    phone: '(555) 777-8888',
    appointments: [
      {
        id: 'a8',
        patientId: '6',
        date: format(addDays(today, 21), "yyyy-MM-dd'T'HH:mm"),
        type: 'checkup',
        provider: 'Dr. Smith',
        status: 'scheduled',
      },
    ],
    chats: [
      {
        id: 'c7',
        sender: 'patient',
        message: 'What should I bring for my checkup?',
        timestamp: format(subDays(today, 5), "yyyy-MM-dd'T'HH:mm"),
      },
    ],
  },
  {
    id: '7',
    name: 'Eve Adams',
    email: 'eve@example.com',
    phone: '(555) 999-0000',
    appointments: [
      {
        id: 'a9',
        patientId: '7',
        date: format(today, "yyyy-MM-dd'T'HH:mm"),
        type: 'consultation',
        provider: 'Dr. Lee',
        status: 'scheduled',
      },
    ],
    chats: [
      {
        id: 'c8',
        sender: 'office',
        message: 'Your consultation is confirmed for today.',
        timestamp: format(subDays(today, 0), "yyyy-MM-dd'T'HH:mm"),
      },
    ],
  },
  {
    id: '8',
    name: 'Frank Castle',
    email: 'frank@example.com',
    phone: '(555) 888-9999',
    appointments: [
      {
        id: 'a10',
        patientId: '8',
        date: format(subDays(today, 1), "yyyy-MM-dd'T'HH:mm"),
        type: 'checkup',
        provider: 'Dr. Smith',
        status: 'completed',
      },
    ],
    chats: [
      {
        id: 'c9',
        sender: 'office',
        message: 'Hi Frank, your checkup was completed yesterday.',
        timestamp: format(subDays(today, 1), "yyyy-MM-dd'T'HH:mm"),
      },
    ],
  },
  {
    id: '9',
    name: 'Gina Green',
    email: 'gina@example.com',
    phone: '(555) 444-5555',
    appointments: [],
    chats: [
      {
        id: 'c10',
        sender: 'patient',
        message: 'What time is my next cleaning appointment?',
        timestamp: format(subDays(today, 1), "yyyy-MM-dd'T'HH:mm"),
      },
    ],
  },
  {
    id: '10',
    name: 'Hank Pym',
    email: 'hank@example.com',
    phone: '(555) 222-3333',
    appointments: [
      {
        id: 'a11',
        patientId: '10',
        date: format(subDays(today, 5), "yyyy-MM-dd'T'HH:mm"),
        type: 'consultation',
        provider: 'Dr. Lee',
        status: 'completed',
      },
    ],
    chats: [
      {
        id: 'c11',
        sender: 'office',
        message: 'Your consultation was completed last week.',
        timestamp: format(subDays(today, 5), "yyyy-MM-dd'T'HH:mm"),
      },
    ],
  },
  {
    id: '11',
    name: 'Ivy Adams',
    email: 'ivy@example.com',
    phone: '(555) 666-7777',
    appointments: [],
    chats: [
      {
        id: 'c12',
        sender: 'patient',
        message: 'Can I get a reminder for my checkup?',
        timestamp: format(subDays(today, 4), "yyyy-MM-dd'T'HH:mm"),
      },
    ],
  },
  {
    id: '12',
    name: 'Jack Sparrow',
    email: 'jack@example.com',
    phone: '(555) 999-1111',
    appointments: [
      {
        id: 'a13',
        patientId: '12',
        date: format(subDays(today, 6), "yyyy-MM-dd'T'HH:mm"),
        type: 'filling',
        provider: 'Dr. Johnson',
        status: 'completed',
      },
    ],
    chats: [
      {
        id: 'c13',
        sender: 'office',
        message: 'Your filling appointment was completed last week.',
        timestamp: format(subDays(today, 6), "yyyy-MM-dd'T'HH:mm"),
      },
    ],
  },
  {
    id: '13',
    name: 'Lara Croft',
    email: 'lara@example.com',
    phone: '(555) 444-8888',
    appointments: [
      {
        id: 'a14',
        patientId: '13',
        date: format(addDays(today, 8), "yyyy-MM-dd'T'HH:mm"),
        type: 'cleaning',
        provider: 'Sarah Wilson',
        status: 'scheduled',
      },
    ],
    chats: [
      {
        id: 'c14',
        sender: 'patient',
        message: 'Do I need to bring anything for my cleaning?',
        timestamp: format(subDays(today, 2), "yyyy-MM-dd'T'HH:mm"),
      },
    ],
  },
  {
    id: '14',
    name: 'Peter Parker',
    email: 'peter@example.com',
    phone: '(555) 333-2222',
    appointments: [
      {
        id: 'a15',
        patientId: '14',
        date: format(today, "yyyy-MM-dd'T'HH:mm"),
        type: 'consultation',
        provider: 'Dr. Lee',
        status: 'scheduled',
      },
    ],
    chats: [
      {
        id: 'c15',
        sender: 'office',
        message: 'Your consultation is confirmed for today.',
        timestamp: format(subDays(today, 0), "yyyy-MM-dd'T'HH:mm"),
      },
    ],
  },
  {
    id: '15',
    name: 'Wade Wilson',
    email: 'wade@example.com',
    phone: '(555) 555-4444',
    appointments: [
      {
        id: 'a16',
        patientId: '15',
        date: format(addDays(today, 12), "yyyy-MM-dd'T'HH:mm"),
        type: 'checkup',
        provider: 'Dr. Smith',
        status: 'scheduled',
      },
    ],
    chats: [
      {
        id: 'c16',
        sender: 'patient',
        message: 'Can I get a follow-up after my checkup?',
        timestamp: format(subDays(today, 1), "yyyy-MM-dd'T'HH:mm"),
      },
    ],
  },
  {
    id: '16',
    name: 'Natasha Romanoff',
    email: 'natasha@example.com',
    phone: '(555) 777-9999',
    appointments: [
      {
        id: 'a17',
        patientId: '16',
        date: format(addDays(today, 18), "yyyy-MM-dd'T'HH:mm"),
        type: 'filling',
        provider: 'Dr. Johnson',
        status: 'scheduled',
      },
    ],
    chats: [
      {
        id: 'c17',
        sender: 'office',
        message: 'Your filling appointment is scheduled for next month.',
        timestamp: format(subDays(today, 5), "yyyy-MM-dd'T'HH:mm"),
      },
    ],
  },
  {
    id: '17',
    name: 'Bruce Wayne',
    email: 'bruce@example.com',
    phone: '(555) 888-2222',
    appointments: [
      {
        id: 'a18',
        patientId: '17',
        date: format(addDays(today, 25), "yyyy-MM-dd'T'HH:mm"),
        type: 'consultation',
        provider: 'Dr. Lee',
        status: 'scheduled',
      },
    ],
    chats: [
      {
        id: 'c18',
        sender: 'patient',
        message: 'What should I expect during my consultation?',
        timestamp: format(subDays(today, 3), "yyyy-MM-dd'T'HH:mm"),
      },
    ],
  },
];