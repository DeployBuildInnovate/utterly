import Link from 'next/link'

const PACKS = [
  {
    id: '1',
    title: 'Everyday British English',
    level: 'A2–B1',
    topic: 'General conversation',
    description: 'The essential vocabulary and phrases for everyday life in Britain. Shopping, transport, social situations, and the small talk that makes British life tick.',
    lessons: 12,
    flashcards: 180,
    hours: 6,
    free: true,
    colour: '#0F6E56',
    bg: '#F0FDF4',
    border: '#BBF7D0',
  },
  {
    id: '2',
    title: 'British Workplace English',
    level: 'B1–B2',
    topic: 'Professional',
    description: 'Meetings, emails, presentations, and small talk. Everything you need to sound confident and professional in a British working environment.',
    lessons: 10,
    flashcards: 150,
    hours: 5,
    free: false,
    colour: '#B45309',
    bg: '#FFFBEB',
    border: '#FDE68A',
  },
  {
    id: '3',
    title: 'Iconic Britain',
    level: 'B1–B2',
    topic: 'Culture',
    description: 'The red telephone box, the pub, the BBC, the Royal Family, the queue. Ten iconic British things — and the language, culture, and history behind each one.',
    lessons: 10,
    flashcards: 120,
    hours: 5,
    free: false,
    colour: '#7C3AED',
    bg: '#F5F3FF',
    border: '#DDD6FE',
  },
  {
    id: '4',
    title: 'British Pronunciation',
    level: 'A2–C1',
    topic: 'Pronunciation',
    description: 'The sounds that make British English sound British. Vowels, consonants, connected speech, stress, and intonation — with audio examples and practice exercises.',
    lessons: 8,
    flashcards: 100,
    hours: 4,
    free: false,
    colour: '#0369A1',
    bg: '#F0F9FF',
    border: '#BAE6FD',
  },
  {
    id: '5',
    title: 'London Life',
    level: 'B1–B2',
    topic: 'Culture',
    description: 'The city, the neighbourhoods, the people, the language. From Brixton Market to Canary Wharf — British English as it is spoken in the capital.',
    lessons: 10,
    flashcards: 130,
    hours: 5,
    free: false,
    colour: '#DC2626',
    bg: '#FFF1F2',
    border: '#FECDD3',
  },
  {
    id: '6',
    title: 'Advanced British English',
    level: 'C1–C2',
    topic: 'Advanced',
    description: 'Register, nuance, idiom, and the cultural subtext that native speakers use without thinking. For learners who want to go beyond fluent to genuinely natural.',
    lessons: 12,
    flashcards: 200,
    hours: 8,
    free: false,
    colour: '#1a1a1a',
    bg: '#f9f9f7',
    border: '#e5e5e5',
  },
]

const LEVELS = ['All levels', 'A1–A2', 'A2–B1', 'B1–B2', 'C1–C2']
const TOPICS = ['All topics', 'General', 'Professional', 'Culture', 'Pronunciation', 'Advanced']

export default function PacksPage() {
  return (
    <main style={{ fontFamily: 'Georgia, serif', maxWidth: '1000px', margin: '0 auto', padding: '0 2rem' }}>

      <nav style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', padding: '1.5rem 0', borderBottom: '1px solid #e5e5e5' }}>
        <Link href="/" style={{ textDecoration: 'none', fontSize: '24px', fontWeight: '600', letterSpacing: '-0.5px', color: '#1a1a1a' }}>
          Utt<em style={{ color: '#0F6E56', fontStyle: 'italic' }}>er</em>ly
        </Link>
        <div style={{ display: 'flex', gap: '2rem', fontSize: '14px' }}>
          <Link href="/tutors" style={{ textDecoration: 'none', color: '#666' }}>Find a tutor</Link>
          <Link href="/club" style={{ textDecoration: 'none', color: '#666' }}>Teatime Club</Link>
          <Link href="/packs" style={{ textDecoration: 'none', color: '#0F6E56', fontWeight: '600' }}>Learning packs</Link>
        </div>
        <div style={{ display: 'flex', gap: '1rem', alignItems: 'center' }}>
          <Link href="/login" style={{ textDecoration: 'none', color: '#666', fontSize: '14px' }}>Sign in</Link>
          <Link href="/register" style={{ textDecoration: 'none', background: '#0F6E56', color: 'white', padding: '8px 20px', borderRadius: '8px', fontSize: '14px' }}>Get started</Link>
        </div>
      </nav>

      <section style={{ padding: '3rem 0 2rem' }}>
        <p style={{ fontSize: '11px', fontWeight: '500', letterSpacing: '2px', textTransform: 'uppercase', color: '#0F6E56', marginBottom: '0.75rem', fontFamily: 'sans-serif' }}>
          Self-study between sessions
        </p>
        <h1 style={{ fontSize: '42px', fontWeight: '600', letterSpacing: '-1.5px', marginBottom: '0.75rem', color: '#1a1a1a' }}>
          Learning packs
        </h1>
        <p style={{ fontSize: '16px', color: '#666', lineHeight: '1.6', maxWidth: '540px', margin: 0 }}>
          Structured lesson packs with flashcards, vocabulary, and exercises — all in British English. Study between sessions or at your own pace.
        </p>
      </section>

      {/* Free pack banner */}
      <div style={{ background: '#F0FDF4', border: '1px solid #BBF7D0', borderRadius: '14px', padding: '1.25rem 1.5rem', marginBottom: '2.5rem', display: 'flex', alignItems: 'center', justifyContent: 'space-between', gap: '1rem' }}>
        <div>
          <p style={{ fontSize: '14px', fontWeight: '600', color: '#0F6E56', margin: '0 0 2px', fontFamily: 'sans-serif' }}>Start for free</p>
          <p style={{ fontSize: '13px', color: '#166534', margin: 0, fontFamily: 'sans-serif' }}>The Everyday British English pack is completely free. No account needed to get started.</p>
        </div>
        <Link href="/packs/1" style={{ textDecoration: 'none', background: '#0F6E56', color: 'white', padding: '10px 20px', borderRadius: '8px', fontSize: '13px', fontWeight: '600', fontFamily: 'sans-serif', whiteSpace: 'nowrap' }}>
          Start free pack
        </Link>
      </div>

      {/* Filters */}
      <div style={{ display: 'flex', gap: '2rem', marginBottom: '2rem', borderBottom: '1px solid #e5e5e5', paddingBottom: '1rem' }}>
        <div style={{ display: 'flex', gap: '0.5rem', alignItems: 'center' }}>
          <span style={{ fontSize: '13px', color: '#999', fontFamily: 'sans-serif' }}>Level:</span>
          {LEVELS.map((l, i) => (
            <button key={l} style={{ border: `1px solid ${i === 0 ? '#0F6E56' : '#e5e5e5'}`, background: i === 0 ? '#F0FDF4' : 'white', borderRadius: '20px', padding: '4px 12px', fontSize: '12px', cursor: 'pointer', color: i === 0 ? '#0F6E56' : '#666', fontFamily: 'sans-serif', fontWeight: i === 0 ? '600' : '400' }}>
              {l}
            </button>
          ))}
        </div>
      </div>

      {/* Packs grid */}
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(2, 1fr)', gap: '1.5rem', paddingBottom: '4rem' }}>
        {PACKS.map(pack => (
          <div key={pack.id} style={{ background: pack.bg, border: `1px solid ${pack.border}`, borderRadius: '16px', padding: '1.75rem', display: 'flex', flexDirection: 'column' }}>
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: '0.75rem' }}>
              <div>
                <span style={{ fontSize: '11px', fontWeight: '600', color: pack.colour, textTransform: 'uppercase', letterSpacing: '1px', fontFamily: 'sans-serif' }}>{pack.topic} · {pack.level}</span>
              </div>
              {pack.free && (
                <span style={{ fontSize: '11px', fontWeight: '700', background: '#0F6E56', color: 'white', padding: '3px 10px', borderRadius: '20px', fontFamily: 'sans-serif' }}>FREE</span>
              )}
            </div>

            <h2 style={{ fontSize: '20px', fontWeight: '600', color: '#1a1a1a', marginBottom: '0.75rem', letterSpacing: '-0.3px' }}>{pack.title}</h2>
            <p style={{ fontSize: '14px', color: '#555', lineHeight: '1.65', marginBottom: '1.5rem', flex: 1 }}>{pack.description}</p>

            <div style={{ display: 'flex', gap: '1.5rem', marginBottom: '1.5rem' }}>
              {[
                { label: 'Lessons', value: pack.lessons },
                { label: 'Flashcards', value: pack.flashcards },
                { label: 'Hours', value: pack.hours },
              ].map(({ label, value }) => (
                <div key={label}>
                  <p style={{ fontSize: '18px', fontWeight: '600', color: pack.colour, margin: 0, fontFamily: 'sans-serif' }}>{value}</p>
                  <p style={{ fontSize: '11px', color: '#888', margin: 0, fontFamily: 'sans-serif' }}>{label}</p>
                </div>
              ))}
            </div>

            <Link href={`/packs/${pack.id}`} style={{ display: 'block', textAlign: 'center', background: pack.colour, color: 'white', padding: '11px', borderRadius: '10px', textDecoration: 'none', fontSize: '14px', fontWeight: '600', fontFamily: 'sans-serif' }}>
              {pack.free ? 'Start free →' : 'Preview pack →'}
            </Link>
          </div>
        ))}
      </div>

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