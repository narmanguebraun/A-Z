import Head from 'next/head'
import Image from 'next/image'
import Link from 'next/link'
import Layout from '../components/Layout'
import { TITLE, DESCRIPTION, URL, HOME_OG_IMAGE_URL } from '../lib/constants'
import { getAllPosts } from '../lib/api'
import AllPosts from '../components/AllPosts'
import styles from '../styles/Site.module.css'

export default function List({ allPosts }) {
  return (
    <Layout>
      <section className={styles.section}>
        <AllPosts posts={ allPosts } />
      </section>
    </Layout>
  )
}

export async function getStaticProps() {
  const allPosts = getAllPosts([
    'title',
    'date',
    'tag',
    'slug',
    'coverImage'
  ])

  return {
    props: { allPosts },
  }
}
