import Link from 'next/link'

const STUDENTS = [
  {
    id: '1',
    name: 'Agnieszka W.',
    avatar: 'AW',
    country: '🇵🇱',
    level: 'B1',
    type: 'Weekly',
    lessons: 12,
    lessonsTotal: 12,
    renewal: 'Due',
    nextLesson: 'Today 6:30pm',
    joined: 'Jan 2026',
    goals: 'Pronunciation, workplace confidence',
  },
  {
    id: '2',
    name: 'Marco T.',
    avatar: 'MT',
    country: '🇮🇹',
    level: 'B2',
    type: 'Weekly',
    lessons: 7,
    lessonsTotal: 12,
    renewal: 'May 2026',
    nextLesson: 'Thu 9 Apr',
    joined: 'Feb 2026',
    goals: 'Business English, professional writing',
  },
  {
    id: '3',
    name: 'Lena K.',
    avatar: 'LK',
    country: '🇩🇪',
    level: 'B1',
    type: 'Weekly',
    lessons: 4,
    lessonsTotal: 12,
    renewal: 'Jun 2026',
    nextLesson: 'Fri 10 Apr',
    joined: 'Mar 2026',
    goals: 'Move to the UK, everyday English',
  },
  {
    id: '4',
    name: 'Hiroshi N.',
    avatar: 'HN',
    country: '🇯🇵',
    level: 'C1',
    type: 'Weekly',
    lessons: 9,
    lessonsTotal: 12,
    renewal: 'May 2026',
    nextLesson: 'Sat 11 Apr',
    joined: 'Jan 2026',
    goals: 'Near-native fluency, advanced register',
  },
  {
    id: '5',
    name: 'Valentina R.',
    avatar: 'VR',
    country: '🇧🇷',
    level: 'B2',
    type: 'Trial',
    lessons: 0,
    lessonsTotal: 1,
    renewal: '—',
    nextLesson: 'Sat 11 Apr 10am',
    joined: 'Apr 2026',
    goals: 'British accent, cultural fluency',
  },
]

export default function StudentsPage() {
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
            { label: 'Students', href: '/dashboard/tutor/students', active: true },
            { label: 'Classroom', href: '/dashboard/tutor/classroom', active: false },
            { label: 'Library', href: '/dashboard/tutor/library', active: false },
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

        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '1.5rem' }}>
          <h1 style={{ fontSize: '26px', fontWeight: '600', letterSpacing: '-0.5px', margin: 0, color: '#1a1a1a' }}>My students</h1>
          <div style={{ display: 'flex', gap: '0.75rem', alignItems: 'center' }}>
            <input
              type="text"
              placeholder="Search students"
              style={{ border: '1px solid #e5e5e5', borderRadius: '8px', padding: '8px 14px', fontSize: '13px', fontFamily: 'sans-serif', outline: 'none', width: '200px' }}
            />
            <select style={{ border: '1px solid #e5e5e5', borderRadius: '8px', padding: '8px 12px', fontSize: '13px', fontFamily: 'sans-serif', outline: 'none', background: 'white', color: '#1a1a1a' }}>
              <option>Current</option>
              <option>All time</option>
              <option>Trial</option>
            </select>
          </div>
        </div>

        <div style={{ background: 'white', border: '1px solid #e5e5e5', borderRadius: '14px', overflow: 'hidden' }}>
          <table style={{ width: '100%', borderCollapse: 'collapse', fontFamily: 'sans-serif' }}>
            <thead>
              <tr style={{ borderBottom: '1px solid #e5e5e5', background: '#f9f9f7' }}>
                {['Name', 'Type', 'Lessons', 'Renewal', 'Next lesson', 'Actions'].map(h => (
                  <th key={h} style={{ padding: '0.875rem 1.25rem', textAlign: 'left', fontSize: '11px', color: '#999', fontWeight: '600', textTransform: 'uppercase', letterSpacing: '0.5px' }}>{h}</th>
                ))}
              </tr>
            </thead>
            <tbody>
              {STUDENTS.map((s, i) => (
                <tr key={s.id} style={{ borderBottom: i < STUDENTS.length - 1 ? '1px solid #f0f0f0' : 'none' }}>
                  <td style={{ padding: '1rem 1.25rem' }}>
                    <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
                      <div style={{ width: '36px', height: '36px', borderRadius: '50%', background: '#E1F5EE', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '11px', fontWeight: '600', color: '#0F6E56', flexShrink: 0 }}>
                        {s.avatar}
                      </div>
                      <div>
                        <p style={{ fontSize: '14px', fontWeight: '600', color: '#1a1a1a', margin: 0 }}>{s.name}</p>
                        <p style={{ fontSize: '11px', color: '#999', margin: 0 }}>{s.country} · {s.level} · since {s.joined}</p>
                      </div>
                    </div>
                  </td>
                  <td style={{ padding: '1rem 1.25rem' }}>
                    <span style={{
                      fontSize: '12px',
                      background: s.type === 'Trial' ? '#FFF7ED' : '#E1F5EE',
                      color: s.type === 'Trial' ? '#C2410C' : '#0F6E56',
                      padding: '3px 10px',
                      borderRadius: '20px',
                      fontWeight: '500',
                    }}>
                      {s.type}
                    </span>
                  </td>
                  <td style={{ padding: '1rem 1.25rem' }}>
                    <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                      <div style={{ width: '80px', height: '6px', background: '#e5e5e5', borderRadius: '3px', overflow: 'hidden' }}>
                        <div style={{ width: `${(s.lessons / s.lessonsTotal) * 100}%`, height: '100%', background: '#0F6E56', borderRadius: '3px' }} />
                      </div>
                      <span style={{ fontSize: '12px', color: '#666' }}>{s.lessons}/{s.lessonsTotal}</span>
                    </div>
                  </td>
                  <td style={{ padding: '1rem 1.25rem' }}>
                    <span style={{ fontSize: '13px', color: s.renewal === 'Due' ? '#DC2626' : '#444', fontWeight: s.renewal === 'Due' ? '600' : '400' }}>
                      {s.renewal}
                    </span>
                  </td>
                  <td style={{ padding: '1rem 1.25rem', fontSize: '13px', color: '#444' }}>{s.nextLesson}</td>
                  <td style={{ padding: '1rem 1.25rem' }}>
                    <div style={{ display: 'flex', gap: '6px' }}>
                      <Link href={`/session/${s.id}/room`} title="Enter classroom" style={{ textDecoration: 'none', border: '1px solid #e5e5e5', borderRadius: '7px', padding: '5px 10px', fontSize: '14px', color: '#555', background: 'white' }}>📹</Link>
                      <Link href="/dashboard/tutor/calendar" title="Schedule" style={{ textDecoration: 'none', border: '1px solid #e5e5e5', borderRadius: '7px', padding: '5px 10px', fontSize: '14px', color: '#555', background: 'white' }}>📅</Link>
                      <Link href={`/dashboard/tutor/students/${s.id}`} title="View notes" style={{ textDecoration: 'none', border: '1px solid #e5e5e5', borderRadius: '7px', padding: '5px 10px', fontSize: '14px', color: '#555', background: 'white' }}>📝</Link>
                      <button title="More" style={{ border: '1px solid #e5e5e5', borderRadius: '7px', padding: '5px 10px', fontSize: '14px', color: '#555', background: 'white', cursor: 'pointer' }}>···</button>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </main>
  )
}