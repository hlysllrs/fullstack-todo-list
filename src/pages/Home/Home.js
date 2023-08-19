import styles from './Home.module.scss'
import MenuList from '../../components/MenuList/MenuList'

export default function Home(props) {
  return (
    <div className="Home">
      <center>
        <img src="../../img/cover-image.jpeg" alt="Cover Image" className={styles.cover} />
        <h1>Home</h1>

      </center>
    </div>
  )
}