export function Sponsors() {
  const sponsors = {
    Sponsor: [
      {
        name: '',
        color: 'blue',
        logo: 'https://www.gstatic.com/devrel-devsite/prod/ve08add287a6b4bdf8961ab8a1be50bf551be3816cdd70b7cc934114ff3ad5f10/developers/images/lockup-new.svg'
      },
      {
        name: '',
        color: 'red',
        logo: 'https://www.data-axle.com/india/wp-content/uploads/sites/5/2025/10/data_axle_horizontal_black_blue_crop-1-1.svg' // replace with real logo
      }
    ],
    // Commenting Gold and Silver sponsors for now
    /*
    gold: [
      { name: 'CloudBase', color: 'yellow' },
      { name: 'DataStream', color: 'green' },
      { name: 'DevTools Inc', color: 'blue' }
    ],
    silver: [
      { name: 'StartupHub', color: 'red' },
      { name: 'CodeAcademy', color: 'yellow' },
      { name: 'AI Solutions', color: 'green' },
      { name: 'WebScale', color: 'blue' },
      { name: 'MobileFirst', color: 'red' }
    ]
    */
  };

  const colorMap = {
    blue: 'bg-blue-600',
    red: 'bg-red-600',
    yellow: 'bg-yellow-500',
    green: 'bg-green-600'
  };

  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gray-50">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl sm:text-5xl mb-4">
            <span className="text-blue-600">Our </span>
            <span className="text-red-600">Sponsors</span>
          </h2>
          <p className="text-xl text-gray-600">
            Powered by the best companies in tech
          </p>
        </div>

        {/* Platinum Sponsors with logos */}
        <div className="mb-12">
          <div className="flex flex-wrap justify-center gap-8">
            {sponsors.Sponsor.map((sponsor, index) => (
              <div
                key={index}
                className="w-64 h-32 rounded-2xl bg-white border-2 border-gray-300 shadow-lg hover:shadow-2xl transition-all hover:transform hover:scale-105 flex flex-col items-center justify-center p-4"
              >
                {sponsor.logo && (
                  <img
                    src={sponsor.logo}
                    alt={sponsor.name}
                    className="max-h-12 mb-2 object-contain"
                  />
                )}
                <span className="text-xl text-gray-800">{sponsor.name}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Gold Sponsors */}
        {/*
        <div className="mb-12">
          <h3 className="text-center text-xl text-gray-700 mb-6">Gold Partners</h3>
          <div className="flex flex-wrap justify-center gap-6">
            {sponsors.gold.map((sponsor, index) => (
              <div
                key={index}
                className="w-48 h-24 rounded-xl bg-white border-2 border-gray-300 shadow-lg hover:shadow-xl transition-all hover:transform hover:scale-105 flex items-center justify-center"
              >
                <div className="text-center">
                  <div className={`w-8 h-8 rounded-lg ${colorMap[sponsor.color as keyof typeof colorMap]} mx-auto mb-1`}></div>
                  <span className="text-gray-800">{sponsor.name}</span>
                </div>
              </div>
            ))}
          </div>
        </div>

        Silver Sponsors
        <div>
          <h3 className="text-center text-lg text-gray-700 mb-6">Silver Partners</h3>
          <div className="flex flex-wrap justify-center gap-4">
            {sponsors.silver.map((sponsor, index) => (
              <div
                key={index}
                className="w-36 h-20 rounded-lg bg-white border-2 border-gray-300 shadow-md hover:shadow-lg transition-all hover:transform hover:scale-105 flex items-center justify-center"
              >
                <div className="text-center">
                  <div className={`w-6 h-6 rounded ${colorMap[sponsor.color as keyof typeof colorMap]} mx-auto mb-1`}></div>
                  <span className="text-sm text-gray-800">{sponsor.name}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
        */}

        {/* Become a Sponsor CTA */}
        <div className="mt-16 text-center">
          <div className="inline-block p-8 rounded-2xl bg-gradient-to-r from-blue-50 via-red-50 to-yellow-50 border-2 border-gray-300">
            <h3 className="text-2xl text-gray-800 mb-4">Interested in Sponsoring?</h3>
            <p className="text-gray-600 mb-6">
              Partner with us to support innovation and connect with top talent
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
