import styles from './Projects.module.css';

const projects = [
    {
        id: 1,
        title: "E-Commerce Platform",
        description: "A high-performance online store built with Next.js and Stripe integration.",
        tags: ["Next.js", "TypeScript", "Stripe"]
    },
    {
        id: 2,
        title: "AI Dashboard",
        description: "Analytics dashboard powered by machine learning models for real-time data visualization.",
        tags: ["React", "Python", "D3.js"]
    },
    {
        id: 3,
        title: "Social Network App",
        description: "Mobile-first social platform with real-time messaging and media sharing.",
        tags: ["React Native", "Firebase", "Redux"]
    }
];

export default function Projects() {
    return (
        <section className={styles.section} id="projects">
            <h2 className={styles.heading}>Selected Works</h2>
            <div className={styles.grid}>
                {projects.map((project) => (
                    <div key={project.id} className={styles.card}>
                        <div className={styles.cardImage}></div>
                        <h3 className={styles.cardTitle}>{project.title}</h3>
                        <p className={styles.cardDesc}>{project.description}</p>
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
