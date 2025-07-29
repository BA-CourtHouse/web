import { useEffect, useState } from 'react';
import { FaCode, FaMobileAlt, FaServer, FaChartLine, FaShieldAlt, FaArrowRight } from 'react-icons/fa';
import { motion } from 'framer-motion';
import { useNavigate } from 'react-router-dom';


const WebAppDevelopmentPage = () => {
    const navigate = useNavigate();

    const [activeIndex, setActiveIndex] = useState(0);
    const [touchStart, setTouchStart] = useState(null);
    const [touchEnd, setTouchEnd] = useState(null);
    
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    const handleTouchStart = (e) => {
        setTouchStart(e.targetTouches[0].clientX);
    };

    const handleTouchMove = (e) => {
        setTouchEnd(e.targetTouches[0].clientX);
    };

    const handleTouchEnd = () => {
        if (!touchStart || !touchEnd) return;
        
        const distance = touchStart - touchEnd;
        if (distance > 5) {
            setActiveIndex((prev) => (prev === 2 ? 0 : prev + 1));
        } else if (distance < -5) {
            setActiveIndex((prev) => (prev === 0 ? 2 : prev - 1));
        }
    };

    const technologies = [
        { name: "Frontend", tools: "React, Next.js, Vue, Angular, Tailwind CSS.", bgImage: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80" },
        { name: "Backend", tools: "Node.js, Python/Django, Ruby on Rails, .NET", bgImage: "https://images.unsplash.com/photo-1579389083078-4e7018379f7e?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80" },
        { name: "Mobile", tools: "React Native, Flutter, Swift, Kotlin", bgImage: "https://images.unsplash.com/photo-1522071820081-009f0129c71c?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80" },
        { name: "Database", tools: "PostgreSQL, MongoDB, Firebase, AWS DynamoDB", bgImage: "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80" },
        { name: "DevOps", tools: "Docker, Kubernetes, AWS, GitHub Actions", bgImage: "https://images.unsplash.com/photo-1552664730-d307ca884978?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80" },
    ];

   

    const features = [
        {
            icon: <FaCode className="text-white text-2xl" />,
            title: "Full-Cycle Development",
            description: "From concept to deployment and maintenance - we handle every stage of your project lifecycle. We specialize in building robust web and mobile applications that scale with your business needs.",
            bgImage: "/assets/w1.jpg"
        },
        {
            icon: <FaMobileAlt className="text-white text-2xl" />,
            title: "Cross-Platform Solutions",
            description: "Build once, deploy everywhere with our hybrid and native app development expertise. We create seamless user experiences across web and mobile platforms, ensuring your application reaches a wider audience.",
            bgImage: "https://images.unsplash.com/photo-1522071820081-009f0129c71c?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80"
        },
        {
            icon: <FaChartLine className="text-white text-2xl" />,
            title: "Performance Optimized",
            description: "Applications engineered for speed, scalability, and seamless user experiences. Our team focuses on building high-performance applications that deliver exceptional user experiences, ensuring your product stands out in a crowded market.",
            bgImage: "/assets/W4.jpg"
        }
    ];

    const FeatureCard = ({ feature }) => (
        <motion.div 
            className="h-full bg-white rounded-xl shadow-md overflow-hidden border border-gray-100 hover:shadow-lg transition-all duration-300"
            whileHover={{ y: -5 }}
        >
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
        </motion.div>
    );

    const TechCard = ({ tech }) => (
        <motion.div 
            className="bg-white p-6 rounded-xl shadow-md border border-gray-100 hover:shadow-lg transition-all duration-300 h-full"
            whileHover={{ y: -5 }}
        >
            
            <h3 className="text-lg font-semibold text-blue-600 mb-2">{tech.name}</h3>
            <p className="text-gray-600 text-sm">{tech.tools}</p>
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
                                    FULL-STACK DEVELOPMENT EXPERTS
                                </span>
                            </motion.div>

                            <motion.h1 
                                className="text-2xl sm:text-4xl lg:text-5xl font-bold text-white leading-tight mb-6"
                                initial={{ opacity: 0, y: 10 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ delay: 0.3, duration: 0.6 }}
                            >
                                Web & <span className="text-blue-300">App Development</span>
                            </motion.h1>

                            <motion.p 
                                className="text-xl text-blue-100 max-w-xl mb-8"
                                initial={{ opacity: 0, y: 10 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ delay: 0.4, duration: 0.6 }}
                            >
                                Custom digital solutions built with cutting-edge technologies to drive growth and efficiency.
                            </motion.p>

                            <motion.div 
                                className="flex flex-col sm:flex-row gap-4"
                                initial={{ opacity: 0, y: 10 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ delay: 0.5, duration: 0.6 }}
                            >
                                <motion.button
                                    style={{ zIndex: 10 }} // Force it to stay on top
                                    onClick={() => navigate('/assessment/WebApp Development')}
                                    className="bg-orange-500 text-white font-semibold py-3 px-8 rounded-lg shadow-lg hover:shadow-xl transition-all duration-300 flex items-center justify-center cursor-pointer"
                                    whileHover={{ scale: 1.03 }}
                                    whileTap={{ scale: 0.98 }}
                                >
                                    Start Your Project <FaArrowRight className="ml-2" />
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
                                    src="/assets/w2.jpg" 
                                    alt="Web and app development illustration"
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
                <div className="max-w-6xl mx-auto">
                    <motion.div 
                        className="text-center mb-16"
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6 }}
                        viewport={{ once: true }}
                    >
                        <h2 className="text-2xl md:text-4xl font-bold text-gray-900 mb-2">
                            Transform Your Digital Presence
                        </h2>
                        <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                            In today's competitive landscape, having a high-performing digital product isn't optional.
                        </p>
                    </motion.div>
                    
                    {/* Desktop Grid View */}
                    <div className="hidden md:grid md:grid-cols-3 gap-8">
                        {features.map((feature, index) => (
                            <motion.div
                                key={index}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.5, delay: index * 0.1 }}
                                viewport={{ once: true }}
                            >
                                <FeatureCard feature={feature} />
                            </motion.div>
                        ))}
                    </div>
                    
                    {/* Mobile Carousel View */}
                    <div className="md:hidden">
                        <motion.div 
                            className="relative overflow-hidden"
                            onTouchStart={handleTouchStart}
                            onTouchMove={handleTouchMove}
                            onTouchEnd={handleTouchEnd}
                            initial={{ opacity: 0 }}
                            whileInView={{ opacity: 1 }}
                            transition={{ duration: 0.6 }}
                            viewport={{ once: true }}
                        >
                            <div 
                                className="flex transition-transform duration-300 ease-out"
                                style={{ transform: `translateX(-${activeIndex * 100}%)` }}
                            >
                                {features.map((feature, index) => (
                                    <div key={index} className="w-full flex-shrink-0 px-2">
                                        <FeatureCard feature={feature} />
                                    </div>
                                ))}
                            </div>
                        </motion.div>
                        
                        {/* Navigation Dots */}
                        <motion.div 
                            className="flex justify-center mt-6 space-x-2"
                            initial={{ opacity: 0 }}
                            whileInView={{ opacity: 1 }}
                            transition={{ delay: 0.3, duration: 0.6 }}
                            viewport={{ once: true }}
                        >
                            {features.map((_, index) => (
                                <button
                                    key={index}
                                    onClick={() => setActiveIndex(index)}
                                    className={`w-3 h-3 rounded-full ${index === activeIndex ? 'bg-blue-600' : 'bg-gray-300'}`}
                                    aria-label={`Go to slide ${index + 1}`}
                                />
                            ))}
                        </motion.div>
                    </div>
                </div>
            </section>

            {/* Technology Stack */}
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
                            Our Technology Stack
                        </h2>
                    </motion.div>
                    
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-8">
                        {technologies.map((tech, index) => (
                            <motion.div
                                key={index}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.5, delay: index * 0.1 }}
                                viewport={{ once: true }}
                            >
                                <TechCard tech={tech} />
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            

            {/* Security & Compliance */}
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
                                Security-First Development
                            </h2>
                            <p className="text-lg text-blue-600 mb-6">
                                We implement enterprise-grade security measures at every layer:
                            </p>
                            <ul className="space-y-4">
                                {[
                                    "OWASP Top 10 Compliance",
                                    "Regular Penetration Testing",
                                    "GDPR & HIPAA Ready Solutions",
                                    "End-to-End Encryption",
                                    "Secure CI/CD Pipelines"
                                ].map((item, index) => (
                                    <li key={index} className="flex items-start">
                                        <FaShieldAlt className="text-orange-500 mt-1 mr-3 flex-shrink-0" />
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
                                <h3 className="text-xl font-semibold text-gray-900 mb-4">Ready to Build Something Amazing?</h3>
                                <p className="text-gray-600 mb-6">
                                    Get a free 30-minute consultation with our technical architect.
                                </p>
                                <motion.a
                                    href="https://calendly.com/vincent-onu/30min"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="w-full flex items-center justify-center px-6 py-3 border border-transparent text-base font-medium rounded-lg shadow-sm text-white bg-orange-500 hover:bg-orange-600 transition-colors duration-300"
                                    whileHover={{ scale: 1.02 }}
                                    whileTap={{ scale: 0.98 }}
                                >
                                    Schedule Free Consultation
                                </motion.a>
                            </div>
                        </motion.div>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default WebAppDevelopmentPage;