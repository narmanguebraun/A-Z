import Link from 'next/link'
import styles from '../styles/Site.module.css'

/* LIGHT-DARK MODE */
import { useTheme } from 'next-themes'

export default function Header() {
  const { theme, setTheme } = useTheme()

  return (
      <div className={styles.header}>
        <nav>
          <ul className={styles.nav}>
            <li><Link href="/"><a>A-Z</a></Link></li>
            <li><Link href="/list"><a>List</a></Link></li>
            <li><Link href="/search"><a>Search</a></Link></li>
          </ul>
        </nav>
        <div className={styles.header_div}>
          <div className={styles.mode}>
            <button alt="Change Mode" className={styles.button_mode} onClick={() => {setTheme(theme === 'light' ? 'dark' : 'light')}}></button>
          </div>
        </div>
      </div>
    )
}
