import { Link } from 'react-router-dom'
import { Paths } from '../../shared/lib/const.ts'
import styles from './home.module.css'

export const Home = () => {
  return (
    <div className={styles.container}>
      <div className={styles.content}>
        <h1 className={styles.title}>Получите займ быстро и удобно</h1>
        <p className={styles.subtitle}>
          Оформите заявку онлайн за несколько минут. Простая анкета, быстрое
          решение, деньги на карту в течение часа.
        </p>

        <div className={styles.features}>
          <div className={styles.feature}>
            <div className={styles.featureIcon}>⚡</div>
            <h3 className={styles.featureTitle}>Быстро</h3>
            <p className={styles.featureDescription}>
              Решение по заявке за 5 минут
            </p>
          </div>

          <div className={styles.feature}>
            <div className={styles.featureIcon}>🔒</div>
            <h3 className={styles.featureTitle}>Безопасно</h3>
            <p className={styles.featureDescription}>
              Защита персональных данных
            </p>
          </div>

          <div className={styles.feature}>
            <div className={styles.featureIcon}>💳</div>
            <h3 className={styles.featureTitle}>Удобно</h3>
            <p className={styles.featureDescription}>Деньги сразу на карту</p>
          </div>
        </div>

        <Link to={Paths.STEP_ONE} className={styles.ctaButton}>
          Начать оформление
          <span className={styles.arrow}>→</span>
        </Link>
      </div>
    </div>
  )
}
