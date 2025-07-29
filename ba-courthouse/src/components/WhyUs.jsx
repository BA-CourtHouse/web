import { useState } from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

const WhyChooseUs = () => {
  const [activeTab, setActiveTab] = useState('expertise');
  const [ref, inView] = useInView({
    threshold: 0.1,
    triggerOnce: true
  });

  const advantages = {
    expertise: {
      title: "Industry Experts",
      description: "Our team brings 20+ years of combined experience in Analysis and digital transformation, with certifications in CBAP, PMP, ISO, HSE, Scrum and ITIL frameworks, etc.",
      stats: "100+ Projects Delivered",
      icon: "👨‍💼"
    },
    approach: {
      title: "Agile Solutions",
      description: "We don't just consult; we co-create and implement. Through an interative, data-driven approach, we deliver measureable outcomes throughout your transformation journey.",
      stats: "35% Faster Implementation",
      icon: "⚡"
    },
    strategy: {
      title: "Personalized Strategy",
      description: "Your business isn't generic; we tailor solutions based on unique business challenges, contexts, and chosen strategic direction. We craft roadmaps based on deep analysis, with built-in KPIs and milestone to ensure progress and accountability.",
      stats: "100% Custom Solutions",
      icon: "🎯"
    },
    results: {
      title: "Proven Track Record",
      description: "From startups to Fortune 500 companies, our methodologies consistently deliver ROI. See our case studies for real-world examples.",
      stats: "85% Client Retention",
      icon: "📈"
    }
  };

  const stats = [
    { value: "20+", label: "Years Combined Experience", color: "text-orange-500" },
    { value: "15+", label: "Happy Clients", color: "text-blue-600" },
    { value: "10+", label: "Industries Served", color: "text-orange-500" },
    { value: "100%", label: "Client-Focused", color: "text-blue-600" }
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
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

  return (
    <section className="py-5 sm:py-10 lg:py-15 bg-gradient-to-b from-blue-50 to-white" ref={ref}>
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <motion.div 
          className="text-center mb-16"
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          variants={containerVariants}
        >
          <motion.p 
            variants={itemVariants}
            className="text-lg font-bold text-orange-500 mb-3"
          >
            Why Work With Us
          </motion.p>
          <motion.h2 
            variants={itemVariants}
            className="text-3xl text-start md:text-center lg:text-center sm:text-5xl font-bold text-gray-900 mb-4"
          >
            Our Competitive Edge
          </motion.h2>
          <motion.p 
            variants={itemVariants}
            className="max-w-2xl mx-auto text-l text-gray-600"
          >
            We don't just meet expectations, we redefine what's possible for your business
          </motion.p>
        </motion.div>

        <div className="grid grid-cols-1">
          {/* Advantages */}
          <motion.div
            initial="hidden"
            animate={inView ? "visible" : "hidden"}
            variants={containerVariants}
          >
            {/* Tab Navigation */}
            <motion.div 
              variants={itemVariants}
              className="flex space-x-2 mb-8 overflow-x-auto pb-2 scrollbar-hide"
            >
              {Object.keys(advantages).map((key) => (
                <motion.button
                  key={key}
                  onClick={() => setActiveTab(key)}
                  className={`px-5 py-3 rounded-lg text-sm font-medium whitespace-nowrap transition-all ${
                    activeTab === key
                      ? 'bg-blue-600 text-white shadow-lg'
                      : 'bg-white text-gray-700 hover:bg-gray-50 shadow-md'
                  }`}
                  whileHover={{ scale: activeTab === key ? 1 : 1.05 }}
                  whileTap={{ scale: 0.98 }}
                >
                  {advantages[key].title}
                </motion.button>
              ))}
            </motion.div>

            {/* Active Tab Content */}
            <motion.div 
              variants={itemVariants}
              className="bg-white p-8 rounded-2xl shadow-xl border border-gray-100 hover:shadow-2xl transition-shadow duration-300"
              whileHover={{ y: -5 }}
            >
              <div className="flex items-start mb-6">
                <div>
                  <h3 className="text-2xl font-bold text-gray-900 mb-1">
                    {advantages[activeTab].title}
                  </h3>
                  <p className="text-blue-600 font-semibold text-lg">
                    {advantages[activeTab].stats}
                  </p>
                </div>
              </div>
              <p className="text-gray-600 text-lg pl-16">
                {advantages[activeTab].description}
              </p>
            </motion.div>

            {/* Stats Grid */}
            <motion.div 
              variants={itemVariants}
              className="grid grid-cols-2 gap-5 mt-10"
            >
              {stats.map((stat, index) => (
                <motion.div 
                  key={index}
                  className="bg-white p-5 rounded-xl shadow-lg border border-gray-100 text-center hover:shadow-xl transition-all"
                  whileHover={{ y: -5 }}
                >
                  <p className={`text-4xl font-bold ${stat.color} mb-2`}>{stat.value}</p>
                  <p className="text-gray-600 font-medium">{stat.label}</p>
                </motion.div>
              ))}
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;