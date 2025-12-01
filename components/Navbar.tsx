import styles from './Navbar.module.css';

export default function Navbar() {
    return (
        <nav className={styles.nav}>
            <div className={styles.logo}>MF.</div>
            <div className={styles.links}>
                <a href="#" className={styles.link}>About</a>
                <a href="#projects" className={styles.link}>Projects</a>
                <a href="#contact" className={styles.link}>Contact</a>
            </div>
        </nav>
    );
}
