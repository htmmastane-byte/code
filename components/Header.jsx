import { useEffect, useState } from 'react'
import Button from './Button.jsx'

function Header({ brand, navLinks = [], slides = [], cartCount = 0 }) {
  const [active, setActive] = useState(0)
  const total = slides.length

  useEffect(() => {
    if (!total) return undefined
    const id = setInterval(() => setActive((i) => (i + 1) % total), 4500)
    return () => clearInterval(id)
  }, [total])

  if (!total) return null

  const slide = slides[active] || {}
  const palette = slide.palette || ['#f8fafc', '#e2e8f0']
  const goTo = (next) => total && setActive(((next % total) + total) % total)

  return (
    <header className="site-header">
      <div className="nav-row">
        <div className="brand">
          <span className="brand-mark">ک</span>
          <span>{brand}</span>
        </div>
        <nav className="nav-links">
          {navLinks.map((link) => (
            <a key={link.href} href={link.href} className={link.href === '#cart' ? 'cart-link' : undefined}>
              {link.label}
              {link.href === '#cart' && cartCount > 0 && <span className="nav-badge">{cartCount}</span>}
            </a>
          ))}
        </nav>
      </div>

      <div className="hero-shell" id="store">
        <div className="hero-copy">
          {slide.tag && <span className="pill">{slide.tag}</span>}
          {slide.title && <h1>{slide.title}</h1>}
          {slide.subtitle && <p className="lead">{slide.subtitle}</p>}
          <div className="actions">
            {slide.ctaPrimary && (
              <Button label={slide.ctaPrimary.label} href={slide.ctaPrimary.href} variant="primary" />
            )}
            {slide.ctaSecondary && (
              <Button label={slide.ctaSecondary.label} href={slide.ctaSecondary.href} variant="ghost" />
            )}
          </div>
          <div className="hero-meta">
            <span className="dot" />
            <span>{slide.accent || 'منتخب هفته'}</span>
          </div>
        </div>

        <div
          className="hero-visual"
          style={{
            background: `linear-gradient(135deg, ${palette[0]}, ${palette[1]})`,
          }}
        >
          <div className="photo-stack">
            <div className="photo main-photo">
              <div className="photo-label">لباس کودک</div>
              <div className="photo-mock color-1" />
            </div>
            <div className="photo side-photo">
              <div className="photo-label">ست زمستان</div>
              <div className="photo-mock color-2" />
            </div>
            <div className="photo side-photo">
              <div className="photo-label">کالسکه سبک</div>
              <div className="photo-mock color-3" />
            </div>
          </div>
        </div>
      </div>

      <div className="slider-controls">
        <button type="button" onClick={() => goTo(active - 1)}>
          {'<'}
        </button>
        <div className="dots">
          {slides.map((_, idx) => (
            <span key={idx} className={idx === active ? 'dot active' : 'dot'} onClick={() => goTo(idx)} />
          ))}
        </div>
        <button type="button" onClick={() => goTo(active + 1)}>
          {'>'}
        </button>
      </div>
    </header>
  )
}

export default Header
