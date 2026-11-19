import React, { useEffect, useState } from 'react';
import {
  ArrowRight,
  Check,
  ChevronDown,
  ChevronRight,
  ShoppingBag,
  Menu,
  X,
  Plus,
  Minus,
  Trash2,
  ShieldCheck,
  Leaf,
  Droplets,
  Mail,
  Phone,
  MapPin,
  Settings2,
  Send,
  Globe2,
  Info,
  Search,
  User,
  Clock,
  Users,
  Calendar,
  Building2,
  Home as HomeIcon,
  Factory,
  Hotel,
  Zap,
  TrendingUp,
  Linkedin,
  Instagram,
  Youtube,
  Lock,
  Wrench,
  Package,
  Headphones,
  Award,
  Layers,
  BarChart3,
  Play,
  FileText,
  UploadCloud,
  MessageSquare,
  Sparkles,
} from 'lucide-react';

export interface Product {
  id: string;
  name: string;
  subtitle: string;
  image: string;
  category: string;
  mode: 'cart' | 'quote';
  price: number | null;
  priceFormatted: string;
  isBestSeller?: boolean;
  details: string[];
}

export const products: Product[] = [
  {
    id: 'pearl',
    name: 'HydroFLOW® Pearl',
    subtitle: 'Ideal for residential and light commercial applications.',
    image: '/assets/images/product_pearl_1794200917031.jpg',
    category: 'Residential',
    mode: 'cart',
    price: 98500,
    priceFormatted: 'JMD $98,500',
    details: [
      'Reduces scale build-up',
      'Improves water flow',
      'Extends equipment life',
      'Fits standard domestic pipes without cutting',
    ],
  },
  {
    id: 'pearl-plus',
    name: 'HydroFLOW® Pearl Plus',
    subtitle: 'Our most popular solution for commercial and industrial systems.',
    image: '/assets/images/product_pearl_plus_1794200915507.jpg',
    category: 'Commercial / Residential',
    mode: 'cart',
    price: 165000,
    priceFormatted: 'JMD $165,000',
    isBestSeller: true,
    details: [
      'Higher performance for larger systems',
      'Improves overall system efficiency',
      'Helps reduce maintenance and downtime',
      'Chemical-free electronic wave conditioning',
    ],
  },
  {
    id: 'hs40',
    name: 'HydroFLOW® HS40',
    subtitle: 'High-performance solution for demanding industrial facilities and large-scale applications.',
    image: '/assets/images/product_hs40_1794200916171.jpg',
    category: 'Industrial / Commercial',
    mode: 'cart',
    price: 295000,
    priceFormatted: 'JMD $295,000',
    details: [
      'Designed for high-flow, large systems',
      'Supports heavy-duty operations',
      'Reliable and long-lasting',
      'Non-invasive clamping on copper, steel, or PVC',
    ],
  },
  {
    id: 'installation-kit',
    name: 'Installation Kit',
    subtitle: 'Fittings, connectors and accessories for a complete setup.',
    image: '/assets/images/installation_kit_parts_1794201856936.jpg',
    category: 'Accessories',
    mode: 'cart',
    price: 18500,
    priceFormatted: 'JMD $18,500',
    details: [
      'Polished brass valves and connectors',
      'Flexible stainless steel braided hoses',
      'Mounting clamps and electrical insulation kit',
      'Compatible with all HydroFLOW residential units',
    ],
  },
  {
    id: 'commercial',
    name: 'Custom Industrial Systems',
    subtitle: 'Engineered solutions for complex multi-megawatt facilities.',
    image: '/assets/commercial.svg',
    category: 'Custom Industrial',
    mode: 'quote',
    price: null,
    priceFormatted: 'Pricing on request',
    details: [
      'Assessment-led sizing and engineering design',
      'For cooling towers, chillers, and steam boilers',
      'Turnkey local installation with verified ROI telemetry',
    ],
  },
];

const navMenuLinks = [
  { label: 'Home', url: '/' },
  { label: 'How It Works', url: '/how-it-works' },
  {
    label: 'Applications',
    url: '/applications',
    hasDropdown: true,
    sublinks: [
      { label: 'All Applications', url: '/applications' },
      { label: 'Hotels & Resorts', url: '/applications#hotels' },
      { label: 'Homes & Residential', url: '/applications#homes' },
      { label: 'Industrial Facilities', url: '/applications#industrial' },
      { label: 'Commercial Buildings', url: '/applications#commercial' },
      { label: 'Pools & Aquatics', url: '/applications#pools' },
      { label: 'Healthcare Facilities', url: '/applications#healthcare' },
    ],
  },
  {
    label: 'Products',
    url: '/products',
    hasDropdown: true,
    sublinks: [
      { label: 'Our Product Range', url: '/products' },
      { label: 'HydroFLOW Pearl', url: '/products/pearl' },
      { label: 'HydroFLOW Pearl Plus', url: '/products/pearl-plus' },
      { label: 'HydroFLOW HS40', url: '/products/hs40' },
      { label: 'Installation Kit', url: '/products/installation-kit' },
    ],
  },
  { label: 'Case Studies', url: '/case-studies' },
  { label: 'About', url: '/about' },
  { label: 'Insights', url: '/insights' },
  { label: 'Contact', url: '/contact' },
];

function path() {
  return window.location.pathname || '/';
}

function navigate(to: string) {
  window.history.pushState({}, '', to);
  window.dispatchEvent(new Event('popstate'));
  window.scrollTo({ top: 0, behavior: 'instant' } as ScrollToOptions);
}

export function A({
  to,
  children,
  className = '',
  onClick,
  style,
}: {
  to: string;
  children: React.ReactNode;
  className?: string;
  onClick?: () => void;
  key?: React.Key;
  style?: React.CSSProperties;
}) {
  return (
    <a
      href={to}
      className={className}
      style={style}
      onClick={(e) => {
        if (to.startsWith('/')) {
          e.preventDefault();
          navigate(to);
        }
        onClick?.();
      }}
    >
      {children}
    </a>
  );
}

/* Authentic vector HydroFLOW Jamaica logo matching mockup */
export function HydroflowLogo({ light = false }: { light?: boolean }) {
  return (
    <div style={{ display: 'inline-flex', alignItems: 'center', gap: '10px', userSelect: 'none' }}>
      <svg width="42" height="34" viewBox="0 0 44 34" fill="none" xmlns="http://www.w3.org/2000/svg" style={{ flexShrink: 0 }}>
        <path d="M2 8C9 2 16 14 24 8C32 2 38 11 42 6" stroke="#00c4d8" strokeWidth="4" strokeLinecap="round" />
        <path d="M2 16C10 10 17 22 25 16C33 10 39 19 42 15" stroke="#0077c8" strokeWidth="4" strokeLinecap="round" />
        <path d="M2 24C10 18 18 30 26 24C34 18 39 26 42 23" stroke="#003e7e" strokeWidth="4" strokeLinecap="round" />
      </svg>
      <div style={{ display: 'flex', flexDirection: 'column', lineHeight: 1 }}>
        <div style={{ display: 'flex', alignItems: 'baseline', gap: '1px' }}>
          <span style={{ fontSize: '19px', fontWeight: 800, color: light ? '#ffffff' : '#004b87', letterSpacing: '-0.5px' }}>
            Hydro
          </span>
          <span style={{ fontSize: '19px', fontWeight: 900, color: '#00a8be', letterSpacing: '-0.5px' }}>
            FLOW
          </span>
          <span style={{ fontSize: '10px', fontWeight: 800, color: light ? 'rgba(255,255,255,0.8)' : '#004b87', marginLeft: '1px' }}>
            ®
          </span>
        </div>
        <div style={{ fontSize: '10px', fontWeight: 900, letterSpacing: '2.5px', color: light ? '#79cde6' : '#006699', marginTop: '1px' }}>
          JAMAICA
        </div>
        <div style={{ fontSize: '6px', fontWeight: 700, letterSpacing: '0.6px', color: light ? '#9fc5d9' : '#57798c', marginTop: '2px' }}>
          BY IEAC
        </div>
      </div>
    </div>
  );
}

export function App() {
  const [route, setRoute] = useState(path());
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [cartOpen, setCartOpen] = useState(false);
  const [loginModalOpen, setLoginModalOpen] = useState(false);
  const [videoModalOpen, setVideoModalOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);

  // Cart starts with items matching the mockup
  const [cart, setCart] = useState<Record<string, number>>({
    hs40: 1,
    'pearl-plus': 1,
    pearl: 1,
  });

  const [searchQuery, setSearchQuery] = useState('');
  const [searchFocused, setSearchFocused] = useState(false);
  const [notice, setNotice] = useState('');

  useEffect(() => {
    const handlePopstate = () => {
      setRoute(path());
      setMobileMenuOpen(false);
      setActiveDropdown(null);
    };
    window.addEventListener('popstate', handlePopstate);
    return () => window.removeEventListener('popstate', handlePopstate);
  }, []);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        setCartOpen(false);
        setLoginModalOpen(false);
        setVideoModalOpen(false);
        setMobileMenuOpen(false);
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, []);

  useEffect(() => {
    if (cartOpen || loginModalOpen || videoModalOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
  }, [cartOpen, loginModalOpen, videoModalOpen]);

  const totalCartCount = (Object.values(cart) as number[]).reduce((a: number, b: number) => a + b, 0);

  const cartTotalAmount = Object.entries(cart).reduce((sum: number, [prodId, qty]) => {
    const product = products.find((p) => p.id === prodId);
    const priceNum = typeof product?.price === 'number' ? product.price : 0;
    const qtyNum = typeof qty === 'number' ? qty : 0;
    return sum + priceNum * qtyNum;
  }, 0);

  const addToCart = (productId: string) => {
    setCart((prev) => ({
      ...prev,
      [productId]: (prev[productId] || 0) + 1,
    }));
    setCartOpen(true);
  };

  const updateQuantity = (productId: string, delta: number) => {
    setCart((prev) => {
      const newQty = (prev[productId] || 0) + delta;
      if (newQty <= 0) {
        const copy = { ...prev };
        delete copy[productId];
        return copy;
      }
      return { ...prev, [productId]: newQty };
    });
  };

  const removeProduct = (productId: string) => {
    setCart((prev) => {
      const copy = { ...prev };
      delete copy[productId];
      return copy;
    });
  };

  const searchResults = searchQuery.trim()
    ? products.filter(
        (p) =>
          p.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
          p.subtitle.toLowerCase().includes(searchQuery.toLowerCase()) ||
          p.category.toLowerCase().includes(searchQuery.toLowerCase())
      )
    : [];

  const renderCurrentPage = () => {
    if (route.startsWith('/products/')) {
      const slug = route.split('/')[2];
      const prod = products.find((p) => p.id === slug) || products[0];
      return <ProductDetailPage product={prod} addToCart={addToCart} />;
    }
    switch (route) {
      case '/how-it-works':
        return <HowItWorksPage />;
      case '/applications':
        return <ApplicationsPage />;
      case '/products':
        return <ProductRangePage addToCart={addToCart} />;
      case '/case-studies':
        return <CaseStudiesPage />;
      case '/about':
        return <AboutPage />;
      case '/insights':
        return <InsightsPage />;
      case '/contact':
        return <ContactPage />;
      case '/assessment':
        return <AssessmentPage />;
      case '/cart':
        return <CartPage cart={cart} updateQuantity={updateQuantity} removeProduct={removeProduct} />;
      case '/checkout':
        return <CheckoutPage cart={cart} />;
      default:
        return <HomePage addToCart={addToCart} openVideoModal={() => setVideoModalOpen(true)} />;
    }
  };

  return (
    <>
      {/* 1. TOP UTILITY BAR (Logo, Search, Login, Cart Badge, Request Assessment) */}
      <header className="site-header">
        <div className="top-utility-bar">
          <div className="container-xl utility-grid">
            <A to="/" className="brand-link">
              <HydroflowLogo />
            </A>

            {/* Interactive Search Bar */}
            <div className="search-container">
              <div className="search-input-wrap">
                <Search size={16} color="#008ba3" />
                <input
                  type="text"
                  placeholder="Search products, systems, or accessories..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  onFocus={() => setSearchFocused(true)}
                  onBlur={() => setTimeout(() => setSearchFocused(false), 200)}
                  onKeyDown={(e) => {
                    if (e.key === 'Enter') {
                      if (searchResults.length > 0) {
                        navigate('/products/' + searchResults[0].id);
                      } else {
                        navigate('/products');
                      }
                      setSearchFocused(false);
                    }
                  }}
                />
                {searchQuery && (
                  <button
                    onClick={() => setSearchQuery('')}
                    style={{ background: 'none', border: 'none', color: '#8aa3b2', padding: 0 }}
                  >
                    <X size={14} />
                  </button>
                )}
              </div>

              {/* Search Dropdown Results */}
              {searchFocused && (searchQuery.trim().length > 0 || searchResults.length > 0) && (
                <div className="search-dropdown">
                  {searchResults.length > 0 ? (
                    searchResults.map((prod) => (
                      <div
                        key={prod.id}
                        className="search-item"
                        onMouseDown={() => {
                          navigate('/products/' + prod.id);
                          setSearchQuery('');
                        }}
                      >
                        <div>
                          <strong>{prod.name}</strong>
                          <div style={{ fontSize: '11px', color: '#688798' }}>{prod.category}</div>
                        </div>
                        <span style={{ fontWeight: 800, color: '#009ab0' }}>{prod.priceFormatted}</span>
                      </div>
                    ))
                  ) : (
                    <div style={{ padding: '12px 16px', fontSize: '12px', color: '#7391a1' }}>
                      No direct product match for "{searchQuery}". Press Enter to view catalog.
                    </div>
                  )}
                </div>
              )}
            </div>

            {/* Utility Actions */}
            <div className="utility-actions">
              <button
                className="login-btn"
                onClick={() => setLoginModalOpen(true)}
                aria-label="Customer portal login"
              >
                <User size={16} />
                <span>Login</span>
              </button>

              <div className="utility-divider" />

              <button
                className="cart-icon-btn"
                onClick={() => setCartOpen(true)}
                aria-label="View shopping cart"
              >
                <ShoppingBag size={21} />
                {totalCartCount > 0 && <span className="cart-badge">{totalCartCount}</span>}
              </button>

              <A to="/assessment" className="btn-teal-primary">
                <span>Book an Assessment</span>
                <ArrowRight size={15} />
              </A>

              {/* Mobile Menu Button */}
              <button
                className="menu-btn"
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                aria-label="Toggle navigation menu"
                style={{ marginLeft: '6px' }}
              >
                {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
              </button>
            </div>
          </div>
        </div>

        {/* 2. SECONDARY NAVIGATION BAR */}
        <nav className="main-nav-bar">
          <div className="container-xl">
            <ul className="main-nav-links">
              {navMenuLinks.map((item) => (
                <li
                  key={item.label}
                  className="nav-link-item"
                  onMouseEnter={() => item.hasDropdown && setActiveDropdown(item.label)}
                  onMouseLeave={() => item.hasDropdown && setActiveDropdown(null)}
                >
                  {item.hasDropdown ? (
                    <button
                      className={`nav-anchor ${route === item.url || (item.url !== '/' && route.startsWith(item.url)) ? 'active' : ''}`}
                      onClick={() => navigate(item.url)}
                    >
                      <span>{item.label}</span>
                      <ChevronDown size={13} />
                    </button>
                  ) : (
                    <A
                      to={item.url}
                      className={`nav-anchor ${route === item.url ? 'active' : ''}`}
                    >
                      {item.label}
                    </A>
                  )}

                  {/* Dropdown Menu */}
                  {item.hasDropdown && activeDropdown === item.label && (
                    <div className="nav-dropdown-menu">
                      {item.sublinks?.map((sub) => (
                        <A
                          key={sub.label}
                          to={sub.url}
                          onClick={() => setActiveDropdown(null)}
                        >
                          {sub.label}
                        </A>
                      ))}
                    </div>
                  )}
                </li>
              ))}
            </ul>
          </div>
        </nav>
      </header>

      {/* Main Page Content */}
      <main>{renderCurrentPage()}</main>

      {/* Footer */}
      <Footer />

      {/* Shopping Cart Drawer */}
      <div
        className={`drawer-overlay ${cartOpen ? 'show' : ''}`}
        onClick={() => setCartOpen(false)}
      />
      <aside className={`cart-drawer ${cartOpen ? 'show' : ''}`} aria-label="Shopping Cart Drawer">
        <div className="drawer-title">
          <h3>
            Your Cart <span>({totalCartCount})</span>
          </h3>
          <button className="icon-btn" onClick={() => setCartOpen(false)} aria-label="Close cart">
            <X size={20} />
          </button>
        </div>

        {totalCartCount === 0 ? (
          <div className="empty">
            <ShoppingBag size={48} />
            <h3>Your cart is empty</h3>
            <p>Explore our water conditioning systems.</p>
            <A
              to="/products"
              className="btn-teal-primary"
              onClick={() => setCartOpen(false)}
              style={{ margin: '16px auto 0' }}
            >
              Shop Products <ArrowRight size={15} />
            </A>
          </div>
        ) : (
          <>
            <div className="drawer-items">
              {Object.entries(cart).map(([id, qty]) => {
                const item = products.find((p) => p.id === id);
                if (!item) return null;
                return (
                  <div className="cart-line" key={id}>
                    <img src={item.image} alt={item.name} />
                    <div>
                      <b>{item.name}</b>
                      <p>{item.priceFormatted}</p>
                      <div className="qty">
                        <button
                          onClick={() => updateQuantity(id, -1)}
                          aria-label="Decrease quantity"
                        >
                          <Minus size={13} />
                        </button>
                        <span>{qty}</span>
                        <button
                          onClick={() => updateQuantity(id, 1)}
                          aria-label="Increase quantity"
                        >
                          <Plus size={13} />
                        </button>
                      </div>
                    </div>
                    <button
                      className="icon-btn"
                      onClick={() => removeProduct(id)}
                      aria-label="Remove item"
                      style={{ color: '#a0b6c2' }}
                    >
                      <Trash2 size={16} />
                    </button>
                  </div>
                );
              })}
            </div>

            <div className="drawer-bottom">
              <div
                style={{
                  display: 'flex',
                  justifyContent: 'space-between',
                  fontWeight: 800,
                  fontSize: '15px',
                  color: '#072e4d',
                  marginBottom: '14px',
                }}
              >
                <span>Estimated Total:</span>
                <span style={{ color: '#008ea3' }}>
                  JMD ${cartTotalAmount.toLocaleString()}
                </span>
              </div>
              <p className="fineprint" style={{ marginBottom: '16px' }}>
                Online ordering demonstration. Verified pricing and checkout confirmation with local Jamaica distribution.
              </p>
              <div style={{ display: 'flex', flexDirection: 'column', gap: '9px' }}>
                <A
                  to="/checkout"
                  className="btn full"
                  onClick={() => setCartOpen(false)}
                  style={{ textAlign: 'center' }}
                >
                  Proceed to Checkout <ArrowRight size={16} />
                </A>
                <A
                  to="/cart"
                  className="btn-outline full"
                  onClick={() => setCartOpen(false)}
                  style={{ textAlign: 'center' }}
                >
                  View Full Cart Page
                </A>
              </div>
            </div>
          </>
        )}
      </aside>

      {/* Customer Login Modal */}
      {loginModalOpen && (
        <div className="modal-overlay" onClick={() => setLoginModalOpen(false)}>
          <div className="modal-dialog" onClick={(e) => e.stopPropagation()}>
            <button
              className="modal-close-btn"
              onClick={() => setLoginModalOpen(false)}
              aria-label="Close login dialog"
            >
              <X size={20} />
            </button>
            <div style={{ textAlign: 'center', marginBottom: '22px' }}>
              <div
                style={{
                  width: '48px',
                  height: '48px',
                  borderRadius: '9999px',
                  background: '#e6f6f9',
                  color: '#00a2b9',
                  display: 'grid',
                  placeItems: 'center',
                  margin: '0 auto 12px',
                }}
              >
                <Lock size={22} />
              </div>
              <h3 style={{ fontSize: '20px', fontWeight: 800, color: '#042642', marginBottom: '6px' }}>
                Customer & Partner Portal
              </h3>
              <p style={{ fontSize: '13px', color: '#567586', margin: 0 }}>
                Sign in to review facility assessments, warranty registrations, and service records.
              </p>
            </div>

            <form
              onSubmit={(e) => {
                e.preventDefault();
                setNotice('Portal authentication is configured in demonstration mode.');
                setLoginModalOpen(false);
              }}
            >
              <div style={{ marginBottom: '14px' }}>
                <label style={{ display: 'block', fontSize: '12px', fontWeight: 700, color: '#163c56', marginBottom: '6px' }}>
                  Email Address
                </label>
                <input
                  type="email"
                  defaultValue="client@caribbeanresorts.jm"
                  required
                  style={{
                    width: '100%',
                    padding: '11px 13px',
                    borderRadius: '8px',
                    border: '1px solid #cce1e8',
                    outline: 'none',
                    fontSize: '13px',
                  }}
                />
              </div>
              <div style={{ marginBottom: '20px' }}>
                <label style={{ display: 'block', fontSize: '12px', fontWeight: 700, color: '#163c56', marginBottom: '6px' }}>
                  Password
                </label>
                <input
                  type="password"
                  defaultValue="••••••••••••"
                  required
                  style={{
                    width: '100%',
                    padding: '11px 13px',
                    borderRadius: '8px',
                    border: '1px solid #cce1e8',
                    outline: 'none',
                    fontSize: '13px',
                  }}
                />
              </div>
              <button type="submit" className="btn full" style={{ marginBottom: '12px' }}>
                Sign In to Portal <ArrowRight size={15} />
              </button>
            </form>
          </div>
        </div>
      )}

      {/* Video Modal Trigger */}
      {videoModalOpen && (
        <div className="modal-overlay" onClick={() => setVideoModalOpen(false)}>
          <div className="modal-dialog video-dialog" onClick={(e) => e.stopPropagation()}>
            <div style={{ padding: '20px', background: '#031d36', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
              <div style={{ color: '#fff', fontWeight: 800, fontSize: '16px' }}>
                How HydroFLOW Electronic Induction Works
              </div>
              <button
                onClick={() => setVideoModalOpen(false)}
                style={{ background: 'none', border: 'none', color: '#fff', cursor: 'pointer' }}
              >
                <X size={20} />
              </button>
            </div>
            <div style={{ padding: '40px 20px', textAlign: 'center', background: '#021323', color: '#fff' }}>
              <div style={{ width: '64px', height: '64px', borderRadius: '9999px', background: '#00a2b9', display: 'grid', placeItems: 'center', margin: '0 auto 20px' }}>
                <Play size={28} fill="#fff" />
              </div>
              <h4 style={{ fontSize: '20px', marginBottom: '8px', color: '#fff' }}>Interactive Technology Video Demonstration</h4>
              <p style={{ color: '#9ec0d1', fontSize: '14px', maxWidth: '480px', margin: '0 auto 20px' }}>
                Watch how alternating high-frequency electromagnetic fields cluster hard water minerals in suspension, preventing limescale encrustation throughout entire plumbing circuits.
              </p>
              <button className="btn" onClick={() => setVideoModalOpen(false)}>
                Close Preview
              </button>
            </div>
          </div>
        </div>
      )}

      {/* Global Toast Notice */}
      {notice && (
        <div className="toast" role="status">
          <span>{notice}</span>
          <button onClick={() => setNotice('')}>×</button>
        </div>
      )}
    </>
  );
}

/* =========================================================================
   1. HOMEPAGE COMPONENT (PIXEL-ACCURATE WITH VIDEO BANNER & 4 PRODUCTS)
   ========================================================================= */
function HomePage({
  addToCart,
  openVideoModal,
}: {
  addToCart: (id: string) => void;
  openVideoModal: () => void;
}) {
  const [activeSlide, setActiveSlide] = useState(0);

  return (
    <>
      {/* Hero Section */}
      <section className="hero-mockup-section">
        <div className="container-xl hero-two-col">
          <div>
            <span className="hero-kicker">CLEANER WATER. STRONGER SYSTEMS.</span>
            <h1 className="hero-headline">
              Advanced Water
              <br />
              Treatment for a
              <br />
              <span className="teal-text">Healthier, More</span>
              <br />
              <span className="teal-text">Efficient Caribbean</span>
            </h1>
            <p className="hero-desc">
              Innovative, chemical-free water treatment solutions for homes, businesses, hotels and
              industrial facilities across the Caribbean.
            </p>
            <div className="hero-cta-group">
              <A to="/products" className="btn-hero-teal">
                <span>Shop Products</span>
                <ShoppingBag size={17} />
              </A>
              <A to="/assessment" className="btn-hero-outline">
                <span>Request an Assessment</span>
                <ArrowRight size={17} />
              </A>
            </div>
            {/* 3 Carousel Dots */}
            <div className="carousel-dots">
              {[0, 1, 2].map((idx) => (
                <button
                  key={idx}
                  className={`carousel-dot ${activeSlide === idx ? 'active' : ''}`}
                  onClick={() => setActiveSlide(idx)}
                  aria-label={`Slide ${idx + 1}`}
                />
              ))}
            </div>
          </div>

          <div className="hero-image-wrap">
            <img
              src="/assets/images/hero_hs40_pipe_1794200915262.jpg"
              alt="HydroFLOW electronic water conditioner mounted on pipe"
            />
          </div>
        </div>
      </section>

      {/* Stats & Credibility Strip */}
      <section className="stats-strip">
        <div className="container-xl stats-grid">
          <div className="stat-item">
            <div className="stat-icon">
              <Calendar size={20} />
            </div>
            <div>
              <div className="stat-num">30+</div>
              <div className="stat-label">Years of Innovation</div>
              <div className="stat-sub">in water treatment</div>
            </div>
          </div>

          <div className="stat-item">
            <div className="stat-icon">
              <Users size={20} />
            </div>
            <div>
              <div className="stat-num">1M+</div>
              <div className="stat-label">Units Worldwide</div>
              <div className="stat-sub">trusted by facilities globally</div>
            </div>
          </div>

          <div className="stat-item">
            <div className="stat-icon">
              <MapPin size={20} />
            </div>
            <div>
              <div className="stat-num">50+</div>
              <div className="stat-label">Countries</div>
              <div className="stat-sub">cleaner, more efficient water</div>
            </div>
          </div>

          <div className="stat-item">
            <div className="stat-icon green">
              <Leaf size={20} />
            </div>
            <div>
              <div className="stat-label" style={{ fontSize: '13px', marginTop: '2px' }}>
                Residential – Commercial – Industrial
              </div>
              <div className="stat-sub" style={{ fontSize: '12px', marginTop: '2px' }}>
                Solutions across the Caribbean
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Key Benefits */}
      <section className="site-section">
        <div className="container-xl">
          <div className="section-title-wrap">
            <h2 className="section-heading-primary">Key Benefits</h2>
            <p className="section-subtext">
              A smarter, chemical-free way to treat and protect your water systems.
            </p>
          </div>

          <div className="benefits-grid">
            <div className="benefit-card-ice">
              <div className="benefit-circle-icon blue">
                <Droplets size={26} />
              </div>
              <h3>Reduce<br />Scale Build-Up</h3>
              <p>Keep pipes, heat exchangers and equipment cleaner.</p>
            </div>

            <div className="benefit-card-ice">
              <div className="benefit-circle-icon green">
                <Clock size={26} />
              </div>
              <h3>Improve<br />Lifespan</h3>
              <p>Extend the life of water systems and reduce replacement costs.</p>
            </div>

            <div className="benefit-card-ice">
              <div className="benefit-circle-icon teal">
                <Settings2 size={26} />
              </div>
              <h3>Optimise<br />Performance</h3>
              <p>Maintain water flow and system efficiency with no harsh chemicals.</p>
            </div>

            <div className="benefit-card-ice">
              <div className="benefit-circle-icon orange">
                <Leaf size={26} />
              </div>
              <h3>More<br />Sustainable</h3>
              <p>Lower maintenance, less downtime and a smaller environmental footprint.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Video / Technology Banner: How HydroFLOW Works */}
      <section style={{ padding: '0 0 60px' }}>
        <div className="container-xl">
          <div
            style={{
              background: 'linear-gradient(90deg, #021a30 0%, #032d52 60%, #008ba3 100%)',
              borderRadius: '20px',
              overflow: 'hidden',
              display: 'grid',
              gridTemplateColumns: '1fr 1.3fr',
              alignItems: 'center',
              boxShadow: '0 16px 45px rgba(2, 26, 48, 0.22)',
            }}
          >
            <div style={{ height: '260px' }}>
              <img
                src="/assets/images/hero_hs40_pipe_1794200915262.jpg"
                alt="HydroFLOW on pipe"
                style={{ width: '100%', height: '100%', objectFit: 'cover' }}
              />
            </div>
            <div style={{ padding: '36px 40px', color: '#fff' }}>
              <h2 style={{ color: '#fff', fontSize: '28px', fontWeight: 800, marginBottom: '12px' }}>
                How <span style={{ color: '#00c5d7' }}>HydroFLOW Works</span>
              </h2>
              <p style={{ color: '#cae7ef', fontSize: '14px', lineHeight: 1.6, marginBottom: '22px' }}>
                Uses a low-intensity electronic signal that changes how minerals behave in water, reducing scale,
                biofouling and blockages — without chemicals and without changing your existing infrastructure.
              </p>
              <div style={{ display: 'flex', alignItems: 'center', gap: '18px', flexWrap: 'wrap' }}>
                <A to="/how-it-works" className="btn-hero-teal">
                  <span>Learn How It Works</span>
                  <ArrowRight size={15} />
                </A>
                <button
                  onClick={openVideoModal}
                  style={{
                    background: 'none',
                    border: 'none',
                    color: '#fff',
                    display: 'inline-flex',
                    alignItems: 'center',
                    gap: '8px',
                    fontSize: '13px',
                    fontWeight: 700,
                  }}
                >
                  <div style={{ width: '32px', height: '32px', borderRadius: '9999px', background: 'rgba(255,255,255,0.2)', display: 'grid', placeItems: 'center' }}>
                    <Play size={14} fill="#fff" />
                  </div>
                  <span>Watch Video (1:30)</span>
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Applications Section */}
      <section className="site-section" style={{ paddingTop: '0' }}>
        <div className="container-xl">
          <div className="section-title-wrap">
            <h2 className="section-heading-primary">Applications</h2>
            <p className="section-subtext">
              Reliable water treatment for a wide range of industries across Jamaica and the Caribbean.
            </p>
          </div>

          <div className="applications-grid">
            <A to="/applications#hotels" className="app-card">
              <div className="app-card-img-wrap">
                <img src="/assets/images/app_hotel_resort_1794200917901.jpg" alt="Hotels & Resorts" />
              </div>
              <div className="app-card-label">
                <Hotel size={18} />
                <span>Hotels & Resorts</span>
              </div>
            </A>

            <A to="/applications#homes" className="app-card">
              <div className="app-card-img-wrap">
                <img src="/assets/images/app_modern_home_1794200917654.jpg" alt="Homes" />
              </div>
              <div className="app-card-label">
                <HomeIcon size={18} />
                <span>Homes</span>
              </div>
            </A>

            <A to="/applications#industrial" className="app-card">
              <div className="app-card-img-wrap">
                <img src="/assets/images/app_industrial_1794200918397.jpg" alt="Industrial Facilities" />
              </div>
              <div className="app-card-label">
                <Factory size={18} />
                <span>Industrial Facilities</span>
              </div>
            </A>

            <A to="/applications#commercial" className="app-card">
              <div className="app-card-img-wrap">
                <img src="/assets/images/app_commercial_1794200919036.jpg" alt="Commercial Buildings" />
              </div>
              <div className="app-card-label">
                <Building2 size={18} />
                <span>Commercial Buildings</span>
              </div>
            </A>
          </div>
        </div>
      </section>

      {/* Shop HydroFLOW Products (Mockup 8 Style: 4 Cards including Installation Kit) */}
      <section className="site-section">
        <div className="container-xl">
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'baseline', marginBottom: '24px' }}>
            <div>
              <h2 style={{ fontSize: '28px', fontWeight: 800, color: '#042642', margin: 0 }}>
                Shop HydroFLOW Products
              </h2>
              <p style={{ color: '#57788a', fontSize: '14px', margin: '4px 0 0' }}>
                Proven solutions for residential, commercial and industrial use.
              </p>
            </div>
            <A to="/products" style={{ color: '#008ea3', fontWeight: 800, fontSize: '13px', display: 'inline-flex', alignItems: 'center', gap: '6px' }}>
              View All Products <ArrowRight size={15} />
            </A>
          </div>

          <div className="products-grid-four">
            {products.slice(0, 4).map((p) => (
              <div className="product-white-card" key={p.id}>
                {p.isBestSeller && <span className="badge-best-seller">Best Seller</span>}
                <A to={`/products/${p.id}`} className="product-card-img-wrap">
                  <img src={p.image} alt={p.name} />
                </A>
                <div className="product-card-meta">
                  <h3>{p.name}</h3>
                  <div className="prod-subtitle">{p.subtitle}</div>
                  <div className="product-price-action-row">
                    <span className="prod-price-text">{p.priceFormatted}</span>
                    <button
                      className="btn-add-cart-square"
                      onClick={() => addToCart(p.id)}
                      aria-label={`Add ${p.name} to cart`}
                    >
                      <ShoppingBag size={17} />
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Proven Results in Real-World Systems */}
      <section className="proven-results-section">
        <div className="container-xl proven-results-grid">
          <div className="proven-left-copy">
            <h2>Proven Results in Real-World Systems</h2>
            <p>
              From hotels and commercial buildings to industrial facilities, HydroFLOW helps our
              customers achieve cleaner, more efficient and more sustainable water systems.
            </p>
          </div>

          <div className="stats-three-cards">
            <div className="stat-white-pill-card">
              <div className="stat-val-row">
                <span className="num">60%</span>
                <TrendingUp size={22} />
              </div>
              <div className="stat-desc">Less scale-related maintenance</div>
            </div>

            <div className="stat-white-pill-card">
              <div className="stat-val-row">
                <span className="num">30%</span>
                <Leaf size={22} />
              </div>
              <div className="stat-desc">Lower chemical use</div>
            </div>

            <div className="stat-white-pill-card">
              <div className="stat-val-row">
                <span className="num">40%</span>
                <Zap size={22} />
              </div>
              <div className="stat-desc">Improved system efficiency</div>
            </div>
          </div>

          <div>
            <A to="/case-studies" className="btn-view-cases">
              <span>View Case Studies</span>
              <ArrowRight size={15} />
            </A>
          </div>
        </div>
      </section>

      {/* Trusted by Industry Leaders Worldwide */}
      <section className="trusted-logos-section">
        <div className="container-xl">
          <div className="trusted-heading">Trusted by Industry Leaders Worldwide</div>

          <div className="logos-row">
            {/* Fred Meyer */}
            <div className="logo-brand-item" title="Fred Meyer">
              <span style={{ fontFamily: 'Arial Black, Impact, sans-serif', color: '#e21b23', fontSize: '25px', fontWeight: 900, fontStyle: 'italic', letterSpacing: '-1px' }}>
                Fred Meyer<span style={{ fontStyle: 'normal' }}>:</span>
              </span>
            </div>

            {/* EUROTEL */}
            <div className="logo-brand-item" title="EUROTEL">
              <div style={{ display: 'flex', alignItems: 'center', gap: '2px' }}>
                <span style={{ fontFamily: 'Plus Jakarta Sans, sans-serif', color: '#083250', fontSize: '21px', fontWeight: 800, letterSpacing: '2px' }}>
                  EUR
                </span>
                <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
                  <span style={{ color: '#00a8be', fontSize: '10px', lineHeight: 1 }}>✻</span>
                  <span style={{ fontFamily: 'Plus Jakarta Sans, sans-serif', color: '#083250', fontSize: '21px', fontWeight: 800, lineHeight: 1 }}>
                    O
                  </span>
                </div>
                <span style={{ fontFamily: 'Plus Jakarta Sans, sans-serif', color: '#083250', fontSize: '21px', fontWeight: 800, letterSpacing: '2px' }}>
                  TEL
                </span>
              </div>
            </div>

            {/* Disneyland */}
            <div className="logo-brand-item" title="Disneyland">
              <span style={{ fontFamily: 'Brush Script MT, cursive, Georgia, serif', color: '#d9272e', fontSize: '32px', fontWeight: 700, transform: 'rotate(-2deg)', display: 'inline-block' }}>
                Disneyland
              </span>
            </div>

            {/* THE PLAZA */}
            <div className="logo-brand-item" title="THE PLAZA">
              <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#2c5169" strokeWidth="1.6">
                  <circle cx="12" cy="12" r="9" />
                  <circle cx="12" cy="12" r="5" strokeDasharray="2 2" />
                  <path d="M12 3v18M3 12h18" strokeWidth="0.8" />
                </svg>
                <span style={{ fontFamily: 'Cinzel, Garamond, Times, serif', color: '#1a3e56', fontSize: '15px', fontWeight: 800, letterSpacing: '2.5px' }}>
                  THE PLAZA
                </span>
              </div>
            </div>

            {/* acea */}
            <div className="logo-brand-item" title="acea">
              <span style={{ fontFamily: 'Outfit, sans-serif', color: '#0083c9', fontSize: '29px', fontWeight: 600, letterSpacing: '-0.5px' }}>
                acea
              </span>
            </div>

            {/* THE UNIVERSITY OF UTAH */}
            <div className="logo-brand-item" title="The University of Utah">
              <div style={{ display: 'flex', alignItems: 'center', gap: '6px' }}>
                <div style={{ background: '#cc0000', color: '#ffffff', fontWeight: 900, fontSize: '15px', width: '24px', height: '24px', borderRadius: '4px', display: 'grid', placeItems: 'center', fontFamily: 'Impact, Arial Black' }}>
                  U
                </div>
                <div style={{ display: 'flex', flexDirection: 'column', lineHeight: 1 }}>
                  <span style={{ fontSize: '7.5px', fontWeight: 800, color: '#384d5d', letterSpacing: '0.8px' }}>THE</span>
                  <span style={{ fontSize: '10.5px', fontWeight: 900, color: '#163346', letterSpacing: '0.5px' }}>UNIVERSITY</span>
                  <span style={{ fontSize: '7.5px', fontWeight: 800, color: '#384d5d', letterSpacing: '0.8px' }}>OF UTAH</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Banner */}
      <section
        className="cta-banner-caribbean"
        style={{
          backgroundImage: `url('/assets/images/cta_caribbean_1794200919028.jpg')`,
        }}
      >
        <div className="container-xl cta-banner-inner">
          <div className="cta-copy-wrap">
            <h2>Ready to Optimise Your Water System?</h2>
            <p>
              Shop proven solutions online or get a professional assessment for your property or facility.
            </p>
          </div>
          <div className="cta-buttons-wrap">
            <A to="/products" className="btn-cta-teal">
              <span>Shop Now</span>
              <ShoppingBag size={16} />
            </A>
            <A to="/assessment" className="btn-cta-outline">
              <span>Request an Assessment</span>
              <ArrowRight size={16} />
            </A>
          </div>
        </div>
      </section>
    </>
  );
}

/* =========================================================================
   2. PRODUCT RANGE PAGE (MATCHING MOCKUP 1: HydroFLOW_Jamaica_Product_Range_375a975f.png)
   ========================================================================= */
function ProductRangePage({ addToCart }: { addToCart: (id: string) => void }) {
  return (
    <>
      {/* Hero */}
      <section className="hero-mockup-section">
        <div className="container-xl hero-two-col">
          <div>
            <span className="hero-kicker">OUR PRODUCTS</span>
            <h1 className="hero-headline">
              High-Performance
              <br />
              Water Treatment
              <br />
              <span className="teal-text">Solutions</span>
            </h1>
            <p className="hero-desc">
              The HydroFLOW® range of electronic water conditioners provides a reliable, chemical-free
              way to improve water quality and system efficiency.
            </p>
          </div>
          <div className="hero-image-wrap">
            <img src="/assets/images/product_pearl_plus_1794200915507.jpg" alt="HydroFLOW Pearl Plus on Pipe" />
          </div>
        </div>
      </section>

      {/* 5-Item Value Strip */}
      <section className="stats-strip">
        <div className="container-xl stats-grid five-cols">
          <div className="stat-item">
            <div className="stat-icon green"><Leaf size={18} /></div>
            <div className="stat-label">Non-Chemical<br /><span style={{ fontWeight: 400, color: '#557688' }}>Treatment</span></div>
          </div>
          <div className="stat-item">
            <div className="stat-icon"><Settings2 size={18} /></div>
            <div className="stat-label">Reduced<br /><span style={{ fontWeight: 400, color: '#557688' }}>Maintenance</span></div>
          </div>
          <div className="stat-item">
            <div className="stat-icon"><BarChart3 size={18} /></div>
            <div className="stat-label">Improved<br /><span style={{ fontWeight: 400, color: '#557688' }}>Efficiency</span></div>
          </div>
          <div className="stat-item">
            <div className="stat-icon green"><ShieldCheck size={18} /></div>
            <div className="stat-label">Longer<br /><span style={{ fontWeight: 400, color: '#557688' }}>Equipment Life</span></div>
          </div>
          <div className="stat-item">
            <div className="stat-icon green"><Sparkles size={18} /></div>
            <div className="stat-label">More<br /><span style={{ fontWeight: 400, color: '#557688' }}>Sustainable</span></div>
          </div>
        </div>
      </section>

      {/* Our Product Range Section */}
      <section className="site-section">
        <div className="container-xl">
          <div className="section-divider-title">
            <h2>Our Product Range</h2>
          </div>

          <div className="product-range-grid">
            {/* Pearl */}
            <div className="product-range-card">
              <div className="product-range-img-wrap">
                <img src="/assets/images/product_pearl_1794200917031.jpg" alt="HydroFLOW Pearl" />
              </div>
              <h3>HydroFLOW® Pearl</h3>
              <p className="lead-desc">Ideal for residential and light commercial applications.</p>
              <ul className="feature-check-list">
                <li><Check size={16} /> Reduces scale build-up</li>
                <li><Check size={16} /> Improves water flow</li>
                <li><Check size={16} /> Extends equipment life</li>
              </ul>
              <div className="product-range-buttons">
                <A to="/products/pearl" className="btn-range-outline">View Details</A>
                <A to="/assessment" className="btn-range-solid">Request Assessment</A>
              </div>
            </div>

            {/* Pearl Plus */}
            <div className="product-range-card">
              <div className="product-range-img-wrap">
                <img src="/assets/images/product_pearl_plus_1794200915507.jpg" alt="HydroFLOW Pearl Plus" />
              </div>
              <h3>HydroFLOW® Pearl Plus</h3>
              <p className="lead-desc">Our most popular solution for commercial and industrial systems.</p>
              <ul className="feature-check-list">
                <li><Check size={16} /> Higher performance for larger systems</li>
                <li><Check size={16} /> Improves overall system efficiency</li>
                <li><Check size={16} /> Helps reduce maintenance and downtime</li>
              </ul>
              <div className="product-range-buttons">
                <A to="/products/pearl-plus" className="btn-range-outline">View Details</A>
                <A to="/assessment" className="btn-range-solid">Request Assessment</A>
              </div>
            </div>

            {/* HS40 */}
            <div className="product-range-card">
              <div className="product-range-img-wrap">
                <img src="/assets/images/product_hs40_1794200916171.jpg" alt="HydroFLOW HS40" />
              </div>
              <h3>HydroFLOW® HS40</h3>
              <p className="lead-desc">High-performance solution for demanding industrial facilities and large-scale applications.</p>
              <ul className="feature-check-list">
                <li><Check size={16} /> Designed for high-flow, large systems</li>
                <li><Check size={16} /> Supports heavy-duty operations</li>
                <li><Check size={16} /> Reliable and long-lasting</li>
              </ul>
              <div className="product-range-buttons">
                <A to="/products/hs40" className="btn-range-outline">View Details</A>
                <A to="/assessment" className="btn-range-solid">Request Assessment</A>
              </div>
            </div>
          </div>

          {/* Not Sure Which Product Banner */}
          <div className="advisory-droplet-banner">
            <img src="/assets/images/water_droplet_splash_1794201854825.jpg" alt="Water splash" />
            <div className="advisory-content">
              <h3>Not Sure Which Product is Right for You?</h3>
              <p>
                Tell us about your property or facility, and our team will recommend the best HydroFLOW® solution.
              </p>
              <A to="/assessment" className="btn-teal-primary" style={{ padding: '13px 24px', fontSize: '14px' }}>
                <span>Book a Water System Assessment</span>
                <ArrowRight size={16} />
              </A>
            </div>
          </div>
        </div>
      </section>

      {/* Support Strip */}
      <section className="stats-strip" style={{ marginBottom: '60px' }}>
        <div className="container-xl stats-grid">
          <div className="stat-item">
            <div className="stat-icon"><Wrench size={20} /></div>
            <div>
              <div className="stat-label">Expert Guidance</div>
              <div className="stat-sub">Get the right solution for your needs.</div>
            </div>
          </div>
          <div className="stat-item">
            <div className="stat-icon"><Package size={20} /></div>
            <div>
              <div className="stat-label">Local Supply</div>
              <div className="stat-sub">Available in Jamaica.</div>
            </div>
          </div>
          <div className="stat-item">
            <div className="stat-icon"><Settings2 size={20} /></div>
            <div>
              <div className="stat-label">Professional Installation</div>
              <div className="stat-sub">Quick and non-invasive.</div>
            </div>
          </div>
          <div className="stat-item">
            <div className="stat-icon"><Headphones size={20} /></div>
            <div>
              <div className="stat-label">Ongoing Support</div>
              <div className="stat-sub">We’re here to help, long-term.</div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

/* =========================================================================
   3. HOW IT WORKS PAGE (MATCHING MOCKUP 4: HydroFLOW_Jamaica__How_It_Works_3331d632.png)
   ========================================================================= */
function HowItWorksPage() {
  return (
    <>
      <section className="hero-mockup-section">
        <div className="container-xl hero-two-col">
          <div>
            <span className="hero-kicker">HOW IT WORKS</span>
            <h1 className="hero-headline">
              A Simple, Non-Chemical
              <br />
              Way to Improve Your
              <br />
              <span className="teal-text">Water System</span>
            </h1>
            <p className="hero-desc">
              Proven electronic water treatment technology that keeps your water cleaner, your systems
              more efficient, and running longer.
            </p>
          </div>
          <div className="hero-image-wrap">
            <img src="/assets/images/hero_hs40_pipe_1794200915262.jpg" alt="HydroFLOW on pipe" />
          </div>
        </div>
      </section>

      {/* The Process: From Assessment to Results */}
      <section className="site-section">
        <div className="container-xl">
          <div className="section-divider-title">
            <h2>The Process: From Assessment to Results</h2>
          </div>

          <div className="process-steps-grid">
            <div className="process-step-card">
              <div className="process-img-wrap">
                <img src="/assets/images/technician_tablet_1794201853189.jpg" alt="Technician reviewing system" />
              </div>
              <div className="process-body">
                <div className="process-header-line">
                  <span className="process-num-badge">1</span>
                  <h3>Assess</h3>
                </div>
                <p>We review your water system and goals.</p>
              </div>
            </div>

            <div className="process-step-card">
              <div className="process-img-wrap">
                <img src="/assets/images/hero_hs40_pipe_1794200915262.jpg" alt="Recommend solution" />
              </div>
              <div className="process-body">
                <div className="process-header-line">
                  <span className="process-num-badge">2</span>
                  <h3>Recommend</h3>
                </div>
                <p>We recommend the right solution for your property.</p>
              </div>
            </div>

            <div className="process-step-card">
              <div className="process-img-wrap">
                <img src="/assets/images/technician_installing_1794201854587.jpg" alt="Install unit" />
              </div>
              <div className="process-body">
                <div className="process-header-line">
                  <span className="process-num-badge">3</span>
                  <h3>Install</h3>
                </div>
                <p>Quick, non-invasive installation on your existing pipework.</p>
              </div>
            </div>

            <div className="process-step-card">
              <div className="process-img-wrap">
                <img src="/assets/images/clean_shower_water_1794201856774.jpg" alt="Enjoy cleaner water" />
              </div>
              <div className="process-body">
                <div className="process-header-line">
                  <span className="process-num-badge">4</span>
                  <h3>Enjoy</h3>
                </div>
                <p>Experience cleaner water, better performance and longer system life.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* The Technology Behind HydroFLOW */}
      <section style={{ padding: '0 0 76px' }}>
        <div className="container-xl">
          <div className="tech-glow-section">
            <div className="tech-glow-left">
              <h2>The Technology Behind HydroFLOW®</h2>
              <p>
                HydroFLOW® uses a low-intensity electronic signal to change how minerals behave in your
                water, helping to reduce scale build-up and keep your systems running more efficiently.
              </p>
            </div>
            <div className="tech-benefits-pill-list">
              <div className="tech-pill-item">
                <div className="icon-circle"><Droplets size={18} /></div>
                <span>Reduces limescale build-up</span>
              </div>
              <div className="tech-pill-item">
                <div className="icon-circle"><Settings2 size={18} /></div>
                <span>Improves system efficiency</span>
              </div>
              <div className="tech-pill-item">
                <div className="icon-circle"><Leaf size={18} /></div>
                <span>Non-chemical and eco-friendly</span>
              </div>
              <div className="tech-pill-item">
                <div className="icon-circle"><ShieldCheck size={18} /></div>
                <span>Helps extend equipment life</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* The Difference It Makes (Before & After) */}
      <section className="site-section pale" style={{ background: '#f5f9fb' }}>
        <div className="container-xl">
          <div className="section-divider-title">
            <h2>The Difference It Makes</h2>
          </div>

          <div className="before-after-grid">
            <div className="before-after-img-container">
              <img src="/assets/images/before_after_pipe_1794201854666.jpg" alt="Before and After Pipe Condition" />
            </div>
            <div>
              <ul className="feature-check-list" style={{ gap: '20px' }}>
                <li style={{ fontSize: '16px' }}><Check size={22} /> Cleaner pipes and equipment</li>
                <li style={{ fontSize: '16px' }}><Check size={22} /> More efficient water flow</li>
                <li style={{ fontSize: '16px' }}><Check size={22} /> Less maintenance and downtime</li>
                <li style={{ fontSize: '16px' }}><Check size={22} /> Longer lifespan for your system</li>
              </ul>
              <A to="/assessment" className="btn-teal-primary" style={{ marginTop: '24px', padding: '13px 26px', fontSize: '14px' }}>
                <span>Request an Assessment</span>
                <ArrowRight size={16} />
              </A>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="cta-banner-caribbean" style={{ backgroundImage: `url('/assets/images/cta_caribbean_1794200919028.jpg')` }}>
        <div className="container-xl cta-banner-inner">
          <div className="cta-copy-wrap">
            <h2>See How It Can Work for Your Property</h2>
            <p>Book a water system assessment and get a solution tailored to your needs.</p>
          </div>
          <A to="/assessment" className="btn-cta-teal">
            <span>Book an Assessment</span>
            <ArrowRight size={16} />
          </A>
        </div>
      </section>
    </>
  );
}

/* =========================================================================
   4. APPLICATIONS BY INDUSTRY (MATCHING MOCKUP 7: HydroFLOW_Applications_by_Industry_f66d2fe4.png)
   ========================================================================= */
function ApplicationsPage() {
  return (
    <>
      <section className="hero-mockup-section">
        <div className="container-xl hero-two-col">
          <div>
            <span className="hero-kicker">APPLICATIONS</span>
            <h1 className="hero-headline">
              Water Treatment
              <br />
              Solutions for
              <br />
              <span className="teal-text">Every Industry</span>
            </h1>
            <p className="hero-desc">
              Reliable, non-chemical water conditioning for homes and a wide range of commercial and
              industrial applications.
            </p>
          </div>
          <div className="hero-image-wrap">
            <img src="/assets/images/app_hotel_resort_1794200917901.jpg" alt="Resort pool" />
          </div>
        </div>
      </section>

      {/* Industry Quick-Nav Strip */}
      <section className="stats-strip">
        <div className="container-xl stats-grid five-cols">
          <div className="stat-item">
            <div className="stat-icon"><HomeIcon size={18} /></div>
            <div className="stat-label">Residential<br /><span style={{ fontWeight: 400, color: '#557688' }}>Homes</span></div>
          </div>
          <div className="stat-item">
            <div className="stat-icon"><Building2 size={18} /></div>
            <div className="stat-label">Commercial<br /><span style={{ fontWeight: 400, color: '#557688' }}>Buildings</span></div>
          </div>
          <div className="stat-item">
            <div className="stat-icon"><Factory size={18} /></div>
            <div className="stat-label">Industrial<br /><span style={{ fontWeight: 400, color: '#557688' }}>Facilities</span></div>
          </div>
          <div className="stat-item">
            <div className="stat-icon"><Hotel size={18} /></div>
            <div className="stat-label">Hotels &<br /><span style={{ fontWeight: 400, color: '#557688' }}>Resorts</span></div>
          </div>
          <div className="stat-item">
            <div className="stat-icon"><Droplets size={18} /></div>
            <div className="stat-label">Pools &<br /><span style={{ fontWeight: 400, color: '#557688' }}>Aquatics</span></div>
          </div>
        </div>
      </section>

      {/* Explore Applications by Industry (6 Cards in 2x3 Grid) */}
      <section className="site-section">
        <div className="container-xl">
          <div className="section-divider-title">
            <h2>Explore Applications by Industry</h2>
          </div>

          <div className="applications-grid six-cards">
            {/* 1. Homes & Residential */}
            <div className="app-card" id="homes">
              <div className="app-card-img-wrap">
                <img src="/assets/images/app_modern_home_1794200917654.jpg" alt="Homes" />
              </div>
              <div className="app-card-label">
                <HomeIcon size={18} />
                <span>Homes & Residential</span>
              </div>
              <div className="app-card-body-extended">
                <p>Protect plumbing, appliances and water systems while reducing scale build-up.</p>
                <A to="/assessment" className="learn-more">Learn More <ArrowRight size={14} /></A>
              </div>
            </div>

            {/* 2. Hotels & Resorts */}
            <div className="app-card" id="hotels">
              <div className="app-card-img-wrap">
                <img src="/assets/images/app_hotel_resort_1794200917901.jpg" alt="Hotels" />
              </div>
              <div className="app-card-label">
                <Hotel size={18} />
                <span>Hotels & Resorts</span>
              </div>
              <div className="app-card-body-extended">
                <p>Maintain efficient water systems, improve guest experience and reduce maintenance costs.</p>
                <A to="/assessment" className="learn-more">Learn More <ArrowRight size={14} /></A>
              </div>
            </div>

            {/* 3. Industrial Facilities */}
            <div className="app-card" id="industrial">
              <div className="app-card-img-wrap">
                <img src="/assets/images/app_industrial_1794200918397.jpg" alt="Industrial" />
              </div>
              <div className="app-card-label">
                <Factory size={18} />
                <span>Industrial Facilities</span>
              </div>
              <div className="app-card-body-extended">
                <p>Prevent scale and biofouling in process, cooling and boiler systems for reliable operations.</p>
                <A to="/assessment" className="learn-more">Learn More <ArrowRight size={14} /></A>
              </div>
            </div>

            {/* 4. Commercial Buildings */}
            <div className="app-card" id="commercial">
              <div className="app-card-img-wrap">
                <img src="/assets/images/app_commercial_1794200919036.jpg" alt="Commercial" />
              </div>
              <div className="app-card-label">
                <Building2 size={18} />
                <span>Commercial Buildings</span>
              </div>
              <div className="app-card-body-extended">
                <p>Keep water systems efficient in office buildings, retail centres and multi-unit properties.</p>
                <A to="/assessment" className="learn-more">Learn More <ArrowRight size={14} /></A>
              </div>
            </div>

            {/* 5. Pools & Aquatics */}
            <div className="app-card" id="pools">
              <div className="app-card-img-wrap">
                <img src="/assets/images/app_hotel_resort_1794200917901.jpg" alt="Pools" />
              </div>
              <div className="app-card-label">
                <Droplets size={18} />
                <span>Pools & Aquatics</span>
              </div>
              <div className="app-card-body-extended">
                <p>Enjoy cleaner, clearer water with reduced chemical use for pools, spas and aquatic facilities.</p>
                <A to="/assessment" className="learn-more">Learn More <ArrowRight size={14} /></A>
              </div>
            </div>

            {/* 6. Healthcare Facilities */}
            <div className="app-card" id="healthcare">
              <div className="app-card-img-wrap">
                <img src="/assets/images/clean_shower_water_1794201856774.jpg" alt="Healthcare" />
              </div>
              <div className="app-card-label">
                <ShieldCheck size={18} />
                <span>Healthcare Facilities</span>
              </div>
              <div className="app-card-body-extended">
                <p>Support clean, reliable water systems for hospitals, clinics and other healthcare environments.</p>
                <A to="/assessment" className="learn-more">Learn More <ArrowRight size={14} /></A>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="cta-banner-caribbean" style={{ backgroundImage: `url('/assets/images/cta_caribbean_1794200919028.jpg')` }}>
        <div className="container-xl cta-banner-inner">
          <div className="cta-copy-wrap">
            <h2>Find the Right Solution for Your Facility</h2>
            <p>Let's discuss your application and recommend the best HydroFLOW® solution.</p>
          </div>
          <A to="/assessment" className="btn-cta-teal">
            <span>Book an Assessment</span>
            <ArrowRight size={16} />
          </A>
        </div>
      </section>
    </>
  );
}

/* =========================================================================
   5. CASE STUDIES PAGE (MATCHING MOCKUP 9: HydroFLOW_Jamaica_Case_Studies_Showcase_1e94c1c0.png)
   ========================================================================= */
function CaseStudiesPage() {
  return (
    <>
      <section className="hero-mockup-section">
        <div className="container-xl hero-two-col">
          <div>
            <span className="hero-kicker">CASE STUDIES</span>
            <h1 className="hero-headline">
              Real Results from
              <br />
              <span className="teal-text">Real Projects</span>
            </h1>
            <p className="hero-desc">
              See how HydroFLOW® is helping homes, businesses and industrial facilities across Jamaica
              achieve cleaner, more efficient water systems — without chemicals.
            </p>
          </div>
          <div className="hero-image-wrap">
            <img src="/assets/images/app_hotel_resort_1794200917901.jpg" alt="Resort" />
          </div>
        </div>
      </section>

      {/* Credibility Strip */}
      <section className="stats-strip">
        <div className="container-xl stats-grid">
          <div className="stat-item">
            <div className="stat-icon"><Award size={20} /></div>
            <div>
              <div className="stat-label">Proven Performance</div>
              <div className="stat-sub">in Real Environments</div>
            </div>
          </div>
          <div className="stat-item">
            <div className="stat-icon"><Layers size={20} /></div>
            <div>
              <div className="stat-label">A Range of</div>
              <div className="stat-sub">Applications</div>
            </div>
          </div>
          <div className="stat-item">
            <div className="stat-icon"><BarChart3 size={20} /></div>
            <div>
              <div className="stat-label">Measurable</div>
              <div className="stat-sub">Results</div>
            </div>
          </div>
          <div className="stat-item">
            <div className="stat-icon green"><ShieldCheck size={20} /></div>
            <div>
              <div className="stat-label">Trusted by Leading</div>
              <div className="stat-sub">Businesses</div>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Case Studies */}
      <section className="site-section">
        <div className="container-xl">
          <div className="section-divider-title">
            <h2>Featured Case Studies</h2>
          </div>

          <div className="applications-grid" style={{ gridTemplateColumns: 'repeat(3, 1fr)', marginBottom: '56px' }}>
            <div className="app-card">
              <div className="app-card-img-wrap">
                <img src="/assets/images/app_hotel_resort_1794200917901.jpg" alt="Resort" />
              </div>
              <div className="app-card-label"><Hotel size={16} /><span>Hotels & Resorts</span></div>
              <div className="app-card-body-extended">
                <h3>Improved Water Efficiency at a Luxury Resort</h3>
                <p>Reduced scale build-up, improved system performance and lowered maintenance requirements.</p>
                <A to="/assessment" className="learn-more">View Case Study <ArrowRight size={14} /></A>
              </div>
            </div>

            <div className="app-card">
              <div className="app-card-img-wrap">
                <img src="/assets/images/app_commercial_1794200919036.jpg" alt="Commercial" />
              </div>
              <div className="app-card-label"><Building2 size={16} /><span>Commercial Building</span></div>
              <div className="app-card-body-extended">
                <h3>Cleaner, More Efficient Water for a Corporate Facility</h3>
                <p>Improved water quality, reduced equipment downtime and extended the life of key systems.</p>
                <A to="/assessment" className="learn-more">View Case Study <ArrowRight size={14} /></A>
              </div>
            </div>

            <div className="app-card">
              <div className="app-card-img-wrap">
                <img src="/assets/images/app_industrial_1794200918397.jpg" alt="Industrial" />
              </div>
              <div className="app-card-label"><Factory size={16} /><span>Industrial Facility</span></div>
              <div className="app-card-body-extended">
                <h3>Scale Control and Greater Reliability for Manufacturing</h3>
                <p>Minimized scale and biofouling, improved heat transfer and kept operations running more efficiently.</p>
                <A to="/assessment" className="learn-more">View Case Study <ArrowRight size={14} /></A>
              </div>
            </div>
          </div>

          {/* Featured Case Study Spotlight Banner */}
          <div className="case-spotlight-box">
            <div className="case-spotlight-img">
              <img src="/assets/images/product_pearl_plus_1794200915507.jpg" alt="Pearl Plus on pipe" />
            </div>
            <div className="case-spotlight-narrative">
              <span className="kicker">FEATURED CASE STUDY</span>
              <h2>Major Hotel Group Reduces Maintenance by 60%</h2>
              <p>
                A leading hotel in Jamaica installed HydroFLOW® PEARL PLUS across key water systems to control
                scale, improve efficiency and extend equipment life.
              </p>
              <A to="/assessment" className="btn-teal-primary">
                <span>Read the Full Case Study</span>
                <ArrowRight size={15} />
              </A>
            </div>
            <div className="case-spotlight-results">
              <h3>THE RESULTS</h3>
              <div className="case-result-row">
                <div className="case-result-icon"><Wrench size={18} /></div>
                <div className="case-result-text">
                  <div className="val">60%</div>
                  <div className="lbl">Less maintenance</div>
                </div>
              </div>
              <div className="case-result-row">
                <div className="case-result-icon"><Zap size={18} /></div>
                <div className="case-result-text">
                  <div className="val">30%</div>
                  <div className="lbl">Lower energy use</div>
                </div>
              </div>
              <div className="case-result-row">
                <div className="case-result-icon"><Calendar size={18} /></div>
                <div className="case-result-text">
                  <div className="val">Longer</div>
                  <div className="lbl">system lifespan</div>
                </div>
              </div>
            </div>
          </div>

          {/* Testimonial Quote Block */}
          <div className="testimonial-quote-box" style={{ marginTop: '48px' }}>
            <div className="quote-left">
              <div className="quote-mark-circle">“</div>
              <div className="quote-content">
                <blockquote>
                  "Since installing HydroFLOW, we’ve seen a noticeable improvement in system performance
                  and a significant reduction in maintenance."
                </blockquote>
                <div className="quote-author">
                  <strong>Facilities Manager</strong> | Jamaican Hotel Group
                </div>
              </div>
            </div>
            <div>
              <ul className="feature-check-list">
                <li><Check size={18} /> More efficient operations</li>
                <li><Check size={18} /> Consistent water quality</li>
                <li><Check size={18} /> Lower long-term costs</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="cta-banner-caribbean" style={{ backgroundImage: `url('/assets/images/cta_caribbean_1794200919028.jpg')` }}>
        <div className="container-xl cta-banner-inner">
          <div className="cta-copy-wrap">
            <h2>Achieve Similar Results at Your Property</h2>
            <p>Let's assess your system and recommend the right HydroFLOW® solution.</p>
          </div>
          <A to="/assessment" className="btn-cta-teal">
            <span>Book an Assessment</span>
            <ArrowRight size={16} />
          </A>
        </div>
      </section>
    </>
  );
}

/* =========================================================================
   6. ABOUT PAGE (MATCHING MOCKUP 6: HydroFLOW_Jamaica__Cleaner_Water__Stronger_Systems_c5e2a5c9.png)
   ========================================================================= */
function AboutPage() {
  return (
    <>
      <section className="hero-mockup-section">
        <div className="container-xl hero-two-col">
          <div>
            <span className="hero-kicker">ABOUT HYDROFLOW JAMAICA</span>
            <h1 className="hero-headline">
              A Trusted Partner for
              <br />
              Cleaner, More Efficient
              <br />
              <span className="teal-text">Water Systems</span>
            </h1>
            <p className="hero-desc">
              We provide innovative, non-chemical water treatment solutions for homes, businesses and
              industrial facilities across Jamaica and the Caribbean.
            </p>
          </div>
          <div className="hero-image-wrap">
            <img src="/assets/images/office_building_exterior_1794201856408.jpg" alt="HydroFLOW Jamaica" />
          </div>
        </div>
      </section>

      {/* Stats Strip */}
      <section className="stats-strip">
        <div className="container-xl stats-grid">
          <div className="stat-item">
            <div className="stat-icon"><Calendar size={20} /></div>
            <div><div className="stat-num">30+</div><div className="stat-label">Years of Innovation</div></div>
          </div>
          <div className="stat-item">
            <div className="stat-icon"><Users size={20} /></div>
            <div><div className="stat-num">1M+</div><div className="stat-label">Units Worldwide</div></div>
          </div>
          <div className="stat-item">
            <div className="stat-icon"><Globe2 size={20} /></div>
            <div><div className="stat-num">50+</div><div className="stat-label">Countries</div></div>
          </div>
          <div className="stat-item">
            <div className="stat-icon green"><Leaf size={20} /></div>
            <div><div className="stat-label">Serving Jamaica & the Caribbean</div></div>
          </div>
        </div>
      </section>

      {/* Our Story */}
      <section className="site-section">
        <div className="container-xl">
          <div className="about-story-split">
            <div className="about-story-img">
              <img src="/assets/images/technician_installing_1794201854587.jpg" alt="Technician installing unit" />
            </div>
            <div className="about-story-copy">
              <span className="hero-kicker" style={{ color: '#00a2b9' }}>OUR STORY</span>
              <h2>Delivering Smarter Water Engineering</h2>
              <p>
                HydroFLOW Jamaica, by IEAC, brings proven electronic water treatment technology to the
                Jamaican market, helping customers solve scale, biofouling and efficiency challenges without
                the use of chemicals.
              </p>
              <p>
                Our mission is simple: to deliver reliable, sustainable and cost-effective water solutions
                that keep your systems running better for longer.
              </p>
            </div>
          </div>

          {/* Our Values */}
          <div className="section-divider-title">
            <h2>Our Values</h2>
          </div>

          <div className="values-four-grid">
            <div className="value-card-plain">
              <div className="icon-circle"><ShieldCheck size={24} /></div>
              <h3>Reliability</h3>
              <p>Proven technology that delivers results.</p>
            </div>
            <div className="value-card-plain">
              <div className="icon-circle"><Leaf size={24} /></div>
              <h3>Sustainability</h3>
              <p>A non-chemical, eco-friendly approach to water treatment.</p>
            </div>
            <div className="value-card-plain">
              <div className="icon-circle"><Users size={24} /></div>
              <h3>Partnership</h3>
              <p>Expert support from assessment to installation.</p>
            </div>
            <div className="value-card-plain">
              <div className="icon-circle"><BarChart3 size={24} /></div>
              <h3>Performance</h3>
              <p>Better efficiency, lower costs and longer system life.</p>
            </div>
          </div>

          {/* The HydroFLOW Difference */}
          <div
            style={{
              background: '#031d36',
              borderRadius: '20px',
              padding: '42px 46px',
              color: '#fff',
              display: 'grid',
              gridTemplateColumns: '1.2fr 1fr',
              gap: '40px',
              alignItems: 'center',
              marginBottom: '70px',
            }}
          >
            <div>
              <h2 style={{ color: '#fff', fontSize: '28px', fontWeight: 800, marginBottom: '24px' }}>
                The <span style={{ color: '#00c5d7' }}>HydroFLOW® Difference</span>
              </h2>
              <ul className="feature-check-list">
                <li style={{ color: '#fff' }}><Check size={18} /> Chemical-free water treatment</li>
                <li style={{ color: '#fff' }}><Check size={18} /> Works with your existing systems</li>
                <li style={{ color: '#fff' }}><Check size={18} /> Low maintenance and easy to install</li>
                <li style={{ color: '#fff' }}><Check size={18} /> Proven results across multiple industries</li>
                <li style={{ color: '#fff' }}><Check size={18} /> Backed by global research and real-world use</li>
              </ul>
            </div>
            <div style={{ borderRadius: '14px', overflow: 'hidden' }}>
              <img src="/assets/images/hero_hs40_pipe_1794200915262.jpg" alt="HydroFLOW on pipe" />
            </div>
          </div>

          {/* Our Team */}
          <div className="section-divider-title">
            <h2>Our Team</h2>
          </div>

          <div className="team-split-box">
            <img src="/assets/images/engineering_team_1794201857174.jpg" alt="Engineering Team" />
            <div className="team-split-copy">
              <h2>A local team with global expertise.</h2>
              <p>
                Our experienced team in Jamaica is here to assess your needs, recommend the right solution
                and ensure a smooth, professional installation with ongoing support.
              </p>
              <A to="/assessment" className="btn-teal-primary" style={{ marginTop: '24px' }}>
                <span>Connect With Our Team</span>
                <ArrowRight size={15} />
              </A>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="cta-banner-caribbean" style={{ backgroundImage: `url('/assets/images/cta_caribbean_1794200919028.jpg')` }}>
        <div className="container-xl cta-banner-inner">
          <div className="cta-copy-wrap">
            <h2>Let's Improve Your Water System</h2>
            <p>Book a water system assessment and discover the right solution for your property.</p>
          </div>
          <A to="/assessment" className="btn-cta-teal">
            <span>Book an Assessment</span>
            <ArrowRight size={16} />
          </A>
        </div>
      </section>
    </>
  );
}

/* =========================================================================
   7. INSIGHTS PAGE (MATCHING MOCKUP 5: HydroFLOW_Jamaica_Water_Treatment_Insights_0a9bba07.png)
   ========================================================================= */
function InsightsPage() {
  return (
    <>
      <section className="hero-mockup-section">
        <div className="container-xl hero-two-col">
          <div>
            <span className="hero-kicker">INSIGHTS & RESOURCES</span>
            <h1 className="hero-headline">
              Expert Insights on
              <br />
              <span className="teal-text">Water Treatment</span>
            </h1>
            <p className="hero-desc">
              Practical guides, industry updates and expert tips to help you get cleaner, more efficient
              and longer-lasting water systems.
            </p>
          </div>
          <div className="hero-image-wrap">
            <img src="/assets/images/water_droplet_splash_1794201854825.jpg" alt="Water splash" />
          </div>
        </div>
      </section>

      {/* Topic Strip */}
      <section className="stats-strip">
        <div className="container-xl stats-grid">
          <div className="stat-item">
            <div className="stat-icon"><FileText size={18} /></div>
            <div className="stat-label">Guides & How-Tos</div>
          </div>
          <div className="stat-item">
            <div className="stat-icon"><TrendingUp size={18} /></div>
            <div className="stat-label">Industry Insights</div>
          </div>
          <div className="stat-item">
            <div className="stat-icon"><Settings2 size={18} /></div>
            <div className="stat-label">Product & Technology Updates</div>
          </div>
          <div className="stat-item">
            <div className="stat-icon green"><Leaf size={18} /></div>
            <div className="stat-label">Sustainability & Water Efficiency</div>
          </div>
        </div>
      </section>

      {/* Featured Article Banner */}
      <section className="site-section">
        <div className="container-xl">
          <div
            style={{
              background: '#ffffff',
              border: '1px solid #dbe8ed',
              borderRadius: '18px',
              overflow: 'hidden',
              display: 'grid',
              gridTemplateColumns: '1.15fr 1fr',
              boxShadow: '0 12px 35px rgba(4, 38, 66, 0.08)',
              marginBottom: '56px',
            }}
          >
            <div style={{ height: '320px' }}>
              <img
                src="/assets/images/product_pearl_plus_1794200915507.jpg"
                alt="Featured Article"
                style={{ width: '100%', height: '100%', objectFit: 'cover' }}
              />
            </div>
            <div style={{ padding: '40px', display: 'flex', flexDirection: 'column', justifyContent: 'center' }}>
              <span className="hero-kicker" style={{ color: '#00a2b9', marginBottom: '8px' }}>
                FEATURED ARTICLE
              </span>
              <h2 style={{ fontSize: '26px', fontWeight: 800, color: '#042642', marginBottom: '14px' }}>
                How Electronic Water Treatment Helps Reduce Scale Build-Up
              </h2>
              <p style={{ color: '#537485', fontSize: '14px', lineHeight: 1.6, marginBottom: '24px' }}>
                Learn how HydroFLOW® technology keeps your water systems cleaner, more efficient and easier to
                maintain — without the use of chemicals.
              </p>
              <A to="/how-it-works" className="btn-teal-primary" style={{ alignSelf: 'flex-start' }}>
                <span>Read the Full Article</span>
                <ArrowRight size={15} />
              </A>
            </div>
          </div>

          {/* Latest Insights Grid */}
          <div className="section-divider-title">
            <h2>Latest Insights</h2>
          </div>

          <div className="applications-grid" style={{ gridTemplateColumns: 'repeat(3, 1fr)' }}>
            <div className="app-card">
              <div className="app-card-img-wrap">
                <img src="/assets/images/clean_shower_water_1794201856774.jpg" alt="Shower" />
              </div>
              <div className="app-card-body-extended">
                <span className="badge-best-seller" style={{ background: '#0077c8', position: 'static', display: 'inline-block', marginBottom: '10px' }}>GUIDE</span>
                <h3>5 Signs Your Water System Needs Attention</h3>
                <p>Simple indicators to help you spot scale build-up, efficiency issues and maintenance needs early.</p>
                <A to="/assessment" className="learn-more">Read More <ArrowRight size={14} /></A>
              </div>
            </div>

            <div className="app-card">
              <div className="app-card-img-wrap">
                <img src="/assets/images/app_hotel_resort_1794200917901.jpg" alt="Resort" />
              </div>
              <div className="app-card-body-extended">
                <span className="badge-best-seller" style={{ background: '#00a89d', position: 'static', display: 'inline-block', marginBottom: '10px' }}>INDUSTRY INSIGHT</span>
                <h3>Water Treatment Best Practices for Hotels and Resorts</h3>
                <p>Key strategies to improve water quality, protect equipment and reduce operational costs in hospitality environments.</p>
                <A to="/assessment" className="learn-more">Read More <ArrowRight size={14} /></A>
              </div>
            </div>

            <div className="app-card">
              <div className="app-card-img-wrap">
                <img src="/assets/images/app_industrial_1794200918397.jpg" alt="Industrial" />
              </div>
              <div className="app-card-body-extended">
                <span className="badge-best-seller" style={{ background: '#042642', position: 'static', display: 'inline-block', marginBottom: '10px' }}>TECHNOLOGY</span>
                <h3>Chemical-Free Water Treatment: A More Sustainable Choice</h3>
                <p>Discover how non-chemical solutions like HydroFLOW® support efficiency, reliability and a lower environmental impact.</p>
                <A to="/assessment" className="learn-more">Read More <ArrowRight size={14} /></A>
              </div>
            </div>
          </div>

          {/* Newsletter Subscription Banner */}
          <div className="newsletter-banner">
            <div className="newsletter-img">
              <img src="/assets/images/water_droplet_splash_1794201854825.jpg" alt="Water splash" />
            </div>
            <div className="newsletter-copy">
              <h3>Get Water System Insights Delivered to <span style={{ color: '#00c5d7' }}>Your Inbox</span></h3>
              <p>Subscribe for expert tips, product updates and practical water treatment advice.</p>
            </div>
            <div className="newsletter-input-wrap">
              <input type="email" placeholder="Enter your email address" />
              <button>Subscribe →</button>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

/* =========================================================================
   8. ASSESSMENT PAGE (MATCHING MOCKUP 2: HydroFLOW_Jamaica_Water_Assessment_Page_db52a83f.png)
   ========================================================================= */
function AssessmentPage() {
  const [submitted, setSubmitted] = useState(false);

  return (
    <>
      <section className="hero-mockup-section">
        <div className="container-xl hero-two-col">
          <div>
            <span className="hero-kicker">REQUEST AN ASSESSMENT</span>
            <h1 className="hero-headline">
              Request a Water
              <br />
              <span className="teal-text">System Assessment</span>
            </h1>
            <p className="hero-desc">
              Get expert advice, a tailored recommendation and a clear proposal for your property,
              business or facility.
            </p>
          </div>
          <div className="hero-image-wrap">
            <img src="/assets/images/cta_caribbean_1794200919028.jpg" alt="Caribbean Coastline" />
          </div>
        </div>
      </section>

      {/* Value Strip */}
      <section className="stats-strip">
        <div className="container-xl stats-grid">
          <div className="stat-item">
            <div className="stat-icon green"><ShieldCheck size={20} /></div>
            <div><div className="stat-label">Expert Assessment</div><div className="stat-sub">by Local Specialists</div></div>
          </div>
          <div className="stat-item">
            <div className="stat-icon"><Settings2 size={20} /></div>
            <div><div className="stat-label">Tailored</div><div className="stat-sub">Recommendations</div></div>
          </div>
          <div className="stat-item">
            <div className="stat-icon"><TrendingUp size={20} /></div>
            <div><div className="stat-label">Improved System</div><div className="stat-sub">Efficiency</div></div>
          </div>
          <div className="stat-item">
            <div className="stat-icon green"><Leaf size={20} /></div>
            <div><div className="stat-label">Cleaner, More</div><div className="stat-sub">Sustainable Water</div></div>
          </div>
        </div>
      </section>

      {/* Main Two-Column Hub */}
      <section className="site-section">
        <div className="container-xl assessment-two-col">
          {/* Left Form */}
          <div className="form-elevation-card">
            {submitted ? (
              <div style={{ textAlign: 'center', padding: '40px 10px' }}>
                <div style={{ width: '64px', height: '64px', borderRadius: '9999px', background: '#e0f8f3', color: '#10b981', display: 'grid', placeItems: 'center', margin: '0 auto 20px' }}>
                  <ShieldCheck size={36} />
                </div>
                <h3 style={{ fontSize: '24px', fontWeight: 800, color: '#042642', marginBottom: '10px' }}>
                  Assessment Request Submitted!
                </h3>
                <p style={{ color: '#57798b', fontSize: '14px', lineHeight: 1.6, maxWidth: '440px', margin: '0 auto 24px' }}>
                  Thank you. Our engineering team in Jamaica has received your water system information. We will evaluate your requirements and contact you within 24 business hours.
                </p>
                <button className="btn" onClick={() => setSubmitted(false)}>
                  Submit Another Assessment
                </button>
              </div>
            ) : (
              <form onSubmit={(e) => { e.preventDefault(); setSubmitted(true); }}>
                <h2>Tell Us About Your Water System Needs</h2>
                <p className="sub">
                  Complete the form below and our team will review your information, assess your needs
                  and get back to you with a recommended solution and quotation.
                </p>

                <div className="form-row-2col">
                  <div className="input-field-wrap">
                    <label>Full Name *</label>
                    <input type="text" required placeholder="e.g. Marcus Sterling" />
                  </div>
                  <div className="input-field-wrap">
                    <label>Company / Organisation</label>
                    <input type="text" placeholder="e.g. Blue Lagoon Resort Ltd" />
                  </div>
                </div>

                <div className="form-row-2col">
                  <div className="input-field-wrap">
                    <label>Email Address *</label>
                    <input type="email" required placeholder="marcus@example.com" />
                  </div>
                  <div className="input-field-wrap">
                    <label>Phone Number *</label>
                    <input type="tel" required placeholder="+1 (876) 555-0199" />
                  </div>
                </div>

                <div className="input-field-wrap" style={{ marginBottom: '16px' }}>
                  <label>Property / Facility Type *</label>
                  <select required defaultValue="Hotel / Resort">
                    <option>Hotel / Resort</option>
                    <option>Residential Home / Villa</option>
                    <option>Commercial Office / Shopping Complex</option>
                    <option>Industrial Plant / Factory</option>
                    <option>Hospital / Healthcare Facility</option>
                    <option>Pool & Aquatic Center</option>
                  </select>
                </div>

                <div style={{ marginBottom: '16px' }}>
                  <label style={{ fontSize: '12px', fontWeight: 700, color: '#1a425e' }}>
                    What are you looking to achieve? (Select all that apply) *
                  </label>
                  <div className="checkbox-multi-grid">
                    <label className="checkbox-item"><input type="checkbox" defaultChecked /> Improve water quality</label>
                    <label className="checkbox-item"><input type="checkbox" defaultChecked /> Extend equipment life</label>
                    <label className="checkbox-item"><input type="checkbox" defaultChecked /> Reduce scale build-up</label>
                    <label className="checkbox-item"><input type="checkbox" /> Address specific water issue</label>
                    <label className="checkbox-item"><input type="checkbox" defaultChecked /> Improve system efficiency</label>
                    <label className="checkbox-item"><input type="checkbox" /> New installation / system upgrade</label>
                  </div>
                </div>

                <div className="input-field-wrap" style={{ marginBottom: '18px' }}>
                  <label>Tell us more about your current setup or challenge *</label>
                  <textarea rows={4} required placeholder="e.g. current system, pipe diameters, issues you're experiencing, goals, or any relevant details." />
                </div>

                <div className="file-upload-drag-zone">
                  <UploadCloud size={24} />
                  <div>
                    <strong>Upload Supporting Documents (Optional)</strong>
                    <small>e.g. water test results, system photos, layout plans (PDF, JPG, PNG – up to 10MB)</small>
                  </div>
                </div>

                <button type="submit" className="btn full" style={{ padding: '14px', fontSize: '14px' }}>
                  Request My Assessment <ArrowRight size={16} />
                </button>
              </form>
            )}
          </div>

          {/* Right Sidebar: Photo + What Happens Next */}
          <div className="steps-right-sidebar">
            <div className="sidebar-technician-img">
              <img src="/assets/images/technician_tablet_1794201853189.jpg" alt="Technician with tablet" />
            </div>

            <div className="steps-list-wrap">
              <h3>What Happens Next?</h3>

              <div className="step-timeline-item">
                <div className="step-circle-badge">1</div>
                <div className="step-content">
                  <strong>We Review Your Request</strong>
                  <p>Our team will assess your information and may contact you for additional details.</p>
                </div>
              </div>

              <div className="step-timeline-item">
                <div className="step-circle-badge">2</div>
                <div className="step-content">
                  <strong>We Assess Your Needs</strong>
                  <p>We evaluate your water system requirements and recommend the right solution.</p>
                </div>
              </div>

              <div className="step-timeline-item">
                <div className="step-circle-badge">3</div>
                <div className="step-content">
                  <strong>You Receive a Proposal</strong>
                  <p>A clear recommendation and quotation tailored to your property or facility.</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Not Sure What You Need Callout Bar */}
        <div className="container-xl">
          <div className="specialist-callout-bar">
            <div className="left">
              <div className="droplet-icon"><Droplets size={24} /></div>
              <div>
                <h4>Not Sure What You Need?</h4>
                <p>That's okay. Our assessment helps you identify the best water treatment solution for your specific situation.</p>
              </div>
            </div>
            <A to="/contact" className="btn-hero-outline" style={{ color: '#042642', borderColor: '#00a2b9', background: '#fff' }}>
              <Headphones size={16} color="#00a2b9" />
              <span>Speak to a Specialist</span>
              <ArrowRight size={14} color="#00a2b9" />
            </A>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="cta-banner-caribbean" style={{ backgroundImage: `url('/assets/images/cta_caribbean_1794200919028.jpg')` }}>
        <div className="container-xl cta-banner-inner">
          <div className="cta-copy-wrap">
            <h2>A Healthier, More Efficient Water System Starts Here</h2>
            <p>Request your assessment today and take the first step toward cleaner, more reliable water.</p>
          </div>
          <A to="#assessment-form" className="btn-cta-teal">
            <span>Request an Assessment</span>
            <ArrowRight size={16} />
          </A>
        </div>
      </section>
    </>
  );
}

/* =========================================================================
   9. CONTACT PAGE (MATCHING MOCKUP 3: HydroFLOW_Jamaica_Contact_Page_5390f7e6.png)
   ========================================================================= */
function ContactPage() {
  const [submitted, setSubmitted] = useState(false);

  return (
    <>
      <section className="hero-mockup-section">
        <div className="container-xl hero-two-col">
          <div>
            <span className="hero-kicker">GET IN TOUCH</span>
            <h1 className="hero-headline">
              Let’s Improve
              <br />
              Your Water System
              <br />
              <span className="teal-text">Together</span>
            </h1>
            <p className="hero-desc">
              Have a question, need expert advice or ready to request a water system assessment? We're here to help.
            </p>
          </div>
          <div className="hero-image-wrap">
            <img src="/assets/images/office_building_exterior_1794201856408.jpg" alt="Headquarters" />
          </div>
        </div>
      </section>

      {/* Direct Contact Method Strip */}
      <section className="stats-strip">
        <div className="container-xl stats-grid">
          <div className="stat-item">
            <div className="stat-icon"><Phone size={20} /></div>
            <div>
              <div className="stat-label">Call Us</div>
              <div className="stat-sub">+1 (876) 555-0199</div>
            </div>
          </div>
          <div className="stat-item">
            <div className="stat-icon green"><MessageSquare size={20} /></div>
            <div>
              <div className="stat-label">WhatsApp Us</div>
              <div className="stat-sub">+1 (876) 555-0199</div>
            </div>
          </div>
          <div className="stat-item">
            <div className="stat-icon"><Mail size={20} /></div>
            <div>
              <div className="stat-label">Email Us</div>
              <div className="stat-sub">info@hydroflowjamaica.com</div>
            </div>
          </div>
          <div className="stat-item">
            <div className="stat-icon"><MapPin size={20} /></div>
            <div>
              <div className="stat-label">Visit Us</div>
              <div className="stat-sub">Kingston, Jamaica</div>
            </div>
          </div>
        </div>
      </section>

      {/* Two-Column Form & Location Section */}
      <section className="site-section">
        <div className="container-xl assessment-two-col">
          {/* Left Form */}
          <div className="form-elevation-card">
            {submitted ? (
              <div style={{ textAlign: 'center', padding: '40px 10px' }}>
                <div style={{ width: '64px', height: '64px', borderRadius: '9999px', background: '#e0f8f3', color: '#10b981', display: 'grid', placeItems: 'center', margin: '0 auto 20px' }}>
                  <ShieldCheck size={36} />
                </div>
                <h3 style={{ fontSize: '24px', fontWeight: 800, color: '#042642', marginBottom: '10px' }}>
                  Message Received!
                </h3>
                <p style={{ color: '#57798b', fontSize: '14px', lineHeight: 1.6, maxWidth: '440px', margin: '0 auto 24px' }}>
                  Thank you for reaching out to HydroFLOW Jamaica. Our technical team will review your enquiry and respond promptly.
                </p>
                <button className="btn" onClick={() => setSubmitted(false)}>
                  Send Another Message
                </button>
              </div>
            ) : (
              <form onSubmit={(e) => { e.preventDefault(); setSubmitted(true); }}>
                <h2>Request a Water System Assessment</h2>
                <p className="sub">
                  Tell us about your property or facility and our team will assess your needs,
                  recommend the right solution and provide a proposal.
                </p>

                <div className="form-row-2col">
                  <div className="input-field-wrap">
                    <label>Full Name *</label>
                    <input type="text" required placeholder="Your full name" />
                  </div>
                  <div className="input-field-wrap">
                    <label>Company / Organisation</label>
                    <input type="text" placeholder="Company Name" />
                  </div>
                </div>

                <div className="form-row-2col">
                  <div className="input-field-wrap">
                    <label>Email Address *</label>
                    <input type="email" required placeholder="you@example.com" />
                  </div>
                  <div className="input-field-wrap">
                    <label>Phone Number *</label>
                    <input type="tel" required placeholder="+1 (876) ..." />
                  </div>
                </div>

                <div className="input-field-wrap" style={{ marginBottom: '16px' }}>
                  <label>Property / Facility Type *</label>
                  <select required defaultValue="Commercial">
                    <option>Hotel / Resort</option>
                    <option>Residential Home</option>
                    <option>Commercial Complex</option>
                    <option>Industrial Plant</option>
                    <option>Pool / Aquatics</option>
                  </select>
                </div>

                <div className="input-field-wrap" style={{ marginBottom: '18px' }}>
                  <label>Tell us about your water system needs *</label>
                  <textarea rows={4} required placeholder="e.g. scale build-up, water quality, equipment issues, new installation, etc." />
                </div>

                <div className="file-upload-drag-zone">
                  <UploadCloud size={24} />
                  <div>
                    <strong>Upload Supporting Documents (Optional)</strong>
                    <small>e.g. water test results, system photos, plans (PDF, JPG, PNG – up to 10MB)</small>
                  </div>
                </div>

                <button type="submit" className="btn full" style={{ padding: '14px', fontSize: '14px' }}>
                  Submit Assessment Request <ArrowRight size={16} />
                </button>
              </form>
            )}
          </div>

          {/* Right Office Photo & Info */}
          <div>
            <div style={{ borderRadius: '16px', overflow: 'hidden', boxShadow: '0 12px 30px rgba(4, 38, 66, 0.12)' }}>
              <img src="/assets/images/office_building_exterior_1794201856408.jpg" alt="HydroFLOW Jamaica Office" />
            </div>

            <div className="contact-info-block">
              <h3>Contact Information</h3>

              <div className="contact-info-row">
                <MapPin size={18} />
                <div>
                  <strong>Location</strong>
                  <div>Kingston, Jamaica<br />(Serving Jamaica & the Caribbean)</div>
                </div>
              </div>

              <div className="contact-info-row">
                <Phone size={18} />
                <div>
                  <strong>Phone</strong>
                  <div>+1 (876) 555-0199</div>
                </div>
              </div>

              <div className="contact-info-row">
                <Mail size={18} />
                <div>
                  <strong>Email</strong>
                  <div>info@hydroflowjamaica.com</div>
                </div>
              </div>

              <div className="contact-info-row">
                <Clock size={18} />
                <div>
                  <strong>Business Hours</strong>
                  <div>Monday – Friday: 8:00 AM – 5:00 PM<br />Saturday: 8:00 AM – 12:00 PM</div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Guarantees Strip */}
        <div className="container-xl" style={{ marginTop: '50px' }}>
          <div className="stats-strip">
            <div className="stats-grid">
              <div className="stat-item">
                <div className="stat-icon"><Headphones size={20} /></div>
                <div><div className="stat-label">Expert Guidance</div><div className="stat-sub">Talk to a water treatment specialist.</div></div>
              </div>
              <div className="stat-item">
                <div className="stat-icon"><Calendar size={20} /></div>
                <div><div className="stat-label">Fast Response</div><div className="stat-sub">We’ll get back to you promptly.</div></div>
              </div>
              <div className="stat-item">
                <div className="stat-icon"><Settings2 size={20} /></div>
                <div><div className="stat-label">Tailored Solutions</div><div className="stat-sub">Recommendations for your specific needs.</div></div>
              </div>
              <div className="stat-item">
                <div className="stat-icon green"><ShieldCheck size={20} /></div>
                <div><div className="stat-label">Ongoing Support</div><div className="stat-sub">From assessment to installation and beyond.</div></div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Advisory Callout */}
      <section style={{ padding: '0 0 60px' }}>
        <div className="container-xl">
          <div
            style={{
              background: '#04223d',
              borderRadius: '16px',
              padding: '30px 40px',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'space-between',
              gap: '24px',
              color: '#fff',
            }}
          >
            <div>
              <h3 style={{ color: '#fff', fontSize: '22px', fontWeight: 800, marginBottom: '6px' }}>
                Prefer to Book a Time to Talk?
              </h3>
              <p style={{ color: '#c4e0ec', fontSize: '13px', margin: 0 }}>
                Schedule a consultation with our team at a time that works for you.
              </p>
            </div>
            <A to="/assessment" className="btn-hero-teal">
              <span>Book a Consultation</span>
              <ArrowRight size={15} />
            </A>
          </div>
        </div>
      </section>
    </>
  );
}

/* =========================================================================
   10. PRODUCT DETAIL PAGE
   ========================================================================= */
function ProductDetailPage({
  product: p,
  addToCart,
}: {
  product: Product;
  addToCart: (id: string) => void;
}) {
  return (
    <div className="site-section product-detail">
      <div className="container-xl">
        <div className="breadcrumb" style={{ display: 'flex', alignItems: 'center', gap: '8px', fontSize: '13px', color: '#688798', marginBottom: '32px' }}>
          <A to="/">Home</A>
          <ChevronRight size={13} />
          <A to="/products">Products</A>
          <ChevronRight size={13} />
          <span style={{ color: '#072e4d', fontWeight: 700 }}>{p.name}</span>
        </div>

        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '56px', alignItems: 'center' }}>
          <div style={{ background: '#f7fbfd', borderRadius: '18px', padding: '40px', border: '1px solid #e1edf0', textAlign: 'center' }}>
            <img src={p.image} alt={p.name} style={{ maxHeight: '380px', margin: '0 auto', objectFit: 'contain' }} />
          </div>
          <div>
            <span className="hero-kicker" style={{ color: '#00a2b9', marginBottom: '8px' }}>
              {p.category}
            </span>
            <h1 style={{ fontSize: '36px', fontWeight: 800, color: '#042642', margin: '0 0 10px' }}>{p.name}</h1>
            <p style={{ fontSize: '16px', color: '#4a6878', lineHeight: 1.6, marginBottom: '24px' }}>{p.subtitle}</p>

            <div style={{ height: '1px', background: '#dce8ed', margin: '24px 0' }} />

            <h3 style={{ fontSize: '16px', fontWeight: 800, color: '#072e4d', marginBottom: '14px' }}>Key Specifications</h3>
            <ul className="feature-check-list" style={{ marginBottom: '28px' }}>
              {p.details.map((t) => (
                <li key={t}><Check size={16} /> {t}</li>
              ))}
            </ul>

            <div style={{ fontSize: '24px', fontWeight: 800, color: '#008ea3', marginBottom: '24px', fontFamily: 'Manrope' }}>
              {p.priceFormatted}
            </div>

            <div style={{ display: 'flex', gap: '14px', flexWrap: 'wrap' }}>
              {p.mode === 'cart' ? (
                <button className="btn-teal-primary" onClick={() => addToCart(p.id)} style={{ padding: '13px 26px', fontSize: '14px' }}>
                  <ShoppingBag size={17} /> Add to Cart
                </button>
              ) : (
                <A to="/assessment" className="btn-teal-primary" style={{ padding: '13px 26px', fontSize: '14px' }}>
                  Request Sizing Proposal
                </A>
              )}
              <A to="/assessment" className="btn-range-outline" style={{ padding: '13px 20px', fontSize: '14px' }}>
                Speak With Specialist
              </A>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

/* =========================================================================
   11. CART & CHECKOUT PAGES
   ========================================================================= */
function CartPage({
  cart,
  updateQuantity,
  removeProduct,
}: {
  cart: Record<string, number>;
  updateQuantity: (id: string, n: number) => void;
  removeProduct: (id: string) => void;
}) {
  const chosen = products.filter((p) => (cart[p.id] || 0) > 0);
  const total = chosen.reduce((acc, p) => acc + (p.price || 0) * (cart[p.id] || 0), 0);

  return (
    <div className="site-section">
      <div className="container-xl" style={{ maxWidth: '840px' }}>
        <h1 style={{ marginBottom: '24px', fontSize: '32px' }}>Your Shopping Cart</h1>

        {chosen.length === 0 ? (
          <div className="empty">
            <ShoppingBag size={48} />
            <h3>Your cart is empty</h3>
            <A to="/products" className="btn" style={{ margin: '16px auto 0' }}>
              Explore Products
            </A>
          </div>
        ) : (
          <>
            <div className="cart-list">
              {chosen.map((p) => (
                <div className="cart-row" key={p.id}>
                  <img src={p.image} alt={p.name} />
                  <div>
                    <h3>{p.name}</h3>
                    <p style={{ color: '#008ea3', fontWeight: 800 }}>{p.priceFormatted}</p>
                  </div>
                  <div className="qty">
                    <button onClick={() => updateQuantity(p.id, -1)} aria-label="Decrease">
                      <Minus size={15} />
                    </button>
                    <span>{cart[p.id]}</span>
                    <button onClick={() => updateQuantity(p.id, 1)} aria-label="Increase">
                      <Plus size={15} />
                    </button>
                  </div>
                  <button
                    className="icon-btn"
                    onClick={() => removeProduct(p.id)}
                    aria-label="Remove"
                  >
                    <Trash2 size={18} />
                  </button>
                </div>
              ))}
            </div>

            <div className="cart-summary">
              <div
                style={{
                  display: 'flex',
                  justifyContent: 'space-between',
                  fontSize: '18px',
                  fontWeight: 800,
                  marginBottom: '16px',
                }}
              >
                <span>Total Amount:</span>
                <span style={{ color: '#008ea3' }}>JMD ${total.toLocaleString()}</span>
              </div>
              <A to="/checkout" className="btn full" style={{ textAlign: 'center' }}>
                Continue to Checkout <ArrowRight size={16} />
              </A>
            </div>
          </>
        )}
      </div>
    </div>
  );
}

function CheckoutPage({ cart }: { cart: Record<string, number> }) {
  const chosen = products.filter((p) => (cart[p.id] || 0) > 0);
  const total = chosen.reduce((acc, p) => acc + (p.price || 0) * (cart[p.id] || 0), 0);

  return (
    <div className="site-section">
      <div className="container-xl" style={{ maxWidth: '840px' }}>
        <h1 style={{ marginBottom: '20px', fontSize: '32px' }}>Order Confirmation</h1>

        <div className="note" style={{ background: '#f0f9fb', padding: '16px', borderRadius: '10px', border: '1px solid #d4ebf2', display: 'flex', gap: '12px', marginBottom: '24px' }}>
          <Info size={22} color="#00a2b9" />
          <span style={{ fontSize: '13px', color: '#3a6174' }}>
            This is an online preview. An official invoice with delivery arrangements within Jamaica will be issued upon final confirmation.
          </span>
        </div>

        <div className="checkout-preview" style={{ background: '#ffffff', border: '1px solid #dce8ed', padding: '28px', borderRadius: '14px' }}>
          <h3 style={{ fontSize: '18px', marginBottom: '16px' }}>Order Items</h3>
          {chosen.map((p) => (
            <div className="summary-line" key={p.id} style={{ display: 'flex', justifyContent: 'space-between', padding: '12px 0', borderBottom: '1px solid #edf4f7' }}>
              <span>{p.name} × {cart[p.id]}</span>
              <b>JMD ${((p.price || 0) * cart[p.id]).toLocaleString()}</b>
            </div>
          ))}
          <div className="summary-line" style={{ display: 'flex', justifyContent: 'space-between', padding: '16px 0', borderTop: '2px solid #b8dbe5', fontWeight: 800 }}>
            <span>Total Payable:</span>
            <span style={{ color: '#008ea3', fontSize: '18px' }}>JMD ${total.toLocaleString()}</span>
          </div>

          <A to="/assessment" className="btn full" style={{ marginTop: '22px', textAlign: 'center' }}>
            Confirm Order & Arrange Delivery <ArrowRight size={16} />
          </A>
        </div>
      </div>
    </div>
  );
}

/* =========================================================================
   12. GLOBAL FOOTER (5-COLUMN WITH CARIBBEAN MAP SILHOUETTE)
   ========================================================================= */
function Footer() {
  return (
    <footer className="site-footer-dark">
      <div className="container-xl">
        <div className="footer-five-cols">
          {/* Column 1: Brand & Description */}
          <div className="footer-brand-col">
            <A to="/">
              <HydroflowLogo light />
            </A>
            <p>
              Innovative, chemical-free water treatment solutions for homes, businesses and
              industrial facilities across the Caribbean.
            </p>
            <div className="footer-socials" style={{ marginTop: '12px' }}>
              <a href="https://facebook.com" target="_blank" rel="noreferrer" className="footer-social-btn" aria-label="Facebook">
                <Globe2 size={15} />
              </a>
              <a href="https://instagram.com" target="_blank" rel="noreferrer" className="footer-social-btn" aria-label="Instagram">
                <Instagram size={15} />
              </a>
              <a href="https://linkedin.com" target="_blank" rel="noreferrer" className="footer-social-btn" aria-label="LinkedIn">
                <Linkedin size={15} />
              </a>
              <a href="https://youtube.com" target="_blank" rel="noreferrer" className="footer-social-btn" aria-label="YouTube">
                <Youtube size={15} />
              </a>
            </div>
          </div>

          {/* Column 2: Quick Links */}
          <div>
            <div className="footer-col-title">Quick Links</div>
            <ul className="footer-link-list">
              <li><A to="/">Home</A></li>
              <li><A to="/how-it-works">How It Works</A></li>
              <li><A to="/applications">Applications</A></li>
              <li><A to="/products">Products</A></li>
              <li><A to="/case-studies">Case Studies</A></li>
              <li><A to="/about">About</A></li>
              <li><A to="/insights">Insights</A></li>
              <li><A to="/contact">Contact</A></li>
            </ul>
          </div>

          {/* Column 3: Applications */}
          <div>
            <div className="footer-col-title">Applications</div>
            <ul className="footer-link-list">
              <li><A to="/applications#homes">Homes</A></li>
              <li><A to="/applications#hotels">Hotels & Resorts</A></li>
              <li><A to="/applications#industrial">Industrial Facilities</A></li>
              <li><A to="/applications#commercial">Commercial Buildings</A></li>
              <li><A to="/applications#pools">Pools & Aquatics</A></li>
            </ul>
          </div>

          {/* Column 4: Contact Coordinates */}
          <div>
            <div className="footer-col-title">Contact</div>
            <div className="footer-contact-items">
              <div className="footer-contact-row">
                <MapPin size={16} />
                <span>Kingston, Jamaica<br /><small style={{ color: '#88a6b7' }}>Serving Jamaica & the Caribbean</small></span>
              </div>
              <div className="footer-contact-row">
                <Phone size={16} />
                <span>+1 (876) 555-0199</span>
              </div>
              <div className="footer-contact-row">
                <Mail size={16} />
                <span>info@hydroflowjamaica.com</span>
              </div>
            </div>
          </div>

          {/* Column 5: Caribbean Map Silhouette Graphic */}
          <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'flex-end', justifyContent: 'center' }}>
            <svg width="180" height="110" viewBox="0 0 180 110" fill="none" xmlns="http://www.w3.org/2000/svg" style={{ opacity: 0.35 }}>
              {/* Caribbean Island Chain silhouette vector */}
              <path d="M10 82C25 80 40 85 55 83C65 81 75 88 85 86C95 84 100 87 110 84C120 81 125 76 135 74C140 73 145 78 150 82C155 86 160 92 165 96C170 100 172 104 170 108C168 110 162 108 158 103C154 98 148 93 144 90C138 86 130 84 125 85C118 86 112 90 105 89C98 88 90 84 84 83C76 82 68 85 60 84C50 83 35 88 20 86C14 85 8 84 10 82Z" fill="#79cde6" />
              <path d="M60 40C70 38 80 42 90 39C98 36 108 34 116 38C124 42 130 40 138 37C144 35 150 39 155 42C158 44 154 48 148 48C140 48 132 46 124 45C114 44 104 46 95 48C85 50 72 48 64 45C58 43 54 41 60 40Z" fill="#79cde6" opacity="0.6" />
              <circle cx="70" cy="84" r="3.5" fill="#00c5d7" />
              <text x="76" y="87" fill="#79cde6" fontSize="8" fontWeight="bold">Jamaica</text>
            </svg>
          </div>
        </div>

        {/* Footer Bottom Bar */}
        <div className="footer-bottom-bar">
          <div>© {new Date().getFullYear()} HydroFLOW Jamaica by IEAC. All rights reserved.</div>
          <div style={{ display: 'flex', gap: '20px' }}>
            <span style={{ cursor: 'pointer' }}>Privacy Policy</span>
            <span>|</span>
            <span style={{ cursor: 'pointer' }}>Terms of Service</span>
            <span>|</span>
            <span style={{ cursor: 'pointer' }}>Sitemap</span>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default App;
