import clsx from 'clsx'
import Image from 'next/image'
import styles from '../HeroSection.module.scss'

export default function AnimatedMobile() {
  return (
    <div className={styles['gif-wrapper']}>
      <Image
        className={clsx(styles.gif, styles.gif_1)}
        src='/video/b2b_hero_mobile.webp'
        alt='video'
        priority
        fetchpriority='high'
        loading='eager'
        width={375}
        height={152}
      />
    </div>
  )
}
