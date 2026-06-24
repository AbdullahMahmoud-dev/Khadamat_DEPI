import { useState, useEffect } from "react";
import { Link, useSearchParams } from "react-router-dom";
import { providers, categories, cities } from "../utils/mockData";
import {
  FaStar,
  FaMapMarkerAlt,
  FaCheckCircle,
  FaFilter,
  FaSlidersH,
} from "react-icons/fa";

const SearchPage = () => {
  const [searchParams] = useSearchParams();
  const [filteredProviders, setFilteredProviders] = useState(providers);
  const [filters, setFilters] = useState({
    service: searchParams.get("service") || "",
    city: searchParams.get("city") || "",
    sortBy: "rating",
    minRating: 0,
    maxPrice: 500,
  });
  const [showFilters, setShowFilters] = useState(false);

  useEffect(() => {
    let result = [...providers];

    // Filter by service
    if (filters.service) {
      result = result.filter((p) => p.category === filters.service);
    }

    // Filter by city
    if (filters.city) {
      result = result.filter((p) => p.city === filters.city);
    }

    // Filter by rating
    if (filters.minRating > 0) {
      result = result.filter((p) => p.rating >= filters.minRating);
    }

    // Filter by price
    result = result.filter((p) => p.hourly_rate <= filters.maxPrice);

    // Sort
    switch (filters.sortBy) {
      case "price-low":
        result.sort((a, b) => a.hourly_rate - b.hourly_rate);
        break;
      case "price-high":
        result.sort((a, b) => b.hourly_rate - a.hourly_rate);
        break;
      case "rating":
        result.sort((a, b) => b.rating - a.rating);
        break;
      case "reviews":
        result.sort((a, b) => b.review_count - a.review_count);
        break;
      default:
        break;
    }

    setFilteredProviders(result);
  }, [filters]);

  const handleFilterChange = (key, value) => {
    setFilters({ ...filters, [key]: value });
  };

  const clearFilters = () => {
    setFilters({
      service: "",
      city: "",
      sortBy: "rating",
      minRating: 0,
      maxPrice: 500,
    });
  };

  return (
    <div className="min-h-screen bg-gray-50 py-8 px-4">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="mb-8">
          <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-2">
            Find Service Providers
          </h1>
          <p className="text-gray-600">
            {filteredProviders.length} provider
            {filteredProviders.length !== 1 ? "s" : ""} found
          </p>
        </div>

        <div className="flex flex-col lg:flex-row gap-8">
          {/* Mobile Filter Toggle */}
          <button
            onClick={() => setShowFilters(!showFilters)}
            className="lg:hidden flex items-center justify-center gap-2 bg-[#1E40AF] text-white py-3 px-6 rounded-xl mb-4"
          >
            <FaFilter />
            {showFilters ? "Hide Filters" : "Show Filters"}
          </button>

          {/* Left Sidebar - Filters */}
          <aside
            className={`lg:w-72 shrink-0 ${
              showFilters ? "block" : "hidden lg:block"
            }`}
          >
            <div className="bg-white rounded-2xl shadow-md p-6 sticky top-24">
              <div className="flex items-center justify-between mb-6">
                <h2 className="text-xl font-bold text-gray-900 flex items-center gap-2">
                  <FaSlidersH />
                  Filters
                </h2>
                <button
                  onClick={clearFilters}
                  className="text-sm text-[#1E40AF] hover:text-[#1E3A8A] font-medium"
                >
                  Clear All
                </button>
              </div>

              {/* Service Filter */}
              <div className="mb-6">
                <label className="block text-sm font-semibold text-gray-700 mb-2">
                  Service Type
                </label>
                <select
                  value={filters.service}
                  onChange={(e) => handleFilterChange("service", e.target.value)}
                  className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-[#1E40AF] focus:border-transparent outline-none bg-white"
                >
                  <option value="">All Services</option>
                  {categories.map((cat) => (
                    <option key={cat.id} value={cat.name}>
                      {cat.name}
                    </option>
                  ))}
                </select>
              </div>

              {/* City Filter */}
              <div className="mb-6">
                <label className="block text-sm font-semibold text-gray-700 mb-2">
                  City
                </label>
                <select
                  value={filters.city}
                  onChange={(e) => handleFilterChange("city", e.target.value)}
                  className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-[#1E40AF] focus:border-transparent outline-none bg-white"
                >
                  <option value="">All Cities</option>
                  {cities.map((city) => (
                    <option key={city.id} value={city.name}>
                      {city.name}
                    </option>
                  ))}
                </select>
              </div>

              {/* Sort By */}
              <div className="mb-6">
                <label className="block text-sm font-semibold text-gray-700 mb-2">
                  Sort By
                </label>
                <select
                  value={filters.sortBy}
                  onChange={(e) => handleFilterChange("sortBy", e.target.value)}
                  className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-[#1E40AF] focus:border-transparent outline-none bg-white"
                >
                  <option value="rating">Highest Rated</option>
                  <option value="reviews">Most Reviews</option>
                  <option value="price-low">Price: Low to High</option>
                  <option value="price-high">Price: High to Low</option>
                </select>
              </div>

              {/* Minimum Rating */}
              <div className="mb-6">
                <label className="block text-sm font-semibold text-gray-700 mb-2">
                  Minimum Rating
                </label>
                <div className="flex gap-2">
                  {[4, 4.5, 4.7].map((rating) => (
                    <button
                      key={rating}
                      onClick={() => handleFilterChange("minRating", rating)}
                      className={`flex-1 py-2 px-3 rounded-lg border-2 transition-all ${
                        filters.minRating === rating
                          ? "border-[#1E40AF] bg-[#1E40AF] text-white"
                          : "border-gray-300 text-gray-700 hover:border-gray-400"
                      }`}
                    >
                      {rating}+
                    </button>
                  ))}
                </div>
              </div>

              {/* Max Price */}
              <div className="mb-6">
                <label className="block text-sm font-semibold text-gray-700 mb-2">
                  Max Hourly Rate: EGP {filters.maxPrice}
                </label>
                <input
                  type="range"
                  min="50"
                  max="500"
                  step="10"
                  value={filters.maxPrice}
                  onChange={(e) => handleFilterChange("maxPrice", Number(e.target.value))}
                  className="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer accent-[#1E40AF]"
                />
                <div className="flex justify-between text-xs text-gray-500 mt-1">
                  <span>EGP 50</span>
                  <span>EGP 500+</span>
                </div>
              </div>
            </div>
          </aside>

          {/* Right Grid - Providers */}
          <main className="flex-1">
            {filteredProviders.length === 0 ? (
              <div className="bg-white rounded-2xl shadow-md p-12 text-center">
                <div className="text-gray-400 text-6xl mb-4">🔍</div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">
                  No providers found
                </h3>
                <p className="text-gray-600 mb-4">
                  Try adjusting your filters to see more results
                </p>
                <button
                  onClick={clearFilters}
                  className="bg-[#1E40AF] hover:bg-[#1E3A8A] text-white font-medium py-2 px-6 rounded-lg transition-colors"
                >
                  Clear Filters
                </button>
              </div>
            ) : (
              <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6">
                {filteredProviders.map((provider) => (
                  <Link
                    key={provider.id}
                    to={`/providers/${provider.id}`}
                    className="group"
                  >
                    <div className="bg-white border border-gray-200 rounded-2xl overflow-hidden transition-all duration-300 hover:scale-105 hover:shadow-xl">
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
                            className="w-12 h-12 rounded-full object-cover border-2 border-gray-200"
                          />
                          <div className="flex-1 min-w-0">
                            <h3 className="font-semibold text-gray-900 truncate">
                              {provider.name}
                            </h3>
                            <p className="text-sm text-gray-500">{provider.category}</p>
                          </div>
                        </div>

                        <div className="flex items-center gap-2 mb-3">
                          <FaStar className="text-yellow-400" />
                          <span className="font-semibold text-gray-900">
                            {provider.rating}
                          </span>
                          <span className="text-gray-500 text-sm">
                            ({provider.review_count} reviews)
                          </span>
                        </div>

                        <div className="flex items-center justify-between">
                          <div>
                            <p className="text-sm text-gray-500">Hourly Rate</p>
                            <p className="font-bold text-[#1E40AF]">
                              EGP {provider.hourly_rate}
                            </p>
                          </div>
                          <div className="text-sm text-gray-500">
                            <FaMapMarkerAlt className="inline mr-1" />
                            {provider.city}
                          </div>
                        </div>
                      </div>
                    </div>
                  </Link>
                ))}
              </div>
            )}
          </main>
        </div>
      </div>
    </div>
  );
};

export default SearchPage;
