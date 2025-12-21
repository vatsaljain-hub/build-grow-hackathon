import { ImageWithFallback } from './figma/ImageWithFallback';
import { Code, Lightbulb, Trophy, Rocket } from 'lucide-react';

export function About() {
  const features = [
    {
      icon: Code,
      title: 'Build & Learn',
      description: 'Work with cutting-edge technologies and learn from industry mentors',
      color: 'blue'
    },
    {
      icon: Lightbulb,
      title: 'Innovate',
      description: 'Turn your wildest ideas into reality with like-minded innovators',
      color: 'red'
    },
    {
      icon: Trophy,
      title: 'Compete',
      description: 'Compete for amazing prizes and recognition from top tech companies',
      color: 'yellow'
    },
    {
      icon: Rocket,
      title: 'Launch',
      description: 'Get your project in front of investors and potential co-founders',
      color: 'green'
    }
  ];

  const colorClasses = {
    blue: 'text-blue-600 bg-blue-50 border-blue-200',
    red: 'text-red-600 bg-red-50 border-red-200',
    yellow: 'text-yellow-600 bg-yellow-50 border-yellow-200',
    green: 'text-green-600 bg-green-50 border-green-200'
  };

  return (
    <section id="about" className="py-20 px-4 sm:px-6 lg:px-8 bg-gray-50">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl sm:text-5xl mb-4">
            <span className="text-blue-600">What is </span>
            <span className="text-red-600">Build</span>
            <span className="text-yellow-500">And</span>
            <span className="text-green-600">Grow?</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            The ultimate hackathon experience where innovation meets opportunity
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-12 items-center mb-16">
          <div>
            <ImageWithFallback
              src="https://images.unsplash.com/photo-1609619385076-36a873425636?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx0ZWNobm9sb2d5JTIwaW5ub3ZhdGlvbnxlbnwxfHx8fDE3NjYyNzEwMjd8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
              alt="Innovation"
              className="rounded-2xl shadow-2xl"
            />
          </div>
          
          <div className="space-y-6">
            <p className="text-lg text-gray-700">
              BuildAndGrow is more than just a hackathon - it's a launchpad for the next generation of tech innovators. Over 24 hours, you'll collaborate with talented individuals, receive mentorship from industry leaders, and build solutions that matter.
            </p>
            <p className="text-lg text-gray-700">
              Whether you're a seasoned developer, a creative designer, or a business enthusiast, there's a place for you here. Form teams, tackle challenges, and compete for incredible prizes while making lasting connections.
            </p>
          </div>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {features.map((feature, index) => (
            <div
              key={index}
              className={`p-6 rounded-2xl bg-white border-2 hover:shadow-xl transition-all hover:transform hover:scale-105 ${
                colorClasses[feature.color as keyof typeof colorClasses].split(' ')[2]
              }`}
            >
              <div className={`w-12 h-12 rounded-full ${colorClasses[feature.color as keyof typeof colorClasses].split(' ')[1]} flex items-center justify-center mb-4`}>
                <feature.icon className={`w-6 h-6 ${colorClasses[feature.color as keyof typeof colorClasses].split(' ')[0]}`} />
              </div>
              <h3 className="text-xl mb-2 text-gray-800">{feature.title}</h3>
              <p className="text-gray-600">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}