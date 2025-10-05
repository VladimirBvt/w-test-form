import styles from './Footer.module.css'

export const Footer = () => {
  const currentYear = new Date().getFullYear()

  return (
    <footer className={styles.footer}>
      <div className={styles.container}>
        <div className={styles.content}>
          <div className={styles.section}>
            <h3 className={styles.title}>Loan Application</h3>
            <p className={styles.description}>
              Быстрое и удобное оформление заявки на займ онлайн
            </p>
          </div>
          <div className={styles.section}>
            <h4 className={styles.subtitle}>Контакты</h4>
            <p className={styles.text}>Email: support@loanapp.com</p>
            <p className={styles.text}>Телефон: 8 800 000 00 00</p>
          </div>
          <div className={styles.section}>
            <h4 className={styles.subtitle}>Информация</h4>
            <p className={styles.text}>О компании</p>
            <p className={styles.text}>Условия займа</p>
            <p className={styles.text}>Политика конфиденциальности</p>
          </div>
        </div>
        <div className={styles.bottom}>
          <p className={styles.copyright}>
            © {currentYear} Loan Application. Все права защищены.
          </p>
        </div>
      </div>
    </footer>
  )
}
