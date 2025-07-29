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
        staggerChildren: 0.2,
        delayChildren: 0.3
      }
    }
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.6,
        ease: "easeOut"
      }
    }
  };

  const cardVariants = {
    hover: {
      y: -5,
      boxShadow: "0 8px 25px -5px rgba(0, 0, 0, 0.08)",
      transition: { duration: 0.3 }
    }
  };

  return (
    <div className="relative bg-gradient-to-br from-white to-blue-50 overflow-hidden ">
      {/* Subtle texture background */}
      

      <section className="relative z-10 py-5 sm:py-10 lg:py-15">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Header with refined typography */}
          <motion.div 
            className="text-center mb-5"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-3xl sm:text-4xl font-light text-gray-900 mb-4">
              Industry-Specific <span className="font-medium">Solutions</span>
            </h2>
            <div className="w-24 h-1 bg-gray-300 mx-auto mb-6"></div>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              We combine deep sector expertise with our proven transformation framework.
            </p>
          </motion.div>

          {/* Industries - Minimalist Cards */}
          <motion.div 
            className="mb-24"
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
                },
                { 
                  name: "Financial Services", 
                  description: "Transforming financial services through secure innovation systems, digital platforms, and intelligent solutions that enable seamless transactions, inclusive access, and sustainable growth",
                }, 
                { 
                  name: "Healthcare", 
                  description: "Delivering holistic healthcare management solutions with EMRs, Emergency Systems, Patient Care Tools, Public Health Surveillance Tools etc",
                },
                { 
                  name: "E-Commerce", 
                  description: "Empowering eCommerce with dynamic platforms, smart innovation systems, and personalized solutions that enhance user experience and drive lasting customer loyalty",
                }, 
                {
                  name: "Energy",
                  description: "Facilitating energy transitions with sustainable Innovation systems, platforms and solutions for efficient energy storage, distribution and utility.",
                },
                {
                  name: "Logistics",
                  description: "Transforming logistics with intelligent innovation systems, real-time platforms, and scalable solutions for seamless supply chain visibility, faster deliveries, and operational efficiency.",
                },
                {
                  name: "Engineering", 
                  description: "Enhance project delivery, management, quality, delivery, and aesthetics with a suite of digital tools",
                },
                {
                  name: "Education",
                  description: "Redefining education with innovative learning systems, digital platforms, and inclusive solutions that foster engagement, accessibility, and lifelong learning.",
                },
                {
                  name: "Fashion",
                  description: "Revolutionize designs, distribution and shopping experience, sustainable solutions such as Upcycling, circularity and ethical Shopfloor management with digital solutions",
                },
               
              ].map((industry, index) => (
                <motion.div 
                  key={index} 
                  className="bg-white p-8 rounded-lg border border-gray-100 shadow-sm hover:border-gray-200 transition-all"
                  variants={itemVariants}
                  whileHover="hover"
                  variants={cardVariants}
                >
                  <div className="flex items-start">
                    <div className="flex-shrink-0 mr-5">
                      <div className="w-12 h-12 rounded-md bg-gray-50 flex items-center justify-center">
                        <span className="text-gray-400 text-xl font-light">{index + 1}</span>
                      </div>
                    </div>
                    <div>
                      <h3 className="text-lg font-medium text-gray-900 mb-2">{industry.name}</h3>
                      <p className="text-gray-600">{industry.description}</p>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Process Section - Clean Timeline Design */}
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6 }}
          >
            <h3 className="text-2xl font-semibold text-center text-gray-800 mb-8">
              Our Transformation Process
            </h3>
            
            <div className="relative">
              {/* Process line */}
              <div className="hidden lg:block absolute top-1/2 left-0 right-0 h-1 bg-gradient-to-r from-blue-400 via-orange-400 to-blue-400 z-0 transform -translate-y-1/2"></div>
              
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
                    whileHover={{ y: -10, boxShadow: "0 15px 30px -5px rgba(0, 0, 0, 0.15)" }}
                    transition={{ duration: 0.3 }}
                    className="bg-white rounded-xl shadow-lg overflow-hidden border-t-4 border-blue-500 hover:border-orange-500 transition-colors"
                  >
                    <div className="h-48 overflow-hidden">
                      <img 
                        src={step.image} 
                        alt={step.title}
                        className="w-full h-full object-cover transition-transform duration-500 hover:scale-105"
                      />
                    </div>
                    <div className="p-6">
                      <div className="flex items-center mb-4">
                        <div className={`w-10 h-10 rounded-full ${step.color === 'orange' ? 'bg-orange-100 text-orange-500' : 'bg-blue-100 text-blue-500'} flex items-center justify-center mr-3 font-bold`}>
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