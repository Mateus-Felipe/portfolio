'use client';

import styles from './Timeline.module.css';
import { useLanguage } from '../context/LanguageContext';
import DecryptedText from './effects/DecryptedText';

const timelineData = [
    {
        titleKey: "timeline.t1.title",
        company: "Tech Solutions Inc.",
        year: "2022 - Present",
        descKey: "timeline.t1.desc"
    },
    {
        titleKey: "timeline.t2.title",
        company: "Side Project",
        year: "2021",
        descKey: "timeline.t2.desc"
    },
    {
        titleKey: "timeline.t3.title",
        company: "Innovate Corp.",
        year: "2020 - 2022",
        descKey: "timeline.t3.desc"
    },
    {
        titleKey: "timeline.t4.title",
        company: "State University",
        year: "2016 - 2020",
        descKey: "timeline.t4.desc"
    }
];

export default function Timeline() {
    const { t } = useLanguage();

    return (
        <section className={styles.section} id="timeline">
            <h2 className={styles.heading}>
                <DecryptedText
                    text={t('timeline.heading')}
                    speed={50}
                    animateOnScroll={true}
                />
            </h2>
            <p className={styles.subheading}>{t('timeline.subheading')}</p>

            <div className={styles.timeline}>
                {timelineData.map((item, index) => (
                    <div key={index} className={`${styles.container} ${index % 2 === 0 ? styles.left : styles.right}`}>
                        <div className={styles.dot}></div>
                        <div className={styles.content}>
                            <h3 className={styles.title}>{t(item.titleKey)}</h3>
                            <span className={styles.date}>{item.company} | <span>{item.year}</span></span>
                            <p className={styles.description}>{t(item.descKey)}</p>
                        </div>
                    </div>
                ))}
            </div>
        </section>
    );
}
