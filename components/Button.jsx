function Button({ label, href = '#', variant = 'primary', as = 'a' }) {
  const className = `btn ${variant}`

  if (as === 'button') {
    return <button className={className}>{label}</button>
  }

  return (
    <a className={className} href={href}>
      {label}
    </a>
  )
}

export default Button
