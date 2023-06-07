import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faPhone,
  faEnvelope,
  // faHome,
  // faInfoCircle,
  // faHeart
} from '@fortawesome/free-solid-svg-icons';
import { faLinkedin, faGithub, faInstagram } from '@fortawesome/free-brands-svg-icons';
import styles from './Footer.module.css';

const Footer = () => {
  return (
    <div className={styles.footer}>
      <div className={styles.section}>
        <h3 className={styles.title}>Daniel's Pokemon</h3>
        <div className={styles.contactInfo}>
          <div className={styles.contactItem}>
            <FontAwesomeIcon icon={faPhone} className={styles.onlyIcon} />
            <span className={styles.icon}>+51 924169968</span>
          </div>
          <div className={styles.contactItem}>
            <FontAwesomeIcon icon={faEnvelope} className={styles.onlyIcon} />
            <span className={styles.icon}>cdanielrap@gmail.com</span>
          </div>
        </div>
      </div>
      <div className={styles.section}>
        <h3 className={styles.title}>Enlaces</h3>
        <ul className={styles.linkList}>
          <li>
            {/* <FontAwesomeIcon icon={faHome} className={styles.onlyIcon} /> */}
            <a href="/">Inicio</a>
          </li>
          <li>
            {/* <FontAwesomeIcon icon={faInfoCircle} className={styles.onlyIcon}/> */}
            <a href="/home">Home</a>
          </li>
          <li>
            {/* <FontAwesomeIcon icon={faHeart} className={styles.onlyIcon}/> */}
            <a href="/create">Create</a>
          </li>
        </ul>
      </div>
      <div className={styles.section}>
        <h3 className={styles.title}>Redes Sociales</h3>
        <div className={styles.socialIcons}>
          <a href="https://www.linkedin.com/in/cdrojasramirez/"><FontAwesomeIcon icon={faLinkedin} className={styles.onlyIcon} /></a>
         <a href="https://github.com/CDRojasRamirez"><FontAwesomeIcon icon={faGithub} className={styles.onlyIcon}/></a>
         <a href="https://www.instagram.com/danielrojas7719/"><FontAwesomeIcon icon={faInstagram} className={styles.onlyIcon} /></a>
        </div>
      </div>
      <div className={styles.section}>
        <h3 className={styles.title}>Mensaje</h3>
        <form
        className={styles.messageForm}
        action='https://formspree.io/f/mbjevzpd'
        method='POST'
        >
          <textarea
            name='message'
            placeholder="Escribe un mensaje"
            className={styles.inputField}
          />
          <input
            name='email'
            type="email"
            placeholder="Tu email"
            className={styles.inputField}
          />
          <button type="submit" className={styles.sendMessageButton}>
            Enviar
          </button>
        </form>
      </div>
    </div>
  );
};

export default Footer;
