const APP_URL = 'https://app.planyourweek.co'

const C = {
  bg: '#FFFCF9',
  surface: '#FAF4ED',
  blue: '#3B82F6',
  blueBg: '#DBEAFE',
  dark: '#133950',
  text: '#2B2B2B',
  muted: '#6B7280',
  almond: '#F08F48',
  gold: '#FFD156',
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
          Try it free
        </a>
      </div>
    </nav>
  )
}

/* ─── Hero with StoryBrand clarity ─── */
function Hero() {
  return (
    <section style={{
      textAlign: 'center', padding: '70px 24px 40px',
      maxWidth: 680, margin: '0 auto',
    }}>
      <h1 style={{
        fontSize: 'clamp(34px, 5vw, 52px)', fontWeight: 800, lineHeight: 1.1,
        letterSpacing: '-0.03em', marginBottom: 16, color: C.dark,
      }}>
        Plan your week in minutes.<br />
        <span style={{ color: C.blue }}>Finish what matters.</span>
      </h1>
      <p style={{
        fontSize: 18, color: C.muted, lineHeight: 1.6,
        maxWidth: 480, margin: '0 auto 32px',
      }}>
        Stop overloading your week with tasks you'll never finish.
        planyourweek sets hard limits so you plan what's actually possible.
      </p>
      <a href={APP_URL}
        style={{
          display: 'inline-block',
          padding: '15px 40px', borderRadius: 12,
          background: C.blue, color: '#fff',
          fontSize: 16, fontWeight: 600, textDecoration: 'none',
          boxShadow: '0 4px 14px rgba(59,130,246,0.2)',
        }}>
        Start planning — it's free
      </a>
      <p style={{ fontSize: 13, color: '#9CA3AF', marginTop: 12 }}>
        No sign-up required. Free forever.
      </p>
    </section>
  )
}

/* ─── Full-width app preview (colorful mock like Ellie) ─── */
function AppPreview() {
  const tasks = {
    mon: [
      { text: 'Finalize pitch deck', time: '1:30', type: 'deep', done: false },
      { text: 'Team standup', time: '0:25', type: 'focus', done: true },
      { text: 'Reply to investor email', time: '0:15', type: 'admin', done: true },
      { text: 'Review PRD feedback', time: '0:20', type: 'admin', done: false },
    ],
    tue: [
      { text: 'Write blog post draft', time: '1:00', type: 'deep', done: false },
      { text: 'Client call — Acme Co', time: '0:30', type: 'focus', done: false },
      { text: 'Update project board', time: '0:15', type: 'admin', done: true },
    ],
    wed: [
      { text: 'Design sprint prep', time: '2:00', type: 'deep', done: false },
      { text: '1:1 with Sarah', time: '0:30', type: 'focus', done: false },
      { text: 'Expense reports', time: '0:20', type: 'admin', done: false },
    ],
    thu: [
      { text: 'Ship feature v2', time: '1:30', type: 'deep', done: false },
      { text: 'Product review meeting', time: '0:45', type: 'focus', done: false },
      { text: 'Book team dinner', time: '0:10', type: 'admin', done: false },
    ],
    fri: [
      { text: 'Weekly retro prep', time: '0:45', type: 'deep', done: false },
      { text: 'Demo to stakeholders', time: '0:30', type: 'focus', done: false },
      { text: 'Clean up Slack threads', time: '0:15', type: 'admin', done: true },
    ],
  }

  const typeColors = {
    deep: { bg: 'rgba(59,130,246,0.08)', border: '#3B82F6', label: '#3B82F6' },
    focus: { bg: 'rgba(240,143,72,0.08)', border: '#F08F48', label: '#F08F48' },
    admin: { bg: 'rgba(156,163,175,0.06)', border: '#D1D5DB', label: '#9CA3AF' },
  }

  const dayLabels = { mon: 'MON', tue: 'TUE', wed: 'WED', thu: 'THU', fri: 'FRI' }
  const dayDates = { mon: '28', tue: '29', wed: '30', thu: '1', fri: '2' }

  return (
    <section style={{
      padding: '20px 24px 60px', maxWidth: 1100, margin: '0 auto',
    }}>
      <div style={{
        background: '#1A1D23', borderRadius: 16, overflow: 'hidden',
        boxShadow: '0 24px 80px rgba(19,57,80,0.18)',
        padding: '0',
      }}>
        {/* Mock browser bar */}
        <div style={{
          display: 'flex', alignItems: 'center', gap: 8,
          padding: '12px 16px', borderBottom: '1px solid rgba(255,255,255,0.06)',
        }}>
          <div style={{ display: 'flex', gap: 6 }}>
            <div style={{ width: 10, height: 10, borderRadius: '50%', background: '#FF5F57' }} />
            <div style={{ width: 10, height: 10, borderRadius: '50%', background: '#FFBD2E' }} />
            <div style={{ width: 10, height: 10, borderRadius: '50%', background: '#28CA42' }} />
          </div>
          <div style={{
            flex: 1, textAlign: 'center', fontSize: 11, color: '#666',
            background: 'rgba(255,255,255,0.04)', borderRadius: 6, padding: '4px 12px',
            maxWidth: 300, margin: '0 auto',
          }}>
            app.planyourweek.co
          </div>
        </div>

        {/* Mock top bar */}
        <div style={{
          display: 'flex', alignItems: 'center', justifyContent: 'space-between',
          padding: '10px 20px', borderBottom: '1px solid rgba(255,255,255,0.06)',
        }}>
          <span style={{ fontSize: 14 }}>
            <span style={{ color: '#ccc', fontWeight: 400 }}>plan</span>
            <span style={{ color: '#ccc', fontWeight: 400 }}>your</span>
            <span style={{ color: C.blue, fontWeight: 700 }}>week</span>
          </span>
          <div style={{ display: 'flex', gap: 12, alignItems: 'center' }}>
            <span style={{ fontSize: 11, color: '#666' }}>Apr 28 – May 4</span>
            <span style={{ fontSize: 11, color: '#666', padding: '3px 8px', border: '1px solid #333', borderRadius: 4 }}>Today</span>
          </div>
        </div>

        {/* Milestone row */}
        <div style={{
          display: 'flex', gap: 10, padding: '12px 20px',
          borderBottom: '1px solid rgba(255,255,255,0.06)',
        }}>
          {['Ship pitch deck to investors', 'Close Acme Co deal', 'Launch blog v2'].map((t, i) => (
            <div key={i} style={{
              flex: 1, padding: '8px 12px', borderRadius: 8,
              border: `1.5px solid ${i === 0 ? '#10B981' : 'rgba(59,130,246,0.3)'}`,
              background: i === 0 ? 'rgba(16,185,129,0.06)' : 'rgba(59,130,246,0.03)',
            }}>
              <div style={{ fontSize: 9, color: i === 0 ? '#10B981' : C.blue, fontWeight: 600, marginBottom: 2 }}>
                Milestone {i + 1}
              </div>
              <div style={{
                fontSize: 11, color: i === 0 ? '#888' : '#ccc',
                textDecoration: i === 0 ? 'line-through' : 'none',
              }}>{t}</div>
            </div>
          ))}
        </div>

        {/* Main area: sidebar + columns */}
        <div style={{ display: 'flex', minHeight: 340 }}>
          {/* Left sidebar */}
          <div style={{
            width: 180, borderRight: '1px solid rgba(255,255,255,0.06)',
            padding: '12px 14px', flexShrink: 0,
          }}>
            <div style={{ fontSize: 10, color: '#888', fontWeight: 600, marginBottom: 10 }}>THIS WEEK <span style={{ color: '#666' }}>8/20</span></div>
            <div style={{ fontSize: 11, fontWeight: 600, color: '#ccc', marginBottom: 6 }}>Work</div>
            {['Update roadmap', 'Prep board slides', 'Review contracts'].map((t, i) => (
              <div key={i} style={{
                fontSize: 11, color: '#aaa', padding: '5px 8px', borderRadius: 5,
                background: 'rgba(255,255,255,0.03)', marginBottom: 3,
                display: 'flex', alignItems: 'center', gap: 6,
              }}>
                <div style={{ width: 12, height: 12, borderRadius: '50%', border: '1.5px solid #555', flexShrink: 0 }} />
                {t}
              </div>
            ))}
            <div style={{ fontSize: 11, fontWeight: 600, color: '#ccc', marginTop: 12, marginBottom: 6 }}>Personal</div>
            {['Gym — legs day', 'Call dentist', 'Grocery run'].map((t, i) => (
              <div key={i} style={{
                fontSize: 11, color: '#aaa', padding: '5px 8px', borderRadius: 5,
                background: 'rgba(255,255,255,0.03)', marginBottom: 3,
                display: 'flex', alignItems: 'center', gap: 6,
              }}>
                <div style={{ width: 12, height: 12, borderRadius: '50%', border: '1.5px solid #555', flexShrink: 0 }} />
                {t}
              </div>
            ))}
          </div>

          {/* Day columns */}
          <div style={{ flex: 1, display: 'flex', overflow: 'hidden' }}>
            {Object.entries(tasks).map(([day, dayTasks], dayIdx) => (
              <div key={day} style={{
                flex: 1, borderRight: dayIdx < 4 ? '1px solid rgba(255,255,255,0.04)' : 'none',
                padding: '10px 8px', display: 'flex', flexDirection: 'column', gap: 4,
              }}>
                <div style={{ textAlign: 'center', marginBottom: 6 }}>
                  <div style={{ fontSize: 10, fontWeight: 700, color: dayIdx === 0 ? C.blue : '#888' }}>{dayLabels[day]}</div>
                  <div style={{ fontSize: 22, fontWeight: 700, color: dayIdx === 0 ? C.blue : '#ccc' }}>{dayDates[day]}</div>
                </div>
                {dayTasks.map((task, i) => {
                  const tc = typeColors[task.type]
                  return (
                    <div key={i} style={{
                      padding: '7px 8px', borderRadius: 6,
                      background: tc.bg,
                      borderLeft: `2.5px solid ${tc.border}`,
                      display: 'flex', alignItems: 'flex-start', gap: 6,
                    }}>
                      <div style={{
                        width: 13, height: 13, borderRadius: '50%', flexShrink: 0, marginTop: 1,
                        border: task.done ? 'none' : `1.5px solid ${tc.border}`,
                        background: task.done ? '#10B981' : 'transparent',
                        display: 'flex', alignItems: 'center', justifyContent: 'center',
                      }}>
                        {task.done && <span style={{ fontSize: 8, color: '#fff' }}>✓</span>}
                      </div>
                      <div style={{ flex: 1, minWidth: 0 }}>
                        <div style={{
                          fontSize: 11, color: task.done ? '#666' : '#ddd',
                          textDecoration: task.done ? 'line-through' : 'none',
                          lineHeight: 1.3,
                        }}>{task.text}</div>
                      </div>
                      <span style={{ fontSize: 10, color: '#666', flexShrink: 0 }}>{task.time}</span>
                    </div>
                  )
                })}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

/* ─── 3 steps (StoryBrand plan) ─── */
function ThreeSteps() {
  const steps = [
    {
      num: '1',
      title: 'Set your 3 milestones',
      desc: 'Pick the outcomes that will move the needle this week. Everything else supports these.',
      color: C.blue,
    },
    {
      num: '2',
      title: 'Drag tasks into daily slots',
      desc: 'Hard limits per day (1 deep work, 2 focus, 5 admin) prevent overcommitting.',
      color: C.almond,
    },
    {
      num: '3',
      title: 'Start each day with a 2-min ritual',
      desc: 'Review yesterday, plan today, check capacity. End the day with a shutdown reflection.',
      color: '#10B981',
    },
  ]

  return (
    <section style={{ padding: '80px 24px', maxWidth: 800, margin: '0 auto' }}>
      <h2 style={{
        fontSize: 'clamp(24px, 3vw, 32px)', fontWeight: 700, textAlign: 'center',
        marginBottom: 48, color: C.dark, letterSpacing: '-0.02em',
      }}>
        How it works
      </h2>
      <div style={{ display: 'flex', gap: 24, flexWrap: 'wrap', justifyContent: 'center' }}>
        {steps.map(s => (
          <div key={s.num} style={{
            flex: '1 1 220px', maxWidth: 260, textAlign: 'center',
          }}>
            <div style={{
              width: 48, height: 48, borderRadius: '50%',
              background: s.color, color: '#fff',
              display: 'flex', alignItems: 'center', justifyContent: 'center',
              fontSize: 20, fontWeight: 700, margin: '0 auto 16px',
            }}>
              {s.num}
            </div>
            <div style={{ fontSize: 16, fontWeight: 600, color: C.dark, marginBottom: 6 }}>{s.title}</div>
            <div style={{ fontSize: 14, color: C.muted, lineHeight: 1.55 }}>{s.desc}</div>
          </div>
        ))}
      </div>
    </section>
  )
}

/* ─── Testimonials ─── */
function Testimonials() {
  const reviews = [
    {
      name: 'Vidhi',
      role: 'Product Manager',
      text: 'I finally stopped adding 30 tasks to my Monday. The daily limits feel restrictive at first, then freeing. I actually finish my week now.',
      color: '#FDDCBC',
    },
    {
      name: 'Raj',
      role: 'Startup Founder',
      text: 'The milestone feature changed how I think about my week. Instead of a todo list, I have 3 real goals. Everything else flows from those.',
      color: C.blueBg,
    },
    {
      name: 'Daniel',
      role: 'Freelance Designer',
      text: 'The daily startup ritual takes 2 minutes but saves me an hour of context-switching. I know exactly what I\'m doing when I sit down.',
      color: '#FFF5D6',
    },
  ]

  return (
    <section style={{ padding: '60px 24px 80px', maxWidth: 960, margin: '0 auto' }}>
      <h2 style={{
        fontSize: 'clamp(24px, 3vw, 32px)', fontWeight: 700, textAlign: 'center',
        marginBottom: 40, color: C.dark, letterSpacing: '-0.02em',
      }}>
        What people are saying
      </h2>
      <div style={{
        display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))',
        gap: 20,
      }}>
        {reviews.map(r => (
          <div key={r.name} style={{
            padding: '28px 24px', borderRadius: 16,
            background: r.color,
          }}>
            <p style={{
              fontSize: 14, color: C.text, lineHeight: 1.6,
              marginBottom: 20, fontStyle: 'italic',
            }}>
              "{r.text}"
            </p>
            <div style={{ display: 'flex', alignItems: 'center', gap: 10 }}>
              <div style={{
                width: 36, height: 36, borderRadius: '50%',
                background: 'rgba(0,0,0,0.08)',
                display: 'flex', alignItems: 'center', justifyContent: 'center',
                fontSize: 16, fontWeight: 700, color: C.dark,
              }}>
                {r.name[0]}
              </div>
              <div>
                <div style={{ fontSize: 14, fontWeight: 600, color: C.dark }}>{r.name}</div>
                <div style={{ fontSize: 12, color: C.muted }}>{r.role}</div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}

/* ─── Vision ─── */
function Vision() {
  return (
    <section style={{
      padding: '70px 24px', textAlign: 'center',
      background: C.surface,
    }}>
      <p style={{
        fontSize: 'clamp(22px, 3vw, 30px)', fontWeight: 700, color: C.dark,
        lineHeight: 1.35, letterSpacing: '-0.02em',
        maxWidth: 520, margin: '0 auto',
      }}>
        "Plan your life before your meetings plan it for you."
      </p>
      <p style={{ fontSize: 14, color: C.muted, marginTop: 16, lineHeight: 1.6, maxWidth: 440, margin: '16px auto 0' }}>
        This is an early version. We're building in public and your feedback shapes what comes next.
      </p>
    </section>
  )
}

/* ─── Final CTA ─── */
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
      <AppPreview />
      <ThreeSteps />
      <Testimonials />
      <Vision />
      <CTA />
      <Footer />
    </div>
  )
}
