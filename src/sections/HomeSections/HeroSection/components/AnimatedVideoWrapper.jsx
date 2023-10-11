import styles from '@/sections/HomeSections/HeroSection/HeroSection.module.scss'
import { AnimatedFirstScreenVideo } from '@/components/AnimatedVideo'

function AnimatedVideoWrapper() {
  return (
    <AnimatedFirstScreenVideo
      className={styles.graphic}
      height={595}
      timeRepeat={5000}
      urlFirstVideo='/video/video1.webm'
      urlSecondVideo='/video/video2.mp4'
      width={595}
    />
  )
}

export default AnimatedVideoWrapper
