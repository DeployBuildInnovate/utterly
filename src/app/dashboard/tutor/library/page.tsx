import Link from 'next/link'

const LESSONS = [
  {
    id: '1',
    title: 'The long vowel — bath, castle, dance',
    level: 'B1',
    topic: 'Pronunciation',
    duration: 50,
    exercises: 4,
    description: 'Focuses on the /ɑː/ sound that distinguishes British English from American English. Minimal pairs, listening exercises, and shadowing.',
    colour: '#0369A1',
    bg: '#F0F9FF',
    border: '#BAE6FD',
  },
  {
    id: '2',
    title: 'Writing a professional British email',
    level: 'B2',
    topic: 'Business English',
    duration: 50,
    exercises: 5,
    description: 'Register, tone, opening and closing conventions. The difference between formal, semi-formal, and the politely indirect British style.',
    colour: '#B45309',
    bg: '#FFFBEB',
    border: '#FDE68A',
  },
  {
    id: '3',
    title: 'British workplace small talk',
    level: 'B1',
    topic: 'Conversation',
    duration: 50,
    exercises: 3,
    description: 'What to say, what to avoid, and how to sound natural. Weather, weekends, sport, and the art of saying nothing in particular.',
    colour: '#0F6E56',
    bg: '#F0FDF4',
    border: '#BBF7D0',
  },
  {
    id: '4',
    title: 'The Royal Family — language and culture',
    level: 'B1',
    topic: 'Culture',
    duration: 50,
    exercises: 4,
    description: 'Kate, William, Harry, Meghan, Charles. Real British English through the most discussed family in the world. Vocabulary, reading, and discussion.',
    colour: '#7C3AED',
    bg: '#F5F3FF',
    border: '#DDD6FE',
  },
  {
    id: '5',
    title: 'British irony and understatement',
    level: 'B2',
    topic: 'Culture',
    duration: 50,
    exercises: 3,
    description: 'Why British people say the opposite of what they mean — and how to understand and use irony, understatement, and self-deprecation naturally.',
    colour: '#7C3AED',
    bg: '#F5F3FF',
    border: '#DDD6FE',
  },
  {
    id: '6',
    title: 'Presenting to a British audience',
    level: 'B2',
    topic: 'Business English',
    duration: 50,
    exercises: 5,
    description: 'Structure, language, register, and delivery. What British audiences expect — and what they find uncomfortable. Real presentation vocabulary.',
    colour: '#B45309',
    bg: '#FFFBEB',
    border: '#FDE68A',
  },
  {
    id: '7',
    title: 'Connected speech — linking and reduction',
    level: 'B2',
    topic: 'Pronunciation',
    duration: 50,
    exercises: 4,
    description: 'Why native speakers sound different at natural speed. Linking, elision, assimilation, and weak forms. Listening and shadowing exercises.',
    colour: '#0369A1',
    bg: '#F0F9FF',
    border: '#BAE6FD',
  },
  {
    id: '8',
    title: 'The British pub — language and culture',
    level: 'A2',
    topic: 'Culture',
    duration: 50,
    exercises: 3,
    description: 'More than a place to drink — the pub is the heart of British social life. Ordering, etiquette, conversation, rounds, and what it all really means.',
    colour: '#7C3AED',
    bg: '#F5F3FF',
    border: '#DDD6FE',
  },
  {
    id: '9',
    title: 'Advanced register — C1 and above',
    level: 'C1',
    topic: 'Advanced',
    duration: 50,
    exercises: 5,
    description: 'The nuance that separates fluent from natural. Formal and informal register, hedging, implication, and the cultural subtext native speakers use without thinking.',
    colour: '#1a1a1a',
    bg: '#f9f9f7',
    border: '#e5e5e5',
  },
]

const LEVELS = ['All levels', 'A1', 'A2', 'B1', 'B2', 'C1', 'C2']
const TOPICS = ['All topics', 'Pronunciation', 'Business English', 'Conversation', 'Culture', 'Grammar', 'Advanced']

export default function LibraryPage() {
  return (
    <main style={{ fontFamily: 'Georgia, serif', minHeight: '100vh', background: '#f9f9f7' }}>

      <nav style={{ background: 'white', borderBottom: '1px solid #e5e5e5', padding: '0 2rem', display: 'flex', alignItems: 'center', justifyContent: 'space-between', height: '56px', position: 'sticky', top: 0, zIndex: 10 }}>
        <Link href="/" style={{ textDecoration: 'none', fontSize: '20px', fontWeight: '600', letterSpacing: '-0.5px', color: '#1a1a1a', marginRight: '2rem' }}>
          Utt<em style={{ color: '#0F6E56', fontStyle: 'italic' }}>er</em>ly
        </Link>
        <div style={{ display: 'flex', gap: '0', fontSize: '14px', fontFamily: 'sans-serif', flex: 1 }}>
          {[
            { label: 'Home', href: '/dashboard/tutor', active: false },
            { label: 'Messages', href: '/dashboard/tutor/messages', active: false },
            { label: 'Calendar', href: '/dashboard/tutor/calendar', active: false },
            { label: 'Students', href: '/dashboard/tutor/students', active: false },
            { label: 'Classroom', href: '/dashboard/tutor/classroom', active: false },
            { label: 'Library', href: '/dashboard/tutor/library', active: true },
            { label: 'Insights', href: '/dashboard/tutor/insights', active: false },
            { label: 'My profile', href: '/dashboard/tutor/profile', active: false },
            { label: 'Settings', href: '/dashboard/tutor/settings', active: false },
          ].map(({ label, href, active }) => (
            <Link key={label} href={href} style={{
              textDecoration: 'none',
              color: active ? '#0F6E56' : '#555',
              fontWeight: active ? '600' : '400',
              padding: '0 1rem',
              height: '56px',
              display: 'flex',
              alignItems: 'center',
              borderBottom: active ? '2px solid #0F6E56' : '2px solid transparent',
              fontSize: '13px',
            }}>
              {label}
            </Link>
          ))}
        </div>
        <div style={{ display: 'flex', alignItems: 'center', gap: '1.5rem' }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '8px', background: '#f5f5f0', border: '1px solid #e5e5e5', borderRadius: '8px', padding: '6px 14px' }}>
            <span style={{ fontSize: '12px', color: '#999', fontFamily: 'sans-serif' }}>Balance</span>
            <span style={{ fontSize: '15px', fontWeight: '600', color: '#1a1a1a', fontFamily: 'sans-serif' }}>£167.22</span>
          </div>
          <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
            <div style={{ width: '34px', height: '34px', borderRadius: '50%', background: '#E1F5EE', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '12px', fontWeight: '600', color: '#0F6E56', fontFamily: 'sans-serif' }}>SR</div>
            <span style={{ fontSize: '13px', color: '#444', fontFamily: 'sans-serif' }}>Sarah R.</span>
          </div>
        </div>
      </nav>

      <div style={{ maxWidth: '1100px', margin: '0 auto', padding: '2rem' }}>

        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: '1.5rem' }}>
          <div>
            <h1 style={{ fontSize: '26px', fontWeight: '600', letterSpacing: '-0.5px', margin: '0 0 4px', color: '#1a1a1a' }}>Lesson library</h1>
            <p style={{ fontSize: '14px', color: '#666', margin: 0, fontFamily: 'sans-serif' }}>
              Browse and push lessons directly to your learner during a session
            </p>
          </div>
          <div style={{ display: 'flex', gap: '0.75rem', alignItems: 'center' }}>
            <input
              type="text"
              placeholder="Search lessons"
              style={{ border: '1px solid #e5e5e5', borderRadius: '8px', padding: '8px 14px', fontSize: '13px', fontFamily: 'sans-serif', outline: 'none', width: '200px', background: 'white' }}
            />
          </div>
        </div>

        {/* Filters */}
        <div style={{ display: 'flex', gap: '1.5rem', marginBottom: '1.5rem', alignItems: 'center', fontFamily: 'sans-serif' }}>
          <div style={{ display: 'flex', gap: '0.4rem', alignItems: 'center' }}>
            <span style={{ fontSize: '12px', color: '#999' }}>Level:</span>
            {LEVELS.map((l, i) => (
              <button key={l} style={{ border: `1px solid ${i === 0 ? '#0F6E56' : '#e5e5e5'}`, background: i === 0 ? '#F0FDF4' : 'white', borderRadius: '20px', padding: '4px 10px', fontSize: '12px', cursor: 'pointer', color: i === 0 ? '#0F6E56' : '#666', fontFamily: 'sans-serif', fontWeight: i === 0 ? '600' : '400' }}>
                {l}
              </button>
            ))}
          </div>
          <div style={{ display: 'flex', gap: '0.4rem', alignItems: 'center' }}>
            <span style={{ fontSize: '12px', color: '#999' }}>Topic:</span>
            {TOPICS.map((t, i) => (
              <button key={t} style={{ border: `1px solid ${i === 0 ? '#0F6E56' : '#e5e5e5'}`, background: i === 0 ? '#F0FDF4' : 'white', borderRadius: '20px', padding: '4px 10px', fontSize: '12px', cursor: 'pointer', color: i === 0 ? '#0F6E56' : '#666', fontFamily: 'sans-serif', fontWeight: i === 0 ? '600' : '400' }}>
                {t}
              </button>
            ))}
          </div>
        </div>

        {/* Lesson grid */}
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '1rem' }}>
          {LESSONS.map(lesson => (
            <div key={lesson.id} style={{ background: 'white', border: '1px solid #e5e5e5', borderRadius: '14px', padding: '1.25rem', display: 'flex', flexDirection: 'column' }}>
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: '0.5rem' }}>
                <span style={{ fontSize: '11px', fontWeight: '600', color: lesson.colour, textTransform: 'uppercase', letterSpacing: '0.5px', fontFamily: 'sans-serif' }}>
                  {lesson.topic}
                </span>
                <span style={{ fontSize: '11px', background: lesson.bg, color: lesson.colour, border: `1px solid ${lesson.border}`, padding: '2px 8px', borderRadius: '20px', fontFamily: 'sans-serif', fontWeight: '500' }}>
                  {lesson.level}
                </span>
              </div>
              <h3 style={{ fontSize: '15px', fontWeight: '600', color: '#1a1a1a', margin: '0 0 0.5rem', lineHeight: '1.3' }}>{lesson.title}</h3>
              <p style={{ fontSize: '13px', color: '#666', lineHeight: '1.6', margin: '0 0 1rem', flex: 1 }}>{lesson.description}</p>
              <div style={{ display: 'flex', gap: '1rem', marginBottom: '1rem', fontFamily: 'sans-serif' }}>
                <span style={{ fontSize: '12px', color: '#999' }}>{lesson.duration} min</span>
                <span style={{ fontSize: '12px', color: '#999' }}>{lesson.exercises} exercises</span>
              </div>
              <div style={{ display: 'flex', gap: '0.5rem' }}>
                <Link href={`/dashboard/tutor/library/${lesson.id}`} style={{ flex: 1, textAlign: 'center', textDecoration: 'none', border: '1px solid #e5e5e5', color: '#555', padding: '8px', borderRadius: '8px', fontSize: '12px', fontFamily: 'sans-serif' }}>
                  Preview
                </Link>
                <button style={{ flex: 1, background: '#0F6E56', color: 'white', border: 'none', padding: '8px', borderRadius: '8px', fontSize: '12px', fontWeight: '600', cursor: 'pointer', fontFamily: 'sans-serif' }}>
                  Push to learner
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </main>
  )
}