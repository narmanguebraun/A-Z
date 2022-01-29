import markdownStyles from './markdown.module.css'
import styles from '../styles/Site.module.css'

export default function PostBody({ content }) {
  return (
    <div className={styles.post}>
      <div
        className={markdownStyles['markdown']}
        dangerouslySetInnerHTML={{ __html: content }}
      />
    </div>
  )
}
