import styles from './Header.module.css'

export const Header = () => {
  return (
    <header className={styles.header}>
      <div className={styles.container}>
        <div className={styles.logo}>
          <span className={styles.logoIcon}>💰</span>
          <span className={styles.logoText}>Loan Application</span>
        </div>
        <nav className={styles.nav}>
          <span className={styles.navItem}>Заявка на займ</span>
        </nav>
      </div>
    </header>
  )
}
