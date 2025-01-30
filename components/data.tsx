export const SITE_TITLE = "Appointment Scheduler";
export const SITE_DESCRIPTION = "Schedule an appointment";

export const DEFAULT_SESSION = '30min' as const;

export const SESSION_TYPES = [
  {
    id: '30min',
    title: '30 Minute Session',
    url: 'https://calendar.google.com/calendar/appointments/schedules/YOUR_CALENDAR_LINK_HERE'
  },
  {
    id: '60min',
    title: '60 Minute Session',
    url: 'https://calendar.google.com/calendar/appointments/schedules/YOUR_CALENDAR_LINK_HERE'
  }
] as const;

export type SessionType = typeof SESSION_TYPES[number]['id'];

type SessionData = {
  title: string;
  url: string;
};

export const CALENDAR_DATA: { sessions: Record<SessionType, SessionData> } = {
  sessions: Object.fromEntries(
    SESSION_TYPES.map(session => [
      session.id,
      { title: session.title, url: session.url }
    ])
  ) as Record<SessionType, SessionData>
}; 