import styles from '../YourNeedsSection.module.scss'

function CoinsList({ coinsList }) {
  return (
    <ul className={styles['coins-list-wrapper']}>
      {coinsList.map(({ id, icon }) => (
        <li key={id}>{icon}</li>
      ))}
    </ul>
  )
}

export default CoinsList
