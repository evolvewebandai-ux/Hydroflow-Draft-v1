import React, { useEffect, useState } from 'react';
import {
  ArrowRight,
  ArrowUpRight,
  Check,
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
} from 'lucide-react';

interface Product {
  id: string;
  name: string;
  subtitle: string;
  image: string;
  category: string;
  mode: 'cart' | 'quote';
  price: number | null;
  details: string[];
}

const products: Product[] = [
  {
    id: 'pearl',
    name: 'HydroFLOW Pearl',
    subtitle: 'Compact residential water conditioning',
    image: '/assets/pearl.svg',
    category: 'Residential',
    mode: 'cart',
    price: null,
    details: [
      'For compatible residential installations',
      'Non-invasive electronic conditioning',
      'Installation guidance available',
    ],
  },
  {
    id: 'pearl-plus',
    name: 'HydroFLOW Pearl Plus',
    subtitle: 'For larger residential applications',
    image: '/assets/pearl-plus.svg',
    category: 'Residential',
    mode: 'cart',
    price: null,
    details: [
      'Designed for suitable larger home systems',
      'Compact external installation',
      'Model suitability must be confirmed',
    ],
  },
  {
    id: 'hs40',
    name: 'HydroFLOW HS40',
    subtitle: 'Versatile residential and light-commercial unit',
    image: '/assets/hs40.svg',
    category: 'Residential / Light Commercial',
    mode: 'quote',
    price: null,
    details: [
      'Application-specific recommendation',
      'Professional sizing guidance',
      'Request local availability and pricing',
    ],
  },
  {
    id: 'commercial',
    name: 'Commercial & Industrial Systems',
    subtitle: 'Engineered solutions for complex facilities',
    image: '/assets/commercial.svg',
    category: 'Commercial / Industrial',
    mode: 'quote',
    price: null,
    details: [
      'Assessment-led selection',
      'Application and pipe-size dependent',
      'Tailored proposal and installation scope',
    ],
  },
];

const links: [string, string][] = [
  ['Home', '/'],
  ['How It Works', '/how-it-works'],
  ['Applications', '/applications'],
  ['Products', '/products'],
  ['Case Studies', '/case-studies'],
  ['About', '/about'],
  ['Insights', '/insights'],
  ['Contact', '/contact'],
];

function path() {
  return window.location.pathname || '/';
}

function navigate(to: string) {
  window.history.pushState({}, '', to);
  window.dispatchEvent(new Event('popstate'));
  window.scrollTo({ top: 0, behavior: 'instant' } as ScrollToOptions);
}

function A({
  to,
  children,
  className = '',
  onClick,
}: {
  to: string;
  children: React.ReactNode;
  className?: string;
  onClick?: () => void;
  key?: React.Key;
}) {
  return (
    <a
      href={to}
      className={className}
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

const Img = ({ src, alt = '', className = '' }: { src: string; alt?: string; className?: string }) => (
  <img src={src} alt={alt} className={className} />
);

function Btn({
  to,
  children,
  light = false,
  outline = false,
}: {
  to: string;
  children: React.ReactNode;
  light?: boolean;
  outline?: boolean;
}) {
  return (
    <A to={to} className={'btn ' + (light ? 'btn-light ' : '') + (outline ? 'btn-outline' : '')}>
      {children}
      <ArrowRight size={17} />
    </A>
  );
}

function Head({ eyebrow, title, desc }: { eyebrow: string; title: string; desc?: string }) {
  return (
    <div className="section-head">
      <span className="eyebrow">{eyebrow}</span>
      <h2>{title}</h2>
      {desc && <p>{desc}</p>}
    </div>
  );
}

export function App() {
  const [route, setRoute] = useState(path());
  const [mobile, setMobile] = useState(false);
  const [cartOpen, setCartOpen] = useState(false);
  const [cart, setCart] = useState<Record<string, number>>({});
  const [notice, setNotice] = useState('');

  useEffect(() => {
    const f = () => {
      setRoute(path());
      setMobile(false);
    };
    window.addEventListener('popstate', f);
    return () => window.removeEventListener('popstate', f);
  }, []);

  const count = (Object.values(cart) as number[]).reduce((a: number, b: number) => a + b, 0);

  const add = (id: string) => {
    setCart((c) => ({ ...c, [id]: (c[id] || 0) + 1 }));
    setCartOpen(true);
  };

  const change = (id: string, n: number) => {
    setCart((c) => ({ ...c, [id]: Math.max(0, (c[id] || 0) + n) }));
  };

  const page = route.startsWith('/products/') ? (
    <ProductDetail
      product={products.find((p) => p.id === route.split('/')[2]) || products[0]}
      add={add}
    />
  ) : route === '/how-it-works' ? (
    <How />
  ) : route === '/applications' ? (
    <Applications />
  ) : route === '/products' ? (
    <Products add={add} />
  ) : route === '/case-studies' ? (
    <Cases />
  ) : route === '/about' ? (
    <About />
  ) : route === '/insights' ? (
    <Insights />
  ) : route === '/contact' ? (
    <Contact />
  ) : route === '/assessment' ? (
    <Assessment />
  ) : route === '/cart' ? (
    <Cart cart={cart} change={change} />
  ) : route === '/checkout' ? (
    <Checkout cart={cart} />
  ) : (
    <Home add={add} />
  );

  return (
    <>
      <header className="site-header">
        <div className="container nav-wrap">
          <A to="/" className="brand">
            <span className="brand-mark">
              <Droplets size={28} />
            </span>
            <span className="brand-type">
              <strong>
                Hydro<span>FLOW</span>
              </strong>
              <small>
                JAMAICA <em>by IEAC</em>
              </small>
            </span>
          </A>
          <nav className={mobile ? 'nav-links open' : 'nav-links'}>
            {links.map(([label, url]) => (
              <A key={url} to={url} className={route === url ? 'active' : ''}>
                {label}
              </A>
            ))}
          </nav>
          <div className="nav-actions">
            <button
              className="icon-btn"
              aria-label="Open shopping cart"
              onClick={() => setCartOpen(true)}
            >
              <ShoppingBag size={21} />
              {count > 0 && <b className="count">{count}</b>}
            </button>
            <A to="/assessment" className="btn btn-sm">
              Request Assessment <ArrowUpRight size={16} />
            </A>
            <button
              className="menu-btn"
              aria-label="Toggle navigation"
              onClick={() => setMobile(!mobile)}
            >
              {mobile ? <X /> : <Menu />}
            </button>
          </div>
        </div>
      </header>

      <main>{page}</main>

      <Footer />

      <div
        className={cartOpen ? 'drawer-overlay show' : 'drawer-overlay'}
        onClick={() => setCartOpen(false)}
      />

      <aside className={cartOpen ? 'cart-drawer show' : 'cart-drawer'} aria-label="Shopping cart">
        <div className="drawer-title">
          <h3>
            Your Cart <span>({count})</span>
          </h3>
          <button className="icon-btn" onClick={() => setCartOpen(false)} aria-label="Close cart">
            <X />
          </button>
        </div>
        {count === 0 ? (
          <div className="empty">
            <ShoppingBag size={44} />
            <h3>Your cart is empty</h3>
            <p>Explore our residential products.</p>
            <Btn to="/products">View Products</Btn>
          </div>
        ) : (
          <>
            <div className="drawer-items">
              {products
                .filter((p) => (cart[p.id] || 0) > 0)
                .map((p) => (
                  <div className="cart-line" key={p.id}>
                    <Img src={p.image} />
                    <div>
                      <b>{p.name}</b>
                      <p>
                        {p.price === null ? 'Price to be confirmed' : 'JMD $' + p.price.toLocaleString()}
                      </p>
                      <div className="qty">
                        <button onClick={() => change(p.id, -1)} aria-label="Decrease quantity">
                          <Minus size={14} />
                        </button>
                        <span>{cart[p.id]}</span>
                        <button onClick={() => change(p.id, 1)} aria-label="Increase quantity">
                          <Plus size={14} />
                        </button>
                      </div>
                    </div>
                  </div>
                ))}
            </div>
            <div className="drawer-bottom">
              <p className="fineprint">
                Product pricing and checkout are demonstration-only until the approved catalogue and
                payment gateway are connected.
              </p>
              <A to="/cart" className="btn full" onClick={() => setCartOpen(false)}>
                View Cart <ArrowRight size={17} />
              </A>
            </div>
          </>
        )}
      </aside>

      {notice && (
        <div className="toast" role="status">
          {notice}
          <button onClick={() => setNotice('')}>×</button>
        </div>
      )}
    </>
  );
}

function Hero({
  tag,
  title,
  desc,
  image,
  children,
}: {
  tag: string;
  title: string;
  desc: string;
  image: string;
  children?: React.ReactNode;
}) {
  return (
    <section
      className="hero"
      style={{
        backgroundImage: `linear-gradient(90deg,rgba(3,39,70,.97) 0%,rgba(3,51,79,.89) 46%,rgba(2,48,73,.38) 100%),url('${image}')`,
      }}
    >
      <div className="container hero-inner">
        <span className="hero-tag">{tag}</span>
        <h1>{title}</h1>
        <p>{desc}</p>
        <div className="hero-buttons">
          {children || (
            <>
              <Btn to="/assessment">Request an Assessment</Btn>
              <Btn to="/products" outline>
                Explore Products
              </Btn>
            </>
          )}
        </div>
      </div>
    </section>
  );
}

function CTA({
  title = "Let's Find the Right Solution for Your Water System",
  desc = 'Tell us about your property or facility. Our team can help identify the next step.',
  image = '/assets/hospitality.svg',
}: {
  title?: string;
  desc?: string;
  image?: string;
}) {
  return (
    <section
      className="cta"
      style={{
        backgroundImage: `linear-gradient(90deg,rgba(3,46,78,.98),rgba(3,59,83,.7)),url('${image}')`,
      }}
    >
      <div className="container cta-content">
        <div>
          <span className="eyebrow light-text">START THE CONVERSATION</span>
          <h2>{title}</h2>
          <p>{desc}</p>
        </div>
        <Btn to="/assessment" light>
          Request an Assessment
        </Btn>
      </div>
    </section>
  );
}

function Home({ add }: { add: (id: string) => void }) {
  return (
    <>
      <Hero
        tag="SMARTER WATER. STRONGER SYSTEMS."
        title="Better Water Systems. Better Outcomes."
        desc="Explore electronic water-conditioning solutions for homes, hospitality and industry across Jamaica and the Caribbean."
        image="/assets/hero-water.svg"
      >
        <Btn to="/assessment">Request an Assessment</Btn>
        <Btn to="/products" outline>
          Shop Products
        </Btn>
      </Hero>
      <div className="feature-strip">
        <div className="container feature-grid">
          <div>
            <Droplets />
            <b>Water-system protection</b>
          </div>
          <div>
            <Leaf />
            <b>Reduced chemical dependence*</b>
          </div>
          <div>
            <ShieldCheck />
            <b>Non-invasive installation</b>
          </div>
          <div>
            <Globe2 />
            <b>Global technology, local guidance</b>
          </div>
        </div>
      </div>
      <section className="section">
        <div className="container">
          <Head
            eyebrow="SOLUTIONS FOR EVERY SCALE"
            title="Find Your Application"
            desc="From family homes to complex facilities, explore a solution pathway designed around your needs."
          />
          <div className="grid three">
            {[
              ['Residential', 'Protect your home’s water systems.', '/assets/residential.svg'],
              ['Hotels & Commercial', 'Support more efficient facility operations.', '/assets/hospitality.svg'],
              ['Industrial', 'Explore solutions for demanding systems.', '/assets/industrial.svg'],
            ].map(([title, desc, img]) => (
              <A to="/applications" className="image-card" key={title}>
                <Img src={img} alt={title} />
                <div>
                  <h3>{title}</h3>
                  <p>{desc}</p>
                  <span>
                    Explore solutions <ArrowRight size={16} />
                  </span>
                </div>
              </A>
            ))}
          </div>
        </div>
      </section>
      <section className="section pale">
        <div className="container">
          <Head
            eyebrow="FEATURED PRODUCTS"
            title="Explore HydroFLOW Systems"
            desc="Browse standard units or request a tailored recommendation for your installation."
          />
          <div className="grid three">
            {products.slice(0, 3).map((p) => (
              <ProductCard key={p.id} product={p} add={add} />
            ))}
          </div>
          <div className="center-action">
            <Btn to="/products" outline>
              View All Products
            </Btn>
          </div>
        </div>
      </section>
      <section className="section">
        <div className="container split">
          <div className="split-img">
            <Img
              src="/assets/pipe.svg"
              alt="Illustration of a water-conditioning unit around a pipe"
            />
          </div>
          <div className="split-copy">
            <span className="eyebrow">HOW IT WORKS</span>
            <h2>Technology Designed to Work With Your System</h2>
            <p>
              HydroFLOW uses electronic water-conditioning technology designed for selected scale and
              water-system applications, without cutting into the pipe for compatible installations.
            </p>
            <ul className="checks">
              <li>
                <Check />
                Non-invasive installation approach
              </li>
              <li>
                <Check />
                Residential to industrial applications
              </li>
              <li>
                <Check />
                Application-specific product selection
              </li>
            </ul>
            <Btn to="/how-it-works">Discover the Technology</Btn>
          </div>
        </div>
      </section>
      <section className="section pale">
        <div className="container">
          <Head eyebrow="WHERE WE WORK" title="Applications Across Industries" />
          <div className="grid four">
            {[
              ['Hotels & Resorts', '/assets/hospitality.svg'],
              ['Manufacturing', '/assets/industrial.svg'],
              ['Commercial Buildings', '/assets/facility.svg'],
              ['Pools & Aquatics', '/assets/pool.svg'],
            ].map(([n, img]) => (
              <A to="/applications" className="mini-card" key={n}>
                <Img src={img} />
                <h3>{n}</h3>
                <span>
                  Learn more <ChevronRight size={15} />
                </span>
              </A>
            ))}
          </div>
        </div>
      </section>
      <section className="section">
        <div className="container split reverse">
          <div className="split-copy">
            <span className="eyebrow">BACKED BY EXPERIENCE</span>
            <h2>International Technology. Caribbean Focus.</h2>
            <p>
              HydroFLOW technology is developed by Hydropath in the UK. IEAC-HydroFLOW aims to
              connect customers in Jamaica and the wider Caribbean with appropriate products and
              technical guidance.
            </p>
            <Btn to="/about">Get to Know Us</Btn>
          </div>
          <div className="split-img">
            <Img src="/assets/facility.svg" alt="Water-system engineering illustration" />
          </div>
        </div>
      </section>
      <CTA />
    </>
  );
}

function ProductCard({
  product: p,
  add,
}: {
  product: Product;
  add: (id: string) => void;
  key?: React.Key;
}) {
  return (
    <article className="product-card">
      <A to={'/products/' + p.id} className="product-art">
        <Img src={p.image} alt={'Illustrative ' + p.name + ' product rendering'} />
      </A>
      <div className="product-body">
        <span className="category">{p.category}</span>
        <h3>
          <A to={'/products/' + p.id}>{p.name}</A>
        </h3>
        <p>{p.subtitle}</p>
        <strong className="price">
          {p.price === null ? 'Pricing on request' : 'JMD $' + p.price.toLocaleString()}
        </strong>
        <div className="product-actions">
          {p.mode === 'cart' ? (
            <button className="btn" onClick={() => add(p.id)}>
              <ShoppingBag size={16} /> Add to Cart
            </button>
          ) : (
            <Btn to="/assessment">Request Quote</Btn>
          )}
          <A to={'/products/' + p.id} className="detail-link">
            Details <ArrowRight size={15} />
          </A>
        </div>
      </div>
    </article>
  );
}

function Products({ add }: { add: (id: string) => void }) {
  const [filter, setFilter] = useState('All');
  const filtered = products.filter((p) => filter === 'All' || p.category.includes(filter));
  return (
    <>
      <Hero
        tag="PRODUCTS & SOLUTIONS"
        title="Find the Right HydroFLOW System"
        desc="Browse residential products and explore tailored systems for commercial and industrial applications."
        image="/assets/pipe.svg"
      />
      <section className="section">
        <div className="container">
          <div className="filter-row">
            {['All', 'Residential', 'Commercial', 'Industrial'].map((f) => (
              <button
                key={f}
                className={filter === f ? 'filter active' : 'filter'}
                onClick={() => setFilter(f)}
              >
                {f}
              </button>
            ))}
          </div>
          <div className="grid three">
            {filtered.map((p) => (
              <ProductCard key={p.id} product={p} add={add} />
            ))}
          </div>
          <p className="disclaimer">
            Product visuals are original concept illustrations, not official manufacturer
            photographs. Pricing and availability must be confirmed before live checkout is enabled.
          </p>
        </div>
      </section>
      <CTA
        title="Not Sure Which System Fits?"
        desc="Share a few details about your water system and request a product recommendation."
      />
    </>
  );
}

function ProductDetail({
  product: p,
  add,
}: {
  product: Product;
  add: (id: string) => void;
}) {
  return (
    <>
      <section className="section product-detail">
        <div className="container">
          <div className="breadcrumb">
            <A to="/">Home</A>
            <ChevronRight size={13} />
            <A to="/products">Products</A>
            <ChevronRight size={13} />
            {p.name}
          </div>
          <div className="product-detail-grid">
            <div className="product-large">
              <Img src={p.image} alt={'Concept illustration of ' + p.name} />
            </div>
            <div className="detail-copy">
              <span className="eyebrow">{p.category}</span>
              <h1>{p.name}</h1>
              <p className="lead">{p.subtitle}</p>
              <div className="line" />
              <h3>Key Highlights</h3>
              <ul className="checks">
                {p.details.map((t) => (
                  <li key={t}>
                    <Check />
                    {t}
                  </li>
                ))}
              </ul>
              <div className="detail-price">
                {p.price === null
                  ? 'Contact us for confirmed pricing'
                  : 'JMD $' + p.price.toLocaleString()}
              </div>
              <div className="detail-buttons">
                {p.mode === 'cart' ? (
                  <button className="btn" onClick={() => add(p.id)}>
                    <ShoppingBag size={17} /> Add to Cart
                  </button>
                ) : (
                  <Btn to="/assessment">Request a Quote</Btn>
                )}
                <Btn to="/assessment" outline>
                  Ask a Specialist
                </Btn>
              </div>
              <p className="fineprint">
                Model selection, pricing and suitability are subject to confirmation. Checkout is
                not enabled for real transactions in this frontend demo.
              </p>
            </div>
          </div>
        </div>
      </section>
      <section className="section pale">
        <div className="container">
          <Head
            eyebrow="BEFORE YOU ORDER"
            title="The Right Fit Matters"
            desc="Confirm pipe dimensions, application and installation requirements with the HydroFLOW team before purchasing."
          />
          <div className="grid three">
            {[
              ['1', 'Describe your system'],
              ['2', 'Confirm model suitability'],
              ['3', 'Arrange purchase or assessment'],
            ].map(([n, t]) => (
              <div className="simple-card" key={n}>
                <span className="step-no">{n}</span>
                <h3>{t}</h3>
              </div>
            ))}
          </div>
        </div>
      </section>
      <CTA />
    </>
  );
}

function How() {
  return (
    <>
      <Hero
        tag="THE TECHNOLOGY"
        title="Smarter Water Conditioning. Simpler Installation."
        desc="Discover the electronic water-conditioning approach behind HydroFLOW and how to find the right system for your application."
        image="/assets/pipe.svg"
      />
      <section className="section">
        <div className="container">
          <Head eyebrow="HOW IT WORKS" title="A Clear Path From Problem to Solution" />
          <div className="grid four">
            {[
              ['01', 'Tell Us About Your System', 'Share your application and the challenge you want to address.'],
              ['02', 'Review the Recommendation', 'Our team helps identify an appropriate model or assessment.'],
              ['03', 'Plan the Installation', 'Confirm compatibility, installation requirements and scope.'],
              ['04', 'Evaluate the Results', 'Review outcomes against the goals of your water system.'],
            ].map(([n, t, d]) => (
              <div className="simple-card" key={n}>
                <span className="step-no">{n}</span>
                <h3>{t}</h3>
                <p>{d}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
      <section className="section pale">
        <div className="container split">
          <div className="split-img">
            <Img src="/assets/pipe.svg" />
          </div>
          <div className="split-copy">
            <span className="eyebrow">THE HYDROFLOW APPROACH</span>
            <h2>External Electronic Water Conditioning</h2>
            <p>
              Compatible HydroFLOW systems fit around the outside of existing pipework. Technology
              claims and performance depend on the application and should be reviewed alongside
              manufacturer documentation and appropriate system measurements.
            </p>
            <Btn to="/assessment">Discuss Your System</Btn>
          </div>
        </div>
      </section>
      <section className="section">
        <div className="container">
          <Head eyebrow="BENEFITS TO EXPLORE" title="Designed for Real-World Applications" />
          <div className="grid three">
            {[
              ['Scale-related challenges', Droplets],
              ['Operational efficiency', Settings2],
              ['Water-system care', ShieldCheck],
            ].map(([t, IconComponent]) => {
              const Icon = IconComponent as React.ElementType;
              return (
                <div className="benefit-card" key={t as string}>
                  <Icon size={30} />
                  <h3>{t as string}</h3>
                  <p>Explore suitability and expected outcomes with our team.</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>
      <CTA />
    </>
  );
}

function Applications() {
  return (
    <>
      <Hero
        tag="INDUSTRIES & APPLICATIONS"
        title="One Technology. Many Water-System Challenges."
        desc="Explore tailored water-conditioning pathways for homes, hospitality, commercial facilities and industry."
        image="/assets/hospitality.svg"
      />
      <section className="section">
        <div className="container">
          <Head eyebrow="FIND YOUR APPLICATION" title="Solutions Across Sectors" />
          <div className="grid three">
            {[
              ['Homes & Residential', 'Household water-system considerations', '/assets/residential.svg'],
              ['Hotels & Resorts', 'Hot-water, plant-room and hospitality applications', '/assets/hospitality.svg'],
              ['Manufacturing', 'Complex process and industrial water systems', '/assets/industrial.svg'],
              ['Commercial Buildings', 'Property and facilities-management applications', '/assets/facility.svg'],
              ['Pools & Aquatics', 'Water circulation and filtration considerations', '/assets/pool.svg'],
              ['Specialist Applications', 'Talk to us about your system requirements', '/assets/pipe.svg'],
            ].map(([t, d, img]) => (
              <article className="image-card" key={t}>
                <Img src={img} />
                <div>
                  <h3>{t}</h3>
                  <p>{d}</p>
                  <A to="/assessment" className="text-link">
                    Discuss an Application <ArrowRight size={16} />
                  </A>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>
      <CTA
        title="Every System Is Different"
        desc="Tell us what you're trying to improve and we’ll help determine the right next step."
      />
    </>
  );
}

function Cases() {
  return (
    <>
      <Hero
        tag="APPLICATION STORIES"
        title="See Where Water-System Solutions Make a Difference"
        desc="Explore example application categories and request verified case-study evidence relevant to your facility."
        image="/assets/hospitality.svg"
      />
      <section className="section">
        <div className="container">
          <Head
            eyebrow="EXPLORE BY INDUSTRY"
            title="Case Study Library"
            desc="These are application previews. Verified project results and customer permissions are required before publishing specific performance claims."
          />
          <div className="grid three">
            {[
              ['Hospitality', 'Hotels & Resorts', '/assets/hospitality.svg'],
              ['Commercial', 'Buildings & Facilities', '/assets/facility.svg'],
              ['Industrial', 'Manufacturing & Process Systems', '/assets/industrial.svg'],
            ].map(([cat, title, img]) => (
              <article className="image-card" key={cat}>
                <Img src={img} />
                <div>
                  <span className="category">{cat}</span>
                  <h3>{title}</h3>
                  <p>Request documented examples and technical evidence for this application.</p>
                  <A to="/assessment" className="text-link">
                    Request Case Details <ArrowRight size={16} />
                  </A>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>
      <CTA
        title="Want to See Relevant Evidence?"
        desc="Tell us about your water system and the results that matter to you."
      />
    </>
  );
}

function About() {
  return (
    <>
      <Hero
        tag="ABOUT IEAC-HYDROFLOW"
        title="Global Technology. Local Perspective."
        desc="Introducing water-conditioning technology to Caribbean homes, businesses and industry through a solutions-focused approach."
        image="/assets/hero-water.svg"
      />
      <section className="section">
        <div className="container split">
          <div className="split-copy">
            <span className="eyebrow">OUR STORY</span>
            <h2>Helping the Caribbean Explore Better Water-System Solutions</h2>
            <p>
              IEAC-HydroFLOW brings a regional perspective to HydroFLOW technology developed by
              Hydropath in the United Kingdom. Our goal is to help customers understand their options
              and select systems appropriate for their needs.
            </p>
            <p>
              From residential product guidance to commercial and industrial enquiries, the emphasis
              is on informed recommendations and practical applications.
            </p>
            <Btn to="/assessment">Speak With Our Team</Btn>
          </div>
          <div className="split-img">
            <Img src="/assets/facility.svg" />
          </div>
        </div>
      </section>
      <section className="section pale">
        <div className="container">
          <Head eyebrow="WHAT GUIDES US" title="Technical Thinking. Practical Support." />
          <div className="grid three">
            {[
              ['Solution-led advice', Settings2],
              ['Technology awareness', Droplets],
              ['Caribbean perspective', Globe2],
            ].map(([t, IconComponent]) => {
              const Icon = IconComponent as React.ElementType;
              return (
                <div className="benefit-card" key={t as string}>
                  <Icon size={32} />
                  <h3>{t as string}</h3>
                  <p>Thoughtful guidance built around your water-system needs.</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>
      <CTA />
    </>
  );
}

function Insights() {
  return (
    <>
      <Hero
        tag="INSIGHTS & RESOURCES"
        title="Better Informed. Better Water Decisions."
        desc="Learn about scale, water-system care and the questions worth asking before selecting a treatment solution."
        image="/assets/pool.svg"
      />
      <section className="section">
        <div className="container">
          <Head eyebrow="RESOURCE LIBRARY" title="Topics Worth Exploring" />
          <div className="grid three">
            {[
              ['Understanding Limescale', 'What scale means for household and commercial water systems.', '/assets/residential.svg'],
              ['Water-System Assessments', 'The questions to ask before choosing a conditioning system.', '/assets/pipe.svg'],
              ['Hospitality Water Systems', 'Considerations for facilities with complex water demands.', '/assets/hospitality.svg'],
            ].map(([t, d, img]) => (
              <article className="image-card" key={t}>
                <Img src={img} />
                <div>
                  <span className="category">RESOURCE PREVIEW</span>
                  <h3>{t}</h3>
                  <p>{d}</p>
                  <A to="/assessment" className="text-link">
                    Ask Our Team <ArrowRight size={16} />
                  </A>
                </div>
              </article>
            ))}
          </div>
          <p className="disclaimer">
            Editorial article content has not yet been supplied; these are proposed topics rather than
            published articles.
          </p>
        </div>
      </section>
      <CTA />
    </>
  );
}

function Contact() {
  return (
    <>
      <Hero
        tag="GET IN TOUCH"
        title="Let’s Talk About Your Water System"
        desc="Questions about a product, application or project? Share your requirements and our team can follow up."
        image="/assets/pool.svg"
      />
      <section className="section">
        <div className="container split align-start">
          <div className="split-copy">
            <span className="eyebrow">CONTACT OUR TEAM</span>
            <h2>How Can We Help?</h2>
            <p>
              Whether you're exploring a product for your home or a tailored solution for a
              facility, start with a few details.
            </p>
            <div className="contact-tiles">
              <div>
                <Mail />
                <span>Contact email</span>
                <strong>To be confirmed by client</strong>
              </div>
              <div>
                <Phone />
                <span>Phone / WhatsApp</span>
                <strong>To be confirmed by client</strong>
              </div>
              <div>
                <MapPin />
                <span>Service area</span>
                <strong>Jamaica & Caribbean enquiries</strong>
              </div>
            </div>
          </div>
          <Form variant="contact" />
        </div>
      </section>
    </>
  );
}

function Assessment() {
  return (
    <>
      <Hero
        tag="TAILORED SOLUTIONS START HERE"
        title="Request a Water System Assessment"
        desc="Tell us a little about your property and water-system challenge. We'll use the information to help determine an appropriate next step."
        image="/assets/hospitality.svg"
      >
        <Btn to="#assessment-form">Complete the Form</Btn>
      </Hero>
      <section className="section">
        <div className="container split align-start" id="assessment-form">
          <div className="split-copy">
            <span className="eyebrow">START YOUR ENQUIRY</span>
            <h2>Let's Understand Your Needs</h2>
            <p>Provide a few details so the right team member can review your enquiry.</p>
            <ul className="checks">
              <li>
                <Check />
                Residential, commercial and industrial enquiries
              </li>
              <li>
                <Check />
                Describe your existing system
              </li>
              <li>
                <Check />
                Share the problem you're trying to solve
              </li>
              <li>
                <Check />
                Receive guidance on the next step
              </li>
            </ul>
            <div className="note">
              <Info size={20} />
              <span>
                An assessment request does not automatically include a free or on-site inspection.
                Scope and any applicable fees will be confirmed by the team.
              </span>
            </div>
          </div>
          <Form variant="assessment" />
        </div>
      </section>
      <CTA
        title="Need Guidance Before Submitting?"
        desc="You can also use the contact page to start a general conversation."
      />
    </>
  );
}

function Form({ variant }: { variant: 'assessment' | 'contact' }) {
  const [sent, setSent] = useState(false);
  const [error, setError] = useState('');
  const [data, setData] = useState({
    name: '',
    email: '',
    phone: '',
    company: '',
    type: '',
    location: '',
    problem: '',
    notes: '',
    consent: false,
  });

  function update(k: string, v: string | boolean) {
    setData((d) => ({ ...d, [k]: v }));
  }

  function submit(e: React.FormEvent) {
    e.preventDefault();
    setError('');
    if (!data.name || !data.email || !data.problem || !data.consent) {
      setError('Please complete the required fields and consent checkbox.');
      return;
    }
    setSent(true);
  }

  return (
    <div className="form-card">
      {sent ? (
        <div className="form-success">
          <ShieldCheck size={44} />
          <h3>Form preview completed</h3>
          <p>
            Your details passed the frontend checks. This demo does not transmit or store
            submissions until a secure backend is connected.
          </p>
          <button className="btn" onClick={() => setSent(false)}>
            Return to Form <ArrowRight size={16} />
          </button>
        </div>
      ) : (
        <form onSubmit={submit}>
          <h3>{variant === 'assessment' ? 'Tell Us About Your System' : 'Send Us a Message'}</h3>
          <p className="fineprint">Fields marked * are required.</p>
          <div className="form-grid">
            <label>
              Full Name *
              <input
                value={data.name}
                onChange={(e) => update('name', e.target.value)}
                required
                placeholder="Your full name"
              />
            </label>
            <label>
              Email Address *
              <input
                type="email"
                value={data.email}
                onChange={(e) => update('email', e.target.value)}
                required
                placeholder="you@example.com"
              />
            </label>
            <label>
              Phone / WhatsApp
              <input
                type="tel"
                value={data.phone}
                onChange={(e) => update('phone', e.target.value)}
                placeholder="Your contact number"
              />
            </label>
            <label>
              Company / Property
              <input
                value={data.company}
                onChange={(e) => update('company', e.target.value)}
                placeholder="Optional"
              />
            </label>
            {variant === 'assessment' && (
              <>
                <label>
                  Application Type
                  <select value={data.type} onChange={(e) => update('type', e.target.value)}>
                    <option value="">Select application</option>
                    <option>Residential</option>
                    <option>Hotel / Resort</option>
                    <option>Commercial</option>
                    <option>Industrial</option>
                    <option>Pool / Aquatics</option>
                    <option>Other</option>
                  </select>
                </label>
                <label>
                  Location / Island
                  <input
                    value={data.location}
                    onChange={(e) => update('location', e.target.value)}
                    placeholder="e.g. Kingston, Jamaica"
                  />
                </label>
              </>
            )}
          </div>
          <label>
            {variant === 'assessment' ? 'Primary Water-System Challenge *' : 'How Can We Help? *'}
            <select
              value={data.problem}
              onChange={(e) => update('problem', e.target.value)}
              required
            >
              <option value="">Select an option</option>
              <option>Limescale / mineral deposits</option>
              <option>Water-system maintenance</option>
              <option>Cooling / boiler application</option>
              <option>Product selection</option>
              <option>Pricing / purchasing</option>
              <option>Other enquiry</option>
            </select>
          </label>
          <label>
            Additional Details
            <textarea
              rows={5}
              value={data.notes}
              onChange={(e) => update('notes', e.target.value)}
              placeholder="Describe your water system and what you'd like to improve"
            />
          </label>
          <label className="consent">
            <input
              type="checkbox"
              checked={data.consent}
              onChange={(e) => update('consent', e.target.checked)}
            />{' '}
            <span>I agree to be contacted about this enquiry. *</span>
          </label>
          {error && <p className="error">{error}</p>}
          <button className="btn full" type="submit">
            {variant === 'assessment' ? 'Preview Assessment Request' : 'Preview Message'}{' '}
            <Send size={17} />
          </button>
          <p className="fineprint">
            Demo form only — connect a secure submission endpoint and publish a privacy policy before
            launch.
          </p>
        </form>
      )}
    </div>
  );
}

function Cart({
  cart,
  change,
}: {
  cart: Record<string, number>;
  change: (id: string, n: number) => void;
}) {
  const chosen = products.filter((p) => (cart[p.id] || 0) > 0);
  return (
    <>
      <section className="section">
        <div className="container narrow">
          <div className="breadcrumb">
            <A to="/">Home</A>
            <ChevronRight size={13} />
            Cart
          </div>
          <h1>Your Shopping Cart</h1>
          {chosen.length === 0 ? (
            <div className="empty">
              <ShoppingBag size={45} />
              <h3>Your cart is empty</h3>
              <Btn to="/products">Explore Products</Btn>
            </div>
          ) : (
            <>
              <div className="cart-list">
                {chosen.map((p) => (
                  <div className="cart-row" key={p.id}>
                    <Img src={p.image} />
                    <div>
                      <h3>{p.name}</h3>
                      <p>Pricing to be confirmed</p>
                    </div>
                    <div className="qty">
                      <button onClick={() => change(p.id, -1)} aria-label="Decrease quantity">
                        <Minus size={16} />
                      </button>
                      <span>{cart[p.id]}</span>
                      <button onClick={() => change(p.id, 1)} aria-label="Increase quantity">
                        <Plus size={16} />
                      </button>
                    </div>
                    <button
                      className="icon-btn"
                      onClick={() => change(p.id, -cart[p.id])}
                      aria-label="Remove"
                    >
                      <Trash2 size={18} />
                    </button>
                  </div>
                ))}
              </div>
              <div className="cart-summary">
                <p>
                  Checkout cannot be completed until the approved prices, shipping policies and
                  payment gateway are configured.
                </p>
                <Btn to="/checkout">Continue to Checkout Preview</Btn>
              </div>
            </>
          )}
        </div>
      </section>
    </>
  );
}

function Checkout({ cart }: { cart: Record<string, number> }) {
  return (
    <section className="section">
      <div className="container narrow">
        <div className="breadcrumb">
          <A to="/cart">Cart</A>
          <ChevronRight size={13} />
          Checkout
        </div>
        <h1>Checkout Preview</h1>
        <div className="note">
          <Info />
          <span>
            This is a frontend demonstration. No payment will be collected, no order placed and no
            personal data transmitted.
          </span>
        </div>
        <div className="checkout-preview">
          <h3>Order Summary</h3>
          {products
            .filter((p) => (cart[p.id] || 0) > 0)
            .map((p) => (
              <div className="summary-line" key={p.id}>
                <span>
                  {p.name} × {cart[p.id]}
                </span>
                <b>Price pending</b>
              </div>
            ))}
          <div className="summary-line">
            <span>Shipping & taxes</span>
            <b>To be configured</b>
          </div>
          <p className="fineprint">
            Connect a supported payment gateway and server-verified product catalogue before
            enabling live checkout.
          </p>
          <Btn to="/assessment">Request Purchasing Assistance</Btn>
        </div>
      </div>
    </section>
  );
}

function Footer() {
  return (
    <footer className="footer">
      <div className="container footer-grid">
        <div className="footer-about">
          <A to="/" className="brand footer-brand">
            <span className="brand-mark">
              <Droplets size={27} />
            </span>
            <span className="brand-type">
              <strong>
                Hydro<span>FLOW</span>
              </strong>
              <small>
                JAMAICA <em>by IEAC</em>
              </small>
            </span>
          </A>
          <p>
            Water-conditioning technology and solutions-focused guidance for Jamaica and the
            Caribbean.
          </p>
          <span className="footer-small">
            Product suitability and performance vary by application.
          </span>
        </div>
        <div>
          <h4>Explore</h4>
          {links.slice(0, 5).map(([n, u]) => (
            <A to={u} key={u}>
              {n}
            </A>
          ))}
        </div>
        <div>
          <h4>Company</h4>
          {links.slice(5).map(([n, u]) => (
            <A to={u} key={u}>
              {n}
            </A>
          ))}
          <A to="/assessment">Request an Assessment</A>
        </div>
        <div>
          <h4>Get Started</h4>
          <p>Jamaica & Caribbean enquiries</p>
          <p>Contact details to be confirmed before launch.</p>
          <A to="/assessment" className="footer-cta">
            Request an Assessment <ArrowUpRight size={16} />
          </A>
        </div>
      </div>
      <div className="container footer-bottom">
        <span>© {new Date().getFullYear()} IEAC-HydroFLOW. Concept website — client review.</span>
        <span>Privacy policy and terms pending client approval.</span>
      </div>
    </footer>
  );
}

export default App;
