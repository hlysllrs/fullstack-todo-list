import styles from './Logo.module.scss'
import logoImage from '../../img/lounger-logo.svg'

export default function Logo({ handleLogoClick, location }) {

  return (
    <div className={styles.Logo}>
      <img
        className={location.pathname === '/home' ? styles.whiteLogo : ''}
        src={logoImage}
        alt='Lounger Logo'
        onClick={handleLogoClick} />
    </div>
  )
}