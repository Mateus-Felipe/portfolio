"use client"
import { useState } from 'react';
import styles from './Contact.module.css';
import { useLanguage } from '../context/LanguageContext';

export default function Contact() {
    const { t } = useLanguage();
    const [showModal, setShowModal] = useState(false);

    const handleInteraction = (e: React.MouseEvent | React.FormEvent) => {
        e.preventDefault();
        setShowModal(true);
    };

    return (
        <section className={styles.section} id="contact">
            <div className={styles.container}>
                <h2 className={styles.heading} onClick={handleInteraction} style={{ cursor: 'pointer' }}>
                    {t('contact.heading')}
                </h2>
                <p className={styles.subtext}>
                    {t('contact.subtext')}
                </p>

                <form className={styles.form} onSubmit={handleInteraction} onClick={handleInteraction}>
                    <div className={styles.inputGroup}>
                        <input
                            type="text"
                            placeholder={t('contact.form.name')}
                            className={styles.input}
                            required
                            readOnly
                            style={{ cursor: 'pointer' }}
                        />
                    </div>
                    <div className={styles.inputGroup}>
                        <input
                            type="email"
                            placeholder={t('contact.form.email')}
                            className={styles.input}
                            required
                            readOnly
                            style={{ cursor: 'pointer' }}
                        />
                    </div>
                    <div className={styles.inputGroup}>
                        <textarea
                            placeholder={t('contact.form.message')}
                            className={styles.textarea}
                            required
                            readOnly
                            style={{ cursor: 'pointer' }}
                        ></textarea>
                    </div>
                    <button type="submit" className={styles.button}>{t('contact.form.button')}</button>
                </form>

                {showModal && (
                    <div className={styles.modalOverlay} onClick={() => setShowModal(false)}>
                        <div className={styles.modalContent} onClick={(e) => e.stopPropagation()}>
                            <button className={styles.closeButton} onClick={() => setShowModal(false)}>×</button>
                            <span className={styles.modalEmoji}>🤖</span>
                            <h3 className={styles.modalTitle}>{t('contact.modal.title')}</h3>
                            <p className={styles.modalText} dangerouslySetInnerHTML={{ __html: t('contact.modal.text') }}></p>
                            <a
                                href="https://www.linkedin.com/in/mateus-felipe-fullstack-developer/"
                                target="_blank"
                                rel="noopener noreferrer"
                                className={styles.modalLink}
                            >
                                {t('contact.modal.link')}
                            </a>
                        </div>
                    </div>
                )}
            </div>
        </section>
    );
}
