"use client"

import styles from './index.module.css'
import Link from 'next/link'
import Image from 'next/image'
// import { useRouter, usePathname } from 'next/navigation'

export default function Layout({ children }: Readonly<{
  children: React.ReactNode;
}>) {
  // const pathname = usePathname();
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
          <Link className={styles.menu} href="/">Home</Link>
          <Link className={styles.menu} href="/posts">Posts</Link>
          <Link className={styles.menu} href="/notes">Notes</Link>
          <Link className={styles.menu} href="/about">About</Link>
        </div>
      </header>
      {children}
    </div>
  )
}
