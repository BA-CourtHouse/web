import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';

const CoreServices = () => {

  // Animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
        delayChildren: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: [0.16, 1, 0.3, 1] // Custom easing for smooth movement
      }
    }
  };

  const hoverVariants = {
    hover: {
      y: -5,
      transition: {
        duration: 0.3,
        ease: "easeOut"
      }
    }
  };

  const imageHoverVariants = {
    hover: {
      scale: 1.1,
      transition: {
        duration: 0.5,
        ease: "easeOut"
      }
    }
  };
  
  const services = [
    {
      title: "IT Business Consulting",
      description: "Align technology with business goals for maximum ROI and operational efficiency.",
      icon: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 3v2m6-2v2M9 19v2m6-2v2M5 9H3m2 6H3m18-6h-2m2 6h-2M7 19h10a2 2 0 002-2V7a2 2 0 00-2-2H7a2 2 0 00-2 2v10a2 2 0 002 2zM9 9h6v6H9V9z" />
        </svg>
      ),
      color: "text-blue-600",
      bgColor: "bg-blue-100",
      path: "/it-consulting",
      bgImage: "/assets/s2.jpg"
    },
    {
      title: "Agile Coaching",
      description: "Transform teams with Scrum, Kanban, and SAFe frameworks for rapid delivery.",
      icon: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
        </svg>
      ),
      color: "text-orange-600",
      bgColor: "bg-orange-100",
      path: "/agile",
      bgImage: "/assets/s1.jpg"
    },
    {
      title: "Project Management",
      description: "End-to-end project leadership with PMP-certified expertise.",
      icon: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2" />
        </svg>
      ),
      color: "text-purple-600",
      bgColor: "bg-purple-100",
      path: "/project-management",
      bgImage: "/assets/s6.jpg"
    },
    {
      title: "HR Solutions",
      description: "Modern talent strategies from recruitment to performance management.",
      icon: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
        </svg>
      ),
      color: "text-green-600",
      bgColor: "bg-green-100",
      path: "/hr-solutions",
      bgImage: "/assets/s4.jpg"
    },
    {
      title: "Web & App Development",
      description: "Custom digital solutions built with cutting-edge technologies.",
      icon: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
        </svg>
      ),
      color: "text-indigo-600",
      bgColor: "bg-indigo-100",
      path: "/web-app",
      bgImage: "/assets/s3.jpg"
    },
    {
      title: "Career Coaching",
      description: "Personalized mentoring for tech professionals at all levels.",
      icon: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
        </svg>
      ),
      color: "text-red-600",
      bgColor: "bg-red-100",
      path: "/career-coaching",
      bgImage: "/assets/s7.jpg"
    },
    {
      title: "Software Development",
      description: "End-to-end software solutions from concept to deployment.",
      icon: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4v16m-4-4l4 4 4-4m-4-4l-4-4 4 4 4-4-4 4z" />
        </svg>
      ),
      color: "text-blue-600",
      bgColor: "bg-blue-100",
      path: "/software",
      bgImage: "/assets/s10.jpg"
    },
    {
      title: "Research & Development",
      description: "Innovative research services to drive product and service development.",
      icon: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 2a10 10 0 100 20 10 10 0 000-20zm-1 15l-4-4h8l-4 4zm0-6l4-4H8l4 4z" />
        </svg>
      ),
      color: "text-blue-600",
      bgColor: "bg-blue-100",
      path: "/research-consulting",
      bgImage: "/assets/s9.jpg"
    },
    {
      title: "Management Consulting",
      description: "Strategic insights to enhance organizational performance and growth.",
      icon: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4v16m8-8H4m16 0l-4-4m0 8l4-4"/>
        </svg>
      ),
      color: "text-blue-600",
      bgColor: "bg-blue-100",
      path:"/management-consulting",
      bgImage: "/assets/s8.jpg"
    },
  ];



  return (
    <section className="py-5 md:py-10 lg:py-15 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <motion.div 
          className="text-center mb-16"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
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
        <motion.div 
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
          variants={containerVariants}
        >
          {services.map((service, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              className="group"
              whileHover="hover"
            >
              <Link
                to={service.path}
                className="block h-full rounded-xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 bg-white border border-gray-100 hover:border-blue-100"
              >
                {/* Image Top */}
                <motion.div 
                  className="relative h-48 overflow-hidden"
                  variants={hoverVariants}
                >
                  <motion.img
                    src={service.bgImage}
                    alt={service.title}
                    className="w-full h-full object-cover"
                    variants={imageHoverVariants}
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-transparent"></div>
                </motion.div>

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
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default CoreServices;