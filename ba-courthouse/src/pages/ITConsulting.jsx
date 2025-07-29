import { useEffect, useState } from 'react';
import { FaChartLine, FaArrowRight, FaCogs, FaServer, FaUsersCog, FaShieldAlt } from 'react-icons/fa';
import { motion } from 'framer-motion';
import { useNavigate } from 'react-router-dom';


const ITBusinessConsultingPage = () => {

const navigate = useNavigate();
    
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);
    
    

    const phases = [
        {
            step: "1",
            title: "Discovery & Assessment",
            description: "Comprehensive audit of current systems, processes, and pain points",
            duration: "1-2 weeks"
        },
        {
            step: "2",
            title: "Gap Analysis",
            description: "Identify mismatches between current state and business objectives",
            duration: "1 week"
        },
        {
            step: "3",
            title: "Solution Design",
            description: "Develop customized technology roadmap with implementation plan",
            duration: "2-3 weeks"
        },
        {
            step: "4",
            title: "Execution Support",
            description: "Assist with vendor selection, rollout, and change management",
            duration: "Ongoing"
        }
    ];

    const services = [
        {
            icon: <FaChartLine className="text-white text-4xl mb-4" />,
            title: "IT Strategy Development",
            description: "Create a roadmap aligning technology with 3-5 year business objectives, including budget planning and ROI analysis.",
            bgImage: "/assets/it.jpg"
        },
        {
            icon: <FaCogs className="text-white text-4xl mb-4" />,
            title: "System Optimization",
            description: "Audit existing infrastructure to identify performance bottlenecks and cost-saving opportunities.",
            bgImage: "https://images.unsplash.com/photo-1485827404703-89b55fcc595e?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80"
        },
        
        {
            icon: <FaServer className="text-white text-4xl mb-4" />,
            title: "Infrastructure Planning",
            description: "Design scalable, secure architectures that grow with your business needs.",
            bgImage: "https://images.unsplash.com/photo-1467232004584-a241de8bcf5d?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80"
        },
        {
            icon: <FaUsersCog className="text-white text-4xl mb-4" />,
            title: "Vendor Management",
            description: "Evaluate and select technology partners, negotiate contracts, and manage relationships.",
            bgImage: "https://images.unsplash.com/photo-1522071820081-009f0129c71c?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80"
        },
        {
            icon: <FaShieldAlt className="text-white text-4xl mb-4" />,
            title: "Compliance & Security",
            description: "Ensure systems meet industry regulations (GDPR, HIPAA, etc.) with robust security frameworks.",
            bgImage: "https://images.unsplash.com/photo-1550751827-4bd374c3f58b?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80"
        }, 
        {
            icon: <FaUsersCog className="text-white text-4xl mb-4" />,
            title: "Digital Transformation",
            description: "Guide your transition to cloud-based solutions, automation, and next-gen technologies.",
            bgImage: "/assets/digi.jpg"
        }
    ];



  

    return (
       
        <div className="bg-blue-50">
             
            {/* Hero Section - Redesigned with same colors */}
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
                                    DIGITAL TRANSFORMATION EXPERTS
                                </span>
                            </motion.div>

                            <motion.h1 
                                className="text-2xl sm:text-4xl lg:text-5xl font-bold text-white leading-tight mb-6"
                                initial={{ opacity: 0, y: 10 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ delay: 0.3, duration: 0.6 }}
                            >
                                IT Business Consulting That <span className="text-blue-300">Drives Digital Transformation</span>
                            </motion.h1>

                            <motion.p 
                                className="text-xl text-blue-100 max-w-xl mb-8"
                                initial={{ opacity: 0, y: 10 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ delay: 0.4, duration: 0.6 }}
                            >
                                Align technology with business goals for maximum ROI and operational efficiency.
                            </motion.p>

                            <motion.div 
                            className="flex flex-col sm:flex-row gap-4"
                            initial={{ opacity: 0, y: 10 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.5, duration: 0.6 }}
                            >
                                <motion.button
                                    style={{ zIndex: 10 }} // Force it to stay on top
                                    onClick={() => navigate('/assessment/IT Consulting')}
                                    className="bg-orange-500 text-white font-semibold py-3 px-8 rounded-lg shadow-lg hover:shadow-xl transition-all duration-300 flex items-center justify-center cursor-pointer"
                                    whileHover={{ scale: 1.03 }}
                                    whileTap={{ scale: 0.98 }}
                                >
                                    Get Your IT Assessment <FaArrowRight className="ml-2" />
                                </motion.button>
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
                                    src="https://images.unsplash.com/photo-1551288049-bebda4e38f71?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80" 
                                    alt="Business technology illustration"
                                    className="w-full h-auto rounded-xl shadow-2xl border-8 border-white/10"
                                />
                            </div>
                            <div className="absolute -bottom-6 -right-6 w-64 h-64 bg-blue-400 rounded-full mix-blend-multiply filter blur-3xl opacity-20"></div>
                        </motion.div>
                    </div>
                </div>
            </section>

            {/* Services Section - Enhanced Card Design */}
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
                            Our IT Consulting Services
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
                                        <div className="absolute inset-0 "></div>
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

            {/* Methodology Section - Enhanced Timeline */}
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
                        {/* Timeline */}
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
                                    {/* Timeline dot */}
                                    <div className={`hidden md:flex absolute top-8 left-1/2 w-6 h-6 rounded-full ${index % 2 === 0 ? 'bg-orange-500 -ml-12' : 'bg-blue-600 -mr-12'} items-center justify-center transform -translate-x-1/2`}>
                                        <span className="text-white font-bold">{phase.step}</span>
                                    </div>
                                    
                                    {/* Card - alternates sides on desktop */}
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
        </div>
    );
};

export default ITBusinessConsultingPage;