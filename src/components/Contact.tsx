import React, { useState } from 'react';
import { motion } from 'framer-motion';
import emailjs from '@emailjs/browser';
import { SendIcon, CheckCircle, AlertCircle } from 'lucide-react';
import AnimatedSection from './AnimatedSection';
import { ContactFormData, FormStatus } from '../types';

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

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const validateForm = () => {
    if (!formData.name || !formData.email || !formData.message) {
      setFormStatus({
        isSubmitting: false,
        isSuccess: false,
        isError: true,
        message: 'All fields are required.',
      });
      return false;
    }

    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailPattern.test(formData.email)) {
      setFormStatus({
        isSubmitting: false,
        isSuccess: false,
        isError: true,
        message: 'Please enter a valid email address.',
      });
      return false;
    }

    return true;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!validateForm()) return;

    setFormStatus({ isSubmitting: true, isSuccess: false, isError: false, message: '' });

    try {
      const result = await emailjs.send(
        'service_pkz1te8',
        'template_11jofo3',
        {
          from_name: formData.name,
          from_email: formData.email,
          message: formData.message,
        },
        'X9IrH0P1ErNmT5Ccw'
      );

      if (result.status === 200) {
        setFormStatus({
          isSubmitting: false,
          isSuccess: true,
          isError: false,
          message: 'Your message has been sent successfully!',
        });
        setFormData({ name: '', email: '', message: '' });
      } else {
        throw new Error('Unexpected response from server.');
      }
    } catch {
      setFormStatus({
        isSubmitting: false,
        isSuccess: false,
        isError: true,
        message: 'Failed to send your message. Please try again later.',
      });
    }
  };

  const inputBaseClass =
    `w-full px-4 py-3 border rounded-xl focus:outline-none focus:ring-2 
     bg-white dark:bg-gray-800 text-gray-900 dark:text-white 
     border-gray-300 dark:border-gray-700 
     focus:ring-indigo-500 dark:focus:ring-indigo-400 
     transition-all duration-200`;

  return (
    <section
      id="contact"
      className="py-20 px-4 sm:px-6 lg:px-8 bg-white dark:bg-[#0e0e0e]"
    >
      <div className="max-w-3xl mx-auto">
        <AnimatedSection className="text-center mb-14" direction="up">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 bg-gradient-to-r from-indigo-600 to-purple-600 dark:from-indigo-400 dark:to-purple-400 text-transparent bg-clip-text">
            Get in Touch
          </h2>
          <p className="text-gray-600 dark:text-gray-300 max-w-xl mx-auto text-sm sm:text-base">
            Have questions or want to collaborate? Fill out the form below — I’ll get back to you shortly.
          </p>
        </AnimatedSection>

        <AnimatedSection
          className="bg-gray-50 dark:bg-gray-900 rounded-2xl shadow-xl overflow-hidden p-8 md:p-12"
          direction="up"
          delay={0.2}
        >
          <form onSubmit={handleSubmit} className="space-y-6">
            <div>
              <label htmlFor="name" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
                Full Name
              </label>
              <input
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                className={inputBaseClass}
                placeholder="Your name"
                disabled={formStatus.isSubmitting || formStatus.isSuccess}
              />
            </div>

            <div>
              <label htmlFor="email" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
                Email
              </label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                className={inputBaseClass}
                placeholder="you@example.com"
                disabled={formStatus.isSubmitting || formStatus.isSuccess}
              />
            </div>

            <div>
              <label htmlFor="message" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
                Message
              </label>
              <textarea
                id="message"
                name="message"
                value={formData.message}
                onChange={handleChange}
                rows={5}
                className={inputBaseClass}
                placeholder="What would you like to discuss?"
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
              className={`w-full py-3 px-6 bg-indigo-600 hover:bg-indigo-700 
                dark:bg-indigo-500 dark:hover:bg-indigo-600 text-white font-semibold 
                rounded-xl shadow-md transition-all duration-200 flex items-center justify-center gap-2 
                ${formStatus.isSubmitting || formStatus.isSuccess ? 'opacity-70 cursor-not-allowed' : ''}`}
              disabled={formStatus.isSubmitting || formStatus.isSuccess}
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
            >
              {formStatus.isSubmitting ? (
                <>
                  <span className="animate-spin rounded-full h-5 w-5 border-t-2 border-b-2 border-white"></span>
                  <span>Sending...</span>
                </>
              ) : formStatus.isSuccess ? (
                <>
                  <CheckCircle size={20} />
                  <span>Sent</span>
                </>
              ) : (
                <>
                  <SendIcon size={20} />
                  <span>Send Message</span>
                </>
              )}
            </motion.button>
          </form>
        </AnimatedSection>
      </div>
    </section>
  );
};

export default Contact;
