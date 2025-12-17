function AboutSection({ content }) {
  if (!content) return null
  const { title, body, bullets = [] } = content

  return (
    <section className="section" id="about">
      <div className="section-head">
        <p className="pill subtle">درباره ما</p>
        <h2>{title}</h2>
        <p className="muted">{body}</p>
      </div>
      <div className="bullet-list">
        {bullets.map((item) => (
          <div key={item} className="bullet">
            <span className="dot" />
            <span>{item}</span>
          </div>
        ))}
      </div>
    </section>
  )
}

export default AboutSection
