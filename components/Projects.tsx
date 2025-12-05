'use client';

import styles from './Projects.module.css';
import { useLanguage } from '../context/LanguageContext';

const projects = [
    {
        id: 1,
        titleKey: "projects.p1.title",
        descKey: "projects.p1.desc",
        tags: ["Next.js", "TypeScript", "Stripe"]
    },
    {
        id: 2,
        titleKey: "projects.p2.title",
        descKey: "projects.p2.desc",
        tags: ["React", "Python", "D3.js"]
    },
    {
        id: 3,
        titleKey: "projects.p3.title",
        descKey: "projects.p3.desc",
        tags: ["React Native", "Firebase", "Redux"]
    }
];

export default function Projects() {
    const { t } = useLanguage();

    return (
        <section className={styles.section} id="projects">
            <h2 className={styles.heading}>{t('projects.heading')}</h2>
            <div className={styles.grid}>
                {projects.map((project) => (
                    <div key={project.id} className={styles.card}>
                        <div className={styles.cardImage}></div>
                        <h3 className={styles.cardTitle}>{t(project.titleKey)}</h3>
                        <p className={styles.cardDesc}>{t(project.descKey)}</p>
                        <div className={styles.tags}>
                            {project.tags.map(tag => (
                                <span key={tag} className={styles.tag}>{tag}</span>
                            ))}
                        </div>
                    </div>
                ))}
            </div>
        </section>
    );
}
