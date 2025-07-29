import { useEffect } from 'react';
import { Link } from 'react-router-dom';

const CaseStudies = () => {
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);
  const caseStudies = [
    {
      id: 1,
      title: 'Digital Transformation for Retail Chain',
      excerpt: 'How we helped a 200-store retailer modernize their operations and increase online sales by 240%',
      category: 'Retail',
      results: ['240% increase in online sales', '30% reduction in operational costs', 'Unified commerce platform'],
      image: 'assets/c2.jpg',
      link: '/case-studies/retail-transformation'
    },
    {
      id: 2,
      title: 'AI-Powered Supply Chain Optimization',
      excerpt: 'Implementing machine learning to reduce waste and improve delivery times for a manufacturing client',
      category: 'Manufacturing',
      results: ['18% reduction in material waste', '22% faster delivery times', 'Real-time inventory tracking'],
      image: 'assets/c3.jpg',
      link: '/case-studies/supply-chain-ai'
    },
    {
      id: 3,
      title: 'FinTech Regulatory Compliance Overhaul',
      excerpt: 'Complete compliance system redesign for a growing European payments platform',
      category: 'Financial Services',
      results: ['100% audit compliance', '40% faster reporting', 'Automated risk detection'],
      image: 'assets/c1.jpg',
      link: '/case-studies/fintech-compliance'
    }
  ];

  return (
    <section className="relative bg-gradient-to-br from-white to-blue-50 overflow-hidden">
      {/* Decorative elements */}
      <div className="hidden lg:block absolute top-0 left-0 w-32 h-32 bg-orange-100 rounded-full mix-blend-multiply filter blur-xl opacity-30"></div>
      <div className="hidden lg:block absolute bottom-0 right-0 w-32 h-32 bg-blue-100 rounded-full mix-blend-multiply filter blur-xl opacity-30"></div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-5 sm:py-10 lg:py-15">
        {/* Page header */}
        <div className="text-center mb-6">
          <h1 className="text-4xl sm:text-5xl font-bold text-gray-900 mb-4">
            Our Case Studies
          </h1>
          <p className="max-w-2xl mx-auto text-xl text-gray-600">
            Real-world solutions delivering measurable business impact
          </p>
        </div>

        {/* Filters */}
        <div className="flex flex-wrap justify-center mb-12 gap-4">
          <button className="px-4 py-2 rounded-full bg-blue-600 text-white font-medium">
            All Industries
          </button>
          <button className="px-4 py-2 rounded-full border border-gray-300 text-gray-700 hover:bg-gray-50 font-medium">
            Retail
          </button>
          <button className="px-4 py-2 rounded-full border border-gray-300 text-gray-700 hover:bg-gray-50 font-medium">
            Manufacturing
          </button>
          <button className="px-4 py-2 rounded-full border border-gray-300 text-gray-700 hover:bg-gray-50 font-medium">
            Financial Services
          </button>
          <button className="px-4 py-2 rounded-full border border-gray-300 text-gray-700 hover:bg-gray-50 font-medium">
            Technology
          </button>
        </div>

        {/* Case Studies Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {caseStudies.map((caseStudy) => (
            <div key={caseStudy.id} className="bg-white rounded-xl shadow-md overflow-hidden border border-gray-100 hover:shadow-lg transition-shadow duration-300">
              <div className="relative h-48 overflow-hidden">
                <img 
                  className="w-full h-full object-cover" 
                  src={caseStudy.image} 
                  alt={caseStudy.title} 
                />
                <div className="absolute bottom-4 left-4 bg-white px-3 py-1 rounded-lg shadow-sm text-sm font-medium">
                  {caseStudy.category}
                </div>
              </div>
              <div className="p-6">
                <div className="flex items-center mb-4">
                  
                  <h3 className="text-lg font-bold text-gray-900">{caseStudy.title}</h3>
                </div>
                <p className="text-gray-600 mb-4">{caseStudy.excerpt}</p>
                <ul className="mb-5 space-y-2">
                  {caseStudy.results.map((result, index) => (
                    <li key={index} className="flex items-start">
                      <svg className="flex-shrink-0 h-5 w-5 text-green-500 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                      <span className="ml-2 text-gray-700">{result}</span>
                    </li>
                  ))}
                </ul>
                
              </div>
            </div>
          ))}
        </div>

        {/* CTA Section */}
        <div className="bg-gradient-to-r from-blue-50 to-orange-50 rounded-xl p-8 md:p-12 text-center">
          <h3 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4">
            Ready to see what we can do for your business?
          </h3>
          <p className="text-gray-600 max-w-2xl mx-auto mb-6">
            Our team would love to discuss how we can help you achieve similar results.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <Link
              to="/contact"
              className="px-6 py-3 border border-transparent text-center font-medium rounded-md shadow-sm text-white bg-blue-600 hover:bg-blue-700 transition-colors duration-300"
            >
              Get in Touch
            </Link>
            <Link
              to="/about"
              className="px-6 py-3 border border-blue-600 text-center font-medium rounded-md shadow-sm text-blue-600 bg-white hover:bg-blue-50 transition-colors duration-300"
            >
              Learn About Us
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CaseStudies;