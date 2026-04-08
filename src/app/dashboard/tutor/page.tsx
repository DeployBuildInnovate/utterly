import Link from 'next/link'

const UPCOMING = [
  { id: '1', student: 'Agnieszka W.', avatar: 'AW', date: 'Today', time: '6:30pm – 7:20pm', topic: 'Pronunciation clinic', level: 'B1', urgent: true },
  { id: '2', student: 'Marco T.', avatar: 'MT', date: 'Thu 9 Apr', time: '7:00pm – 7:50pm', topic: 'Business writing essentials', level: 'B2', urgent: false },
  { id: '3', student: 'Lena K.', avatar: 'LK', date: 'Fri 10 Apr', time: '5:30pm – 6:20pm', topic: 'Workplace small talk', level: 'B1', urgent: false },
  { id: '4', student: 'Hiroshi N.', avatar: 'HN', date: 'Sat 11 Apr', time: '8:00pm – 8:50pm', topic: 'Advanced register and idiom', level: 'C1', urgent: false },
]

const STUDENTS = [
  { id: '1', name: 'Agnieszka W.', avatar: 'AW', country: '🇵🇱', level: 'B1', type: 'Weekly', lessons: '12/12', nextLesson: 'Today 6:30pm' },
  { id: '2', name: 'Marco T.', avatar: 'MT', country: '🇮🇹', level: 'B2', type: 'Weekly', lessons: '7/12', nextLesson: 'Thu 9 Apr' },
  { id: '3', name: 'Lena K.', avatar: 'LK', country: '🇩🇪', level: 'B1', type: 'Weekly', lessons: '4/12', nextLesson: 'Fri 10 Apr' },
  { id: '4', name: 'Hiroshi N.', avatar: 'HN', country: '🇯🇵', level: 'C1', type: 'Weekly', lessons: '9/12', nextLesson: 'Sat 11 Apr' },
  { id: '5', name: 'Valentina R.', avatar: 'VR', country: '🇧🇷', level: 'B2', type: 'Trial', lessons: '—', nextLesson: 'Not booked' },
]

const MESSAGES = [
  { id: '1', student: 'Agnieszka W.', avatar: 'AW', preview: 'Thank you for today — the pronunciation exercise really helped!', time: '2h ago', unread: true },
  { id: '2', student: 'Marco T.', avatar: 'MT', preview: 'Could we focus on email writing next session?', time: '1d ago', unread: true },
  { id: '3', student: 'Lena K.', avatar: 'LK', preview: 'See you Friday!', time: '2d ago', unread: false },
]

const PENDING = [
  { text: 'Upload your Utterly certification to unlock higher rates', action: 'Upload now', href: '/dashboard/tutor/profile' },
  { text: 'Marco T. asked to reschedule Thursday — please respond', action: 'View request', href: '/dashboard/tutor/messages' },
]

export default function TutorDashboard() {
  const next = UPCOMING[0]

  return (
    <main style={{ fontFamily: 'Georgia, serif', minHeight: '100vh', background: '#f9f9f7' }}>

      {/* Top nav */}
      <nav style={{ background: 'white', borderBottom: '1px solid #e5e5e5', padding: '0 2rem', display: 'flex', alignItems: 'center', justifyContent: 'space-between', height: '56px', position: 'sticky', top: 0, zIndex: 10 }}>
        <Link href="/" style={{ textDecoration: 'none', fontSize: '20px', fontWeight: '600', letterSpacing: '-0.5px', color: '#1a1a1a', marginRight: '2rem' }}>
          Utt<em style={{ color: '#0F6E56', fontStyle: 'italic' }}>er</em>ly
        </Link>
        <div style={{ display: 'flex', gap: '0', fontSize: '14px', fontFamily: 'sans-serif', flex: 1 }}>
          {[
            { label: 'Home', href: '/dashboard/tutor', active: true },
            { label: 'Messages', href: '/dashboard/tutor/messages', active: false },
            { label: 'Calendar', href: '/dashboard/tutor/calendar', active: false },
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

      <div style={{ maxWidth: '1100px', margin: '0 auto', padding: '2rem' }}>

        {/* Greeting */}
        <div style={{ marginBottom: '1.5rem' }}>
          <h1 style={{ fontSize: '26px', fontWeight: '600', letterSpacing: '-0.5px', marginBottom: '4px', color: '#1a1a1a' }}>
            Good evening, Sarah
          </h1>
          <p style={{ fontSize: '14px', color: '#666', margin: 0, fontFamily: 'sans-serif' }}>
            You have a session with Agnieszka tonight at 6:30pm
          </p>
        </div>

        {/* Pending actions */}
        {PENDING.length > 0 && (
          <div style={{ marginBottom: '1.5rem' }}>
            {PENDING.map((item, i) => (
              <div key={i} style={{ background: '#FFFBEB', border: '1px solid #FDE68A', borderRadius: '10px', padding: '1rem 1.25rem', marginBottom: '0.5rem', display: 'flex', alignItems: 'center', justifyContent: 'space-between', gap: '1rem' }}>
                <p style={{ fontSize: '13px', color: '#92400E', margin: 0, fontFamily: 'sans-serif' }}>{item.text}</p>
                <Link href={item.href} style={{ textDecoration: 'none', fontSize: '12px', fontWeight: '600', color: '#92400E', background: '#FEF3C7', border: '1px solid #FDE68A', padding: '5px 12px', borderRadius: '6px', fontFamily: 'sans-serif', whiteSpace: 'nowrap' }}>
                  {item.action}
                </Link>
              </div>
            ))}
          </div>
        )}

        {/* Up next — enter classroom */}
        <div style={{ background: '#0F6E56', borderRadius: '14px', padding: '1.5rem 2rem', marginBottom: '1.5rem', display: 'flex', alignItems: 'center', justifyContent: 'space-between', gap: '2rem' }}>
          <div>
            <p style={{ fontSize: '11px', fontWeight: '600', letterSpacing: '1.5px', textTransform: 'uppercase', color: '#9FE1CB', margin: '0 0 6px', fontFamily: 'sans-serif' }}>
              Up next · {next.date} · {next.time}
            </p>
            <h2 style={{ fontSize: '20px', fontWeight: '600', color: 'white', margin: '0 0 4px' }}>{next.student}</h2>
            <p style={{ fontSize: '14px', color: '#9FE1CB', margin: 0, fontFamily: 'sans-serif' }}>{next.topic} · {next.level}</p>
          </div>
          <div style={{ display: 'flex', gap: '0.75rem', flexShrink: 0 }}>
            <Link href={`/session/${next.id}/prepare`} style={{ textDecoration: 'none', border: '1px solid rgba(255,255,255,0.4)', color: 'white', padding: '10px 20px', borderRadius: '8px', fontSize: '14px', fontFamily: 'sans-serif' }}>
              View lesson plan
            </Link>
            <Link href={`/session/${next.id}/room`} style={{ textDecoration: 'none', background: 'white', color: '#0F6E56', padding: '10px 20px', borderRadius: '8px', fontSize: '14px', fontWeight: '700', fontFamily: 'sans-serif' }}>
              Enter classroom →
            </Link>
          </div>
        </div>

        <div style={{ display: 'grid', gridTemplateColumns: '1fr 320px', gap: '1.5rem' }}>

          {/* Left */}
          <div style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>

            {/* Upcoming sessions */}
            <div style={{ background: 'white', border: '1px solid #e5e5e5', borderRadius: '14px', overflow: 'hidden' }}>
              <div style={{ padding: '1.25rem 1.5rem', borderBottom: '1px solid #e5e5e5', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                <h2 style={{ fontSize: '15px', fontWeight: '600', color: '#1a1a1a', margin: 0 }}>Upcoming sessions</h2>
                <Link href="/dashboard/tutor/calendar" style={{ fontSize: '13px', color: '#0F6E56', textDecoration: 'none', fontFamily: 'sans-serif' }}>See all →</Link>
              </div>
              {UPCOMING.map((s, i) => (
                <div key={s.id} style={{ padding: '1rem 1.5rem', borderBottom: i < UPCOMING.length - 1 ? '1px solid #f0f0f0' : 'none', display: 'flex', alignItems: 'center', gap: '1rem' }}>
                  <div style={{ minWidth: '80px' }}>
                    <p style={{ fontSize: '11px', fontWeight: '600', color: s.urgent ? '#0F6E56' : '#999', margin: 0, fontFamily: 'sans-serif', textTransform: 'uppercase', letterSpacing: '0.5px' }}>{s.date}</p>
                    <p style={{ fontSize: '14px', fontWeight: '600', color: '#1a1a1a', margin: 0, fontFamily: 'sans-serif' }}>{s.time.split('–')[0].trim()}</p>
                  </div>
                  <div style={{ flex: 1 }}>
                    <p style={{ fontSize: '14px', fontWeight: '600', color: '#1a1a1a', margin: '0 0 2px', fontFamily: 'sans-serif' }}>{s.student}</p>
                    <p style={{ fontSize: '12px', color: '#999', margin: 0, fontFamily: 'sans-serif' }}>{s.topic} · {s.level}</p>
                  </div>
                  <div style={{ display: 'flex', gap: '0.5rem' }}>
                    <Link href={`/session/${s.id}/prepare`} style={{ textDecoration: 'none', border: '1px solid #e5e5e5', color: '#555', padding: '6px 12px', borderRadius: '7px', fontSize: '12px', fontFamily: 'sans-serif' }}>
                      Prepare
                    </Link>
                    <Link href={`/session/${s.id}/room`} style={{ textDecoration: 'none', background: s.urgent ? '#0F6E56' : '#f5f5f0', color: s.urgent ? 'white' : '#555', padding: '6px 12px', borderRadius: '7px', fontSize: '12px', fontWeight: s.urgent ? '600' : '400', fontFamily: 'sans-serif' }}>
                      {s.urgent ? 'Enter classroom' : 'View'}
                    </Link>
                  </div>
                </div>
              ))}
            </div>

            {/* Students */}
            <div style={{ background: 'white', border: '1px solid #e5e5e5', borderRadius: '14px', overflow: 'hidden' }}>
              <div style={{ padding: '1.25rem 1.5rem', borderBottom: '1px solid #e5e5e5', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                <h2 style={{ fontSize: '15px', fontWeight: '600', color: '#1a1a1a', margin: 0 }}>My students</h2>
                <Link href="/dashboard/tutor/students" style={{ fontSize: '13px', color: '#0F6E56', textDecoration: 'none', fontFamily: 'sans-serif' }}>See all →</Link>
              </div>
              <table style={{ width: '100%', borderCollapse: 'collapse', fontFamily: 'sans-serif' }}>
                <thead>
                  <tr style={{ borderBottom: '1px solid #f0f0f0' }}>
                    {['Name', 'Type', 'Lessons', 'Next lesson', ''].map(h => (
                      <th key={h} style={{ padding: '0.75rem 1.5rem', textAlign: 'left', fontSize: '11px', color: '#999', fontWeight: '500', textTransform: 'uppercase', letterSpacing: '0.5px' }}>{h}</th>
                    ))}
                  </tr>
                </thead>
                <tbody>
                  {STUDENTS.map((s, i) => (
                    <tr key={s.id} style={{ borderBottom: i < STUDENTS.length - 1 ? '1px solid #f0f0f0' : 'none' }}>
                      <td style={{ padding: '0.875rem 1.5rem' }}>
                        <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
                          <div style={{ width: '32px', height: '32px', borderRadius: '50%', background: '#E1F5EE', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '11px', fontWeight: '600', color: '#0F6E56', flexShrink: 0 }}>{s.avatar}</div>
                          <div>
                            <p style={{ fontSize: '13px', fontWeight: '600', color: '#1a1a1a', margin: 0 }}>{s.name}</p>
                            <p style={{ fontSize: '11px', color: '#999', margin: 0 }}>{s.country} · {s.level}</p>
                          </div>
                        </div>
                      </td>
                      <td style={{ padding: '0.875rem 1.5rem' }}>
                        <span style={{ fontSize: '12px', background: s.type === 'Trial' ? '#FFF7ED' : '#E1F5EE', color: s.type === 'Trial' ? '#C2410C' : '#0F6E56', padding: '2px 8px', borderRadius: '20px', fontWeight: '500' }}>{s.type}</span>
                      </td>
                      <td style={{ padding: '0.875rem 1.5rem', fontSize: '13px', color: '#444' }}>{s.lessons}</td>
                      <td style={{ padding: '0.875rem 1.5rem', fontSize: '13px', color: '#444' }}>{s.nextLesson}</td>
                      <td style={{ padding: '0.875rem 1.5rem' }}>
                        <div style={{ display: 'flex', gap: '6px' }}>
                          <Link href={`/session/${s.id}/room`} title="Enter classroom" style={{ textDecoration: 'none', border: '1px solid #e5e5e5', borderRadius: '6px', padding: '4px 8px', fontSize: '13px', color: '#555' }}>📹</Link>
                          <Link href={`/dashboard/tutor/calendar`} title="Schedule" style={{ textDecoration: 'none', border: '1px solid #e5e5e5', borderRadius: '6px', padding: '4px 8px', fontSize: '13px', color: '#555' }}>📅</Link>
                          <Link href={`/dashboard/tutor/students/${s.id}`} title="Notes" style={{ textDecoration: 'none', border: '1px solid #e5e5e5', borderRadius: '6px', padding: '4px 8px', fontSize: '13px', color: '#555' }}>📝</Link>
                        </div>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>

          </div>

          {/* Right */}
          <div style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>

            {/* Stats */}
            <div style={{ background: 'white', border: '1px solid #e5e5e5', borderRadius: '14px', padding: '1.25rem 1.5rem' }}>
              <h2 style={{ fontSize: '15px', fontWeight: '600', color: '#1a1a1a', margin: '0 0 1rem' }}>Overview</h2>
              <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1rem' }}>
                {[
                  { label: 'This week', value: '£69.60' },
                  { label: 'This month', value: '£312.75' },
                  { label: 'Active students', value: '5' },
                  { label: 'Rating', value: '4.9 ★' },
                ].map(({ label, value }) => (
                  <div key={label} style={{ background: '#f9f9f7', borderRadius: '10px', padding: '0.875rem' }}>
                    <p style={{ fontSize: '11px', color: '#999', margin: '0 0 2px', fontFamily: 'sans-serif', textTransform: 'uppercase', letterSpacing: '0.5px' }}>{label}</p>
                    <p style={{ fontSize: '20px', fontWeight: '600', color: '#1a1a1a', margin: 0, fontFamily: 'sans-serif' }}>{value}</p>
                  </div>
                ))}
              </div>
              <div style={{ marginTop: '1rem', paddingTop: '1rem', borderTop: '1px solid #e5e5e5', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                <div>
                  <p style={{ fontSize: '11px', color: '#999', margin: '0 0 2px', fontFamily: 'sans-serif' }}>Next payout · Friday 11 Apr</p>
                  <p style={{ fontSize: '20px', fontWeight: '600', color: '#0F6E56', margin: 0, fontFamily: 'sans-serif' }}>£167.22</p>
                </div>
                <Link href="/dashboard/tutor/insights" style={{ textDecoration: 'none', fontSize: '12px', color: '#0F6E56', fontFamily: 'sans-serif' }}>View insights →</Link>
              </div>
            </div>

            {/* Messages */}
            <div style={{ background: 'white', border: '1px solid #e5e5e5', borderRadius: '14px', overflow: 'hidden' }}>
              <div style={{ padding: '1.25rem 1.5rem', borderBottom: '1px solid #e5e5e5', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                <h2 style={{ fontSize: '15px', fontWeight: '600', color: '#1a1a1a', margin: 0 }}>Messages</h2>
                <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                  <span style={{ fontSize: '11px', fontWeight: '700', background: '#0F6E56', color: 'white', padding: '1px 7px', borderRadius: '20px', fontFamily: 'sans-serif' }}>2</span>
                  <Link href="/dashboard/tutor/messages" style={{ fontSize: '12px', color: '#0F6E56', textDecoration: 'none', fontFamily: 'sans-serif' }}>See all →</Link>
                </div>
              </div>
              {MESSAGES.map((msg, i) => (
                <div key={msg.id} style={{ padding: '0.875rem 1.5rem', borderBottom: i < MESSAGES.length - 1 ? '1px solid #f0f0f0' : 'none', display: 'flex', gap: '0.75rem', background: msg.unread ? '#FAFFF9' : 'white', cursor: 'pointer' }}>
                  <div style={{ width: '34px', height: '34px', borderRadius: '50%', background: '#E1F5EE', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '11px', fontWeight: '600', color: '#0F6E56', flexShrink: 0, fontFamily: 'sans-serif' }}>
                    {msg.avatar}
                  </div>
                  <div style={{ flex: 1, minWidth: 0 }}>
                    <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '1px' }}>
                      <p style={{ fontSize: '13px', fontWeight: '600', color: '#1a1a1a', margin: 0, fontFamily: 'sans-serif' }}>{msg.student}</p>
                      <p style={{ fontSize: '11px', color: '#999', margin: 0, fontFamily: 'sans-serif' }}>{msg.time}</p>
                    </div>
                    <p style={{ fontSize: '12px', color: '#666', margin: 0, fontFamily: 'sans-serif', overflow: 'hidden', textOverflow: 'ellipsis', whiteSpace: 'nowrap' }}>{msg.preview}</p>
                  </div>
                  {msg.unread && <div style={{ width: '7px', height: '7px', borderRadius: '50%', background: '#0F6E56', flexShrink: 0, marginTop: '5px' }} />}
                </div>
              ))}
            </div>

            {/* Profile visibility */}
            <div style={{ background: 'white', border: '1px solid #e5e5e5', borderRadius: '14px', padding: '1.25rem 1.5rem' }}>
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '0.75rem' }}>
                <h2 style={{ fontSize: '15px', fontWeight: '600', color: '#1a1a1a', margin: 0 }}>Your profile</h2>
                <span style={{ fontSize: '12px', background: '#FFF7ED', color: '#C2410C', padding: '2px 8px', borderRadius: '20px', fontFamily: 'sans-serif', fontWeight: '500' }}>Hidden</span>
              </div>
              <p style={{ fontSize: '12px', color: '#666', margin: '0 0 0.75rem', fontFamily: 'sans-serif', lineHeight: '1.5' }}>
                Your profile is not yet visible to learners. Complete your profile to go live.
              </p>
              <Link href="/dashboard/tutor/profile" style={{ textDecoration: 'none', display: 'block', textAlign: 'center', border: '1px solid #0F6E56', color: '#0F6E56', padding: '8px', borderRadius: '8px', fontSize: '13px', fontWeight: '500', fontFamily: 'sans-serif' }}>
                Complete your profile
              </Link>
            </div>

          </div>
        </div>
      </div>
    </main>
  )
}