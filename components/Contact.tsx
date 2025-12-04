"use client"
import { useState } from 'react';
import styles from './Contact.module.css';

export default function Contact() {
    const [showModal, setShowModal] = useState(false);

    const handleInteraction = (e: React.MouseEvent | React.FormEvent) => {
        e.preventDefault();
        setShowModal(true);
    };

    return (
        <section className={styles.section} id="contact">
            <div className={styles.container}>
                <h2 className={styles.heading} onClick={handleInteraction} style={{ cursor: 'pointer' }}>
                    Initialize Connection
                </h2>
                <p className={styles.subtext}>
                    Ready to build something extraordinary? Send a signal.
                </p>

                <form className={styles.form} onSubmit={handleInteraction} onClick={handleInteraction}>
                    <div className={styles.inputGroup}>
                        <input
                            type="text"
                            placeholder="Name"
                            className={styles.input}
                            required
                            readOnly
                            style={{ cursor: 'pointer' }}
                        />
                    </div>
                    <div className={styles.inputGroup}>
                        <input
                            type="email"
                            placeholder="Email"
                            className={styles.input}
                            required
                            readOnly
                            style={{ cursor: 'pointer' }}
                        />
                    </div>
                    <div className={styles.inputGroup}>
                        <textarea
                            placeholder="Message"
                            className={styles.textarea}
                            required
                            readOnly
                            style={{ cursor: 'pointer' }}
                        ></textarea>
                    </div>
                    <button type="submit" className={styles.button}>Transmit Message</button>
                </form>

                {showModal && (
                    <div className={styles.modalOverlay} onClick={() => setShowModal(false)}>
                        <div className={styles.modalContent} onClick={(e) => e.stopPropagation()}>
                            <button className={styles.closeButton} onClick={() => setShowModal(false)}>×</button>
                            <span className={styles.modalEmoji}>🤖</span>
                            <h3 className={styles.modalTitle}>System Override!</h3>
                            <p className={styles.modalText}>
                                Ops, I didn't make this feature yet 😅 But hey, you can contact me (or get my e-mail) via LinkedIn. It's faster than the light speed! 🚀
                            </p>
                            <a
                                href="https://www.linkedin.com/in/mateus-felipe-fullstack-developer/"
                                target="_blank"
                                rel="noopener noreferrer"
                                className={styles.modalLink}
                            >
                                Connect on LinkedIn
                            </a>
                        </div>
                    </div>
                )}
            </div>
        </section>
    );
}
