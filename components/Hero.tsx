'use client';

import DarkVeil from './effects/dark_veil';
import Particles from './effects/particles';
import styles from './Hero.module.css';

import { useLanguage } from '../context/LanguageContext';

export default function Hero() {
    const { t } = useLanguage();

    return (
        <section className={styles.hero}>
            <DarkVeil />
            <Particles className='z-2' />
            <div className={styles.grid}></div>
            <div className={styles.content}>

                <h1 className={styles.title}>{t('hero.title')}</h1>
                <p className={styles.subtitle}>{t('hero.subtitle')}</p>
                <button className={styles.cta}>{t('hero.cta')}</button>
            </div>
        </section>
    );
}
