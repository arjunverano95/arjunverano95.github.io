import emailjs from '@emailjs/browser';
import {motion} from 'framer-motion';
import React, {useState, useRef} from 'react';
import {toast} from 'react-toastify';

import {Contact, Links} from '../data';
import styles from '../styles/pages/contact.module.scss';
import {pageTransition, pageVariants} from '../utils/FramerAnimation';

interface FormData {
  name: string;
  email: string;
  subject: string;
  message: string;
}

const ContactPage = () => {
  const formRef = useRef<HTMLFormElement>(null);
  const [formData, setFormData] = useState<FormData>({
    name: '',
    email: '',
    subject: '',
    message: '',
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [errors, setErrors] = useState<Partial<FormData>>({});

  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
  ) => {
    const {name, value} = e.target;
    setFormData((prev) => ({...prev, [name]: value}));
    // Clear error when user starts typing
    if (errors[name as keyof FormData]) {
      setErrors((prev) => ({...prev, [name]: ''}));
    }
  };

  const validateForm = (): boolean => {
    const newErrors: Partial<FormData> = {};

    if (!formData.name.trim()) {
      newErrors.name = 'Name is required';
    }

    if (!formData.email.trim()) {
      newErrors.email = 'Email is required';
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = 'Email is invalid';
    }

    if (!formData.subject.trim()) {
      newErrors.subject = 'Subject is required';
    }

    if (!formData.message.trim()) {
      newErrors.message = 'Message is required';
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!validateForm()) {
      toast.error('Please fix the errors in the form');
      return;
    }

    setIsSubmitting(true);

    try {
      await emailjs.sendForm(
        Contact.emailService.serviceID,
        Contact.emailService.templateID,
        formRef.current!,
        Contact.emailService.publicKey,
      );

      toast.success("Message sent successfully! I'll get back to you soon.");
      setFormData({name: '', email: '', subject: '', message: ''});
    } catch (error) {
      console.error('Email sending failed:', error);
      toast.error('Failed to send message. Please try again.');
    } finally {
      setIsSubmitting(false);
    }
  };

  const titleVariants = {
    hidden: {y: -30, opacity: 0},
    visible: {
      y: 0,
      opacity: 1,
      transition: {duration: 0.6, ease: 'easeOut'},
    },
  };

  const formVariants = {
    hidden: {opacity: 0, scale: 0.95},
    visible: {
      opacity: 1,
      scale: 1,
      transition: {duration: 0.6, ease: 'easeOut', delay: 0.2},
    },
  };

  const infoVariants = {
    hidden: {opacity: 0, x: -30},
    visible: {
      opacity: 1,
      x: 0,
      transition: {duration: 0.6, ease: 'easeOut', delay: 0.4},
    },
  };

  return (
    <div className={styles.contact}>
      <motion.div
        className={styles.container}
        initial="init"
        animate="anim"
        exit="last"
        variants={pageVariants}
        transition={pageTransition}
      >
        <motion.div className={styles.header} variants={titleVariants}>
          <span className={styles.tagOpen}>&lt;contact&gt;</span>
          <h1 className={styles.title}>
            Let's <span className={styles.titleAccent}>Connect</span>
          </h1>
          <p className={styles.subtitle}>
            Have a project in mind or just want to chat? I'd love to hear from
            you.
          </p>
          <span className={styles.tagClose}>&lt;/contact&gt;</span>
        </motion.div>

        <div className={styles.content}>
          <motion.div className={styles.contactInfo} variants={infoVariants}>
            <div className={styles.infoCard}>
              <h3 className={styles.infoTitle}>Get in Touch</h3>
              <p className={styles.infoDescription}>
                I'm always open to discussing new opportunities, creative ideas,
                or potential collaborations.
              </p>

              <div className={styles.contactMethods}>
                <div className={styles.contactMethod}>
                  <div className={styles.methodIcon}>
                    <svg
                      width="20"
                      height="20"
                      viewBox="0 0 24 24"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M4 4H20C21.1 4 22 4.9 22 6V18C22 19.1 21.1 20 20 20H4C2.9 20 2 19.1 2 18V6C2 4.9 2.9 4 4 4Z"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                      <polyline
                        points="22,6 12,13 2,6"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>
                  </div>
                  <div className={styles.methodContent}>
                    <span className={styles.methodLabel}>Email</span>
                    <span className={styles.methodValue}>
                      arjunverano95@gmail.com
                    </span>
                  </div>
                </div>

                <div className={styles.contactMethod}>
                  <div className={styles.methodIcon}>
                    <svg
                      width="20"
                      height="20"
                      viewBox="0 0 24 24"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M21 16.5C21 16.88 20.79 17.21 20.47 17.38L12.57 21.82C12.41 21.94 12.21 22 12 22C11.79 22 11.59 21.94 11.43 21.82L3.53 17.38C3.21 17.21 3 16.88 3 16.5V7.5C3 7.12 3.21 6.79 3.53 6.62L11.43 2.18C11.59 2.06 11.79 2 12 2C12.21 2 12.41 2.06 12.57 2.18L20.47 6.62C20.79 6.79 21 7.12 21 7.5V16.5Z"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                      <polyline
                        points="7.5,9.5 12,12 16.5,9.5"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                      <line
                        x1="12"
                        y1="22"
                        x2="12"
                        y2="12"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>
                  </div>
                  <div className={styles.methodContent}>
                    <span className={styles.methodLabel}>Location</span>
                    <span className={styles.methodValue}>
                      Davao City, Philippines
                    </span>
                  </div>
                </div>
              </div>

              <div className={styles.socialLinks}>
                <h4 className={styles.socialTitle}>Follow Me</h4>
                <div className={styles.socialGrid}>
                  {Links.map((link) => (
                    <motion.a
                      key={link.title}
                      href={link.link}
                      target="_blank"
                      rel="noreferrer"
                      className={styles.socialLink}
                      whileHover={{scale: 1.1, y: -2}}
                      whileTap={{scale: 0.95}}
                    >
                      {link.icon}
                    </motion.a>
                  ))}
                </div>
              </div>

              <motion.a
                href={Contact.cv}
                target="_blank"
                rel="noreferrer"
                className={styles.cvButton}
                whileHover={{scale: 1.05, y: -2}}
                whileTap={{scale: 0.95}}
              >
                <svg
                  width="16"
                  height="16"
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M21 15V19C21 19.5304 20.7893 20.0391 20.4142 20.4142C20.0391 20.7893 19.5304 21 19 21H5C4.46957 21 3.96086 20.7893 3.58579 20.4142C3.21071 20.0391 3 19.5304 3 19V15M7 10L12 15M12 15L17 10M12 15V3"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
                Download CV
              </motion.a>
            </div>
          </motion.div>

          <motion.div className={styles.formContainer} variants={formVariants}>
            <form ref={formRef} onSubmit={handleSubmit} className={styles.form}>
              <div className={styles.formGrid}>
                <div className={styles.formGroup}>
                  <label htmlFor="name" className={styles.label}>
                    Name *
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleInputChange}
                    className={`${styles.input} ${errors.name ? styles.error : ''}`}
                    placeholder="Your full name"
                  />
                  {errors.name && (
                    <span className={styles.errorMessage}>{errors.name}</span>
                  )}
                </div>

                <div className={styles.formGroup}>
                  <label htmlFor="email" className={styles.label}>
                    Email *
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    className={`${styles.input} ${errors.email ? styles.error : ''}`}
                    placeholder="your.email@example.com"
                  />
                  {errors.email && (
                    <span className={styles.errorMessage}>{errors.email}</span>
                  )}
                </div>
              </div>

              <div className={styles.formGroup}>
                <label htmlFor="subject" className={styles.label}>
                  Subject *
                </label>
                <input
                  type="text"
                  id="subject"
                  name="subject"
                  value={formData.subject}
                  onChange={handleInputChange}
                  className={`${styles.input} ${errors.subject ? styles.error : ''}`}
                  placeholder="What's this about?"
                />
                {errors.subject && (
                  <span className={styles.errorMessage}>{errors.subject}</span>
                )}
              </div>

              <div className={styles.formGroup}>
                <label htmlFor="message" className={styles.label}>
                  Message *
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleInputChange}
                  className={`${styles.textarea} ${errors.message ? styles.error : ''}`}
                  placeholder="Tell me about your project or just say hello..."
                  rows={6}
                />
                {errors.message && (
                  <span className={styles.errorMessage}>{errors.message}</span>
                )}
              </div>

              <motion.button
                type="submit"
                className={styles.submitButton}
                disabled={isSubmitting}
                whileHover={!isSubmitting ? {scale: 1.02, y: -2} : {}}
                whileTap={!isSubmitting ? {scale: 0.98} : {}}
              >
                {isSubmitting ? (
                  <div className={styles.loadingSpinner} />
                ) : (
                  <>
                    <span>Send Message</span>
                    <svg
                      width="16"
                      height="16"
                      viewBox="0 0 24 24"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <line
                        x1="22"
                        y1="2"
                        x2="11"
                        y2="13"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                      <polygon
                        points="22,2 15,22 11,13 2,9 22,2"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>
                  </>
                )}
              </motion.button>
            </form>
          </motion.div>
        </div>
      </motion.div>
    </div>
  );
};

export default ContactPage;
