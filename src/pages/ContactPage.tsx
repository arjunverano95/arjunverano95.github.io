import {motion} from 'framer-motion';
import Lottie from 'lottie-react';
import React, {useRef} from 'react';
import {toast} from 'react-toastify';

import emailjs from '@emailjs/browser';

import lottieData from '../assets/lottie/data.json';
import {Contact} from '../data';
import styles from '../styles/pages/contact.module.scss';
import {pageTransition, pageVariants} from '../utils/FramerAnimation';

const contactOpen = '<Contact />';

const ContactPage = () => {
  const form = useRef<any>();

  const handleOnsubmit = (e: any) => {
    e.preventDefault();
    const {emailService} = Contact;
    emailjs
      .sendForm(
        emailService.serviceID,
        emailService.templateID,
        form.current,
        emailService.publicKey,
      )
      .then(
        () => {
          toast.success('Message sent!');
        },
        (error) => {
          toast.error(error);
          // show the user an error
        },
      );
  };

  return (
    <div className={styles.contact}>
      <motion.div
        initial="init"
        animate="anim"
        exit="last"
        variants={pageVariants}
        transition={pageTransition}
        className={styles.wrapper}
      >
        <div className={styles.form}>
          <h3 className={styles.contactOpen}>{contactOpen}</h3>
          <form ref={form} onSubmit={handleOnsubmit}>
            <input
              type="text"
              name="name"
              placeholder="Name"
              required
              // value={contactData.name}
              // onChange={handleOnchange}
            />
            <input
              type="email"
              name="email"
              placeholder="Email"
              required
              // value={contactData.email}
              // onChange={handleOnchange}
            />
            <textarea
              name="message"
              cols={30}
              rows={5}
              placeholder="Your Message"
              required
              // value={contactData.message}
              // onChange={handleOnchange}
            ></textarea>
            <button type="submit">Send</button>
          </form>
        </div>
        <div className={styles.lottie}>
          <Lottie
            loop={true}
            autoplay={true}
            animationData={lottieData}
            style={{
              width: '100%',
              height: '100%',
            }}
            rendererSettings={{
              preserveAspectRatio: 'xMidYMid slice',
            }}
            // isStopped={false}
            // isPaused={false}
          />
        </div>
      </motion.div>
    </div>
  );
};

export default ContactPage;
