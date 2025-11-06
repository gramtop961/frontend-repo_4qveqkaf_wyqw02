import React, { useMemo } from 'react';
import { Bell, BatteryMedium, Trash2 } from 'lucide-react';

function Progress({ value, label, color = 'emerald' }) {
  const pct = Math.max(0, Math.min(100, value));
  const colorClass = {
    emerald: 'bg-emerald-500',
    sky: 'bg-sky-500',
    amber: 'bg-amber-500',
    rose: 'bg-rose-500',
  }[color] || 'bg-emerald-500';

  return (
    <div className="w-full">
      <div className="flex items-center justify-between mb-1">
        <span className="text-sm font-medium text-gray-700">{label}</span>
        <span className="text-sm text-gray-500">{pct}%</span>
      </div>
      <div className="h-3 w-full bg-gray-100 rounded-full overflow-hidden">
        <div className={`h-full ${colorClass}`} style={{ width: `${pct}%` }} />
      </div>
    </div>
  );
}

export default function Alerts({ bins }) {
  const alerts = useMemo(() => bins.filter(b => b.fillLevel >= 80), [bins]);

  return (
    <section className="grid grid-cols-1 lg:grid-cols-3 gap-6">
      <div className="lg:col-span-2 bg-white border border-gray-100 rounded-2xl p-5 shadow-sm">
        <div className="flex items-center justify-between mb-4">
          <div className="flex items-center gap-2">
            <Bell className="w-5 h-5 text-rose-600" />
            <h3 className="text-lg font-semibold text-gray-900">Alerts</h3>
          </div>
          <span className="text-sm text-gray-500">Real-time bin status</span>
        </div>
        {alerts.length === 0 ? (
          <div className="flex items-center gap-3 p-4 border border-emerald-200 bg-emerald-50 rounded-xl text-emerald-700">
            <BatteryMedium className="w-5 h-5" />
            All bins are operating within safe levels.
          </div>
        ) : (
          <ul className="space-y-3">
            {alerts.map((b) => (
              <li key={b.id} className="p-4 border border-rose-200 bg-rose-50 rounded-xl text-rose-700 flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <Trash2 className="w-5 h-5" />
                  <div>
                    <p className="font-semibold">Bin {b.id} is near capacity</p>
                    <p className="text-sm opacity-80">{b.type} • {b.fillLevel}% full</p>
                  </div>
                </div>
                <span className="text-xs font-semibold px-2 py-1 rounded bg-rose-100 text-rose-800">Action Needed</span>
              </li>
            ))}
          </ul>
        )}
      </div>

      <div className="bg-white border border-gray-100 rounded-2xl p-5 shadow-sm space-y-4">
        <h3 className="text-lg font-semibold text-gray-900">Fill Levels</h3>
        {bins.map((b) => (
          <div key={b.id} className="space-y-2">
            <div className="flex items-center justify-between">
              <span className="text-sm text-gray-600">Bin {b.id} ({b.type})</span>
              <span className={`text-xs font-medium px-2 py-0.5 rounded ${b.fillLevel>=80 ? 'bg-rose-100 text-rose-700' : 'bg-emerald-100 text-emerald-700'}`}>
                {b.fillLevel>=80 ? 'High' : 'OK'}
              </span>
            </div>
            <Progress value={b.fillLevel} label="Capacity" color={b.type === 'Degradable' ? 'emerald' : 'sky'} />
          </div>
        ))}
      </div>
    </section>
  );
}
