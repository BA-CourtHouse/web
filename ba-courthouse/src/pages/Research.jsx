import { useEffect, useState } from 'react';
import { FaSearch, FaLightbulb, FaChartBar, FaRocket, FaArrowRight } from 'react-icons/fa';
import { motion } from 'framer-motion';
import { useNavigate } from 'react-router-dom';


const ResearchSolutionDevelopmentPage = () => {
    const navigate = useNavigate();
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    const caseStudies = [
        {
            title: "AI-Powered Customer Segmentation",
            result: "Increased marketing ROI by 45%",
            features: ["Behavioral Analysis", "Predictive Modeling", "Dynamic Personalization"],
            bgImage: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80"
        },
        {
            title: "Supply Chain Optimization",
            result: "Reduced operational costs by 30%",
            features: ["Process Mining", "Digital Twin Simulation", "Prescriptive Analytics"],
            bgImage: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80"
        }
    ];

    const researchProcess = [
        {
            step: "1",
            title: "Problem Definition",
            description: "Scope challenges and success metrics. We define the problem space and identify key objectives.",
            icon: <FaSearch className="text-white text-2xl" />,
            bgImage: "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80"
        },
        {
            step: "2",
            title: "Data Collection",
            description: "Quantitative & qualitative research. We gather data through surveys, interviews, and market analysis.",
            icon: <FaChartBar className="text-white text-2xl" />,
            bgImage: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80"
        },
        {
            step: "3",
            title: "Analysis",
            description: "Pattern recognition & insight generation. We analyze data to uncover trends and insights that inform our solutions.",
            icon: <FaLightbulb className="text-white text-2xl" />,
            bgImage: "https://images.unsplash.com/photo-1522071820081-009f0129c71c?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80"
        },
        {
            step: "4",
            title: "Solution Design",
            description: "Concept development & validation. We create prototypes and validate concepts with stakeholders to ensure alignment with business needs.",
            icon: <FaRocket className="text-white text-2xl" />,
            bgImage: "https://images.unsplash.com/photo-1579389083078-4e7018379f7e?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80"
        }
    ];

    const ProcessCard = ({ step }) => (
        <motion.div 
            className="h-full bg-white rounded-xl shadow-md overflow-hidden border border-gray-100 hover:shadow-lg transition-all duration-300"
            whileHover={{ y: -5 }}
        >
           
            <div className="p-6">
                <div className="flex items-center mb-3">
                    <div className="bg-blue-600 text-white font-bold rounded-full w-8 h-8 flex items-center justify-center mr-3">
                        {step.step}
                    </div>
                    <h3 className="text-xl font-semibold text-gray-900">{step.title}</h3>
                </div>
                <p className="text-gray-600">{step.description}</p>
            </div>
        </motion.div>
    );

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
                                    RESEARCH & INNOVATION EXPERTS
                                </span>
                            </motion.div>

                            <motion.h1 
                                className="text-2xl sm:text-4xl lg:text-5xl font-bold text-white leading-tight mb-6"
                                initial={{ opacity: 0, y: 10 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ delay: 0.3, duration: 0.6 }}
                            >
                                Research & <span className="text-blue-300">Solution Development</span>
                            </motion.h1>

                            <motion.p 
                                className="text-xl text-blue-100 max-w-xl mb-8"
                                initial={{ opacity: 0, y: 10 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ delay: 0.4, duration: 0.6 }}
                            >
                                Evidence-based innovation that transforms business challenges into competitive advantages.
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
                                    Start Your Assessment <FaArrowRight className="ml-2" />
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
                                    src="https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80" 
                                    alt="Research and development illustration"
                                    className="w-full h-auto rounded-xl shadow-2xl border-8 border-white/10"
                                />
                            </div>
                            <div className="absolute -bottom-6 -right-6 w-64 h-64 bg-blue-400 rounded-full mix-blend-multiply filter blur-3xl opacity-20"></div>
                        </motion.div>
                    </div>
                </div>
            </section>

            {/* Value Proposition */}
            <section className="py-5 md:py-15 bg-white px-4">
                <div className="max-w-7xl mx-auto">
                    <motion.div 
                        className="text-center mb-16"
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6 }}
                        viewport={{ once: true }}
                    >
                        <h2 className="text-2xl md:text-4xl font-bold text-gray-900 mb-2">
                            From Insight to Implementation
                        </h2>
                        <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                            Our research-driven approach uncovers hidden opportunities and delivers actionable solutions.
                        </p>
                    </motion.div>
                    
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                        {[
                            {
                                icon: <FaSearch className="text-white text-2xl" />,
                                title: "Deep Discovery",
                                description: "Comprehensive analysis of your business ecosystem and pain points",
                                bgImage: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80"
                            },
                            {
                                icon: <FaLightbulb className="text-white text-2xl" />,
                                title: "Innovation Frameworks",
                                description: "Structured ideation sessions to generate breakthrough solutions",
                                bgImage: "https://images.unsplash.com/photo-1522071820081-009f0129c71c?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80"
                            },
                            {
                                icon: <FaRocket className="text-white text-2xl" />,
                                title: "Rapid Prototyping",
                                description: "Tangible proofs-of-concept to validate ideas quickly",
                                bgImage: "https://images.unsplash.com/photo-1579389083078-4e7018379f7e?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80"
                            }
                        ].map((feature, index) => (
                            <motion.div
                                key={index}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.5, delay: index * 0.1 }}
                                viewport={{ once: true }}
                                className="group"
                            >
                                <div className="h-full bg-white rounded-xl shadow-md overflow-hidden border border-gray-100 hover:shadow-lg transition-all duration-300">
                                    <div className="relative h-48 overflow-hidden">
                                        <img 
                                            src={feature.bgImage} 
                                            alt={feature.title}
                                            className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                                        />
                                        <div className="absolute inset-0"></div>
                                        
                                    </div>
                                    <div className="p-6">
                                        <h3 className="text-xl font-bold text-gray-900 mb-3">{feature.title}</h3>
                                        <p className="text-gray-600">{feature.description}</p>
                                    </div>
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Research Process */}
            <section className="py-5 md:py-15 bg-blue-50 px-4">
                <div className="max-w-6xl mx-auto">
                    <motion.div 
                        className="text-center mb-16"
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6 }}
                        viewport={{ once: true }}
                    >
                        <h2 className="text-2xl md:text-4xl font-bold text-gray-900 mb-4">
                            Our Research Process
                        </h2>
                    </motion.div>
                    
                    <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
                        {researchProcess.map((step, index) => (
                            <motion.div
                                key={index}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.5, delay: index * 0.1 }}
                                viewport={{ once: true }}
                            >
                                <ProcessCard step={step} />
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Case Studies */}
            <section className="py-5 md:py-15 bg-white px-4">
                <div className="max-w-7xl mx-auto">
                    <motion.div 
                        className="text-center mb-16"
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6 }}
                        viewport={{ once: true }}
                    >
                        <h2 className="text-2xl md:text-4xl font-bold text-gray-900 mb-2">
                            Research Case Studies
                        </h2>
                    </motion.div>
                    
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                        {caseStudies.map((project, index) => (
                            <motion.div
                                key={index}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.5, delay: index * 0.1 }}
                                viewport={{ once: true }}
                                className="group"
                            >
                                <div className="h-full bg-white rounded-xl shadow-md overflow-hidden border border-gray-100 hover:shadow-lg transition-all duration-300">
                                    <div className="relative h-48 overflow-hidden">
                                        <img 
                                            src={project.bgImage} 
                                            alt={project.title}
                                            className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                                        />
                                        <div className="absolute inset-0"></div>
                                    </div>
                                    <div className="p-6">
                                        <h3 className="text-xl font-bold text-gray-900 mb-3">{project.title}</h3>
                                        <p className="text-orange-500 font-medium mb-4">{project.result}</p>
                                        <ul className="space-y-2">
                                            {project.features.map((feature, i) => (
                                                <li key={i} className="flex items-start">
                                                    <span className="text-blue-500 mr-2">✓</span>
                                                    <span className="text-gray-700">{feature}</span>
                                                </li>
                                            ))}
                                        </ul>
                                    </div>
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Innovation Approach */}
            <section className="py-5 md:py-15 bg-blue-50 px-4">
                <div className="max-w-6xl mx-auto">
                    <div className="lg:flex lg:items-center lg:justify-between gap-12">
                        <motion.div 
                            className="lg:w-1/2"
                            initial={{ opacity: 0, x: -20 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            transition={{ duration: 0.6 }}
                            viewport={{ once: true }}
                        >
                            <h2 className="text-2xl md:text-4xl font-bold text-gray-900 mb-6">
                                Evidence-Based Innovation
                            </h2>
                            <p className="text-lg text-blue-600 mb-6">
                                Our approach combines rigorous research with creative problem-solving:
                            </p>
                            <ul className="space-y-4">
                                {[
                                    "Cross-disciplinary research teams",
                                    "Data-driven decision making",
                                    "Human-centered design principles",
                                    "Emerging technology scanning",
                                    "Continuous validation loops"
                                ].map((item, index) => (
                                    <li key={index} className="flex items-start">
                                        <FaLightbulb className="text-orange-500 mt-1 mr-3 flex-shrink-0" />
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
                                <h3 className="text-xl font-semibold text-gray-900 mb-4">Need Research Support?</h3>
                                <p className="text-gray-600 mb-6">
                                    Our research team can help uncover insights and opportunities.
                                </p>
                                <motion.a
                                    href="https://calendly.com/vincent-onu/30min"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="w-full flex items-center justify-center px-6 py-3 border border-transparent text-base font-medium rounded-lg shadow-sm text-white bg-orange-500 hover:bg-orange-600 transition-colors duration-300"
                                    whileHover={{ scale: 1.02 }}
                                    whileTap={{ scale: 0.98 }}
                                >
                                    Discuss Your Project
                                </motion.a>
                            </div>
                        </motion.div>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default ResearchSolutionDevelopmentPage;