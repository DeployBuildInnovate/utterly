import Link from 'next/link'

export default function HomePage() {
  return (
    <main style={{ fontFamily: 'Georgia, serif', maxWidth: '900px', margin: '0 auto', padding: '0 2rem' }}>

      <nav style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', padding: '1.5rem 0', borderBottom: '1px solid #e5e5e5' }}>
        <div style={{ fontSize: '24px', fontWeight: '600', letterSpacing: '-0.5px' }}>
          Utt<em style={{ color: '#0F6E56', fontStyle: 'italic' }}>er</em>ly
        </div>
        <div style={{ display: 'flex', gap: '2rem', fontSize: '14px', color: '#666' }}>
          <Link href="/tutors" style={{ textDecoration: 'none', color: '#666' }}>Find a tutor</Link>
          <Link href="/club" style={{ textDecoration: 'none', color: '#666' }}>Teatime Club</Link>
          <Link href="/packs" style={{ textDecoration: 'none', color: '#666' }}>Learning packs</Link>
          <Link href="/tutors/apply" style={{ textDecoration: 'none', color: '#666' }}>Teach with us</Link>
        </div>
        <div style={{ display: 'flex', gap: '1rem', alignItems: 'center' }}>
          <Link href="/login" style={{ textDecoration: 'none', color: '#666', fontSize: '14px' }}>Sign in</Link>
          <Link href="/register" style={{ textDecoration: 'none', background: '#0F6E56', color: 'white', padding: '8px 20px', borderRadius: '8px', fontSize: '14px' }}>Get started</Link>
        </div>
      </nav>

      <section style={{ padding: '5rem 0 4rem' }}>
        <div style={{ display: 'inline-flex', alignItems: 'center', gap: '8px', background: '#f5f5f0', border: '1px solid #e5e5e5', borderRadius: '20px', padding: '5px 14px', fontSize: '12px', color: '#666', marginBottom: '1.5rem' }}>
          🇬🇧 Native British English speakers · live sessions
        </div>
        <h1 style={{ fontSize: '56px', fontWeight: '600', lineHeight: '1.05', letterSpacing: '-2px', marginBottom: '1.5rem', color: '#1a1a1a' }}>
          Learn British English<br />
          <em style={{ color: '#0F6E56', fontStyle: 'italic' }}>from the people who speak it.</em>
        </h1>
        <p style={{ fontSize: '18px', color: '#666', lineHeight: '1.7', marginBottom: '2.5rem', maxWidth: '520px' }}>
          Utterly connects you directly with native British English speakers who tutor and coach. Real people, live sessions, genuine British English — not an app, not an algorithm.
        </p>
        <div style={{ display: 'flex', gap: '12px' }}>
          <Link href="/tutors" style={{ textDecoration: 'none', background: '#0F6E56', color: 'white', padding: '14px 28px', borderRadius: '8px', fontSize: '15px', fontWeight: '500' }}>
            Find your tutor
          </Link>
          <Link href="/club" style={{ textDecoration: 'none', border: '1px solid #ccc', color: '#1a1a1a', padding: '14px 28px', borderRadius: '8px', fontSize: '15px' }}>
            Join tonight&apos;s club
          </Link>
        </div>
      </section>

      <section style={{ padding: '4rem 0', borderTop: '1px solid #e5e5e5' }}>
        <p style={{ fontSize: '11px', fontWeight: '500', letterSpacing: '2px', textTransform: 'uppercase', color: '#0F6E56', marginBottom: '1rem' }}>How it works</p>
        <h2 style={{ fontSize: '38px', fontWeight: '600', letterSpacing: '-1px', marginBottom: '1rem', color: '#1a1a1a' }}>Direct. Personal. British.</h2>
        <p style={{ color: '#666', marginBottom: '3rem', maxWidth: '500px', lineHeight: '1.6' }}>
          No intermediaries. No generic courses. You find a tutor you like, book a session, and learn directly from a native British English speaker.
        </p>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '1.5rem' }}>
          {[
            { n: '01', title: 'Find your tutor', body: 'Browse native British English speakers. Read their profiles, watch their intro videos, and choose someone who fits your goals.' },
            { n: '02', title: 'Book a session', body: 'Pick a time that works for you. Sessions are live, one to one, directly with your tutor. A real conversation.' },
            { n: '03', title: 'Speak British English', body: 'Your tutor guides you through real British English — pronunciation, vocabulary, idiom, register. The way it\'s actually spoken.' },
          ].map(({ n, title, body }) => (
            <div key={n} style={{ border: '1px solid #e5e5e5', borderRadius: '12px', padding: '1.5rem' }}>
              <div style={{ fontSize: '32px', fontWeight: '600', color: '#0F6E56', marginBottom: '1rem' }}>{n}</div>
              <h3 style={{ fontSize: '15px', fontWeight: '600', marginBottom: '0.5rem', color: '#1a1a1a' }}>{title}</h3>
              <p style={{ fontSize: '13px', color: '#666', lineHeight: '1.6', margin: 0 }}>{body}</p>
            </div>
          ))}
        </div>
      </section>

      <section style={{ padding: '4rem 0', borderTop: '1px solid #e5e5e5' }}>
        <p style={{ fontSize: '11px', fontWeight: '500', letterSpacing: '2px', textTransform: 'uppercase', color: '#0F6E56', marginBottom: '1rem' }}>Why Utterly</p>
        <h2 style={{ fontSize: '38px', fontWeight: '600', letterSpacing: '-1px', marginBottom: '1rem', color: '#1a1a1a' }}>British English. The real thing.</h2>
        <p style={{ color: '#666', marginBottom: '3rem', maxWidth: '520px', lineHeight: '1.6' }}>
          Every tutor on Utterly is a native British English speaker, based in the UK. British spelling, British pronunciation, British idiom — as standard, not as an option.
        </p>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '1.5rem' }}>
          {[
            { n: '01', title: 'Native British speakers only', body: 'Every tutor grew up speaking British English. The accent, the idiom, the cultural knowledge comes naturally.' },
            { n: '02', title: 'Trained and vetted', body: 'Every tutor completes our training programme before their first session. We check their English, their approach, and their ability to connect.' },
            { n: '03', title: 'The culture, not just the language', body: 'British English is inseparable from British culture. Our tutors teach both — the language and the context that makes it make sense.' },
          ].map(({ n, title, body }) => (
            <div key={n} style={{ border: '1px solid #e5e5e5', borderRadius: '12px', padding: '1.5rem' }}>
              <div style={{ fontSize: '32px', fontWeight: '600', color: '#0F6E56', marginBottom: '1rem' }}>{n}</div>
              <h3 style={{ fontSize: '15px', fontWeight: '600', marginBottom: '0.5rem', color: '#1a1a1a' }}>{title}</h3>
              <p style={{ fontSize: '13px', color: '#666', lineHeight: '1.6', margin: 0 }}>{body}</p>
            </div>
          ))}
        </div>
      </section>

      <section style={{ padding: '4rem 0', borderTop: '1px solid #e5e5e5' }}>
        <p style={{ fontSize: '11px', fontWeight: '500', letterSpacing: '2px', textTransform: 'uppercase', color: '#0F6E56', marginBottom: '1rem' }}>Ways to learn</p>
        <h2 style={{ fontSize: '38px', fontWeight: '600', letterSpacing: '-1px', marginBottom: '3rem', color: '#1a1a1a' }}>Three ways to learn with us</h2>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '1rem' }}>
          {[
            {
              title: '1-to-1 tuition',
              desc: 'Your tutor. Your pace. Your goals.',
              color: '#0F6E56',
              bg: '#F0FDF4',
              border: '#BBF7D0',
              features: ['Find a tutor who fits your level', 'Live sessions, one to one', 'Lessons built around you', 'Book as often as you like'],
              cta: 'Find a tutor',
              href: '/tutors',
            },
            {
              title: 'Group classes',
              desc: 'Small groups, structured topics.',
              color: '#B45309',
              bg: '#FFFBEB',
              border: '#FDE68A',
              features: ['Up to 8 learners per class', 'Conversation, writing, pronunciation', 'Tutor-led structured sessions', 'Weekly or one-off'],
              cta: 'Browse classes',
              href: '/lessons',
            },
            {
              title: '5pm Teatime Club',
              desc: 'Every day at 5pm. Ten people. One hour.',
              color: '#7C3AED',
              bg: '#F5F3FF',
              border: '#DDD6FE',
              features: ['Daily at 5pm — members only', 'A new topic every evening', 'Facilitated group discussion', 'Ten places per session'],
              cta: 'Join the club',
              href: '/club',
            },
          ].map(({ title, desc, color, bg, border, features, cta, href }) => (
            <div key={title} style={{ background: bg, border: `1px solid ${border}`, borderRadius: '16px', padding: '1.75rem', display: 'flex', flexDirection: 'column' }}>
              <h3 style={{ fontFamily: 'Georgia, serif', fontSize: '20px', fontWeight: '600', color, marginBottom: '0.25rem' }}>{title}</h3>
              <p style={{ fontSize: '13px', color, marginBottom: '1.25rem', opacity: 0.8 }}>{desc}</p>
              <ul style={{ listStyle: 'none', padding: 0, margin: '0 0 1.5rem', fontSize: '13px', flex: 1 }}>
                {features.map(f => (
                  <li key={f} style={{ display: 'flex', gap: '8px', padding: '4px 0', color }}>
                    <span>·</span>{f}
                  </li>
                ))}
              </ul>
              <Link href={href} style={{ display: 'block', textAlign: 'center', background: color, color: 'white', padding: '10px', borderRadius: '8px', textDecoration: 'none', fontSize: '13px', fontWeight: '500' }}>
                {cta}
              </Link>
            </div>
          ))}
        </div>
      </section>

      <section style={{ padding: '4rem 0', borderTop: '1px solid #e5e5e5' }}>
        <p style={{ fontSize: '11px', fontWeight: '500', letterSpacing: '2px', textTransform: 'uppercase', color: '#7C3AED', marginBottom: '1rem' }}>5pm Teatime Club</p>
        <h2 style={{ fontSize: '38px', fontWeight: '600', letterSpacing: '-1px', marginBottom: '1rem', color: '#1a1a1a' }}>Every day at 5pm. Ten people. One hour.</h2>
        <p style={{ color: '#666', marginBottom: '3rem', maxWidth: '500px', lineHeight: '1.6' }}>
          Join other learners for a facilitated British English conversation. A new topic every evening. Members only. Ten places per session.
        </p>
        <div style={{ background: '#F5F3FF', border: '1px solid #DDD6FE', borderRadius: '16px', padding: '2rem', display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '2rem' }}>
          <div>
            <h3 style={{ fontFamily: 'Georgia, serif', fontSize: '22px', fontWeight: '600', color: '#4C1D95', marginBottom: '1.5rem' }}>How a session works</h3>
            {[
              { time: '5:00pm', text: 'The room opens. Everyone is welcomed and the topic is introduced.' },
              { time: '5:10pm', text: 'Discussion materials and key vocabulary are shared with the group.' },
              { time: '5:20pm', text: 'The group takes over — members lead the conversation.' },
              { time: '5:20–6pm', text: 'One hour of real British English conversation practice.' },
            ].map(({ time, text }) => (
              <div key={time} style={{ display: 'flex', gap: '12px', paddingBottom: '12px', marginBottom: '12px', borderBottom: '1px solid #DDD6FE' }}>
                <span style={{ fontSize: '12px', fontWeight: '500', color: '#7C3AED', minWidth: '52px', paddingTop: '1px' }}>{time}</span>
                <span style={{ fontSize: '13px', color: '#4C1D95', lineHeight: '1.4' }}>{text}</span>
              </div>
            ))}
          </div>
          <div style={{ background: 'white', border: '1px solid #DDD6FE', borderRadius: '12px', padding: '1.5rem' }}>
            <p style={{ fontSize: '11px', fontWeight: '500', color: '#7C3AED', textTransform: 'uppercase', letterSpacing: '1px', marginBottom: '1rem' }}>Tonight · 5:00pm</p>
            <h4 style={{ fontFamily: 'Georgia, serif', fontSize: '20px', fontWeight: '600', color: '#4C1D95', marginBottom: '0.5rem' }}>Making small talk at work</h4>
            <p style={{ fontSize: '13px', color: '#7C3AED', lineHeight: '1.5', marginBottom: '1.5rem' }}>
              The unwritten rules of British workplace conversation — what to say, what to avoid, and how to sound natural.
            </p>
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '1rem' }}>
              <div style={{ display: 'flex', gap: '4px' }}>
                {Array.from({ length: 10 }, (_, i) => (
                  <div key={i} style={{ width: '14px', height: '14px', borderRadius: '50%', background: i < 6 ? '#7C3AED' : '#EDE9FE', border: i < 6 ? 'none' : '1px solid #DDD6FE' }} />
                ))}
              </div>
              <span style={{ fontSize: '12px', color: '#7C3AED', fontWeight: '500' }}>4 places left</span>
            </div>
            <Link href="/club" style={{ display: 'block', textAlign: 'center', background: '#7C3AED', color: 'white', padding: '10px', borderRadius: '8px', textDecoration: 'none', fontSize: '13px', fontWeight: '500' }}>
              Reserve my place
            </Link>
          </div>
        </div>
      </section>

      <section style={{ background: '#0F6E56', margin: '4rem -2rem 0', padding: '3rem 2rem', display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
        <div>
          <h2 style={{ fontFamily: 'Georgia, serif', fontSize: '30px', fontWeight: '600', color: 'white', marginBottom: '4px' }}>Ready to speak properly?</h2>
          <p style={{ color: '#9FE1CB', fontSize: '14px', margin: 0 }}>Find a tutor and book your first session today.</p>
        </div>
        <Link href="/register" style={{ textDecoration: 'none', background: 'white', color: '#0F6E56', padding: '14px 28px', borderRadius: '8px', fontWeight: '500', fontSize: '15px' }}>
          Get started
        </Link>
      </section>

      <footer style={{ padding: '1.5rem 0', borderTop: '1px solid #e5e5e5', display: 'flex', justifyContent: 'space-between', alignItems: 'center', fontSize: '12px', color: '#999' }}>
        <div style={{ fontFamily: 'Georgia, serif', fontSize: '16px', fontWeight: '600', color: '#1a1a1a' }}>
          Utt<em style={{ color: '#0F6E56', fontStyle: 'italic' }}>er</em>ly
        </div>
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