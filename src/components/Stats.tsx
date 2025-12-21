import { useEffect, useState } from 'react';
import { Users, Trophy, Briefcase, DollarSign } from 'lucide-react';

export function Stats() {
  const [counts, setCounts] = useState({
    participants: 0,
    projects: 0,
    sponsors: 0,
    prizes: 0
  });

  const stats = [
    { 
      icon: Users, 
      label: 'Participants', 
      value: 500, 
      suffix: '+',
      color: 'bg-blue-600',
      borderColor: 'border-blue-500'
    },
    { 
      icon: Trophy, 
      label: 'Projects', 
      value: 150, 
      suffix: '+',
      color: 'bg-red-600',
      borderColor: 'border-red-500'
    },
    { 
      icon: Briefcase, 
      label: 'Sponsors', 
      value: 10, 
      suffix: '+',
      color: 'bg-yellow-500',
      borderColor: 'border-yellow-500'
    },
    { 
      icon: DollarSign, 
      label: 'In Prizes', 
      value: 25, 
      suffix: 'K+',
      color: 'bg-green-600',
      borderColor: 'border-green-500'
    }
  ];

  useEffect(() => {
    const duration = 2000; // 2 seconds
    const steps = 60;
    const interval = duration / steps;

    stats.forEach((stat, index) => {
      let currentCount = 0;
      const increment = stat.value / steps;

      const timer = setInterval(() => {
        currentCount += increment;
        if (currentCount >= stat.value) {
          currentCount = stat.value;
          clearInterval(timer);
        }

        setCounts(prev => ({
          ...prev,
          [stat.label.toLowerCase().replace(' ', '')]: Math.floor(currentCount)
        }));
      }, interval);
    });
  }, []);

  const getCountValue = (label: string) => {
    const key = label.toLowerCase().replace(' ', '') as keyof typeof counts;
    return counts[key];
  };

  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-blue-50 via-white to-green-50">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-4xl sm:text-5xl mb-4">
            <span className="text-blue-600">By The </span>
            <span className="text-red-600">Numbers</span>
          </h2>
          <p className="text-xl text-gray-600">
            Join the largest hackathon in Pune
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {stats.map((stat, index) => (
            <div
              key={index}
              className={`p-8 rounded-2xl bg-white border-2 ${stat.borderColor} shadow-lg hover:shadow-2xl transition-all hover:transform hover:scale-105`}
            >
              <div className={`w-16 h-16 rounded-full ${stat.color} flex items-center justify-center mb-4 mx-auto shadow-lg`}>
                <stat.icon className="w-8 h-8 text-white" />
              </div>
              <div className="text-center">
                <div className="text-4xl text-gray-800 mb-2">
                  {getCountValue(stat.label)}{stat.suffix}
                </div>
                <div className="text-gray-600">{stat.label}</div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
