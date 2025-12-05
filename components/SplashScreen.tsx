'use client';

import React, { useEffect, useState } from 'react';
import styles from './SplashScreen.module.css';

const SplashScreen = () => {
    const [progress, setProgress] = useState(0);
    const [isVisible, setIsVisible] = useState(true);
    const [shouldRender, setShouldRender] = useState(true);

    useEffect(() => {
        const interval = setInterval(() => {
            setProgress((prev) => {
                if (prev >= 100) {
                    clearInterval(interval);
                    return 100;
                }
                return prev + 1;
            });
        }, 30);

        return () => clearInterval(interval);
    }, []);

    useEffect(() => {
        // Prevent scrolling while splash screen is visible
        if (isVisible) {
            document.body.style.overflow = 'hidden';
        } else {
            document.body.style.overflow = 'unset';
        }

        const timer = setTimeout(() => {
            setIsVisible(false);

            // Remove from DOM after transition finishes
            setTimeout(() => {
                setShouldRender(false);
            }, 800); // Match transition duration in CSS

        }, 3500); // 3.5 seconds display time

        return () => {
            clearTimeout(timer);
            document.body.style.overflow = 'unset';
        };
    }, [isVisible]);

    if (!shouldRender) return null;

    return (
        <div className={`${styles.splash} ${!isVisible ? styles.hidden : ''}`}>
            <div className={styles.content}>
                <h1 className={styles.name}>Mateus Felipe</h1>
                <p className={styles.role}>Full-Stack Developer</p>
                <div className={styles.loader}>
                    <div className={styles.loaderBar}></div>
                </div>
                <p style={{ textAlign: 'left', marginTop: '1rem', fontSize: '1rem', color: 'var(--text-secondary)', fontFamily: 'monospace' }}>
                    LOADING... &nbsp; &nbsp; &nbsp; &nbsp; <span style={{ color: 'var(--accent-cyan)' }}>{progress}%</span>
                </p>
            </div>
        </div>
    );
};

export default SplashScreen;
