function BlogList({ content }) {
  if (!content) return null
  const { title, posts = [] } = content

  return (
    <section className="section" id="blog">
      <div className="section-head">
        <p className="pill subtle">بلاگ</p>
        <h2>{title}</h2>
        <p className="muted">به‌روزترین راهنماها برای خرید هوشمندانه‌تر.</p>
      </div>
      <div className="grid three">
        {posts.map((post) => (
          <article key={post.title} className="card blog-card">
            <div className="blog-meta">
              <span className="tag">{post.date}</span>
            </div>
            <h3>{post.title}</h3>
            <p>{post.excerpt}</p>
            <a className="ghost-link" href="#blog">
              ادامه مطلب
            </a>
          </article>
        ))}
      </div>
    </section>
  )
}

export default BlogList
