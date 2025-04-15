'use client';

import Image from "next/image";
import styles from '#/hero.module.scss';
import logo from '@/images/logo.svg'

export default function Hero() {
    return (
        <div className={styles.container}>
            <Image
                src={logo}
                alt="Logotyp"
                height={200}
                className={styles.logo}
            />
            <h1 className={styles.title}>Płomień Ducha</h1>
            <h2 className={styles.subtitle}>Okręgowa Konferencja Przebudzeniowa</h2>
            <h3 className={styles.datePlace}>6-7 czerwca 2025 r. ___ Wrocław</h3>
        </div>
    );
}