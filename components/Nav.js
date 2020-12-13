import styles from './Nav.module.css'
import Link from 'next/link'

export default function Nav() {
  return (
    <nav className={styles.nav}>
      <ul>
        <li>
          <Link href="/">
            <a>Home</a>
          </Link>
        </li>
        <li>
          <Link href="/menu">
            <a>Menu</a>
          </Link>
        </li>
      </ul>
    </nav>
  );
}
