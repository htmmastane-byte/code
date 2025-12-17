'use client'

import { useState, useMemo } from 'react'
import Header from '../components/Header.jsx'
import CategoryGrid from '../components/CategoryGrid.jsx'
import ProductGrid from '../components/ProductGrid.jsx'
import AboutSection from '../components/AboutSection.jsx'
import BlogList from '../components/BlogList.jsx'
import CartPanel from '../components/CartPanel.jsx'
import CheckoutSection from '../components/CheckoutSection.jsx'
import Footer from '../components/Footer.jsx'
import pageContent from '../data/pageContent.js'

export default function Home() {
  const { brand, navLinks, hero, categories, products, about, blog, footer } = pageContent
  const [cartItems, setCartItems] = useState([])

  const handleAddToCart = (product) => setCartItems((prev) => [...prev, product])
  const parsePrice = (priceStr) => Number((priceStr || '').replace(/[^0-9]/g, '')) || 0
  const totalAmount = useMemo(() => cartItems.reduce((sum, item) => sum + parsePrice(item.price), 0), [cartItems])

  return (
    <main className="page">
      <Header brand={brand} navLinks={navLinks} slides={hero.slides} cartCount={cartItems.length} />
      <CategoryGrid items={categories} />
      <ProductGrid items={products} categories={categories} onAdd={handleAddToCart} />
      <CartPanel items={cartItems} onClear={() => setCartItems([])} checkoutHref="#checkout" />
      <CheckoutSection total={totalAmount} checkoutHref="/checkout" />
      <AboutSection content={about} />
      <BlogList content={blog} />
      <Footer content={footer} />
    </main>
  )
}
