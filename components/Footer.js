import styles from './Footer.module.css'

export default function Footer() {
  return (
    <>
      <footer className={styles.footer}>
        <section className="address">
          <address property="address" typeof="PostalAddress">
            <span property="streetAddress">5415 College Ave</span>
            <span>, </span>
            <span property="addressLocality">Oakland</span>
            <span>, </span>
            <span property="addressRegion">CA</span>
            <span>&nbsp;</span>
            <span property="postalCode">94618</span>
            <p><a href="tel:+15106547753">(510) 654-7753</a></p>
          </address>
        </section>
      </footer>
    </>
  )
}
