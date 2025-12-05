"use client"
import styles from './Navbar.module.css';
import { useLanguage } from '../context/LanguageContext';
import euaFlag from "../public/eua-flag.png"
import brFlag from "../public/brazil-flag.png"
import Image from 'next/image';

export default function Navbar() {
    const { t, language, setLanguage } = useLanguage();

    const toggleLanguage = (lang: 'en' | 'pt-br') => {
        setLanguage(lang);
    };

    return (
        <nav className={styles.nav}>
            <div className={styles.logo}>MF.</div>
            <div className={styles.links}>
                <a href="#" className={styles.link}>{t('navbar.about')}</a>
                <a href="#projects" className={styles.link}>{t('navbar.projects')}</a>
                <a href="#contact" className={styles.link}>{t('navbar.contact')}</a>

                <div className={styles.languageWrapper}>
                    <button className={styles.languageButton}>
                        <svg
                            width="20"
                            height="20"
                            viewBox="0 0 24 24"
                            fill="none"
                            stroke="currentColor"
                            strokeWidth="2"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                        >
                            <circle cx="12" cy="12" r="10"></circle>
                            <line x1="2" y1="12" x2="22" y2="12"></line>
                            <path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z"></path>
                        </svg>
                    </button>

                    <div className={styles.languageDropdown}>
                        <button
                            className={`${styles.languageOption} ${language === 'en' ? styles.activeLang : ''}`}
                            onClick={() => toggleLanguage('en')}
                        >
                            <span className={styles.flag}>
                                <Image src={euaFlag} alt="EUA Flag" style={{ width: '30px', height: '20px' }} />
                            </span>
                            English
                        </button>
                        <button
                            className={`${styles.languageOption} ${language === 'pt-br' ? styles.activeLang : ''}`}
                            onClick={() => toggleLanguage('pt-br')}
                        >
                            <span className={styles.flag}>
                                <Image src={brFlag} alt="BR Flag" style={{ width: '30px', height: '20px' }} />
                            </span>
                            Português
                        </button>
                    </div>
                </div>
            </div>
        </nav>
    );
}
