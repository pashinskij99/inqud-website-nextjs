import Image from 'next/image'
import styles from '../HeroSection.module.scss'

// eslint-disable-next-line no-unused-vars
export function MobileGrid() {
  return (
    <>
      <Image
        className={styles.gif}
        priority
        fetchpriority='high'
        loading='eager'
        src='/video/b2b_hero_mobile.gif'
        width={343}
        height={152}
      />

      {/* <GifPlayer
        fetchpriority='high'
        priority
        loading='lazy'
        autoplay
        still='/video/b2b_hero_mobile.webp'
        gif='/video/b2b_hero_mobile.gif'
        alt='animation'
        width={343}
        height={152}
      /> */}
    </>
  )
}
