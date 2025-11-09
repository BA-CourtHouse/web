import axios from 'axios'
import { useState } from 'react'
import { FaWhatsapp, FaEnvelope, FaMapMarkerAlt, FaPaperPlane } from 'react-icons/fa'

const ContactSection = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  })
  

 
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitStatus, setSubmitStatus] = useState(null)
 
 

  const handleSubmit = async (e) => {
    e.preventDefault()
    setIsSubmitting(true)
    setSubmitStatus(null)

    try {
      const res = await fetch('https://web-j2qz.onrender.com/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData)
      })

      const data = await res.json()
      if (!res.ok) throw new Error(data.message || 'Failed to send message.')

      setSubmitStatus({ success: true, message: data.message || 'Message sent successfully!' })
      setFormData({ name: '', email: '', subject: '', message: '' })
    } catch (error) {
      setSubmitStatus({ success: false, message: error.message })
    } finally {
      setIsSubmitting(false)
    }
  }

  

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  
  const [subscribeData, setSubscribeData] = useState({
    name: '',
    email: ''
  });
  
  const [subscribeStatus, setSubscribeStatus] = useState(null);
  
  const handleSubscribeChange = (e) => {
    const { name, value } = e.target;
    setSubscribeData(prev => ({ ...prev, [name]: value }));
  };
  
  const handleSubscribe = async (e) => {
    e.preventDefault();
    setSubscribeStatus(null);
  
    try {
      const res = await axios.post("https://web-j2qz.onrender.com/api/subscribe", subscribeData);
      setSubscribeStatus({ success: true, message: res.data.message });
      setSubscribeData({ name: '', email: '' });
    } catch (err) {
      console.error("Subscribe error:", err);
      setSubscribeStatus({
        success: false,
        message: err.response?.data?.error || "Something went wrong.",
      });
    }
  };
  

  
  


 
  return (
    <section id="contact" className="py-5 sm:py-10 lg:py-10 bg-blue-50">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-10">
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
            Get in Touch
          </h2>
          <p className="max-w-2xl mx-auto text-lg text-gray-600">
            Have questions or ready to start your project? Reach out to our team today.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Contact Information */}
          <div className="space-y-8">
            <div className="flex items-start">
              <div className="flex-shrink-0 bg-blue-100 p-3 rounded-lg text-blue-600">
                <FaWhatsapp className="w-6 h-6" />
              </div>
              <div className="ml-4">
                <h3 className="text-lg font-medium text-gray-900">WhatsApp Chat</h3>
                <a 
                  href="https://wa.me/351920565820" 
                  className="mt-1 text-gray-600 hover:text-blue-600 transition-colors"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  +351 920 565 820
                </a>
                <p className="mt-1 text-sm text-gray-500">Fastest response time (24/7)</p>
              </div>
            </div>

            <div className="flex items-start">
              <div className="flex-shrink-0 bg-blue-100 p-3 rounded-lg text-blue-600">
                <FaEnvelope className="w-6 h-6" />
              </div>
              <div className="ml-4">
                <h3 className="text-lg font-medium text-gray-900">Email Us</h3>
                <a 
                  href="mailto:info@bacourthouse.com" 
                  className="mt-1 text-gray-600 hover:text-blue-600 transition-colors"
                >
                  info[@]bacourthouse.com
                </a>
                <p className="mt-1 text-sm text-gray-500">Typically reply within 1 business day</p>
              </div>
            </div>

            <div className="flex items-start">
              <div className="flex-shrink-0 bg-blue-100 p-3 rounded-lg text-blue-600">
                <FaMapMarkerAlt className="w-6 h-6" />
              </div>
              <div className="ml-4">
                <h3 className="text-lg font-medium text-gray-900">Our Location</h3>
                <p className="mt-1 text-gray-600">Remote</p>
                <p className="mt-1 text-sm text-gray-500">Serving clients worldwide</p>
              </div>
            </div>

            {/* Subscription Form */}
            <div className="bg-white p-6 rounded-lg shadow-md mt-8">
              <h3 className="text-xl font-semibold text-gray-900 mb-4">Be part of our community</h3>
              <p className='mb-4 text-gray-600'>Stay updated always with our latest insights and offers.</p>
              
              {subscribeStatus && (
                <div className={`mb-4 p-3 rounded-lg ${subscribeStatus.success ? 'bg-green-100 text-green-800' : 'bg-red-100 text-red-800'}`}>
                  {subscribeStatus.message}
                </div>
              )}

              <form onSubmit={handleSubscribe} style={{ maxWidth: "400px", margin: "0 auto" }}>
                <div className="mb-4">
                  <label htmlFor="subscribe-name" className="block text-sm font-medium text-gray-700 mb-1">
                    Name
                  </label>
                  <input
                    type="text"
                    id="subscribe-name"
                    name="name"
                    value={subscribeData.name}
                    onChange={handleSubscribeChange}
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                    required
                  />
                </div>
                <div className="mb-4">
                  <label htmlFor="subscribe-email" className="block text-sm font-medium text-gray-700 mb-1">
                    Email Address
                  </label>
                  <input
                    type="email"
                    id="subscribe-email"
                    name="email"
                    value={subscribeData.email}
                    onChange={handleSubscribeChange}
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                    required
                  />
                </div>
                <button
                  type="submit"
                  className="w-full px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
                >
                  Subscribe
                </button>
              </form>
            </div>
          </div>

          {/* Contact Form */}
          <div className="bg-white p-6 sm:p-8 rounded-xl shadow-md">
            <h3 className="text-2xl font-semibold text-gray-900 mb-6">Send us a message</h3>
            
            {submitStatus && (
              <div className={`mb-4 p-4 rounded-lg ${submitStatus.success ? 'bg-green-100 text-green-800' : 'bg-red-100 text-red-800'}`}>
                {submitStatus.message}
              </div>
            )}

            <form onSubmit={handleSubmit}>
              <div className="mb-5">
                <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">
                  Full Name
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                  required
                />
              </div>
              <div className="mb-5">
                <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
                  Email Address
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                  required
                />
              </div>
              <div className="mb-5">
                <label htmlFor="subject" className="block text-sm font-medium text-gray-700 mb-1">
                  Subject
                </label>
                <input
                  type="text"
                  id="subject"
                  name="subject"
                  value={formData.subject}
                  onChange={handleChange}
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                  required
                />
              </div>
              <div className="mb-6">
                <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1">
                  Your Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  rows={4}
                  value={formData.message}
                  onChange={handleChange}
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                  required
                ></textarea>
              </div>
              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full flex items-center justify-center px-6 py-3 border border-transparent text-base font-medium rounded-md shadow-sm text-white bg-orange-500 hover:bg-orange-600 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-orange-500 transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
              >
                {isSubmitting ? 'Sending...' : 'Send Message'}
                <FaPaperPlane className="ml-2" />
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  )
}

export default ContactSection