import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

const ProcessAndIndustriesSection = () => {
  const [ref, inView] = useInView({
    threshold: 0.1,
    triggerOnce: true
  });

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15, // Faster stagger
        delayChildren: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        type: "spring",
        damping: 10,
        stiffness: 100,
        mass: 0.5
      }
    }
  };

  const cardVariants = {
    hover: {
      y: -8,
      boxShadow: "0 15px 30px -5px rgba(0, 0, 0, 0.1)",
      transition: { 
        type: "spring",
        damping: 10,
        stiffness: 300
      }
    }
  };

  const backgroundVariants = {
    hover: {
      opacity: 0.08,
      transition: { duration: 0.3 }
    }
  };

  return (
    <div className="relative bg-gradient-to-br from-white to-blue-50 overflow-hidden">
      <section className="relative z-10 py-5 sm:py-10 lg:py-15 ">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Header */}
          <motion.div 
            className="text-center mb-16"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ 
              type: "spring",
              stiffness: 100,
              damping: 10
            }}
          >
            <h2 className="text-3xl sm:text-4xl font-light text-gray-800 mb-4">
              Industry-Specific <span className="font-medium">Solutions</span>
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-blue-400 to-orange-400 mx-auto mb-6 rounded-full"></div>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              We combine deep sector expertise with our proven transformation framework.
            </p>
          </motion.div>

          {/* Industries - Enhanced Cards */}
          <motion.div 
            className="mb-24 bg-[linear-gradient(to bottom right, #f0f4ff, #e0e7ff)] p-2 rounded-xl shadow-lg border border-orange-800 overflow-hidden"
            ref={ref}
            initial="hidden"
            animate={inView ? "visible" : "hidden"}
            variants={containerVariants}
          >
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {[
                { 
                  name: "Tech Startups", 
                  description: "Accelerating tech startup growth with lean innovation models, modular platforms, and intelligent solutions for faster development, deployment, and disruption",
                  color: "from-purple-500 to-blue-500"
                },
                { 
                  name: "Financial Services", 
                  description: "Transforming financial services through secure innovation systems, digital platforms, and intelligent solutions that enable seamless transactions, inclusive access, and sustainable growth",
                  color: "from-green-500 to-teal-500"
                }, 
                { 
                  name: "Healthcare", 
                  description: "Delivering holistic healthcare management solutions with EMRs, Emergency Systems, Patient Care Tools, Public Health Surveillance Tools etc",
                  color: "from-red-500 to-pink-500"
                },
                { 
                  name: "E-Commerce", 
                  description: "Empowering eCommerce with dynamic platforms, smart innovation systems, and personalized solutions that enhance user experience and drive lasting customer loyalty",
                  color: "from-yellow-500 to-orange-500"
                }, 
                {
                  name: "Energy",
                  description: "Facilitating energy transitions with sustainable Innovation systems, platforms and solutions for efficient energy storage, distribution and utility.",
                  color: "from-blue-500 to-indigo-500"
                },
                {
                  name: "Logistics",
                  description: "Transforming logistics with intelligent innovation systems, real-time platforms, and scalable solutions for seamless supply chain visibility, faster deliveries, and operational efficiency.",
                  color: "from-gray-500 to-blue-400"
                },
                {
                  name: "Engineering", 
                  description: "Enhance project delivery, management, quality, delivery, and aesthetics with a suite of digital tools",
                  color: "from-orange-500 to-red-500"
                },
                {
                  name: "Education",
                  description: "Redefining education with innovative learning systems, digital platforms, and inclusive solutions that foster engagement, accessibility, and lifelong learning.",
                  color: "from-indigo-500 to-purple-500"
                },
                {
                  name: "Fashion",
                  description: "Revolutionize designs, distribution and shopping experience, sustainable solutions such as Upcycling, circularity and ethical Shopfloor management with digital solutions",
                  color: "from-pink-500 to-rose-500"
                },
              ].map((industry, index) => (
                <motion.div 
                  key={index} 
                  className="relative bg-white p-8 rounded-xl border border-gray-100 shadow-sm hover:shadow-lg transition-all overflow-hidden group"
                  variants={itemVariants}
                  whileHover="hover"
                >
                  {/* Animated background element */}
                  <motion.div
                    className={`absolute inset-0 bg-gradient-to-br ${industry.color} opacity-0 -z-10`}
                    variants={backgroundVariants}
                    initial={{ opacity: 0 }}
                  />
                  
                  <div className="relative z-10">
                    <div className="flex items-start">
                      <div className="flex-shrink-0 mr-5">
                        <div className="w-12 h-12 rounded-lg bg-white shadow-sm flex items-center justify-center border border-gray-100 group-hover:bg-opacity-90 transition-all">
                          <span className={`text-lg font-medium bg-gradient-to-br ${industry.color} bg-clip-text text-transparent`}>
                            {index + 1}
                          </span>
                        </div>
                      </div>
                      <div>
                        <h3 className="text-lg font-medium text-gray-900 mb-2 group-hover:text-gray-800 transition-colors">
                          {industry.name}
                        </h3>
                        <p className="text-gray-600 group-hover:text-gray-700 transition-colors">
                          {industry.description}
                        </p>
                      </div>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Process Section */}
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6 }}
            className="mt-5"
          >
            <h3 className="text-2xl font-semibold text-center text-gray-800 mb-12">
              Our Transformation Process
            </h3>
            
            <div className="relative">
              {/* Process line */}
              <div className="hidden lg:block absolute top-1/2 left-0 right-0 h-1 bg-gradient-to-r from-blue-400 via-orange-400 to-blue-400 z-0 transform -translate-y-1/2 rounded-full"></div>
              
              <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 relative z-10">
                {[
                  {
                    title: "Discovery Phase",
                    description: "Comprehensive analysis of your business needs, pain points, and opportunities through workshops and data assessment.",
                    image: "/assets/c2.jpg",
                    color: "blue"
                  },
                  {
                    title: "Tailored Roadmap",
                    description: "Custom digital transformation strategy aligned with your specific KPIs and organizational goals.",
                    image: "/assets/c3.jpg",
                    color: "orange"
                  },
                  {
                    title: "Agile Execution",
                    description: "Iterative delivery with continuous feedback loops and measurable milestones for guaranteed results.",
                    image: "/assets/c1.jpg",
                    color: "blue"
                  }
                ].map((step, index) => (
                  <motion.div 
                    key={index}
                    initial={{ y: 20, opacity: 0 }}
                    whileInView={{ y: 0, opacity: 1 }}
                    viewport={{ once: true, margin: "0px" }}
                    transition={{ 
                      delay: index * 0.15,
                      type: "spring",
                      stiffness: 100,
                      damping: 10
                    }}
                    whileHover={{ 
                      y: -10, 
                      boxShadow: "0 20px 40px -10px rgba(0, 0, 0, 0.15)" 
                    }}
                    className="bg-white rounded-xl shadow-lg overflow-hidden border-t-4 border-blue-500 hover:border-orange-500 transition-colors relative group"
                  >
                    <div className="h-48 overflow-hidden relative">
                      <img 
                        src={step.image} 
                        alt={step.title}
                        className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/30 via-transparent to-transparent"></div>
                    </div>
                    <div className="p-6">
                      <div className="flex items-center mb-4">
                        <div className={`w-10 h-10 rounded-full ${step.color === 'orange' ? 'bg-orange-100 text-orange-500' : 'bg-blue-100 text-blue-500'} flex items-center justify-center mr-3 font-bold shadow-inner`}>
                          {index + 1}
                        </div>
                        <h3 className="text-xl font-semibold text-gray-900">{step.title}</h3>
                      </div>
                      <p className="text-gray-600">{step.description}</p>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default ProcessAndIndustriesSection;