
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Calendar, Clock, User } from "lucide-react";
import { Link } from "react-router-dom";

const Blog = () => {
  const blogPosts = [
    // 2024 Posts
    {
      id: 1,
      title: "The Future of AI in Business: Trends for 2024",
      excerpt: "Exploring how artificial intelligence is reshaping business operations and what companies need to know to stay competitive in the digital age.",
      date: "January 15, 2024",
      author: "AVishKaar Team",
      readTime: "8 min read",
      category: "AI Trends",
      slug: "future-ai-business-2024",
      image: "https://images.unsplash.com/photo-1487058792275-0ad4aaf24ca7?w=800&h=400&fit=crop&crop=center",
      gradient: "from-blue-500 to-purple-600"
    },
    {
      id: 2,
      title: "Machine Learning Best Practices for Enterprise Solutions",
      excerpt: "A comprehensive guide to implementing machine learning in enterprise environments, covering data preparation, model selection, and deployment strategies.",
      date: "April 20, 2024",
      author: "AVishKaar Team",
      readTime: "12 min read",
      category: "Machine Learning",
      slug: "ml-best-practices-enterprise",
      image: "https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?w=800&h=400&fit=crop&crop=center",
      gradient: "from-green-500 to-teal-600"
    },
    {
      id: 3,
      title: "Data Analytics: Turning Information Into Actionable Insights",
      excerpt: "Learn how modern data analytics tools and techniques can transform raw data into strategic business intelligence that drives growth.",
      date: "July 25, 2024",
      author: "AVishKaar Team",
      readTime: "6 min read",
      category: "Analytics",
      slug: "data-analytics-actionable-insights",
      image: "https://images.unsplash.com/photo-1605810230434-7631ac76ec81?w=800&h=400&fit=crop&crop=center",
      gradient: "from-orange-500 to-red-600"
    },
    // 2023 Posts
    {
      id: 4,
      title: "Cloud Computing Revolution: Multi-Cloud Strategies",
      excerpt: "Understanding the benefits and challenges of multi-cloud architectures and how organizations can leverage them for better scalability and resilience.",
      date: "October 12, 2023",
      author: "AVishKaar Team",
      readTime: "10 min read",
      category: "Cloud Computing",
      slug: "cloud-computing-multi-cloud-strategies",
      image: "https://images.unsplash.com/photo-1470813740244-df37b8c1edcb?w=800&h=400&fit=crop&crop=center",
      gradient: "from-indigo-500 to-blue-600"
    },
    {
      id: 5,
      title: "Cybersecurity in the Age of Remote Work",
      excerpt: "Essential cybersecurity measures and best practices for protecting distributed teams and remote work environments in today's digital landscape.",
      date: "June 28, 2023",
      author: "AVishKaar Team",
      readTime: "9 min read",
      category: "Cybersecurity",
      slug: "cybersecurity-remote-work",
      image: "https://images.unsplash.com/photo-1500673922987-e212871fec22?w=800&h=400&fit=crop&crop=center",
      gradient: "from-red-500 to-pink-600"
    },
    {
      id: 6,
      title: "DevOps Transformation: Building Efficient CI/CD Pipelines",
      excerpt: "A deep dive into DevOps practices and how to implement robust continuous integration and deployment pipelines for faster software delivery.",
      date: "March 15, 2023",
      author: "AVishKaar Team",
      readTime: "11 min read",
      category: "DevOps",
      slug: "devops-transformation-cicd",
      image: "https://images.unsplash.com/photo-1487058792275-0ad4aaf24ca7?w=800&h=400&fit=crop&crop=center",
      gradient: "from-purple-500 to-indigo-600"
    },
    // 2022 Posts
    {
      id: 7,
      title: "Blockchain Beyond Cryptocurrency: Real-World Applications",
      excerpt: "Exploring practical blockchain applications in supply chain, healthcare, and finance beyond digital currencies.",
      date: "November 30, 2022",
      author: "AVishKaar Team",
      readTime: "8 min read",
      category: "Blockchain",
      slug: "blockchain-real-world-applications",
      image: "https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?w=800&h=400&fit=crop&crop=center",
      gradient: "from-yellow-500 to-orange-600"
    },
    {
      id: 8,
      title: "IoT and Edge Computing: The Future of Connected Devices",
      excerpt: "How Internet of Things and edge computing are transforming industries and creating new opportunities for innovation.",
      date: "August 18, 2022",
      author: "AVishKaar Team",
      readTime: "7 min read",
      category: "IoT",
      slug: "iot-edge-computing-future",
      image: "https://images.unsplash.com/photo-1605810230434-7631ac76ec81?w=800&h=400&fit=crop&crop=center",
      gradient: "from-teal-500 to-green-600"
    },
    {
      id: 9,
      title: "Microservices Architecture: Scaling Modern Applications",
      excerpt: "Best practices for designing and implementing microservices architecture to build scalable and maintainable applications.",
      date: "May 5, 2022",
      author: "AVishKaar Team",
      readTime: "12 min read",
      category: "Architecture",
      slug: "microservices-architecture-scaling",
      image: "https://images.unsplash.com/photo-1470813740244-df37b8c1edcb?w=800&h=400&fit=crop&crop=center",
      gradient: "from-pink-500 to-red-600"
    },
    {
      id: 10,
      title: "Low-Code/No-Code Platforms: Democratizing Software Development",
      excerpt: "The rise of low-code and no-code platforms and their impact on software development and business process automation.",
      date: "January 22, 2022",
      author: "AVishKaar Team",
      readTime: "6 min read",
      category: "Development",
      slug: "low-code-no-code-platforms",
      image: "https://images.unsplash.com/photo-1500673922987-e212871fec22?w=800&h=400&fit=crop&crop=center",
      gradient: "from-blue-500 to-purple-600"
    },
    // 2021 Posts
    {
      id: 11,
      title: "Digital Transformation: Lessons from the Pandemic",
      excerpt: "How the COVID-19 pandemic accelerated digital transformation and what businesses learned about resilience and adaptability.",
      date: "October 10, 2021",
      author: "AVishKaar Team",
      readTime: "9 min read",
      category: "Digital Transformation",
      slug: "digital-transformation-pandemic-lessons",
      image: "https://images.unsplash.com/photo-1487058792275-0ad4aaf24ca7?w=800&h=400&fit=crop&crop=center",
      gradient: "from-emerald-500 to-teal-600"
    },
    {
      id: 12,
      title: "5G Technology: Revolutionizing Connectivity and Innovation",
      excerpt: "Understanding the impact of 5G networks on business operations, mobile applications, and emerging technologies.",
      date: "June 28, 2021",
      author: "AVishKaar Team",
      readTime: "8 min read",
      category: "5G Technology",
      slug: "5g-technology-revolutionizing-connectivity",
      image: "https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?w=800&h=400&fit=crop&crop=center",
      gradient: "from-violet-500 to-purple-600"
    },
    {
      id: 13,
      title: "Artificial Intelligence Ethics: Building Responsible AI Systems",
      excerpt: "Exploring the ethical considerations in AI development and how to build responsible artificial intelligence systems.",
      date: "March 15, 2021",
      author: "AVishKaar Team",
      readTime: "10 min read",
      category: "AI Ethics",
      slug: "ai-ethics-responsible-systems",
      image: "https://images.unsplash.com/photo-1605810230434-7631ac76ec81?w=800&h=400&fit=crop&crop=center",
      gradient: "from-rose-500 to-pink-600"
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-blue-50">
      <Header />
      
      <div className="pt-16">
        {/* Hero Section */}
        <section className="py-20 bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 relative overflow-hidden">
          <div className="absolute inset-0 bg-black/20"></div>
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
            <h1 className="text-5xl md:text-7xl font-bold mb-8 text-white drop-shadow-lg">
              Our Blog
            </h1>
            <p className="text-xl md:text-2xl text-white/90 max-w-4xl mx-auto leading-relaxed drop-shadow-md">
              Insights, trends, and expertise in AI, ML, analytics, and software development. 
              Stay updated with the latest in technology and business transformation.
            </p>
          </div>
          <div className="absolute -bottom-1 left-0 right-0 h-20 bg-gradient-to-t from-slate-50 to-transparent"></div>
        </section>

        {/* Blog Posts */}
        <section className="py-20 -mt-10">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid gap-8 md:gap-12">
              {blogPosts.map((post) => (
                <Link key={post.id} to={`/blog/${post.slug}`}>
                  <Card className="group hover:shadow-2xl transition-all duration-500 cursor-pointer overflow-hidden border-0 shadow-lg hover:scale-[1.02] bg-white">
                    <div className="relative">
                      <div className="h-64 md:h-80 overflow-hidden">
                        <img 
                          src={post.image} 
                          alt={post.title}
                          className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                        />
                        <div className={`absolute inset-0 bg-gradient-to-t ${post.gradient} opacity-60 group-hover:opacity-40 transition-opacity duration-300`}></div>
                      </div>
                      <div className="absolute top-6 left-6">
                        <span className="inline-block bg-white/90 backdrop-blur-sm text-gray-800 px-4 py-2 rounded-full text-sm font-bold shadow-lg">
                          {post.category}
                        </span>
                      </div>
                    </div>
                    <CardHeader className="p-8">
                      <CardTitle className="text-2xl md:text-3xl mb-4 group-hover:bg-gradient-to-r group-hover:from-blue-600 group-hover:to-purple-600 group-hover:bg-clip-text group-hover:text-transparent transition-all duration-300 leading-tight">
                        {post.title}
                      </CardTitle>
                      <div className="flex flex-wrap gap-6 text-sm text-gray-600">
                        <div className="flex items-center gap-2">
                          <Calendar size={18} className="text-blue-500" />
                          <span className="font-medium">{post.date}</span>
                        </div>
                        <div className="flex items-center gap-2">
                          <User size={18} className="text-purple-500" />
                          <span className="font-medium">{post.author}</span>
                        </div>
                        <div className="flex items-center gap-2">
                          <Clock size={18} className="text-green-500" />
                          <span className="font-medium">{post.readTime}</span>
                        </div>
                      </div>
                    </CardHeader>
                    <CardContent className="px-8 pb-8">
                      <p className="text-gray-700 leading-relaxed text-lg">
                        {post.excerpt}
                      </p>
                    </CardContent>
                  </Card>
                </Link>
              ))}
            </div>
          </div>
        </section>
      </div>

      <Footer />
    </div>
  );
};

export default Blog;
