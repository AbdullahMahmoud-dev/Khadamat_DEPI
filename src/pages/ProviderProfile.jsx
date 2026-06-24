import { useParams, Link, useNavigate } from "react-router-dom";
import { providers } from "../utils/mockData";
import {
  FaStar,
  FaMapMarkerAlt,
  FaCheckCircle,
  FaWhatsapp,
  FaCalendarAlt,
  FaArrowLeft,
  FaImage,
} from "react-icons/fa";

const ProviderProfile = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const provider = providers.find((p) => p.id === parseInt(id));

  if (!provider) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">
            Provider not found
          </h2>
          <Link to="/providers" className="text-[#1E40AF] hover:text-[#1E3A8A]">
            Back to Providers
          </Link>
        </div>
      </div>
    );
  }

  const handleWhatsAppChat = () => {
    const message = encodeURIComponent(
      `Hi ${provider.name}, I found your profile on Khidma and I'm interested in your ${provider.category} services.`
    );
    window.open(`https://wa.me/${provider.whatsapp.replace(/\+/g, "")}?text=${message}`, "_blank");
  };

  const handleBookNow = () => {
    navigate(`/checkout?providerId=${provider.id}`);
  };

  const mockReviews = [
    {
      id: 1,
      customer_name: "Ahmed Mohamed",
      rating: 5,
      date: "2024-01-10",
      comment: "Excellent service! Very professional and completed the job on time. Highly recommended.",
    },
    {
      id: 2,
      customer_name: "Sara Ali",
      rating: 5,
      date: "2024-01-05",
      comment: "Great work quality and very friendly. Will definitely use again.",
    },
    {
      id: 3,
      customer_name: "Omar Hassan",
      rating: 4,
      date: "2024-01-02",
      comment: "Good service overall. Minor delay but the work was satisfactory.",
    },
  ];

  return (
    <div className="min-h-screen bg-gray-50 py-8 px-4">
      <div className="max-w-7xl mx-auto">
        {/* Back Button */}
        <Link
          to="/providers"
          className="inline-flex items-center gap-2 text-gray-600 hover:text-[#1E40AF] mb-6 transition-colors"
        >
          <FaArrowLeft />
          Back to Providers
        </Link>

        {/* Cover Banner */}
        <div className="relative h-64 md:h-80 rounded-2xl overflow-hidden mb-8">
          <img
            src={provider.portfolio_images[0]}
            alt="Cover"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-linear-to-t from-black/50 to-transparent" />
        </div>

        {/* Profile Header */}
        <div className="bg-white rounded-2xl shadow-md p-6 md:p-8 mb-8 -mt-32 relative z-10">
          <div className="flex flex-col md:flex-row gap-6">
            {/* Avatar */}
            <div className="shrink-0">
              <img
                src={provider.avatar}
                alt={provider.name}
                className="w-32 h-32 md:w-40 md:h-40 rounded-2xl object-cover border-4 border-white shadow-lg"
              />
            </div>

            {/* Info */}
            <div className="flex-1">
              <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-4">
                <div>
                  <div className="flex items-center gap-3 mb-2">
                    <h1 className="text-2xl md:text-3xl font-bold text-gray-900">
                      {provider.name}
                    </h1>
                    {provider.verified && (
                      <FaCheckCircle className="text-[#1E40AF] text-xl" />
                    )}
                  </div>
                  <p className="text-lg text-gray-600 mb-3">{provider.category}</p>
                  <div className="flex items-center gap-4 text-gray-600 mb-4">
                    <div className="flex items-center gap-2">
                      <FaMapMarkerAlt />
                      <span>{provider.city}</span>
                    </div>
                    <div className="flex items-center gap-1">
                      <FaStar className="text-yellow-400" />
                      <span className="font-semibold text-gray-900">
                        {provider.rating}
                      </span>
                      <span>({provider.review_count} reviews)</span>
                    </div>
                  </div>
                </div>

                {/* Price & Actions */}
                <div className="flex flex-col items-start md:items-end gap-3">
                  <div className="text-right">
                    <p className="text-sm text-gray-500">Hourly Rate</p>
                    <p className="text-2xl font-bold text-[#1E40AF]">
                      EGP {provider.hourly_rate}
                    </p>
                  </div>
                  <div className="flex gap-3">
                    <button
                      onClick={handleWhatsAppChat}
                      className="flex items-center gap-2 bg-green-500 hover:bg-green-600 text-white font-semibold py-3 px-6 rounded-xl transition-colors"
                    >
                      <FaWhatsapp />
                      Chat
                    </button>
                    <button
                      onClick={handleBookNow}
                      className="flex items-center gap-2 bg-[#F97316] hover:bg-[#EA580C] text-white font-semibold py-3 px-6 rounded-xl transition-colors"
                    >
                      <FaCalendarAlt />
                      Book Now
                    </button>
                  </div>
                </div>
              </div>

              {/* Bio */}
              <div className="mt-6 pt-6 border-t border-gray-200">
                <h3 className="font-semibold text-gray-900 mb-2">About</h3>
                <p className="text-gray-600 leading-relaxed">{provider.bio}</p>
              </div>
            </div>
          </div>
        </div>

        {/* Portfolio Gallery */}
        <div className="bg-white rounded-2xl shadow-md p-6 md:p-8 mb-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-6 flex items-center gap-2">
            <FaImage />
            Portfolio
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {provider.portfolio_images.map((image, index) => (
              <div key={index} className="relative group overflow-hidden rounded-xl">
                <img
                  src={image}
                  alt={`Portfolio ${index + 1}`}
                  className="w-full h-48 object-cover group-hover:scale-110 transition-transform duration-300"
                />
              </div>
            ))}
          </div>
        </div>

        {/* Reviews */}
        <div className="bg-white rounded-2xl shadow-md p-6 md:p-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">Customer Reviews</h2>
          <div className="space-y-6">
            {mockReviews.map((review) => (
              <div key={review.id} className="border-b border-gray-200 pb-6 last:border-0 last:pb-0">
                <div className="flex items-start justify-between mb-3">
                  <div>
                    <h4 className="font-semibold text-gray-900">
                      {review.customer_name}
                    </h4>
                    <p className="text-sm text-gray-500">{review.date}</p>
                  </div>
                  <div className="flex items-center gap-1">
                    {[...Array(5)].map((_, i) => (
                      <FaStar
                        key={i}
                        className={
                          i < review.rating
                            ? "text-yellow-400"
                            : "text-gray-300"
                        }
                      />
                    ))}
                  </div>
                </div>
                <p className="text-gray-600 leading-relaxed">{review.comment}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProviderProfile;
