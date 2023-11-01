import styles from '@/sections/HomeSections/YourNeedsSection/YourNeedsSection.module.scss'
import CartRequirement from '@/components/CartRequirement'
import CartRequirementModalWithCart from './YourNeedsSectionModalWithButton'

function YourNeedsSectionDesktopCarts({ data, formData }) {
  return (
    <div className={styles.listRequirements}>
      {data.section2Content.map(
        ({ id, description, image, title, buttonText }) =>
          !buttonText ? (
            <CartRequirement
              key={id}
              description={description}
              href='#'
              imageSrc={image}
              title={title}
            />
          ) : (
            <CartRequirementModalWithCart
              buttonText={buttonText}
              description={description}
              title={title}
              image={image}
              data={formData}
            />
          )
      )}
    </div>
  )
}

export default YourNeedsSectionDesktopCarts
