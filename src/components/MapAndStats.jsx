import React from 'react';
import { MapPin, Clock, Star, Award } from 'lucide-react';

export default function MapAndStats({ bins, lastCollected, points, quote }) {
  return (
    <section className="grid grid-cols-1 lg:grid-cols-3 gap-6">
      <div className="lg:col-span-2 bg-white border border-gray-100 rounded-2xl p-5 shadow-sm">
        <div className="flex items-center justify-between mb-3">
          <div className="flex items-center gap-2">
            <MapPin className="w-5 h-5 text-sky-600" />
            <h3 className="text-lg font-semibold text-gray-900">Bin Locations</h3>
          </div>
          <span className="text-sm text-gray-500">Live map preview</span>
        </div>
        <div className="relative h-72 md:h-80 rounded-xl overflow-hidden border border-gray-100">
          <div className="absolute inset-0 bg-[url('https://tile.openstreetmap.org/5/16/10.png')] bg-cover opacity-10" />
          <div className="absolute inset-0 p-4 grid grid-cols-2 gap-4">
            {bins.map(b => (
              <div key={b.id} className={`rounded-lg p-3 ${b.fillLevel>=80 ? 'bg-rose-50 border border-rose-200' : 'bg-emerald-50 border border-emerald-200'}`}>
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-sm font-semibold text-gray-800">Bin {b.id}</p>
                    <p className="text-xs text-gray-500">{b.lat.toFixed(4)}, {b.lng.toFixed(4)}</p>
                  </div>
                  <span className={`text-xs font-medium px-2 py-0.5 rounded ${b.fillLevel>=80 ? 'bg-rose-100 text-rose-700' : 'bg-emerald-100 text-emerald-700'}`}>{b.fillLevel>=80 ? 'Full' : 'OK'}</span>
                </div>
                <div className="mt-2 h-2 w-full bg-white/70 rounded-full overflow-hidden">
                  <div className={`h-full ${b.type==='Degradable' ? 'bg-emerald-500' : 'bg-sky-500'}`} style={{ width: `${b.fillLevel}%` }} />
                </div>
                <p className="mt-1 text-xs text-gray-600">{b.type}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className="bg-white border border-gray-100 rounded-2xl p-5 shadow-sm space-y-4">
        <div className="flex items-center gap-2">
          <Clock className="w-5 h-5 text-gray-700" />
          <div>
            <p className="text-sm text-gray-500">Last Collected</p>
            <p className="font-semibold text-gray-900">{lastCollected}</p>
          </div>
        </div>
        <div className="flex items-center gap-2">
          <Award className="w-5 h-5 text-amber-600" />
          <div>
            <p className="text-sm text-gray-500">Your Points</p>
            <p className="font-semibold text-gray-900">{points} pts</p>
          </div>
        </div>
        <div className="p-4 rounded-xl bg-gradient-to-br from-emerald-50 to-sky-50 border border-emerald-100">
          <div className="flex items-start gap-3">
            <Star className="w-5 h-5 text-emerald-600 mt-0.5" />
            <div>
              <p className="text-sm font-semibold text-gray-900">Eco Tip</p>
              <p className="text-sm text-gray-700">{quote}</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
