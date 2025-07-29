import { Link } from 'react-router-dom';
import { useEffect } from 'react';
import { motion, useAnimation } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

const ServicesOverview = () => {
  const controls = useAnimation();
  const [ref, inView] = useInView({
    threshold: 0.1,
    triggerOnce: false
  });

  useEffect(() => {
    if (inView) {
      controls.start("visible");
    }
  }, [controls, inView]);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
        delayChildren: 0.3
      }
    }
  };

  const itemVariants = {
    hidden: { y: 40, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.8,
        ease: [0.2, 0.65, 0.3, 0.9]
      }
    }
  };

  const featureVariants = {
    hidden: { scale: 0.95, opacity: 0 },
    visible: {
      scale: 1,
      opacity: 1,
      transition: { duration: 0.5 }
    },
    hover: {
      y: -8,
      scale: 1.02,
      boxShadow: "0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)",
      transition: { 
        y: { stiffness: 1000, velocity: -100 },
        duration: 0.3
      }
    }
  };

  const floatingVariants = {
    float: {
      y: [0, -15, 0],
      transition: {
        duration: 6,
        repeat: Infinity,
        ease: "easeInOut"
      }
    }
  };

  return (
    <section className="relative bg-gradient-to-br from-gray-50 to-white overflow-hidden py-5 sm:py-10 lg:py-15">
      {/* Floating decorative elements */}
      <motion.div 
        className="hidden lg:block absolute top-1/4 left-1/4 w-32 h-32 bg-orange-100 rounded-full mix-blend-multiply filter blur-xl opacity-20"
        variants={floatingVariants}
        animate="float"
      />
      <motion.div 
        className="hidden lg:block absolute bottom-1/3 right-1/4 w-40 h-40 bg-blue-100 rounded-full mix-blend-multiply filter blur-xl opacity-20"
        variants={floatingVariants}
        animate="float"
        transition={{ delay: 1.5 }}
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          ref={ref}
          initial="hidden"
          animate={controls}
          variants={containerVariants}
          className="lg:grid lg:grid-cols-12 gap-16 items-center"
        >
          <div className="lg:col-span-7">
            <motion.div variants={itemVariants} className="mb-4">
              <span className="inline-block px-4 py-2 bg-blue-100 text-blue-600 rounded-full text-sm font-semibold">
                Our Services
              </span>
            </motion.div>

            <motion.h2 
              variants={itemVariants}
              className="text-3xl sm:text-5xl lg:text-6xl font-bold text-gray-900 mb-8 leading-tight"
            >
              <motion.span 
                className="inline-block"
                whileHover={{ scale: 1.02 }}
              >
                Strategic Solutions for
              </motion.span>{' '}
              <motion.span 
                className="inline-block bg-gradient-to-r from-blue-600 to-blue-400 bg-clip-text text-transparent"
                whileHover={{ scale: 1.02 }}
              >
                Digital Transformation
              </motion.span>
            </motion.h2>

            <motion.div 
              variants={itemVariants}
              className="prose prose-lg text-gray-600 mb-12 space-y-6"
            >
              <p>
                At BA Courthouse, we combine strategic vision with practical execution to deliver 
                measurable business results. Our comprehensive suite of services is designed to 
                address your unique challenges and opportunities.
              </p>
              <p>
                Whether you're launching a startup, scaling operations, or optimizing workflows, 
                our expert team brings the right mix of creativity and discipline to drive your 
                success.
              </p>
            </motion.div>

            <motion.div 
              variants={itemVariants}
              className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12"
            >
              <motion.div 
                variants={featureVariants}
                initial="hidden"
                animate="visible"
                whileHover="hover"
                className="bg-white p-8 rounded-2xl border border-gray-100 shadow-lg hover:shadow-xl transition-all"
              >
                <div className="flex items-start mb-5">
                  
                  <div>
                    <h3 className="text-xl font-bold text-gray-900 mb-2">Comprehensive Offerings</h3>
                    <p className="text-gray-600">
                      Business strategy, digital transformation, process automation, and scalable tech
                      solutions tailored to your needs.
                    </p>
                  </div>
                </div>
              </motion.div>

              <motion.div 
                variants={featureVariants}
                initial="hidden"
                animate="visible"
                whileHover="hover"
                className="bg-white p-8 rounded-2xl border border-gray-100 shadow-lg hover:shadow-xl transition-all"
              >
                <div className="flex items-start mb-5">
                  
                  <div>
                    <h3 className="text-xl font-bold text-gray-900 mb-2">Diverse Clientele</h3>
                    <p className="text-gray-600">
                      Startups, SMEs, and enterprise teams seeking growth, clarity, and execution in
                      competitive markets.
                    </p>
                  </div>
                </div>
              </motion.div>
            </motion.div>

            <motion.div 
              variants={itemVariants}
              className="flex flex-col sm:flex-row gap-4"
            >
              <motion.a
                href="https://calendly.com/vincent-onu/30min"
                whileHover={{ 
                  scale: 1.05,
                  boxShadow: "0 10px 25px -5px rgba(0, 0, 0, 0.1)"
                }}
                whileTap={{ scale: 0.98 }}
                className="px-8 py-4 text-base text-center font-medium text-white bg-orange-500 hover:bg-orange-600 rounded-lg shadow-lg transition-all duration-300 hover:shadow-xl"
              >
                Schedule Consultation
              </motion.a>
              <motion.div
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.98 }}
              >
                
              </motion.div>
            </motion.div>
          </div>

          
            <motion.div 
            variants={itemVariants}
            className="hidden lg:block lg:col-span-5 relative mt-5 lg:mt-0"
          >
            <motion.div 
              className="relative w-full h-[32rem] rounded-3xl overflow-hidden shadow-2xl"
              whileHover={{ scale: 1.02 }}
            >
              {/* Image background with gradient overlay */}
              <div 
                className="absolute inset-0 bg-cover bg-center"
                style={{ backgroundImage: "url('/assets/ser.jpg')" }}
              >
                <div className="absolute inset-0"></div>
              </div>
            </motion.div>
          </motion.div>
              </motion.div>
      </div>
    </section>
  );
};

export default ServicesOverview;