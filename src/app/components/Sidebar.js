import React from 'react';
import Link from 'next/link';
import styles from './Sidebar.module.css';

const Sidebar = () => {
  return (
    <div className={styles.sidebar}>
      <h1 className={styles.logo}>BrAIN 🧠</h1>
      <nav>
        <ul className={styles.navList}>
          <li><Link href="/dashboards" className={styles.navItem}><span className={styles.icon}>🏠</span>Overview</Link></li>
          <li><Link href="/dashboard/research-assistant" className={styles.navItem}><span className={styles.icon}>💡</span>Research Assistant</Link></li>
          <li><Link href="/dashboard/research-reports" className={styles.navItem}><span className={styles.icon}>📄</span>Research Reports</Link></li>
          <li><Link href="/playground" className={styles.navItem}><span className={styles.icon}>⚙️</span>API Playground</Link></li>
          <li><Link href="/dashboard/invoices" className={styles.navItem}><span className={styles.icon}>📊</span>Invoices</Link></li>
          <li><Link href="/dashboard/documentation" className={styles.navItem}><span className={styles.icon}>📚</span>Documentation</Link></li>
        </ul>
      </nav>
    </div>
  );
};

export default Sidebar;
