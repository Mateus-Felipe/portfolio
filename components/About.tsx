'use client';

import Image from 'next/image';
import styles from './About.module.css';
import Particles from './effects/particles';
import myImage from "../public/q-fofin.png";
import { useLanguage } from '../context/LanguageContext';

export default function About({ projectCount }: { projectCount: number }) {
    const { t } = useLanguage();
    const experienceYears = new Date().getFullYear() - 2019;

    return (
        <section className={styles.section} id="about">
            <Particles className='z-1' />
            <div className={styles.sectionPadding} >
                <div className={styles.container}>
                    <div className={styles.imageContainer}>
                        <div className={styles.profileFrame}>
                            <div className={styles.glitchText}>MF-2025</div>
                            {/* Placeholder for actual image or 3D avatar */}
                            <div style={{ color: 'var(--accent-cyan)', fontFamily: 'var(--font-geist-mono)', zIndex: 3 }}>
                                {t('about.system_online')}
                            </div>
                            <Image src={myImage} alt="Profile"
                                style={{
                                    width: '100%',
                                    height: '100%',
                                    objectFit: 'cover',
                                    position: 'absolute',
                                    inset: '0',
                                    objectPosition: '0% 70%',
                                }}
                            />
                        </div>
                    </div>

                    <div className={styles.content}>
                        <h2 className={styles.heading}>{t('about.heading')}</h2>
                        <p className={styles.bio}>
                            {t('about.bio')}
                        </p>

                        <div className={styles.statGrid}>
                            <div className={styles.statItem}>
                                <span className={styles.statValue}>{experienceYears}+</span>
                                <span className={styles.statLabel}>{t('about.stats.years')}</span>
                            </div>
                            <div className={styles.statItem}>
                                <span className={styles.statValue}>{projectCount}+</span>
                                <span className={styles.statLabel}>{t('about.stats.projects')}</span>
                            </div>
                            <div className={styles.statItem}>
                                <span className={styles.statValue}>{t('about.stats.specialization_val')}</span>
                                <span className={styles.statLabel}>{t('about.stats.specialization')}</span>
                            </div>
                            <div className={styles.statItem}>
                                <span className={styles.statValue}>{t('about.stats.clients_val')}</span>
                                <span className={styles.statLabel}>{t('about.stats.clients')}</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
