import React from "react";
import Image from "next/image";

import "#/globals.scss";
import styles from "#/layout.module.scss";

import bg from '../images/bg.jpg'

export const metadata = {
  title: "Płomień Ducha"
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>
        <div className={styles.container}>
          {children}
          <div className={styles.overlay}/>
          <Image
            className={styles.bgImage}
            src={bg}
            alt="Background texture"
            fill={true}
            style={{objectFit: "cover"}}
          />
        </div>
      </body>
    </html>
  );
}