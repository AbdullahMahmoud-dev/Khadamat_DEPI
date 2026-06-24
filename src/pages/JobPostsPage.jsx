import { useState } from "react";
import { jobPosts, categories } from "../utils/mockData";
import {
  FaMapMarkerAlt,
  FaClock,
  FaGavel,
  FaTimes,
  FaDollarSign,
} from "react-icons/fa";

const JobPostsPage = () => {
  const [selectedJob, setSelectedJob] = useState(null);
  const [bidModalOpen, setBidModalOpen] = useState(false);
  const [bidAmount, setBidAmount] = useState("");
  const [bidMessage, setBidMessage] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("");

  const handlePlaceBid = (job) => {
    setSelectedJob(job);
    setBidModalOpen(true);
  };

  const handleSubmitBid = () => {
    if (bidAmount && bidMessage) {
      alert(
        `Bid of EGP ${bidAmount} submitted for: ${selectedJob.title}\n\nMessage: ${bidMessage}`
      );
      setBidModalOpen(false);
      setBidAmount("");
      setBidMessage("");
      setSelectedJob(null);
    }
  };

  const filteredJobs = selectedCategory
    ? jobPosts.filter((job) => job.category === selectedCategory)
    : jobPosts;

  return (
    <div className="min-h-screen bg-gray-50 py-8 px-4">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="mb-8">
          <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-2">
            Job Posts
          </h1>
          <p className="text-gray-600">
            Browse and bid on customer service requests
          </p>
        </div>

        {/* Category Filter */}
        <div className="mb-8">
          <div className="flex flex-wrap gap-3">
            <button
              onClick={() => setSelectedCategory("")}
              className={`px-4 py-2 rounded-lg font-medium transition-all ${
                !selectedCategory
                  ? "bg-[#1E40AF] text-white"
                  : "bg-white text-gray-700 hover:bg-gray-100"
              }`}
            >
              All Categories
            </button>
            {categories.map((category) => (
              <button
                key={category.id}
                onClick={() => setSelectedCategory(category.name)}
                className={`px-4 py-2 rounded-lg font-medium transition-all ${
                  selectedCategory === category.name
                    ? "bg-[#1E40AF] text-white"
                    : "bg-white text-gray-700 hover:bg-gray-100"
                }`}
              >
                {category.name}
              </button>
            ))}
          </div>
        </div>

        {/* Jobs Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredJobs.map((job) => (
            <div
              key={job.id}
              className="bg-white rounded-2xl shadow-md p-6 hover:shadow-lg transition-shadow"
            >
              {/* Category Badge */}
              <div className="mb-4">
                <span className="inline-block bg-[#1E40AF]/10 text-[#1E40AF] px-3 py-1 rounded-full text-sm font-semibold">
                  {job.category}
                </span>
              </div>

              {/* Title */}
              <h3 className="text-lg font-bold text-gray-900 mb-2 line-clamp-2">
                {job.title}
              </h3>

              {/* Description */}
              <p className="text-gray-600 text-sm mb-4 line-clamp-3">
                {job.description}
              </p>

              {/* Meta Info */}
              <div className="space-y-2 mb-4">
                <div className="flex items-center gap-2 text-sm text-gray-600">
                  <FaDollarSign className="text-[#F97316]" />
                  <span className="font-semibold text-gray-900">
                    Budget: EGP {job.budget}
                  </span>
                </div>
                <div className="flex items-center gap-2 text-sm text-gray-600">
                  <FaMapMarkerAlt className="text-[#1E40AF]" />
                  <span>{job.city}</span>
                </div>
                <div className="flex items-center gap-2 text-sm text-gray-600">
                  <FaClock className="text-gray-400" />
                  <span>{job.createdAt}</span>
                </div>
              </div>

              {/* Bids Count */}
              <div className="flex items-center justify-between mb-4">
                <span className="text-sm text-gray-500">
                  {job.bidsCount} bid{job.bidsCount !== 1 ? "s" : ""}
                </span>
              </div>

              {/* Place Bid Button */}
              <button
                onClick={() => handlePlaceBid(job)}
                className="w-full bg-[#F97316] hover:bg-[#EA580C] text-white font-semibold py-3 px-4 rounded-xl transition-colors flex items-center justify-center gap-2"
              >
                <FaGavel />
                Place a Bid
              </button>
            </div>
          ))}
        </div>

        {/* Bid Modal */}
        {bidModalOpen && selectedJob && (
          <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50 p-4">
            <div className="bg-white rounded-2xl shadow-2xl max-w-md w-full p-6">
              {/* Modal Header */}
              <div className="flex items-center justify-between mb-6">
                <h2 className="text-xl font-bold text-gray-900">
                  Place Your Bid
                </h2>
                <button
                  onClick={() => setBidModalOpen(false)}
                  className="text-gray-400 hover:text-gray-600 transition-colors"
                >
                  <FaTimes className="text-xl" />
                </button>
              </div>

              {/* Job Summary */}
              <div className="bg-gray-50 rounded-xl p-4 mb-6">
                <h3 className="font-semibold text-gray-900 mb-1">
                  {selectedJob.title}
                </h3>
                <p className="text-sm text-gray-600 mb-2">{selectedJob.description}</p>
                <div className="flex items-center gap-4 text-sm">
                  <span className="font-semibold text-[#1E40AF]">
                    Budget: EGP {selectedJob.budget}
                  </span>
                  <span className="text-gray-500">{selectedJob.city}</span>
                </div>
              </div>

              {/* Bid Form */}
              <div className="space-y-4">
                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-2">
                    Your Offer (EGP)
                  </label>
                  <input
                    type="number"
                    value={bidAmount}
                    onChange={(e) => setBidAmount(e.target.value)}
                    placeholder="Enter your price"
                    className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-[#1E40AF] focus:border-transparent outline-none"
                  />
                </div>

                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-2">
                    Message (Optional)
                  </label>
                  <textarea
                    value={bidMessage}
                    onChange={(e) => setBidMessage(e.target.value)}
                    placeholder="Describe your offer or ask questions..."
                    rows={3}
                    className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-[#1E40AF] focus:border-transparent outline-none resize-none"
                  />
                </div>

                <button
                  onClick={handleSubmitBid}
                  disabled={!bidAmount}
                  className="w-full bg-[#1E40AF] hover:bg-[#1E3A8A] text-white font-semibold py-3 px-4 rounded-xl transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  Submit Bid
                </button>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default JobPostsPage;
