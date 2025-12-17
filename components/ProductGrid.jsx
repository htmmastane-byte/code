function ProductGrid({ items = [], categories = [], onAdd }) {
  const grouped = categories
    .map((cat) => ({
      ...cat,
      products: items.filter((p) => p.categoryId === cat.id),
    }))
    .filter((group) => group.products.length > 0)

  return (
    <section className="section" id="store">
      <div className="section-head">
        <p className="pill subtle">فروشگاه</p>
        <h2>پیشنهادهای منتخب امروز</h2>
        <p className="muted">محبوب‌ترین کالاها از هر دسته، با امکان ارسال سریع.</p>
      </div>
      {grouped.map((group) => (
        <div key={group.id} className="category-block" id={group.id}>
          <div className="category-block-head">
            <div>
              <p className="pill subtle">{group.badge}</p>
              <h3>{group.title}</h3>
              <p className="muted">{group.body}</p>
            </div>
            <a className="ghost-link" href="#cart">
              مشاهده سبد خرید
            </a>
          </div>
          <div className="grid three">
            {group.products.map((item) => (
              <div key={item.title} className="card product-card">
                <div className="product-image">
                  <img src={item.image} alt={item.title} />
                  <span className="product-label">{item.category}</span>
                </div>
                <div className="product-meta">
                  <span className="tag">{item.tag}</span>
                  <span className="chip">{item.category}</span>
                </div>
                <h3>{item.title}</h3>
                <p className="price">{item.price}</p>
                <button
                  className="btn primary ghost-border"
                  onClick={() => {
                    if (typeof onAdd === 'function') onAdd(item)
                  }}
                >
                  افزودن به سبد
                </button>
              </div>
            ))}
          </div>
        </div>
      ))}
    </section>
  )
}

export default ProductGrid
