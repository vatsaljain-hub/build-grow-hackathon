import { ImageWithFallback } from './figma/ImageWithFallback';
import { Linkedin, Twitter, Mail } from 'lucide-react';

export function Organizers() {
  const team = [
    {
      name: 'Antrixsh Gupta',
      role: 'Organizer',
      image: 'https://res.cloudinary.com/startup-grind/image/upload/c_fill,w_250,h_250,g_center/c_fill,dpr_2.0,f_auto,g_center,q_auto:good/v1/gcs/platform-data-goog/avatars/antrixsh_gupta.jpg',
      bio: 'Senior Manager Data & AI Practice @ Genezeon',
      color: 'blue',
      linkedin: 'https://linkedin.com/in/alexrivera',
      twitter: 'https://twitter.com/alexrivera',
      email: 'antrixsh@gmail.com'
    },
    {
      name: 'Pratik Kale',
      role: 'Organizer',
      image: 'https://res.cloudinary.com/startup-grind/image/upload/c_fill,w_250,h_250,g_center/c_fill,dpr_2.0,f_auto,g_center,q_auto:good/v1/gcs/platform-data-goog/avatars/pratik_kale_JE4xYmT.jpeg',
      bio: 'Software Engineer @ Impulsive Web',
      color: 'red',
      linkedin: 'https://linkedin.com/in/sarahkim',
      twitter: 'https://twitter.com/sarahkim',
      email: 'ppvkale@gmail.com'
    },
    {
      name: 'Vatsal Jain',
      role: 'Organizer',
      image: 'https://res.cloudinary.com/startup-grind/image/upload/c_fill,w_250,h_250,g_center/c_fill,dpr_2.0,f_auto,g_center,q_auto:good/v1/gcs/platform-data-goog/avatars/vatsal_jain_9uuB5SU.jpg',
      bio: 'Software Engineer @ vConstruct',
      color: 'yellow',
      linkedin: 'https://linkedin.com/in/marcuschen',
      twitter: 'https://twitter.com/marcuschen',
      email: 'vatsaljain780@gmail.com'
    }
  ];

  const colorClasses = {
    blue: 'border-blue-500 hover:border-blue-600',
    red: 'border-red-500 hover:border-red-600',
    yellow: 'border-yellow-500 hover:border-yellow-600',
    green: 'border-green-500 hover:border-green-600'
  };

  const socialColors = {
    blue: 'hover:bg-blue-600',
    red: 'hover:bg-red-600',
    yellow: 'hover:bg-yellow-500',
    green: 'hover:bg-green-600'
  };

  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8 bg-white">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl sm:text-5xl mb-4">
            <span className="text-blue-600">Meet The </span>
            <span className="text-red-600">Organizing </span>
            <span className="text-green-600">Team</span>
          </h2>
          <p className="text-xl text-gray-600">
            The passionate people making BuildAndGrow happen
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {team.map((member, index) => (
            <div
              key={index}
              className={`p-6 rounded-2xl bg-white border-2 ${colorClasses[member.color as keyof typeof colorClasses]} shadow-lg hover:shadow-2xl transition-all hover:transform hover:scale-105`}
            >
              <div className="flex flex-col items-center text-center">
                <div className="w-32 h-32 rounded-full overflow-hidden mb-4 border-4 border-gray-200">
                  <ImageWithFallback
                    src={member.image}
                    alt={member.name}
                    className="w-full h-full object-cover"
                  />
                </div>
                <h3 className="text-xl text-gray-800 mb-1">{member.name}</h3>
                <p className={`text-sm mb-3 ${colorClasses[member.color as keyof typeof colorClasses].split(' ')[0].replace('border-', 'text-')}`}>
                  {member.role}
                </p>
                <p className="text-gray-600 text-sm mb-4">{member.bio}</p>
                
                <div className="flex gap-3">
                  {member.linkedin && (
                    <a href={member.linkedin} target="_blank" rel="noopener noreferrer" className={`w-8 h-8 rounded-full bg-gray-200 ${socialColors[member.color as keyof typeof socialColors]} flex items-center justify-center transition-all group`} aria-label="LinkedIn">
                      <Linkedin className="w-4 h-4 text-gray-600 group-hover:text-white" />
                    </a>
                  )}
                  {member.twitter && (
                    <a href={member.twitter} target="_blank" rel="noopener noreferrer" className={`w-8 h-8 rounded-full bg-gray-200 ${socialColors[member.color as keyof typeof socialColors]} flex items-center justify-center transition-all group`} aria-label="Twitter">
                      <Twitter className="w-4 h-4 text-gray-600 group-hover:text-white" />
                    </a>
                  )}
                  {member.email && (
                    <a href={`mailto:${member.email}`} className={`w-8 h-8 rounded-full bg-gray-200 ${socialColors[member.color as keyof typeof socialColors]} flex items-center justify-center transition-all group`} aria-label="Email">
                      <Mail className="w-4 h-4 text-gray-600 group-hover:text-white" />
                    </a>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Join the Team CTA */}
        <div className="mt-16 text-center">
          <div className="inline-block p-8 rounded-2xl bg-gradient-to-r from-blue-50 via-yellow-50 to-green-50 border-2 border-gray-300">
            <h3 className="text-2xl text-gray-800 mb-4">Want to Join Our Team?</h3>
            <p className="text-gray-600 mb-6 max-w-2xl">
              We're always looking for passionate volunteers to help organize future events
            </p>
            <button className="px-8 py-3 rounded-full bg-blue-600 hover:bg-blue-700 text-white shadow-lg transition-all">
               Connect With Us @connect@gdgcloudpune.in
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
