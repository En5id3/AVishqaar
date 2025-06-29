import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Calendar, Clock, User, ArrowRight, TrendingUp, Star } from "lucide-react";
import { Link } from "react-router-dom";
import { useState } from "react";
import { useToast } from "@/hooks/use-toast";

const Blog = () => {
  const [email, setEmail] = useState("");
  const { toast } = useToast();

  const handleNewsletterSignup = (e: React.FormEvent) => {
    e.preventDefault();
    if (email) {
      toast({
        title: "Newsletter Subscription",
        description: "Thank you for subscribing! You'll receive our latest insights soon.",
      });
      setEmail("");
    } else {
      toast({
        title: "Email Required",
        description: "Please enter your email address to subscribe.",
        variant: "destructive",
      });
    }
  };

  const featuredPosts = [
    {
      id: 1,
      title: "The Future of AI in Business: Trends for 2024",
      excerpt: "Exploring how artificial intelligence is reshaping business operations and what companies need to know to stay competitive in the digital age. From machine learning automation to predictive analytics, discover the key trends driving AI adoption across industries.",
      date: "January 15, 2024",
      author: "AVishqaar Team",
      readTime: "8 min read",
      category: "AI Trends",
      slug: "future-ai-business-2024",
      image: "https://images.unsplash.com/photo-1487058792275-0ad4aaf24ca7?w=800&h=400&fit=crop&crop=center",
      featured: true,
      views: "12.5K",
      trending: true
    },
    {
      id: 2,
      title: "Machine Learning Best Practices for Enterprise Solutions",
      excerpt: "A comprehensive guide to implementing machine learning in enterprise environments, covering data preparation, model selection, and deployment strategies. Learn from real-world case studies and expert insights.",
      date: "April 20, 2024",
      author: "AVishqaar Team",
      readTime: "12 min read",
      category: "Machine Learning",
      slug: "ml-best-practices-enterprise",
      image: "https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?w=800&h=400&fit=crop&crop=center",
      featured: true,
      views: "8.9K",
      trending: false
    }
  ];

  const blogPosts = [
    {
      id: 3,
      title: "Data Analytics: Turning Information Into Actionable Insights",
      excerpt: "Learn how modern data analytics tools and techniques can transform raw data into strategic business intelligence that drives growth and innovation.",
      date: "July 25, 2024",
      author: "AVishqaar Team",
      readTime: "6 min read",
      category: "Analytics",
      slug: "data-analytics-actionable-insights",
      image: "https://images.unsplash.com/photo-1605810230434-7631ac76ec81?w=800&h=400&fit=crop&crop=center",
      views: "15.2K",
      trending: true
    },
    {
      id: 4,
      title: "Cloud Computing Revolution: Multi-Cloud Strategies",
      excerpt: "Understanding the benefits and challenges of multi-cloud architectures and how organizations can leverage them for better scalability and resilience.",
      date: "October 12, 2023",
      author: "AVishqaar Team",
      readTime: "10 min read",
      category: "Cloud Computing",
      slug: "cloud-computing-multi-cloud-strategies",
      image: "https://images.unsplash.com/photo-1470813740244-df37b8c1edcb?w=800&h=400&fit=crop&crop=center",
      views: "9.7K",
      trending: false
    },
    {
      id: 5,
      title: "Cybersecurity in the Age of Remote Work",
      excerpt: "Essential cybersecurity measures and best practices for protecting distributed teams and remote work environments in today's digital landscape.",
      date: "June 28, 2023",
      author: "AVishqaar Team",
      readTime: "9 min read",
      category: "Cybersecurity",
      slug: "cybersecurity-remote-work",
      image: "https://images.unsplash.com/photo-1500673922987-e212871fec22?w=800&h=400&fit=crop&crop=center",
      views: "11.3K",
      trending: true
    },
    {
      id: 6,
      title: "DevOps Transformation: Building Efficient CI/CD Pipelines",
      excerpt: "A deep dive into DevOps practices and how to implement robust continuous integration and deployment pipelines for faster software delivery.",
      date: "March 15, 2023",
      author: "AVishqaar Team",
      readTime: "11 min read",
      category: "DevOps",
      slug: "devops-transformation-cicd",
      image: "https://images.unsplash.com/photo-1487058792275-0ad4aaf24ca7?w=800&h=400&fit=crop&crop=center",
      views: "7.8K",
      trending: false
    },
    {
      id: 7,
      title: "Blockchain Beyond Cryptocurrency: Real-World Applications",
      excerpt: "Exploring practical blockchain applications in supply chain, healthcare, and finance beyond digital currencies.",
      date: "November 30, 2022",
      author: "AVishqaar Team",
      readTime: "8 min read",
      category: "Blockchain",
      slug: "blockchain-real-world-applications",
      image: "https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?w=800&h=400&fit=crop&crop=center",
      views: "13.1K",
      trending: true
    },
    {
      id: 8,
      title: "IoT and Edge Computing: The Future of Connected Devices",
      excerpt: "How Internet of Things and edge computing are transforming industries and creating new opportunities for innovation.",
      date: "August 18, 2022",
      author: "AVishqaar Team",
      readTime: "7 min read",
      category: "IoT",
      slug: "iot-edge-computing-future",
      image: "https://images.unsplash.com/photo-1605810230434-7631ac76ec81?w=800&h=400&fit=crop&crop=center",
      views: "6.4K",
      trending: false
    },
    {
      id: 9,
      title: "Microservices Architecture: Scaling Modern Applications",
      excerpt: "Best practices for designing and implementing microservices architecture to build scalable and maintainable applications.",
      date: "May 5, 2022",
      author: "AVishqaar Team",
      readTime: "12 min read",
      category: "Architecture",
      slug: "microservices-architecture-scaling",
      image: "https://images.unsplash.com/photo-1470813740244-df37b8c1edcb?w=800&h=400&fit=crop&crop=center",
      views: "8.2K",
      trending: false
    },
    {
      id: 10,
      title: "Low-Code/No-Code Platforms: Democratizing Software Development",
      excerpt: "The rise of low-code and no-code platforms and their impact on software development and business process automation.",
      date: "January 22, 2022",
      author: "AVishqaar Team",
      readTime: "6 min read",
      category: "Development",
      slug: "low-code-no-code-platforms",
      image: "https://images.unsplash.com/photo-1500673922987-e212871fec22?w=800&h=400&fit=crop&crop=center",
      views: "10.5K",
      trending: true
    },
    {
      id: 11,
      title: "Digital Transformation: Lessons from the Pandemic",
      excerpt: "How the COVID-19 pandemic accelerated digital transformation and what businesses learned about resilience and adaptability.",
      date: "October 10, 2021",
      author: "AVishqaar Team",
      readTime: "9 min read",
      category: "Digital Transformation",
      slug: "digital-transformation-pandemic-lessons",
      image: "https://images.unsplash.com/photo-1487058792275-0ad4aaf24ca7?w=800&h=400&fit=crop&crop=center",
      views: "14.8K",
      trending: true
    },
    {
      id: 12,
      title: "5G Technology: Revolutionizing Connectivity and Innovation",
      excerpt: "Understanding the impact of 5G networks on business operations, mobile applications, and emerging technologies.",
      date: "June 28, 2021",
      author: "AVishqaar Team",
      readTime: "8 min read",
      category: "5G Technology",
      slug: "5g-technology-revolutionizing-connectivity",
      image: "https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?w=800&h=400&fit=crop&crop=center",
      views: "9.1K",
      trending: false
    },
    {
      id: 13,
      title: "Artificial Intelligence Ethics: Building Responsible AI Systems",
      excerpt: "Exploring the ethical considerations in AI development and how to build responsible artificial intelligence systems.",
      date: "March 15, 2021",
      author: "AVishqaar Team",
      readTime: "10 min read",
      category: "AI Ethics",
      slug: "ai-ethics-responsible-systems",
      image: "https://images.unsplash.com/photo-1605810230434-7631ac76ec81?w=800&h=400&fit=crop&crop=center",
      views: "12.7K",
      trending: true
    }
  ];

  const categories = [
    { name: "AI Trends", count: 3, color: "bg-blue-100 text-blue-800" },
    { name: "Machine Learning", count: 2, color: "bg-green-100 text-green-800" },
    { name: "Analytics", count: 2, color: "bg-orange-100 text-orange-800" },
    { name: "Cloud Computing", count: 1, color: "bg-indigo-100 text-indigo-800" },
    { name: "Cybersecurity", count: 1, color: "bg-red-100 text-red-800" },
    { name: "DevOps", count: 1, color: "bg-purple-100 text-purple-800" },
    { name: "Blockchain", count: 1, color: "bg-yellow-100 text-yellow-800" },
    { name: "IoT", count: 1, color: "bg-teal-100 text-teal-800" }
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      <Header />
      
      <div className="pt-16">
        {/* Hero Section */}
        <section className="apple-section bg-white border-b border-gray-200">
          <div className="apple-container">
            <div className="text-center mb-8">
              <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
                Tech Insights & Analysis
              </h1>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Stay ahead with the latest insights in AI, ML, analytics, and software development. 
                Expert analysis, trends, and practical guidance for modern businesses.
              </p>
            </div>

            {/* Categories */}
            <div className="flex flex-wrap justify-center gap-3 mb-8">
              {categories.map((category, index) => (
                <span
                  key={index}
                  className={`px-4 py-2 rounded-full text-sm font-medium ${category.color} hover:opacity-80 transition-opacity cursor-pointer`}
                >
                  {category.name} ({category.count})
                </span>
              ))}
            </div>
          </div>
        </section>

        {/* Featured Posts */}
        <section className="apple-section bg-white">
          <div className="apple-container">
            <div className="flex items-center gap-2 mb-8">
              <Star className="w-5 h-5 text-yellow-500" />
              <h2 className="text-2xl font-bold text-gray-900">Featured Stories</h2>
            </div>
            
            <div className="grid lg:grid-cols-2 gap-8 mb-12">
              {featuredPosts.map((post) => (
                <Link key={post.id} to={`/blog/${post.slug}`}>
                  <Card className="apple-card group hover:shadow-xl transition-all duration-300 cursor-pointer overflow-hidden">
                    <div className="relative">
                      <div className="h-64 overflow-hidden">
                        <img 
                          src={post.image} 
                          alt={post.title}
                          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
                      </div>
                      <div className="absolute top-4 left-4 flex gap-2">
                        <span className="inline-block bg-white/90 backdrop-blur-sm text-gray-800 px-3 py-1 rounded-full text-xs font-semibold shadow-sm">
                          {post.category}
                        </span>
                        {post.trending && (
                          <span className="inline-flex items-center gap-1 bg-red-500 text-white px-3 py-1 rounded-full text-xs font-semibold shadow-sm">
                            <TrendingUp size={12} />
                            Trending
                          </span>
                        )}
                      </div>
                      <div className="absolute bottom-4 right-4 text-white text-sm font-medium">
                        {post.views} views
                      </div>
                    </div>
                    <CardHeader className="p-6">
                      <CardTitle className="text-xl font-bold text-gray-900 mb-3 group-hover:text-blue-600 transition-colors duration-200 line-clamp-2">
                        {post.title}
                      </CardTitle>
                      <p className="text-gray-600 text-sm leading-relaxed line-clamp-3 mb-4">
                        {post.excerpt}
                      </p>
                      <div className="flex items-center justify-between text-xs text-gray-500">
                        <div className="flex items-center gap-4">
                          <div className="flex items-center gap-1">
                            <Calendar size={14} className="text-blue-500" />
                            <span className="font-medium">{post.date}</span>
                          </div>
                          <div className="flex items-center gap-1">
                            <Clock size={14} className="text-green-500" />
                            <span className="font-medium">{post.readTime}</span>
                          </div>
                        </div>
                        <div className="flex items-center gap-1">
                          <User size={14} className="text-purple-500" />
                          <span className="font-medium">{post.author}</span>
                        </div>
                      </div>
                    </CardHeader>
                  </Card>
                </Link>
              ))}
            </div>
          </div>
        </section>

        {/* Latest Posts */}
        <section className="apple-section bg-gray-50">
          <div className="apple-container">
            <div className="flex items-center justify-between mb-8">
              <h2 className="text-2xl font-bold text-gray-900">Latest Posts</h2>
              <div className="flex items-center gap-2 text-blue-600 hover:text-blue-700 transition-colors cursor-pointer">
                <span className="text-sm font-medium">View All</span>
                <ArrowRight size={16} />
              </div>
            </div>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {blogPosts.map((post) => (
                <Link key={post.id} to={`/blog/${post.slug}`}>
                  <Card className="apple-card group hover:shadow-lg transition-all duration-300 hover:scale-105 cursor-pointer overflow-hidden bg-white">
                    <div className="relative">
                      <div className="h-48 overflow-hidden">
                        <img 
                          src={post.image} 
                          alt={post.title}
                          className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent"></div>
                      </div>
                      <div className="absolute top-3 left-3 flex gap-2">
                        <span className="inline-block bg-white/90 backdrop-blur-sm text-gray-800 px-2 py-1 rounded-full text-xs font-semibold shadow-sm">
                          {post.category}
                        </span>
                        {post.trending && (
                          <span className="inline-flex items-center gap-1 bg-red-500 text-white px-2 py-1 rounded-full text-xs font-semibold shadow-sm">
                            <TrendingUp size={10} />
                            Hot
                          </span>
                        )}
                      </div>
                      <div className="absolute bottom-3 right-3 text-white text-xs font-medium bg-black/50 px-2 py-1 rounded">
                        {post.views}
                      </div>
                    </div>
                    <CardHeader className="p-5 pb-3">
                      <CardTitle className="text-lg font-semibold text-gray-900 mb-2 line-clamp-2 group-hover:text-blue-600 transition-colors duration-200">
                        {post.title}
                      </CardTitle>
                      <p className="text-gray-600 text-sm leading-relaxed line-clamp-2 mb-3">
                        {post.excerpt}
                      </p>
                      <div className="flex items-center justify-between text-xs text-gray-500">
                        <div className="flex items-center gap-3">
                          <div className="flex items-center gap-1">
                            <Calendar size={12} className="text-blue-500" />
                            <span className="font-medium">{post.date}</span>
                          </div>
                          <div className="flex items-center gap-1">
                            <Clock size={12} className="text-green-500" />
                            <span className="font-medium">{post.readTime}</span>
                          </div>
                        </div>
                        <div className="flex items-center gap-1">
                          <User size={12} className="text-purple-500" />
                          <span className="font-medium">{post.author}</span>
                        </div>
                      </div>
                    </CardHeader>
                  </Card>
                </Link>
              ))}
            </div>
          </div>
        </section>

        {/* Newsletter Signup */}
        <section className="apple-section bg-blue-600">
          <div className="apple-container text-center">
            <div className="max-w-2xl mx-auto">
              <h2 className="text-3xl font-bold text-white mb-4">
                Stay Updated with Tech Insights
              </h2>
              <p className="text-blue-100 text-lg mb-8">
                Get the latest articles, trends, and insights delivered to your inbox weekly.
              </p>
              <form onSubmit={handleNewsletterSignup} className="flex flex-col sm:flex-row gap-4 justify-center">
                <input
                  type="email"
                  placeholder="Enter your email address"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="flex-1 max-w-md px-4 py-3 rounded-lg border-0 focus:ring-2 focus:ring-white focus:ring-opacity-50"
                />
                <button 
                  type="submit"
                  className="bg-white text-blue-600 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors"
                >
                  Subscribe
                </button>
              </form>
            </div>
          </div>
        </section>
      </div>

      <Footer />
    </div>
  );
};

export default Blog;
