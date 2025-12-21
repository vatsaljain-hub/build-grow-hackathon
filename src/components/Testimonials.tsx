import { ImageWithFallback } from './figma/ImageWithFallback';
import { Quote } from 'lucide-react';

export function Testimonials() {
  const testimonials = [
    {
      name: 'Sarah Chen',
      role: 'Software Engineer at TechCorp',
      image: 'https://images.unsplash.com/photo-1676277757211-ebd7fdeb3d5b?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxkaXZlcnNlJTIwdGVhbSUyMG1lZXRpbmd8ZW58MXx8fHwxNzY2MjMwOTkwfDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
      quote: 'BuildTheFuture was where I met my co-founder. We built our MVP in 48 hours and now have a funded startup!',
      color: 'blue'
    },
    {
      name: 'Marcus Johnson',
      role: 'Product Designer',
      image: 'https://images.unsplash.com/photo-1606857521015-7f9fcf423740?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx0ZWNoJTIwY29tcGFueSUyMG9mZmljZXxlbnwxfHx8fDE3NjYzMDcwMjd8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
      quote: 'The energy was incredible! I learned so much and made connections that opened doors to my dream job.',
      color: 'red'
    },
    {
      name: 'Priya Patel',
      role: 'CS Student at Stanford',
      image: 'https://images.unsplash.com/photo-1606244667418-55d798703600?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxzdGFydHVwJTIwd29ya3NwYWNlfGVufDF8fHx8MTc2NjIxNDg0M3ww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
      quote: 'As a first-time hacker, I was nervous. But the mentors were amazing and my team won 2nd place!',
      color: 'green'
    }
  ];

  const colorClasses = {
    blue: 'border-blue-500 bg-blue-50',
    red: 'border-red-500 bg-red-50',
    green: 'border-green-500 bg-green-50'
  };

  const quoteColors = {
    blue: 'text-blue-400',
    red: 'text-red-400',
    green: 'text-green-400'
  };

  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8 bg-white">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl sm:text-5xl mb-4">
            <span className="text-red-600">What </span>
            <span className="text-yellow-600">Hackers </span>
            <span className="text-green-600">Say</span>
          </h2>
          <p className="text-xl text-gray-600">
            Hear from past participants about their experience
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              className={`p-6 rounded-2xl bg-white border-2 ${colorClasses[testimonial.color as keyof typeof colorClasses]} shadow-lg hover:shadow-2xl transition-all hover:transform hover:scale-105`}
            >
              <Quote className={`w-10 h-10 ${quoteColors[testimonial.color as keyof typeof quoteColors]} mb-4`} />
              <p className="text-gray-700 mb-6 italic">"{testimonial.quote}"</p>
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-full bg-gradient-to-br from-gray-300 to-gray-400 overflow-hidden">
                  <ImageWithFallback
                    src={testimonial.image}
                    alt={testimonial.name}
                    className="w-full h-full object-cover"
                  />
                </div>
                <div>
                  <div className="text-gray-800">{testimonial.name}</div>
                  <div className="text-sm text-gray-600">{testimonial.role}</div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
