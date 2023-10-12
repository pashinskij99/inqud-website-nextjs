import styles from '@/sections/HomeSections/YourNeedsSection/YourNeedsSection.module.scss'
import CartRequirement from '@/components/CartRequirement'
import CartRequirementModalWithCart from './YourNeedsSectionModalWithButton'

function YourNeedsSectionDesktopCarts({ list, transCart, data }) {
  return (
    <div className={styles.listRequirements}>
      {list.map(({ id, description, image, title }) =>
        id !== 1 ? (
          <CartRequirement
            key={id}
            description={description}
            href='#'
            imageSrc={image}
            title={title}
          />
        ) : (
          <CartRequirementModalWithCart trans={transCart} data={data} />
        )
      )}
    </div>
  )
}

export default YourNeedsSectionDesktopCarts
