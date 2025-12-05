'use client';
import SpotlightCard from './effects/spotlight_card';
import styles from './Skills.module.css';
import { useLanguage } from '../context/LanguageContext';
import DecryptedText from './effects/DecryptedText';

const skillCategories = [
    {
        titleKey: "skills.categories.frontend",
        icon: "FE",
        skills: ["JavaScript", "TypeScript", "Next.js", "React.js", "Tailwind CSS", "Shadcn UI"]
    },
    {
        titleKey: "skills.categories.backend",
        icon: "BE",
        skills: ["Node.js", "Express.js", "PHP", "Laravel", "C#", ".NET Core"]
    },
    {
        titleKey: "skills.categories.database",
        icon: "DB",
        skills: ["MongoDB", "PostgreSQL", "MySQL", "PrismaORM", "Mongoose"]
    },
    {
        titleKey: "skills.categories.devops",
        icon: "CL",
        skills: ["AWS", "Vercel", "Docker", "Git", "CI/CD", "Linux VPS"]
    },
    {
        titleKey: "skills.categories.security",
        icon: "SE",
        skills: ["Cybersecurity", "Penetration Testing", "Networking", "IoT", "SEO"]
    }
];

export default function Skills() {
    const { t } = useLanguage();

    const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
        const card = e.currentTarget;
        const rect = card.getBoundingClientRect();
        const x = e.clientX - rect.left;
        const y = e.clientY - rect.top;

        card.style.setProperty('--x', `${x}px`);
        card.style.setProperty('--y', `${y}px`);
    };

    return (
        <section className={styles.section} id="skills">
            <h2 className={styles.heading}>
                <DecryptedText
                    text={t('skills.heading')}
                    speed={50}
                    animateOnScroll={true}
                />
            </h2>
            <div className={styles.grid}>
                {skillCategories.map((category) => (
                    <SpotlightCard
                        key={category.titleKey}
                        className={styles.card}
                        spotlightColor="rgba(54, 22, 74, 1)"
                        onMouseMove={handleMouseMove}
                    >
                        <div className={styles.cardBorder} />
                        <div className={styles.cardContent}>
                            <div className={styles.cardHeader}>
                                <div className={styles.icon}>{category.icon}</div>
                                <h3 className={styles.category}>{t(category.titleKey)}</h3>
                            </div>
                            <div className={styles.list}>
                                {category.skills.map((skill) => (
                                    <span key={skill} className={styles.item}>{skill}</span>
                                ))}
                            </div>
                        </div>
                    </SpotlightCard>
                ))}
            </div>
        </section>
    );
}
