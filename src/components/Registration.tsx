import { useState } from 'react';
import { Send } from 'lucide-react';

export function Registration() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    university: '',
    experience: '',
    interests: '',
    team: ''
  });

  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
    // In a real app, this would send data to a backend
    setTimeout(() => {
      setSubmitted(false);
      setFormData({
        name: '',
        email: '',
        university: '',
        experience: '',
        interests: '',
        team: ''
      });
    }, 3000);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  // return (
  //   <section id="registration" className="py-20 px-4 sm:px-6 lg:px-8 bg-gray-50">
  //     <div className="max-w-3xl mx-auto">
  //       <div className="text-center mb-16">
  //         <h2 className="text-4xl sm:text-5xl mb-4">
  //           <span className="text-green-600">Register </span>
  //           <span className="text-blue-600">Now</span>
  //         </h2>
  //         <p className="text-xl text-gray-600">
  //           Secure your spot at BuildAndGrow 2025 
  //           Coming Soon!
  //         </p>
  //       </div>

  //       {/* {submitted ? (
  //         <div className="p-8 rounded-2xl bg-green-50 border-2 border-green-500 text-center shadow-lg">
  //           <div className="w-16 h-16 rounded-full bg-green-500 flex items-center justify-center mx-auto mb-4">
  //             <Send className="w-8 h-8 text-white" />
  //           </div>
  //           <h3 className="text-2xl text-gray-800 mb-2">Registration Submitted!</h3>
  //           <p className="text-gray-700">
  //             We'll send you a confirmation email shortly with more details.
  //           </p>
  //         </div>
  //       ) : (
  //         <form onSubmit={handleSubmit} className="p-8 rounded-2xl bg-white border-2 border-gray-200 shadow-lg space-y-6">
  //           <div>
  //             <label htmlFor="name" className="block text-gray-800 mb-2">
  //               Full Name *
  //             </label>
  //             <input
  //               type="text"
  //               id="name"
  //               name="name"
  //               required
  //               value={formData.name}
  //               onChange={handleChange}
  //               className="w-full px-4 py-3 rounded-lg bg-white border-2 border-gray-300 text-gray-800 placeholder-gray-400 focus:outline-none focus:border-blue-500 transition-all"
  //               placeholder="John Doe"
  //             />
  //           </div>

  //           <div>
  //             <label htmlFor="email" className="block text-gray-800 mb-2">
  //               Email Address *
  //             </label>
  //             <input
  //               type="email"
  //               id="email"
  //               name="email"
  //               required
  //               value={formData.email}
  //               onChange={handleChange}
  //               className="w-full px-4 py-3 rounded-lg bg-white border-2 border-gray-300 text-gray-800 placeholder-gray-400 focus:outline-none focus:border-red-500 transition-all"
  //               placeholder="john@example.com"
  //             />
  //           </div>

  //           <div>
  //             <label htmlFor="university" className="block text-gray-800 mb-2">
  //               University / Company
  //             </label>
  //             <input
  //               type="text"
  //               id="university"
  //               name="university"
  //               value={formData.university}
  //               onChange={handleChange}
  //               className="w-full px-4 py-3 rounded-lg bg-white border-2 border-gray-300 text-gray-800 placeholder-gray-400 focus:outline-none focus:border-yellow-500 transition-all"
  //               placeholder="Stanford University"
  //             />
  //           </div>

  //           <div>
  //             <label htmlFor="experience" className="block text-gray-800 mb-2">
  //               Experience Level *
  //             </label>
  //             <select
  //               id="experience"
  //               name="experience"
  //               required
  //               value={formData.experience}
  //               onChange={handleChange}
  //               className="w-full px-4 py-3 rounded-lg bg-white border-2 border-gray-300 text-gray-800 focus:outline-none focus:border-green-500 transition-all"
  //             >
  //               <option value="">Select your level</option>
  //               <option value="beginner">Beginner</option>
  //               <option value="intermediate">Intermediate</option>
  //               <option value="advanced">Advanced</option>
  //               <option value="expert">Expert</option>
  //             </select>
  //           </div>

  //           <div>
  //             <label htmlFor="interests" className="block text-gray-800 mb-2">
  //               Areas of Interest
  //             </label>
  //             <textarea
  //               id="interests"
  //               name="interests"
  //               rows={3}
  //               value={formData.interests}
  //               onChange={handleChange}
  //               className="w-full px-4 py-3 rounded-lg bg-white border-2 border-gray-300 text-gray-800 placeholder-gray-400 focus:outline-none focus:border-blue-500 transition-all resize-none"
  //               placeholder="AI/ML, Web Development, Mobile Apps, etc."
  //             />
  //           </div>

  //           <div>
  //             <label htmlFor="team" className="block text-gray-800 mb-2">
  //               Team Name (if you have one)
  //             </label>
  //             <input
  //               type="text"
  //               id="team"
  //               name="team"
  //               value={formData.team}
  //               onChange={handleChange}
  //               className="w-full px-4 py-3 rounded-lg bg-white border-2 border-gray-300 text-gray-800 placeholder-gray-400 focus:outline-none focus:border-red-500 transition-all"
  //               placeholder="Leave blank to find a team at the event"
  //             />
  //           </div>

  //           <button
  //             type="submit"
  //             className="w-full px-8 py-4 rounded-full bg-blue-600 hover:bg-blue-700 transition-all text-white shadow-lg hover:shadow-xl flex items-center justify-center gap-2"
  //           >
  //             <Send className="w-5 h-5" />
  //             Submit Registration
  //           </button>

  //           <p className="text-center text-gray-600 text-sm">
  //             By registering, you agree to our Code of Conduct and Privacy Policy
  //           </p>
  //         </form>
  //       )} */}
  //     </div>
  //   </section>
  // );
}