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
        <h3 className={styles.title}>Daniel's Arcade</h3>
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
            <a href="/">Home</a>
          </li>
          <li>
            {/* <FontAwesomeIcon icon={faInfoCircle} className={styles.onlyIcon}/> */}
            <a href="/about">Acerca de</a>
          </li>
          <li>
            {/* <FontAwesomeIcon icon={faHeart} className={styles.onlyIcon}/> */}
            <a href="/favorites">Favoritos</a>
          </li>
        </ul>
      </div>
      <div className={styles.section}>
        <h3 className={styles.title}>Redes Sociales</h3>
        <div className={styles.socialIcons}>
          <FontAwesomeIcon icon={faLinkedin} className={styles.onlyIcon} />
          <FontAwesomeIcon icon={faGithub} className={styles.onlyIcon} />
          <FontAwesomeIcon icon={faInstagram} className={styles.onlyIcon} />
        </div>
      </div>
      <div className={styles.section}>
        <h3 className={styles.title}>Mensaje</h3>
        <form className={styles.messageForm}>
          <textarea
            type="text"
            placeholder="Escribe un mensaje"
            className={styles.inputField}
          />
          <input
            type="email"
            placeholder="Email"
            className={styles.inputField}
          />
          <span type="submit" className={styles.sendMessageButton}>
            Enviar
          </span>
        </form>
      </div>
    </div>
  );
};

export default Footer;
