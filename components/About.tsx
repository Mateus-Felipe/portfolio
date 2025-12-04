import styles from './About.module.css';
import Particles from './effects/particles';
import { Octokit } from "@octokit/core";

async function getRepoCount() {
    try {
        if (process.env.GITHUB_TOKEN) {
            const octokit = new Octokit({ auth: process.env.GITHUB_TOKEN, });
            const res = await octokit.request('GET /user/repos?per_page=99', {
                headers: {
                    'X-GitHub-Api-Version': '2022-11-28'
                }
            });
            if (res.status === 200) {
                const privateRepos = res.data.filter((repo: any) => repo.private).length || 0;
                const publicRepos = res.data.filter((repo: any) => !repo.private).length || 0;
                return publicRepos + privateRepos;
            }
        }
        console.log('No token or token failed');

        // Fallback to public profile if no token or token failed
        const res = await fetch('https://api.github.com/users/Mateus-Felipe', { next: { revalidate: 3600 } });
        if (!res.ok) return 90; // Fallback
        const data = await res.json();
        return data.public_repos;

    } catch (error) {
        console.error('Error fetching repo count:', error);
        return 90; // Fallback
    }
}

export default async function About() {
    const experienceYears = new Date().getFullYear() - 2019;
    const projectCount = await getRepoCount();

    return (
        <section className={styles.section} id="about">
            <Particles className='z-1' />
            <div className={styles.sectionPadding} >
                <div className={styles.container}>
                    <div className={styles.imageContainer}>
                        <div className={styles.profileFrame}>
                            <div className={styles.glitchText}>MF-2025</div>
                            {/* Placeholder for actual image or 3D avatar */}
                            <div style={{ color: 'var(--accent-cyan)', fontFamily: 'var(--font-geist-mono)' }}>
                                [SYSTEM_ONLINE]
                            </div>
                        </div>
                    </div>

                    <div className={styles.content}>
                        <h2 className={styles.heading}>Behind the Code</h2>
                        <p className={styles.bio}>
                            I am Mateus Felipe, a Full-Stack Developer crafting digital experiences since 2019.
                            Born in the digital age (2007), I merge youthful innovation with robust technical expertise.
                            My mission is to build systems that are not just functional, but works of art.
                        </p>

                        <div className={styles.statGrid}>
                            <div className={styles.statItem}>
                                <span className={styles.statValue}>{experienceYears}+</span>
                                <span className={styles.statLabel}>Years Experience</span>
                            </div>
                            <div className={styles.statItem}>
                                <span className={styles.statValue}>{projectCount}+</span>
                                <span className={styles.statLabel}>Projects Completed</span>
                            </div>
                            <div className={styles.statItem}>
                                <span className={styles.statValue}>Full-Stack</span>
                                <span className={styles.statLabel}>Specialization</span>
                            </div>
                            <div className={styles.statItem}>
                                <span className={styles.statValue}>Global</span>
                                <span className={styles.statLabel}>Client Base</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
