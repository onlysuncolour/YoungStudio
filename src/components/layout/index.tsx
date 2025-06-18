"use client"

import styles from './index.module.css'
import Link from 'next/link'
import Image from 'next/image'
import { usePathname } from 'next/navigation';
// import { useRouter, usePathname } from 'next/navigation'

export default function Layout({ children }: Readonly<{
  children: React.ReactNode;
}>) {
  const pathname = usePathname();
  if (pathname.startsWith('/resumes/')) {
    return <div className={styles.container}>
      {children}
    </div>
  }
  return (
    <div className={styles.container}>
      <header className={styles.header}>
        {/* <Image
          width={76}
          height={36}
          src="/logo.png"
          alt="inari"
          className={styles.logo}
        /> */}
        <div className={styles.menus}>
          <Link className={styles.menu} href="/">
            <span  className={styles.menuSpan}>Home</span></Link>
          {/* <Link className={styles.menu} href="/resumes">
            <span  className={styles.menuSpan}>Resume</span></Link> */}
          <Link className={styles.menu} href="/posts">
            <span  className={styles.menuSpan}>Posts</span></Link>
          <Link className={styles.menu} href="/notes">
            <span  className={styles.menuSpan}>Notes</span></Link>
          <Link className={styles.menu} href="/leetcodes">
            <span  className={styles.menuSpan}>Leetcodes</span></Link>
          <Link className={styles.menu} href="/about">
            <span  className={styles.menuSpan}>About</span></Link>
          <Link className={styles.menu} href="https://github.com/onlysuncolour/YoungStudio">
            <span  className={styles.menuSpan}>github</span></Link>
        </div>
      </header>
      {children}
    </div>
  )
}
