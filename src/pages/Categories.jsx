import { Link } from "react-router-dom";
import { categories } from "../utils/mockData";
import {
  FaWrench,
  FaBolt,
  FaSnowflake,
  FaHammer,
  FaPaintRoller,
  FaBroom,
} from "react-icons/fa";

const Categories = () => {
  const categoryIcons = {
    Plumbing: FaWrench,
    Electricity: FaBolt,
    "AC Repair": FaSnowflake,
    Carpentry: FaHammer,
    Painting: FaPaintRoller,
    Cleaning: FaBroom,
  };

  const categoryColors = {
    Plumbing: "bg-blue-100 text-blue-600 hover:bg-blue-200",
    Electricity: "bg-yellow-100 text-yellow-600 hover:bg-yellow-200",
    "AC Repair": "bg-cyan-100 text-cyan-600 hover:bg-cyan-200",
    Carpentry: "bg-amber-100 text-amber-600 hover:bg-amber-200",
    Painting: "bg-pink-100 text-pink-600 hover:bg-pink-200",
    Cleaning: "bg-green-100 text-green-600 hover:bg-green-200",
  };

  return (
    <div className="min-h-screen bg-gray-50 py-12 px-4">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">
            Browse Categories
          </h1>
          <p className="text-lg text-gray-600">
            Find the right service for your needs
          </p>
        </div>

        {/* Categories Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {categories.map((category) => {
            const Icon = categoryIcons[category.name];
            return (
              <Link
                key={category.id}
                to={`/providers?service=${category.name}`}
                className="group"
              >
                <div
                  className={`${categoryColors[category.name]} rounded-2xl p-8 text-center transition-all duration-300 hover:scale-105 hover:shadow-xl cursor-pointer`}
                >
                  <Icon className="text-5xl md:text-6xl mx-auto mb-4" />
                  <h3 className="text-xl md:text-2xl font-bold text-gray-800 mb-2">
                    {category.name}
                  </h3>
                  <p className="text-gray-600 text-sm mb-3">
                    {category.description}
                  </p>
                  <span className="inline-block bg-white/50 px-3 py-1 rounded-full text-sm font-medium text-gray-700">
                    {category.jobCount} active jobs
                  </span>
                </div>
              </Link>
            );
          })}
        </div>

        {/* CTA Section */}
        <div className="mt-16 text-center">
          <div className="bg-white rounded-2xl shadow-md p-8 max-w-2xl mx-auto">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">
              Can't find what you're looking for?
            </h2>
            <p className="text-gray-600 mb-6">
              Browse all providers or post a job request to get quotes from
              multiple professionals.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                to="/providers"
                className="bg-[#1E40AF] hover:bg-[#1E3A8A] text-white font-semibold py-3 px-6 rounded-xl transition-colors"
              >
                Browse All Providers
              </Link>
              <Link
                to="/job-posts"
                className="bg-[#F97316] hover:bg-[#EA580C] text-white font-semibold py-3 px-6 rounded-xl transition-colors"
              >
                Post a Job
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Categories;
