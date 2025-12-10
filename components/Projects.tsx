'use client';

import styles from './Projects.module.css';
import { useLanguage } from '../context/LanguageContext';
import DecryptedText from './effects/DecryptedText';

const projects = [
    {
        id: 1,
        titleKey: "projects.p1.title",
        descKey: "projects.p1.desc",
        tags: ["React.js", "TypeScript", "Node.Js", "Electron.js", "Postgres"]
    },
    {
        id: 2,
        titleKey: "projects.p2.title",
        descKey: "projects.p2.desc",
        tags: ["Next.js", "Node.js", "Postgres", "Gemini", "OpenAI"]
    },
    {
        id: 3,
        titleKey: "projects.p3.title",
        descKey: "projects.p3.desc",
        tags: ["Next.js", "Typescript", "Node.js", "Electron.js", "MySQL"]
    },
    {
        id: 4,
        titleKey: "projects.p4.title",
        descKey: "projects.p4.desc",
        tags: ["Python"]
    },
    {
        id: 5,
        titleKey: "projects.p5.title",
        descKey: "projects.p5.desc",
        tags: ["React Native", "Typescript", "Electron.js", "Node.js", "Postgres"]
    },
    {
        id: 6,
        titleKey: "projects.p6.title",
        descKey: "projects.p6.desc",
        tags: ["Next.js", "Typescript", "Node.js", "Postgres"]
    },
];

export default function Projects() {
    const { t } = useLanguage();

    return (
        <section className={styles.section} id="projects">
            <h2 className={styles.heading}>
                <DecryptedText
                    text={t('projects.heading')}
                    speed={50}
                    animateOnScroll={true}
                />
            </h2>
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
