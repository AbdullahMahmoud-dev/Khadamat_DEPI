import { createContext, useContext, useState, useEffect } from "react";

const AuthContext = createContext(null);

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(false);

  // Load user from localStorage on mount
  useEffect(() => {
    const savedUser = localStorage.getItem("khidma_user");
    if (savedUser) {
      setUser(JSON.parse(savedUser));
    }
  }, []);

  // Mock login function
  const login = async (userData) => {
    setLoading(true);
    // Simulate API call delay
    await new Promise((resolve) => setTimeout(resolve, 500));
    
    const newUser = {
      id: userData.id || Date.now(),
      name: userData.name,
      email: userData.email,
      phone: userData.phone,
      role: userData.role, // 'customer' or 'provider'
      avatar: userData.avatar || "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=150&h=150&fit=crop&crop=face",
      city: userData.city || null,
      specialty: userData.specialty || null,
    };
    
    setUser(newUser);
    localStorage.setItem("khidma_user", JSON.stringify(newUser));
    setLoading(false);
    return newUser;
  };

  // Mock logout function
  const logout = () => {
    setUser(null);
    localStorage.removeItem("khidma_user");
  };

  // Demo login functions for presentation
  const loginAsDemoCustomer = async () => {
    return await login({
      id: 1,
      name: "Ahmed Mohamed",
      email: "ahmed@example.com",
      phone: "+201234567890",
      role: "customer",
      avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&h=150&fit=crop&crop=face",
      city: "Cairo",
    });
  };

  const loginAsDemoProvider = async () => {
    return await login({
      id: 2,
      name: "Sara Hassan",
      email: "sara@example.com",
      phone: "+201098765432",
      role: "provider",
      avatar: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=150&h=150&fit=crop&crop=face",
      city: "Alexandria",
      specialty: "AC Repair",
    });
  };

  const value = {
    user,
    loading,
    login,
    logout,
    loginAsDemoCustomer,
    loginAsDemoProvider,
    isAuthenticated: !!user,
    isCustomer: user?.role === "customer",
    isProvider: user?.role === "provider",
  };

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
};

export const useAuth = () => {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error("useAuth must be used within an AuthProvider");
  }
  return context;
};
