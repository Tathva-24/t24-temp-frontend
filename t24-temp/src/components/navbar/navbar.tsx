'use client';
import React from 'react';
import styles from './navbar.module.css';
import Link from 'next/link';

export default function Navbar() {
  return (
    <div className={styles.main}>
      <div className={styles.navbar}>
        <Link href='/' className={styles.navItem}>
          Home
        </Link>
        <Link href='/workshop' className={styles.navItem}>
          Workshop
        </Link>
        <Link href='/lecture' className={styles.navItem}>
          Lecture
        </Link>
        <Link href='/contact' className={styles.navItem}>
          Contact
        </Link>
      </div>
    </div>
  );
}
