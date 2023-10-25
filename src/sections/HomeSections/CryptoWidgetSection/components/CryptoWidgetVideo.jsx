import styles from '@/sections/HomeSections/CryptoWidgetSection/CryptoWidgetSection.module.scss'

function CryptoWidgetVideo() {
  return (
    <video
      loop
      autoPlay
      muted
      playsInline
      controls={false}
      width={500}
      height={600}
      className={styles.graphic}
      src='/video/b2b_crypto_video_web.webm'
    />
  )
}

export default CryptoWidgetVideo
