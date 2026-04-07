import Link from 'next/link'

const UPCOMING = [
  { date: 'Tonight', day: 'Tuesday', topic: 'Making small talk at work', description: 'The unwritten rules of British workplace conversation — what to say, what to avoid, and how to sound natural.', spots: 4, time: '5:00pm' },
  { date: 'Tomorrow', day: 'Wednesday', topic: 'The British pub', description: 'More than just a place to drink — the pub is the heart of British social life. Learn the language, the etiquette, and what it all really means.', spots: 7, time: '5:00pm' },
  { date: 'Thursday', day: 'Thursday', topic: 'Understanding British humour', description: 'Irony, understatement, self-deprecation. Why British people say the opposite of what they mean — and how to join in.', spots: 10, time: '5:00pm' },
  { date: 'Friday', day: 'Friday', topic: 'British workplace emails', description: 'The art of the polite British email. Formal, semi-formal, and the passive-aggressive masterpiece that says everything without saying anything.', spots: 6, time: '5:00pm' },
  { date: 'Saturday', day: 'Saturday', topic: 'The Royal Family today', description: 'Kate, William, Harry, Meghan, Charles — the most discussed family in the world. Real British English through the stories everyone knows.', spots: 2, time: '5:00pm' },
]

export default function ClubPage() {
  const tonight = UPCOMING[0]

  return (
    <main style={{ fontFamily: 'Georgia, serif', maxWidth: '1000px', margin: '0 auto', padding: '0 2rem' }}>

      <nav style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', padding: '1.5rem 0', borderBottom: '1px solid #e5e5e5' }}>
        <Link href="/" style={{ textDecoration: 'none', fontSize: '24px', fontWeight: '600', letterSpacing: '-0.5px', color: '#1a1a1a' }}>
          Utt<em style={{ color: '#0F6E56', fontStyle: 'italic' }}>er</em>ly
        </Link>
        <div style={{ display: 'flex', gap: '2rem', fontSize: '14px' }}>
          <Link href="/tutors" style={{ textDecoration: 'none', color: '#666' }}>Find a tutor</Link>
          <Link href="/club" style={{ textDecoration: 'none', color: '#7C3AED', fontWeight: '600' }}>Teatime Club</Link>
          <Link href="/packs" style={{ textDecoration: 'none', color: '#666' }}>Learning packs</Link>
        </div>
        <div style={{ display: 'flex', gap: '1rem', alignItems: 'center' }}>
          <Link href="/login" style={{ textDecoration: 'none', color: '#666', fontSize: '14px' }}>Sign in</Link>
          <Link href="/register" style={{ textDecoration: 'none', background: '#0F6E56', color: 'white', padding: '8px 20px', borderRadius: '8px', fontSize: '14px' }}>Get started</Link>
        </div>
      </nav>

      <section style={{ padding: '4rem 0 3rem' }}>
        <div style={{ display: 'inline-flex', alignItems: 'center', gap: '8px', background: '#F5F3FF', border: '1px solid #DDD6FE', borderRadius: '20px', padding: '5px 14px', fontSize: '12px', color: '#7C3AED', marginBottom: '1.5rem', fontFamily: 'sans-serif' }}>
          Every day · 5:00pm · Members only · £10
        </div>
        <h1 style={{ fontSize: '52px', fontWeight: '600', lineHeight: '1.05', letterSpacing: '-2px', marginBottom: '1.25rem', color: '#1a1a1a' }}>
          The 5pm<br />
          <em style={{ color: '#7C3AED', fontStyle: 'italic' }}>Teatime Club.</em>
        </h1>
        <p style={{ fontSize: '18px', color: '#666', lineHeight: '1.7', marginBottom: '2.5rem', maxWidth: '560px' }}>
          Every evening at 5pm, ten learners gather for one hour of guided British English conversation. A new topic every night. Members only. Just £10 a session.
        </p>
        <div style={{ display: 'flex', gap: '12px' }}>
          <Link href="/register" style={{ textDecoration: 'none', background: '#7C3AED', color: 'white', padding: '14px 28px', borderRadius: '8px', fontSize: '15px', fontWeight: '500', fontFamily: 'sans-serif' }}>
            Join tonight · £10
          </Link>
          <Link href="/register" style={{ textDecoration: 'none', border: '1px solid #ccc', color: '#1a1a1a', padding: '14px 28px', borderRadius: '8px', fontSize: '15px', fontFamily: 'sans-serif' }}>
            Become a member
          </Link>
        </div>
      </section>

      <section style={{ marginBottom: '4rem' }}>
        <div style={{ background: '#F5F3FF', border: '1px solid #DDD6FE', borderRadius: '20px', padding: '2.5rem', display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '3rem', alignItems: 'center' }}>
          <div>
            <p style={{ fontSize: '11px', fontWeight: '500', letterSpacing: '2px', textTransform: 'uppercase', color: '#7C3AED', marginBottom: '0.75rem', fontFamily: 'sans-serif' }}>Tonight · 5:00pm</p>
            <h2 style={{ fontSize: '32px', fontWeight: '600', letterSpacing: '-1px', color: '#4C1D95', marginBottom: '1rem' }}>{tonight.topic}</h2>
            <p style={{ fontSize: '15px', color: '#6D28D9', lineHeight: '1.7', marginBottom: '1.5rem' }}>{tonight.description}</p>
            <div style={{ display: 'flex', alignItems: 'center', gap: '1rem', marginBottom: '1.5rem' }}>
              <div style={{ display: 'flex', gap: '4px' }}>
                {Array.from({ length: 10 }, (_, i) => (
                  <div key={i} style={{ width: '16px', height: '16px', borderRadius: '50%', background: i < (10 - tonight.spots) ? '#7C3AED' : '#EDE9FE', border: i < (10 - tonight.spots) ? 'none' : '1px solid #DDD6FE' }} />
                ))}
              </div>
              <span style={{ fontSize: '13px', color: '#7C3AED', fontWeight: '500', fontFamily: 'sans-serif' }}>{tonight.spots} places left</span>
            </div>
            <Link href="/register" style={{ display: 'inline-block', textDecoration: 'none', background: '#7C3AED', color: 'white', padding: '14px 28px', borderRadius: '10px', fontSize: '15px', fontWeight: '600', fontFamily: 'sans-serif' }}>
              Reserve my place · £10
            </Link>
          </div>
          <div>
            <h3 style={{ fontSize: '16px', fontWeight: '600', color: '#4C1D95', marginBottom: '1.25rem' }}>How a session works</h3>
            {[
              { time: '5:00pm', text: 'The room opens. Everyone is welcomed and the topic is introduced.' },
              { time: '5:10pm', text: 'Discussion materials and key vocabulary are shared with the group.' },
              { time: '5:20pm', text: 'The group takes over — members lead the conversation.' },
              { time: '5:20–6pm', text: 'One hour of real British English conversation. No pressure, no judgement.' },
            ].map(({ time, text }) => (
              <div key={time} style={{ display: 'flex', gap: '1rem', paddingBottom: '1rem', marginBottom: '1rem', borderBottom: '1px solid #DDD6FE' }}>
                <span style={{ fontSize: '12px', fontWeight: '600', color: '#7C3AED', minWidth: '56px', paddingTop: '1px', fontFamily: 'sans-serif' }}>{time}</span>
                <span style={{ fontSize: '14px', color: '#4C1D95', lineHeight: '1.5' }}>{text}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section style={{ marginBottom: '4rem' }}>
        <h2 style={{ fontSize: '28px', fontWeight: '600', letterSpacing: '-0.5px', marginBottom: '1.5rem', color: '#1a1a1a' }}>Upcoming sessions</h2>
        <div style={{ display: 'grid', gap: '1rem' }}>
          {UPCOMING.map((session, i) => (
            <div key={i} style={{ border: '1px solid #e5e5e5', borderRadius: '14px', padding: '1.25rem 1.5rem', background: 'white', display: 'flex', alignItems: 'center', gap: '1.5rem' }}>
              <div style={{ minWidth: '80px', textAlign: 'center' }}>
                <p style={{ fontSize: '13px', fontWeight: '600', color: '#7C3AED', margin: 0, fontFamily: 'sans-serif' }}>{session.date}</p>
                <p style={{ fontSize: '20px', fontWeight: '600', color: '#1a1a1a', margin: 0, fontFamily: 'sans-serif' }}>5pm</p>
              </div>
              <div style={{ flex: 1 }}>
                <h3 style={{ fontSize: '16px', fontWeight: '600', color: '#1a1a1a', margin: '0 0 4px' }}>{session.topic}</h3>
                <p style={{ fontSize: '13px', color: '#666', margin: 0, lineHeight: '1.5' }}>{session.description}</p>
              </div>
              <div style={{ textAlign: 'right', flexShrink: 0 }}>
                <p style={{ fontSize: '13px', color: session.spots <= 3 ? '#DC2626' : '#666', fontWeight: session.spots <= 3 ? '600' : '400', margin: '0 0 8px', fontFamily: 'sans-serif' }}>
                  {session.spots} places left
                </p>
                <Link href="/register" style={{ textDecoration: 'none', background: i === 0 ? '#7C3AED' : '#f5f5f0', color: i === 0 ? 'white' : '#555', padding: '8px 16px', borderRadius: '8px', fontSize: '13px', fontWeight: '500', fontFamily: 'sans-serif' }}>
                  {i === 0 ? 'Join tonight' : 'Reserve place'} · £10
                </Link>
              </div>
            </div>
          ))}
        </div>
      </section>

      <section style={{ marginBottom: '4rem', padding: '3rem', background: '#f9f9f7', border: '1px solid #e5e5e5', borderRadius: '20px' }}>
        <h2 style={{ fontSize: '28px', fontWeight: '600', letterSpacing: '-0.5px', marginBottom: '0.75rem', color: '#1a1a1a' }}>Why the Teatime Club works</h2>
        <p style={{ fontSize: '15px', color: '#666', lineHeight: '1.7', marginBottom: '2rem', maxWidth: '560px' }}>
          The hardest part of learning a language is speaking it in a real conversation, with real people, about real things. That is what the Teatime Club gives you. Every night.
        </p>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '1.5rem' }}>
          {[
            { title: 'Same time every day', body: '5pm. Every day. The same time builds a habit. Habits build fluency.' },
            { title: 'Real conversation', body: 'Not exercises. Not drills. A genuine discussion about something interesting, in British English.' },
            { title: 'Ten people only', body: 'Small enough that everyone speaks. Large enough to feel like a real group. Never more than ten.' },
          ].map(({ title, body }) => (
            <div key={title}>
              <h3 style={{ fontSize: '15px', fontWeight: '600', color: '#1a1a1a', marginBottom: '0.5rem' }}>{title}</h3>
              <p style={{ fontSize: '14px', color: '#666', lineHeight: '1.6', margin: 0 }}>{body}</p>
            </div>
          ))}
        </div>
      </section>

      <section style={{ background: '#7C3AED', margin: '0 -2rem 0', padding: '3rem 2rem', display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
        <div>
          <h2 style={{ fontFamily: 'Georgia, serif', fontSize: '28px', fontWeight: '600', color: 'white', marginBottom: '4px' }}>Join tonight at 5pm</h2>
          <p style={{ color: '#C4B5FD', fontSize: '14px', margin: 0, fontFamily: 'sans-serif' }}>{tonight.spots} places remaining · {tonight.topic}</p>
        </div>
        <Link href="/register" style={{ textDecoration: 'none', background: 'white', color: '#7C3AED', padding: '14px 28px', borderRadius: '8px', fontWeight: '600', fontSize: '15px', fontFamily: 'sans-serif' }}>
          Reserve my place · £10
        </Link>
      </section>

      <footer style={{ padding: '1.5rem 0', borderTop: '1px solid #e5e5e5', display: 'flex', justifyContent: 'space-between', alignItems: 'center', fontSize: '12px', color: '#999' }}>
        <Link href="/" style={{ textDecoration: 'none', fontFamily: 'Georgia, serif', fontSize: '16px', fontWeight: '600', color: '#1a1a1a' }}>
          Utt<em style={{ color: '#0F6E56', fontStyle: 'italic' }}>er</em>ly
        </Link>
        <p style={{ margin: 0 }}>© 2026 Utterly · British English tutoring</p>
        <div style={{ display: 'flex', gap: '1.5rem' }}>
          {['About', 'Privacy', 'Terms', 'Contact'].map(l => (
            <Link key={l} href={`/${l.toLowerCase()}`} style={{ textDecoration: 'none', color: '#999' }}>{l}</Link>
          ))}
        </div>
      </footer>

    </main>
  )
}