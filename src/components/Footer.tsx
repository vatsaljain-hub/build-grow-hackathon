import { Twitter, Github, Linkedin, Mail } from 'lucide-react';

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="py-12 px-4 sm:px-6 lg:px-8 bg-white border-t-2 border-gray-200">
      <div className="max-w-7xl mx-auto">
        <div className="grid md:grid-cols-4 gap-8 mb-8">
          <div>
            <h3 className="text-xl mb-4">
              <span className="text-blue-600">Build</span>
              <span className="text-red-600">And</span>
              <span className="text-yellow-500">Grow</span>
            </h3>
            <p className="text-gray-600">
              The premier hackathon for innovators and creators building the next generation of technology.
            </p>
          </div>

          <div>
            <h4 className="text-gray-800 mb-4">Quick Links</h4>
            <ul className="space-y-2">
              <li>
                <a href="#about" className="text-gray-600 hover:text-blue-600 transition-colors">
                  About
                </a>
              </li>
              <li>
                <a href="#registration" className="text-gray-600 hover:text-red-600 transition-colors">
                  Register
                </a>
              </li>
              <li>
                <a href="#sponsors" className="text-gray-600 hover:text-yellow-600 transition-colors">
                  Sponsors
                </a>
              </li>
              <li>
                <a href="#organizers" className="text-gray-600 hover:text-green-600 transition-colors">
                  Contact
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="text-gray-800 mb-4">Resources</h4>
            <ul className="space-y-2">
              <li>
                <a href="https://www.google.com/events/policy/anti-harassmentpolicy.html" className="text-gray-600 hover:text-blue-600 transition-colors">
                  Community Guidelines
                </a>
              </li>
              <li>
                <a href="https://policies.google.com/terms" className="text-gray-600 hover:text-red-600 transition-colors">
                  Privacy Policy
                </a>
              </li>
              {/* <li>
                <a href="#" className="text-gray-600 hover:text-yellow-600 transition-colors">
                  Past Events
                </a>
              </li> */}
              <li>
                <a href="#faq" className="text-gray-600 hover:text-green-600 transition-colors">
                  FAQs
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="text-gray-800 mb-4">Connect</h4>
            <div className="flex gap-4">
              <a
                href="https://x.com/gdgcloudpune"
                className="w-10 h-10 rounded-full bg-blue-600 hover:bg-blue-700 flex items-center justify-center transition-all"
                aria-label="Twitter"
              >
                <Twitter className="w-5 h-5 text-white" />
              </a>
              <a
                href="https://github.com/GDG-Cloud-Pune"
                className="w-10 h-10 rounded-full bg-red-600 hover:bg-red-700 flex items-center justify-center transition-all"
                aria-label="GitHub"
              >
                <Github className="w-5 h-5 text-white" />
              </a>
              <a
                href="https://in.linkedin.com/company/gdg-cloud-pune"
                className="w-10 h-10 rounded-full bg-yellow-500 hover:bg-yellow-600 flex items-center justify-center transition-all"
                aria-label="LinkedIn"
              >
                <Linkedin className="w-5 h-5 text-white" />
              </a>
              <a
                href="mailto:connect@gdgcloudpune.in"
                className="w-10 h-10 rounded-full bg-green-600 hover:bg-green-700 flex items-center justify-center transition-all"
                aria-label="Email"
              >
                <Mail className="w-5 h-5 text-white" />
              </a>
            </div>
            <p className="text-gray-600 mt-4">
              <a href="mailto:connect@gdgcloudpune.in" className="hover:text-blue-600 transition-colors">
                connect@gdgcloudpune.in
              </a>
            </p>
          </div>
        </div>

        <div className="pt-8 border-t-2 border-gray-200 text-center text-gray-600">
          <p>&copy; {currentYear} BuildAndGrow. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}