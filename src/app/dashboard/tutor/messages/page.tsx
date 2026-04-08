import Link from 'next/link'

const CONVERSATIONS = [
  {
    id: '1',
    student: 'Agnieszka W.',
    avatar: 'AW',
    country: '🇵🇱',
    level: 'B1',
    lastMessage: 'Thank you for today — the pronunciation exercise really helped!',
    time: '2h ago',
    unread: 2,
    messages: [
      { from: 'student', text: 'Hi Sarah! Just wanted to say the session today was really useful.', time: '3h ago' },
      { from: 'tutor', text: 'So glad to hear it! You made real progress with the long vowel sounds today.', time: '3h ago' },
      { from: 'student', text: 'Thank you for today — the pronunciation exercise really helped!', time: '2h ago' },
      { from: 'student', text: 'Should I practise the minimal pairs before Thursday?', time: '2h ago' },
    ],
  },
  {
    id: '2',
    student: 'Marco T.',
    avatar: 'MT',
    country: '🇮🇹',
    level: 'B2',
    lastMessage: 'Could we focus on email writing next session?',
    time: '1d ago',
    unread: 1,
    messages: [
      { from: 'tutor', text: 'Great session today Marco — your professional register is really improving.', time: '2d ago' },
      { from: 'student', text: 'Thank you! I have been practising the phrases you suggested.', time: '1d ago' },
      { from: 'student', text: 'Could we focus on email writing next session?', time: '1d ago' },
    ],
  },
  {
    id: '3',
    student: 'Lena K.',
    avatar: 'LK',
    country: '🇩🇪',
    level: 'B1',
    lastMessage: 'See you Friday!',
    time: '2d ago',
    unread: 0,
    messages: [
      { from: 'tutor', text: 'Hi Lena — just confirming our session Friday at 5:30pm. Topic will be British workplace small talk.', time: '3d ago' },
      { from: 'student', text: 'Perfect, thank you! See you Friday!', time: '2d ago' },
    ],
  },
  {
    id: '4',
    student: 'Hiroshi N.',
    avatar: 'HN',
    country: '🇯🇵',
    level: 'C1',
    lastMessage: 'The homework was challenging but very useful.',
    time: '3d ago',
    unread: 0,
    messages: [
      { from: 'tutor', text: 'Homework for this week — write a 200-word professional email declining a meeting politely.', time: '4d ago' },
      { from: 'student', text: 'The homework was challenging but very useful.', time: '3d ago' },
    ],
  },
  {
    id: '5',
    student: 'Valentina R.',
    avatar: 'VR',
    country: '🇧🇷',
    level: 'B2',
    lastMessage: 'Looking forward to our trial session!',
    time: '5d ago',
    unread: 0,
    messages: [
      { from: 'student', text: 'Hi! I just booked a trial session with you. Looking forward to our trial session!', time: '5d ago' },
      { from: 'tutor', text: 'Welcome Valentina! Really looking forward to meeting you. See you Saturday at 10am.', time: '5d ago' },
    ],
  },
]

const active = CONVERSATIONS[0]

export default function MessagesPage() {
  return (
    <main style={{ fontFamily: 'Georgia, serif', minHeight: '100vh', background: '#f9f9f7' }}>

      {/* Top nav */}
      <nav style={{ background: 'white', borderBottom: '1px solid #e5e5e5', padding: '0 2rem', display: 'flex', alignItems: 'center', justifyContent: 'space-between', height: '56px', position: 'sticky', top: 0, zIndex: 10 }}>
        <Link href="/" style={{ textDecoration: 'none', fontSize: '20px', fontWeight: '600', letterSpacing: '-0.5px', color: '#1a1a1a', marginRight: '2rem' }}>
          Utt<em style={{ color: '#0F6E56', fontStyle: 'italic' }}>er</em>ly
        </Link>
        <div style={{ display: 'flex', gap: '0', fontSize: '14px', fontFamily: 'sans-serif', flex: 1 }}>
          {[
            { label: 'Home', href: '/dashboard/tutor', active: false },
            { label: 'Messages', href: '/dashboard/tutor/messages', active: true },
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

      {/* Two panel layout */}
      <div style={{ display: 'grid', gridTemplateColumns: '300px 1fr', height: 'calc(100vh - 56px)' }}>

        {/* Left — conversation list */}
        <div style={{ background: 'white', borderRight: '1px solid #e5e5e5', display: 'flex', flexDirection: 'column' }}>
          <div style={{ padding: '1rem 1.25rem', borderBottom: '1px solid #e5e5e5' }}>
            <input
              type="text"
              placeholder="Search students or messages"
              style={{ width: '100%', border: '1px solid #e5e5e5', borderRadius: '8px', padding: '8px 12px', fontSize: '13px', fontFamily: 'sans-serif', boxSizing: 'border-box', outline: 'none', background: '#f9f9f7' }}
            />
          </div>
          <div style={{ flex: 1, overflowY: 'auto' }}>
            {CONVERSATIONS.map((conv, i) => (
              <div key={conv.id} style={{
                padding: '1rem 1.25rem',
                borderBottom: '1px solid #f0f0f0',
                cursor: 'pointer',
                background: conv.id === active.id ? '#F0FDF4' : 'white',
                borderLeft: conv.id === active.id ? '3px solid #0F6E56' : '3px solid transparent',
              }}>
                <div style={{ display: 'flex', gap: '0.75rem', alignItems: 'flex-start' }}>
                  <div style={{ position: 'relative', flexShrink: 0 }}>
                    <div style={{ width: '40px', height: '40px', borderRadius: '50%', background: '#E1F5EE', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '12px', fontWeight: '600', color: '#0F6E56', fontFamily: 'sans-serif' }}>
                      {conv.avatar}
                    </div>
                    {conv.unread > 0 && (
                      <div style={{ position: 'absolute', top: '-2px', right: '-2px', width: '16px', height: '16px', borderRadius: '50%', background: '#0F6E56', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '9px', fontWeight: '700', color: 'white', fontFamily: 'sans-serif' }}>
                        {conv.unread}
                      </div>
                    )}
                  </div>
                  <div style={{ flex: 1, minWidth: 0 }}>
                    <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '2px' }}>
                      <p style={{ fontSize: '13px', fontWeight: '600', color: '#1a1a1a', margin: 0, fontFamily: 'sans-serif' }}>{conv.student}</p>
                      <p style={{ fontSize: '11px', color: '#999', margin: 0, fontFamily: 'sans-serif' }}>{conv.time}</p>
                    </div>
                    <p style={{ fontSize: '11px', color: '#999', margin: '0 0 4px', fontFamily: 'sans-serif' }}>{conv.country} · {conv.level}</p>
                    <p style={{ fontSize: '12px', color: '#666', margin: 0, fontFamily: 'sans-serif', overflow: 'hidden', textOverflow: 'ellipsis', whiteSpace: 'nowrap' }}>{conv.lastMessage}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Right — active conversation */}
        <div style={{ display: 'flex', flexDirection: 'column', background: '#f9f9f7' }}>

          {/* Conversation header */}
          <div style={{ background: 'white', borderBottom: '1px solid #e5e5e5', padding: '1rem 1.5rem', display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem' }}>
              <div style={{ width: '40px', height: '40px', borderRadius: '50%', background: '#E1F5EE', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '13px', fontWeight: '600', color: '#0F6E56', fontFamily: 'sans-serif' }}>
                {active.avatar}
              </div>
              <div>
                <p style={{ fontSize: '15px', fontWeight: '600', color: '#1a1a1a', margin: 0, fontFamily: 'sans-serif' }}>{active.student}</p>
                <p style={{ fontSize: '12px', color: '#999', margin: 0, fontFamily: 'sans-serif' }}>{active.country} · {active.level} · Next session: Today 6:30pm</p>
              </div>
            </div>
            <div style={{ display: 'flex', gap: '0.5rem' }}>
              <Link href="/session/1/prepare" style={{ textDecoration: 'none', border: '1px solid #e5e5e5', color: '#555', padding: '7px 14px', borderRadius: '8px', fontSize: '13px', fontFamily: 'sans-serif', background: 'white' }}>
                Lesson plan
              </Link>
              <Link href="/session/1/room" style={{ textDecoration: 'none', background: '#0F6E56', color: 'white', padding: '7px 14px', borderRadius: '8px', fontSize: '13px', fontWeight: '600', fontFamily: 'sans-serif' }}>
                Enter classroom
              </Link>
            </div>
          </div>

          {/* Messages */}
          <div style={{ flex: 1, overflowY: 'auto', padding: '1.5rem', display: 'flex', flexDirection: 'column', gap: '1rem' }}>
            {active.messages.map((msg, i) => (
              <div key={i} style={{ display: 'flex', justifyContent: msg.from === 'tutor' ? 'flex-end' : 'flex-start' }}>
                <div style={{
                  maxWidth: '65%',
                  background: msg.from === 'tutor' ? '#0F6E56' : 'white',
                  color: msg.from === 'tutor' ? 'white' : '#1a1a1a',
                  border: msg.from === 'tutor' ? 'none' : '1px solid #e5e5e5',
                  borderRadius: msg.from === 'tutor' ? '14px 14px 4px 14px' : '14px 14px 14px 4px',
                  padding: '0.75rem 1rem',
                }}>
                  <p style={{ fontSize: '14px', margin: '0 0 4px', fontFamily: 'sans-serif', lineHeight: '1.5' }}>{msg.text}</p>
                  <p style={{ fontSize: '11px', margin: 0, fontFamily: 'sans-serif', opacity: 0.6 }}>{msg.time}</p>
                </div>
              </div>
            ))}
          </div>

          {/* Message input */}
          <div style={{ background: 'white', borderTop: '1px solid #e5e5e5', padding: '1rem 1.5rem', display: 'flex', gap: '0.75rem', alignItems: 'flex-end' }}>
            <textarea
              placeholder="Write a message..."
              rows={2}
              style={{ flex: 1, border: '1px solid #e5e5e5', borderRadius: '10px', padding: '10px 14px', fontSize: '14px', fontFamily: 'sans-serif', resize: 'none', outline: 'none', lineHeight: '1.5' }}
            />
            <button style={{ background: '#0F6E56', color: 'white', border: 'none', borderRadius: '10px', padding: '10px 20px', fontSize: '14px', fontWeight: '600', cursor: 'pointer', fontFamily: 'sans-serif', whiteSpace: 'nowrap' }}>
              Send
            </button>
          </div>
        </div>
      </div>
    </main>
  )
}