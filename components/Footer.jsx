function Footer({ content }) {
  if (!content) return null
  const { contact = {}, trust = {} } = content

  return (
    <footer className="footer" id="contact">
      <div className="footer-column">
        <h3>تماس با ما</h3>
        <p>تلفن: {contact.phone}</p>
        <p>ایمیل: {contact.email}</p>
        <p>آدرس: {contact.address}</p>
      </div>
      <div className="footer-column">
        <h3>اعتماد و پشتیبانی</h3>
        <p>{trust.enamad}</p>
        <p>{trust.supportHours}</p>
        <div className="badge-placeholder">ای‌نماد</div>
      </div>
      <div className="footer-column">
        <h3>دسترسی سریع</h3>
        <a href="#store">فروشگاه</a>
        <a href="#categories">دسته‌بندی‌ها</a>
        <a href="#blog">بلاگ</a>
      </div>
    </footer>
  )
}

export default Footer
