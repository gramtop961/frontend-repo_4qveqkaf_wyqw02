import React from 'react';

export default function WeeklySummary({ summary }) {
  const max = Math.max(...summary.map(s => s.kg), 1);

  return (
    <section className="bg-white border border-gray-100 rounded-2xl p-5 shadow-sm">
      <div className="flex items-center justify-between mb-4">
        <h3 className="text-lg font-semibold text-gray-900">Weekly Summary</h3>
        <span className="text-sm text-gray-500">Reports</span>
      </div>
      <div className="h-64 grid grid-rows-[1fr_auto]">
        <div className="flex items-end gap-3 h-full">
          {summary.map((s) => (
            <div key={s.label} className="flex-1 flex flex-col items-center">
              <div className="w-full bg-emerald-100 rounded-t-md" style={{ height: `${(s.kg / max) * 100}%` }}>
                <div className="w-full h-full bg-gradient-to-t from-emerald-500 to-emerald-400 rounded-t-md shadow-inner" />
              </div>
              <span className="mt-2 text-xs text-gray-600">{s.label}</span>
            </div>
          ))}
        </div>
        <div className="mt-4 text-xs text-gray-500 text-center">Waste collected (kg)</div>
      </div>
    </section>
  );
}
