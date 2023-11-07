import clsx from 'clsx'
import Image from 'next/image'
import styles from '../HeroSection.module.scss'

export default function AnimatedMobile() {
  const randomString = Math.random().toString(36).substring(7)
  return (
    <div className={styles['gif-wrapper']}>
      <Image
        className={clsx(styles.gif, styles.gif_1)}
        src={`/video/b2b_hero_mobile.webp?cache=${randomString}`}
        alt='video'
        key={1}
        priority
        fetchPriority='high'
        loading='eager'
        width={375}
        height={152}
        unoptimized
      />
    </div>
  )
}
