import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { categories, cities, providers } from "../utils/mockData";
import {
  FaWrench,
  FaBolt,
  FaSnowflake,
  FaHammer,
  FaPaintRoller,
  FaBroom,
  FaSearch,
  FaMapMarkerAlt,
  FaStar,
  FaCheckCircle,
  FaArrowRight,
} from "react-icons/fa";

const LandingPage = () => {
  const navigate = useNavigate();
  const [searchService, setSearchService] = useState("");
  const [searchCity, setSearchCity] = useState("");

  const handleSearch = () => {
    if (searchService || searchCity) {
      navigate(`/providers?service=${searchService}&city=${searchCity}`);
    }
  };

  const categoryIcons = {
    Plumbing: FaWrench,
    Electricity: FaBolt,
    "AC Repair": FaSnowflake,
    Carpentry: FaHammer,
    Painting: FaPaintRoller,
    Cleaning: FaBroom,
  };

  const categoryColors = {
    Plumbing: "bg-blue-100 text-blue-600",
    Electricity: "bg-yellow-100 text-yellow-600",
    "AC Repair": "bg-cyan-100 text-cyan-600",
    Carpentry: "bg-amber-100 text-amber-600",
    Painting: "bg-pink-100 text-pink-600",
    Cleaning: "bg-green-100 text-green-600",
  };

  const featuredProviders = providers.slice(0, 4);

  return (
    <div className="bg-gray-50 dark:bg-slate-900 min-h-screen transition-colors duration-200">
      {/* Hero Section */}
      <section className="relative bg-linear-to-br from-[#1E40AF] via-[#1E3A8A] to-[#3B82F6] dark:from-slate-800 dark:via-slate-900 dark:to-slate-950 text-white py-20 px-4 transition-colors duration-200">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h1 className="text-4xl md:text-6xl font-bold mb-6 leading-tight">
              Find Professional Local Services Instantly
            </h1>
            <p className="text-xl md:text-2xl text-blue-100 mb-8">
              Connect with trusted service providers in Egypt
            </p>
          </div>

          {/* Floating Search Bar */}
          <div className="max-w-4xl mx-auto bg-white dark:bg-slate-800 rounded-2xl shadow-2xl p-4 md:p-6 transition-colors duration-200">
            <div className="flex flex-col md:flex-row gap-4">
              {/* Service Type */}
              <div className="flex-1">
                <div className="relative">
                  <FaSearch className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400 dark:text-gray-500" />
                  <select
                    value={searchService}
                    onChange={(e) => setSearchService(e.target.value)}
                    className="w-full pl-12 pr-4 py-4 border border-gray-300 dark:border-slate-600 rounded-xl focus:ring-2 focus:ring-[#1E40AF] focus:border-transparent outline-none text-gray-700 dark:text-gray-200 bg-white dark:bg-slate-700 appearance-none cursor-pointer transition-colors duration-200"
                  >
                    <option value="">Select Service</option>
                    {categories.map((cat) => (
                      <option key={cat.id} value={cat.name}>
                        {cat.name}
                      </option>
                    ))}
                  </select>
                </div>
              </div>

              {/* City */}
              <div className="flex-1">
                <div className="relative">
                  <FaMapMarkerAlt className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400 dark:text-gray-500" />
                  <select
                    value={searchCity}
                    onChange={(e) => setSearchCity(e.target.value)}
                    className="w-full pl-12 pr-4 py-4 border border-gray-300 dark:border-slate-600 rounded-xl focus:ring-2 focus:ring-[#1E40AF] focus:border-transparent outline-none text-gray-700 dark:text-gray-200 bg-white dark:bg-slate-700 appearance-none cursor-pointer transition-colors duration-200"
                  >
                    <option value="">Select City</option>
                    {cities.map((city) => (
                      <option key={city.id} value={city.name}>
                        {city.name}
                      </option>
                    ))}
                  </select>
                </div>
              </div>

              {/* Search Button */}
              <button
                onClick={handleSearch}
                className="bg-[#F97316] hover:bg-[#EA580C] text-white font-semibold py-4 px-8 rounded-xl transition-colors flex items-center justify-center gap-2"
              >
                <span>Search</span>
                <FaArrowRight />
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="bg-white dark:bg-slate-800 py-16 px-4 transition-colors duration-200">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="text-4xl md:text-5xl font-bold text-[#1E40AF] dark:text-blue-400 mb-2 transition-colors duration-200">
                10K+
              </div>
              <div className="text-gray-600 dark:text-gray-400 text-lg transition-colors duration-200">Verified Providers</div>
            </div>
            <div className="text-center">
              <div className="text-4xl md:text-5xl font-bold text-[#F97316] mb-2">
                50K+
              </div>
              <div className="text-gray-600 dark:text-gray-400 text-lg transition-colors duration-200">Jobs Completed</div>
            </div>
            <div className="text-center">
              <div className="text-4xl md:text-5xl font-bold text-[#1E40AF] dark:text-blue-400 mb-2 transition-colors duration-200">
                4.8
              </div>
              <div className="text-gray-600 dark:text-gray-400 text-lg transition-colors duration-200">Average Rating</div>
            </div>
          </div>
        </div>
      </section>

      {/* Categories Grid */}
      <section className="bg-gray-50 dark:bg-slate-900 py-16 px-4 transition-colors duration-200">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4 transition-colors duration-200">
              Browse by Category
            </h2>
            <p className="text-gray-600 dark:text-gray-400 text-lg transition-colors duration-200">
              Find the right professional for your needs
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6">
            {categories.map((category) => {
              const Icon = categoryIcons[category.name];
              return (
                <Link
                  key={category.id}
                  to={`/providers?service=${category.name}`}
                  className="group"
                >
                  <div
                    className={`${categoryColors[category.name]} rounded-2xl p-6 text-center transition-all duration-300 hover:scale-105 hover:shadow-lg`}
                  >
                    <Icon className="text-4xl md:text-5xl mx-auto mb-4" />
                    <h3 className="font-semibold text-gray-800 group-hover:text-gray-900 mb-1">
                      {category.name}
                    </h3>
                    <span className="text-xs text-gray-600">
                      {category.jobCount} active jobs
                    </span>
                  </div>
                </Link>
              );
            })}
          </div>
        </div>
      </section>

      {/* Featured Providers */}
      <section className="bg-white dark:bg-slate-800 py-16 px-4 transition-colors duration-200">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4 transition-colors duration-200">
              Featured Providers
            </h2>
            <p className="text-gray-600 dark:text-gray-400 text-lg transition-colors duration-200">
              Top-rated professionals ready to help
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {featuredProviders.map((provider) => (
              <Link
                key={provider.id}
                to={`/providers/${provider.id}`}
                className="group"
              >
                <div className="bg-white dark:bg-slate-700 border border-gray-200 dark:border-slate-600 rounded-2xl overflow-hidden transition-all duration-300 hover:scale-105 hover:shadow-xl">
                  {/* Provider Image */}
                  <div className="relative h-48 overflow-hidden">
                    <img
                      src={provider.portfolio_images[0]}
                      alt={provider.name}
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                    />
                    {provider.verified && (
                      <div className="absolute top-3 right-3 bg-[#1E40AF] text-white px-3 py-1 rounded-full text-xs font-semibold flex items-center gap-1">
                        <FaCheckCircle className="text-xs" />
                        Verified
                      </div>
                    )}
                  </div>

                  {/* Provider Info */}
                  <div className="p-4">
                    <div className="flex items-center gap-3 mb-3">
                      <img
                        src={provider.avatar}
                        alt={provider.name}
                        className="w-12 h-12 rounded-full object-cover border-2 border-gray-200 dark:border-slate-500"
                      />
                      <div className="flex-1 min-w-0">
                        <h3 className="font-semibold text-gray-900 dark:text-white truncate transition-colors duration-200">
                          {provider.name}
                        </h3>
                        <p className="text-sm text-gray-500 dark:text-gray-400 transition-colors duration-200">{provider.category}</p>
                      </div>
                    </div>

                    <div className="flex items-center gap-2 mb-3">
                      <FaStar className="text-yellow-400" />
                      <span className="font-semibold text-gray-900 dark:text-white transition-colors duration-200">
                        {provider.rating}
                      </span>
                      <span className="text-gray-500 dark:text-gray-400 text-sm transition-colors duration-200">
                        ({provider.review_count} reviews)
                      </span>
                    </div>

                    <div className="flex items-center justify-between">
                      <div>
                        <p className="text-sm text-gray-500 dark:text-gray-400 transition-colors duration-200">Hourly Rate</p>
                        <p className="font-bold text-[#1E40AF] dark:text-blue-400 transition-colors duration-200">
                          EGP {provider.hourly_rate}
                        </p>
                      </div>
                      <div className="text-sm text-gray-500 dark:text-gray-400 transition-colors duration-200">
                        <FaMapMarkerAlt className="inline mr-1" />
                        {provider.city}
                      </div>
                    </div>
                  </div>
                </div>
              </Link>
            ))}
          </div>

          <div className="text-center mt-12">
            <Link
              to="/providers"
              className="inline-flex items-center gap-2 bg-[#1E40AF] hover:bg-[#1E3A8A] text-white font-semibold py-3 px-8 rounded-xl transition-colors"
            >
              View All Providers
              <FaArrowRight />
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default LandingPage;
