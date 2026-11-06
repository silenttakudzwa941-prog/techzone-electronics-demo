
"use client";

import { useMemo, useState } from "react";
import {
  FaWhatsapp,
  FaWeixin,
  FaEnvelope,
  FaGlobe,
  FaMapMarkerAlt,
} from "react-icons/fa";
const products = [
  {
    id: 1,
    name: "Samsung Galaxy S25 Ultra",
    category: "Smartphones",
    price: 1099,
    oldPrice: 1199,
    badge: "BEST SELLER",
    image: "https://images.unsplash.com/photo-1610945265064-0e34e5519bbf?w=800",
    specs: ["256GB Storage", "12GB RAM", "200MP Camera"],
  },
  {
    id: 2,
    name: "Apple iPad Pro 11",
    category: "Tablets",
    price: 899,
    oldPrice: null,
    badge: "NEW",
    image: "https://images.unsplash.com/photo-1544244015-0df4b3ffc6b0?w=800",
    specs: ["256GB Storage", "M4 Chip", "11-inch Display"],
  },
  {
    id: 3,
    name: "Apple iPhone 16 Pro",
    category: "Smartphones",
    price: 999,
    oldPrice: null,
    badge: "POPULAR",
    image: "https://images.unsplash.com/photo-1592750475338-74b7b21085ab?w=800",
    specs: ["256GB Storage", "8GB RAM", "48MP Camera"],
  },
  {
    id: 4,
    name: "Premium Wireless Headphones",
    category: "Accessories",
    price: 149,
    oldPrice: 179,
    badge: "SALE",
    image: "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=800",
    specs: ["Wireless Bluetooth", "Noise Cancelling", "30H Battery"],
  },
  {
    id: 5,
    name: "Samsung Galaxy Tab S10",
    category: "Tablets",
    price: 649,
    oldPrice: null,
    badge: "NEW",
    image: "https://images.unsplash.com/photo-1561154464-82e9adf32764?w=800",
    specs: ["256GB Storage", "12GB RAM", "AMOLED Display"],
  },
  {
    id: 6,
    name: "Premium Smart Watch",
    category: "Smart Gadgets",
    price: 199,
    oldPrice: null,
    badge: "POPULAR",
    image: "https://images.unsplash.com/photo-1523275335684-37898b6baf30?w=800",
    specs: ["Health Tracking", "Water Resistant", "Bluetooth"],
  },
  {
    id: 7,
    name: "Portable Bluetooth Speaker",
    category: "Accessories",
    price: 89,
    oldPrice: 109,
    badge: "SALE",
    image: "https://images.unsplash.com/photo-1608043152269-423dbba4e7e1?w=800",
    specs: ["Bluetooth 5.3", "Deep Bass", "12H Battery"],
  },
  {
    id: 8,
    name: "Apple MacBook Laptop",
    category: "Computers",
    price: 1299,
    oldPrice: null,
    badge: "FEATURED",
    image: "https://images.unsplash.com/photo-1517336714731-489689fd1ca8?w=800",
    specs: ["512GB SSD", "16GB RAM", "Retina Display"],
  },
  {
  id: 9,
  name: "Automotive Diagnostic Scanner",
  category: "Automotive",
  price: 189,
  oldPrice: null,
  badge: "FEATURED",
  image: "https://images.unsplash.com/photo-1486262715619-67b85e0b08d3?w=800",
  specs: ["Vehicle Diagnostics", "Engine Fault Reading", "Multi-Brand Support"],
},
];

const categories = [
  { name: "All Products", icon: "✦" },
  { name: "Smartphones", icon: "▣" },
  { name: "Tablets", icon: "▤" },
  { name: "Computers", icon: "▱" },
  { name: "Accessories", icon: "⌁" },
  { name: "Smart Gadgets", icon: "◉" },
  { name: "Automotive", icon: "🚗" },
];

export default function Home() {
  const [activeCategory, setActiveCategory] = useState("All Products");
  const [search, setSearch] = useState("");

  const filteredProducts = useMemo(() => {
    return products.filter((product) => {
      const matchesCategory =
        activeCategory === "All Products" ||
        product.category === activeCategory;

      const matchesSearch =
        product.name.toLowerCase().includes(search.toLowerCase()) ||
        product.category.toLowerCase().includes(search.toLowerCase());

      return matchesCategory && matchesSearch;
    });
  }, [activeCategory, search]);

  const enquire = (productName: string) => {
    const message = encodeURIComponent(
      `Good day! I am interested in the ${productName}. Please share more information about availability and pricing.`
    );

    window.open(`https://wa.me/263779810000?text=${message}`, "_blank");
  };

  return (
    <main>
   
<div className="announcement">
  <span>🌍 XEERUNG INTERNATIONAL</span>
  <span>Manufacturing. Import. Export. Global Connections.</span>
  <span>Let's do business →</span>
</div>

<header className="navbar">
  <a href="#" className="brand">
    <span className="brand-icon">X</span>
    <span>
      XEE<span>RUNG</span>
      <small>INTERNATIONAL TRADING</small>
    </span>
  </a>

  <nav className="nav-links">
    <a href="#home">Home</a>
    <a href="#products">Products</a>
    <a href="#categories">Categories</a>
    <a href="#about">About us</a>
  </nav>

  <a
    className="nav-contact"
    href="https://wa.me/8613916321135"
    target="_blank"
    rel="noopener noreferrer"
  >
    Contact us <span>↗</span>
  </a>
</header>

<section className="hero" id="home">
  <div className="hero-content">
    <div className="eyebrow">
      <span className="eyebrow-dot" />
      YOUR INTERNATIONAL TRADING PARTNER
    </div>

    <h1>
      Connecting global
      <br />
      markets. <span>Delivering quality.</span>
    </h1>

    <p>
      XeeRung (China) International Manufacturing & Trading Co., Ltd
      specializes in import and export, connecting businesses with
      quality products and dependable international trade services.
    </p>

    <div className="hero-actions">
      <a href="#products" className="primary-btn">
        Explore products <span>→</span>
      </a>

      <a
        href="https://wa.me/8613916321135"
        className="secondary-btn"
        target="_blank"
        rel="noopener noreferrer"
      >
        Contact our team
      </a>
    </div>

    <div className="hero-trust">
      <div><strong>01.</strong> Quality commitment</div>
      <div><strong>02.</strong> Professional team</div>
      <div><strong>03.</strong> Reliable service</div>
    </div>
  </div>

  <div className="hero-visual">
    <div className="hero-image" />

    <div className="floating-card">
      <span>✦</span>
      <div>
        <strong>Global trade solutions</strong>
        <small>At your service all time!</small>
      </div>
    </div>

    <div className="hero-index">01 / XEERUNG INTERNATIONAL</div>
  </div>
</section>

      <section className="benefits">
        <div><span>◈</span><div><strong>Quality selection</strong><small>Carefully selected gadgets</small></div></div>
        <div><span>◎</span><div><strong>Easy enquiries</strong><small>Connect directly with us</small></div></div>
        <div><span>⌖</span><div><strong>Customer support</strong><small>We're here to assist</small></div></div>
        <div><span>↗</span><div><strong>Modern technology</strong><small>Explore the latest devices</small></div></div>
      </section>

      <section className="categories-section" id="categories">
        <div className="section-heading">
          <div>
            <span className="section-kicker">EXPLORE OUR COLLECTION</span>
            <h2>Shop by category</h2>
          </div>
          <p>Find the right technology for your lifestyle.</p>
        </div>

        <div className="category-list">
          {categories.slice(1).map((category) => (
            <button
              key={category.name}
              className="category-card"
              onClick={() => {
                setActiveCategory(category.name);
                document.getElementById("products")?.scrollIntoView({ behavior: "smooth" });
              }}
            >
              <span>{category.icon}</span>
              <strong>{category.name}</strong>
              <small>Explore collection ↗</small>
            </button>
          ))}
        </div>
      </section>

      <section className="products-section" id="products">
        <div className="section-heading">
          <div>
            <span className="section-kicker">THE TECHZONE COLLECTION</span>
            <h2>Explore our products</h2>
          </div>
          <p>Explore our featured electronics and gadgets.</p>
        </div>

        <div className="product-toolbar">
          <div className="filters">
            {categories.map((category) => (
              <button
                key={category.name}
                className={activeCategory === category.name ? "filter active" : "filter"}
                onClick={() => setActiveCategory(category.name)}
              >
                {category.name}
              </button>
            ))}
          </div>

          <input
            type="search"
            placeholder="Search products..."
            value={search}
            onChange={(event) => setSearch(event.target.value)}
            aria-label="Search products"
          />
        </div>

        <div className="product-grid">
          {filteredProducts.map((product) => (
            <article className="product-card" key={product.id}>
              <div className="product-image-wrap">
                <img src={product.image} alt={product.name} />
                <span className="product-badge">{product.badge}</span>
                <button
                  className="quick-enquire"
                  onClick={() => enquire(product.name)}
                >
                  Enquire ↗
                </button>
              </div>

              <div className="product-info">
                <span className="product-category">{product.category}</span>
                <h3>{product.name}</h3>
                <div className="spec-list">
                  {product.specs.map((spec) => (
                    <span key={spec}>{spec}</span>
                  ))}
                </div>
                <div className="product-bottom">
                  <div className="price">
                    <strong>${product.price.toLocaleString("en-US")}</strong>
                    {product.oldPrice && (
                      <del>${product.oldPrice.toLocaleString("en-US")}</del>
                    )}
                  </div>
                  <button
                    className="add-btn"
                    onClick={() => enquire(product.name)}
                    aria-label={`Enquire about ${product.name}`}
                  >
                    ↗
                  </button>
                </div>
              </div>
            </article>
          ))}
        </div>

        {filteredProducts.length === 0 && (
          <div className="empty-state">
            <h3>No products found</h3>
            <p>Try another search or category.</p>
            <button onClick={() => { setSearch(""); setActiveCategory("All Products"); }}>
              Clear filters
            </button>
          </div>
        )}
      </section>

      <section className="promo" id="about">
        <div>
          <span className="section-kicker">THE TECHZONE EXPERIENCE</span>
          <h2>Find your next favourite device.</h2>
          <p>
            From everyday essentials to powerful technology, discover
            products that keep you connected, productive and entertained.
          </p>
          <a href="#products" className="primary-btn">
            Browse the collection →
          </a>
        </div>
        <div className="promo-decoration">T.</div>
      </section>

  

<footer className="footer">
  <div className="footer-main">
    <div className="footer-company">
      <a href="#" className="brand footer-brand">
        <span className="brand-icon">X</span>
        <span>
          XEE<span>RUNG</span>
          <small>INTERNATIONAL TRADING</small>
        </span>
      </a>

      <p>
        Your trusted international manufacturing and trading
        partner. We specialize in import and export, delivering
        quality products and dependable service.
      </p>

      <p className="footer-tagline">
        We are at your service all time!
      </p>
    </div>

    <div className="footer-contact">
      <h3>Contact Information</h3>

      <p><strong>Contact:</strong> Tony Gong</p>

      <p>
        <FaWhatsapp className="footer-icon whatsapp-icon" />
        <strong> WhatsApp / Mobile:</strong>{" "}
        <a href="https://wa.me/8613916321135" target="_blank" rel="noopener noreferrer">
          +86 139 1632 1135
        </a>
      </p>

      <p>
        <FaWeixin className="footer-icon wechat-icon" />
        <strong> WeChat:</strong> tonykung6
      </p>

      <p>
        <FaEnvelope className="footer-icon" />
        <strong> Email:</strong>{" "}
        <a href="mailto:tonygong86@163.com">
          tonygong86@163.com
        </a>
      </p>

      <p>
        <FaGlobe className="footer-icon" />
        <strong> Website:</strong>{" "}
        <a href="https://www.xeerung.com" target="_blank" rel="noopener noreferrer">
          www.xeerung.com
        </a>
      </p>
    </div>

    <div className="footer-address">
      <h3>Our Location</h3>
      <p>
        <FaMapMarkerAlt className="footer-icon location-icon" />
        No.1, Lanne18, Huaxiu Rd,
        Shanghai City, China
      </p>
      <p>International Manufacturing & Trading</p>
    </div>
  </div>

  <div className="footer-socials">
    <a href="https://wa.me/8613916321135" target="_blank" rel="noopener noreferrer">
      <FaWhatsapp /> WhatsApp
    </a>

    <a href="https://www.xeerung.com" target="_blank" rel="noopener noreferrer">
      <FaGlobe /> Official Website
    </a>

    <a href="mailto:tonygong86@163.com">
      <FaEnvelope /> Email Us
    </a>
  </div>

  <div className="footer-bottom">
    <span>
      © 2026 XeeRung International Manufacturing & Trading Co., Ltd.
    </span>
    <span>
      Designed & developed by <strong>Silent Programs</strong>
    </span>
  </div>
</footer>


      <a
        className="whatsapp-float"
        href="https://wa.me/263779810000"
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Contact us on WhatsApp"
      >
        ☎
      </a>
    </main>
  );
}
