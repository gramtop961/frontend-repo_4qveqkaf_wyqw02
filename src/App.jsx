import React, { useMemo, useState } from 'react';
import Hero from './components/Hero';
import Alerts from './components/Alerts';
import MapAndStats from './components/MapAndStats';
import WeeklySummary from './components/WeeklySummary';
import Auth from './components/Auth';

function useMockData() {
  // Mock bins data representing degradable and non-biodegradable
  const [bins] = useState([
    { id: 1, type: 'Degradable', fillLevel: 72, lat: 12.9352, lng: 77.6245 },
    { id: 2, type: 'Non-biodegradable', fillLevel: 86, lat: 12.9716, lng: 77.5946 },
  ]);

  const lastCollected = useMemo(() => new Date(Date.now() - 1000 * 60 * 60 * 5).toLocaleString(), []);

  const quote = useMemo(() => {
    const quotes = [
      'Recycling one aluminum can saves enough energy to run a TV for three hours.',
      'Reduce, Reuse, Recycle — in that order.',
      'Compostable waste turns into nutrient-rich soil — keep organics separate!',
      'Every bottle counts. Small actions create big impact.',
    ];
    return quotes[new Date().getDay() % quotes.length];
  }, []);

  const summary = useMemo(() => (
    [
      { label: 'Mon', kg: 8 },
      { label: 'Tue', kg: 11 },
      { label: 'Wed', kg: 7 },
      { label: 'Thu', kg: 10 },
      { label: 'Fri', kg: 12 },
      { label: 'Sat', kg: 9 },
      { label: 'Sun', kg: 14 },
    ]
  ), []);

  return { bins, lastCollected, quote, summary, points: 240 };
}

export default function App() {
  const [user, setUser] = useState(null);
  const { bins, lastCollected, quote, summary, points } = useMockData();

  return (
    <div className="min-h-screen bg-gradient-to-b from-white via-gray-50 to-gray-100">
      <Hero />
      <div className="max-w-6xl mx-auto px-6 py-10 space-y-8">
        {!user && (
          <Auth onAuth={setUser} />
        )}

        <div className="grid grid-cols-1 gap-6">
          <Alerts bins={bins} />
          <MapAndStats bins={bins} lastCollected={lastCollected} points={points} quote={quote} />
          <WeeklySummary summary={summary} />
        </div>

        <footer className="pt-6 text-center text-sm text-gray-500">
          ESP32-CAM ready • Real-time alerts when fill level exceeds 80%
        </footer>
      </div>
    </div>
  );
}
