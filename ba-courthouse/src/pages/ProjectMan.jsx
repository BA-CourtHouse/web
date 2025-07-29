import { useEffect, useState } from 'react';
import { FaProjectDiagram, FaChartLine, FaUsers, FaClipboardCheck, FaArrowRight } from 'react-icons/fa';
import { motion } from 'framer-motion';
import { useNavigate } from 'react-router-dom';


const ProjectManagementPage = () => {
    const navigate = useNavigate();

    ;
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
            setActiveIndex((prev) => (prev === 3 ? 0 : prev + 1));
        } else if (distance < -5) {
            setActiveIndex((prev) => (prev === 0 ? 3 : prev - 1));
        }
    };

    const processSteps = [
        {
            step: "1",
            title: "Planning ",
            description: "Define objectives, deliverables, and success metrics. We create a detailed project plan with timelines and resources.",
            icon: <FaClipboardCheck className="text-white text-2xl" />,
            bgImage: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80"
        },
        {
            step: "2",
            title: "Team Assembly",
            description: "Identify stakeholders and build project teams. We ensure the right skills are matched to project needs and establish communication protocols.",
            icon: <FaUsers className="text-white text-2xl" />,
            bgImage: "https://images.unsplash.com/photo-1522071820081-009f0129c71c?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80"
        },
        {
            step: "3",
            title: "Execution",
            description: "Monitor progress with agile tracking systems. This includes daily stand-ups, sprint reviews, and retrospectives.",
            icon: <FaProjectDiagram className="text-white text-2xl" />,
            bgImage: "https://images.unsplash.com/photo-1552664730-d307ca884978?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80"
        },
        {
            step: "4",
            title: "Review & Handoff",
            description: "Conduct retrospectives and transition ownership. Your project is delivered with all documentation and training for your team.",
        }
    ];

    const services = [
        {
            title: "Comprehensive Project Oversight",
            description: "End-to-end management from initiation to closure",
            features: [
                "Initiation to closure management",
                "Triple constraint optimization (time/cost/scope)",
                "Risk assessment and mitigation planning",
                "Stakeholder communication frameworks"
            ],
            bgImage: "https://images.unsplash.com/photo-1579389083078-4e7018379f7e?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80"
        },
        {
            title: "Methodologies We Implement",
            description: "Tailored approaches for your project needs",
            features: [
                "Agile (Scrum, Kanban)",
                "Traditional Waterfall",
                "Hybrid approaches",
                "Lean project management"
            ],
            bgImage: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80"
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
                                    PMP-CERTIFIED EXPERTS
                                </span>
                            </motion.div>

                            <motion.h1 
                                className="text-2xl sm:text-4xl lg:text-5xl font-bold text-white leading-tight mb-6"
                                initial={{ opacity: 0, y: 10 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ delay: 0.3, duration: 0.6 }}
                            >
                                Professional Project <span className="text-blue-300">Management</span>
                            </motion.h1>

                            <motion.p 
                                className="text-xl text-blue-100 max-w-xl mb-8"
                                initial={{ opacity: 0, y: 10 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ delay: 0.4, duration: 0.6 }}
                            >
                                Delivering your projects on time, within scope, and under budget.
                            </motion.p>

                            <motion.div 
                                className="flex flex-col sm:flex-row gap-4"
                                initial={{ opacity: 0, y: 10 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ delay: 0.5, duration: 0.6 }}
                            >
                                <motion.button
                                    style={{ zIndex: 10 }} // Force it to stay on top
                                    onClick={() => navigate('/assessment/Project Management')}
                                    className="bg-orange-500 text-white font-semibold py-3 px-8 rounded-lg shadow-lg hover:shadow-xl transition-all duration-300 flex items-center justify-center cursor-pointer"
                                    whileHover={{ scale: 1.03 }}
                                    whileTap={{ scale: 0.98 }}
                                >
                                    Get Your PM Assessment <FaArrowRight className="ml-2" />
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
                                    src="https://images.unsplash.com/photo-1579389083078-4e7018379f7e?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80" 
                                    alt="Project management illustration"
                                    className="w-full h-auto rounded-xl shadow-2xl border-8 border-white/10"
                                />
                            </div>
                            <div className="absolute -bottom-6 -right-6 w-64 h-64 bg-blue-400 rounded-full mix-blend-multiply filter blur-3xl opacity-20"></div>
                        </motion.div>
                    </div>
                </div>
            </section>

            {/* Services Section */}
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
                            End-to-End Project Leadership
                        </h2>
                        <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                            We implement industry-standard methodologies tailored to your organization's needs.
                        </p>
                    </motion.div>
                    
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                        {services.map((service, index) => (
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
                                            src={service.bgImage} 
                                            alt={service.title}
                                            className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                                        />
                                        <div className="absolute inset-0 bg-gradient-to-t from-blue-900/80 to-blue-800/50"></div>
                                    </div>
                                    <div className="p-6">
                                        <h3 className="text-xl font-bold text-gray-900 mb-3">{service.title}</h3>
                                        <p className="text-gray-600 mb-4">{service.description}</p>
                                        <ul className="space-y-2">
                                            {service.features.map((feature, i) => (
                                                <li key={i} className="flex items-start">
                                                    <span className="text-orange-500 mr-2">•</span>
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

            {/* Process Section */}
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
                            Our Project Management Approach
                        </h2>
                    </motion.div>
                    
                    {/* Desktop Grid View */}
                    <div className="hidden md:grid md:grid-cols-4 gap-8">
                        {processSteps.map((step, index) => (
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
                                {processSteps.map((step, index) => (
                                    <div key={index} className="w-full flex-shrink-0 px-2">
                                        <ProcessCard step={step} />
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
                            {processSteps.map((_, index) => (
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
        </div>
    );
};

export default ProjectManagementPage;