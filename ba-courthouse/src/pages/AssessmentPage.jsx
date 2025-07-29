import { useParams } from "react-router-dom";
import { useState } from "react";
import { FaCheckCircle, FaArrowRight, FaArrowLeft } from "react-icons/fa";

const AssessmentPage = () => {
    const { service } = useParams();
    const [formData, setFormData] = useState({
        fullName: '',
        email: '',
        company: '',
        teamSize: '',
        challenges: '',
        goals: '',
    });
    const [submitted, setSubmitted] = useState(false);
    const [currentStep, setCurrentStep] = useState(1);
    const [errors, setErrors] = useState({});

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
        // Clear error when user types
        if (errors[e.target.name]) {
            setErrors({...errors, [e.target.name]: ''});
        }
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        if (validateForm()) {
            try {
                const res = await fetch("https://web-j2qz.onrender.com/api/assessment", {
                    method: "POST",
                    headers: {
                        "Content-Type": "application/json"
                    },
                    body: JSON.stringify({ ...formData, service }),
                });

                if (res.ok) {
                    setSubmitted(true);
                }
            } catch (err) {
                console.error("Submission failed", err);
            }
        }
    };

    const nextStep = () => {
        if (validateStep()) {
            setCurrentStep(currentStep + 1);
        }
    };

    const prevStep = () => {
        setCurrentStep(currentStep - 1);
    };

    const validateStep = () => {
        const newErrors = {};
        let isValid = true;

        if (currentStep === 1) {
            if (!formData.fullName.trim()) {
                newErrors.fullName = 'Full name is required';
                isValid = false;
            }
            if (!formData.email.trim()) {
                newErrors.email = 'Email is required';
                isValid = false;
            } else if (!/^\S+@\S+\.\S+$/.test(formData.email)) {
                newErrors.email = 'Email is invalid';
                isValid = false;
            }
        }

        if (currentStep === 2) {
            if (!formData.company.trim()) {
                newErrors.company = 'Company is required';
                isValid = false;
            }
            if (!formData.teamSize.trim()) {
                newErrors.teamSize = 'Team size is required';
                isValid = false;
            }
        }

        setErrors(newErrors);
        return isValid;
    };

    const validateForm = () => {
        const newErrors = {};
        let isValid = true;

        // Validate all fields
        if (!formData.fullName.trim()) {
            newErrors.fullName = 'Full name is required';
            isValid = false;
        }
        if (!formData.email.trim()) {
            newErrors.email = 'Email is required';
            isValid = false;
        }
        if (!formData.company.trim()) {
            newErrors.company = 'Company is required';
            isValid = false;
        }
        if (!formData.teamSize.trim()) {
            newErrors.teamSize = 'Team size is required';
            isValid = false;
        }
        if (!formData.challenges.trim()) {
            newErrors.challenges = 'Please describe your challenges';
            isValid = false;
        }
        if (!formData.goals.trim()) {
            newErrors.goals = 'Please describe your goals';
            isValid = false;
        }

        setErrors(newErrors);
        return isValid;
    };

    if (submitted) {
        return (
            <div className="min-h-screen bg-gray-50 flex items-center justify-center p-4">
                <div className="bg-white rounded-lg shadow-md p-6 md:p-8 max-w-md w-full text-center">
                    <FaCheckCircle className="text-green-500 text-5xl mx-auto mb-4" />
                    <h2 className="text-2xl font-bold text-gray-800 mb-3">Thank you!</h2>
                    <p className="text-gray-600 mb-6">
                        We've received your {service} assessment request. Our team will contact you soon.
                    </p>
                    <a 
                        href="/" 
                        className="inline-block px-5 py-2.5 bg-blue-600 text-white rounded-md hover:bg-blue-700"
                    >
                        Return to Home
                    </a>
                </div>
            </div>
        );
    }

    return (
        <div className="min-h-screen bg-gray-50 flex items-center justify-center p-4">
            <div className="bg-white rounded-lg shadow-md p-5 md:p-6 w-full max-w-md">
                <h1 className="text-2xl font-bold text-gray-800 mb-4">Request {service} Assessment</h1>
                
                {/* Progress indicator */}
                <div className="flex items-center mb-6">
                    <div className={`flex items-center justify-center w-8 h-8 rounded-full ${currentStep >= 1 ? 'bg-blue-600 text-white' : 'bg-gray-200'}`}>
                        1
                    </div>
                    <div className={`flex-1 h-1 mx-2 ${currentStep >= 2 ? 'bg-blue-600' : 'bg-gray-200'}`}></div>
                    <div className={`flex items-center justify-center w-8 h-8 rounded-full ${currentStep >= 2 ? 'bg-blue-600 text-white' : 'bg-gray-200'}`}>
                        2
                    </div>
                    <div className={`flex-1 h-1 mx-2 ${currentStep >= 3 ? 'bg-blue-600' : 'bg-gray-200'}`}></div>
                    <div className={`flex items-center justify-center w-8 h-8 rounded-full ${currentStep >= 3 ? 'bg-blue-600 text-white' : 'bg-gray-200'}`}>
                        3
                    </div>
                </div>

                <form onSubmit={handleSubmit}>
                    {/* Step 1 */}
                    {currentStep === 1 && (
                        <div className="space-y-4">
                            <div>
                                <label className="block text-gray-700 mb-1">Full Name*</label>
                                <input
                                    type="text"
                                    name="fullName"
                                    value={formData.fullName}
                                    onChange={handleChange}
                                    className={`w-full p-2.5 border rounded-md ${errors.fullName ? 'border-red-500' : 'border-gray-300'}`}
                                />
                                {errors.fullName && <p className="text-red-500 text-sm mt-1">{errors.fullName}</p>}
                            </div>
                            <div>
                                <label className="block text-gray-700 mb-1">Email*</label>
                                <input
                                    type="email"
                                    name="email"
                                    value={formData.email}
                                    onChange={handleChange}
                                    className={`w-full p-2.5 border rounded-md ${errors.email ? 'border-red-500' : 'border-gray-300'}`}
                                />
                                {errors.email && <p className="text-red-500 text-sm mt-1">{errors.email}</p>}
                            </div>
                        </div>
                    )}

                    {/* Step 2 */}
                    {currentStep === 2 && (
                        <div className="space-y-4">
                            <div>
                                <label className="block text-gray-700 mb-1">Company*</label>
                                <input
                                    type="text"
                                    name="company"
                                    value={formData.company}
                                    onChange={handleChange}
                                    className={`w-full p-2.5 border rounded-md ${errors.company ? 'border-red-500' : 'border-gray-300'}`}
                                />
                                {errors.company && <p className="text-red-500 text-sm mt-1">{errors.company}</p>}
                            </div>
                            <div>
                                <label className="block text-gray-700 mb-1">Team Size*</label>
                                <input
                                    type="text"
                                    name="teamSize"
                                    value={formData.teamSize}
                                    onChange={handleChange}
                                    className={`w-full p-2.5 border rounded-md ${errors.teamSize ? 'border-red-500' : 'border-gray-300'}`}
                                />
                                {errors.teamSize && <p className="text-red-500 text-sm mt-1">{errors.teamSize}</p>}
                            </div>
                        </div>
                    )}

                    {/* Step 3 */}
                    {currentStep === 3 && (
                        <div className="space-y-4">
                            <div>
                                <label className="block text-gray-700 mb-1">Challenges*</label>
                                <textarea
                                    name="challenges"
                                    value={formData.challenges}
                                    onChange={handleChange}
                                    rows="3"
                                    className={`w-full p-2.5 border rounded-md ${errors.challenges ? 'border-red-500' : 'border-gray-300'}`}
                                ></textarea>
                                {errors.challenges && <p className="text-red-500 text-sm mt-1">{errors.challenges}</p>}
                            </div>
                            <div>
                                <label className="block text-gray-700 mb-1">Goals*</label>
                                <textarea
                                    name="goals"
                                    value={formData.goals}
                                    onChange={handleChange}
                                    rows="3"
                                    className={`w-full p-2.5 border rounded-md ${errors.goals ? 'border-red-500' : 'border-gray-300'}`}
                                ></textarea>
                                {errors.goals && <p className="text-red-500 text-sm mt-1">{errors.goals}</p>}
                            </div>
                        </div>
                    )}

                    {/* Navigation buttons */}
                    <div className="flex justify-between mt-6">
                        {currentStep > 1 ? (
                            <button
                                type="button"
                                onClick={prevStep}
                                className="flex items-center px-4 py-2 text-gray-600 bg-gray-100 rounded-md hover:bg-gray-200"
                            >
                                <FaArrowLeft className="mr-2" /> Back
                            </button>
                        ) : (
                            <div></div>
                        )}

                        {currentStep < 3 ? (
                            <button
                                type="button"
                                onClick={nextStep}
                                className="flex items-center px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700"
                            >
                                Next <FaArrowRight className="ml-2" />
                            </button>
                        ) : (
                            <button
                                type="submit"
                                className="px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700"
                            >
                                Submit
                            </button>
                        )}
                    </div>
                </form>
            </div>
        </div>
    );
};

export default AssessmentPage;