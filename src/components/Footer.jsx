import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="bg-gray-900 dark:bg-slate-950 text-white transition-colors duration-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Brand Section */}
          <div className="col-span-1 md:col-span-1">
            <h3 className="text-2xl font-bold text-[#1E40AF] dark:text-blue-400 mb-4 transition-colors duration-200">Khidma</h3>
            <p className="text-gray-400 dark:text-gray-500 text-sm transition-colors duration-200">
              Your trusted service marketplace connecting customers with professional service providers across Egypt.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2">
              <li>
                <Link to="/" className="text-gray-400 dark:text-gray-500 hover:text-white dark:hover:text-gray-300 transition-colors text-sm">
                  Home
                </Link>
              </li>
              <li>
                <Link to="/categories" className="text-gray-400 dark:text-gray-500 hover:text-white dark:hover:text-gray-300 transition-colors text-sm">
                  Categories
                </Link>
              </li>
              <li>
                <Link to="/providers" className="text-gray-400 dark:text-gray-500 hover:text-white dark:hover:text-gray-300 transition-colors text-sm">
                  Providers
                </Link>
              </li>
              <li>
                <Link to="/job-posts" className="text-gray-400 dark:text-gray-500 hover:text-white dark:hover:text-gray-300 transition-colors text-sm">
                  Job Posts
                </Link>
              </li>
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Services</h4>
            <ul className="space-y-2">
              <li>
                <Link to="/categories" className="text-gray-400 dark:text-gray-500 hover:text-white dark:hover:text-gray-300 transition-colors text-sm">
                  Plumbing
                </Link>
              </li>
              <li>
                <Link to="/categories" className="text-gray-400 dark:text-gray-500 hover:text-white dark:hover:text-gray-300 transition-colors text-sm">
                  Electricity
                </Link>
              </li>
              <li>
                <Link to="/categories" className="text-gray-400 dark:text-gray-500 hover:text-white dark:hover:text-gray-300 transition-colors text-sm">
                  AC Repair
                </Link>
              </li>
              <li>
                <Link to="/categories" className="text-gray-400 dark:text-gray-500 hover:text-white dark:hover:text-gray-300 transition-colors text-sm">
                  Carpentry
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Contact</h4>
            <ul className="space-y-2 text-sm text-gray-400 dark:text-gray-500 transition-colors duration-200">
              <li>Email: support@khidma.com</li>
              <li>Phone: +20 123 456 7890</li>
              <li>Location: Cairo, Egypt</li>
            </ul>
          </div>
        </div>

        {/* Copyright */}
        <div className="border-t border-gray-800 dark:border-slate-800 mt-8 pt-8 text-center text-gray-400 dark:text-gray-500 text-sm transition-colors duration-200">
          <p>&copy; {new Date().getFullYear()} Khidma. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
