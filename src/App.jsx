import './App.css'
import { useEffect, useMemo, useState } from 'react'
import {
  GiftIcon,
  GlobeIcon,
  HomeIcon,
  LoanIcon,
  NftIcon,
  PoolIcon,
  TradeIcon,
  UserIcon,
  LockIcon,
  CloseIcon,
  MenuIcon,
  RadarIcon,
} from './components/Icons'

const SAVINGS_TIERS = [
  { deposit: '1-9,999', rate: '0.7%' },
  { deposit: '10,000-99,999', rate: '0.9%' },
  { deposit: '100,000-299,999', rate: '1.1%' },
  { deposit: '300,000-499,999', rate: '1.3%' },
  { deposit: '500,000-999,999', rate: '1.5%' },
  { deposit: '1,000,000-2,999,999', rate: '1.7%' },
  { deposit: '3,000,000-4,999,999', rate: '1.98%' },
  { deposit: '5,000,000-999,999,999', rate: '2.7%' },
]

const OUTPUT_ROWS = [
  { addr: '0x9fc2e74c********0e893fa213', qty: '11.014353' },
  { addr: '0x80la17fc********8fd9c7f502', qty: '0.000548' },
  { addr: '0x018cc4d9********e6818ebc43', qty: '0.301593' },
  { addr: '0xe45e5bf5********eb0b7b549', qty: '8.900132' },
  { addr: '0x018cc4d9********e6818ebc43', qty: '1.001917' },
]

const EXCHANGES = [
  'crypto.com',
  'Huobi',
  'BITFINEX',
  'BINANCE',
  'Gate.io',
  'KUCOIN',
  'Coinbase',
  'OKX',
  'kraken',
]

const POOL_ITEMS = [
  {
    nation: 'US',
    address: '0x9fc2e74c********0e893fa213',
    hashrate: '0.013884 USDC',
  },
  {
    nation: 'US',
    address: '0x018cc4d9********e6818ebc43',
    hashrate: '3.001428 USDC',
  },
  {
    nation: 'US',
    address: '0xe45e5bf5********eb0b7b549',
    hashrate: '1.1001445 USDC',
  },
  {
    nation: 'US',
    address: '0x60796884********b81ccdb7e4',
    hashrate: '2.228892 USDC',
  },
]

function Card({ title, children, subtitle }) {
  return (
    <section className="card">
      <div className="card-head">
        <h2 className="card-title">{title}</h2>
        {subtitle ? <div className="card-sub">{subtitle}</div> : null}
      </div>
      {children}
    </section>
  )
}

function DotPager() {
  return (
    <div className="dots" aria-hidden="true">
      <span className="dot" />
      <span className="dot active" />
      <span className="dot" />
      <span className="dot" />
      <span className="dot" />
    </div>
  )
}

function TopBar({ onMenu, onLogin }) {
  return (
    <header className="topbar">
      <div className="topbar-inner">
        <button
          type="button"
          className="icon-btn"
          aria-label="Menu"
          onClick={onMenu}
        >
          <MenuIcon />
        </button>
        <div className="brand">DSP</div>
        <button
          type="button"
          className="login-btn"
          aria-label="Login"
          onClick={onLogin}
        >
          Login
        </button>
      </div>
    </header>
  )
}

function SideDrawer({ open, activePath, onClose, onNavigate }) {
  const items = useMemo(
    () => [
      { label: 'Home', path: '/in', Icon: HomeIcon },
      { label: 'NFT', path: '/nft', Icon: NftIcon },
      { label: 'Trading', path: '/t', Icon: TradeIcon },
      { label: 'Pool Data', path: '/pool', Icon: PoolIcon },
      { label: 'Loan', path: '/lo', Icon: LoanIcon },
      { label: 'Paper', path: '/paper', Icon: GlobeIcon },
      { label: 'Account Login', path: '/n', Icon: UserIcon },
    ],
    []
  )

  if (!open) return null

  return (
    <div className="drawer-layer" role="dialog" aria-modal="true">
      <button
        type="button"
        className="drawer-overlay"
        aria-label="Close menu"
        onClick={onClose}
      />
      <aside className="drawer" aria-label="Menu">
        <div className="drawer-top">
          <div className="drawer-brand">DSP</div>
          <button
            type="button"
            className="icon-btn drawer-close"
            aria-label="Close"
            onClick={onClose}
          >
            <CloseIcon />
          </button>
        </div>

        <nav className="drawer-nav" aria-label="Drawer links">
          {items.map((item) => {
            const { label, path, Icon: ItemIcon } = item
            const active = activePath === path
            return (
              <button
                key={path}
                type="button"
                className={`drawer-item ${active ? 'active' : ''}`}
                onClick={() => onNavigate(path)}
              >
                <span className="drawer-ico" aria-hidden="true">
                  <ItemIcon />
                </span>
                <span className="drawer-label">{label}</span>
                <span className="drawer-chevron" aria-hidden="true">
                  {'>'}
                </span>
              </button>
            )
          })}
        </nav>
      </aside>
    </div>
  )
}

function MiniFeatureRow() {
  return (
    <div className="mini-icons" aria-label="Features">
      <div className="mini-icon">
        <HomeIcon />
        <span>Transparency</span>
      </div>
      <div className="mini-icon">
        <LockIcon />
        <span>Security</span>
      </div>
      <div className="mini-icon">
        <GlobeIcon />
        <span>Global access</span>
      </div>
      <div className="mini-icon">
        <RadarIcon />
        <span>Decentralization</span>
      </div>
      <div className="mini-icon">
        <GiftIcon />
        <span>Tamper-proof</span>
      </div>
    </div>
  )
}

function HeroIllustration() {
  return (
    <div className="hero-visual" aria-hidden="true">
      <div className="hero-coin left">USDC</div>
      <div className="hero-scale" />
      <div className="hero-coin right">$</div>
      <div className="hero-glow" />
    </div>
  )
}

function EagleMark() {
  return (
    <div className="eagle">
      <svg viewBox="0 0 400 120" role="presentation">
        <path d="M26 62c30-22 56-32 78-32 26 0 46 13 60 38 12-21 30-32 54-32 16 0 33 5 52 15 26-20 52-30 80-30 18 0 34 5 50 15-10 6-21 14-34 26-14 12-29 18-45 18-12 0-26-4-42-12-14 16-30 24-48 24-22 0-39-10-51-30-10 20-26 30-48 30-20 0-38-10-54-30-16 10-30 15-42 15-16 0-31-6-45-18C46 76 36 69 26 62z" />
        <path d="M200 98c-18 0-32-8-42-24 14 10 28 15 42 15 14 0 28-5 42-15-10 16-24 24-42 24z" />
      </svg>
      <div className="eagle-note">Terms and Conditions Apply</div>
    </div>
  )
}

function HomeScreen() {
  return (
    <div className="screen" id="home">
      <div className="hero">
        <h1 className="hero-title">Legal Challenges &amp; Emerging Opportunities</h1>
        <p className="hero-copy">
          in Blockchain Technology
        </p>
        <HeroIllustration />
        <DotPager />
      </div>

      <section className="banner-card" aria-label="Fixed-term savings plan">
        <div className="banner-title">FIXED-TERM SAVINGS PLAN</div>
        <div className="banner-arrow" aria-hidden="true">
          {'>'}
        </div>
      </section>
    </div>
  )
}

function SavingsScreen() {
  return (
    <div className="screen" id="savings">
      <Card title="FLEXIBLE SAVINGS PLAN">
        <MiniFeatureRow />

        <div className="table">
          <div className="table-row head">
            <div>Deposit(USDC)</div>
            <div className="right">Daily Interest Rate(%)</div>
          </div>
          {SAVINGS_TIERS.map((t) => (
            <div key={t.deposit} className="table-row">
              <div>{t.deposit}</div>
              <div className="right gold">{t.rate}</div>
            </div>
          ))}
        </div>

        <EagleMark />
      </Card>

      <Card title="Output">
        <div className="table">
          <div className="table-row head">
            <div>Address</div>
            <div className="right">Quantity</div>
          </div>
          {OUTPUT_ROWS.map((r) => (
            <div key={r.addr} className="table-row">
              <div className="mono">{r.addr}</div>
              <div className="right gold">{r.qty}</div>
            </div>
          ))}
        </div>
      </Card>

      <Card title="Huobi" subtitle="2027.94">
        <div className="grid3 muted">
          <div>Currency24h</div>
          <div className="center">Volume</div>
          <div className="right">Liquidity</div>
        </div>
        <div className="grid3 row">
          <div>
            <span className="coin">B</span> BitCoin
          </div>
          <div className="center">3392.92</div>
          <div className="right">238718650.48</div>
        </div>
        <div className="grid3 row">
          <div>
            <span className="coin eth">E</span> Ethereum
          </div>
          <div className="center">40529.90</div>
          <div className="right">82798955.83</div>
        </div>
      </Card>

      <div className="logo-grid" aria-label="Exchange logos">
        {EXCHANGES.map((x) => (
          <div key={x} className="logo">
            {x}
          </div>
        ))}
      </div>

      <section className="card banner-yellow">
        <div className="banner-yellow-top">
          <div className="banner-yellow-title">Computing Pool</div>
          <div className="banner-yellow-ico" aria-hidden="true">
            *
          </div>
        </div>
        <div className="muted">
          The following users are welcome to join the blockchain savings plan.
        </div>
        <div className="kv">
          <div className="kv-row">
            <div className="muted">User&apos;s nationality</div>
            <div className="gold">US</div>
          </div>
          <div className="kv-row">
            <div className="muted">Public chain address</div>
            <div className="gold mono">0x60796884********b81ccdb7e4</div>
          </div>
          <div className="kv-row">
            <div className="muted">Wallet Hashrate</div>
            <div className="gold">0.000296 USDC</div>
          </div>
        </div>
      </section>

      <section className="rule">
        <h2 className="rule-title">Daily interest rule</h2>
        <div className="rule-grid">
          <div className="rule-item">
            <div className="rule-ico" aria-hidden="true">
              OK
            </div>
            <div>
              <div className="rule-head">Flexible</div>
              <div className="muted">
                Interest payments are made every 4 hours, 6 times a day.
              </div>
            </div>
          </div>
          <div className="rule-item">
            <div className="rule-ico" aria-hidden="true">
              O
            </div>
            <div>
              <div className="rule-head">Asset safety</div>
              <div className="muted">
                Approximately 80% of reserves are short-term U.S. Treasuries.
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="info">
        <h2 className="info-title">SMART CONTRACT</h2>
        <p className="muted">
          Decentralized applications (dApps) are programs that run on nodes of a
          blockchain or peer-to-peer (P2P) network instead of relying on a
          single centralized computer.
        </p>
      </section>

      <section className="help" aria-label="Help Center">
        <div className="help-title">Help Center</div>
        <div className="help-sub">Hope it helps you</div>
      </section>

      <Card title="FAQ">
        <div className="faq">
          {[
            'Does Aave have enough security?',
            "Aave's history of development",
            'Mobile app',
            'Privacy Policy',
            'Information for Participants',
          ].map((q) => (
            <div key={q} className="faq-row">
              <div>{q}</div>
              <div className="faq-ico" aria-hidden="true">
                v
              </div>
            </div>
          ))}
        </div>
      </Card>
    </div>
  )
}

function NftScreen() {
  const metrics = [
    { label: 'Trading Volume', value: '442960', tint: 'blue' },
    { label: 'Transaction Amount', value: '99356', tint: 'purple' },
    { label: 'Nft quantity', value: '207703', tint: 'orange' },
    { label: 'Profit Users', value: '119412', tint: 'blue' },
  ]

  return (
    <div className="screen">
      <section className="video-card" aria-label="Video placeholder">
        <div className="video-strip" aria-hidden="true">
          <div className="thumb t1" />
          <div className="thumb t2" />
          <div className="thumb t3" />
          <div className="thumb t4" />
        </div>
        <div className="video-play" aria-hidden="true">
          <div className="play-btn">{'▶'}</div>
        </div>
        <div className="video-bar" aria-hidden="true">
          <div className="video-dot" />
        </div>
      </section>

      <div className="metric-grid" aria-label="NFT metrics">
        {metrics.map((m) => (
          <div key={m.label} className="metric">
            <div className={`metric-ico ${m.tint}`} aria-hidden="true" />
            <div className="metric-meta">
              <div className="metric-label">{m.label}</div>
              <div className="metric-val">{m.value}</div>
            </div>
          </div>
        ))}
      </div>

      {['HOT', 'ART', 'PFP'].map((name) => (
        <section key={name} className="nav-card" aria-label={name}>
          <div className="nav-card-left">
            <span className="nav-flag" aria-hidden="true" />
            <div className="nav-card-title">{name}</div>
          </div>
          <div className="nav-card-right" aria-hidden="true">
            {'>'}
          </div>
        </section>
      ))}
    </div>
  )
}

function TradingScreen() {
  return (
    <div className="screen">
      <div className="stats" aria-label="Trading stats">
        <div className="stat">
          <div className="stat-left">
            <span className="badge blue" aria-hidden="true" />
            <span>Total Trading Volume</span>
          </div>
          <div className="stat-val">$4,071,990,735</div>
        </div>
        <div className="stat">
          <div className="stat-left">
            <span className="badge orange" aria-hidden="true" />
            <span>Open Interest</span>
          </div>
          <div className="stat-val">$2,695,872,036</div>
        </div>
        <div className="stat">
          <div className="stat-left">
            <span className="badge purple" aria-hidden="true" />
            <span>Total Users</span>
          </div>
          <div className="stat-val">269,439</div>
        </div>
      </div>

      <Card title="Popular Currency">
        <div className="popular">
          {[
            { name: 'Dogecoin', code: 'DOGE' },
            { name: 'Polkadot', code: 'DOT' },
            { name: 'Ripple', code: 'XRP' },
            { name: 'Litecoin', code: 'LTC' },
            { name: 'Ethereum', code: 'ETH' },
            { name: 'Bitcoin', code: 'BTC' },
          ].map((c) => (
            <div key={c.code} className="popular-row">
              <div>
                <div className="muted">{c.name}</div>
                <div className="gold">{c.code}</div>
              </div>
              <div className="muted">%</div>
            </div>
          ))}
        </div>
      </Card>

      <section className="banner-wide" aria-label="Banner">
        <div className="banner-wide-left">Block chain</div>
        <div>
          <div className="banner-wide-title">BLOCKCHAIN DIGITAL CURRENCY</div>
          <div className="banner-wide-sub">Open a new pattern of future</div>
        </div>
      </section>

      <section className="cta-pill" aria-label="Liquidity saving">
        <div>Liquidity saving to earn USDC</div>
        <div className="cta-ico" aria-hidden="true">
          {'>'}
        </div>
      </section>
    </div>
  )
}

function PoolScreen() {
  return (
    <div className="screen">
      <Card title="Pool Data">
        <div className="pool-list">
          {POOL_ITEMS.map((p) => (
            <div key={p.address} className="pool-item">
              <div className="pool-row">
                <div className="muted">User&apos;s nationality</div>
                <div className="gold">{p.nation}</div>
              </div>
              <div className="pool-row">
                <div className="muted">Public chain address</div>
                <div className="gold mono">{p.address}</div>
              </div>
              <div className="pool-row">
                <div className="muted">Wallet Hashrate</div>
                <div className="gold">{p.hashrate}</div>
              </div>
            </div>
          ))}
        </div>
        <div className="pool-dots" aria-hidden="true">
          <span className="dot" />
          <span className="dot active" />
          <span className="dot" />
          <span className="dot" />
          <span className="dot" />
        </div>
      </Card>
    </div>
  )
}

function LoanScreen() {
  return (
    <div className="screen">
      <section className="loan-card" aria-label="Loan amount">
        <div>
          <div className="muted">Loan amount</div>
          <div className="loan-amt">0</div>
        </div>
        <div className="loan-art" aria-hidden="true" />
      </section>

      <section className="loan-hero" aria-label="Loan hero">
        <div className="loan-hero-art" aria-hidden="true" />
        <h2 className="loan-hero-title">Loan with a simple documents</h2>
      </section>

      <section className="apply-card" aria-label="Apply for loan">
        <div className="apply-left">
          <div className="apply-ico" aria-hidden="true">
            {'$'}
          </div>
          <div>Apply for a loan</div>
        </div>
        <button type="button" className="apply-btn">
          Apply now
        </button>
      </section>
    </div>
  )
}

function PaperScreen() {
  return (
    <div className="screen">
      <section className="paper-hero" aria-label="Paper">
        <div className="paper-mark" aria-hidden="true">
          WEB3.0
        </div>
        <h2 className="paper-title">What are the benefits of WEB3.0</h2>
        <p className="muted">
          Web 3.0 is built upon the core concepts of decentralization,
          openness, and greater user utility.
        </p>
        <p className="muted">
          In a decentralized system, information could be retrieved based on
          its content, therefore it can be held in several locations at the
          same time.
        </p>
      </section>

      <Card title="dApp">
        <p className="muted">
          Decentralized apps (dApps) run on blockchain networks instead of a
          single centralized server, improving transparency and resilience.
        </p>
      </Card>
    </div>
  )
}

function LoginScreen({ onRegister }) {
  return (
    <div className="screen">
      <h1 className="auth-title">Account Login</h1>
      <div className="auth-form" aria-label="Login form">
        <input className="auth-input" placeholder="Account" />
        <input className="auth-input" placeholder="Password" type="password" />
        <button type="button" className="auth-btn">
          Login
        </button>
        <button type="button" className="auth-link" onClick={onRegister}>
          Register
        </button>
      </div>
    </div>
  )
}

function RegisterScreen({ onLogin }) {
  return (
    <div className="screen">
      <h1 className="auth-title">Register</h1>
      <div className="auth-form" aria-label="Register form">
        <input className="auth-input" placeholder="Account" />
        <input className="auth-input" placeholder="Password" type="password" />
        <input className="auth-input" placeholder="Confirm password" type="password" />
        <button type="button" className="auth-btn">
          Create account
        </button>
        <button type="button" className="auth-link" onClick={onLogin}>
          Back to login
        </button>
      </div>
    </div>
  )
}

function normalizePath(hash) {
  if (!hash) return '/in'
  const clean = hash.replace(/^#/, '')
  if (!clean || clean === '/') return '/in'
  if (!clean.startsWith('/')) return `/${clean}`
  if (clean === '/index_clone') return '/in'
  if (clean === '/c') return '/pool'
  if (clean === '/trade') return '/t'
  if (clean === '/trading') return '/t'
  if (clean === '/loan') return '/lo'
  if (clean === '/login') return '/n'
  if (clean === '/account') return '/n'
  return clean
}

export default function App() {
  const [path, setPath] = useState(() => normalizePath(window.location.hash))
  const [drawerOpen, setDrawerOpen] = useState(false)

  useEffect(() => {
    const onHash = () => setPath(normalizePath(window.location.hash))
    window.addEventListener('hashchange', onHash)
    return () => window.removeEventListener('hashchange', onHash)
  }, [])

  useEffect(() => {
    if (!drawerOpen) return
    const onKey = (e) => {
      if (e.key === 'Escape') setDrawerOpen(false)
    }
    document.addEventListener('keydown', onKey)
    return () => document.removeEventListener('keydown', onKey)
  }, [drawerOpen])

  const navigate = (to) => {
    window.location.hash = `#${to}`
  }

  const page = useMemo(() => {
    switch (path) {
      case '/in':
        return (
          <>
            <HomeScreen />
            <SavingsScreen />
          </>
        )
      case '/nft':
        return <NftScreen />
      case '/t':
        return <TradingScreen />
      case '/pool':
        return <PoolScreen />
      case '/lo':
        return <LoanScreen />
      case '/paper':
        return <PaperScreen />
      case '/n':
        return <LoginScreen onRegister={() => navigate('/register')} />
      case '/register':
        return <RegisterScreen onLogin={() => navigate('/n')} />
      default:
        return (
          <>
            <HomeScreen />
            <SavingsScreen />
          </>
        )
    }
  }, [path])

  return (
    <div className="DSP-app">
      <TopBar onMenu={() => setDrawerOpen(true)} onLogin={() => navigate('/n')} />
      <SideDrawer
        open={drawerOpen}
        activePath={path}
        onClose={() => setDrawerOpen(false)}
        onNavigate={(to) => {
          setDrawerOpen(false)
          navigate(to)
        }}
      />
      <main className="view">
        {page}
      </main>

      <div className="checkin" aria-hidden="true">
        check-in
      </div>
    </div>
  )
}
