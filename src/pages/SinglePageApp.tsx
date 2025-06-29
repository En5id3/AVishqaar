import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import { 
  Brain, 
  BarChart3, 
  Database, 
  Code, 
  Bot, 
  TrendingUp, 
  Shield, 
  Zap,
  ArrowRight,
  Users,
  Target,
  Award,
  Lightbulb,
  Mail,
  Phone,
  MapPin,
  Send,
  Calendar,
  Clock,
  User,
  Star,
  Menu,
  X,
  ChevronDown,
  Play,
  Sparkles,
  Globe,
  Rocket,
  Heart
} from "lucide-react";
import { useToast } from "@/hooks/use-toast";

const SinglePageApp = () => {
  const [selectedSolution, setSelectedSolution] = useState(null);
  const [activeSection, setActiveSection] = useState("hero");
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    company: "",
    message: ""
  });
  const { toast } = useToast();

  // Smooth scroll to section
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setActiveSection(sectionId);
      setIsMenuOpen(false);
    }
  };

  // Handle scroll for active section detection
  useEffect(() => {
    const handleScroll = () => {
      const sections = ['hero', 'solutions', 'about', 'blog', 'contact'];
      const scrollPosition = window.scrollY + 100;

      for (const section of sections) {
        const element = document.getElementById(section);
        if (element) {
          const { offsetTop, offsetHeight } = element;
          if (scrollPosition >= offsetTop && scrollPosition < offsetTop + offsetHeight) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    const subject = `Contact from ${formData.name} - ${formData.company}`;
    const body = `Name: ${formData.name}\nEmail: ${formData.email}\nCompany: ${formData.company}\n\nMessage:\n${formData.message}`;
    const mailtoLink = `mailto:contact@avishqaar.com?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
    
    window.location.href = mailtoLink;
    
    toast({
      title: "Email client opened",
      description: "Your email client should open with the message ready to send.",
    });
    
    setFormData({ name: "", email: "", company: "", message: "" });
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const solutions = [
    {
      category: "AI Solutions",
      icon: Brain,
      description: "Intelligent automation and AI-powered applications",
      gradient: "from-blue-500 to-purple-600",
      items: [
        {
          title: "Computer Vision",
          description: "Advanced image recognition and analysis systems",
          image: "https://images.unsplash.com/photo-1485827404703-89b55fcc595e?w=400&h=250&fit=crop",
          projects: [
            {
              name: "Smart Retail Analytics",
              description: "AI-powered customer behavior analysis for retail stores using computer vision to track foot traffic, dwell time, and product interaction patterns.",
              image: "https://images.unsplash.com/photo-1441986300917-64674bd600d8?w=400&h=250&fit=crop",
              technologies: ["OpenCV", "TensorFlow", "Python", "AWS"]
            },
            {
              name: "Medical Image Analysis",
              description: "Automated diagnosis system for medical imaging, detecting anomalies in X-rays, MRIs, and CT scans with 95% accuracy.",
              image: "https://images.unsplash.com/photo-1576091160399-112ba8d25d1f?w=400&h=250&fit=crop",
              technologies: ["PyTorch", "DICOM", "React", "FastAPI"]
            }
          ]
        },
        {
          title: "Natural Language Processing",
          description: "Text analysis, chatbots, and language understanding",
          image: "https://images.unsplash.com/photo-1677442136019-21780ecad995?w=400&h=250&fit=crop",
          projects: [
            {
              name: "Smart Document Assistant",
              description: "AI-powered document processing system that extracts key information, summarizes content, and answers questions about uploaded documents.",
              image: "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?w=400&h=250&fit=crop",
              technologies: ["GPT-4", "LangChain", "Vector DB", "Streamlit"]
            }
          ]
        }
      ]
    },
    {
      category: "ML Solutions",
      icon: Bot,
      description: "Machine learning models and predictive analytics",
      gradient: "from-green-500 to-teal-600",
      items: [
        {
          title: "Predictive Analytics",
          description: "Forecast trends and business outcomes",
          image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=400&h=250&fit=crop",
          projects: [
            {
              name: "Sales Forecasting Model",
              description: "Advanced time series analysis to predict sales trends, seasonal patterns, and revenue projections with 92% accuracy for retail chains.",
              image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=400&h=250&fit=crop",
              technologies: ["Prophet", "XGBoost", "Pandas", "Plotly"]
            }
          ]
        }
      ]
    },
    {
      category: "Analytics",
      icon: BarChart3,
      description: "Data visualization and business intelligence",
      gradient: "from-orange-500 to-red-600",
      items: [
        {
          title: "Business Intelligence",
          description: "Real-time dashboards and KPI tracking",
          image: "https://images.unsplash.com/photo-1605810230434-7631ac76ec81?w=400&h=250&fit=crop",
          projects: [
            {
              name: "Executive Dashboard",
              description: "Comprehensive business intelligence platform providing real-time KPI tracking, financial metrics, and operational insights for C-level executives.",
              image: "https://images.unsplash.com/photo-1605810230434-7631ac76ec81?w=400&h=250&fit=crop",
              technologies: ["Power BI", "SQL Server", "Azure", "DAX"]
            }
          ]
        }
      ]
    },
    {
      category: "Software Solutions",
      icon: Code,
      description: "Custom software development and enterprise applications",
      gradient: "from-purple-500 to-indigo-600",
      items: [
        {
          title: "Web Applications",
          description: "Modern, responsive web solutions",
          image: "https://images.unsplash.com/photo-1498050108023-c5249f4df085?w=400&h=250&fit=crop",
          projects: [
            {
              name: "E-learning Platform",
              description: "Comprehensive online learning management system with video streaming, progress tracking, and interactive assessments for educational institutions.",
              image: "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?w=400&h=250&fit=crop",
              technologies: ["React", "Node.js", "PostgreSQL", "AWS S3"]
            }
          ]
        }
      ]
    }
  ];

  const stats = [
    {
      icon: Users,
      number: "500+",
      label: "Happy Clients",
      description: "Trusted by businesses worldwide"
    },
    {
      icon: Target,
      number: "1000+",
      label: "Projects Completed",
      description: "Successful implementations"
    },
    {
      icon: Award,
      number: "50+",
      label: "Team Experts",
      description: "Skilled professionals"
    },
    {
      icon: Lightbulb,
      number: "24/7",
      label: "Support",
      description: "Always here to help"
    }
  ];

  const blogPosts = [
    {
      id: 1,
      title: "The Future of AI in Business: Trends for 2024",
      excerpt: "Exploring how artificial intelligence is reshaping business operations and what companies need to know to stay competitive in the digital age.",
      date: "January 15, 2024",
      author: "AVishqaar Team",
      readTime: "8 min read",
      category: "AI Trends",
      image: "https://images.unsplash.com/photo-1487058792275-0ad4aaf24ca7?w=800&h=400&fit=crop&crop=center",
      trending: true
    },
    {
      id: 2,
      title: "Machine Learning Best Practices for Enterprise Solutions",
      excerpt: "A comprehensive guide to implementing machine learning in enterprise environments, covering data preparation, model selection, and deployment strategies.",
      date: "April 20, 2024",
      author: "AVishqaar Team",
      readTime: "12 min read",
      category: "Machine Learning",
      image: "https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?w=800&h=400&fit=crop&crop=center",
      trending: false
    },
    {
      id: 3,
      title: "Data Analytics: Turning Information Into Actionable Insights",
      excerpt: "Learn how modern data analytics tools and techniques can transform raw data into strategic business intelligence that drives growth and innovation.",
      date: "July 25, 2024",
      author: "AVishqaar Team",
      readTime: "6 min read",
      category: "Analytics",
      image: "https://images.unsplash.com/photo-1605810230434-7631ac76ec81?w=800&h=400&fit=crop&crop=center",
      trending: true
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-100">
      {/* Floating Navigation */}
      <nav className="fixed top-6 left-1/2 transform -translate-x-1/2 z-50 bg-white/90 backdrop-blur-md rounded-full px-6 py-3 shadow-lg border border-white/20">
        <div className="flex items-center space-x-8">
          <div className="text-xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
            AVishqaar
          </div>
          
          <div className="hidden md:flex items-center space-x-6">
            {[
              { id: 'hero', label: 'Home' },
              { id: 'solutions', label: 'Solutions' },
              { id: 'about', label: 'About' },
              { id: 'blog', label: 'Insights' },
              { id: 'contact', label: 'Contact' }
            ].map((item) => (
              <button
                key={item.id}
                onClick={() => scrollToSection(item.id)}
                className={`text-sm font-medium transition-all duration-200 hover:text-blue-600 ${
                  activeSection === item.id 
                    ? 'text-blue-600 border-b-2 border-blue-600 pb-1' 
                    : 'text-gray-600'
                }`}
              >
                {item.label}
              </button>
            ))}
          </div>

          <button
            className="md:hidden p-2"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X size={20} /> : <Menu size={20} />}
          </button>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden absolute top-full left-0 right-0 mt-2 bg-white rounded-2xl shadow-xl border border-gray-200 py-4">
            {[
              { id: 'hero', label: 'Home' },
              { id: 'solutions', label: 'Solutions' },
              { id: 'about', label: 'About' },
              { id: 'blog', label: 'Insights' },
              { id: 'contact', label: 'Contact' }
            ].map((item) => (
              <button
                key={item.id}
                onClick={() => scrollToSection(item.id)}
                className="block w-full text-left px-6 py-3 text-gray-600 hover:text-blue-600 hover:bg-blue-50 transition-colors"
              >
                {item.label}
              </button>
            ))}
          </div>
        )}
      </nav>

      {/* Hero Section */}
      <section id="hero" className="min-h-screen flex items-center justify-center relative overflow-hidden">
        {/* Animated Background Elements */}
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute top-20 left-10 w-72 h-72 bg-gradient-to-br from-blue-400/20 to-purple-400/20 rounded-full blur-3xl animate-pulse"></div>
          <div className="absolute bottom-20 right-10 w-96 h-96 bg-gradient-to-br from-pink-400/20 to-orange-400/20 rounded-full blur-3xl animate-pulse delay-1000"></div>
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-gradient-to-br from-indigo-400/10 to-cyan-400/10 rounded-full blur-3xl animate-pulse delay-500"></div>
        </div>

        <div className="container mx-auto px-4 text-center relative z-10">
          <div className="max-w-5xl mx-auto">
            {/* Animated Badge */}
            <div className="inline-flex items-center gap-2 bg-white/80 backdrop-blur-sm rounded-full px-6 py-3 mb-8 shadow-lg border border-white/20">
              <Sparkles className="w-5 h-5 text-yellow-500" />
              <span className="text-sm font-medium text-gray-700">Transforming Business with AI</span>
              <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
            </div>

            {/* Main Headline */}
            <h1 className="text-6xl md:text-8xl font-bold mb-8 leading-tight">
              <span className="bg-gradient-to-r from-gray-900 via-blue-900 to-purple-900 bg-clip-text text-transparent">
                AI Solutions.
              </span>
              <br />
              <span className="bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 bg-clip-text text-transparent animate-pulse">
                Reimagined.
              </span>
            </h1>
            
            {/* Subtitle */}
            <p className="text-xl md:text-2xl text-gray-600 mb-12 leading-relaxed max-w-4xl mx-auto">
              Empowering enterprises with cutting-edge AI, Machine Learning, and Analytics. 
              Transform your business with intelligent automation and data-driven insights.
            </p>
            
            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-6 justify-center items-center mb-16">
              <Button 
                className="bg-gradient-to-r from-blue-600 to-purple-600 text-white px-10 py-6 text-lg rounded-full hover:from-blue-700 hover:to-purple-700 transform hover:scale-105 transition-all duration-200 shadow-xl"
                onClick={() => scrollToSection('solutions')}
              >
                <Rocket className="mr-2" size={20} />
                Explore Solutions
                <ArrowRight className="ml-2" size={20} />
              </Button>
              <Button 
                variant="outline"
                className="border-2 border-gray-300 text-gray-700 px-10 py-6 text-lg rounded-full hover:bg-gray-50 transform hover:scale-105 transition-all duration-200 shadow-lg"
                onClick={() => scrollToSection('about')}
              >
                <Play className="mr-2" size={20} />
                Learn More
              </Button>
            </div>

            {/* Floating Stats */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-4xl mx-auto">
              {stats.map((stat, index) => (
                <div key={index} className="bg-white/80 backdrop-blur-sm rounded-2xl p-6 shadow-lg border border-white/20 hover:shadow-xl transition-all duration-300 transform hover:scale-105">
                  <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-purple-600 rounded-full mx-auto mb-4 flex items-center justify-center">
                    <stat.icon className="w-6 h-6 text-white" />
                  </div>
                  <div className="text-2xl font-bold text-gray-900 mb-1">
                    {stat.number}
                  </div>
                  <div className="text-sm font-medium text-gray-700">
                    {stat.label}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Scroll Indicator */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
          <ChevronDown className="w-6 h-6 text-gray-400" />
        </div>
      </section>

      {/* Solutions Section */}
      <section id="solutions" className="py-24 relative">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-5xl md:text-6xl font-bold mb-6">
              <span className="bg-gradient-to-r from-gray-900 to-blue-900 bg-clip-text text-transparent">
                Our Solutions
              </span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Comprehensive AI, ML, and Analytics solutions designed to transform your business operations and drive growth.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {solutions.map((solution, index) => (
              <div key={index} className="space-y-6">
                {/* Category Header */}
                <div className="text-center">
                  <div className={`w-20 h-20 bg-gradient-to-br ${solution.gradient} rounded-2xl mx-auto mb-6 flex items-center justify-center shadow-lg transform hover:scale-110 transition-all duration-300`}>
                    <solution.icon className="w-10 h-10 text-white" />
                  </div>
                  <h3 className="text-2xl font-bold text-gray-900 mb-3">
                    {solution.category}
                  </h3>
                  <p className="text-gray-600">
                    {solution.description}
                  </p>
                </div>

                {/* Solution Items */}
                <div className="space-y-4">
                  {solution.items.map((item, itemIndex) => (
                    <Card 
                      key={itemIndex} 
                      className="bg-white/80 backdrop-blur-sm border border-white/20 shadow-lg hover:shadow-xl cursor-pointer transition-all duration-300 hover:scale-105 rounded-2xl overflow-hidden"
                      onClick={() => setSelectedSolution(item)}
                    >
                      <div className="h-32 overflow-hidden">
                        <img 
                          src={item.image} 
                          alt={item.title}
                          className="w-full h-full object-cover hover:scale-110 transition-transform duration-500"
                        />
                      </div>
                      <CardHeader className="p-4">
                        <CardTitle className="text-lg font-bold text-gray-900 mb-2">
                          {item.title}
                        </CardTitle>
                        <p className="text-gray-600 text-sm">
                          {item.description}
                        </p>
                      </CardHeader>
                    </Card>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-24 bg-white/50 backdrop-blur-sm">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            {/* Content */}
            <div className="space-y-8">
              <div>
                <h2 className="text-5xl md:text-6xl font-bold mb-6">
                  <span className="bg-gradient-to-r from-gray-900 to-purple-900 bg-clip-text text-transparent">
                    About AVishqaar
                  </span>
                </h2>
                <div className="space-y-6 text-lg text-gray-600 leading-relaxed">
                  <p>
                    AVishqaar is a leading technology company specializing in AI, Machine Learning, Analytics, and Software Solutions. We empower businesses to harness the power of data and artificial intelligence to drive growth and innovation.
                  </p>
                  <p>
                    Our team of experts combines deep technical expertise with industry knowledge to deliver cutting-edge solutions that transform how businesses operate and compete in the digital age.
                  </p>
                  <p>
                    From startups to Fortune 500 companies, we've helped organizations across industries leverage technology to achieve their goals and stay ahead of the competition.
                  </p>
                </div>
              </div>

              {/* Enhanced Stats Grid */}
              <div className="grid grid-cols-2 gap-6">
                {stats.map((stat, index) => (
                  <div key={index} className="bg-gradient-to-br from-white to-blue-50 p-6 rounded-2xl shadow-lg border border-white/20 hover:shadow-xl transition-all duration-300 transform hover:scale-105">
                    <div className={`w-12 h-12 bg-gradient-to-br ${index % 2 === 0 ? 'from-blue-500 to-purple-600' : 'from-green-500 to-teal-600'} rounded-full mx-auto mb-4 flex items-center justify-center`}>
                      <stat.icon className="w-6 h-6 text-white" />
                    </div>
                    <div className="text-center">
                      <div className="text-3xl font-bold text-gray-900 mb-2">
                        {stat.number}
                      </div>
                      <div className="text-sm font-semibold text-gray-900 mb-1">
                        {stat.label}
                      </div>
                      <div className="text-xs text-gray-600">
                        {stat.description}
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Enhanced Visual Element */}
            <div className="relative">
              <div className="w-full h-96 bg-gradient-to-br from-blue-100 via-purple-100 to-pink-100 rounded-3xl flex items-center justify-center overflow-hidden shadow-2xl">
                <div className="absolute inset-0 bg-gradient-to-br from-blue-500/20 to-purple-500/20"></div>
                <div className="relative z-10 text-center p-8">
                  <div className="w-24 h-24 bg-gradient-to-br from-blue-600 to-purple-600 rounded-full mx-auto mb-6 flex items-center justify-center shadow-lg">
                    <Zap className="w-12 h-12 text-white" />
                  </div>
                  <h3 className="text-3xl font-bold text-gray-900 mb-4">Innovation at Scale</h3>
                  <p className="text-gray-700 max-w-sm leading-relaxed">
                    We believe in the power of technology to solve complex business challenges and create meaningful impact.
                  </p>
                </div>
              </div>
              
              {/* Enhanced Floating Elements */}
              <div className="absolute -top-6 -right-6 w-24 h-24 bg-gradient-to-br from-yellow-400 to-orange-500 rounded-full opacity-70 animate-pulse"></div>
              <div className="absolute -bottom-6 -left-6 w-20 h-20 bg-gradient-to-br from-green-400 to-teal-500 rounded-full opacity-70 animate-pulse delay-1000"></div>
              <div className="absolute top-1/2 -right-12 w-16 h-16 bg-gradient-to-br from-pink-400 to-red-500 rounded-full opacity-60 animate-pulse delay-500"></div>
            </div>
          </div>
        </div>
      </section>

      {/* Blog/Insights Section */}
      <section id="blog" className="py-24">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-5xl md:text-6xl font-bold mb-6">
              <span className="bg-gradient-to-r from-gray-900 to-indigo-900 bg-clip-text text-transparent">
                Latest Insights
              </span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Stay ahead with expert insights, trends, and analysis in AI, ML, and technology.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {blogPosts.map((post) => (
              <Card key={post.id} className="bg-white/80 backdrop-blur-sm border border-white/20 shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105 rounded-2xl overflow-hidden group">
                <div className="relative">
                  <div className="h-48 overflow-hidden">
                    <img 
                      src={post.image} 
                      alt={post.title}
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
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
                </div>
                <CardHeader className="p-6">
                  <CardTitle className="text-xl font-bold text-gray-900 mb-3 line-clamp-2 group-hover:text-blue-600 transition-colors duration-200">
                    {post.title}
                  </CardTitle>
                  <p className="text-gray-600 text-sm leading-relaxed line-clamp-3 mb-4">
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
                  </div>
                </CardHeader>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-24 bg-gradient-to-br from-blue-50 to-indigo-100">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-5xl md:text-6xl font-bold mb-6">
              <span className="bg-gradient-to-r from-gray-900 to-blue-900 bg-clip-text text-transparent">
                Get In Touch
              </span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Ready to transform your business with AI and technology? Let's discuss your project and how we can help you achieve your goals.
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
            {/* Contact Information */}
            <div className="space-y-8">
              <Card className="bg-white/80 backdrop-blur-sm border border-white/20 shadow-lg rounded-2xl">
                <CardHeader>
                  <CardTitle className="text-2xl font-bold text-gray-900">
                    Contact Information
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-6">
                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-purple-600 rounded-full flex items-center justify-center">
                      <Mail className="w-6 h-6 text-white" />
                    </div>
                    <div>
                      <div className="font-semibold text-gray-900">Email</div>
                      <div className="text-gray-600">contact@avishqaar.com</div>
                    </div>
                  </div>
                  
                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 bg-gradient-to-br from-green-500 to-teal-600 rounded-full flex items-center justify-center">
                      <Phone className="w-6 h-6 text-white" />
                    </div>
                    <div>
                      <div className="font-semibold text-gray-900">Phone</div>
                      <div className="text-gray-600">+91 8219973883</div>
                    </div>
                  </div>
                  
                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 bg-gradient-to-br from-orange-500 to-red-600 rounded-full flex items-center justify-center">
                      <MapPin className="w-6 h-6 text-white" />
                    </div>
                    <div>
                      <div className="font-semibold text-gray-900">Location</div>
                      <div className="text-gray-600">Noida, India</div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>

            {/* Contact Form */}
            <Card className="bg-white/80 backdrop-blur-sm border border-white/20 shadow-lg rounded-2xl">
              <CardHeader>
                <CardTitle className="text-2xl font-bold text-gray-900">
                  Send us a Message
                </CardTitle>
              </CardHeader>
              <CardContent>
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid md:grid-cols-2 gap-4">
                    <div>
                      <Input
                        name="name"
                        placeholder="Your Name"
                        value={formData.name}
                        onChange={handleChange}
                        required
                        className="h-12 border-gray-300 focus:border-blue-600 focus:ring-blue-600 rounded-xl"
                      />
                    </div>
                    <div>
                      <Input
                        name="email"
                        type="email"
                        placeholder="Your Email"
                        value={formData.email}
                        onChange={handleChange}
                        required
                        className="h-12 border-gray-300 focus:border-blue-600 focus:ring-blue-600 rounded-xl"
                      />
                    </div>
                  </div>
                  
                  <Input
                    name="company"
                    placeholder="Company Name"
                    value={formData.company}
                    onChange={handleChange}
                    className="h-12 border-gray-300 focus:border-blue-600 focus:ring-blue-600 rounded-xl"
                  />
                  
                  <Textarea
                    name="message"
                    placeholder="Tell us about your project..."
                    value={formData.message}
                    onChange={handleChange}
                    required
                    className="min-h-32 border-gray-300 focus:border-blue-600 focus:ring-blue-600 rounded-xl"
                  />
                  
                  <Button 
                    type="submit"
                    className="w-full bg-gradient-to-r from-blue-600 to-purple-600 text-white text-lg px-8 py-4 rounded-xl hover:from-blue-700 hover:to-purple-700 transform hover:scale-105 transition-all duration-200 shadow-lg"
                  >
                    Send Message
                    <Send className="ml-2" size={20} />
                  </Button>
                </form>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-16">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-4 gap-8">
            {/* Company Info */}
            <div className="space-y-4">
              <div className="text-2xl font-bold bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
                AVishqaar
              </div>
              <p className="text-gray-400 leading-relaxed">
                Empowering businesses with cutting-edge AI, Machine Learning, and Analytics solutions to drive innovation and growth.
              </p>
            </div>

            {/* Quick Links */}
            <div className="space-y-4">
              <h3 className="text-lg font-semibold text-white">Quick Links</h3>
              <div className="space-y-2">
                {[
                  { id: 'hero', label: 'Home' },
                  { id: 'solutions', label: 'Solutions' },
                  { id: 'about', label: 'About' },
                  { id: 'blog', label: 'Insights' },
                  { id: 'contact', label: 'Contact' }
                ].map((item) => (
                  <button
                    key={item.id}
                    onClick={() => scrollToSection(item.id)}
                    className="block text-gray-400 hover:text-white transition-colors duration-200"
                  >
                    {item.label}
                  </button>
                ))}
              </div>
            </div>

            {/* Services */}
            <div className="space-y-4">
              <h3 className="text-lg font-semibold text-white">Services</h3>
              <div className="space-y-2">
                <button onClick={() => scrollToSection('solutions')} className="block text-gray-400 hover:text-white transition-colors duration-200">
                  AI Solutions
                </button>
                <button onClick={() => scrollToSection('solutions')} className="block text-gray-400 hover:text-white transition-colors duration-200">
                  Machine Learning
                </button>
                <button onClick={() => scrollToSection('solutions')} className="block text-gray-400 hover:text-white transition-colors duration-200">
                  Analytics
                </button>
                <button onClick={() => scrollToSection('solutions')} className="block text-gray-400 hover:text-white transition-colors duration-200">
                  Software Development
                </button>
              </div>
            </div>

            {/* Contact Info */}
            <div className="space-y-4">
              <h3 className="text-lg font-semibold text-white">Contact</h3>
              <div className="space-y-3">
                <div className="flex items-center gap-3">
                  <Mail size={16} className="text-gray-400" />
                  <span className="text-gray-400">contact@avishqaar.com</span>
                </div>
                <div className="flex items-center gap-3">
                  <Phone size={16} className="text-gray-400" />
                  <span className="text-gray-400">+91 8219973883</span>
                </div>
                <div className="flex items-center gap-3">
                  <MapPin size={16} className="text-gray-400" />
                  <span className="text-gray-400">Noida, India</span>
                </div>
              </div>
            </div>
          </div>

          {/* Bottom Bar */}
          <div className="border-t border-gray-800 mt-12 pt-8 text-center">
            <div className="flex items-center justify-center gap-2 text-gray-400">
              <span>&copy; 2025 AVishqaar. All rights reserved.</span>
              <Heart className="w-4 h-4 text-red-500" />
              <span>Made with passion</span>
            </div>
          </div>
        </div>
      </footer>

      {/* Project Details Dialog */}
      <Dialog open={!!selectedSolution} onOpenChange={() => setSelectedSolution(null)}>
        <DialogContent className="max-w-4xl max-h-[90vh] overflow-y-auto rounded-2xl">
          <DialogHeader>
            <DialogTitle className="text-2xl font-bold text-gray-900">
              {selectedSolution?.title}
            </DialogTitle>
          </DialogHeader>
          
          {selectedSolution && (
            <div className="space-y-6">
              <div className="w-full h-64 bg-gray-100 rounded-xl overflow-hidden">
                <img 
                  src={selectedSolution.image} 
                  alt={selectedSolution.title}
                  className="w-full h-full object-cover"
                />
              </div>
              
              <p className="text-gray-600 text-lg">
                {selectedSolution.description}
              </p>

              <div>
                <h4 className="text-xl font-bold text-gray-900 mb-4">
                  Featured Projects
                </h4>
                <div className="grid md:grid-cols-2 gap-6">
                  {selectedSolution.projects?.map((project, projectIndex) => (
                    <Card key={projectIndex} className="rounded-xl overflow-hidden">
                      <CardContent className="p-6">
                        <div className="w-full h-32 bg-gray-100 rounded-lg overflow-hidden mb-4">
                          <img 
                            src={project.image} 
                            alt={project.name}
                            className="w-full h-full object-cover"
                          />
                        </div>
                        <h5 className="text-lg font-bold text-gray-900 mb-2">
                          {project.name}
                        </h5>
                        <p className="text-gray-600 text-sm mb-4">
                          {project.description}
                        </p>
                        <div className="flex flex-wrap gap-2">
                          {project.technologies.map((tech, techIndex) => (
                            <span 
                              key={techIndex}
                              className="px-3 py-1 bg-blue-100 text-blue-700 text-xs font-medium rounded-full"
                            >
                              {tech}
                            </span>
                          ))}
                        </div>
                      </CardContent>
                    </Card>
                  ))}
                </div>
              </div>
            </div>
          )}
        </DialogContent>
      </Dialog>
    </div>
  );
};

export default SinglePageApp;