import { useState, useEffect } from "react";
import { useNavigate, useSearchParams } from "react-router-dom";
import { providers } from "../utils/mockData";
import {
  FaCreditCard,
  FaMobileAlt,
  FaCheckCircle,
  FaClock,
  FaMapMarkerAlt,
  FaArrowRight,
  FaArrowLeft,
} from "react-icons/fa";

const CheckoutPage = () => {
  const navigate = useNavigate();
  const [searchParams] = useSearchParams();
  const [step, setStep] = useState(1);
  const [provider, setProvider] = useState(null);
  const [loading, setLoading] = useState(false);

  // Form states
  const [schedule, setSchedule] = useState({
    date: "",
    time: "",
    description: "",
  });
  const [paymentMethod, setPaymentMethod] = useState("card");
  const [paymentDetails, setPaymentDetails] = useState({
    cardNumber: "",
    expiry: "",
    cvv: "",
    fawryNumber: "",
  });

  // Tracking state
  const [trackingStep, setTrackingStep] = useState(0);
  const trackingSteps = [
    { id: 1, label: "Order Placed", icon: FaCheckCircle },
    { id: 2, label: "Provider En Route", icon: FaMapMarkerAlt },
    { id: 3, label: "Job in Progress", icon: FaClock },
    { id: 4, label: "Completed", icon: FaCheckCircle },
  ];

  useEffect(() => {
    const providerId = searchParams.get("providerId");
    if (providerId) {
      const foundProvider = providers.find((p) => p.id === parseInt(providerId));
      setProvider(foundProvider);
    }
  }, [searchParams]);

  // Simulate tracking progress
  useEffect(() => {
    if (step === 3) {
      const interval = setInterval(() => {
        setTrackingStep((prev) => {
          if (prev < trackingSteps.length - 1) {
            return prev + 1;
          }
          clearInterval(interval);
          return prev;
        });
      }, 3000); // Progress every 3 seconds
      return () => clearInterval(interval);
    }
  }, [step]);

  const handleScheduleSubmit = (e) => {
    e.preventDefault();
    setStep(2);
  };

  const handlePaymentSubmit = (e) => {
    e.preventDefault();
    setLoading(true);
    // Simulate payment processing
    setTimeout(() => {
      setLoading(false);
      setStep(3);
    }, 2000);
  };

  const handleBack = () => {
    if (step > 1) {
      setStep(step - 1);
    } else {
      navigate(-1);
    }
  };

  if (!provider) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">
            Provider not found
          </h2>
          <button
            onClick={() => navigate("/providers")}
            className="text-[#1E40AF] hover:text-[#1E3A8A]"
          >
            Back to Providers
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50 py-8 px-4">
      <div className="max-w-3xl mx-auto">
        {/* Header */}
        <div className="flex items-center justify-between mb-8">
          <button
            onClick={handleBack}
            className="flex items-center gap-2 text-gray-600 hover:text-[#1E40AF] transition-colors"
          >
            <FaArrowLeft />
            {step === 1 ? "Back" : "Previous Step"}
          </button>
          <div className="flex items-center gap-2">
            {[1, 2, 3].map((s) => (
              <div
                key={s}
                className={`w-8 h-8 rounded-full flex items-center justify-center font-semibold ${
                  s <= step
                    ? "bg-[#1E40AF] text-white"
                    : "bg-gray-200 text-gray-600"
                }`}
              >
                {s}
              </div>
            ))}
          </div>
        </div>

        {/* Step 1: Schedule */}
        {step === 1 && (
          <div className="bg-white rounded-2xl shadow-md p-6 md:p-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-6">
              Schedule Your Service
            </h2>

            {/* Provider Summary */}
            <div className="flex items-center gap-4 p-4 bg-gray-50 rounded-xl mb-6">
              <img
                src={provider.avatar}
                alt={provider.name}
                className="w-16 h-16 rounded-full object-cover"
              />
              <div>
                <h3 className="font-semibold text-gray-900">{provider.name}</h3>
                <p className="text-sm text-gray-600">{provider.category}</p>
                <p className="text-sm font-bold text-[#1E40AF]">
                  EGP {provider.hourly_rate}/hour
                </p>
              </div>
            </div>

            <form onSubmit={handleScheduleSubmit} className="space-y-6">
              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-2">
                  Select Date
                </label>
                <input
                  type="date"
                  value={schedule.date}
                  onChange={(e) =>
                    setSchedule({ ...schedule, date: e.target.value })
                  }
                  required
                  min={new Date().toISOString().split("T")[0]}
                  className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-[#1E40AF] focus:border-transparent outline-none"
                />
              </div>

              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-2">
                  Select Time
                </label>
                <input
                  type="time"
                  value={schedule.time}
                  onChange={(e) =>
                    setSchedule({ ...schedule, time: e.target.value })
                  }
                  required
                  className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-[#1E40AF] focus:border-transparent outline-none"
                />
              </div>

              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-2">
                  Problem Description
                </label>
                <textarea
                  value={schedule.description}
                  onChange={(e) =>
                    setSchedule({ ...schedule, description: e.target.value })
                  }
                  required
                  rows={4}
                  placeholder="Describe the issue or service you need..."
                  className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-[#1E40AF] focus:border-transparent outline-none resize-none"
                />
              </div>

              <button
                type="submit"
                className="w-full bg-[#1E40AF] hover:bg-[#1E3A8A] text-white font-semibold py-4 px-6 rounded-xl transition-colors flex items-center justify-center gap-2"
              >
                Continue to Payment
                <FaArrowRight />
              </button>
            </form>
          </div>
        )}

        {/* Step 2: Payment */}
        {step === 2 && (
          <div className="bg-white rounded-2xl shadow-md p-6 md:p-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-6">
              Payment Method
            </h2>

            {/* Order Summary */}
            <div className="bg-gray-50 rounded-xl p-4 mb-6">
              <h3 className="font-semibold text-gray-900 mb-3">Order Summary</h3>
              <div className="space-y-2 text-sm">
                <div className="flex justify-between">
                  <span className="text-gray-600">Service</span>
                  <span className="font-medium">{provider.category}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-600">Provider</span>
                  <span className="font-medium">{provider.name}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-600">Date & Time</span>
                  <span className="font-medium">
                    {schedule.date} at {schedule.time}
                  </span>
                </div>
                <div className="border-t border-gray-200 pt-2 mt-2">
                  <div className="flex justify-between font-bold text-lg">
                    <span>Total</span>
                    <span className="text-[#1E40AF]">
                      EGP {provider.hourly_rate}
                    </span>
                  </div>
                </div>
              </div>
            </div>

            {/* Payment Method Selection */}
            <div className="grid grid-cols-2 gap-4 mb-6">
              <button
                onClick={() => setPaymentMethod("card")}
                className={`p-4 rounded-xl border-2 transition-all ${
                  paymentMethod === "card"
                    ? "border-[#1E40AF] bg-blue-50"
                    : "border-gray-200 hover:border-gray-300"
                }`}
              >
                <FaCreditCard className="text-2xl mb-2 mx-auto text-gray-700" />
                <span className="block font-medium text-gray-900 text-center">
                  Card
                </span>
              </button>
              <button
                onClick={() => setPaymentMethod("fawry")}
                className={`p-4 rounded-xl border-2 transition-all ${
                  paymentMethod === "fawry"
                    ? "border-[#F97316] bg-orange-50"
                    : "border-gray-200 hover:border-gray-300"
                }`}
              >
                <FaMobileAlt className="text-2xl mb-2 mx-auto text-gray-700" />
                <span className="block font-medium text-gray-900 text-center">
                  Fawry
                </span>
              </button>
            </div>

            {/* Payment Form */}
            <form onSubmit={handlePaymentSubmit} className="space-y-4">
              {paymentMethod === "card" && (
                <>
                  <div>
                    <label className="block text-sm font-semibold text-gray-700 mb-2">
                      Card Number
                    </label>
                    <input
                      type="text"
                      value={paymentDetails.cardNumber}
                      onChange={(e) =>
                        setPaymentDetails({
                          ...paymentDetails,
                          cardNumber: e.target.value,
                        })
                      }
                      placeholder="1234 5678 9012 3456"
                      maxLength={19}
                      required
                      className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-[#1E40AF] focus:border-transparent outline-none"
                    />
                  </div>
                  <div className="grid grid-cols-2 gap-4">
                    <div>
                      <label className="block text-sm font-semibold text-gray-700 mb-2">
                        Expiry Date
                      </label>
                      <input
                        type="text"
                        value={paymentDetails.expiry}
                        onChange={(e) =>
                          setPaymentDetails({
                            ...paymentDetails,
                            expiry: e.target.value,
                          })
                        }
                        placeholder="MM/YY"
                        maxLength={5}
                        required
                        className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-[#1E40AF] focus:border-transparent outline-none"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-semibold text-gray-700 mb-2">
                        CVV
                      </label>
                      <input
                        type="text"
                        value={paymentDetails.cvv}
                        onChange={(e) =>
                          setPaymentDetails({
                            ...paymentDetails,
                            cvv: e.target.value,
                          })
                        }
                        placeholder="123"
                        maxLength={3}
                        required
                        className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-[#1E40AF] focus:border-transparent outline-none"
                      />
                    </div>
                  </div>
                </>
              )}

              {paymentMethod === "fawry" && (
                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-2">
                    Fawry Number
                  </label>
                  <input
                    type="text"
                    value={paymentDetails.fawryNumber}
                    onChange={(e) =>
                      setPaymentDetails({
                        ...paymentDetails,
                        fawryNumber: e.target.value,
                      })
                    }
                    placeholder="Enter your Fawry number"
                    required
                    className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-[#F97316] focus:border-transparent outline-none"
                  />
                  <p className="text-xs text-gray-500 mt-1">
                    You will receive a payment code on your Fawry number
                  </p>
                </div>
              )}

              <button
                type="submit"
                disabled={loading}
                className={`w-full font-semibold py-4 px-6 rounded-xl transition-colors flex items-center justify-center gap-2 ${
                  paymentMethod === "card"
                    ? "bg-[#1E40AF] hover:bg-[#1E3A8A] text-white"
                    : "bg-[#F97316] hover:bg-[#EA580C] text-white"
                } disabled:opacity-50`}
              >
                {loading ? "Processing..." : "Pay Now"}
                {!loading && <FaArrowRight />}
              </button>
            </form>
          </div>
        )}

        {/* Step 3: Live Tracking */}
        {step === 3 && (
          <div className="bg-white rounded-2xl shadow-md p-6 md:p-8">
            <div className="text-center mb-8">
              <div className="w-20 h-20 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <FaCheckCircle className="text-4xl text-green-500" />
              </div>
              <h2 className="text-2xl font-bold text-gray-900 mb-2">
                Payment Successful!
              </h2>
              <p className="text-gray-600">
                Your booking has been confirmed. Track your service below.
              </p>
            </div>

            {/* Tracking Timeline */}
            <div className="relative">
              {/* Progress Line */}
              <div className="absolute left-6 top-0 bottom-0 w-0.5 bg-gray-200"></div>
              <div
                className="absolute left-6 top-0 w-0.5 bg-[#1E40AF] transition-all duration-1000"
                style={{
                  height: `${(trackingStep / (trackingSteps.length - 1)) * 100}%`,
                }}
              ></div>

              {/* Steps */}
              <div className="space-y-8">
                {trackingSteps.map((stepItem, index) => {
                  const Icon = stepItem.icon;
                  const isActive = index <= trackingStep;
                  return (
                    <div key={stepItem.id} className="relative flex items-start gap-6">
                      <div
                        className={`w-12 h-12 rounded-full flex items-center justify-center z-10 transition-all ${
                          isActive
                            ? "bg-[#1E40AF] text-white"
                            : "bg-gray-200 text-gray-400"
                        }`}
                      >
                        <Icon />
                      </div>
                      <div className="flex-1 pt-2">
                        <h3
                          className={`font-semibold ${
                            isActive ? "text-gray-900" : "text-gray-400"
                          }`}
                        >
                          {stepItem.label}
                        </h3>
                        {isActive && index === trackingStep && (
                          <p className="text-sm text-gray-600 mt-1">
                            {index === 0 && "Your order has been placed successfully"}
                            {index === 1 && `${provider.name} is on the way to your location`}
                            {index === 2 && "Service is currently in progress"}
                            {index === 3 && "Service completed successfully!"}
                          </p>
                        )}
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>

            {/* Provider Info */}
            <div className="mt-8 p-4 bg-gray-50 rounded-xl">
              <div className="flex items-center gap-4">
                <img
                  src={provider.avatar}
                  alt={provider.name}
                  className="w-12 h-12 rounded-full object-cover"
                />
                <div>
                  <h4 className="font-semibold text-gray-900">{provider.name}</h4>
                  <p className="text-sm text-gray-600">{provider.category}</p>
                </div>
              </div>
            </div>

            <div className="mt-8 text-center">
              <button
                onClick={() => navigate("/")}
                className="bg-[#1E40AF] hover:bg-[#1E3A8A] text-white font-semibold py-3 px-8 rounded-xl transition-colors"
              >
                Back to Home
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default CheckoutPage;
