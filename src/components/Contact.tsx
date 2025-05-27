import React, { useState } from 'react';
import { motion } from 'framer-motion';
import AnimatedSection from './AnimatedSection';
import { submitContactForm } from '../utils/firebase';
import { FormStatus, ContactFormData } from '../types';
import { SendIcon, CheckCircle, AlertCircle } from 'lucide-react';

const Contact: React.FC = () => {
  const [formData, setFormData] = useState<ContactFormData>({
    name: '',
    email: '',
    message: '',
  });
  
  const [formStatus, setFormStatus] = useState<FormStatus>({
    isSubmitting: false,
    isSuccess: false,
    isError: false,
    message: '',
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    // Simple validation
    if (!formData.name || !formData.email || !formData.message) {
      setFormStatus({
        isSubmitting: false,
        isSuccess: false,
        isError: true,
        message: 'Please fill out all fields',
      });
      return;
    }

    // Email validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(formData.email)) {
      setFormStatus({
        isSubmitting: false,
        isSuccess: false,
        isError: true,
        message: 'Please enter a valid email address',
      });
      return;
    }

    setFormStatus({
      isSubmitting: true,
      isSuccess: false,
      isError: false,
      message: '',
    });

    try {
      const result = await submitContactForm(
        formData.name, 
        formData.email, 
        formData.message
      );
      
      if (result.success) {
        setFormStatus({
          isSubmitting: false,
          isSuccess: true,
          isError: false,
          message: 'Message sent successfully!',
        });
        
        // Reset form
        setFormData({
          name: '',
          email: '',
          message: '',
        });
      } else {
        throw new Error('Form submission failed');
      }
    } catch (error) {
      setFormStatus({
        isSubmitting: false,
        isSuccess: false,
        isError: true,
        message: 'Failed to send message. Please try again later.',
      });
    }
  };

  const inputClasses = "w-full px-4 py-3 border border-gray-300 dark:border-gray-700 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500 dark:focus:ring-indigo-400 bg-white dark:bg-gray-800 text-gray-900 dark:text-white transition-all duration-200";
  
  return (
    <section id="contact" className="py-20 px-4 sm:px-6 lg:px-8 bg-white dark:bg-gray-800">
      <div className="max-w-5xl mx-auto">
        <AnimatedSection className="text-center mb-12" direction="up">
          <h2 className="text-3xl md:text-4xl font-bold mb-6 bg-gradient-to-r from-indigo-600 to-purple-600 dark:from-indigo-400 dark:to-purple-400 text-transparent bg-clip-text">
            Get In Touch
          </h2>
          <p className="text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
            Have a project in mind or want to collaborate? Feel free to reach out using the form below.
            I'll get back to you as soon as possible.
          </p>
        </AnimatedSection>

        <AnimatedSection
          className="bg-gray-50 dark:bg-gray-900 rounded-xl shadow-xl overflow-hidden"
          direction="up"
          delay={0.2}
        >
          <div className="grid md:grid-cols-2">
            {/* Contact Info */}
            <div className="bg-gradient-to-br from-indigo-600 to-purple-600 p-8 md:p-12 text-white">
              <h3 className="text-2xl font-bold mb-6">Contact Information</h3>
              <p className="mb-8">
                Fill up the form and I'll get back to you within 24 hours.
              </p>
              
              <div className="space-y-6">
                <div>
                  <h4 className="text-lg font-semibold mb-2">Email</h4>
                  <p>bhuvanass2005@gmail.com</p>
                </div>
              </div>
            </div>
            
            {/* Form */}
            <div className="p-8 md:p-12">
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-gray-700 dark:text-gray-200 mb-1">
                    Your Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    className={inputClasses}
                    placeholder="John Doe"
                    disabled={formStatus.isSubmitting || formStatus.isSuccess}
                  />
                </div>
                
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-gray-700 dark:text-gray-200 mb-1">
                    Email Address
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    className={inputClasses}
                    placeholder="john@example.com"
                    disabled={formStatus.isSubmitting || formStatus.isSuccess}
                  />
                </div>
                
                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-gray-700 dark:text-gray-200 mb-1">
                    Your Message
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    rows={5}
                    className={inputClasses}
                    placeholder="Hello, I'd like to talk about..."
                    disabled={formStatus.isSubmitting || formStatus.isSuccess}
                  />
                </div>
                
                {formStatus.isError && (
                  <div className="flex items-center gap-2 text-red-600 dark:text-red-400">
                    <AlertCircle size={18} />
                    <span>{formStatus.message}</span>
                  </div>
                )}
                
                {formStatus.isSuccess && (
                  <motion.div 
                    className="flex items-center gap-2 text-green-600 dark:text-green-400"
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                  >
                    <CheckCircle size={18} />
                    <span>{formStatus.message}</span>
                  </motion.div>
                )}
                
                <motion.button
                  type="submit"
                  className="w-full py-3 px-6 bg-indigo-600 hover:bg-indigo-700 dark:bg-indigo-500 dark:hover:bg-indigo-600 text-white font-medium rounded-lg shadow-md transition-all duration-200 flex items-center justify-center gap-2"
                  disabled={formStatus.isSubmitting || formStatus.isSuccess}
                  whileHover={!formStatus.isSubmitting && !formStatus.isSuccess ? { scale: 1.02 } : {}}
                  whileTap={!formStatus.isSubmitting && !formStatus.isSuccess ? { scale: 0.98 } : {}}
                >
                  {formStatus.isSubmitting ? (
                    <>
                      <span className="animate-spin rounded-full h-5 w-5 border-t-2 border-b-2 border-white"></span>
                      <span>Sending...</span>
                    </>
                  ) : formStatus.isSuccess ? (
                    <>
                      <CheckCircle size={20} />
                      <span>Sent Successfully</span>
                    </>
                  ) : (
                    <>
                      <SendIcon size={20} />
                      <span>Send Message</span>
                    </>
                  )}
                </motion.button>
              </form>
            </div>
          </div>
        </AnimatedSection>
      </div>
    </section>
  );
};

export default Contact;
