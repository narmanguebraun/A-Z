import Link from 'next/link'
import styles from '../styles/Site.module.css'

const ExternalLink = ({ href, children }) => (
  <a
    className="ext_link"
    target="_blank"
    rel="noopener noreferrer"
    href={href}
  >
  {children}
  </a>
);

export default function Footer() {
  return (
    <div className={styles.footer}>
      <p>&mdash;<br></br>A-Z &ndash; The Tech Notebook<br></br>
      Glossary of Terms, Links and Notes. Edit project on {' '}<ExternalLink href="https://github.com/narmanguebraun/A-Z">Github</ExternalLink>.</p>
    </div>
  )
}