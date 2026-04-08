import Link from 'next/link'

const DAYS = ['Mon 6', 'Tue 7', 'Wed 8', 'Thu 9', 'Fri 10', 'Sat 11', 'Sun 12']
const HOURS = ['06:00', '07:00', '08:00', '09:00', '10:00', '11:00', '12:00', '13:00', '14:00', '15:00', '16:00', '17:00', '18:00', '19:00', '20:00', '21:00']

const SESSIONS = [
  { day: 1, hour: 18, student: 'Agnieszka W.', level: 'B1', topic: 'Pronunciation clinic', duration: 1, type: 'confirmed', id: '1' },
  { day: 2, hour: 19, student: 'Marco T.', level: 'B2', topic: 'Business writing', duration: 1, type: 'confirmed', id: '2' },
  { day: 3, hour: 17, student: 'Lena K.', level: 'B1', topic: 'Workplace small talk', duration: 1, type: 'confirmed', id: '3' },
  { day: 4, hour: 20, student: 'Hiroshi N.', level: 'C1', topic: 'Advanced register', duration: 1, type: 'confirmed', id: '4' },
  { day: 5, hour: 10, student: 'Valentina R.', level: 'B2', topic: 'Trial lesson', duration: 1, type: 'trial', id: '5' },
  { day: 2, hour: 9, student: '', level: '', topic: 'How to teach an awesome first lesson', duration: 1, type: 'training', id: '6' },
]

export default function CalendarPage() {
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
            { label: 'Calendar', href: '/dashboard/tutor/calendar', active: true },
            { label: 'Students', href: '/dashboard/tutor/students', active: false },
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

      <div style={{ display: 'grid', gridTemplateColumns: '200px 1fr', height: 'calc(100vh - 56px)' }}>

        {/* Left sidebar */}
        <div style={{ background: 'white', borderRight: '1px solid #e5e5e5', padding: '1.5rem', display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
          <button style={{ background: '#0F6E56', color: 'white', border: 'none', borderRadius: '8px', padding: '10px 16px', fontSize: '13px', fontWeight: '600', cursor: 'pointer', fontFamily: 'sans-serif', marginBottom: '0.5rem' }}>
            + Schedule lesson
          </button>
          <button style={{ background: 'white', color: '#555', border: '1px solid #e5e5e5', borderRadius: '8px', padding: '9px 16px', fontSize: '13px', cursor: 'pointer', fontFamily: 'sans-serif' }}>
            Add time off
          </button>
          <button style={{ background: 'white', color: '#555', border: '1px solid #e5e5e5', borderRadius: '8px', padding: '9px 16px', fontSize: '13px', cursor: 'pointer', fontFamily: 'sans-serif' }}>
            Add extra slots
          </button>
          <button style={{ background: 'white', color: '#555', border: '1px solid #e5e5e5', borderRadius: '8px', padding: '9px 16px', fontSize: '13px', cursor: 'pointer', fontFamily: 'sans-serif' }}>
            Set up availability
          </button>

          <div style={{ marginTop: '1.5rem' }}>
            <p style={{ fontSize: '11px', fontWeight: '600', textTransform: 'uppercase', letterSpacing: '1px', color: '#999', margin: '0 0 0.75rem', fontFamily: 'sans-serif' }}>Tags</p>
            {[
              { label: 'Confirmed lesson', colour: '#0F6E56' },
              { label: 'Trial lesson', colour: '#F59E0B' },
              { label: 'Training', colour: '#7C3AED' },
              { label: 'Time off', colour: '#e5e5e5' },
            ].map(({ label, colour }) => (
              <div key={label} style={{ display: 'flex', alignItems: 'center', gap: '8px', marginBottom: '8px' }}>
                <div style={{ width: '3px', height: '16px', background: colour, borderRadius: '2px' }} />
                <span style={{ fontSize: '13px', color: '#555', fontFamily: 'sans-serif' }}>{label}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Calendar grid */}
        <div style={{ overflowY: 'auto', background: '#f9f9f7' }}>

          {/* Week header */}
          <div style={{ background: 'white', borderBottom: '1px solid #e5e5e5', display: 'grid', gridTemplateColumns: '60px repeat(7, 1fr)', position: 'sticky', top: 0, zIndex: 5 }}>
            <div style={{ padding: '0.75rem', display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '0.5rem' }}>
              <button style={{ border: 'none', background: 'none', cursor: 'pointer', color: '#666', fontSize: '16px' }}>←</button>
              <button style={{ border: 'none', background: 'none', cursor: 'pointer', color: '#666', fontSize: '16px' }}>→</button>
            </div>
            {DAYS.map((day, i) => (
              <div key={day} style={{ padding: '0.75rem', textAlign: 'center', borderLeft: '1px solid #f0f0f0', background: i === 1 ? '#F0FDF4' : 'white' }}>
                <p style={{ fontSize: '13px', fontWeight: i === 1 ? '700' : '500', color: i === 1 ? '#0F6E56' : '#1a1a1a', margin: 0, fontFamily: 'sans-serif' }}>{day}</p>
              </div>
            ))}
          </div>

          {/* Time grid */}
          <div style={{ display: 'grid', gridTemplateColumns: '60px repeat(7, 1fr)' }}>
            {HOURS.map(hour => (
              <>
                <div key={`hour-${hour}`} style={{ padding: '0 8px', height: '60px', display: 'flex', alignItems: 'flex-start', paddingTop: '4px' }}>
                  <span style={{ fontSize: '11px', color: '#bbb', fontFamily: 'sans-serif' }}>{hour}</span>
                </div>
                {DAYS.map((day, dayIndex) => {
                  const hourNum = parseInt(hour.split(':')[0])
                  const session = SESSIONS.find(s => s.day === dayIndex && s.hour === hourNum)
                  return (
                    <div key={`${day}-${hour}`} style={{ height: '60px', borderLeft: '1px solid #f0f0f0', borderBottom: '1px solid #f5f5f0', position: 'relative', background: dayIndex === 1 ? '#FAFFF9' : 'white' }}>
                      {session && (
                        <Link href={session.type !== 'training' ? `/session/${session.id}/room` : '#'} style={{ textDecoration: 'none' }}>
                          <div style={{
                            position: 'absolute',
                            top: '2px',
                            left: '2px',
                            right: '2px',
                            height: `${session.duration * 60 - 4}px`,
                            background: session.type === 'confirmed' ? '#E1F5EE' : session.type === 'trial' ? '#FEF3C7' : '#EDE9FE',
                            border: `1px solid ${session.type === 'confirmed' ? '#0F6E56' : session.type === 'trial' ? '#F59E0B' : '#7C3AED'}`,
                            borderLeft: `3px solid ${session.type === 'confirmed' ? '#0F6E56' : session.type === 'trial' ? '#F59E0B' : '#7C3AED'}`,
                            borderRadius: '6px',
                            padding: '4px 6px',
                            overflow: 'hidden',
                          }}>
                            <p style={{ fontSize: '11px', fontWeight: '600', color: session.type === 'confirmed' ? '#0F6E56' : session.type === 'trial' ? '#92400E' : '#5B21B6', margin: 0, fontFamily: 'sans-serif', overflow: 'hidden', whiteSpace: 'nowrap', textOverflow: 'ellipsis' }}>
                              {session.student || session.topic}
                            </p>
                            {session.student && (
                              <p style={{ fontSize: '10px', color: '#666', margin: 0, fontFamily: 'sans-serif', overflow: 'hidden', whiteSpace: 'nowrap', textOverflow: 'ellipsis' }}>
                                {session.topic}
                              </p>
                            )}
                          </div>
                        </Link>
                      )}
                    </div>
                  )
                })}
              </>
            ))}
          </div>
        </div>
      </div>
    </main>
  )
}