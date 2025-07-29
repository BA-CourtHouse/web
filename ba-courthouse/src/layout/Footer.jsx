import { Link } from 'react-router-dom';
import { FaLinkedin, FaFacebook, FaInstagram, FaYoutube, FaTwitter } from 'react-icons/fa';

const Footer = () => {
  const services = [
    { name: 'IT Business Consulting', path: '/it-consulting' },
    { name: 'Project Management', path: 'project-man' },
    { name: 'Agile Coaching', path: '/agile' },
    { name: 'HR Solutions', path: '/hr-solutions' },
    { name: 'Web Development', path: '/web-app' },
  ];

  const companyLinks = [
    { name: 'About Us', path: '/about' },
    { name: 'Case Studies', path: '/case-studies' },
    
  ];

  const contactInfo = [
    { text: 'info[@]bacourthouse.com' },
    { text: '+351 934 695 914' },
    { text: 'Remote' },
  ];

  return (
    <footer className="bg-blue-600 text-white pt-12 pb-6">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Brand Info */}
          <div className="space-y-4">
            <Link to="/" className="flex items-center">
              <h2 className='text-2xl md:text-3xl'>BA CourtHouse</h2>
            </Link>
            <p className="text-blue-100">
            Empowering businesses through strategic consulting & scalable agile transformation.
            </p>
            <div className="flex space-x-4">
            <a 
                href="https://www.linkedin.com/company/bacourthouse/" 
                className="text-blue-100 hover:text-orange-300 transition-colors"
                aria-label="LinkedIn"
              >
                <FaLinkedin className="h-6 w-6" />
              </a>
              
              <a 
                href="https://www.facebook.com/profile.php?id=61578855478420"  
                className="text-blue-100 hover:text-orange-300 transition-colors"
                aria-label="Facebook"
              >
                <FaFacebook className="h-6 w-6" />
              </a>
              
              <a 
                href="https://www.instagram.com/bacourthouse/"  
                className="text-blue-100 hover:text-orange-300 transition-colors"
                aria-label="Instagram"
              >
                <FaInstagram className="h-6 w-6" />
              </a>

              <a href="http://www.youtube.com/@flowlexx"
                className="text-blue-100 hover:text-orange-300 transition-colors"
                aria-label='Youtube'
              >
                <FaYoutube className="h-6 w-6" />
              </a>
              <a href=""
                className="text-blue-100 hover:text-orange-300 transition-colors"
                aria-label='X'
              >
                <FaTwitter className="h-6 w-6" />
              </a>
            </div>
          </div>

          {/* Services */}
          <div>
            <h3 className="text-orange-300 font-semibold uppercase tracking-wider">Services</h3>
            <ul className="mt-4 space-y-2">
              {services.map((service) => (
                <li key={service.name}>
                  <Link 
                    to={service.path} 
                    className="text-blue-100 hover:text-orange-300 transition-colors duration-300"
                  >
                    {service.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Company */}
          <div>
            <h3 className="text-orange-300 font-semibold uppercase tracking-wider">Company</h3>
            <ul className="mt-4 space-y-2">
              {companyLinks.map((link) => (
                <li key={link.name}>
                  <Link 
                    to={link.path} 
                    className="text-blue-100 hover:text-orange-300 transition-colors duration-300"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="text-orange-300 font-semibold uppercase tracking-wider">Contact Us</h3>
            <ul className="mt-4 space-y-3">
              {contactInfo.map((item, index) => (
                <li key={index} className="flex items-start">
                  <span className="mr-2">{item.icon}</span>
                  <span className="text-blue-100">{item.text}</span>
                </li>
              ))}
            </ul>
            <Link
              to="/book-consultation"
              className="mt-4 inline-block bg-orange-500 hover:bg-orange-600 text-white px-4 py-2 rounded-md text-sm font-medium transition-colors duration-300"
            >
              Book Consultation
            </Link>
          </div>
        </div>

        {/* Bottom Footer */}
        <div className="mt-12 pt-6 border-t border-blue-500 flex flex-col md:flex-row justify-between items-center">
          <p className="text-blue-100 text-sm">
            &copy; {new Date().getFullYear()} BA CourtHouse. All rights reserved.
          </p>
          <div className="flex space-x-6 mt-4 md:mt-0">
            <Link to="/privacy-policy" className="text-blue-100 hover:text-orange-300 text-sm">
              Privacy Policy
            </Link>
            <Link to="/terms" className="text-blue-100 hover:text-orange-300 text-sm">
              Terms of Service
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;