import { useRouter } from 'next/router'
import ErrorPage from 'next/error'
import Head from 'next/head'

import { TITLE } from '../../lib/constants'
import { getPostBySlug, getAllPosts } from '../../lib/api'
import markdownToHtml from '../../lib/markdownToHtml'

import Layout from '../../components/Layout'
import PostTitle from '../../components/PostTitle'
import PostHeader from '../../components/PostHeader'
import PostBody from '../../components/PostBody'

import styles from '../../styles/Site.module.css'

export default function Post({ post }) {
  const router = useRouter()
  if (!router.isFallback && !post?.slug) {
    return <ErrorPage statusCode={404} />
  }
  return (
    <Layout>
      <Head>
        <title>{TITLE}</title>
      </Head>
      <section className={styles.article}>
        {router.isFallback ? (
          <PostTitle>Loading…</PostTitle>
          ) : (
          <>
            <article>
              <Head>
                <title>{post.title} &mdash; {TITLE}</title>
                <meta property="og:image" content={post.ogImage.url} />
              </Head>
              <div>
                <PostHeader title={post.title} date={post.date} />
                <PostBody content={post.content} />
              </div>
            </article>
          </>
        )}
      </section>
    </Layout>
  )
}

export async function getStaticProps({ params }){
  const post = getPostBySlug(params.slug, [
    'title',
    'date',
    'slug',
    'content',
    'tag',
    'ogImage',
    'coverImage'
  ])
  const content = await markdownToHtml(post.content || '')

  return {
    props: {
      post: {...post, content,}, },
  }
}

export async function getStaticPaths() {
  const posts = getAllPosts(['slug'])

  return {
    paths: posts.map((post) => {
      return {
        params: {
          slug: post.slug
        },
      };
    }),
    fallback: false,
  }
}
