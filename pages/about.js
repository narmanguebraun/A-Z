import Head from 'next/head'
import Layout from '../components/Layout'
import styles from '../styles/Site.module.css'

export default function About() {
  return (
    <Layout>
      <section className={styles.section}>
        <p>The Tech Notebook</p>
      </section>
    </Layout>
  )
}
