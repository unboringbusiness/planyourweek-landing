const APP_URL = 'https://app.planyourweek.co'

function Nav() {
  return (
    <nav style={{
      display: 'flex', alignItems: 'center', justifyContent: 'space-between',
      padding: '16px 32px', maxWidth: 1100, margin: '0 auto',
    }}>
      <span style={{ fontSize: 20, letterSpacing: '-0.01em' }}>
        <span style={{ fontWeight: 400 }}>plan</span>
        <span style={{ fontWeight: 400 }}>your</span>
        <span style={{ fontWeight: 700, color: '#3B82F6' }}>week</span>
        <span style={{ fontSize: 12, color: '#9CA3AF' }}>.co</span>
      </span>
      <a
        href={APP_URL}
        style={{
          padding: '10px 24px', borderRadius: 10,
          background: '#3B82F6', color: '#fff',
          fontSize: 14, fontWeight: 600, textDecoration: 'none',
        }}
      >
        Open App
      </a>
    </nav>
  )
}

function Hero() {
  return (
    <section style={{
      textAlign: 'center', padding: '80px 24px 60px',
      maxWidth: 720, margin: '0 auto',
    }}>
      <div style={{
        display: 'inline-block', padding: '6px 14px', borderRadius: 20,
        background: 'rgba(59,130,246,0.08)', color: '#3B82F6',
        fontSize: 13, fontWeight: 500, marginBottom: 24,
      }}>
        Free forever. No sign-up required.
      </div>
      <h1 style={{
        fontSize: 'clamp(36px, 5vw, 56px)', fontWeight: 800, lineHeight: 1.08,
        letterSpacing: '-0.03em', marginBottom: 20, color: '#111',
      }}>
        Plan your week<br />in minutes, not hours
      </h1>
      <p style={{
        fontSize: 18, color: '#6B7280', lineHeight: 1.6,
        maxWidth: 500, margin: '0 auto 36px',
      }}>
        A focused weekly planner with hard limits that keep you realistic.
        Drag tasks into daily slots, set milestones, and actually finish what matters.
      </p>
      <a
        href={APP_URL}
        style={{
          display: 'inline-block',
          padding: '15px 40px', borderRadius: 12,
          background: '#3B82F6', color: '#fff',
          fontSize: 16, fontWeight: 600, textDecoration: 'none',
          boxShadow: '0 4px 14px rgba(59,130,246,0.25)',
        }}
      >
        Start planning — it's free
      </a>
    </section>
  )
}

const FEATURES = [
  {
    icon: '🎯',
    title: '3 Weekly Milestones',
    desc: 'Set the 3 things that will move the needle. Everything else supports these.',
  },
  {
    icon: '📋',
    title: 'Smart Task Lists',
    desc: 'Organize up to 20 tasks across Work, Personal, or custom lists. Drag them into day slots when ready.',
  },
  {
    icon: '📅',
    title: 'Daily Slots with Limits',
    desc: '1 deep work, 2 focus tasks, 5 admin tasks per day. Hard limits keep your day realistic.',
  },
  {
    icon: '⏱',
    title: 'Estimate vs Actual Time',
    desc: 'Set time estimates, then see how long tasks really take. Get better at planning over time.',
  },
  {
    icon: '☀️',
    title: 'Daily Rituals',
    desc: '2-minute morning startup and evening shutdown rituals. Review, plan, reflect.',
  },
  {
    icon: '📥',
    title: 'Capture Inbox',
    desc: 'Brain-dump ideas without pressure. No limit. Schedule them when you are ready.',
  },
]

function Features() {
  return (
    <section style={{ padding: '60px 24px', maxWidth: 960, margin: '0 auto' }}>
      <h2 style={{
        fontSize: 'clamp(24px, 3vw, 34px)', fontWeight: 700, textAlign: 'center',
        marginBottom: 48, color: '#111', letterSpacing: '-0.02em',
      }}>
        Everything you need. Nothing you don't.
      </h2>
      <div style={{
        display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))',
        gap: 20,
      }}>
        {FEATURES.map(f => (
          <div key={f.title} style={{
            padding: '24px', borderRadius: 14,
            border: '1px solid #E5E7EB',
          }}>
            <div style={{ fontSize: 26, marginBottom: 10 }}>{f.icon}</div>
            <div style={{ fontSize: 15, fontWeight: 600, color: '#111', marginBottom: 6 }}>{f.title}</div>
            <div style={{ fontSize: 14, color: '#6B7280', lineHeight: 1.55 }}>{f.desc}</div>
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
    ['Set and forget', 'Daily startup + shutdown rituals'],
    ['Guess at time', 'Estimate vs actual tracking'],
  ]

  return (
    <section style={{ padding: '60px 24px', maxWidth: 600, margin: '0 auto' }}>
      <h2 style={{
        fontSize: 'clamp(24px, 3vw, 34px)', fontWeight: 700, textAlign: 'center',
        marginBottom: 36, color: '#111', letterSpacing: '-0.02em',
      }}>
        Not another todo app
      </h2>
      <div style={{
        display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '2px',
        borderRadius: 14, overflow: 'hidden', border: '1px solid #E5E7EB',
      }}>
        <div style={{ padding: '12px 16px', background: '#F9FAFB', fontSize: 12, fontWeight: 600, color: '#9CA3AF', textTransform: 'uppercase', letterSpacing: '0.05em' }}>Others</div>
        <div style={{ padding: '12px 16px', background: '#EFF6FF', fontSize: 12, fontWeight: 600, color: '#3B82F6', textTransform: 'uppercase', letterSpacing: '0.05em' }}>planyourweek</div>
        {rows.map(([left, right], i) => (
          <div key={i} style={{ display: 'contents' }}>
            <div style={{ padding: '14px 16px', background: '#FAFAFA', fontSize: 14, color: '#9CA3AF', borderTop: '1px solid #F3F4F6' }}>{left}</div>
            <div style={{ padding: '14px 16px', background: '#fff', fontSize: 14, color: '#111', fontWeight: 500, borderTop: '1px solid #F3F4F6' }}>{right}</div>
          </div>
        ))}
      </div>
    </section>
  )
}

function Vision() {
  return (
    <section style={{
      padding: '60px 24px', maxWidth: 600, margin: '0 auto', textAlign: 'center',
    }}>
      <p style={{
        fontSize: 'clamp(20px, 3vw, 28px)', fontWeight: 700, color: '#111',
        lineHeight: 1.4, letterSpacing: '-0.02em', fontStyle: 'italic',
      }}>
        "Building a world where everyone has an extra 20 hours in their week."
      </p>
      <p style={{ fontSize: 14, color: '#9CA3AF', marginTop: 12 }}>
        This is an early version. We're testing ideas before building the full product.
        <br />Your feedback shapes what we build next.
      </p>
    </section>
  )
}

function CTA() {
  return (
    <section style={{
      padding: '80px 24px', textAlign: 'center',
      background: '#F8FAFC', borderTop: '1px solid #E5E7EB',
    }}>
      <h2 style={{
        fontSize: 'clamp(28px, 4vw, 40px)', fontWeight: 800, color: '#111',
        letterSpacing: '-0.02em', marginBottom: 12,
      }}>
        Your week, planned in minutes
      </h2>
      <p style={{ fontSize: 16, color: '#6B7280', marginBottom: 28 }}>
        Free forever. Works offline. Sync with Google sign-in.
      </p>
      <div style={{ display: 'flex', gap: 12, justifyContent: 'center', flexWrap: 'wrap' }}>
        <a
          href={APP_URL}
          style={{
            display: 'inline-block',
            padding: '16px 44px', borderRadius: 12,
            background: '#3B82F6', color: '#fff',
            fontSize: 17, fontWeight: 600, textDecoration: 'none',
            boxShadow: '0 4px 14px rgba(59,130,246,0.25)',
          }}
        >
          Start planning — it's free
        </a>
        <a
          href="https://planyourweek.featurebase.app"
          target="_blank"
          rel="noopener noreferrer"
          style={{
            display: 'inline-block',
            padding: '16px 32px', borderRadius: 12,
            background: '#fff', color: '#3B82F6',
            fontSize: 17, fontWeight: 600, textDecoration: 'none',
            border: '1.5px solid #3B82F6',
          }}
        >
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
      borderTop: '1px solid #E5E7EB',
      display: 'flex', justifyContent: 'center', alignItems: 'center', gap: 16,
    }}>
      <span style={{ fontSize: 13, color: '#9CA3AF' }}>
        Made by{' '}
        <a href="https://ultrafocus.co" target="_blank" rel="noopener noreferrer" style={{ color: '#6B7280', textDecoration: 'none' }}>ultrafocus</a>
      </span>
      <span style={{ color: '#D1D5DB' }}>|</span>
      <a href="https://planyourweek.featurebase.app" target="_blank" rel="noopener noreferrer" style={{ fontSize: 13, color: '#9CA3AF', textDecoration: 'none' }}>Feedback</a>
    </footer>
  )
}

export default function App() {
  return (
    <>
      <Nav />
      <Hero />
      <Features />
      <Comparison />
      <Vision />
      <CTA />
      <Footer />
    </>
  )
}
