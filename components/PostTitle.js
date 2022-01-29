import styles from '../styles/Site.module.css'

export default function PostTitle({ children }) {
  return (
    <h1 className={styles.post_title}>{children}</h1>
  )
}
