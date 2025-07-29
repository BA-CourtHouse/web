// components/SuccessModal.jsx
import { useEffect } from 'react';

export default function SuccessModal({ onClose, service }) {
  useEffect(() => {
    const script = document.createElement('script');
    script.src = 'https://assets.calendly.com/assets/external/widget.js';
    script.async = true;
    document.body.appendChild(script);
    return () => document.body.removeChild(script);
  }, []);

  return (
    <div className="mt-4 p-4 bg-green-50 border border-green-200 rounded-lg">
      <h3 className="font-medium text-green-800 mb-2">
        Thank you for your {service} assessment!
      </h3>
      <p className="text-sm text-green-600 mb-4">
        We'll review your submission and contact you shortly.
      </p>
      
      <div className="space-y-3">
        <button
          onClick={onClose}
          className="w-full px-4 py-2 bg-white border border-gray-300 rounded-md hover:bg-gray-50"
        >
          Close
        </button>
        </div>
    </div>
  );
}