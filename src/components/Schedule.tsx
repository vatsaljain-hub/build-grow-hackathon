export function Schedule() {
  // const schedule = [
  //   // {
  //   //   day: 'Day 1 - Friday, March 15',
  //   //   color: 'blue',
  //   //   events: [
  //   //     { time: '5:00 PM', title: 'Registration & Check-in', description: 'Get your badge and swag' },
  //   //     { time: '6:00 PM', title: 'Opening Ceremony', description: 'Keynote and challenge reveals' },
  //   //     { time: '7:00 PM', title: 'Team Formation', description: 'Find your team or join one' },
  //   //     { time: '8:00 PM', title: 'Hacking Begins!', description: 'Start building your project' },
  //   //     { time: '10:00 PM', title: 'Midnight Snacks', description: 'Pizza and refreshments' }
  //   //   ]
  //   // },
  //   // {
  //   //   day: 'Day 2 - Saturday, March 16',
  //   //   color: 'red',
  //   //   events: [
  //   //     { time: '8:00 AM', title: 'Breakfast', description: 'Fuel up for the day' },
  //   //     { time: '10:00 AM', title: 'Workshop: AI/ML Basics', description: 'Learn from the experts' },
  //   //     { time: '12:00 PM', title: 'Lunch', description: 'Network with other teams' },
  //   //     { time: '2:00 PM', title: 'Mentor Sessions', description: 'Get feedback on your project' },
  //   //     { time: '6:00 PM', title: 'Dinner', description: 'Sponsored by our partners' },
  //   //     { time: '8:00 PM', title: 'Mini Games & Activities', description: 'Take a break and have fun' }
  //   //   ]
  //   // },
  //   // {
  //   //   day: 'Day 3 - Sunday, March 17',
  //   //   color: 'green',
  //   //   events: [
  //   //     { time: '8:00 AM', title: 'Breakfast', description: 'Last stretch!' },
  //   //     { time: '12:00 PM', title: 'Hacking Ends', description: 'Submit your projects' },
  //   //     { time: '1:00 PM', title: 'Lunch Break', description: 'Prepare for demos' },
  //   //     { time: '2:00 PM', title: 'Project Demos', description: 'Showcase your work' },
  //   //     { time: '4:00 PM', title: 'Judging', description: 'Judges deliberate' },
  //   //     { time: '5:00 PM', title: 'Closing Ceremony', description: 'Winners announced!' }
  //   //   ]
  //   // }
  // ];

  const colorClasses = {
    blue: 'bg-blue-600 text-blue-600 border-blue-200 bg-blue-50',
    red: 'bg-red-600 text-red-600 border-red-200 bg-red-50',
    green: 'bg-green-600 text-green-600 border-green-200 bg-green-50'
  };

  // return (
  //   <section className="py-20 px-4 sm:px-6 lg:px-8 bg-white">
  //     <div className="max-w-6xl mx-auto">
  //       <div className="text-center mb-16">
  //         <h2 className="text-4xl sm:text-5xl mb-4">
  //           <span className="text-blue-600">Event </span>
  //           <span className="text-red-600">Schedule</span>
  //         </h2>
  //         <p className="text-xl text-gray-600">
  //           24 hours packed with coding, learning, and fun
  //         </p>
  //       </div>

  //       {<div className="space-y-8">
  //         {/* /*{ {schedule.map((day, dayIndex) => (
  //           <div key={dayIndex} className={`rounded-2xl bg-white border-2 ${colorClasses[day.color as keyof typeof colorClasses].split(' ')[2]} p-6 sm:p-8 shadow-lg`}>
  //             <div className="flex items-center gap-3 mb-6">
  //               <div className={`w-3 h-3 rounded-full ${colorClasses[day.color as keyof typeof colorClasses].split(' ')[0]}`}></div>
  //               <h3 className={`text-2xl ${colorClasses[day.color as keyof typeof colorClasses].split(' ')[1]}`}>{day.day}</h3>
  //             </div>
  //             <div className="space-y-4">
  //               {day.events.map((event, eventIndex) => (
  //                 <div
  //                   key={eventIndex}
  //                   className="flex gap-4 sm:gap-6 p-4 rounded-lg hover:bg-gray-50 transition-all"
  //                 >
  //                   <div className={`flex-shrink-0 w-24 ${colorClasses[day.color as keyof typeof colorClasses].split(' ')[1]}`}>{event.time}</div>
  //                   <div className="flex-1">
  //                     <div className="text-gray-800 mb-1">{event.title}</div>
  //                     <div className="text-gray-600">{event.description}</div>
  //                   </div>
  //                 </div>
  //               ))}
  //             </div>
  //           </div>
  //         ))} } */}
  //          Coming Soon!
  //       </div> 
  //     }
  //     </div>
       
  //   </section>
  // );
}