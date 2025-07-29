import { useEffect } from 'react';
import { FaChartLine, FaUserTie, FaLaptopCode, FaHandshake, FaArrowRight } from 'react-icons/fa';
import { motion } from 'framer-motion';

const CareerCoachingPage = () => {
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    const clientProfiles = [
        {
            icon: <FaLaptopCode className="text-white text-2xl" />,
            title: "Early-Career Techies",
            description: "Build strong foundations and avoid common pitfalls. From confusion to clarity, we guide you through your first steps in tech. Starting your career in tech can be overwhelming, but with the right guidance, you can navigate the complexities and set yourself up for success.",
            bgImage: "/assets/ca1.jpg"
        },
        {
            icon: <FaUserTie className="text-white text-2xl" />,
            title: "Mid-Level Developers",
            description: "Break through plateaus to senior positions. This coaching helps you refine your skills and expand your impact. We focus on enhancing your technical expertise and leadership abilities, preparing you for the next level in your career.",
            bgImage: "/assets/ca3.jpg"
        },
        {
            icon: <FaChartLine className="text-white text-2xl" />,
            title: "Career Changers",
            description: "Successfully transition into tech roles. Our coaching helps you leverage your existing skills and pivot effectively. We provide tailored strategies to help you navigate the challenges of switching careers, ensuring a smooth transition into the tech industry.",
            bgImage: "/assets/ca2.jpg"
        },
          {
            icon: <FaHandshake className="text-white text-2xl" />,
            title: "Tech Leaders",
            description: "Master executive presence and strategy without losing technical edge. We help you lead with confidence and vision in the tech industry. In todays fast-paced environment, leadership is not just about managing teams, but also about inspiring innovation and driving results.",
            bgImage: "/assets/ca4.jpg",
        }
    ];

    const methodology = [
        {
            step: "1",
            title: "Career Assessment",
            description: "Comprehensive evaluation of your skills, strengths, and market positioning",
            duration: "Week 1-2"
        },
        {
            step: "2",
            title: "Goal Mapping",
            description: "Define clear objectives aligned with your aspirations and market realities",
            duration: "Week 3"
        },
        {
            step: "3",
            title: "Strategy Development",
            description: "Custom roadmap covering skill development and personal branding",
            duration: "Week 4"
        },
        {
            step: "4",
            title: "Execution Coaching",
            description: "Bi-weekly sessions to maintain momentum and overcome obstacles",
            duration: "Ongoing"
        }
    ];

    
    const ProfileCard = ({ profile }) => (
        <motion.div 
            className="h-full bg-white rounded-xl shadow-md overflow-hidden border border-gray-100 hover:shadow-lg transition-all duration-300"
            whileHover={{ y: -5 }}
        >
            <div className="relative h-48 overflow-hidden">
                <img 
                    src={profile.bgImage} 
                    alt={profile.title}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                />
                <div className="absolute inset-0"></div>
                
            </div>
            <div className="p-6">
                <h3 className="text-xl font-bold text-gray-900 mb-3">{profile.title}</h3>
                <p className="text-gray-600">{profile.description}</p>
            </div>
        </motion.div>
    );

    const StoryCard = ({ story }) => (
        <motion.div 
            className="h-full bg-white rounded-xl shadow-md overflow-hidden border border-gray-100 hover:shadow-lg transition-all duration-300"
            whileHover={{ y: -5 }}
        >
            <div className="relative h-48 overflow-hidden">
                <img 
                    src={story.bgImage} 
                    alt={story.name}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-blue-900/80 to-blue-800/50"></div>
            </div>
            <div className="p-6">
                <div className="mb-4">
                    <span className="inline-block bg-blue-100 text-blue-800 text-xs font-semibold px-2.5 py-0.5 rounded">
                        {story.stats}
                    </span>
                </div>
                <p className="text-gray-600 italic mb-4">"{story.quote}"</p>
                <div className="mt-auto">
                    <h4 className="font-semibold text-gray-900">{story.name}</h4>
                    <p className="text-sm text-gray-500">{story.role}</p>
                </div>
            </div>
        </motion.div>
    );

    return (
        <div className="bg-blue-50">
            {/* Hero Section */}
            <section className="relative bg-gradient-to-r from-gray-800 to-gray-800 overflow-hidden">
  {/* Background elements - Add pointer-events-none */}
  <div className="absolute inset-0 opacity-10 pointer-events-none">
    <div className="absolute inset-0 bg-[url('data:image...')] pointer-events-none"></div>
  </div>

  <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 md:py-20 relative z-10"> {/* Added z-10 here */}
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
      {/* Content left side */}
      <motion.div 
        initial={{ opacity: 0, x: -20 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.8 }}
        className="relative z-20">

        <motion.div 
                                className="inline-block bg-white/10 backdrop-blur-sm rounded-full px-4 py-2 mb-6"
                                initial={{ opacity: 0, y: 10 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ delay: 0.2, duration: 0.6 }}
                            >
                                <span className="text-sm font-semibold text-orange-500 tracking-wider">
                                    CAREER ACCELERATION EXPERTS
                                </span>
                            </motion.div>

                            <motion.h1 
                                className="text-2xl sm:text-4xl lg:text-5xl font-bold text-white leading-tight mb-6"
                                initial={{ opacity: 0, y: 10 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ delay: 0.3, duration: 0.6 }}
                            >
                                Career Coaching for <span className="text-blue-300">Tech Professionals</span>
                            </motion.h1>

                            <motion.p 
                                className="text-xl text-blue-100 max-w-xl mb-8"
                                initial={{ opacity: 0, y: 10 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ delay: 0.4, duration: 0.6 }}
                            >
                                Personalized mentoring to accelerate your career growth, whether you're starting out, transitioning, or aiming for leadership.
                            </motion.p>

        <motion.div 
          className="flex flex-col sm:flex-row gap-4 relative z-30" // Added highest z-index
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5, duration: 0.6 }}
        >
          <motion.a
            href="https://calendly.com/vincent-onu/30min"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-orange-500 text-white font-semibold py-3 px-8 rounded-lg shadow-lg hover:shadow-xl transition-all duration-300 flex items-center justify-center cursor-pointer relative z-40" // Added z-40
            whileHover={{ scale: 1.03 }}
            whileTap={{ scale: 0.98 }}
          >
            Book Free Session <FaArrowRight className="ml-2" />
          </motion.a>
          
          <motion.a
            href="tel:+351934695914"
            className="border-2 border-white text-white hover:bg-white/10 font-semibold py-3 px-8 rounded-lg transition-all duration-300 flex items-center justify-center relative z-40" // Added z-40
            whileHover={{ scale: 1.03 }}
            whileTap={{ scale: 0.98 }}
          >
            Call: +351 934 695 914
          </motion.a>
        </motion.div>
      </motion.div>

      {/* Image right side */}
      <motion.div 
        className="relative z-10" // Added z-10
        initial={{ opacity: 0, x: 20 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ delay: 0.3, duration: 0.8 }}
      >
        <div className="relative z-10">
          <img 
            src="https://images.unsplash.com/photo-1573497620053-ea5300f94f21?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80" 
            alt="Career coaching illustration"
            className="w-full h-auto rounded-xl shadow-2xl border-8 border-white/10"
          />
        </div>
        {/* Blurred circle - Add pointer-events-none */}
        <div className="absolute -bottom-6 -right-6 w-64 h-64 bg-blue-400 rounded-full mix-blend-multiply filter blur-3xl opacity-20 pointer-events-none"></div>
      </motion.div>
    </div>
  </div>
</section>

            {/* Client Profiles */}
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
                            Who Benefits From Our Career Coaching
                        </h2>
                    </motion.div>
                    
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8">
                        {clientProfiles.map((profile, index) => (
                            <motion.div
                                key={index}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.5, delay: index * 0.1 }}
                                viewport={{ once: true }}
                            >
                                <ProfileCard profile={profile} />
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Methodology */}
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
                            Our 4-Step Career Acceleration Framework
                        </h2>
                        <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                            Proven system used by 300+ tech professionals to achieve career breakthroughs
                        </p>
                    </motion.div>
                    
                    <div className="relative">
                        <div className="hidden md:block absolute left-1/2 h-full w-1 bg-blue-200 transform -translate-x-1/2"></div>
                        
                        <div className="space-y-12 md:space-y-0">
                            {methodology.map((step, index) => (
                                <motion.div
                                    key={index}
                                    initial={{ opacity: 0, y: 20 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    transition={{ duration: 0.5, delay: index * 0.1 }}
                                    viewport={{ once: true }}
                                    className="relative"
                                >
                                    <div className={`hidden md:flex absolute top-8 left-1/2 w-6 h-6 rounded-full ${index % 2 === 0 ? 'bg-orange-500 -ml-12' : 'bg-blue-600 -mr-12'} items-center justify-center transform -translate-x-1/2`}>
                                        <span className="text-white font-bold">{step.step}</span>
                                    </div>
                                    
                                    <div className={`md:w-5/12 ${index % 2 === 0 ? 'md:mr-auto' : 'md:ml-auto'}`}>
                                        <div className="bg-white p-6 rounded-xl shadow-md border border-gray-100 hover:shadow-lg transition-all duration-300">
                                            <div className="flex items-center mb-4">
                                                <div className="md:hidden bg-blue-600 text-white font-bold rounded-full w-8 h-8 flex items-center justify-center mr-3">
                                                    {step.step}
                                                </div>
                                                <h3 className="text-xl font-semibold text-gray-900">{step.title}</h3>
                                            </div>
                                            <p className="text-gray-600 mb-3">{step.description}</p>
                                            <span className="inline-block bg-orange-100 text-orange-800 text-sm font-medium px-3 py-1 rounded-full">
                                                {step.duration}
                                            </span>
                                        </div>
                                    </div>
                                </motion.div>
                            ))}
                        </div>
                    </div>
                </div>
            </section>

            

            {/* CTA Section */}
            <section className="py-16 bg-gradient-to-r from-blue-600 to-blue-800">
                <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
                    <motion.h2 
                        className="text-3xl font-bold text-white mb-6"
                        initial={{ opacity: 0, y: 10 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6 }}
                        viewport={{ once: true }}
                    >
                        Ready to Accelerate Your Tech Career?
                    </motion.h2>
                    <motion.p 
                        className="text-xl text-blue-100 mb-8"
                        initial={{ opacity: 0, y: 10 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.2, duration: 0.6 }}
                        viewport={{ once: true }}
                    >
                        Book your free 30-minute career strategy session
                    </motion.p>
                    <motion.div 
                        className="flex flex-col sm:flex-row justify-center gap-4"
                        initial={{ opacity: 0, y: 10 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.4, duration: 0.6 }}
                        viewport={{ once: true }}
                    >
                        <motion.a
                            href="https://calendly.com/vincent-onu/30min"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="bg-orange-500 text-white font-semibold py-3 px-8 rounded-lg shadow-lg hover:shadow-xl transition-all duration-300 flex items-center justify-center"
                            whileHover={{ scale: 1.03 }}
                            whileTap={{ scale: 0.98 }}
                        >
                            Schedule Now <FaArrowRight className="ml-2" />
                        </motion.a>
                        <motion.a
                            href="tel:+351920565820"
                            className="bg-white text-blue-600 hover:bg-blue-50 font-semibold py-3 px-8 rounded-lg shadow-sm transition-all duration-300 flex items-center justify-center"
                            whileHover={{ scale: 1.03 }}
                            whileTap={{ scale: 0.98 }}
                        >
                            Call: +351 920 565 820
                        </motion.a>
                    </motion.div>
                    <motion.p 
                        className="mt-4 text-blue-200 text-sm"
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        transition={{ delay: 0.6, duration: 0.6 }}
                        viewport={{ once: true }}
                    >
                        Limited spots available each month
                    </motion.p>
                </div>
            </section>
        </div>
    );
};

export default CareerCoachingPage;