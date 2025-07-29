import { useEffect, useState } from 'react';
import { FaRocket, FaUsers, FaChartLine, FaSyncAlt, FaArrowRight } from 'react-icons/fa';
import { motion } from 'framer-motion';
import { useNavigate } from 'react-router-dom'

const AgileCoachingPage = () => {

    const navigate = useNavigate();
    const [isAssessmentOpen, setIsAssessmentOpen] = useState(false);

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

    const frameworkItems = [
        {
            icon: <FaRocket className="text-white text-2xl" />,
            title: "Scrum Mastery",
            description: "From basic ceremonies to advanced facilitation techniques for high-performing teams. The Scrum Master is the linchpin of Agile success.",
            bgImage: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80"
        },
        {
            icon: <FaUsers className="text-white text-2xl" />,
            title: "Kanban Flow",
            description: "Visualize work, limit WIP, and optimize your delivery pipeline. This isn't just Kanban, it's Kanban done right.",
            bgImage: "https://images.unsplash.com/photo-1522071820081-009f0129c71c?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80"
        },
        {
            icon: <FaChartLine className="text-white text-2xl" />,
            title: "SAFe® Implementation",
            description: "Scale Agile across teams with proven enterprise frameworks. Our SAFe® experts guide you through every step.",
            bgImage: "https://images.unsplash.com/photo-1579389083078-4e7018379f7e?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80"
        },
        {
            icon: <FaSyncAlt className="text-white text-2xl" />,
            title: "Continuous Improvement",
            description: "Build self-sufficient teams through retrospectives and metrics. We don't just teach Agile, we embed it into your organizational DNA.",
            bgImage: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80"
        }
    ];

    const FrameworkCard = ({ item }) => (
        <motion.div 
            className="h-full bg-white rounded-xl shadow-md overflow-hidden border border-gray-100 hover:shadow-lg transition-all duration-300"
            whileHover={{ y: -5 }}
        >
            <div className="relative h-48 overflow-hidden">
                <img 
                    src={item.bgImage} 
                    alt={item.title}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                />
                <div className="absolute inset-0 "></div>
                
            </div>
            <div className="p-6">
                <h3 className="text-xl font-bold text-gray-900 mb-3">{item.title}</h3>
                <p className="text-gray-600">{item.description}</p>
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
                AGILE TRANSFORMATION EXPERTS
              </span>
            </motion.div>

            <motion.h1 
              className="text-2xl sm:text-4xl lg:text-5xl font-bold text-white leading-tight mb-6"
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3, duration: 0.6 }}
            >
              Agile Coaching for <span className="text-blue-300">Sustainable Transformation</span>
            </motion.h1>

            <motion.p 
              className="text-xl text-blue-100 max-w-xl mb-8"
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4, duration: 0.6 }}
            >
              Transform your teams with expert Scrum, Kanban, and SAFe® implementation that drives measurable business results.
            </motion.p>

            <motion.div 
              className="flex flex-col sm:flex-row gap-4"
              
            >
              <button 
                style={{ zIndex: 10 }}
                onClick={() => navigate('/assessment/Agile Coaching')}
                className="bg-orange-500 text-white font-semibold py-3 px-8 rounded-lg shadow-lg hover:shadow-xl transition-all duration-300 flex items-center justify-center cursor-pointer"
                
                >
                Get Agile Assessment <FaArrowRight className="ml-2" />
            </button>

            
                
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
                src="/assets/s1.jpg" 
                alt="Agile team collaboration"
                className="w-full h-auto rounded-xl shadow-2xl border-8 border-white/10"
              />
            </div>
            <div className="absolute -bottom-6 -right-6 w-64 h-64 bg-blue-400 rounded-full mix-blend-multiply filter blur-3xl opacity-20"></div>
          </motion.div>
        </div>
      </div>
    </section>
            {/* Methodology Deep Dive */}
            <section className="py-5 md:py-15 bg-white px-4">
                <div className="max-w-6xl mx-auto">
                    <motion.div 
                        className="lg:flex gap-12 items-center"
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true }}
                        variants={{
                            visible: { 
                                opacity: 1,
                                transition: {
                                    staggerChildren: 0.2,
                                    delayChildren: 0.3
                                }
                            },
                            hidden: { opacity: 0 }
                        }}
                    >
                        <motion.div 
                            className="lg:w-1/2 mb-8 lg:mb-0"
                            variants={{
                                visible: { opacity: 1, y: 0 },
                                hidden: { opacity: 0, y: 20 }
                            }}
                        >
                            <h2 className="text-2xl md:text-3xl font-bold text-orange-600 mb-6">
                                Why Our Approach Works
                            </h2>
                            <ul className="space-y-6">
                                {[
                                    "Hybrid Methodology: Blend Scrum, Kanban, and Lean based on your needs",
                                    "Metrics-Driven: Focus on lead time, cycle time, and throughput",
                                    "Behavioral Focus: Address mindset shifts alongside processes",
                                    "Outcome-Oriented: Tie Agile practices to business KPIs"
                                ].map((item, index) => (
                                    <motion.li 
                                        key={index}
                                        className="text-lg text-gray-700"
                                        variants={{
                                            visible: { opacity: 1, x: 0 },
                                            hidden: { opacity: 0, x: -20 }
                                        }}
                                    >
                                        <span className="font-semibold text-gray-900">{item.split(':')[0]}:</span> {item.split(':')[1]}
                                    </motion.li>
                                ))}
                            </ul>
                        </motion.div>
                        <motion.div 
                            className="lg:w-1/2 bg-blue-50 p-8 rounded-xl shadow-md border border-gray-100"
                            variants={{
                                visible: { opacity: 1, y: 0 },
                                hidden: { opacity: 0, y: 20 }
                            }}
                        >
                            <h3 className="text-xl font-semibold text-gray-900 mb-4">Our Coaching Process</h3>
                            <div className="space-y-6">
                                {[
                                    {
                                        step: "1",
                                        detail: "30-day team maturity evaluation"
                                    },
                                    {
                                        step: "2",
                                        detail: "Tailored implementation plan"
                                    },
                                    {
                                        step: "3",
                                        detail: "3-6 months of hands-on guidance"
                                    },
                                    {
                                        step: "4",
                                        detail: "Gradual transition to internal coaches"
                                    }
                                ].map((item, index) => (
                                    <motion.div 
                                        key={index}
                                        className="flex items-start"
                                        variants={{
                                            visible: { opacity: 1, x: 0 },
                                            hidden: { opacity: 0, x: 20 }
                                        }}
                                    >
                                        <div className={`flex-shrink-0 w-10 h-10 rounded-full flex items-center justify-center ${index % 2 === 0 ? 'bg-orange-100 text-orange-500' : 'bg-blue-100 text-blue-500'} mr-4 font-bold`}>
                                            {item.step}
                                        </div>
                                        <div>
                                            <p className="font-medium text-gray-900">{item.detail}</p>
                                        </div>
                                    </motion.div>
                                ))}
                            </div>
                        </motion.div>
                    </motion.div>
                </div>
            </section>

            {/* Framework Section */}
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
                            Our Agile Coaching Framework
                        </h2>
                        <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                            We don't just teach Agile, we embed it into your organizational DNA.
                        </p>
                    </motion.div>
                    
                    {/* Desktop Grid View */}
                    <div className="hidden md:grid md:grid-cols-2 lg:grid-cols-2 gap-8">
                        {frameworkItems.map((item, index) => (
                            <motion.div
                                key={index}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.5, delay: index * 0.1 }}
                                viewport={{ once: true }}
                            >
                                <FrameworkCard item={item} />
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
                                {frameworkItems.map((item, index) => (
                                    <div key={index} className="w-full flex-shrink-0 px-2">
                                        <FrameworkCard item={item} />
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
                            {frameworkItems.map((_, index) => (
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
            <section className="py-5 md:py-15 bg-gray-50 px-4">
                <div className="max-w-6xl mx-auto text-center">
                    <motion.h2 
                        className="text-2xl md:text-4xl font-bold text-black mb-6"
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6 }}
                        viewport={{ once: true }}
                    >
                        Ready to Transform Your Team's Agility?
                    </motion.h2>
                    <motion.p 
                        className="text-xl text-gray-900 mb-8 max-w-3xl mx-auto"
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.2, duration: 0.6 }}
                        viewport={{ once: true }}
                    >
                        Get a free 30-minute assessment to identify your Agile maturity and improvement opportunities.
                    </motion.p>
                    <motion.div 
                        className="flex flex-col sm:flex-row justify-center gap-4"
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.4, duration: 0.6 }}
                        viewport={{ once: true }}
                    >
                        <motion.a
                            href="https://calendly.com/vincent-onu/30min"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="bg-orange-500 hover:bg-orange-600 text-white font-semibold py-3 px-8 rounded-lg shadow-lg hover:shadow-xl transition-all duration-300 flex items-center justify-center"
                            whileHover={{ scale: 1.03 }}
                            whileTap={{ scale: 0.98 }}
                        >
                            Book Free Session <FaArrowRight className="ml-2" />
                        </motion.a>
                    </motion.div>
                </div>
            </section>
        </div>
    );
};

export default AgileCoachingPage;