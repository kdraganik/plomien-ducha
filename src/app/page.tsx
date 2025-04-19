"use client"

import Hero from "@/components/Hero";
import Description from "@/components/Description";

import styles from "@/styles/page.module.scss";

export default function Home() {
  return (
    <main className={styles.main}>
      <Hero />
      <Description />
    </main>
  );
}