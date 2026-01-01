import { useState } from 'react';
import { Lightbulb, Send, Building2, CheckCircle2 } from 'lucide-react';

export function ProblemStatements() {
  const [formData, setFormData] = useState({
    company: '',
    email: '',
    contact: '',
    problemTitle: '',
    description: '',
    category: '',
    resources: ''
  });

  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
    // In a real app, this would send data to a backend
    setTimeout(() => {
      setSubmitted(false);
      setFormData({
        company: '',
        email: '',
        contact: '',
        problemTitle: '',
        description: '',
        category: '',
        resources: ''
      });
    }, 3000);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const existingProblems = [
    {
      company: 'HealthTech Solutions',
     // title: 'AI-Powered Medical Diagnosis Assistant',
      category: 'AI & Healthcare',
      color: 'blue',
      //prize: '$2,000'
    },
    {
      company: 'Agritech',
     // title: 'Carbon Footprint Tracking App',
      category: 'Sustainability',
      color: 'green',
     // prize: '$1,500'
    },
    // {
    //   company: 'FinanceFlow',
    //   title: 'Smart Budget Management for Gen-Z',
    //   category: 'FinTech',
    //   color: 'yellow',
    //   prize: '$1,500'
    // },
    // {
    //   company: 'EduConnect',
    //   title: 'Personalized Learning Platform',
    //   category: 'Education',
    //   color: 'red',
    //   prize: '$1,000'
    // }
  ];

  const colorClasses = {
    blue: 'border-blue-500 bg-blue-50 text-blue-700',
    red: 'border-red-500 bg-red-50 text-red-700',
    yellow: 'border-yellow-500 bg-yellow-50 text-yellow-700',
    green: 'border-green-500 bg-green-50 text-green-700'
  };

  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-green-50 via-white to-blue-50">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <div className="flex items-center justify-center gap-3 mb-4">
            <Lightbulb className="w-12 h-12 text-yellow-500" />
            <h2 className="text-4xl sm:text-5xl">
              <span className="text-yellow-600">Problem </span>
              <span className="text-green-600">Statements</span>
            </h2>
          </div>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Below are real-world challenges for participants to solve
          </p>
        </div>

        {/* Existing Problem Statements */}
        <div className="mb-16">
          <h3 className="text-2xl text-gray-800 mb-8 text-center">
            <span className="text-blue-600">Current </span>
            <span className="text-red-600">Challenges</span>
          </h3>
          <div className="grid md:grid-cols-2 gap-6">
            {existingProblems.map((problem, index) => (
              <div
                key={index}
                className={`p-6 rounded-2xl bg-white border-2 ${colorClasses[problem.color as keyof typeof colorClasses].split(' ')[0]} shadow-lg hover:shadow-2xl transition-all hover:transform hover:scale-105`}
              >
                <div className="flex items-start gap-4 mb-4">
                  <div className={`w-12 h-12 rounded-lg ${colorClasses[problem.color as keyof typeof colorClasses].split(' ')[1]} flex items-center justify-center border-2 ${colorClasses[problem.color as keyof typeof colorClasses].split(' ')[0]}`}>
                    <Building2 className={`w-6 h-6 ${colorClasses[problem.color as keyof typeof colorClasses].split(' ')[2]}`} />
                  </div>
                  <div className="flex-1">
                    <p className="text-sm text-gray-600 mb-1">{problem.company}</p>
                    <h4 className="text-lg text-gray-800 mb-2">{problem.title}</h4>
                    <div className="flex items-center justify-between">
                      <span className={`px-3 py-1 rounded-full text-sm ${colorClasses[problem.color as keyof typeof colorClasses].split(' ')[1]} ${colorClasses[problem.color as keyof typeof colorClasses].split(' ')[2]}`}>
                        {problem.category}
                      </span>
                      {/* <span className="text-green-600">Prize: {problem.prize}</span> */}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Submit Problem Statement Form */}
        <div className="max-w-3xl mx-auto">
          <div className="text-center mb-8">
            <h3 className="text-3xl mb-3">
              <span className="text-blue-600">Submit Your </span>
              <span className="text-red-600">Challenge</span>
            </h3>
            <p className="text-gray-600">
              Have a problem that needs solving? Submit it for our hackers to tackle!
            </p>
          </div>


          <div className="p-8 rounded-2xl bg-green-50 border-2 border-green-500 text-center shadow-lg">
            <div className="w-16 h-16 rounded-full bg-green-500 flex items-center justify-center mx-auto mb-4">
              <CheckCircle2 className="w-8 h-8 text-white" />
            </div>
            <h3 className="text-2xl text-gray-800 mb-2">
              Mail your problem statement to{' '}
              <a
                href="mailto:connect@gdgcloudpune.in"
                className="text-blue-600 hover:text-blue-700 underline"
              >
                connect@gdgcloudpune.in
              </a>
              !
            </h3>

            <p className="text-gray-700">
              We'll review your submission and get back to you within 48 hours.
            </p>
          </div>
        </div>

        {/* Benefits Section */}
        <div className="mt-16 grid md:grid-cols-3 gap-8">
          <div className="p-6 rounded-xl bg-blue-50 border-2 border-blue-500 text-center">
            <h4 className="text-lg text-blue-700 mb-2">Access to Talent</h4>
            <p className="text-gray-700 text-sm">
              Get innovative solutions from 500+ skilled developers and designers
            </p>
          </div>
          <div className="p-6 rounded-xl bg-red-50 border-2 border-red-500 text-center">
            <h4 className="text-lg text-red-700 mb-2">Brand Exposure</h4>
            <p className="text-gray-700 text-sm">
              Showcase your company to the brightest minds in tech
            </p>
          </div>
          <div className="p-6 rounded-xl bg-green-50 border-2 border-green-500 text-center">
            <h4 className="text-lg text-green-700 mb-2">Recruitment</h4>
            <p className="text-gray-700 text-sm">
              Identify and recruit top performers who solve your challenges
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
