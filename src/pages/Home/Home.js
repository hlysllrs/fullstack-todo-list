import styles from './Home.module.scss'
import coverImage from '../../img/cover-image.png'

export default function Home(props) {

  return (
    <div className={styles.Home}>
      <center>
        <img src={coverImage} alt="Cover Image" className={styles.cover} />
      </center>
    </div>
  )
}