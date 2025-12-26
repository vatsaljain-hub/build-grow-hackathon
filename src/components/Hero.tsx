import { ImageWithFallback } from './figma/ImageWithFallback';
import { Calendar, MapPin, Users } from 'lucide-react';

export function Hero() {
  return (
    <div className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-blue-50 via-white to-yellow-50">
      {/* Decorative Google Color Circles */}
      <div className="absolute top-20 left-10 w-64 h-64 rounded-full bg-blue-500/10 blur-3xl"></div>
      <div className="absolute top-40 right-20 w-80 h-80 rounded-full bg-red-500/10 blur-3xl"></div>
      <div className="absolute bottom-20 left-1/4 w-72 h-72 rounded-full bg-yellow-500/10 blur-3xl"></div>
      <div className="absolute bottom-32 right-1/3 w-96 h-96 rounded-full bg-green-500/10 blur-3xl"></div>

      {/* Content */}
      <div className="relative z-10 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white border-2 border-blue-500 mb-8 shadow-lg">
          <span className="w-2 h-2 rounded-full bg-green-500 animate-pulse"></span>
          <span className="text-gray-700">Applications Open</span>
        </div>
        
        <h1 className="text-5xl sm:text-6xl lg:text-7xl mb-6">
          <span className="text-blue-600">Build</span>
          <span className="text-red-600">And</span>
          <span className="text-yellow-500">Grow</span>
          <span className="text-green-600"> 2025</span>
        </h1>
        
        <p className="text-xl sm:text-2xl text-gray-700 mb-12 max-w-3xl mx-auto">
         24 hours of innovation, collaboration, and creativity—where developers, designers, and entrepreneurs harness the power of AI to build intelligent solutions that shape the future.
        </p>

        {/* Key Info */}
        <div className="flex flex-col sm:flex-row gap-6 justify-center items-center mb-12 text-gray-700">
          <div className="flex items-center gap-2">
            <Calendar className="w-5 h-5 text-blue-600" />
            <span>January 24-25, 2026</span>
          </div>
          <div className="flex items-center gap-2">
            <MapPin className="w-5 h-5 text-red-600" />
            <span>Data Axle Pune </span>
          </div>
          <div className="flex items-center gap-2">
            <Users className="w-5 h-5 text-green-600" />
            <span>500+ Participants</span>
          </div>
        </div>

        {/* CTA Buttons */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <button 
            onClick={() => document.getElementById('registration')?.scrollIntoView({ behavior: 'smooth' })}
            className="px-8 py-4 rounded-full bg-blue-600 hover:bg-blue-700 transition-all text-white shadow-lg hover:shadow-xl"
          >
            Coming Soon!
          </button>
          <button 
            onClick={() => document.getElementById('about')?.scrollIntoView({ behavior: 'smooth' })}
            className="px-8 py-4 rounded-full bg-white hover:bg-gray-50 transition-all text-gray-700 border-2 border-gray-300 shadow-lg hover:shadow-xl"
          >
            Learn More
          </button>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 rounded-full border-2 border-blue-600 flex items-start justify-center p-2">
          <div className="w-1 h-3 rounded-full bg-blue-600"></div>
        </div>
      </div>
    </div>
  );
}