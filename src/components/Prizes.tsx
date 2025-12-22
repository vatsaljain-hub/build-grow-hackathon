import { ImageWithFallback } from './figma/ImageWithFallback';
import { Trophy, Medal, Award, Gift } from 'lucide-react';
import prizeImage from '@/assets/prizes.jpeg';

export function Prizes() {
  const prizes = [
    // {
    //   icon: Trophy,
    //   place: '1st Place',
    //   amount: '$10,000',
    //   perks: ['Cash prize', 'Mentorship program', 'Investor meetings', 'Featured on our platform'],
    //   color: 'bg-gradient-to-br from-yellow-400 to-yellow-600'
    // },
    // {
    //   icon: Medal,
    //   place: '2nd Place',
    //   amount: '$5,000',
    //   perks: ['Cash prize', 'Mentorship program', 'Co-working space access', 'Tech swag package'],
    //   color: 'bg-gradient-to-br from-gray-300 to-gray-500'
    // },
    // {
    //   icon: Award,
    //   place: '3rd Place',
    //   amount: '$2,500',
    //   perks: ['Cash prize', 'Online courses bundle', 'Conference tickets', 'Tech swag package'],
    //   color: 'bg-gradient-to-br from-amber-600 to-amber-800'
    // }
  ];

  const specialPrizes = [
    { title: '', prize: 'Mechanical Keyboard', color: 'border-blue-500 bg-blue-50' },
    { title: '', prize: 'Mouse', color: 'border-red-500 bg-red-50' },
    { title: '', prize: 'Laptop Bag', color: 'border-yellow-500 bg-yellow-50' },
    { title: '', prize: 'Surprise Prize', color: 'border-green-500 bg-green-50' }
  ];

  return (
    <section id="prizes"className="py-20 px-4 sm:px-6 lg:px-8 bg-gray-50">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl sm:text-5xl mb-4">
            <span className="text-yellow-600">Prizes </span>
            <span className="text-green-600">& Awards</span>
          </h2>
          <p className="text-xl text-gray-600">
            Over 25,000 in prizes and perks for winning teams
          </p>
        </div>

        {/* Main Prizes */}
        <div className="grid md:grid-cols-3 gap-8 mb-16">
          {prizes.map((prize, index) => (
            <div
              key={index}
              className="relative p-8 rounded-2xl bg-white border-2 border-gray-200 hover:border-gray-300 transition-all hover:transform hover:scale-105 shadow-lg"
            >
              <div className={`w-16 h-16 rounded-full ${prize.color} flex items-center justify-center mb-4 mx-auto shadow-lg`}>
                <prize.icon className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-2xl text-center mb-2 text-gray-800">{prize.place}</h3>
              <p className="text-3xl text-center mb-6">
                <span className="text-blue-600">{prize.amount}</span>
              </p>
              <ul className="space-y-2">
                {prize.perks.map((perk, perkIndex) => (
                  <li key={perkIndex} className="flex items-center gap-2 text-gray-700">
                    <div className="w-1.5 h-1.5 rounded-full bg-green-600"></div>
                    {perk}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Special Category Prizes */}
        <div className="rounded-2xl bg-white border-2 border-gray-200 p-8 shadow-lg">
          <div className="flex items-center gap-3 mb-6">
            <Gift className="w-8 h-8 text-red-600" />
            <h3 className="text-2xl text-gray-800">For Wining Team</h3>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {specialPrizes.map((special, index) => (
              <div key={index} className={`p-4 rounded-lg border-2 ${special.color}`}>
                <p className="text-gray-800 mb-2">{special.title}</p>
                <p className="text-gray-700">{special.prize}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Prize Image */}
        <div className="mt-12 rounded-2xl overflow-hidden shadow-lg">
          <ImageWithFallback
            src={prizeImage}
            alt="Trophy"
            className="w-full h-96 object-cover"
          />
        </div>
      </div>
    </section>
  );
}