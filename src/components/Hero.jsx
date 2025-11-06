import React from 'react';
import Spline from '@splinetool/react-spline';
import { Recycle, Bot } from 'lucide-react';

export default function Hero() {
  return (
    <section className="relative w-full h-[60vh] md:h-[70vh] overflow-hidden bg-white">
      <div className="absolute inset-0">
        <Spline scene="https://prod.spline.design/OG17yM2eUIs8MUmA/scene.splinecode" style={{ width: '100%', height: '100%' }} />
      </div>

      <div className="absolute inset-0 bg-gradient-to-b from-white/60 via-white/50 to-white pointer-events-none" />

      <div className="relative z-10 max-w-6xl mx-auto px-6 h-full flex items-center">
        <div className="backdrop-blur-sm/0">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-100 text-emerald-700 text-sm font-medium shadow-sm">
            <Recycle className="w-4 h-4" /> Smart Waste Management
          </div>
          <h1 className="mt-4 text-4xl md:text-6xl font-extrabold tracking-tight text-gray-900">
            Trashbotix
          </h1>
          <p className="mt-3 md:mt-4 text-base md:text-lg text-gray-600 max-w-2xl">
            AI-powered dual-bin system that sorts waste, tracks fill levels in real-time, and rewards cleaner cities.
          </p>
          <div className="mt-6 flex items-center gap-3">
            <button className="inline-flex items-center gap-2 px-4 py-2 rounded-lg bg-emerald-600 hover:bg-emerald-700 text-white font-semibold shadow">
              <Bot className="w-5 h-5" /> Get Started
            </button>
            <button className="px-4 py-2 rounded-lg border border-gray-200 text-gray-700 hover:bg-gray-50 font-semibold">Learn More</button>
          </div>
        </div>
      </div>
    </section>
  );
}
