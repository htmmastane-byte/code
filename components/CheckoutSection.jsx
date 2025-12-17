function CheckoutSection({ total = 0, checkoutHref = '/checkout' }) {
  const totalFormatted = total ? `${total.toLocaleString('fa-IR')} تومان` : '۰'

  return (
    <section className="section" id="checkout">
      <div className="section-head">
        <p className="pill subtle">پرداخت</p>
        <h2>تسویه نهایی</h2>
        <p className="muted">پس از کلیک روی پرداخت، به صفحه درگاه بانکی هدایت خواهید شد.</p>
      </div>
      <div className="checkout-box">
        <div className="checkout-row">
          <span>جمع قابل پرداخت</span>
          <strong>{totalFormatted}</strong>
        </div>
        <a className="btn primary" href={checkoutHref}>
          رفتن به صفحه پرداخت
        </a>
        <p className="checkout-note">
          * در پروژه واقعی، این لینک به مسیر پرداخت (مثلا `/checkout` یا درگاه بانکی) متصل می‌شود.
        </p>
      </div>
    </section>
  )
}

export default CheckoutSection
