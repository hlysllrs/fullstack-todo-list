import styles from './MenuListItem.module.scss'

export default function MenuListItem({ menuItem, handleAddToOrder }) {
  return (
    <div className={styles.MenuListItem}>
      <div className={`${styles.imageContainer} flex-ctr-ctr`}>
        <img src={menuItem.imageURL} className={styles.itemImage} />
      </div>
      <div className={styles.itemInfo}>
        <div className={styles.name}>{menuItem.name}</div>
        <div className={styles.buy}>
          <span>${menuItem.price.toFixed(2)}</span>
          <button className="btn-sm" onClick={() => handleAddToOrder(menuItem._id)}>
            add to cart
          </button>
        </div>
      </div>
    </div>
  )
}