'use client';

import React from 'react';
import SpotlightCard from './effects/spotlight_card';
import styles from './Education.module.css';

interface Certificate {
    name: string;
    issuer: string;
    date: string;
    icon: string;
    color: string;
    spotlight: `rgba(${number}, ${number}, ${number}, ${number})`;
}

const certifications: Certificate[] = [
    {
        name: "AWS Certified Solutions Architect",
        issuer: "Amazon Web Services",
        date: "Issued: Oct 2023",
        icon: "AWS",
        color: "#FF9900",
        spotlight: "rgba(255, 153, 0, 0.25)"
    },
    {
        name: "Meta Frontend Developer",
        issuer: "Meta",
        date: "Issued: May 2023",
        icon: "∞",
        color: "#0668E1",
        spotlight: "rgba(6, 104, 225, 0.25)"
    },
    {
        name: "Google UX Design Professional",
        issuer: "Google",
        date: "Issued: Jan 2023",
        icon: "G",
        color: "#EA4335",
        spotlight: "rgba(234, 67, 53, 0.25)"
    },
    {
        name: "Full Stack Development",
        issuer: "Udacity",
        date: "Issued: Dec 2022",
        icon: "FS",
        color: "#00b1ff",
        spotlight: "rgba(0, 177, 255, 0.25)"
    }
];

import { useLanguage } from '../context/LanguageContext';

export default function Education() {
    const { t } = useLanguage();

    return (
        <section className={styles.section} id="education">
            <h2 className={styles.heading}>{t('education.heading')}</h2>
            <p className={styles.subheading}>{t('education.subheading')}</p>

            <div className={styles.container}>
                {/* Column 1: Academic Degree */}
                <div className={styles.column}>
                    <div className={styles.columnTitle}>
                        <span>{t('education.degree.title')}</span>
                    </div>
                    <SpotlightCard
                        className={styles.degreeCard}
                        spotlightColor="rgba(189, 0, 255, 0.2)"
                    >
                        <div className={styles.degreeIcon}>
                            🎓
                        </div>
                        <h3 className={styles.degreeTitle}>{t('education.degree.name')}</h3>
                        <div className={styles.degreeSchool}>{t('education.degree.school')}</div>
                        <div className={styles.degreeYear}>2019 - 2025+</div>
                        <p className={styles.degreeDesc}>
                            {t('education.degree.desc')}
                        </p>
                    </SpotlightCard>
                </div>

                {/* Column 2: Certifications */}
                <div className={styles.column}>
                    <div className={styles.columnTitle}>
                        <span>{t('education.certs.title')}</span>
                    </div>
                    <div className={styles.certGrid}>
                        {certifications.map((cert) => (
                            <SpotlightCard
                                key={cert.name}
                                className={styles.certCard}
                                spotlightColor={cert.spotlight}
                            >
                                <div className={styles.certContent}>
                                    <div className={styles.certHeader}>
                                        <div
                                            className={styles.certIcon}
                                            style={{ color: cert.color, background: `${cert.color}15` }}
                                        >
                                            {cert.icon}
                                        </div>
                                        <div>
                                            <div className={styles.certIssuer}>{cert.issuer}</div>
                                            <div className={styles.certDate}>{cert.date}</div>
                                        </div>
                                    </div>
                                    <h4 className={styles.certName}>{cert.name}</h4>
                                </div>
                            </SpotlightCard>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
}
