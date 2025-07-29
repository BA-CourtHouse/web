import { motion } from 'framer-motion';

const ProcessSection = () => {
  const steps = [
    {
      id: 1,
      title: "Discover",
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M19 21l-7-5-7 5V5a2 2 0 012-2h10a2 2 0 012 2z" />
        </svg>
      ),
      description: "We analyze your business goals, challenges, and technical landscape through workshops and audits.",
      color: "bg-blue-100",
      textColor: "text-blue-600"
    },
    {
      id: 2,
      title: "Plan",
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2" />
        </svg>
      ),
      description: "Tailored roadmap creation with milestones, KPIs, and resource allocation.",
      color: "bg-orange-100",
      textColor: "text-orange-600"
    },
    {
      id: 3,
      title: "Execute",
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M13 10V3L4 14h7v7l9-11h-7z" />
        </svg>
      ),
      description: "Agile implementation with bi-weekly sprints and transparent progress tracking.",
      color: "bg-purple-100",
      textColor: "text-purple-600"
    },
    {
      id: 4,
      title: "Optimize",
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15" />
        </svg>
      ),
      description: "Continuous improvement through performance reviews and iterative enhancements.",
      color: "bg-green-100",
      textColor: "text-green-600"
    }
  ];

  return (
    <section className="py-5 sm:py-8 lg:py-15 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 mb-4"
          >
            Our Proven Process
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            viewport={{ once: true }}
            className="max-w-2xl mx-auto text-lg text-gray-600"
          >
            Transparent methodology that delivers consistent results
          </motion.p>
        </div>

        {/* Process Timeline */}
        <div className="relative">
          {/* Progress line */}
          <div className="hidden lg:block absolute left-1/2 top-0 h-full w-0.5 bg-gradient-to-b from-blue-500 to-green-500 transform -translate-x-1/2"></div>
          
          {/* Steps */}
          <div className="grid grid-cols-1 lg:grid-cols-4 gap-8 lg:gap-12">
            {steps.map((step, index) => (
              <motion.div
                key={step.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="relative"
              >
                {/* Mobile progress dot */}
                <div className="lg:hidden absolute -top-4 left-1/2 transform -translate-x-1/2 w-4 h-4 rounded-full bg-blue-500 z-10"></div>
                
                {/* Card */}
                <div className={`h-full p-6 rounded-xl shadow-md hover:shadow-lg transition-all ${step.color} flex flex-col items-center text-center`}>
                  {/* Icon */}
                  <div className={`w-16 h-16 rounded-full ${step.textColor} bg-white flex items-center justify-center shadow-lg mb-5`}>
                    {step.icon}
                  </div>
                  
                  {/* Content */}
                  <h3 className="text-xl font-bold text-gray-900 mb-3">{step.title}</h3>
                  <p className="text-gray-600 mb-4">{step.description}</p>
                  
                  {/* Step number (desktop) */}
                  <div className="hidden lg:block absolute -top-4 left-1/2 transform -translate-x-1/2 w-8 h-8 rounded-full bg-white border-4 border-blue-500 flex items-center justify-center">
                    <span className="font-bold text-blue-600">{step.id}</span>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProcessSection;