// Mock Data for Khidma Service Marketplace
// All data is in English with Egyptian context

export const categories = [
  {
    id: 1,
    name: "Plumbing",
    icon: "FaWrench",
    description: "Professional plumbing services for homes and businesses",
    jobCount: 24
  },
  {
    id: 2,
    name: "Electricity",
    icon: "FaBolt",
    description: "Electrical installation, repair, and maintenance",
    jobCount: 31
  },
  {
    id: 3,
    name: "AC Repair",
    icon: "FaSnowflake",
    description: "Air conditioning installation and repair services",
    jobCount: 18
  },
  {
    id: 4,
    name: "Carpentry",
    icon: "FaHammer",
    description: "Custom woodworking and furniture services",
    jobCount: 15
  },
  {
    id: 5,
    name: "Painting",
    icon: "FaPaintRoller",
    description: "Interior and exterior painting services",
    jobCount: 22
  },
  {
    id: 6,
    name: "Cleaning",
    icon: "FaBroom",
    description: "Professional cleaning and maintenance services",
    jobCount: 29
  }
];

export const cities = [
  { id: 1, name: "Cairo" },
  { id: 2, name: "Giza" },
  { id: 3, name: "Alexandria" },
  { id: 4, name: "Mansoura" },
  { id: 5, name: "Tanta" }
];

export const providers = [
  {
    id: 1,
    name: "Ahmed Hassan",
    rating: 4.8,
    review_count: 156,
    city: "Cairo",
    category: "Plumbing",
    hourly_rate: 150,
    avatar: "https://ui-avatars.com/api/?name=Ahmed+Hassan&background=1E40AF&color=fff&size=150",
    portfolio_images: [
      "https://placehold.co/400x300/1E40AF/fff?text=Plumbing+Work+1",
      "https://placehold.co/400x300/1E40AF/fff?text=Plumbing+Work+2"
    ],
    whatsapp: "+201234567890",
    bio: "Professional plumber with 10+ years of experience in residential and commercial plumbing.",
    verified: true
  },
  {
    id: 2,
    name: "Mohamed Ali",
    rating: 4.9,
    review_count: 203,
    city: "Giza",
    category: "Electricity",
    hourly_rate: 180,
    avatar: "https://ui-avatars.com/api/?name=Mohamed+Ali&background=F97316&color=fff&size=150",
    portfolio_images: [
      "https://placehold.co/400x300/F97316/fff?text=Electrical+Work+1",
      "https://placehold.co/400x300/F97316/fff?text=Electrical+Work+2"
    ],
    whatsapp: "+201098765432",
    bio: "Licensed electrician specializing in smart home installations and electrical repairs.",
    verified: true
  },
  {
    id: 3,
    name: "Sara Mahmoud",
    rating: 4.7,
    review_count: 89,
    city: "Alexandria",
    category: "AC Repair",
    hourly_rate: 200,
    avatar: "https://ui-avatars.com/api/?name=Sara+Mahmoud&background=10B981&color=fff&size=150",
    portfolio_images: [
      "https://placehold.co/400x300/10B981/fff?text=AC+Repair+1",
      "https://placehold.co/400x300/10B981/fff?text=AC+Repair+2"
    ],
    whatsapp: "+201112345678",
    bio: "HVAC specialist with expertise in all major air conditioning brands.",
    verified: true
  },
  {
    id: 4,
    name: "Omar Khaled",
    rating: 4.6,
    review_count: 124,
    city: "Mansoura",
    category: "Carpentry",
    hourly_rate: 160,
    avatar: "https://ui-avatars.com/api/?name=Omar+Khaled&background=8B5CF6&color=fff&size=150",
    portfolio_images: [
      "https://placehold.co/400x300/8B5CF6/fff?text=Carpentry+Work+1",
      "https://placehold.co/400x300/8B5CF6/fff?text=Carpentry+Work+2"
    ],
    whatsapp: "+201556789012",
    bio: "Expert carpenter specializing in custom furniture and home renovations.",
    verified: false
  },
  {
    id: 5,
    name: "Fatima Ahmed",
    rating: 4.9,
    review_count: 178,
    city: "Tanta",
    category: "Painting",
    hourly_rate: 140,
    avatar: "https://ui-avatars.com/api/?name=Fatima+Ahmed&background=EC4899&color=fff&size=150",
    portfolio_images: [
      "https://placehold.co/400x300/EC4899/fff?text=Painting+Work+1",
      "https://placehold.co/400x300/EC4899/fff?text=Painting+Work+2"
    ],
    whatsapp: "+201998765432",
    bio: "Professional painter with attention to detail and color expertise.",
    verified: true
  },
  {
    id: 6,
    name: "Karim Sayed",
    rating: 4.5,
    review_count: 67,
    city: "Cairo",
    category: "Plumbing",
    hourly_rate: 145,
    avatar: "https://ui-avatars.com/api/?name=Karim+Sayed&background=1E40AF&color=fff&size=150",
    portfolio_images: [
      "https://placehold.co/400x300/1E40AF/fff?text=Plumbing+Work+3",
      "https://placehold.co/400x300/1E40AF/fff?text=Plumbing+Work+4"
    ],
    whatsapp: "+201223344556",
    bio: "Reliable plumber for emergency repairs and routine maintenance.",
    verified: false
  },
  {
    id: 7,
    name: "Laila Mohamed",
    rating: 4.8,
    review_count: 145,
    city: "Giza",
    category: "Electricity",
    hourly_rate: 175,
    avatar: "https://ui-avatars.com/api/?name=Laila+Mohamed&background=F97316&color=fff&size=150",
    portfolio_images: [
      "https://placehold.co/400x300/F97316/fff?text=Electrical+Work+3",
      "https://placehold.co/400x300/F97316/fff?text=Electrical+Work+4"
    ],
    whatsapp: "+201334455667",
    bio: "Electrical engineer with experience in industrial and residential projects.",
    verified: true
  },
  {
    id: 8,
    name: "Hassan Ibrahim",
    rating: 4.7,
    review_count: 92,
    city: "Alexandria",
    category: "Carpentry",
    hourly_rate: 155,
    avatar: "https://ui-avatars.com/api/?name=Hassan+Ibrahim&background=8B5CF6&color=fff&size=150",
    portfolio_images: [
      "https://placehold.co/400x300/8B5CF6/fff?text=Carpentry+Work+3",
      "https://placehold.co/400x300/8B5CF6/fff?text=Carpentry+Work+4"
    ],
    whatsapp: "+201445566778",
    bio: "Skilled carpenter focused on quality craftsmanship and customer satisfaction.",
    verified: true
  }
];

export const jobPosts = [
  {
    id: 1,
    customerName: "Nadia Farouk",
    category: "Plumbing",
    title: "Leaking bathroom pipe repair in Maadi",
    description: "Need to fix a leaking pipe in the kitchen and install a new faucet. The issue is urgent as water is constantly dripping.",
    budget: 500,
    city: "Cairo",
    createdAt: "2 hours ago",
    bidsCount: 5
  },
  {
    id: 2,
    customerName: "Tarek Hosny",
    category: "Electricity",
    title: "Complete rewiring of 2-bedroom apartment",
    description: "Complete rewiring of a 2-bedroom apartment in Dokki. Need to install new outlets and switches throughout the unit.",
    budget: 800,
    city: "Giza",
    createdAt: "5 hours ago",
    bidsCount: 8
  },
  {
    id: 3,
    customerName: "Mona Zaki",
    category: "AC Repair",
    title: "AC unit not cooling properly - urgent",
    description: "AC unit not cooling properly. Need diagnosis and repair. The unit is a split type and makes unusual noises.",
    budget: 350,
    city: "Alexandria",
    createdAt: "1 day ago",
    bidsCount: 3
  },
  {
    id: 4,
    customerName: "Kamal Adel",
    category: "Carpentry",
    title: "Custom bookshelves for living room",
    description: "Build custom bookshelves for living room and repair wooden doors. Looking for high-quality finish and modern design.",
    budget: 1200,
    city: "Mansoura",
    createdAt: "1 day ago",
    bidsCount: 6
  },
  {
    id: 5,
    customerName: "Rania Said",
    category: "Painting",
    title: "Paint 3-bedroom apartment in Nasr City",
    description: "Paint entire 3-bedroom apartment including ceilings. Walls need preparation. Looking for clean, professional work.",
    budget: 2000,
    city: "Cairo",
    createdAt: "2 days ago",
    bidsCount: 12
  },
  {
    id: 6,
    customerName: "Amr Diab",
    category: "Plumbing",
    title: "Install new water heater in apartment",
    description: "Install new water heater and connect plumbing lines. Old heater needs to be removed and disposed of properly.",
    budget: 400,
    city: "Cairo",
    createdAt: "2 days ago",
    bidsCount: 4
  },
  {
    id: 7,
    customerName: "Yousra Mahmoud",
    category: "Electricity",
    title: "Install ceiling fans in 3 rooms",
    description: "Install ceiling fans in 3 rooms and fix faulty light switches. All materials will be provided by the customer.",
    budget: 600,
    city: "Giza",
    createdAt: "3 days ago",
    bidsCount: 7
  },
  {
    id: 8,
    customerName: "Hany Salama",
    category: "Painting",
    title: "Exterior painting of villa facade",
    description: "Exterior painting of villa facade in Smouha. Need weather-resistant paint. Surface preparation required.",
    budget: 1500,
    city: "Alexandria",
    createdAt: "3 days ago",
    bidsCount: 9
  },
  {
    id: 9,
    customerName: "Laila Kamel",
    category: "Cleaning",
    title: "Deep cleaning for 4-bedroom villa",
    description: "Complete deep cleaning of 4-bedroom villa in New Cairo. Includes kitchen, bathrooms, and all living areas.",
    budget: 800,
    city: "Cairo",
    createdAt: "4 hours ago",
    bidsCount: 6
  },
  {
    id: 10,
    customerName: "Omar Sherif",
    category: "AC Repair",
    title: "Annual AC maintenance for 3 units",
    description: "Annual maintenance and cleaning for 3 split AC units. Need gas refill and filter replacement.",
    budget: 600,
    city: "Giza",
    createdAt: "6 hours ago",
    bidsCount: 4
  },
  {
    id: 11,
    customerName: "Samar Munir",
    category: "Carpentry",
    title: "Repair damaged wooden furniture",
    description: "Repair damaged wooden dining table and 6 chairs. Need sanding, staining, and varnishing.",
    budget: 450,
    city: "Tanta",
    createdAt: "1 day ago",
    bidsCount: 3
  },
  {
    id: 12,
    customerName: "Mahmoud El-Essawy",
    category: "Plumbing",
    title: "Fix blocked drain in kitchen",
    description: "Kitchen drain is completely blocked. Need professional unclogging and inspection of pipes.",
    budget: 300,
    city: "Mansoura",
    createdAt: "5 hours ago",
    bidsCount: 5
  }
];
