import styles from './Hero.module.css';

export default function Hero() {
    return (
        <section className={styles.hero}>
            <div className={styles.grid}></div>
            <div className={styles.content}>
                <h1 className={styles.title}>MATEUS FELIPE</h1>
                <p className={styles.subtitle}>FULL-STACK DEVELOPER</p>
                <button className={styles.cta}>View Projects</button>
            </div>
        </section>
    );
}
