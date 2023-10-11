import clsx from 'clsx'
import Image from 'next/image'
import styles from '../HeroSection.module.scss'

export default function AnimatedMobile() {
  return (
    <div className={styles['gif-wrapper']}>
      <Image
        className={clsx(styles.gif, styles.gif_1)}
        src='/video/b2b_hero_mobile.avif'
        alt='avif'
        priority
        fetchpriority='high'
        loading='eager'
        width={375}
        height={152}
      />
      <Image
        className={clsx(styles.gif, styles.gif_2)}
        priority
        fetchpriority='high'
        loading='eager'
        src='/video/b2b_hero_mobile.webp'
        alt='webp'
        width={375}
        height={152}
      />
    </div>
  )
}
