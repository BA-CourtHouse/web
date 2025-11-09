// components/EmbeddedChatCTA.js
import { useEffect, useState } from 'react';

const EmbeddedChatCTA = ({ message = "Need help? Chat with us!" }) => {
  const [isVisible, setIsVisible] = useState(false);
  const [scriptLoaded, setScriptLoaded] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 300) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    // Show after 3 seconds if user hasn't scrolled
    const timer = setTimeout(() => {
      if (window.scrollY < 300) {
        setIsVisible(true);
      }
    }, 3000);

    window.addEventListener('scroll', handleScroll);
    return () => {
      clearTimeout(timer);
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const loadScript = () => {
    if (scriptLoaded) return;
    
    const script = document.createElement('script');
    script.src = 'https://cdn.jotfor.ms/agent/embedjs/019a2cfb8e57710e9cd4d76fa5274365cf4a/embed.js';
    script.async = true;
    script.onload = () => setScriptLoaded(true);
    document.body.appendChild(script);
  };

  const handleClick = (e) => {
    e.preventDefault();
    loadScript();
  };

  return (
    <div className={`fixed bottom-6 right-6 z-50 transition-all duration-500 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
      <button
        onClick={handleClick}
        className="flex items-center justify-center w-10 h-10 rounded-full bg-blue-500 shadow-xl hover:bg-blue-600 transition-colors duration-300 animate-pulse"
        aria-label="Chat with us"
      >
        <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
        </svg>
      </button>
      <div className={`absolute right-15 bottom-0 bg-blue-600 text-white px-4 py-2 rounded-lg shadow-md transition-opacity duration-300 ${isVisible ? 'opacity-100' : 'opacity-0'}`}>
        <p className="text-xs whitespace-nowrap">{message}</p>
        <div className="absolute right-0 top-1/2 w-2 h-2 bg-blue-600 transform rotate-45 -translate-y-1/2 translate-x-1"></div>
      </div>
    </div>
  );
};

export default EmbeddedChatCTA;