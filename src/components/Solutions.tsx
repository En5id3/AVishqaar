import { useState } from "react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import { Brain, BarChart3, Database, Code, Bot, TrendingUp, Shield, Zap, X } from "lucide-react";
import { Button } from "@/components/ui/button";

export const Solutions = () => {
  const [selectedSolution, setSelectedSolution] = useState(null);

  const solutions = [
    {
      category: "AI Solutions",
      icon: Brain,
      description: "Intelligent automation and AI-powered applications",
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
            },
            {
              name: "Quality Control System",
              description: "Real-time defect detection in manufacturing lines using computer vision to identify product flaws and ensure quality standards.",
              image: "https://images.unsplash.com/photo-1581094794329-c8112a89af12?w=400&h=250&fit=crop",
              technologies: ["YOLO", "Raspberry Pi", "Node.js", "MongoDB"]
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
            },
            {
              name: "Customer Support Chatbot",
              description: "Intelligent chatbot for e-commerce platforms that handles customer queries, order tracking, and product recommendations with 24/7 availability.",
              image: "https://images.unsplash.com/photo-1531746790731-6c087fecd65a?w=400&h=250&fit=crop",
              technologies: ["Rasa", "BERT", "PostgreSQL", "Docker"]
            },
            {
              name: "Sentiment Analysis Platform",
              description: "Real-time social media monitoring tool that analyzes brand sentiment across multiple platforms and provides actionable insights.",
              image: "https://images.unsplash.com/photo-1611224923853-80b023f02d71?w=400&h=250&fit=crop",
              technologies: ["NLTK", "Kafka", "Elasticsearch", "Kibana"]
            }
          ]
        },
        {
          title: "AI Automation",
          description: "Intelligent process automation for businesses",
          image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=400&h=250&fit=crop",
          projects: [
            {
              name: "Invoice Processing System",
              description: "Automated invoice processing using AI to extract data, validate information, and integrate with accounting systems, reducing processing time by 80%.",
              image: "https://images.unsplash.com/photo-1554224155-6726b3ff858f?w=400&h=250&fit=crop",
              technologies: ["OCR", "RPA", "SAP", "Power Automate"]
            },
            {
              name: "HR Recruitment Bot",
              description: "AI-driven recruitment automation that screens resumes, schedules interviews, and ranks candidates based on job requirements.",
              image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=250&fit=crop",
              technologies: ["spaCy", "Selenium", "Azure ML", "REST API"]
            },
            {
              name: "Supply Chain Optimizer",
              description: "Intelligent supply chain management system that predicts demand, optimizes inventory levels, and automates procurement decisions.",
              image: "https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?w=400&h=250&fit=crop",
              technologies: ["Prophet", "Airflow", "Tableau", "AWS Lambda"]
            }
          ]
        }
      ]
    },
    {
      category: "ML Solutions",
      icon: Bot,
      description: "Machine learning models and predictive analytics",
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
            },
            {
              name: "Equipment Maintenance Predictor",
              description: "Predictive maintenance system for industrial equipment that forecasts failures and optimizes maintenance schedules.",
              image: "https://images.unsplash.com/photo-1581094794329-c8112a89af12?w=400&h=250&fit=crop",
              technologies: ["Random Forest", "IoT Sensors", "InfluxDB", "Grafana"]
            }
          ]
        },
        {
          title: "Recommendation Systems",
          description: "Personalized content and product recommendations",
          image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=400&h=250&fit=crop",
          projects: [
            {
              name: "E-commerce Recommender",
              description: "Collaborative filtering system for online marketplace that increases conversion rates by 35% through personalized product recommendations.",
              image: "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=400&h=250&fit=crop",
              technologies: ["Apache Spark", "MLlib", "Redis", "Kafka"]
            },
            {
              name: "Content Discovery Engine",
              description: "AI-powered content recommendation for streaming platforms that analyzes user behavior and preferences to suggest relevant content.",
              image: "https://images.unsplash.com/photo-1522869635100-9f4c5e86aa37?w=400&h=250&fit=crop",
              technologies: ["TensorFlow", "Collaborative Filtering", "AWS", "DynamoDB"]
            }
          ]
        },
        {
          title: "Fraud Detection",
          description: "Advanced security and anomaly detection",
          image: "https://images.unsplash.com/photo-1563013544-824ae1b704d3?w=400&h=250&fit=crop",
          projects: [
            {
              name: "Banking Fraud Detection",
              description: "Real-time fraud detection system for financial transactions using machine learning to identify suspicious patterns and prevent losses.",
              image: "https://images.unsplash.com/photo-1563013544-824ae1b704d3?w=400&h=250&fit=crop",
              technologies: ["Isolation Forest", "Apache Kafka", "Elasticsearch", "Kibana"]
            },
            {
              name: "Insurance Claim Analyzer",
              description: "Automated insurance claim processing that detects fraudulent claims using pattern recognition and anomaly detection algorithms.",
              image: "https://images.unsplash.com/photo-1450101499163-c8848c66ca85?w=400&h=250&fit=crop",
              technologies: ["XGBoost", "SMOTE", "Flask", "PostgreSQL"]
            }
          ]
        }
      ]
    },
    {
      category: "Analytics",
      icon: BarChart3,
      description: "Data visualization and business intelligence",
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
            },
            {
              name: "Marketing Analytics Suite",
              description: "Multi-channel marketing performance tracker that consolidates data from various platforms and provides attribution analysis.",
              image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=400&h=250&fit=crop",
              technologies: ["Google Analytics API", "Tableau", "Python", "BigQuery"]
            }
          ]
        },
        {
          title: "Data Visualization",
          description: "Interactive charts and reporting tools",
          image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=400&h=250&fit=crop",
          projects: [
            {
              name: "Healthcare Analytics Portal",
              description: "Interactive visualization platform for healthcare data analysis, patient outcomes tracking, and resource optimization for hospital management.",
              image: "https://images.unsplash.com/photo-1576091160399-112ba8d25d1f?w=400&h=250&fit=crop",
              technologies: ["D3.js", "React", "MongoDB", "Express"]
            },
            {
              name: "Financial Risk Dashboard",
              description: "Real-time risk monitoring dashboard for financial institutions with interactive charts, stress testing, and regulatory reporting.",
              image: "https://images.unsplash.com/photo-1611974789855-9c2a0a7236a3?w=400&h=250&fit=crop",
              technologies: ["Plotly", "Dash", "PostgreSQL", "Docker"]
            }
          ]
        },
        {
          title: "Performance Analytics",
          description: "Comprehensive performance monitoring",
          image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=400&h=250&fit=crop",
          projects: [
            {
              name: "Website Performance Monitor",
              description: "Advanced web analytics platform that tracks user behavior, page performance, and conversion funnels with real-time alerts.",
              image: "https://images.unsplash.com/photo-1432888622747-4eb9a8efeb07?w=400&h=250&fit=crop",
              technologies: ["Google Analytics", "Mixpanel", "Node.js", "Redis"]
            },
            {
              name: "Manufacturing KPI Tracker",
              description: "Comprehensive performance monitoring system for manufacturing operations tracking OEE, quality metrics, and production efficiency.",
              image: "https://images.unsplash.com/photo-1581094794329-c8112a89af12?w=400&h=250&fit=crop",
              technologies: ["InfluxDB", "Grafana", "MQTT", "Time Series DB"]
            }
          ]
        }
      ]
    },
    {
      category: "Software Solutions",
      icon: Code,
      description: "Custom software development and enterprise applications",
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
            },
            {
              name: "Project Management Suite",
              description: "Collaborative project management platform with task tracking, team communication, and resource allocation for enterprise teams.",
              image: "https://images.unsplash.com/photo-1611224923853-80b023f02d71?w=400&h=250&fit=crop",
              technologies: ["Vue.js", "Express", "MongoDB", "Socket.io"]
            }
          ]
        },
        {
          title: "Mobile Development",
          description: "Cross-platform mobile applications",
          image: "https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d?w=400&h=250&fit=crop",
          projects: [
            {
              name: "Healthcare Mobile App",
              description: "Patient management mobile application with appointment scheduling, medical records access, and telemedicine capabilities.",
              image: "https://images.unsplash.com/photo-1576091160399-112ba8d25d1f?w=400&h=250&fit=crop",
              technologies: ["React Native", "Firebase", "AWS Cognito", "GraphQL"]
            },
            {
              name: "Logistics Tracking App",
              description: "Real-time package tracking and delivery management app for logistics companies with GPS integration and route optimization.",
              image: "https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?w=400&h=250&fit=crop",
              technologies: ["Flutter", "Google Maps API", "Node.js", "MySQL"]
            }
          ]
        },
        {
          title: "Enterprise Systems",
          description: "Scalable enterprise software solutions",
          image: "https://images.unsplash.com/photo-1461749280684-dccba630e2f6?w=400&h=250&fit=crop",
          projects: [
            {
              name: "ERP Integration Platform",
              description: "Enterprise resource planning system that integrates HR, finance, inventory, and operations with customizable workflows and reporting.",
              image: "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?w=400&h=250&fit=crop",
              technologies: ["Java Spring", "Oracle DB", "Microservices", "Kubernetes"]
            },
            {
              name: "Customer Relationship Management",
              description: "Comprehensive CRM solution with lead management, sales pipeline tracking, and customer communication automation.",
              image: "https://images.unsplash.com/photo-1553877522-43269d4ea984?w=400&h=250&fit=crop",
              technologies: ["Salesforce", "Python", "REST APIs", "Heroku"]
            }
          ]
        }
      ]
    }
  ];

  const handleCardClick = (item) => {
    setSelectedSolution(item);
  };

  return (
    <section id="solutions" className="apple-section bg-gray-50">
      <div className="apple-container">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Our Solutions
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Comprehensive AI, ML, and Analytics solutions designed to transform your business operations and drive growth.
          </p>
        </div>

        {/* Solutions Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {solutions.map((solution, index) => (
            <div key={index} className="space-y-6">
              {/* Category Header */}
              <div className="text-center">
                <div className="w-16 h-16 bg-blue-600 rounded-full mx-auto mb-4 flex items-center justify-center">
                  <solution.icon className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-2xl font-semibold text-gray-900 mb-2">
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
                    className="apple-card cursor-pointer transition-all duration-300 hover:shadow-lg hover:scale-105"
                    onClick={() => handleCardClick(item)}
                  >
                    <CardHeader className="pb-4">
                      <CardTitle className="text-lg font-semibold text-gray-900">
                        {item.title}
                      </CardTitle>
                      <CardDescription className="text-gray-600">
                        {item.description}
                      </CardDescription>
                    </CardHeader>
                    <CardContent className="pt-0">
                      <div className="w-full h-32 bg-gray-100 rounded-lg overflow-hidden">
                        <img 
                          src={item.image} 
                          alt={item.title}
                          className="w-full h-full object-cover"
                        />
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Project Details Dialog */}
        <Dialog open={!!selectedSolution} onOpenChange={() => setSelectedSolution(null)}>
          <DialogContent className="max-w-4xl max-h-[90vh] overflow-y-auto">
            <DialogHeader>
              <DialogTitle className="text-2xl font-semibold text-gray-900">
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
                  <h4 className="text-xl font-semibold text-gray-900 mb-4">
                    Featured Projects
                  </h4>
                  <div className="grid md:grid-cols-2 gap-6">
                    {selectedSolution.projects.map((project, projectIndex) => (
                      <Card key={projectIndex} className="apple-card">
                        <CardContent className="p-6">
                          <div className="w-full h-32 bg-gray-100 rounded-lg overflow-hidden mb-4">
                            <img 
                              src={project.image} 
                              alt={project.name}
                              className="w-full h-full object-cover"
                            />
                          </div>
                          <h5 className="text-lg font-semibold text-gray-900 mb-2">
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
    </section>
  );
};
