import fs from 'fs'
import { join } from 'path'
import matter from 'gray-matter'

const postsDirectory = join(process.cwd(), '_posts')

export function getPostSlugs() {
  return fs.readdirSync(postsDirectory)
}

export function getPostBySlug(slug, fields = []) {
  const realSlug = slug.replace(/\.md$/, '')
  const fullPath = join(postsDirectory, `${realSlug}.md`)
  const fileContents = fs.readFileSync(fullPath, 'utf8')
  const { data, content } = matter(fileContents)

  const items = {}

  // Ensure only the minimal needed data is exposed
  fields.forEach((field) => {
    if (field === 'slug') {items[field] = realSlug}
    if (field === 'content') {items[field] = content}
    if (data[field]) {items[field] = data[field]}
  })

  return items
}

export function getAllPosts(fields = []) {
  const slugs = getPostSlugs()
  const posts = slugs
    .map((slug) => getPostBySlug(slug, fields))
    // sort posts by title in descending order
    .sort((post1, post2) => (post1.slug > post2.slug ? 1 : -1))
    // title order not being case sensitive but no slug
    // .sort((post1, post2) => (post1.title.toLowerCase() > post2.title.toLowerCase() ? 1 : -1))
  return posts
}
