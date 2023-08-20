import styles from './Logo.module.scss'

export default function Logo({ handleLogoClick, location }) {

  return (
    <div className={styles.Logo}>
      <img className={location.pathname === '/home' ? styles.whiteLogo : ''} src='../../img/lounger-logo.svg' alt='Lounger Logo' onClick={handleLogoClick} />
    </div>
  )
}