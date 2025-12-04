import styles from './Timeline.module.css';

const timelineData = [
    {
        title: "Senior Software Engineer",
        company: "Tech Solutions Inc.",
        year: "2022 - Present",
        description: "Leading development of scalable web applications, mentoring junior engineers, and driving architectural decisions for next-gen products."
    },
    {
        title: "Lead on Project Phoenix",
        company: "Side Project",
        year: "2021",
        description: "Developed and launched a full-stack SaaS application for project management, utilizing React, Node.js, and PostgreSQL."
    },
    {
        title: "Software Engineer",
        company: "Innovate Corp.",
        year: "2020 - 2022",
        description: "Contributed to core product features, improving application performance by 20% and participating in a full agile development lifecycle."
    },
    {
        title: "B.S. in Computer Science",
        company: "State University",
        year: "2016 - 2020",
        description: "Graduated with honors. Focused on algorithms, data structures, and software engineering principles. President of the Coding Club."
    }
];

export default function Timeline() {
    return (
        <section className={styles.section} id="timeline">
            <h2 className={styles.heading}>My Professional Journey</h2>
            <p className={styles.subheading}>A timeline of my key experiences, projects, and milestones.</p>

            <div className={styles.timeline}>
                {timelineData.map((item, index) => (
                    <div key={index} className={`${styles.container} ${index % 2 === 0 ? styles.left : styles.right}`}>
                        <div className={styles.dot}></div>
                        <div className={styles.content}>
                            <h3 className={styles.title}>{item.title}</h3>
                            <span className={styles.date}>{item.company} | <span>{item.year}</span></span>
                            <p className={styles.description}>{item.description}</p>
                        </div>
                    </div>
                ))}
            </div>
        </section>
    );
}
