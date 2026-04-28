const APP_URL = 'https://app.planyourweek.co'

// Brand colors
const C = {
  bg: '#FFFCF9',         // Porcelain
  surface: '#FAF4ED',    // Parchment
  blue: '#3B82F6',       // Azure Blue
  blueBg: '#DBEAFE',     // Alice Blue
  dark: '#133950',       // Deep Space Blue
  text: '#2B2B2B',       // Graphite
  muted: '#6B7280',
  almond: '#F08F48',     // Toasted Almond
  gold: '#FFD156',       // Golden Pollen
  border: '#E8E4DF',
}

function Nav() {
  return (
    <nav style={{
      display: 'flex', alignItems: 'center', justifyContent: 'space-between',
      padding: '18px 32px', maxWidth: 1100, margin: '0 auto',
    }}>
      <span style={{ fontSize: 20, letterSpacing: '-0.01em' }}>
        <span style={{ fontWeight: 400, color: C.dark }}>plan</span>
        <span style={{ fontWeight: 400, color: C.dark }}>your</span>
        <span style={{ fontWeight: 700, color: C.blue }}>week</span>
      </span>
      <div style={{ display: 'flex', alignItems: 'center', gap: 20 }}>
        <a href="https://planyourweek.featurebase.app" target="_blank" rel="noopener noreferrer"
          style={{ fontSize: 14, color: C.muted, textDecoration: 'none' }}>Feedback</a>
        <a href={APP_URL}
          style={{
            padding: '10px 24px', borderRadius: 10,
            background: C.blue, color: '#fff',
            fontSize: 14, fontWeight: 600, textDecoration: 'none',
          }}>
          Open App
        </a>
      </div>
    </nav>
  )
}

function Hero() {
  return (
    <section style={{
      display: 'flex', alignItems: 'center', justifyContent: 'space-between',
      maxWidth: 1100, margin: '0 auto', padding: '60px 32px 80px',
      gap: 60, flexWrap: 'wrap',
    }}>
      {/* Left — copy */}
      <div style={{ flex: 1, minWidth: 320, maxWidth: 500 }}>
        <div style={{
          display: 'inline-block', padding: '6px 14px', borderRadius: 20,
          background: C.blueBg, color: C.blue,
          fontSize: 13, fontWeight: 500, marginBottom: 24,
        }}>
          Free forever. No sign-up required.
        </div>
        <h1 style={{
          fontSize: 'clamp(36px, 4.5vw, 52px)', fontWeight: 800, lineHeight: 1.08,
          letterSpacing: '-0.03em', marginBottom: 20, color: C.dark,
        }}>
          Plan your week<br />in minutes,<br />not hours
        </h1>
        <p style={{
          fontSize: 17, color: C.muted, lineHeight: 1.65, marginBottom: 32,
        }}>
          A focused weekly planner with hard limits that keep you realistic.
          Drag tasks into daily slots, set milestones, and actually finish what matters.
        </p>
        <div style={{ display: 'flex', gap: 12, flexWrap: 'wrap' }}>
          <a href={APP_URL}
            style={{
              padding: '15px 36px', borderRadius: 12,
              background: C.blue, color: '#fff',
              fontSize: 16, fontWeight: 600, textDecoration: 'none',
              boxShadow: '0 4px 14px rgba(59,130,246,0.2)',
            }}>
            Start planning — it's free
          </a>
        </div>
      </div>

      {/* Right — app preview placeholder */}
      <div style={{
        flex: 1, minWidth: 320, maxWidth: 540,
        background: C.dark, borderRadius: 16,
        padding: '24px', boxShadow: '0 20px 60px rgba(19,57,80,0.15)',
        aspectRatio: '4/3', display: 'flex', flexDirection: 'column',
        overflow: 'hidden',
      }}>
        {/* Mock top bar */}
        <div style={{ display: 'flex', gap: 6, marginBottom: 16 }}>
          <div style={{ width: 10, height: 10, borderRadius: '50%', background: '#FF5F57' }} />
          <div style={{ width: 10, height: 10, borderRadius: '50%', background: '#FFBD2E' }} />
          <div style={{ width: 10, height: 10, borderRadius: '50%', background: '#28CA42' }} />
        </div>
        {/* Mock milestone row */}
        <div style={{ display: 'flex', gap: 8, marginBottom: 16 }}>
          {['Ship landing page', 'Launch on PH', 'Get 100 users'].map(t => (
            <div key={t} style={{
              flex: 1, padding: '10px 12px', borderRadius: 8,
              border: '1px solid rgba(59,130,246,0.4)', background: 'rgba(59,130,246,0.05)',
            }}>
              <div style={{ fontSize: 9, color: C.blue, fontWeight: 600, marginBottom: 3 }}>MILESTONE</div>
              <div style={{ fontSize: 11, color: '#E5E7EB' }}>{t}</div>
            </div>
          ))}
        </div>
        {/* Mock day columns */}
        <div style={{ display: 'flex', gap: 8, flex: 1 }}>
          {['MON', 'TUE', 'WED', 'THU', 'FRI'].map((d, i) => (
            <div key={d} style={{
              flex: 1, display: 'flex', flexDirection: 'column', gap: 6,
            }}>
              <div style={{ fontSize: 10, fontWeight: 700, color: i === 0 ? C.blue : '#9CA3AF', textAlign: 'center' }}>{d}</div>
              {[...Array(2 + Math.floor(Math.random() * 2))].map((_, j) => (
                <div key={j} style={{
                  height: 18 + Math.floor(Math.random() * 12),
                  borderRadius: 4,
                  background: j === 0 ? 'rgba(59,130,246,0.15)' : 'rgba(255,255,255,0.06)',
                  borderLeft: j === 0 ? `2px solid ${C.blue}` : '2px solid transparent',
                }} />
              ))}
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

const FEATURES = [
  { icon: '🎯', title: '3 Weekly Milestones', desc: 'Set the 3 things that will move the needle. Everything else supports these.' },
  { icon: '📋', title: 'Smart Task Lists', desc: 'Organize up to 20 tasks across Work, Personal, or custom lists. Drag them into day slots.' },
  { icon: '📅', title: 'Daily Limits', desc: '1 deep work, 2 focus, 5 admin per day. Hard limits keep your day realistic.' },
  { icon: '⏱', title: 'Estimate vs Actual', desc: 'Track how long tasks really take. Get better at planning over time.' },
  { icon: '☀️', title: 'Daily Rituals', desc: '2-minute morning startup and evening shutdown. Review, plan, reflect.' },
  { icon: '📥', title: 'Capture Inbox', desc: 'Brain-dump ideas without pressure. No limit. Schedule when ready.' },
]

function Features() {
  return (
    <section style={{ padding: '80px 24px', maxWidth: 960, margin: '0 auto' }}>
      <h2 style={{
        fontSize: 'clamp(24px, 3vw, 32px)', fontWeight: 700, textAlign: 'center',
        marginBottom: 48, color: C.dark, letterSpacing: '-0.02em',
      }}>
        Everything you need. Nothing you don't.
      </h2>
      <div style={{
        display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))',
        gap: 16,
      }}>
        {FEATURES.map(f => (
          <div key={f.title} style={{
            padding: '24px', borderRadius: 14,
            background: C.surface, border: `1px solid ${C.border}`,
          }}>
            <div style={{ fontSize: 24, marginBottom: 10 }}>{f.icon}</div>
            <div style={{ fontSize: 15, fontWeight: 600, color: C.dark, marginBottom: 6 }}>{f.title}</div>
            <div style={{ fontSize: 14, color: C.muted, lineHeight: 1.55 }}>{f.desc}</div>
          </div>
        ))}
      </div>
    </section>
  )
}

function Comparison() {
  const rows = [
    ['Unlimited tasks', '20 task cap per week'],
    ['No daily limits', '8 tasks max per day'],
    ['Set and forget', 'Daily rituals built in'],
    ['Guess at time', 'Estimate vs actual tracking'],
  ]

  return (
    <section style={{ padding: '60px 24px', maxWidth: 560, margin: '0 auto' }}>
      <h2 style={{
        fontSize: 'clamp(24px, 3vw, 32px)', fontWeight: 700, textAlign: 'center',
        marginBottom: 36, color: C.dark, letterSpacing: '-0.02em',
      }}>
        Not another todo app
      </h2>
      <div style={{
        borderRadius: 14, overflow: 'hidden', border: `1px solid ${C.border}`,
      }}>
        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr' }}>
          <div style={{ padding: '12px 16px', background: '#F3F4F6', fontSize: 11, fontWeight: 600, color: '#9CA3AF', textTransform: 'uppercase', letterSpacing: '0.06em' }}>Others</div>
          <div style={{ padding: '12px 16px', background: C.blueBg, fontSize: 11, fontWeight: 600, color: C.blue, textTransform: 'uppercase', letterSpacing: '0.06em' }}>planyourweek</div>
        </div>
        {rows.map(([left, right], i) => (
          <div key={i} style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', borderTop: `1px solid ${C.border}` }}>
            <div style={{ padding: '13px 16px', fontSize: 14, color: '#9CA3AF' }}>{left}</div>
            <div style={{ padding: '13px 16px', fontSize: 14, color: C.dark, fontWeight: 500 }}>{right}</div>
          </div>
        ))}
      </div>
    </section>
  )
}

function Vision() {
  return (
    <section style={{
      padding: '70px 24px', textAlign: 'center',
      background: C.surface,
    }}>
      <p style={{
        fontSize: 'clamp(22px, 3vw, 30px)', fontWeight: 700, color: C.dark,
        lineHeight: 1.35, letterSpacing: '-0.02em',
        maxWidth: 560, margin: '0 auto',
      }}>
        "Plan your life before your meetings plan it for you."
      </p>
      <p style={{ fontSize: 14, color: C.muted, marginTop: 16, lineHeight: 1.6, maxWidth: 440, margin: '16px auto 0' }}>
        This is an early version. We're testing ideas before building the full product.
        Your feedback shapes what we build next.
      </p>
    </section>
  )
}

function CTA() {
  return (
    <section style={{
      padding: '80px 24px', textAlign: 'center',
    }}>
      <h2 style={{
        fontSize: 'clamp(28px, 4vw, 38px)', fontWeight: 800, color: C.dark,
        letterSpacing: '-0.02em', marginBottom: 12,
      }}>
        Your week, planned in minutes
      </h2>
      <p style={{ fontSize: 16, color: C.muted, marginBottom: 28 }}>
        Free forever. Works offline. Sync with Google sign-in.
      </p>
      <div style={{ display: 'flex', gap: 12, justifyContent: 'center', flexWrap: 'wrap' }}>
        <a href={APP_URL}
          style={{
            padding: '16px 44px', borderRadius: 12,
            background: C.blue, color: '#fff',
            fontSize: 17, fontWeight: 600, textDecoration: 'none',
            boxShadow: '0 4px 14px rgba(59,130,246,0.2)',
          }}>
          Start planning — it's free
        </a>
        <a href="https://planyourweek.featurebase.app" target="_blank" rel="noopener noreferrer"
          style={{
            padding: '16px 32px', borderRadius: 12,
            background: 'transparent', color: C.blue,
            fontSize: 17, fontWeight: 600, textDecoration: 'none',
            border: `1.5px solid ${C.blue}`,
          }}>
          Share feedback
        </a>
      </div>
    </section>
  )
}

function Footer() {
  return (
    <footer style={{
      padding: '20px 32px', textAlign: 'center',
      borderTop: `1px solid ${C.border}`,
      display: 'flex', justifyContent: 'center', alignItems: 'center', gap: 16,
    }}>
      <span style={{ fontSize: 13, color: '#9CA3AF' }}>
        Made by{' '}
        <a href="https://ultrafocus.co" target="_blank" rel="noopener noreferrer"
          style={{ color: C.muted, textDecoration: 'none' }}>ultrafocus</a>
      </span>
    </footer>
  )
}

export default function App() {
  return (
    <div style={{ background: C.bg }}>
      <Nav />
      <Hero />
      <Features />
      <Comparison />
      <Vision />
      <CTA />
      <Footer />
    </div>
  )
}
