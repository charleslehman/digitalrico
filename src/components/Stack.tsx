import React, { useState, useCallback } from 'react';
import { 
  Palette, 
  Lightbulb, 
  Brain, 
  Target, 
  Building2,
  Sparkles,
  PenTool,
  Share2,
  Megaphone,
  BarChart3,
  Code2,
  Layers,
  Users,
  Rocket,
  LineChart,
  Smartphone
} from 'lucide-react';

interface Service {
  id: number;
  name: string;
  description: string;
  icon: React.ReactNode;
  category: string;
  className: string;
}

const services: Service[] = [
  {
    id: 1,
    name: "Digital Design",
    description: "Creating stunning visual experiences that captivate and engage through modern design principles",
    icon: <Palette className="h-6 w-6" />,
    category: "design",
    className: "md:col-span-2 md:row-span-1"
  },
  {
    id: 2,
    name: "Brand Strategy",
    description: "Crafting unique brand identities that resonate with your audience and stand out in the digital age",
    icon: <Lightbulb className="h-6 w-6" />,
    category: "branding",
    className: "md:col-span-1 md:row-span-2"
  },
  {
    id: 3,
    name: "AI Integration",
    description: "Leveraging artificial intelligence and machine learning to transform business operations",
    icon: <Brain className="h-6 w-6" />,
    category: "technology",
    className: "md:col-span-1 md:row-span-1"
  },
  {
    id: 4,
    name: "Product Strategy",
    description: "Guiding products from concept to market success with data-driven decision making",
    icon: <Target className="h-6 w-6" />,
    category: "strategy",
    className: "md:col-span-2 md:row-span-1"
  },
  {
    id: 5,
    name: "Austin Tech Scene",
    description: "Deep connections and insights into Austin's vibrant tech ecosystem",
    icon: <Building2 className="h-6 w-6" />,
    category: "local",
    className: "md:col-span-1 md:row-span-1"
  },
  {
    id: 6,
    name: "Innovation Design",
    description: "Creating future-forward digital experiences that push boundaries",
    icon: <Sparkles className="h-6 w-6" />,
    category: "design",
    className: "md:col-span-1 md:row-span-1"
  },
  {
    id: 7,
    name: "UI/UX Design",
    description: "Crafting intuitive and beautiful user interfaces that delight users",
    icon: <PenTool className="h-6 w-6" />,
    category: "design",
    className: "md:col-span-1 md:row-span-1"
  },
  {
    id: 8,
    name: "Digital Marketing",
    description: "Strategic promotion and growth in the digital landscape",
    icon: <Megaphone className="h-6 w-6" />,
    category: "marketing",
    className: "md:col-span-2 md:row-span-1"
  },
  {
    id: 9,
    name: "Web Development",
    description: "Building scalable, modern web applications with cutting-edge technologies",
    icon: <Code2 className="h-6 w-6" />,
    category: "technology",
    className: "md:col-span-2 md:row-span-1"
  },
  {
    id: 10,
    name: "Design Systems",
    description: "Creating cohesive design systems that scale across products",
    icon: <Layers className="h-6 w-6" />,
    category: "design",
    className: "md:col-span-1 md:row-span-1"
  },
  {
    id: 11,
    name: "Team Building",
    description: "Building and scaling high-performing digital product teams",
    icon: <Users className="h-6 w-6" />,
    category: "strategy",
    className: "md:col-span-1 md:row-span-1"
  },
  {
    id: 12,
    name: "Startup Advisory",
    description: "Strategic guidance for startups from ideation to scale",
    icon: <Rocket className="h-6 w-6" />,
    category: "strategy",
    className: "md:col-span-2 md:row-span-1"
  },
  {
    id: 13,
    name: "Growth Strategy",
    description: "Data-driven approaches to scale your digital presence",
    icon: <LineChart className="h-6 w-6" />,
    category: "marketing",
    className: "md:col-span-1 md:row-span-1"
  },
  {
    id: 14,
    name: "Mobile Design",
    description: "Creating seamless mobile experiences that users love",
    icon: <Smartphone className="h-6 w-6" />,
    category: "design",
    className: "md:col-span-1 md:row-span-1"
  }
];

const categories = [
  { id: 'all', name: 'All Services' },
  { id: 'design', name: 'Design' },
  { id: 'branding', name: 'Branding' },
  { id: 'strategy', name: 'Strategy' },
  { id: 'technology', name: 'Technology' },
  { id: 'marketing', name: 'Marketing' },
  { id: 'local', name: 'Local' }
];

export default function Stack() {
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [isAnimating, setIsAnimating] = useState(false);

  const filteredServices = services.filter(service => 
    selectedCategory === 'all' || service.category === selectedCategory
  );

  const handleCategoryChange = useCallback((category: string) => {
    setIsAnimating(true);
    setSelectedCategory(category);
    setTimeout(() => setIsAnimating(false), 300);
  }, []);

  return (
    <section id="stack" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Services</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Comprehensive digital solutions tailored for modern businesses and startups
          </p>
        </div>

        <div className="flex flex-wrap justify-center gap-2 mb-12">
          {categories.map(category => (
            <button
              key={category.id}
              onClick={() => handleCategoryChange(category.id)}
              className={`px-4 py-2 rounded-full transition-all duration-300 ${
                selectedCategory === category.id
                  ? 'bg-blue-600 text-white'
                  : 'bg-white text-gray-600 hover:bg-gray-100'
              }`}
            >
              {category.name}
            </button>
          ))}
        </div>

        <div className={`grid grid-cols-1 md:grid-cols-4 gap-4 transition-all duration-300 ${
          isAnimating ? 'opacity-0 scale-95' : 'opacity-100 scale-100'
        }`}>
          {filteredServices.map(service => (
            <div
              key={service.id}
              className={`${service.className} bg-white rounded-xl p-6 shadow-sm hover:shadow-md transition-all duration-300 group cursor-pointer`}
            >
              <div className="h-full flex flex-col">
                <div className="flex items-center justify-between mb-4">
                  <div className="p-2 rounded-lg bg-gray-50 group-hover:bg-blue-50 transition-colors duration-300">
                    {React.cloneElement(service.icon as React.ReactElement, {
                      className: "h-6 w-6 text-blue-600"
                    })}
                  </div>
                  <span className="text-xs uppercase tracking-wider text-gray-400">
                    {service.category}
                  </span>
                </div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2 group-hover:text-blue-600 transition-colors">
                  {service.name}
                </h3>
                <p className="text-gray-600 text-sm flex-grow">
                  {service.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}