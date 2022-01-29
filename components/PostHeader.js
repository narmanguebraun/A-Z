import DateFormatter from './DateFormatter'
import PostTitle from './PostTitle'

import styles from '../styles/Site.module.css'

export default function PostHeader({ title, date }) {
  return (
    <div className={styles.post_header}>
      <PostTitle>{title}</PostTitle>
      Last edit &mdash; <DateFormatter dateString={date} />
    </div>
  )
}
