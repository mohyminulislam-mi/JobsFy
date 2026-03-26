export interface User {
  id: string;
  name: string;
  email: string;
  phone: string;
  passwordHash: string;
  designation: string;
  location: string;
  portfolio: string;
  avatar: string;
  createdAt: string;
}

export interface Job {
  id: string;
  title: string;
  company: string;
  logo: string;
  location: string;
  type: string; // "Full-time", "Part-time", "Contract", "Freelance", "Remote"
  category: string;
  budget: string;
  budgetMin: number;
  budgetMax: number;
  postedAt: string;
  description: string;
  requirements: string[];
}

export interface Proposal {
  id: string;
  jobId: string;
  userId: string;
  coverLetter: string;
  bidAmount: number;
  createdAt: string;
}

export interface Post {
  id: string;
  authorId: string;
  authorName: string;
  authorAvatar: string;
  content: string;
  likes: number;
  comments: number;
  createdAt: string;
}

export interface Message {
  id: string;
  senderId: string;
  receiverId: string;
  text: string;
  createdAt: string;
}

export interface Profile {
  id: string;
  name: string;
  title: string;
  avatar: string;
  bio: string;
  skills: string[];
  portfolio: string[];
}

const globalForDb = globalThis as unknown as {
  mockDb: {
    users: User[];
    jobs: Job[];
    proposals: Proposal[];
    posts: Post[];
    messages: Message[];
    profiles: Profile[];
  };
};

if (!globalForDb.mockDb) {
  globalForDb.mockDb = {
    users: [],
    jobs: [
      {
        id: "1",
        title: "Senior Full-Stack Developer",
        company: "TechNexus",
        logo: "https://i.pravatar.cc/150?u=tech1",
        location: "Remote",
        type: "Full-time",
        category: "Development",
        budget: "$100k - $150k / yr",
        budgetMin: 100000,
        budgetMax: 150000,
        postedAt: "2 hours ago",
        description: "We are looking for a Senior Full-Stack Developer to lead our new product initiatives.",
        requirements: ["React", "Node.js", "PostgreSQL", "AWS"],
      },
      {
        id: "2",
        title: "UI/UX Designer",
        company: "Creative Studio",
        logo: "https://i.pravatar.cc/150?u=tech2",
        location: "New York, NY",
        type: "Contract",
        category: "Design",
        budget: "$5k - $8k / mo",
        budgetMin: 5000,
        budgetMax: 8000,
        postedAt: "5 hours ago",
        description: "Looking for an experienced designer to revamp our SaaS dashboard.",
        requirements: ["Figma", "Prototyping", "User Research"],
      },
      {
        id: "3",
        title: "Marketing Manager",
        company: "Growthly",
        logo: "https://i.pravatar.cc/150?u=tech3",
        location: "London, UK",
        type: "Full-time",
        category: "Marketing",
        budget: "$50k - $70k / yr",
        budgetMin: 50000,
        budgetMax: 70000,
        postedAt: "1 day ago",
        description: "Join our fast-growing marketing team to spearhead our B2B campaigns.",
        requirements: ["SEO", "Content Strategy", "Google Ads"],
      },
      {
        id: "4",
        title: "Backend Engineer (Go)",
        company: "FinTech Pro",
        logo: "https://i.pravatar.cc/150?u=tech4",
        location: "Remote",
        type: "Freelance",
        category: "Development",
        budget: "$50 - $80 / hr",
        budgetMin: 50,
        budgetMax: 80,
        postedAt: "1 day ago",
        description: "Need a high-performance microservices expert.",
        requirements: ["Go", "gRPC", "Kubernetes"],
      },
      {
        id: "5",
        title: "Graphic Designer",
        company: "Brand Co",
        logo: "https://i.pravatar.cc/150?u=tech5",
        location: "Toronto, Canada",
        type: "Freelance",
        category: "Design",
        budget: "$1k - $3k",
        budgetMin: 1000,
        budgetMax: 3000,
        postedAt: "2 days ago",
        description: "Need some branding materials created.",
        requirements: ["Illustrator", "Photoshop", "Branding"],
      },
      {
        id: "6",
        title: "React Native Developer",
        company: "MobileFirst Inc",
        logo: "https://i.pravatar.cc/150?u=tech6",
        location: "San Francisco, CA",
        type: "Full-time",
        category: "Development",
        budget: "$120k - $160k / yr",
        budgetMin: 120000,
        budgetMax: 160000,
        postedAt: "3 days ago",
        description: "Build cross-platform mobile apps for our growing user base.",
        requirements: ["React Native", "TypeScript", "Redux", "iOS", "Android"],
      },
      {
        id: "7",
        title: "Data Scientist",
        company: "DataMinds",
        logo: "https://i.pravatar.cc/150?u=tech7",
        location: "Remote",
        type: "Remote",
        category: "Data Science",
        budget: "$90k - $130k / yr",
        budgetMin: 90000,
        budgetMax: 130000,
        postedAt: "3 days ago",
        description: "Use machine learning models to extract business insights from large datasets.",
        requirements: ["Python", "TensorFlow", "SQL", "Tableau"],
      },
      {
        id: "8",
        title: "DevOps Engineer",
        company: "CloudSys",
        logo: "https://i.pravatar.cc/150?u=tech8",
        location: "Berlin, Germany",
        type: "Full-time",
        category: "Development",
        budget: "$80k - $110k / yr",
        budgetMin: 80000,
        budgetMax: 110000,
        postedAt: "4 days ago",
        description: "Manage CI/CD pipelines and cloud infrastructure for our SaaS platform.",
        requirements: ["Docker", "Kubernetes", "Terraform", "AWS"],
      },
      {
        id: "9",
        title: "Content Writer",
        company: "MediaHub",
        logo: "https://i.pravatar.cc/150?u=tech9",
        location: "Remote",
        type: "Part-time",
        category: "Marketing",
        budget: "$20 - $40 / hr",
        budgetMin: 20,
        budgetMax: 40,
        postedAt: "4 days ago",
        description: "Write engaging articles, blog posts, and marketing copy.",
        requirements: ["Copywriting", "SEO", "WordPress", "Research"],
      },
      {
        id: "10",
        title: "Product Manager",
        company: "Productify",
        logo: "https://i.pravatar.cc/150?u=tech10",
        location: "Austin, TX",
        type: "Full-time",
        category: "Management",
        budget: "$110k - $145k / yr",
        budgetMin: 110000,
        budgetMax: 145000,
        postedAt: "5 days ago",
        description: "Lead product strategy and roadmap for our flagship B2B SaaS application.",
        requirements: ["Agile", "Jira", "Roadmapping", "Stakeholder Management"],
      },
      {
        id: "11",
        title: "Frontend Engineer (Vue.js)",
        company: "VueSoft",
        logo: "https://i.pravatar.cc/150?u=tech11",
        location: "Paris, France",
        type: "Contract",
        category: "Development",
        budget: "$60 - $90 / hr",
        budgetMin: 60,
        budgetMax: 90,
        postedAt: "5 days ago",
        description: "Build responsive Vue.js frontends for enterprise clients.",
        requirements: ["Vue.js", "Nuxt.js", "SCSS", "REST APIs"],
      },
      {
        id: "12",
        title: "HR Recruiter",
        company: "PeopleFirst",
        logo: "https://i.pravatar.cc/150?u=tech12",
        location: "Chicago, IL",
        type: "Full-time",
        category: "HR",
        budget: "$55k - $75k / yr",
        budgetMin: 55000,
        budgetMax: 75000,
        postedAt: "6 days ago",
        description: "Source, screen, and hire top talent for our growing technology company.",
        requirements: ["LinkedIn Recruiter", "ATS Systems", "Interviewing", "Sourcing"],
      },
      {
        id: "13",
        title: "Cybersecurity Analyst",
        company: "SecureNet",
        logo: "https://i.pravatar.cc/150?u=tech13",
        location: "Remote",
        type: "Remote",
        category: "Development",
        budget: "$95k - $135k / yr",
        budgetMin: 95000,
        budgetMax: 135000,
        postedAt: "1 week ago",
        description: "Monitor, detect, and respond to security incidents across our infrastructure.",
        requirements: ["SIEM", "Penetration Testing", "Incident Response", "ISO 27001"],
      },
      {
        id: "14",
        title: "Social Media Manager",
        company: "BrandBoost",
        logo: "https://i.pravatar.cc/150?u=tech14",
        location: "Los Angeles, CA",
        type: "Part-time",
        category: "Marketing",
        budget: "$30k - $50k / yr",
        budgetMin: 30000,
        budgetMax: 50000,
        postedAt: "1 week ago",
        description: "Manage our social media presence across Instagram, Twitter, and LinkedIn.",
        requirements: ["Instagram", "Twitter/X", "Canva", "Analytics"],
      },
      {
        id: "15",
        title: "Machine Learning Engineer",
        company: "AI Ventures",
        logo: "https://i.pravatar.cc/150?u=tech15",
        location: "Seattle, WA",
        type: "Full-time",
        category: "Data Science",
        budget: "$140k - $200k / yr",
        budgetMin: 140000,
        budgetMax: 200000,
        postedAt: "1 week ago",
        description: "Design and deploy production-grade ML models powering our recommendation engine.",
        requirements: ["PyTorch", "MLOps", "Python", "Distributed Training"],
      },
    ],
    proposals: [],
    posts: [
      {
        id: "1",
        authorId: "u1",
        authorName: "Alice Smith",
        authorAvatar: "https://i.pravatar.cc/150?u=a042581f4e29026024d",
        content: "Just launched my new portfolio website! Feedback is always welcome. 🚀\n\nBuilt with Next.js 14, TailwindCSS, and Framer Motion — the animations turned out really smooth!",
        likes: 42,
        comments: 8,
        createdAt: new Date(Date.now() - 3600000).toISOString(),
      },
      {
        id: "2",
        authorId: "u2",
        authorName: "Bob Jones",
        authorAvatar: "https://i.pravatar.cc/150?u=a042581f4e29026704d",
        content: "Anyone know any good Next.js advanced courses? Looking to level up my server component knowledge. 🧠\n\nI've been digging into the App Router lately and it's a game changer for performance.",
        likes: 15,
        comments: 23,
        createdAt: new Date(Date.now() - 7200000).toISOString(),
      },
      {
        id: "3",
        authorId: "u3",
        authorName: "Maria Garcia",
        authorAvatar: "https://i.pravatar.cc/150?u=maria123",
        content: "Excited to share that I just accepted an offer at TechNexus as a Senior UI Engineer! 🎉\n\nThank you to everyone who supported me through my job search. The community here is incredible!",
        likes: 128,
        comments: 34,
        createdAt: new Date(Date.now() - 14400000).toISOString(),
      },
      {
        id: "4",
        authorId: "u4",
        authorName: "David Park",
        authorAvatar: "https://i.pravatar.cc/150?u=david456",
        content: "Hot take: TypeScript is not optional anymore. If you're still writing vanilla JS for production apps in 2025, you're going to have a bad time. 🔥\n\nWhat do you all think?",
        likes: 87,
        comments: 56,
        createdAt: new Date(Date.now() - 86400000).toISOString(),
      },
      {
        id: "5",
        authorId: "u5",
        authorName: "Sarah Chen",
        authorAvatar: "https://i.pravatar.cc/150?u=sarah789",
        content: "Just published my article on AI-powered job search strategies. The landscape is changing so fast — here's how to stay ahead:\n\n1. Leverage AI for resume optimization\n2. Use data analytics to target the right companies\n3. Build in public to showcase your work\n\nFull article in the comments! 👇",
        likes: 203,
        comments: 41,
        createdAt: new Date(Date.now() - 172800000).toISOString(),
      },
    ],
    messages: [
      {
        id: "m1",
        senderId: "u2",
        receiverId: "1",
        text: "Hey! Are you available for a quick chat about the job posting?",
        createdAt: new Date(Date.now() - 1000000).toISOString(),
      }
    ],
    profiles: [
      {
        id: "1",
        name: "Current User",
        title: "Senior Software Engineer",
        avatar: "https://i.pravatar.cc/150?u=current_user",
        bio: "I'm a full stack developer with 5+ years of experience building scalable applications.",
        skills: ["React", "Next.js", "TypeScript", "Node.js"],
        portfolio: ["https://github.com/currentuser", "https://currentuser.dev"],
      }
    ]
  };
}

export const db = globalForDb.mockDb;
