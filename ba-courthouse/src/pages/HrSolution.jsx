import { useEffect, useState } from 'react';
import { FaUsers, FaUserTie, FaChartLine, FaHandshake, FaArrowRight } from 'react-icons/fa';
import { MdOutlineWork, MdOutlineAttachMoney } from 'react-icons/md';
import { motion } from 'framer-motion';

const HRSolutionsPage = () => {
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
            setActiveIndex((prev) => (prev === 5 ? 0 : prev + 1));
        } else if (distance < -5) {
            setActiveIndex((prev) => (prev === 0 ? 5 : prev - 1));
        }
    };

    const solutions = [
        {
            icon: <FaUsers className="text-white text-2xl" />,
            title: "Talent Acquisition",
            description: "Modern recruitment strategies including employer branding, structured interviewing, and candidate experience optimization.",
            benefits: ["Reduce time-to-hire by 40%", "Improve quality of hire", "Diversity-focused sourcing"],
            bgImage: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80"
        },
        {
            icon: <FaUserTie className="text-white text-2xl" />,
            title: "Performance Management",
            description: "Implement continuous feedback systems and OKR frameworks to drive employee growth.",
            benefits: ["Increase productivity by 25%", "Real-time performance tracking", "Align individual & company goals"],
            bgImage: "https://images.unsplash.com/photo-1522071820081-009f0129c71c?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80"
        },
        {
            icon: <MdOutlineWork className="text-white text-2xl" />,
            title: "Employee Engagement",
            description: "Develop programs that boost morale, retention, and workplace satisfaction.",
            benefits: ["Reduce turnover by 30%", "Improve eNPS scores", "Strengthen company culture"],
            bgImage: "https://images.unsplash.com/photo-1579389083078-4e7018379f7e?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80"
        },
        {
            icon: <FaChartLine className="text-white text-2xl" />,
            title: "HR Analytics",
            description: "Data-driven insights into workforce trends and HR program effectiveness.",
            benefits: ["Predict attrition risks", "Measure ROI on HR initiatives", "Benchmark against industry"],
            bgImage: "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80"
        },
        {
            icon: <MdOutlineAttachMoney className="text-white text-2xl" />,
            title: "Compensation Strategy",
            description: "Competitive pay structures and incentive programs aligned with business objectives.",
            benefits: ["Market-competitive packages", "Pay equity analysis", "Performance-based rewards"],
            bgImage: "https://images.unsplash.com/photo-1552664730-d307ca884978?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80"
        },
        {
            icon: <FaHandshake className="text-white text-2xl" />,
            title: "Compliance & Policies",
            description: "Ensure workplace policies meet legal requirements and best practices.",
            benefits: ["Reduce legal risks", "Streamline documentation", "Training programs"],
            bgImage: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80"
        }
    ];

    const SolutionCard = ({ solution }) => (
        <motion.div 
            className="h-full bg-white rounded-xl shadow-md overflow-hidden border border-gray-100 hover:shadow-lg transition-all duration-300"
            whileHover={{ y: -5 }}
        >
            <div className="relative h-48 overflow-hidden">
                <img 
                    src={solution.bgImage} 
                    alt={solution.title}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                />
                <div className="absolute inset-0"></div>
                
            </div>
            <div className="p-6">
                <h3 className="text-xl font-bold text-gray-900 mb-3">{solution.title}</h3>
                <p className="text-gray-600 mb-4">{solution.description}</p>
                <ul className="space-y-2">
                    {solution.benefits.map((benefit, i) => (
                        <li key={i} className="flex items-start">
                            <span className="text-orange-500 mr-2">✓</span>
                            <span className="text-gray-700">{benefit}</span>
                        </li>
                    ))}
                </ul>
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
                                    HR TRANSFORMATION EXPERTS
                                </span>
                            </motion.div>

                            <motion.h1 
                                className="text-2xl sm:text-4xl lg:text-5xl font-bold text-white leading-tight mb-6"
                                initial={{ opacity: 0, y: 10 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ delay: 0.3, duration: 0.6 }}
                            >
                                HR Solutions for the <span className="text-blue-300">Modern Workplace</span>
                            </motion.h1>

                            <motion.p 
                                className="text-xl text-blue-100 max-w-xl mb-8"
                                initial={{ opacity: 0, y: 10 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ delay: 0.4, duration: 0.6 }}
                            >
                                Transform your talent strategy with data-driven HR solutions that attract, develop, and retain top performers.
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
                                    Get HR Consultation <FaArrowRight className="ml-2" />
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
                                    src="https://images.unsplash.com/photo-1521791136064-7986c2920216?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80" 
                                    alt="HR team collaboration"
                                    className="w-full h-auto rounded-xl shadow-2xl border-8 border-white/10"
                                />
                            </div>
                            <div className="absolute -bottom-6 -right-6 w-64 h-64 bg-blue-400 rounded-full mix-blend-multiply filter blur-3xl opacity-20"></div>
                        </motion.div>
                    </div>
                </div>
            </section>

            {/* Problem Statement */}
            <section className="py-5 md:py-15 bg-white px-4">
                <div className="max-w-6xl mx-auto">
                    <motion.div 
                        className="flex flex-col lg:grid lg:grid-cols-2 lg:gap-12 items-center"
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true }}
                        variants={{
                            visible: { opacity: 1, transition: { staggerChildren: 0.2 } },
                            hidden: { opacity: 0 }
                        }}
                    >
                        <motion.div 
                            className="lg:order-1"
                            variants={{
                                visible: { x: 0, opacity: 1 },
                                hidden: { x: -20, opacity: 0 }
                            }}
                            transition={{ duration: 0.6 }}
                        >
                            <h2 className="text-2xl md:text-3xl font-bold text-orange-600 mb-6">
                            Is Your Business Struggling with These HR Challenges?

                            </h2>
                            <ul className="space-y-4 text-gray-600">
                                {[
                                    "Difficulty attracting skilled talent in competitive markets",
                                    "High employee turnover impacting productivity",
                                    "Outdated performance management systems",
                                    "Lack of data-driven HR decision making",
                                    "Compliance risks with evolving labor laws"
                                ].map((item, index) => (
                                    <motion.li 
                                        key={index} 
                                        className="flex items-start"
                                        variants={{
                                            visible: { x: 0, opacity: 1 },
                                            hidden: { x: -20, opacity: 0 }
                                        }}
                                        transition={{ duration: 0.6, delay: index * 0.1 }}
                                    >
                                        <div className="flex-shrink-0 h-5 w-5 text-orange-500 mr-3 mt-0.5">•</div>
                                        <p className="text-lg">{item}</p>
                                    </motion.li>
                                ))}
                            </ul>
                        </motion.div>
                        <motion.div 
                            className="mt-8 lg:mt-0 lg:order-2"
                            variants={{
                                visible: { x: 0, opacity: 1 },
                                hidden: { x: 20, opacity: 0 }
                            }}
                            transition={{ duration: 0.6 }}
                        >
                            <img 
                                src="/assets/ch.jpg" 
                                alt="HR team discussing challenges" 
                                className="rounded-xl shadow-lg w-full"
                            />
                        </motion.div>
                    </motion.div>
                </div>
            </section>

            {/* Our Solutions */}
            <section className="py-5 md:py-15 bg-blue-50 px-4">
                <div className="max-w-6xl mx-auto">
                    <motion.div 
                        className="text-center mb-16"
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6 }}
                        viewport={{ once: true }}
                    >
                        <h2 className="text-2xl md:text-4xl font-bold text-gray-900 mb-2">
                            Our HR Solutions
                        </h2>
                    </motion.div>
                    
                    {/* Desktop Grid View */}
                    <div className="hidden md:grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {solutions.map((solution, index) => (
                            <motion.div
                                key={index}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.5, delay: index * 0.1 }}
                                viewport={{ once: true }}
                            >
                                <SolutionCard solution={solution} />
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
                                {solutions.map((solution, index) => (
                                    <div key={index} className="w-full flex-shrink-0 px-2">
                                        <SolutionCard solution={solution} />
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
                            {solutions.map((_, index) => (
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

        
            {/* CTA Section */}
            <section className="py-5 md:py-15 bg-blue-50 px-4">
                <div className="max-w-4xl mx-auto text-center">
                    <motion.div 
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6 }}
                        viewport={{ once: true }}
                    >
                        <h2 className="text-2xl md:text-3xl font-bold text-blue-600 mb-6">
                            Ready to Transform Your HR Strategy?
                        </h2>
                        <p className="text-xl text-gray-600 mb-8">
                            Our HR experts will help you build a workforce that drives business success.
                        </p>
                        <div className="flex flex-col sm:flex-row justify-center gap-4">
                            <motion.a
                                href="https://calendly.com/vincent-onu/30min"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="bg-orange-500 hover:bg-orange-600 text-white font-semibold py-3 px-8 rounded-lg shadow-md hover:shadow-lg transition-all duration-300"
                                whileHover={{ scale: 1.03 }}
                                whileTap={{ scale: 0.98 }}
                            >
                                Get Started Today
                            </motion.a>
                            <motion.button 
                                className="border-2 border-blue-600 text-blue-600 hover:bg-blue-50 font-semibold py-3 px-8 rounded-lg transition-all duration-300"
                                whileHover={{ scale: 1.03 }}
                                whileTap={{ scale: 0.98 }}
                            >
                                Learn More
                            </motion.button>
                        </div>
                    </motion.div>
                </div>
            </section>
        </div>
    );
};

export default HRSolutionsPage;