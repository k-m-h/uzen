import styles from './Logo.module.css'
import Image from 'next/image'

export default function Logo() {
  return (
    <>
      <logo className={styles.logo}>
        <Image
          src="/japanese_cuisine_logo_by_m1k3y_grey_d781p8x.jpg"
          alt="Uzen Logo"
          layout="intrinsic"
          height="830px"
          width="492px"
          sizes="(max-height: 1000px) 700px"
        />
      </logo>
    </>
  )
}
