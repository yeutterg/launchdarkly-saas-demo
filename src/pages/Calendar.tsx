import React from 'react';
import { Calendar as BigCalendar, dateFnsLocalizer } from 'react-big-calendar';
import { format, parse, startOfWeek, getDay } from 'date-fns';
import enUS from 'date-fns/locale/en-US';
import { useStore } from '../store/useStore';
import 'react-big-calendar/lib/css/react-big-calendar.css';

const locales = {
  'en-US': enUS,
};

const localizer = dateFnsLocalizer({
  format,
  parse,
  startOfWeek,
  getDay,
  locales,
});

export function Calendar() {
  const patients = useStore((state) => state.patients);
  const staff = useStore((state) => state.staff);

  // Prepare events for the calendar
  const events = patients.flatMap((patient) =>
    patient.appointments
      .filter((apt) => apt.status === 'scheduled') // Only include scheduled appointments
      .map((apt) => ({
        title: `${patient.name} - ${apt.type}`,
        start: new Date(apt.date),
        end: new Date(new Date(apt.date).getTime() + 60 * 60 * 1000), // Assuming 1 hour appointments
        resource: staff.find((s) => s.name === apt.provider),
      }))
  );

  return (
    <div className="h-[600px] bg-white p-4 rounded-lg shadow">
      <BigCalendar
        localizer={localizer}
        events={events}
        views={['day', 'week']}
        defaultView="day"
        step={60}
        resources={staff}
        resourceIdAccessor="id"
        resourceTitleAccessor="name"
      />
    </div>
  );
}