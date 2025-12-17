function CartPanel({ items = [], onClear, checkoutHref = '#checkout' }) {
  const parsePrice = (priceStr) => {
    const digits = (priceStr || '').replace(/[^0-9]/g, '')
    return Number(digits || 0)
  }

  const total = items.reduce((sum, item) => sum + parsePrice(item.price), 0)
  const totalFormatted = total ? `${total.toLocaleString('fa-IR')} تومان` : '۰'

  return (
    <section className="section" id="cart">
      <div className="section-head">
        <p className="pill subtle">سبد خرید</p>
        <h2>خلاصه سفارش</h2>
        <p className="muted">محصولات افزوده شده را اینجا ببینید.</p>
      </div>

      {items.length === 0 ? (
        <div className="empty-cart">هنوز محصولی اضافه نکرده‌اید.</div>
      ) : (
        <div className="cart-list">
          {items.map((item, idx) => (
            <div key={`${item.title}-${idx}`} className="cart-row">
              <div className="cart-info">
                <p className="cart-title">{item.title}</p>
                <p className="cart-meta">
                  {item.category} • {item.tag}
                </p>
              </div>
              <div className="cart-price">{item.price}</div>
            </div>
          ))}
          <div className="cart-total">
            <span>جمع کل</span>
            <strong>{totalFormatted}</strong>
          </div>
          <a className="btn primary" href={checkoutHref}>
            ادامه برای پرداخت
          </a>
          {typeof onClear === 'function' && (
            <button className="btn ghost-border" onClick={onClear}>
              خالی کردن سبد
            </button>
          )}
        </div>
      )}
    </section>
  )
}

export default CartPanel
