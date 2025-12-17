function CategoryGrid({ items = [] }) {
  return (
    <section className="section" id="categories">
      <div className="section-head">
        <p className="pill subtle">دسته‌بندی کالا</p>
        <h2>هر چه برای کوچولوها لازم دارید</h2>
        <p className="muted">از لوازم مدرسه تا لباس و حمل‌ونقل؛ به سرعت به بخش مورد نظرتان برسید.</p>
      </div>
      <div className="grid four">
        {items.map((item) => (
          <div key={item.id} className="card category-card">
            <div className="card-top">
              <span className="tag">{item.badge}</span>
              <h3>{item.title}</h3>
            </div>
            <p>{item.body}</p>
            <a className="ghost-link" href={`#${item.id}`}>
              مشاهده محصولات
            </a>
          </div>
        ))}
      </div>
    </section>
  )
}

export default CategoryGrid
