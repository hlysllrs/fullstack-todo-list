import { useState } from 'react'
import styles from './CategoryList.module.scss'

export default function CategoryList({ categories, activeCat, setActiveCat }) {
  const [showHover, setShowHover] = useState(false)


  function showHoverMenu() {
    setShowHover(true)
    setTimeout(() => {
      setShowHover(false)
    }, 10000)
  }

  function hideHoverMenu() {
    setShowHover(false)
  }

  const cats = showHover ? categories.map(cat =>
    < li
      key={cat}
      className={cat === activeCat ? styles.active : ''}
      onClick={() => {
        setActiveCat(cat)
        hideHoverMenu()
      }}
    >
      {cat}
    </li >
  ) : <li className={styles.active}>{activeCat}</li>

  return (
    < ul
      className={`${styles.CategoryList} ${!showHover ? styles.singleCat : ''}`}
      onMouseEnter={() => showHoverMenu()}
      onMouseLeave={() => hideHoverMenu()}
    >
      {cats}
    </ul >

  )
}