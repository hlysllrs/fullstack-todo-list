import styles from './Home.module.scss'

export default function Home(props) {
  return (
    <div className={styles.Home}>
      <center>
        <img src="/img/cover-image.jpeg" alt="Cover Image" className={styles.cover} />

      </center>
    </div>
  )
}