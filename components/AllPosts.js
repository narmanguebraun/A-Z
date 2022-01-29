import Post from './Post'

export default function AllPosts({ posts }) {
  return (
    <section>
      <div>
        {posts.map((post) => (
          <Post
            key={post.slug}
            title={post.title}
            tag={post.tag}
            coverImage={post.coverImage}
            date={post.date}
            slug={post.slug}
            excerpt={post.excerpt}
          />
        ))}
      </div>
    </section>
  )
}
