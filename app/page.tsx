"use client";

import { useState, Suspense } from 'react';
import { SESSION_TYPES, SessionType, DEFAULT_SESSION } from '@/components/data';

const SessionButton = ({ 
  session, 
  isActive, 
  onClick 
}: { 
  session: typeof SESSION_TYPES[number],
  isActive: boolean,
  onClick: () => void
}) => (
  <button
    onClick={onClick}
    className={`${
      isActive
        ? 'text-gray-100 bg-gradient-to-br from-purple-500 to-blue-500 '
        : 'text-gray-800 bg-gray-100 hover:bg-gradient-to-br hover:from-purple-400 hover:to-blue-400'
    } py-2 px-4 rounded transition duration-300`}
  >
    {session.title}
  </button>
);

const AppointmentScheduler = () => {
  const [activeSchedule, setActiveSchedule] = useState<SessionType>(DEFAULT_SESSION);
  const activeSession = SESSION_TYPES.find(s => s.id === activeSchedule) ?? SESSION_TYPES[0];

  return (
    <div className="scheduler-container">
      <div className="button-container">
        {SESSION_TYPES.map((session) => (
          <SessionButton
            key={session.id}
            session={session}
            isActive={activeSchedule === session.id}
            onClick={() => setActiveSchedule(session.id)}
          />
        ))}
      </div>

      <Suspense fallback={<div>Loading scheduler...</div>}>
        <iframe
          src={activeSession.url}
          width="100%"
          height="600"
          frameBorder="0"
        />
      </Suspense>
    </div>
  );
};

export default function Home() {
  return (
    <main className="container mx-auto p-4">
      <AppointmentScheduler />
    </main>
  );
}
