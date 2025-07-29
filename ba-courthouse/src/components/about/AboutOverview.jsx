import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

const AboutOverview = () => {
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
    hidden: { y: 30, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.6,
        ease: "easeOut"
      }
    }
  };



  return (
    <div className="bg-white">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-r from-gray-800 to-gray-900 overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSI2MCIgaGVpZ2h0PSI2MCIgdmlld0JveD0iMCAwIDYwIDYwIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxnIGZpbGw9IiNmZmYiIGZpbGwtb3BhY2l0eT0iMC4wNSI+PHBhdGggZD0iTTM2IDM0aDUwdi0ySDM2djJ6TTM2IDE2aDUwdi0ySDM2djJ6TTE2IDM0aDE4di0ySDE2djJ6TTE2IDE2aDE4di0ySDE2djJ6Ii8+PC9nPjwvZz48L3N2Zz4=')]"></div>
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-5 md:py-20">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <motion.div 
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
            >
              <motion.div 
                className="inline-block bg-white/10 backdrop-blur-sm rounded-full px-4 py-2 mb-6"
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2, duration: 0.6 }}
              >
                <span className="text-sm font-semibold text-orange-500 tracking-wider">
                  OUR STORY
                </span>
              </motion.div>

              <motion.h1 
                className="text-2xl md:text-4 lg:text-5xl font-bold text-white leading-tight mb-6"
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3, duration: 0.6 }}
              >
                Strategic Partners in Your <span className="text-blue-300">Business Growth</span>
              </motion.h1>

              <motion.p 
                className="md:text-xl text-lg text-blue-100 max-w-xl mb-8"
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4, duration: 0.6 }}
              >
                Founded in 2024, BA CourtHouse began as a vision to bridge the gap between business strategy and technology execution. What started as a solo consultancy has grown into a trusted partner for startups and enterprises across the Globe.
We combine cutting-edge methodologies with practical business acumen to deliver transformative results. Unlike traditional consultants, we embed ourselves in your journey, ensuring solutions are implemented, not just recommended.

              </motion.p>
              
            </motion.div>

            <motion.div 
              className="relative"
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.3, duration: 0.8 }}
            >
              <div className="relative z-10">
                <img 
                  src="/assets/about.jpg" 
                  alt="BA Courthouse team collaborating"
                  className="w-full h-auto rounded-xl shadow-2xl border-8 border-white/10"
                />
              </div>
              <div className="absolute -bottom-6 -right-6 w-64 h-64 bg-blue-400 rounded-full mix-blend-multiply filter blur-3xl opacity-20"></div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Mission & Vision Section */}
      <section className="relative bg-gradient-to-br from-white to-blue-50 py-20 px-4 sm:px-6 lg:px-8 overflow-hidden">
        <div className="max-w-7xl mx-auto">
          <motion.div
            ref={ref}
            initial="hidden"
            animate={inView ? "visible" : "hidden"}
            variants={containerVariants}
            className="grid grid-cols-1 md:grid-cols-2 gap-12"
          >
            {/* Mission Card */}
            <motion.div 
              className="bg-white p-8 rounded-xl shadow-lg border border-gray-100"
              variants={itemVariants}
              whileHover="hover"
            >
              <div className="flex items-center mb-6">
                
                <h2 className="text-2xl font-bold text-gray-900">Our Mission</h2>
              </div>
              <p className="text-gray-600 text-lg leading-relaxed">
                To serve clients as an innovative business consulting partner through grounded industry experience and a human-centred approach. We help bring clarity to their strategic goals, guide digital transformation, and support their journey toward operational excellence and sustainable growth in line with SDG-9.
              </p>
            </motion.div>

            {/* Vision Card */}
            <motion.div 
              className="bg-white p-8 rounded-xl shadow-lg border border-gray-100"
              variants={itemVariants}
              whileHover="hover"
            >
              <div className="flex items-center mb-6">
                
                <h2 className="text-2xl font-bold text-gray-900">Our Vision</h2>
              </div>
              <p className="text-gray-600 text-lg leading-relaxed">
                To build a global consulting powerhouse that facilitates innovative and efficient solutions, transforming clients' businesses into trusted brands across the globe. Our approach focuses on nurturing professionals, delivering measurable outcomes, and supporting ongoing evolution through smart pivots and thoughtful consolidations.
              </p>
            </motion.div>
          </motion.div>

          
        </div>
      </section>
    </div>
  );
};

export default AboutOverview;