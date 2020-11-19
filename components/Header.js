import styles from './Header.module.css'

export default function Header({ title, subTitle }) {
  return (
    <header className={styles.header}>
      <h1 className="title">{title}</h1>
      <h3 className="sub-title">{subTitle}</h3>
    </header>
  );
}
