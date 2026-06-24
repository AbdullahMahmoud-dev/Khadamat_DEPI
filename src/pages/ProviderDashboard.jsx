import { useState, useEffect } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { jobPosts } from "../utils/mockData";
import {
  FaDollarSign,
  FaBriefcase,
  FaStar,
  FaCheck,
  FaTimes,
  FaClock,
  FaGavel,
  FaArrowRight,
} from "react-icons/fa";

const SkeletonLoader = ({ width = "100%", height = "100%" }) => (
  <div
    className="animate-pulse bg-gray-200 rounded"
    style={{ width, height }}
  />
);

const ProviderDashboard = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const [activeTab, setActiveTab] = useState("overview");
  const [loading, setLoading] = useState(true);
  const [bookings, setBookings] = useState([]);
  const [bids, setBids] = useState([]);
  const [bidAmount, setBidAmount] = useState({});

  useEffect(() => {
    // Simulate loading
    setTimeout(() => {
      setLoading(false);
      setBookings([
        {
          id: 1,
          customer_name: "Ahmed Mohamed",
          service: "Plumbing",
          date: "2024-01-20",
          time: "10:00",
          status: "pending",
          amount: 300,
        },
        {
          id: 2,
          customer_name: "Sara Ali",
          service: "Electricity",
          date: "2024-01-21",
          time: "14:00",
          status: "accepted",
          amount: 450,
        },
        {
          id: 3,
          customer_name: "Omar Hassan",
          service: "AC Repair",
          date: "2024-01-22",
          time: "09:00",
          status: "in_progress",
          amount: 350,
        },
      ]);
      setBids(jobPosts);
    }, 1500);
  }, []);

  useEffect(() => {
    const path = location.pathname;
    if (path === "/dashboard") setActiveTab("overview");
    else if (path === "/dashboard/bookings") setActiveTab("bookings");
    else if (path === "/dashboard/wallet") setActiveTab("wallet");
    else if (path === "/dashboard/bids") setActiveTab("bids");
  }, [location.pathname]);

  const handleBookingAction = (bookingId, action) => {
    setBookings(
      bookings.map((booking) =>
        booking.id === bookingId
          ? {
              ...booking,
              status:
                action === "accept"
                  ? "accepted"
                  : action === "decline"
                  ? "declined"
                  : action === "complete"
                  ? "completed"
                  : booking.status,
            }
          : booking
      )
    );
  };

  const handleBidSubmit = (jobId) => {
    const amount = bidAmount[jobId];
    if (amount && amount > 0) {
      alert(`Bid of EGP ${amount} submitted for job #${jobId}`);
      setBidAmount({ ...bidAmount, [jobId]: "" });
    }
  };

  const stats = {
    totalRevenue: 12500,
    activeJobs: 8,
    overallRating: 4.8,
    completedJobs: 45,
  };

  const monthlyEarnings = [
    { month: "Jan", amount: 2000 },
    { month: "Feb", amount: 2500 },
    { month: "Mar", amount: 1800 },
    { month: "Apr", amount: 3200 },
    { month: "May", amount: 3000 },
  ];

  const maxEarning = Math.max(...monthlyEarnings.map((e) => e.amount));

  return (
    <div className="min-h-screen bg-gray-100 dark:bg-slate-900 p-4 md:p-8 transition-colors duration-200">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-gray-900 dark:text-white mb-2 transition-colors duration-200">
            Provider Dashboard
          </h1>
          <p className="text-gray-600 dark:text-gray-400 transition-colors duration-200">Manage your services and track your earnings</p>
        </div>

        {/* Overview Tab */}
        {activeTab === "overview" && (
          <div className="space-y-8">
            {/* Stats Cards */}
            {loading ? (
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                {[1, 2, 3].map((i) => (
                  <div key={i} className="bg-white dark:bg-slate-800 rounded-xl shadow-md p-6">
                    <SkeletonLoader height="80px" />
                  </div>
                ))}
              </div>
            ) : (
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <div className="bg-white dark:bg-slate-800 rounded-xl shadow-md p-6">
                  <div className="flex items-center justify-between mb-4">
                    <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center">
                      <FaDollarSign className="text-2xl text-green-600" />
                    </div>
                    <span className="text-sm text-green-600 font-medium">+12%</span>
                  </div>
                  <p className="text-gray-500 text-sm mb-1">Total Revenue</p>
                  <p className="text-3xl font-bold text-gray-900 dark:text-white">
                    EGP {stats.totalRevenue.toLocaleString()}
                  </p>
                </div>

                <div className="bg-white dark:bg-slate-800 rounded-xl shadow-md p-6">
                  <div className="flex items-center justify-between mb-4">
                    <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center">
                      <FaBriefcase className="text-2xl text-blue-600" />
                    </div>
                    <span className="text-sm text-blue-600 font-medium">Active</span>
                  </div>
                  <p className="text-gray-500 text-sm mb-1">Active Jobs</p>
                  <p className="text-3xl font-bold text-gray-900 dark:text-white">{stats.activeJobs}</p>
                </div>

                <div className="bg-white dark:bg-slate-800 rounded-xl shadow-md p-6">
                  <div className="flex items-center justify-between mb-4">
                    <div className="w-12 h-12 bg-yellow-100 rounded-lg flex items-center justify-center">
                      <FaStar className="text-2xl text-yellow-600" />
                    </div>
                    <span className="text-sm text-yellow-600 font-medium">
                      {stats.overallRating}
                    </span>
                  </div>
                  <p className="text-gray-500 text-sm mb-1">Overall Rating</p>
                  <p className="text-3xl font-bold text-gray-900 dark:text-white">
                    {stats.overallRating}
                  </p>
                </div>
              </div>
            )}

            {/* Monthly Earnings Chart */}
            {loading ? (
              <div className="bg-white dark:bg-slate-800 rounded-xl shadow-md p-6">
                <SkeletonLoader height="300px" />
              </div>
            ) : (
              <div className="bg-white dark:bg-slate-800 rounded-xl shadow-md p-6">
                <h2 className="text-xl font-bold text-gray-900 dark:text-white mb-6">
                  Monthly Earnings
                </h2>
                <div className="flex items-end justify-between gap-4 h-64">
                  {monthlyEarnings.map((data) => (
                    <div key={data.month} className="flex-1 flex flex-col items-center">
                      <div className="w-full bg-gray-100 rounded-t-lg relative">
                        <div
                          className="absolute bottom-0 w-full bg-[#1E40AF] rounded-t-lg transition-all duration-500"
                          style={{
                            height: `${(data.amount / maxEarning) * 100}%`,
                          }}
                        />
                      </div>
                      <p className="mt-2 text-sm font-medium text-gray-700">
                        {data.month}
                      </p>
                      <p className="text-xs text-gray-500">
                        EGP {data.amount}
                      </p>
                    </div>
                  ))}
                </div>
              </div>
            )}
          </div>
        )}

        {/* My Bookings Tab */}
        {activeTab === "bookings" && (
          <div className="bg-white dark:bg-slate-800 rounded-xl shadow-md overflow-hidden">
            <div className="p-6 border-b border-gray-200">
              <h2 className="text-xl font-bold text-gray-900 dark:text-white">My Bookings</h2>
            </div>

            {loading ? (
              <div className="p-6 space-y-4">
                {[1, 2, 3].map((i) => (
                  <SkeletonLoader key={i} height="60px" />
                ))}
              </div>
            ) : (
              <div className="overflow-x-auto">
                <table className="w-full">
                  <thead className="bg-gray-50">
                    <tr>
                      <th className="px-6 py-3 text-left text-xs font-semibold text-gray-500 uppercase">
                        Customer
                      </th>
                      <th className="px-6 py-3 text-left text-xs font-semibold text-gray-500 uppercase">
                        Service
                      </th>
                      <th className="px-6 py-3 text-left text-xs font-semibold text-gray-500 uppercase">
                        Date & Time
                      </th>
                      <th className="px-6 py-3 text-left text-xs font-semibold text-gray-500 uppercase">
                        Amount
                      </th>
                      <th className="px-6 py-3 text-left text-xs font-semibold text-gray-500 uppercase">
                        Status
                      </th>
                      <th className="px-6 py-3 text-left text-xs font-semibold text-gray-500 uppercase">
                        Actions
                      </th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-gray-200">
                    {bookings.map((booking) => (
                      <tr key={booking.id} className="hover:bg-gray-50">
                        <td className="px-6 py-4 whitespace-nowrap">
                          <p className="font-medium text-gray-900 dark:text-white">
                            {booking.customer_name}
                          </p>
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap text-gray-600">
                          {booking.service}
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap text-gray-600">
                          <div>
                            <p>{booking.date}</p>
                            <p className="text-sm">{booking.time}</p>
                          </div>
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap font-semibold text-gray-900 dark:text-white">
                          EGP {booking.amount}
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap">
                          <span
                            className={`px-3 py-1 rounded-full text-xs font-semibold ${
                              booking.status === "pending"
                                ? "bg-yellow-100 text-yellow-800"
                                : booking.status === "accepted"
                                ? "bg-blue-100 text-blue-800"
                                : booking.status === "in_progress"
                                ? "bg-purple-100 text-purple-800"
                                : booking.status === "completed"
                                ? "bg-green-100 text-green-800"
                                : "bg-red-100 text-red-800"
                            }`}
                          >
                            {booking.status.replace("_", " ").toUpperCase()}
                          </span>
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap">
                          <div className="flex gap-2">
                            {booking.status === "pending" && (
                              <>
                                <button
                                  onClick={() =>
                                    handleBookingAction(booking.id, "accept")
                                  }
                                  className="p-2 bg-green-500 hover:bg-green-600 text-white rounded-lg transition-colors"
                                  title="Accept"
                                >
                                  <FaCheck />
                                </button>
                                <button
                                  onClick={() =>
                                    handleBookingAction(booking.id, "decline")
                                  }
                                  className="p-2 bg-red-500 hover:bg-red-600 text-white rounded-lg transition-colors"
                                  title="Decline"
                                >
                                  <FaTimes />
                                </button>
                              </>
                            )}
                            {booking.status === "accepted" && (
                              <button
                                onClick={() =>
                                  handleBookingAction(booking.id, "complete")
                                }
                                className="p-2 bg-blue-500 hover:bg-blue-600 text-white rounded-lg transition-colors"
                                title="Mark as Complete"
                              >
                                <FaClock />
                              </button>
                            )}
                          </div>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            )}
          </div>
        )}

        {/* Wallet Tab */}
        {activeTab === "wallet" && (
          <div className="bg-white dark:bg-slate-800 rounded-xl shadow-md p-6">
            {loading ? (
              <SkeletonLoader height="200px" />
            ) : (
              <div>
                <h2 className="text-xl font-bold text-gray-900 dark:text-white mb-6">Wallet</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="bg-linear-to-br from-[#1E40AF] to-[#1E3A8A] rounded-xl p-6 text-white">
                    <p className="text-blue-100 mb-2">Available Balance</p>
                    <p className="text-4xl font-bold mb-4">
                      EGP {stats.totalRevenue.toLocaleString()}
                    </p>
                    <button className="bg-white dark:bg-slate-800 text-[#1E40AF] font-semibold py-2 px-4 rounded-lg hover:bg-gray-100 transition-colors">
                      Withdraw
                    </button>
                  </div>
                  <div className="bg-gray-50 rounded-xl p-6">
                    <p className="text-gray-500 mb-2">Pending Payouts</p>
                    <p className="text-4xl font-bold text-gray-900 dark:text-white mb-4">
                      EGP 2,500
                    </p>
                    <p className="text-sm text-gray-600">
                      Expected payout: Jan 25, 2024
                    </p>
                  </div>
                </div>
              </div>
            )}
          </div>
        )}

        {/* Bids Tab */}
        {activeTab === "bids" && (
          <div className="space-y-6">
            <div className="bg-white dark:bg-slate-800 rounded-xl shadow-md p-6">
              <h2 className="text-xl font-bold text-gray-900 dark:text-white mb-2">
                Open Job Requests
              </h2>
              <p className="text-gray-600 mb-6">
                Browse and bid on customer job requests
              </p>

              {loading ? (
                <div className="space-y-4">
                  {[1, 2, 3].map((i) => (
                    <SkeletonLoader key={i} height="120px" />
                  ))}
                </div>
              ) : (
                <div className="space-y-4">
                  {bids.map((job) => (
                    <div
                      key={job.id}
                      className="border border-gray-200 rounded-xl p-6 hover:border-[#1E40AF] transition-colors"
                    >
                      <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-4">
                        <div className="flex-1">
                          <div className="flex items-center gap-2 mb-2">
                            <h3 className="font-semibold text-gray-900 dark:text-white">
                              {job.category}
                            </h3>
                            <span className="px-2 py-1 bg-green-100 text-green-800 text-xs font-semibold rounded-full">
                              OPEN
                            </span>
                          </div>
                          <p className="text-gray-600 mb-3">
                            {job.description}
                          </p>
                          <div className="flex items-center gap-4 text-sm text-gray-500">
                            <span className="flex items-center gap-1">
                              <FaDollarSign />
                              Budget: EGP {job.budget}
                            </span>
                            <span>{job.city}</span>
                            <span>{job.bidsCount} bids</span>
                          </div>
                        </div>

                        <div className="flex flex-col gap-2 min-w-50">
                          <div className="flex items-center gap-2">
                            <span className="text-gray-600 text-sm">Your bid:</span>
                            <input
                              type="number"
                              value={bidAmount[job.id] || ""}
                              onChange={(e) =>
                                setBidAmount({
                                  ...bidAmount,
                                  [job.id]: e.target.value,
                                })
                              }
                              placeholder="Amount"
                              className="w-24 px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#1E40AF] focus:border-transparent outline-none"
                            />
                          </div>
                          <button
                            onClick={() => handleBidSubmit(job.id)}
                            className="flex items-center justify-center gap-2 bg-[#F97316] hover:bg-[#EA580C] text-white font-semibold py-2 px-4 rounded-lg transition-colors"
                          >
                            <FaGavel />
                            Submit Bid
                          </button>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              )}
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default ProviderDashboard;
