import Image from 'next/image'
import {
  StyledTypographyUrbanistBody,
  StyledTypographyUrbanistH4,
} from '@/components/UI/Typography/Typography.styled'
import styles from './styles.module.scss'

export default function CryptoWidgetFlexibility({ data }) {
  return (
    <section className={styles.wrapper}>
      <div className='container'>
        <ul className='grid'>
          {data.screen2Content.map(({ description, image, id, title }) => (
            <li className='grid-item' key={id}>
              <Image src={image.url} alt={title} width={64} height={64} />

              <StyledTypographyUrbanistH4 className='grid-item-title grid-item-title-1'>
                {title}
              </StyledTypographyUrbanistH4>

              <StyledTypographyUrbanistBody className='grid-item-description grid-item-description-1'>
                {description}
              </StyledTypographyUrbanistBody>
            </li>
          ))}
        </ul>
      </div>
    </section>
  )
}
