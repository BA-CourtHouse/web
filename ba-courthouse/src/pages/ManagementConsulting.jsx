import { useEffect } from 'react';
import { FaChartBar, FaLightbulb, FaUsers, FaHandshake, FaGlobe, FaArrowRight } from 'react-icons/fa';
import { motion } from 'framer-motion';

const ManagementConsultingPage = () => {
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

   

    const services = [
        {
            icon: <FaChartBar className="text-white text-4xl mb-4" />,
            title: "Evidence-Based Strategies",
            description: "Decisions grounded in data analytics and market intelligence, not guesswork. We leverage advanced analytics to uncover insights that drive strategic decisions and operational improvements.",
            bgImage: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80"
        },
        {
            icon: <FaLightbulb className="text-white text-4xl mb-4" />,
            title: "Innovation Frameworks",
            description: "Systematic approaches to unlock growth and competitive advantage. We help you innovate at scale to stay ahead of the curve and drive sustainable growth.",
            bgImage: "/assets/22.jpg"
        },
        {
            icon: <FaUsers className="text-white text-4xl mb-4" />,
            title: "Execution Excellence",
            description: "Hands-on support to ensure strategies deliver measurable impact. Our team works alongside your organization to implement solutions effectively, ensuring alignment with your goals and culture.",
            bgImage: "assets/ex.jpg"
        }
    ];

    const phases = [
        {
            step: "1",
            title: "Diagnostic Assessment",
            description: "Comprehensive analysis of business challenges and opportunities",
            duration: "2 weeks"
        },
        {
            step: "2",
            title: "Solution Design",
            description: "Development of tailored strategies and implementation plans",
            duration: "3-4 weeks"
        },
        {
            step: "3",
            title: "Pilot Implementation",
            description: "Controlled rollout of key initiatives with performance tracking",
            duration: "4-6 weeks"
        },
        {
            step: "4",
            title: "Full-Scale Rollout",
            description: "Enterprise-wide deployment with change management support",
            duration: "Ongoing"
        }
    ];

    return (
        <div className="bg-blue-50">
            {/* Hero Section */}
            <section className="relative bg-gradient-to-r from-gray-800 to-gray-800 overflow-hidden">
                <div className="absolute inset-0 opacity-10">
                    <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSI2MCIgaGVpZ2h0PSI2MCIgdmlld0JveD0iMCAwIDYwIDYwIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxnIGZpbGw9IiNmZmYiIGZpbGwtb3BhY2l0eT0iMC4wNSI+PHBhdGggZD0iTTM2IDM0aDUwdi0ySDM2djJ6TTM2IDE2aDUwdi0ySDM2djJ6TTE2IDM0aDE4di0ySDE2djJ6TTE2IDE2aDE4di0ySDE2djJ6Ii8+PC9nPjwvZz48L3N2Zz4=')]"></div>
                </div>

                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 md:py-20">
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
                                    BUSINESS TRANSFORMATION EXPERTS
                                </span>
                            </motion.div>

                            <motion.h1 
                                className="text-2xl sm:text-4xl lg:text-5xl font-bold text-white leading-tight mb-6"
                                initial={{ opacity: 0, y: 10 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ delay: 0.3, duration: 0.6 }}
                            >
                                Management Consulting That <span className="text-blue-300">Drives Growth</span>
                            </motion.h1>

                            <motion.p 
                                className="text-xl text-blue-100 max-w-xl mb-8"
                                initial={{ opacity: 0, y: 10 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ delay: 0.4, duration: 0.6 }}
                            >
                                Data-driven strategies and operational excellence to transform your business performance.
                            </motion.p>

                            <motion.div 
                                className="flex flex-col sm:flex-row gap-4"
                                initial={{ opacity: 0, y: 10 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ delay: 0.5, duration: 0.6 }}
                            >
                                <motion.a
                                    href="https://calendly.com/vincent-onu/30min"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="bg-orange-500 text-white font-semibold py-3 px-8 rounded-lg shadow-lg hover:shadow-xl transition-all duration-300 flex items-center justify-center cursor-pointer"
                                    whileHover={{ scale: 1.03 }}
                                    whileTap={{ scale: 0.98 }}
                                >
                                    Request Consultation <FaArrowRight className="ml-2" />
                                </motion.a>
                            </motion.div>
                        </motion.div>

                        <motion.div 
                            className="relative"
                            initial={{ opacity: 0, x: 20 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ delay: 0.3, duration: 0.8 }}
                        >
                            <div className="relative z-10">
                                <img 
                                    src="https://images.unsplash.com/photo-1552664730-d307ca884978?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80" 
                                    alt="Business strategy illustration"
                                    className="w-full h-auto rounded-xl shadow-2xl border-8 border-white/10"
                                />
                            </div>
                            <div className="absolute -bottom-6 -right-6 w-64 h-64 bg-blue-400 rounded-full mix-blend-multiply filter blur-3xl opacity-20"></div>
                        </motion.div>
                    </div>
                </div>
            </section>

            {/* Services Section */}
            <section className="py-5 md:py-15 bg-blue-50 px-4">
                <div className="max-w-7xl mx-auto">
                    <motion.div 
                        className="text-center mb-16"
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6 }}
                        viewport={{ once: true }}
                    >
                        <h2 className="text-2xl md:text-4xl font-bold text-gray-900 mb-2">
                            Our Management Consulting
                        </h2>
                    </motion.div>
                    
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {services.map((service, index) => (
                            <motion.div
                                key={index}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.5, delay: index * 0.1 }}
                                viewport={{ once: true }}
                                className="group"
                            >
                                <div className="h-full bg-white rounded-xl shadow-md overflow-hidden border border-gray-100 group-hover:shadow-lg transition-all duration-300">
                                <div className="relative h-48 overflow-hidden">
                                        <img 
                                            src={service.bgImage} 
                                            alt={service.title}
                                            className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                                        />
                                        <div className="absolute inset-0"></div>
                                        <div className="absolute top-6 left-6">
                                            
                                        </div>
                                    </div>
                                    <div className="p-6">
                                        <h3 className="text-xl font-bold text-gray-900 mb-3">{service.title}</h3>
                                        <p className="text-gray-600">{service.description}</p>
                                    </div>
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            
            {/* Methodology Section */}
            <section className="py-5 bg-white px-4">
                <div className="max-w-6xl mx-auto">
                    <motion.div 
                        className="text-center mb-16"
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6 }}
                        viewport={{ once: true }}
                    >
                        <h2 className="text-2xl md:text-4xl font-bold text-gray-900 mb-4">
                            Our Consulting Approach
                        </h2>
                    </motion.div>
                    
                    <div className="relative">
                        <div className="hidden md:block absolute left-1/2 h-full w-1 bg-blue-200 transform -translate-x-1/2"></div>
                        
                        <div className="space-y-12 md:space-y-0">
                            {phases.map((phase, index) => (
                                <motion.div
                                    key={index}
                                    initial={{ opacity: 0, y: 20 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    transition={{ duration: 0.5, delay: index * 0.1 }}
                                    viewport={{ once: true }}
                                    className="relative"
                                >
                                    <div className={`hidden md:flex absolute top-8 left-1/2 w-6 h-6 rounded-full ${index % 2 === 0 ? 'bg-orange-500 -ml-12' : 'bg-blue-600 -mr-12'} items-center justify-center transform -translate-x-1/2`}>
                                        <span className="text-white font-bold">{phase.step}</span>
                                    </div>
                                    
                                    <div className={`md:w-5/12 ${index % 2 === 0 ? 'md:mr-auto' : 'md:ml-auto'}`}>
                                        <div className="bg-blue-50 p-6 rounded-xl shadow-md border border-gray-100 hover:shadow-lg transition-all duration-300">
                                            <div className="flex items-center mb-4">
                                                <div className="md:hidden bg-blue-600 text-white font-bold rounded-full w-8 h-8 flex items-center justify-center mr-3">
                                                    {phase.step}
                                                </div>
                                                <h3 className="text-xl font-semibold text-gray-900">{phase.title}</h3>
                                            </div>
                                            <p className="text-gray-600 mb-3">{phase.description}</p>
                                            <p className="text-sm text-blue-600 font-medium">{phase.duration}</p>
                                        </div>
                                    </div>
                                </motion.div>
                            ))}
                        </div>
                    </div>
                </div>
            </section>

            {/* Differentiators Section */}
            <section className="py-5 md:py-15 bg-blue-50 px-4">
                <div className="max-w-7xl mx-auto">
                    <div className="lg:flex lg:items-center lg:justify-between gap-12">
                        <motion.div 
                            className="lg:w-1/2"
                            initial={{ opacity: 0, x: -20 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            transition={{ duration: 0.6 }}
                            viewport={{ once: true }}
                        >
                            <h2 className="text-2xl md:text-4xl font-bold text-gray-900 mb-6">
                                Why Clients Choose Us
                            </h2>
                            <p className="text-lg text-blue-600 mb-6">
                                Our approach delivers results where others fail:
                            </p>
                            <ul className="space-y-4">
                                {[
                                    "C-Suite Experience (Ex-McKinsey, BCG, Bain)",
                                    "Industry-Specific Playbooks",
                                    "Implementation-Focused Engagement",
                                    "Global Network of Experts",
                                    "Confidential Discretion Guaranteed"
                                ].map((item, index) => (
                                    <li key={index} className="flex items-start">
                                        <FaHandshake className="text-orange-500 mt-1 mr-3 flex-shrink-0" />
                                        <span className="text-gray-700 text-lg">{item}</span>
                                    </li>
                                ))}
                            </ul>
                        </motion.div>
                        
                        <motion.div 
                            className="mt-10 lg:mt-0 lg:w-1/2"
                            initial={{ opacity: 0, x: 20 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            transition={{ duration: 0.6 }}
                            viewport={{ once: true }}
                        >
                            <div className="bg-white p-8 rounded-xl shadow-md border border-gray-100">
                                <h3 className="text-xl font-semibold text-gray-900 mb-4">Ready for Breakthrough Results?</h3>
                                <p className="text-gray-600 mb-6">
                                    Get a confidential assessment of your strategic opportunities.
                                </p>
                                <motion.a
                                    href="https://calendly.com/vincent-onu/30min"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="w-full flex items-center justify-center px-6 py-3 border border-transparent text-base font-medium rounded-lg shadow-sm text-white bg-orange-500 hover:bg-orange-600 transition-colors duration-300"
                                    whileHover={{ scale: 1.02 }}
                                    whileTap={{ scale: 0.98 }}
                                >
                                    Start with Diagnostic Review
                                </motion.a>
                            </div>
                        </motion.div>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default ManagementConsultingPage;