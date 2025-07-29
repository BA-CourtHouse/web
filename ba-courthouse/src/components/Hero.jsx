import { Link } from 'react-router-dom';
import { useState, useEffect } from 'react';
import { motion, useAnimation } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

const HeroSection = () => {
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
    <section 
      ref={ref}
      className="relative overflow-hidden min-h-screen flex items-center"
      style={{
        backgroundImage: 'linear-gradient(rgba(0, 0, 0, 0.4), rgba(0, 0, 0, 0.4)), url(/assets/hero1.jpg)',
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundAttachment: 'fixed'
      }}
    >
      {/* Animated gradient overlay */}
      <motion.div 
        className="absolute inset-0 bg-gradient-to-br from-blue-900/30 via-blue-800/20 to-purple-900/30 z-0"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1.5 }}
      />
      
      {/* Floating particles */}
      <motion.div 
        className="absolute top-1/4 left-1/4 w-6 h-6 rounded-full bg-blue-400 opacity-20"
        variants={floatingVariants}
        animate="float"
      />
      <motion.div 
        className="absolute top-1/3 right-1/4 w-8 h-8 rounded-full bg-orange-400 opacity-20"
        variants={floatingVariants}
        animate="float"
        transition={{ delay: 1 }}
      />
      <motion.div 
        className="absolute bottom-1/4 right-1/3 w-5 h-5 rounded-full bg-white opacity-20"
        variants={floatingVariants}
        animate="float"
        transition={{ delay: 2 }}
      />

      {/* Hero content */}
      <div className="max-w-6xl mx-auto relative z-10 px-4 sm:px-6 lg:px-8">
        <motion.div 
          initial="hidden"
          animate={controls}
          variants={containerVariants}
          className="py-5 lg:py-20 md:py-10" 
        >
          <div className="text-center">
            <motion.div variants={itemVariants} className="mb-8">
              <motion.span 
                className="inline-block px-4 py-2 bg-white/20 backdrop-blur-sm text-white rounded-full text-sm font-semibold border border-white/30"
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                transition={{ delay: 0.5, type: "spring" }}
              >
                Trusted by 15+ businesses worldwide
              </motion.span>
            </motion.div>
            
            <motion.h1 
              variants={itemVariants}
              className="text-3xl text-start md:text-4xl lg:text-6xl lg:text-center font-bold tracking-tight text-white mb-6 leading-tight"
            >
              <motion.span 
                className="inline-block"
                whileHover={{ scale: 1.02 }}
              >
                Transform Your Business
              </motion.span>{' '}
              <br className="hidden sm:block" />
              <motion.span 
                className="inline-block bg-gradient-to-r from-orange-400 to-orange-300 bg-clip-text text-transparent"
                whileHover={{ scale: 1.02 }}
              >
                With Strateic Consulting & Agile Transformation
              </motion.span>
            </motion.h1>
            
            <motion.p 
              variants={itemVariants}
              className="mt-6 max-w-3xl mx-auto text-lg md:text-xl text-start text-white font-medium"
            >
              We help ambitious scaling companies, startups, NGOs, and Government entities accelerate growth through digital transformation, 
              agile methodologies, and strategic consulting tailored to your unique challenges.
            </motion.p>
            
            <motion.div 
              variants={itemVariants}
              className="mt-10 flex flex-col sm:flex-row justify-center gap-6"
            >
              <motion.a 
                href='https://calendly.com/vincent-onu/30min'
                className="px-10 py-4 text-lg font-semibold text-white bg-orange-500 hover:bg-orange-600 rounded-lg shadow-lg hover:shadow-xl transition-all duration-300 relative overflow-hidden group"
                whileHover={{ 
                  scale: 1.05,
                  boxShadow: "0 10px 25px -5px rgba(237, 137, 54, 0.4)"
                }}
                whileTap={{ scale: 0.98 }}
              >
                <span className="relative z-10">Get a Free Strategy Session</span>
                <span className="absolute inset-0 bg-gradient-to-r from-orange-600 to-orange-400 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></span>
              </motion.a>
              
              <motion.div
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.98 }}
              >
                <Link
                  to="/services"
                  className="px-10 py-4 text-lg font-semibold text-white bg-transparent hover:bg-white/10 rounded-lg border-2 border-white transition-all duration-300 flex items-center justify-center gap-2"
                >
                  <span>Discover Our Solutions</span>
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                    <path fillRule="evenodd" d="M10.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L12.586 11H5a1 1 0 110-2h7.586l-2.293-2.293a1 1 0 010-1.414z" clipRule="evenodd" />
                  </svg>
                </Link>
              </motion.div>
            </motion.div>
          </div>
          
          <motion.div 
            className="mt-20 flex justify-center"
            variants={itemVariants}
          >
            <motion.div 
              className="w-16 h-16 rounded-full bg-white/10 backdrop-blur-sm border border-white/20 flex items-center justify-center cursor-pointer"
              animate={{
                y: [0, -10, 0],
                opacity: [0.8, 1, 0.8]
              }}
              transition={{
                duration: 3,
                repeat: Infinity,
                ease: "easeInOut"
              }}
              whileHover={{ scale: 1.1 }}
            >
              <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
              </svg>
            </motion.div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default HeroSection;