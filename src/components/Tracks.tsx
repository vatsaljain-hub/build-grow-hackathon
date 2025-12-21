import { Brain, Heart, Wallet, Cpu, Smartphone, Globe } from 'lucide-react';

export function Tracks() {
  const tracks = [
    {
      icon: Brain,
      title: 'AI & Machine Learning',
      description: 'Build intelligent systems using cutting-edge AI/ML technologies',
      color: 'blue',
      examples: ['Computer Vision', 'NLP', 'Predictive Models']
    },
    {
      icon: Heart,
      title: 'Social Impact',
      description: 'Create solutions that make a positive difference in communities',
      color: 'red',
      examples: ['Healthcare', 'Education', 'Sustainability']
    },
    {
      icon: Wallet,
      title: 'FinTech',
      description: 'Innovate in finance, payments, and blockchain technology',
      color: 'yellow',
      examples: ['Crypto', 'Payment Systems', 'Banking']
    },
    {
      icon: Cpu,
      title: 'Hardware & IoT',
      description: 'Design connected devices and innovative hardware solutions',
      color: 'green',
      examples: ['Smart Devices', 'Robotics', 'Wearables']
    },
    {
      icon: Smartphone,
      title: 'Mobile Apps',
      description: 'Develop next-gen mobile experiences for iOS and Android',
      color: 'blue',
      examples: ['AR/VR', 'Gaming', 'Productivity']
    },
    {
      icon: Globe,
      title: 'Open Innovation',
      description: 'Build anything! Your creativity is the only limit',
      color: 'red',
      examples: ['Web Apps', 'APIs', 'Creative Tech']
    }
  ];

  const colorClasses = {
    blue: {
      bg: 'bg-blue-50',
      border: 'border-blue-500',
      icon: 'bg-blue-600',
      text: 'text-blue-600',
      tag: 'bg-blue-100 text-blue-700'
    },
    red: {
      bg: 'bg-red-50',
      border: 'border-red-500',
      icon: 'bg-red-600',
      text: 'text-red-600',
      tag: 'bg-red-100 text-red-700'
    },
    yellow: {
      bg: 'bg-yellow-50',
      border: 'border-yellow-500',
      icon: 'bg-yellow-500',
      text: 'text-yellow-600',
      tag: 'bg-yellow-100 text-yellow-700'
    },
    green: {
      bg: 'bg-green-50',
      border: 'border-green-500',
      icon: 'bg-green-600',
      text: 'text-green-600',
      tag: 'bg-green-100 text-green-700'
    }
  };

  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8 bg-white">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl sm:text-5xl mb-4">
            <span className="text-yellow-600">Challenge </span>
            <span className="text-green-600">Tracks</span>
          </h2>
          <p className="text-xl text-gray-600">
            Choose your track or build something completely new
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {tracks.map((track, index) => {
            const colors = colorClasses[track.color as keyof typeof colorClasses];
            return (
              <div
                key={index}
                className={`p-6 rounded-2xl bg-white border-2 ${colors.border} hover:shadow-2xl transition-all hover:transform hover:scale-105`}
              >
                <div className={`w-14 h-14 rounded-xl ${colors.icon} flex items-center justify-center mb-4 shadow-lg`}>
                  <track.icon className="w-7 h-7 text-white" />
                </div>
                <h3 className={`text-2xl mb-3 ${colors.text}`}>{track.title}</h3>
                <p className="text-gray-700 mb-4">{track.description}</p>
                <div className="flex flex-wrap gap-2">
                  {track.examples.map((example, i) => (
                    <span
                      key={i}
                      className={`px-3 py-1 rounded-full text-sm ${colors.tag}`}
                    >
                      {example}
                    </span>
                  ))}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
