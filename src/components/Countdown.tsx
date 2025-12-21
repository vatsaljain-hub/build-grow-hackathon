import { useEffect, useState } from 'react';
import { Clock } from 'lucide-react';

export function Countdown() {
  const targetDate = new Date('2025-03-15T17:00:00').getTime();
  
  const [timeLeft, setTimeLeft] = useState({
    days: 34,
    hours: 0,
    minutes: 0,
    seconds: 0
  });

  useEffect(() => {
    const timer = setInterval(() => {
      const now = new Date().getTime();
      const distance = targetDate - now;

      if (distance > 0) {
        setTimeLeft({
          days: Math.floor(distance / (1000 * 60 * 60 * 24)),
          hours: Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)),
          minutes: Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60)),
          seconds: Math.floor((distance % (1000 * 60)) / 1000)
        });
      }
    }, 1000);

    return () => clearInterval(timer);
  }, [targetDate]);

  const timeUnits = [
    { label: 'Days', value: timeLeft.days, color: 'bg-blue-600' },
    { label: 'Hours', value: timeLeft.hours, color: 'bg-red-600' },
    { label: 'Minutes', value: timeLeft.minutes, color: 'bg-yellow-500' },
    { label: 'Seconds', value: timeLeft.seconds, color: 'bg-green-600' }
  ];

  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-blue-600 via-red-600 to-yellow-500">
      <div className="max-w-5xl mx-auto">
        <div className="text-center mb-12">
          <div className="flex items-center justify-center gap-3 mb-4">
            <Clock className="w-10 h-10 text-white" />
            <h2 className="text-4xl sm:text-5xl text-white">Event Starts In</h2>
          </div>
          <p className="text-xl text-white/90">
            Mark your calendars! The countdown is on.
          </p>
        </div>

        <div className="grid grid-cols-2 lg:grid-cols-4 gap-6">
          {timeUnits.map((unit, index) => (
            <div
              key={index}
              className="p-6 rounded-2xl bg-white/95 backdrop-blur-sm shadow-2xl"
            >
              <div className="text-center">
                <div className={`text-5xl sm:text-6xl mb-2 ${unit.color.replace('bg-', 'text-')}`}>
                  {String(unit.value).padStart(2, '0')}
                </div>
                <div className="text-gray-700">{unit.label}</div>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-12 text-center">
          <button
            onClick={() => document.getElementById('registration')?.scrollIntoView({ behavior: 'smooth' })}
            className="px-8 py-4 rounded-full bg-white text-blue-600 hover:bg-gray-100 transition-all shadow-2xl text-lg"
          >
            Register Before It's Too Late!
          </button>
        </div>
      </div>
    </section>
  );
}
