import { useState } from 'react';
import { ChevronDown } from 'lucide-react';

export function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const faqs = [
    {
      question: 'Who can participate?',
      answer: 'Anyone! Whether you\'re a student, professional, or hobbyist - if you\'re passionate about technology and innovation, you\'re welcome to join. Teams can have 2-4 members.'
    },
    {
      question: 'How much does it cost?',
      answer: 'BuildAndGrow is completely free! We provide meals, snacks, swag, and workspace for all participants. Just bring your laptop and enthusiasm.'
    },
    {
      question: 'What should I bring?',
      answer: 'Bring your laptop, chargers, and any hardware you plan to use. We recommend bringing a sleeping bag if you plan to stay overnight, toiletries, and a change of clothes.'
    },
    {
      question: 'Do I need a team?',
      answer: 'Teams must be formed before the event. Each team should have 2 to 4 members. Solo participation is not allowed.'
    },
    {
      question: 'What can I build?',
      answer: 'Anything! We have many problem statements. But you\'re free to build whatever inspires you. Projects can be apps, websites, hardware, or anything tech-related.'
    },
    {
      question: 'Will there be mentors?',
      answer: 'Yes! We have experienced mentors from top tech companies who will be available throughout the event to help with technical challenges, ideation, and presentations.'
    },
    {
      question: 'What about food and sleep?',
      answer: 'We provide all meals and snacks throughout the 24 hours. The venue is open 24/7, and we have designated quiet areas if you need to rest.'
    },
    {
      question: 'How are projects judged?',
      answer: 'Projects are judged on innovation, technical implementation, design, and potential impact. Each team will give a 3-minute demo to our panel of judges from leading tech companies and VC firms.'
    }
  ];

  const accentColors = ['blue', 'red', 'yellow', 'green'];

  return (
    <section id="faq"className="py-20 px-4 sm:px-6 lg:px-8 bg-white">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl sm:text-5xl mb-4">
            <span className="text-blue-600">Frequently Asked </span>
            <span className="text-red-600">Questions</span>
          </h2>
          <p className="text-xl text-gray-600">
            Everything you need to know about BuildAndGrow
          </p>
        </div>

        <div className="space-y-4">
          {faqs.map((faq, index) => {
            const color = accentColors[index % accentColors.length];
            const colorClasses = {
              blue: 'border-blue-500 bg-blue-50 text-blue-600',
              red: 'border-red-500 bg-red-50 text-red-600',
              yellow: 'border-yellow-500 bg-yellow-50 text-yellow-600',
              green: 'border-green-500 bg-green-50 text-green-600'
            };
            
            return (
              <div
                key={index}
                className={`rounded-xl bg-white border-2 ${
                  openIndex === index 
                    ? colorClasses[color as keyof typeof colorClasses].split(' ')[0]
                    : 'border-gray-200'
                } overflow-hidden transition-all shadow-md`}
              >
                <button
                  onClick={() => setOpenIndex(openIndex === index ? null : index)}
                  className="w-full px-6 py-4 flex items-center justify-between text-left hover:bg-gray-50 transition-all"
                >
                  <span className="text-lg text-gray-800">{faq.question}</span>
                  <ChevronDown
                    className={`w-5 h-5 ${
                      openIndex === index 
                        ? colorClasses[color as keyof typeof colorClasses].split(' ')[2]
                        : 'text-gray-400'
                    } transition-transform ${
                      openIndex === index ? 'transform rotate-180' : ''
                    }`}
                  />
                </button>
                {openIndex === index && (
                  <div className="px-6 pb-4 text-gray-700">
                    {faq.answer}
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}