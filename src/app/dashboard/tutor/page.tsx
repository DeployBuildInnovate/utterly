'use client'

import Link from 'next/link'
import { useEffect, useState } from 'react'
import { createClient } from '@/lib/supabase/client'

// Placeholder data — replaced with real Supabase queries once bookings are live
const UPCOMING = [
  { id: '1', student: 'Agnieszka W.', avatar: 'AW', date: 'Today', time: '6:30pm – 7:20pm', topic: 'Pronunciation clinic', level: 'B1', urgent: true },
  { id: '2', student: 'Marco T.', avatar: 'MT', date: 'Thu 9 Apr', time: '7:00pm – 7:50pm', topic: 'Business writing essentials', level: 'B2', urgent: false },
  { id: '3', student: 'Lena K.', avatar: 'LK', date: 'Fri 10 Apr', time: '5:30pm – 6:20pm', topic: 'Workplace small talk', level: 'B1', urgent: false },
]

const STUDENTS = [
  { id: '1', name: 'Agnieszka W.', avatar: 'AW', country: '🇵🇱', level: 'B1', lessons: 12, nextLesson: 'Today 6:30pm' },
  { id: '2', name: 'Marco T.', avatar: 'MT', country: '🇮🇹', level: 'B2', lessons: 7, nextLesson: 'Thu 9 Apr' },
  { id: '3', name: 'Lena K.', avatar: 'LK', country: '🇩🇪', level: 'B1', lessons: 4, nextLesson: 'Fri 10 Apr' },
]

const MESSAGES = [
  { id: '1', student: 'Agnieszka W.', avatar: 'AW', preview: 'Thank you for today — the pronunciation exercise really helped!', time: '2h ago', unread: true },
  { id: '2', student: 'Marco T.', avatar: 'MT', preview: 'Could we focus on email writing next session?', time: '1d ago', unread: true },
]

export default function TutorDashboard() {
  const [tutor, setTutor] = useState<{ name: string; email: string; avatar: string } | null>(null)
  const [loading, setLoading] = useState(true)
  const [tab, setTab] = useState<'home' | 'sessions' | 'students' | 'messages' | 'earnings'>('home')

  useEffect(() => {
    const supabase = createClient()
    supabase.auth.getUser().then(({ data }) => {
      if (data.user) {
        const name = data.user.user_metadata?.full_name || data.user.email?.split('@')[0] || 'Tutor'
        const initials = name.split(' ').map((n: string) => n[0]).join('').toUpperCase().slice(0, 2)
        setTutor({
          name,
          email: data.user.email || '',
          avatar: initials,
        })
      }
      setLoading(false)
    })
  }, [])

  const firstName = tutor?.name?.split(' ')[0] || 'there'
  const unreadCount = MESSAGES.filter(m => m.unread).length

  const navItems = [
    { key: 'home' as const, label: 'Home' },
    { key: 'sessions' as const, label: 'Sessions' },
    { key: 'students' as const, label: 'Students' },
    { key: 'messages' as const, label: `Messages${unreadCount > 0 ? ` (${unreadCount})` : ''}` },
    { key: 'earnings' as const, label: 'Earnings' },
  ]

  if (loading) {
    return (
      <div style={{ minHeight: '100vh', display: 'flex', alignItems: 'center', justifyContent: 'center', fontFamily: 'sans-serif', color: '#999' }}>
        Loading...
      </div>
    )
  }

  return (
    <main style={{ fontFamily: 'sans-serif', minHeight: '100vh', background: '#f9f9f7' }}>

      {/* Top nav */}
      <nav style={{ background: 'white', borderBottom: '1px solid #e5e5e5', padding: '0 2rem', display: 'flex', alignItems: 'center', justifyContent: 'space-between', height: '56px' }}>
        <Link href="/" style={{ textDecoration: 'none', fontFamily: 'Georgia, serif', fontSize: '20px', fontWeight: '600', color: '#1a1a1a', letterSpacing: '-0.5px' }}>
          Utt<em style={{ color: '#0F6E56', fontStyle: 'italic' }}>er</em>ly
        </Link>

        <div style={{ display: 'flex', gap: '0.5rem' }}>
          {navItems.map(item => (
            <button
              key={item.key}
              onClick={() => setTab(item.key)}
              style={{
                background: 'none',
                border: 'none',
                padding: '0 1rem',
                height: '56px',
                fontSize: '14px',
                cursor: 'pointer',
                color: tab === item.key ? '#0F6E56' : '#666',
                fontWeight: tab === item.key ? '600' : '400',
                borderBottom: tab === item.key ? '2px solid #0F6E56' : '2px solid transparent',
                fontFamily: 'sans-serif',
              }}
            >
              {item.label}
            </button>
          ))}
        </div>

        <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem' }}>
          <div style={{ width: '32px', height: '32px', borderRadius: '50%', background: '#E1F5EE', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '12px', fontWeight: '600', color: '#0F6E56' }}>
            {tutor?.avatar}
          </div>
          <span style={{ fontSize: '14px', color: '#444' }}>{firstName}</span>
        </div>
      </nav>

      <div style={{ maxWidth: '960px', margin: '0 auto', padding: '2rem' }}>

        {/* HOME TAB */}
        {tab === 'home' && (
          <div>
            <h1 style={{ fontFamily: 'Georgia, serif', fontSize: '26px', fontWeight: '600', color: '#1a1a1a', marginBottom: '0.25rem' }}>
              Good evening, {firstName}
            </h1>
            <p style={{ fontSize: '14px', color: '#999', marginBottom: '2rem' }}>
              {tutor?.email}
            </p>

            {/* Next session */}
            <div style={{ background: '#0F6E56', borderRadius: '16px', padding: '1.75rem', marginBottom: '1.5rem', color: 'white' }}>
              <p style={{ fontSize: '11px', fontWeight: '500', textTransform: 'uppercase', letterSpacing: '1.5px', color: '#9FE1CB', marginBottom: '0.5rem' }}>
                Next session · {UPCOMING[0].date} at {UPCOMING[0].time}
              </p>
              <h2 style={{ fontFamily: 'Georgia, serif', fontSize: '20px', fontWeight: '600', marginBottom: '0.25rem' }}>
                {UPCOMING[0].topic}
              </h2>
              <p style={{ fontSize: '14px', color: '#9FE1CB', marginBottom: '1.5rem' }}>
                with {UPCOMING[0].student} · Level {UPCOMING[0].level}
              </p>
              <Link href="/session/demo/room" style={{ display: 'inline-block', textDecoration: 'none', background: 'white', color: '#0F6E56', padding: '12px 24px', borderRadius: '8px', fontSize: '14px', fontWeight: '600' }}>
                Enter classroom →
              </Link>
            </div>

            {/* Stats */}
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: '1rem', marginBottom: '1.5rem' }}>
              {[
                { label: 'Sessions this week', value: '3' },
                { label: 'Active students', value: `${STUDENTS.length}` },
                { label: 'Hours taught', value: '47' },
                { label: 'This week earnings', value: '£144' },
              ].map(stat => (
                <div key={stat.label} style={{ background: 'white', border: '1px solid #e5e5e5', borderRadius: '12px', padding: '1.25rem', textAlign: 'center' }}>
                  <div style={{ fontFamily: 'Georgia, serif', fontSize: '28px', fontWeight: '600', color: '#1a1a1a', marginBottom: '4px' }}>{stat.value}</div>
                  <div style={{ fontSize: '12px', color: '#999' }}>{stat.label}</div>
                </div>
              ))}
            </div>

            {/* Upcoming sessions */}
            <div style={{ background: 'white', border: '1px solid #e5e5e5', borderRadius: '12px', padding: '1.25rem', marginBottom: '1rem' }}>
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '1rem' }}>
                <h3 style={{ fontSize: '14px', fontWeight: '600', color: '#1a1a1a', margin: 0 }}>Upcoming sessions</h3>
                <button onClick={() => setTab('sessions')} style={{ fontSize: '12px', color: '#0F6E56', background: 'none', border: 'none', cursor: 'pointer' }}>See all →</button>
              </div>
              {UPCOMING.map(session => (
                <div key={session.id} style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', padding: '10px 0', borderBottom: '1px solid #f5f5f0' }}>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem' }}>
                    <div style={{ width: '36px', height: '36px', borderRadius: '50%', background: '#E1F5EE', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '11px', fontWeight: '600', color: '#0F6E56' }}>
                      {session.avatar}
                    </div>
                    <div>
                      <p style={{ fontSize: '14px', fontWeight: '500', color: '#1a1a1a', margin: 0 }}>{session.student}</p>
                      <p style={{ fontSize: '12px', color: '#999', margin: 0 }}>{session.date} · {session.time} · {session.topic}</p>
                    </div>
                  </div>
                  {session.urgent && (
                    <span style={{ fontSize: '11px', background: '#E1F5EE', color: '#0F6E56', padding: '3px 10px', borderRadius: '20px', fontWeight: '500' }}>Today</span>
                  )}
                </div>
              ))}
            </div>

            {/* Messages preview */}
            {unreadCount > 0 && (
              <div style={{ background: 'white', border: '1px solid #e5e5e5', borderRadius: '12px', padding: '1.25rem' }}>
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '1rem' }}>
                  <h3 style={{ fontSize: '14px', fontWeight: '600', color: '#1a1a1a', margin: 0 }}>Unread messages</h3>
                  <button onClick={() => setTab('messages')} style={{ fontSize: '12px', color: '#0F6E56', background: 'none', border: 'none', cursor: 'pointer' }}>See all →</button>
                </div>
                {MESSAGES.filter(m => m.unread).map(msg => (
                  <div key={msg.id} style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', padding: '10px 0', borderBottom: '1px solid #f5f5f0' }}>
                    <div style={{ width: '36px', height: '36px', borderRadius: '50%', background: '#E1F5EE', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '11px', fontWeight: '600', color: '#0F6E56' }}>
                      {msg.avatar}
                    </div>
                    <div style={{ flex: 1 }}>
                      <p style={{ fontSize: '14px', fontWeight: '500', color: '#1a1a1a', margin: 0 }}>{msg.student}</p>
                      <p style={{ fontSize: '13px', color: '#666', margin: 0 }}>{msg.preview}</p>
                    </div>
                    <span style={{ fontSize: '12px', color: '#999' }}>{msg.time}</span>
                  </div>
                ))}
              </div>
            )}
          </div>
        )}

        {/* SESSIONS TAB */}
        {tab === 'sessions' && (
          <div>
            <h1 style={{ fontFamily: 'Georgia, serif', fontSize: '26px', fontWeight: '600', color: '#1a1a1a', marginBottom: '2rem' }}>Sessions</h1>
            <div style={{ display: 'grid', gap: '0.75rem' }}>
              {UPCOMING.map(session => (
                <div key={session.id} style={{ background: 'white', border: '1px solid #e5e5e5', borderRadius: '12px', padding: '1.25rem', display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
                    <div style={{ width: '44px', height: '44px', borderRadius: '50%', background: '#E1F5EE', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '12px', fontWeight: '600', color: '#0F6E56' }}>
                      {session.avatar}
                    </div>
                    <div>
                      <p style={{ fontSize: '15px', fontWeight: '500', color: '#1a1a1a', margin: '0 0 2px' }}>{session.student}</p>
                      <p style={{ fontSize: '13px', color: '#999', margin: 0 }}>{session.date} · {session.time} · {session.topic} · Level {session.level}</p>
                    </div>
                  </div>
                  <Link href="/session/demo/room" style={{ textDecoration: 'none', background: '#0F6E56', color: 'white', padding: '9px 18px', borderRadius: '8px', fontSize: '13px', fontWeight: '500' }}>
                    Enter classroom
                  </Link>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* STUDENTS TAB */}
        {tab === 'students' && (
          <div>
            <h1 style={{ fontFamily: 'Georgia, serif', fontSize: '26px', fontWeight: '600', color: '#1a1a1a', marginBottom: '2rem' }}>Students</h1>
            <div style={{ display: 'grid', gap: '0.75rem' }}>
              {STUDENTS.map(student => (
                <div key={student.id} style={{ background: 'white', border: '1px solid #e5e5e5', borderRadius: '12px', padding: '1.25rem', display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
                    <div style={{ width: '44px', height: '44px', borderRadius: '50%', background: '#E1F5EE', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '12px', fontWeight: '600', color: '#0F6E56' }}>
                      {student.avatar}
                    </div>
                    <div>
                      <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', marginBottom: '2px' }}>
                        <p style={{ fontSize: '15px', fontWeight: '500', color: '#1a1a1a', margin: 0 }}>{student.name}</p>
                        <span>{student.country}</span>
                        <span style={{ fontSize: '12px', background: '#E1F5EE', color: '#0F6E56', padding: '2px 8px', borderRadius: '20px' }}>{student.level}</span>
                      </div>
                      <p style={{ fontSize: '13px', color: '#999', margin: 0 }}>{student.lessons} lessons · Next: {student.nextLesson}</p>
                    </div>
                  </div>
                  <div style={{ display: 'flex', gap: '0.5rem' }}>
                    <button style={{ fontSize: '13px', color: '#555', background: 'none', border: '1px solid #e5e5e5', borderRadius: '8px', padding: '8px 14px', cursor: 'pointer' }}>
                      View profile
                    </button>
                    <button style={{ fontSize: '13px', color: '#0F6E56', background: '#E1F5EE', border: 'none', borderRadius: '8px', padding: '8px 14px', cursor: 'pointer' }}>
                      Message
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* MESSAGES TAB */}
        {tab === 'messages' && (
          <div>
            <h1 style={{ fontFamily: 'Georgia, serif', fontSize: '26px', fontWeight: '600', color: '#1a1a1a', marginBottom: '2rem' }}>Messages</h1>
            <div style={{ display: 'grid', gridTemplateColumns: '260px 1fr', gap: '1rem', height: '500px' }}>
              <div style={{ background: 'white', border: '1px solid #e5e5e5', borderRadius: '12px', overflow: 'hidden' }}>
                {MESSAGES.map(msg => (
                  <div key={msg.id} style={{ padding: '1rem', borderBottom: '1px solid #f5f5f0', display: 'flex', alignItems: 'center', gap: '0.75rem', cursor: 'pointer', background: msg.unread ? '#f9fffe' : 'white' }}>
                    <div style={{ width: '36px', height: '36px', borderRadius: '50%', background: '#E1F5EE', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '11px', fontWeight: '600', color: '#0F6E56', flexShrink: 0 }}>
                      {msg.avatar}
                    </div>
                    <div style={{ flex: 1, minWidth: 0 }}>
                      <div style={{ display: 'flex', justifyContent: 'space-between' }}>
                        <p style={{ fontSize: '14px', fontWeight: msg.unread ? '600' : '400', color: '#1a1a1a', margin: 0 }}>{msg.student}</p>
                        <span style={{ fontSize: '11px', color: '#999' }}>{msg.time}</span>
                      </div>
                      <p style={{ fontSize: '12px', color: '#999', margin: 0, overflow: 'hidden', textOverflow: 'ellipsis', whiteSpace: 'nowrap' }}>{msg.preview}</p>
                    </div>
                    {msg.unread && <div style={{ width: '8px', height: '8px', borderRadius: '50%', background: '#0F6E56', flexShrink: 0 }} />}
                  </div>
                ))}
              </div>
              <div style={{ background: 'white', border: '1px solid #e5e5e5', borderRadius: '12px', display: 'flex', flexDirection: 'column' }}>
                <div style={{ flex: 1, padding: '1.5rem', display: 'flex', flexDirection: 'column', gap: '1rem' }}>
                  <div style={{ maxWidth: '70%', alignSelf: 'flex-end' }}>
                    <div style={{ background: '#f5f5f0', borderRadius: '12px 12px 0 12px', padding: '0.75rem 1rem', fontSize: '14px', color: '#1a1a1a' }}>
                      Great session today Agnieszka — really good progress on those vowel sounds.
                    </div>
                  </div>
                  <div style={{ maxWidth: '70%' }}>
                    <div style={{ background: '#E1F5EE', borderRadius: '12px 12px 12px 0', padding: '0.75rem 1rem', fontSize: '14px', color: '#1a1a1a' }}>
                      Thank you for today — the pronunciation exercise really helped!
                    </div>
                    <p style={{ fontSize: '11px', color: '#999', margin: '4px 0 0 4px' }}>Agnieszka · 2h ago</p>
                  </div>
                </div>
                <div style={{ padding: '1rem', borderTop: '1px solid #e5e5e5', display: 'flex', gap: '0.5rem' }}>
                  <input type="text" placeholder="Type a message..." style={{ flex: 1, border: '1px solid #e5e5e5', borderRadius: '8px', padding: '10px 14px', fontSize: '14px', outline: 'none' }} />
                  <button style={{ background: '#0F6E56', color: 'white', border: 'none', borderRadius: '8px', padding: '10px 16px', fontSize: '13px', fontWeight: '600', cursor: 'pointer' }}>Send</button>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* EARNINGS TAB */}
        {tab === 'earnings' && (
          <div>
            <h1 style={{ fontFamily: 'Georgia, serif', fontSize: '26px', fontWeight: '600', color: '#1a1a1a', marginBottom: '2rem' }}>Earnings</h1>
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '1rem', marginBottom: '1.5rem' }}>
              {[
                { label: 'This week', value: '£144', sub: '3 sessions' },
                { label: 'This month', value: '£576', sub: '12 sessions' },
                { label: 'All time', value: '£2,241', sub: '47 sessions' },
              ].map(stat => (
                <div key={stat.label} style={{ background: 'white', border: '1px solid #e5e5e5', borderRadius: '12px', padding: '1.5rem', textAlign: 'center' }}>
                  <div style={{ fontFamily: 'Georgia, serif', fontSize: '32px', fontWeight: '600', color: '#1a1a1a', marginBottom: '4px' }}>{stat.value}</div>
                  <div style={{ fontSize: '13px', color: '#999' }}>{stat.label}</div>
                  <div style={{ fontSize: '12px', color: '#0F6E56', marginTop: '4px' }}>{stat.sub}</div>
                </div>
              ))}
            </div>
            <div style={{ background: '#E1F5EE', border: '1px solid #BBF7D0', borderRadius: '12px', padding: '1.25rem', display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
              <div>
                <p style={{ fontSize: '14px', fontWeight: '600', color: '#065F46', margin: '0 0 4px' }}>Next payout — Friday</p>
                <p style={{ fontSize: '13px', color: '#0F6E56', margin: 0 }}>£144 will be transferred to your bank account</p>
              </div>
              <span style={{ fontSize: '24px' }}>💳</span>
            </div>
          </div>
        )}

      </div>
    </main>
  )
}