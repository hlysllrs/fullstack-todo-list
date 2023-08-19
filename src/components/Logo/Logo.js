import styles from './Logo.module.scss'

export default function Logo() {
  return (
    <div className={styles.Logo}>
      <img src='../../img/lounger-logo.svg' alt='Lounger Logo' />
    </div>
  )
}