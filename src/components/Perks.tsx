import { Wifi, Coffee, Utensils, Gift, Headphones, Award, Users, Sparkles } from 'lucide-react';

export function Perks() {
  const perks = [
    {
      icon: Wifi,
      title: 'High-Speed WiFi',
      description: 'Lightning-fast internet throughout the venue',
      color: 'blue'
    },
    {
      icon: Utensils,
      title: 'Free Meals',
      description: 'All meals, snacks, and beverages provided',
      color: 'red'
    },
    {
      icon: Coffee,
      title: 'Unlimited Coffee',
      description: 'Premium coffee bar open 24/7',
      color: 'yellow'
    },
    {
      icon: Gift,
      title: 'Swag & Merch',
      description: 'Exclusive event swag for all participants',
      color: 'green'
    },
    {
      icon: Headphones,
      title: 'Quiet Zones',
      description: 'Dedicated spaces for rest and focus',
      color: 'blue'
    },
    {
      icon: Award,
      title: 'Workshops',
      description: 'Tech talks and hands-on workshops',
      color: 'red'
    },
    {
      icon: Users,
      title: 'Mentorship',
      description: 'Expert mentors from top companies',
      color: 'yellow'
    },
    {
      icon: Sparkles,
      title: 'Fun Activities',
      description: 'Games, contests, and entertainment',
      color: 'green'
    }
  ];

  const colorClasses = {
    blue: 'bg-blue-100 text-blue-600 border-blue-300',
    red: 'bg-red-100 text-red-600 border-red-300',
    yellow: 'bg-yellow-100 text-yellow-600 border-yellow-300',
    green: 'bg-green-100 text-green-600 border-green-300'
  };

  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-yellow-50 via-white to-red-50">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl sm:text-5xl mb-4">
            <span className="text-blue-600">What's </span>
            <span className="text-red-600">Included</span>
          </h2>
          <p className="text-xl text-gray-600">
            Everything you need for an amazing hackathon experience
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {perks.map((perk, index) => {
            const colors = colorClasses[perk.color as keyof typeof colorClasses];
            return (
              <div
                key={index}
                className="p-6 rounded-xl bg-white border-2 border-gray-200 hover:border-gray-300 shadow-md hover:shadow-xl transition-all hover:transform hover:scale-105"
              >
                <div className={`w-12 h-12 rounded-lg ${colors} flex items-center justify-center mb-4 border-2`}>
                  <perk.icon className="w-6 h-6" />
                </div>
                <h3 className="text-lg text-gray-800 mb-2">{perk.title}</h3>
                <p className="text-sm text-gray-600">{perk.description}</p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
