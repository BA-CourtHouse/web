import { useEffect } from 'react';
import { Link } from 'react-router-dom';

const MeetTheTeam = () => {
    useEffect(() => {
        window.scrollTo(0, 0);
    }
    , []);
  const founders = [
    {
      id: 1,
      name: 'Vincent Onu',
      role: 'Founder & CEO',
      image: 'assets/vincent.jpg',
      quote: "We don't just consult, we build with you.",
      story: [
        "Results-driven professional with expertise in IT business analysis, agile project management, and strategic process optimization. Adept at translating complex business challenges into actionable technical solutions that drive efficiency, innovation, and growth across technology, finance, and operations."
      ],
      funFact: "Once coded an entire MVP for a client's project himself when their dev team fell through."
    },
    {
      id: 2,
      name: 'Joshua ODUYERU',
      role: 'Co-Founder & CTO',
      image: 'assets/cofounder.jpg',
      quote: "Technology should serve people, not the other way around.",
      story: [
        "As Co-Lead of BACourthouse, I drive locally rooted, globally informed solutions for business, operational, and systemic challenges across diverse sectors. With expertise in strategy formulation, business analytics, and project management, I deliver stakeholder-driven, data-led interventions that align with compliance, inclusivity, and market expansion goals."
      ],
      funFact: "Speaks 4 languages and often conducts meetings in clients' native tongues."
    }
  ];

  return (
    <section className="relative bg-white overflow-hidden">
      {/* Decorative elements matching About page */}
      <div className="hidden lg:block absolute top-0 left-0 w-32 h-32 bg-orange-100 rounded-full mix-blend-multiply filter blur-xl opacity-30"></div>
      <div className="hidden lg:block absolute bottom-0 right-0 w-32 h-32 bg-blue-100 rounded-full mix-blend-multiply filter blur-xl opacity-30"></div>
      
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-16 sm:py-20 lg:py-28">
        {/* Page header */}
        <div className="text-center mb-16">
          <h1 className="text-4xl sm:text-5xl font-bold text-blue-500 mb-4">
            The Founding Duo
          </h1>
          <p className="max-w-2xl mx-auto text-xl text-gray-600">
            How two industry veterans built BA Courthouse from a courthouse café
          </p>
        </div>

        {/* Origin story section */}
        <div className="mb-20 bg-gray-50 rounded-2xl p-8 md:p-12 shadow-inner border border-gray-200">
          <h2 className="text-3xl font-bold text-center text-gray-900 mb-8">Our Origin Story</h2>
          <div className="max-w-5xl mx-auto space-y-6 text-gray-700">
            <p className="text-lg">
            It started with frustration and street food. One founder was watching an oil company waste millions because their reports didn't match what field workers actually needed. The other saw tech teams build perfect solutions that made nurses' jobs harder, not easier. Over plates of suya in Lagos traffic, they realized the problem: Africa was full of smart ideas that kept failing in execution. 
            There were plenty of analysts and consultants, but not enough people who could bridge the gap between boardroom strategies and real-world operations.
            <br/>
            Their breaking point came when a female entrepreneur showed them her third bank rejection - not because her business was bad, but because she couldn't translate her vision into terms bankers understood. In that moment, BA CourtHouse was born: no fancy offices, just two professionals with 22 years of combined scars across oil & gas, tech, and finance, determined to fix what everyone else was overcomplicating. That first client got funded in three weeks. Today, whether it's helping hospitals implement tech that actually helps nurses or 
            turning messy operations into investor-ready systems, their approach stays the same: if it doesn't work for the people using it, it doesn't work.
            </p>
          </div>
        </div>

        {/* Founders profiles */}
        <div className="space-y-20">
          {founders.map((founder) => (
            <div key={founder.id} className="flex flex-col md:flex-row gap-12 items-start">
              {/* Founder image */}
              <div className="w-full md:w-1/3 relative">
                <div className="aspect-w-3 aspect-h-4 rounded-xl overflow-hidden shadow-2xl border-8 border-white">
                  <img className="w-full h-full object-cover" src={founder.image} alt={founder.name} />
                </div>
                <div className="mt-4 bg-white p-4 rounded-lg shadow-md border border-gray-100 text-center">
                  <p className="font-medium text-gray-900">Fun Fact</p>
                  <p className="text-gray-600 text-sm">{founder.funFact}</p>
                </div>
              </div>
              
              {/* Founder bio */}
              <div className="w-full md:w-2/3">
                <div className="mb-6">
                  <h2 className="text-3xl font-bold text-gray-900">{founder.name}</h2>
                  <p className="text-xl text-blue-600 font-medium">{founder.role}</p>
                  <blockquote className="mt-4 pl-4 border-l-4 border-orange-500 italic text-gray-700">
                    "{founder.quote}"
                  </blockquote>
                </div>
                
                <div className="prose prose-lg text-gray-700 space-y-4">
                  {founder.story.map((paragraph, idx) => (
                    <p key={idx}>{paragraph}</p>
                  ))}
                </div>
                
                <div className="mt-8 pt-6 border-t border-gray-200">
                  <h4 className="text-sm font-semibold text-gray-500 uppercase tracking-wider">Key Contributions</h4>
                  <ul className="mt-3 space-y-2">
                    {founder.id === 1 ? (
                      <>
                        <li className="flex items-start">
                          <svg className="h-5 w-5 text-green-500 mr-2" fill="currentColor" viewBox="0 0 20 20">
                            <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                          </svg>
                          <span>Co-founded BA CourtHouse, empowering professionals and businesses through process improvements, career growth strategies, and scalable digital solutions.</span>
                        </li>
                        <li className="flex items-start">
                          <svg className="h-5 w-5 text-green-500 mr-2" fill="currentColor" viewBox="0 0 20 20">
                            <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                          </svg>
                          <span>Spearheaded a fintech process automation initiative that reduced manual reporting by 70% by implementing AI-powered data workflows, saving 200+ hours monthly while improving accuracy.</span>
                        </li>
                        <li className="flex items-start">
                          <svg className="h-5 w-5 text-green-500 mr-2" fill="currentColor" viewBox="0 0 20 20">
                            <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                          </svg>
                          <span>ncreased user adoption by 40% through stakeholder-driven requirement prioritization and iterative UX improvements delivered in bi-weekly sprints.</span>
                        </li>
                      </>
                    ) : (
                      <>
                        <li className="flex items-start">
                          <svg className="h-5 w-5 text-green-500 mr-2" fill="currentColor" viewBox="0 0 20 20">
                            <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                          </svg>
                          <span>Drove 30-45% efficiency gains across Oil & Gas, FinTech, and Healthcare sectors through data-driven solutions.</span>
                        </li>
                        <li className="flex items-start">
                          <svg className="h-5 w-5 text-green-500 mr-2" fill="currentColor" viewBox="0 0 20 20">
                            <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                          </svg>
                          <span>Led 100% on-time projects from ideation to execution, aligning with compliance (HSQSE) and stakeholder goals.</span>
                        </li>
                        <li className="flex items-start">
                          <svg className="h-5 w-5 text-green-500 mr-2" fill="currentColor" viewBox="0 0 20 20">
                            <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                          </svg>
                          <span>Increased female workforce participation by 25%+ via inclusive business programs in Nigeria/SSA</span>
                        </li>
                        <li className="flex items-start">
                          <svg className="h-5 w-5 text-green-500 mr-2" fill="currentColor" viewBox="0 0 20 20">
                            <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                          </svg>
                          <span>Optimized costs and reduced risks for 50+ clients through high-impact partnerships and operational interventions.</span>
                        </li>
                      </>
                    )}
                  </ul>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* CTA */}
        <div className="mt-20 text-center bg-gradient-to-r from-blue-50 to-orange-50 rounded-2xl p-8 border border-gray-200">
          <h3 className="text-2xl font-bold text-gray-900 mb-4">Want to work directly with our founders?</h3>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto mb-6">
            Vincent and Amina still lead every initial client engagement to ensure BA Courthouse's standards are met from day one.
          </p>
          <Link
            to="/contact"
            className="inline-flex items-center px-6 py-3 border border-transparent text-base font-medium rounded-md shadow-sm text-white bg-gradient-to-r from-blue-600 to-orange-500 hover:from-blue-700 hover:to-orange-600 transition-colors duration-300"
          >
            Schedule Founder Session
          </Link>
        </div>
      </div>
    </section>
  );
};

export default MeetTheTeam;