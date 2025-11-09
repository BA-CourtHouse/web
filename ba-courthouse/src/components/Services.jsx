import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';

const CoreServices = () => {
  const services = [
    {
      title: "IT Business Consulting",
      description: "Align technology with business goals for maximum ROI and operational efficiency.",
      color: "text-blue-600",
      bgColor: "bg-blue-100",
      path: "/it-consulting",
      bgImage: "/assets/s2.jpg"
    },
    {
      title: "Project Management",
      description: "End-to-end project leadership with PMP-certified expertise.",
      color: "text-purple-600",
      bgColor: "bg-purple-100",
      path: "/project-management",
      bgImage: "/assets/s6.jpg"
    },
    {
      title: "HR Solutions",
      description: "Modern talent strategies from recruitment to performance management.",
      color: "text-green-600",
      bgColor: "bg-green-100",
      path: "/hr-solutions",
      bgImage: "/assets/s4.jpg"
    },
    {
      title: "Web & App Development",
      description: "Custom digital solutions built with cutting-edge technologies.",
      color: "text-indigo-600",
      bgColor: "bg-indigo-100",
      path: "/web-app",
      bgImage: "/assets/s3.jpg"
    },
    {
      title: "Agile Coaching",
      description: "Transform teams with Scrum, Kanban, and SAFe frameworks for rapid delivery.",
      color: "text-orange-600",
      bgColor: "bg-orange-100",
      path: "/agile",
      bgImage: "/assets/s1.jpg"
    },
    {
      title: "Career Coaching",
      description: "Personalized mentoring for tech professionals at all levels.",
      color: "text-red-600",
      bgColor: "bg-red-100",
      path: "/career-coaching",
      bgImage: "/assets/s7.jpg"
    },
  ];

  // Improved animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1, 
        delayChildren: 0.1,  
        ease: "easeInOut"     
      }
    }
  };

  const itemVariants = {
    hidden: { 
      opacity: 0, 
      y: 20,      
      scale: 0.98 
    },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: {
        duration: 0.5,      
        ease: [0.25, 0.1, 0.25, 1], 
        type: "spring",     
        damping: 10,       
        stiffness: 100    
      }
    }
  };

  const hoverVariants = {
    hover: {
      y: -8,               
      transition: {
        type: "spring",
        damping: 10,
        stiffness: 300,    
        mass: 0.5         
      }
    }
  };

  const imageHoverVariants = {
    hover: {
      scale: 1.05,         
      transition: {
        duration: 0.4,
        ease: "easeOut"
      }
    }
  };

  return (
    <section className="py-5 md:py-10 lg:py-15 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <motion.div 
          className="text-center mb-16"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }} 
          variants={containerVariants}
        >
          <motion.p 
            className="text-lg font-semibold text-orange-500 mb-3"
            variants={itemVariants}
          >
            What We Offer
          </motion.p>
          <motion.h2 
            className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 mb-4"
            variants={itemVariants}
          >
            Our Core Services
          </motion.h2>
          <motion.p
            className="max-w-2xl mx-auto text-lg sm:text-xl text-gray-600"
            variants={itemVariants}
          >
            Comprehensive solutions designed to address your unique business challenges
          </motion.p>
        </motion.div>
        

        {/* Services Grid */}
        {/* Services Grid */}
<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
  {services.map((service, index) => (
    <div key={index} className="group">
      <Link
        to={service.path}
        className="block h-full rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300 bg-white border border-gray-100 hover:border-blue-100"
      >
        {/* Image Top */}
        <div className="relative h-48 overflow-hidden">
          <img
            src={service.bgImage}
            alt={service.title}
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-transparent"></div>
        </div>

        {/* Content Bottom */}
        <div className="p-6">
          <h3 className="text-xl font-bold text-gray-900 mb-2 group-hover:text-blue-600 transition-colors duration-300">
            {service.title}
          </h3>
          <p className="text-gray-600 mb-4">
            {service.description}
          </p>
          <div className="flex items-center text-blue-600 font-medium group-hover:text-blue-700 transition-colors duration-300">
            <span>Learn more</span>
            <svg className="ml-2 w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </div>
        </div>
      </Link>
    </div>
  ))}
</div>
      </div>
    </section>
  );
};

export default CoreServices;