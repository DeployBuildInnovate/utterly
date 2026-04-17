'use client'

import Link from 'next/link'
import { useEffect, useState } from 'react'
import { useRouter } from 'next/navigation'
import { createClient } from '@/lib/supabase/client'

export default function LearnerDashboard() {
  const [user, setUser] = useState<{ name: string; email: string } | null>(null)
  const [tab, setTab] = useState<'home' | 'messages' | 'lessons' | 'settings'>('home')
  const [dropdown, setDropdown] = useState(false)
  const [notifications, setNotifications] = useState(false)
  const [messagesPanel, setMessagesPanel] = useState(false)
  const [loading, setLoading] = useState(true)
  const router = useRouter()

  useEffect(() => {
    const supabase = createClient()
    supabase.auth.getUser().then(async ({ data }) => {
      if (!data.user) {
        router.push('/login')
        return
      }
      setUser({
        name: data.user.user_metadata?.full_name || 'Learner',
        email: data.user.email || '',
      })
      // Check for bookings
      const { data: bookings } = await supabase
        .from('bookings')
        .select('id')
        .limit(1)
      // New learner — redirect to tutors
      if (!bookings || bookings.length === 0) {
        router.push('/tutors')
        return
      }
      setLoading(false)
    })
  }, [router])

  useEffect(() => {
    function handleClick(e: MouseEvent) {
      const target = e.target as HTMLElement
      if (!target.closest('[data-panel]')) {
        setDropdown(false)
        setNotifications(false)
        setMessagesPanel(false)
      }
    }
    document.addEventListener('mousedown', handleClick)
    return () => document.removeEventListener('mousedown', handleClick)
  }, [])

  async function handleSignOut() {
    const supabase = createClient()
    await supabase.auth.signOut()
    router.push('/')
  }

  const firstName = user?.name?.split(' ')[0] || 'there'

  if (loading) return (
    <div style={{ minHeight: '100vh', display: 'flex', alignItems: 'center', justifyContent: 'center', fontFamily: 'sans-serif', color: '#999' }}>
      Loading...
    </div>
  )

  const NavBar = () => (
    <>
      <nav style={{ background: 'white', borderBottom: '1px solid #e5e5e5', padding: '0 2rem', display: 'flex', alignItems: 'center', justifyContent: 'space-between', height: '56px' }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: '2rem' }}>
          <Link href="/" style={{ textDecoration: 'none', fontFamily: 'Georgia, serif', fontSize: '20px', fontWeight: '600', color: '#1a1a1a', letterSpacing: '-0.5px' }}>
            Utt<em style={{ color: '#0F6E56', fontStyle: 'italic' }}>er</em>ly
          </Link>
          <Link href="/tutors" style={{ textDecoration: 'none', fontSize: '14px', color: '#444', fontWeight: '500' }}>
            Find a tutor
          </Link>
        </div>
        <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
          <Link href="/dashboard/learner/refer" style={{ textDecoration: 'none', border: '1px solid #e5e5e5', borderRadius: '8px', padding: '7px 14px', fontSize: '13px', color: '#444', fontWeight: '500', marginRight: '0.5rem' }}>
            Refer a friend
          </Link>
          <div data-panel style={{ position: 'relative' }}>
            <button onClick={() => { setMessagesPanel(!messagesPanel); setNotifications(false); setDropdown(false) }}
              style={{ background: 'none', border: 'none', cursor: 'pointer', padding: '8px', fontSize: '18px', display: 'flex', alignItems: 'center' }}>
              💬
            </button>
            {messagesPanel && (
              <div style={{ position: 'absolute', top: '44px', right: 0, background: 'white', border: '1px solid #e5e5e5', borderRadius: '12px', width: '340px', boxShadow: '0 4px 20px rgba(0,0,0,0.12)', zIndex: 200 }}>
                <div style={{ padding: '1rem 1.25rem', borderBottom: '1px solid #f5f5f0', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                  <h3 style={{ fontSize: '16px', fontWeight: '600', margin: 0 }}>Messages</h3>
                  <button onClick={() => setMessagesPanel(false)} style={{ background: 'none', border: 'none', cursor: 'pointer', fontSize: '18px', color: '#999' }}>×</button>
                </div>
                <div style={{ display: 'flex', gap: '1rem', padding: '0.75rem 1.25rem', borderBottom: '1px solid #f5f5f0' }}>
                  {['All', 'Unread', 'Archived'].map(t => (
                    <button key={t} style={{ background: 'none', border: 'none', cursor: 'pointer', fontSize: '14px', color: t === 'All' ? '#0F6E56' : '#999', fontWeight: t === 'All' ? '600' : '400', paddingBottom: '4px', borderBottom: t === 'All' ? '2px solid #0F6E56' : '2px solid transparent' }}>{t}</button>
                  ))}
                </div>
                <div style={{ padding: '2rem 1.25rem', textAlign: 'center', color: '#999' }}>
                  <p style={{ fontSize: '14px', margin: 0 }}>No messages yet</p>
                </div>
              </div>
            )}
          </div>
          <Link href="/help" style={{ textDecoration: 'none', padding: '8px', fontSize: '18px', display: 'flex', alignItems: 'center', color: '#444' }}>❓</Link>
          <Link href="/dashboard/learner/saved" style={{ textDecoration: 'none', padding: '8px', fontSize: '18px', display: 'flex', alignItems: 'center', color: '#444' }}>🤍</Link>
          <div data-panel style={{ position: 'relative' }}>
            <button onClick={() => { setNotifications(!notifications); setMessagesPanel(false); setDropdown(false) }}
              style={{ background: 'none', border: 'none', cursor: 'pointer', padding: '8px', fontSize: '18px', display: 'flex', alignItems: 'center' }}>
              🔔
            </button>
            {notifications && (
              <div style={{ position: 'absolute', top: '44px', right: 0, background: 'white', border: '1px solid #e5e5e5', borderRadius: '12px', width: '320px', boxShadow: '0 4px 20px rgba(0,0,0,0.12)', zIndex: 200 }}>
                <div style={{ padding: '1rem 1.25rem', borderBottom: '1px solid #f5f5f0', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                  <h3 style={{ fontSize: '16px', fontWeight: '600', margin: 0 }}>Notifications</h3>
                  <button onClick={() => setNotifications(false)} style={{ background: 'none', border: 'none', cursor: 'pointer', fontSize: '18px', color: '#999' }}>×</button>
                </div>
                <div style={{ padding: '3rem 1.25rem', textAlign: 'center' }}>
                  <div style={{ fontSize: '32px', marginBottom: '0.75rem' }}>🔔</div>
                  <p style={{ fontSize: '14px', fontWeight: '600', color: '#1a1a1a', margin: '0 0 4px' }}>No notifications yet</p>
                  <p style={{ fontSize: '13px', color: '#999', margin: 0 }}>Keep an eye on this feed for updates about your learning journey</p>
                </div>
              </div>
            )}
          </div>
          <div data-panel style={{ position: 'relative' }}>
            <button onClick={() => { setDropdown(!dropdown); setNotifications(false); setMessagesPanel(false) }}
              style={{ width: '32px', height: '32px', borderRadius: '50%', background: '#E1F5EE', border: 'none', cursor: 'pointer', fontSize: '12px', fontWeight: '600', color: '#0F6E56' }}>
              {firstName[0]}
            </button>
            {dropdown && (
              <div style={{ position: 'absolute', top: '44px', right: 0, background: 'white', border: '1px solid #e5e5e5', borderRadius: '12px', padding: '8px', minWidth: '200px', boxShadow: '0 4px 20px rgba(0,0,0,0.1)', zIndex: 200 }}>
                <div style={{ padding: '8px 12px 12px', borderBottom: '1px solid #f5f5f0', marginBottom: '4px' }}>
                  <p style={{ fontSize: '14px', fontWeight: '600', color: '#1a1a1a', margin: 0 }}>{user?.name}</p>
                  <p style={{ fontSize: '12px', color: '#999', margin: '2px 0 0' }}>{user?.email}</p>
                </div>
                {[
                  { label: 'Home', action: () => { setTab('home'); setDropdown(false) } },
                  { label: 'Messages', action: () => { setTab('messages'); setDropdown(false) } },
                  { label: 'My lessons', action: () => { setTab('lessons'); setDropdown(false) } },
                  { label: 'Saved tutors', action: () => { router.push('/dashboard/learner/saved'); setDropdown(false) } },
                  { label: 'Refer a friend', action: () => { router.push('/dashboard/learner/refer'); setDropdown(false) } },
                  { label: 'Settings', action: () => { setTab('settings'); setDropdown(false) } },
                  { label: 'Help', action: () => { router.push('/help'); setDropdown(false) } },
                ].map(item => (
                  <button key={item.label} onClick={item.action}
                    style={{ display: 'block', width: '100%', textAlign: 'left', padding: '9px 12px', fontSize: '14px', color: '#444', background: 'none', border: 'none', cursor: 'pointer', borderRadius: '8px' }}>
                    {item.label}
                  </button>
                ))}
                <div style={{ borderTop: '1px solid #f5f5f0', marginTop: '4px', paddingTop: '4px' }}>
                  <button onClick={handleSignOut}
                    style={{ display: 'block', width: '100%', textAlign: 'left', padding: '9px 12px', fontSize: '14px', color: '#DC2626', background: 'none', border: 'none', cursor: 'pointer', borderRadius: '8px' }}>
                    Log out
                  </button>
                </div>
              </div>
            )}
          </div>
        </div>
      </nav>
      <div style={{ background: 'white', borderBottom: '1px solid #e5e5e5', padding: '0 2rem', display: 'flex' }}>
        {[
          { key: 'home' as const, label: 'Home' },
          { key: 'messages' as const, label: 'Messages' },
          { key: 'lessons' as const, label: 'My lessons' },
          { key: 'settings' as const, label: 'Settings' },
        ].map(item => (
          <button key={item.key} onClick={() => setTab(item.key)}
            style={{ background: 'none', border: 'none', padding: '0 1rem', height: '48px', fontSize: '14px', cursor: 'pointer', color: tab === item.key ? '#1a1a1a' : '#666', fontWeight: tab === item.key ? '600' : '400', borderBottom: tab === item.key ? '2px solid #0F6E56' : '2px solid transparent' }}>
            {item.label}
          </button>
        ))}
      </div>
    </>
  )

  return (
    <main style={{ fontFamily: 'sans-serif', minHeight: '100vh', background: '#f9f9f7' }}>
      <NavBar />
      <div style={{ maxWidth: '960px', margin: '0 auto', padding: '2rem' }}>

        {tab === 'home' && (
          <div>
            <h1 style={{ fontFamily: 'Georgia, serif', fontSize: '26px', fontWeight: '600', color: '#1a1a1a', marginBottom: '2rem' }}>
              Welcome back, {firstName}
            </h1>
            <div style={{ background: '#0F6E56', borderRadius: '16px', padding: '1.75rem', marginBottom: '1.5rem', color: 'white' }}>
              <p style={{ fontSize: '11px', fontWeight: '500', textTransform: 'uppercase', letterSpacing: '1.5px', color: '#9FE1CB', marginBottom: '0.5rem' }}>
                Next lesson · Today at 6:00pm
              </p>
              <h2 style={{ fontFamily: 'Georgia, serif', fontSize: '20px', fontWeight: '600', marginBottom: '0.25rem' }}>
                British workplace small talk
              </h2>
              <p style={{ fontSize: '14px', color: '#9FE1CB', marginBottom: '1.5rem' }}>with Sarah R. · 50 minutes</p>
              <Link href="/session/demo/room" style={{ display: 'inline-block', textDecoration: 'none', background: 'white', color: '#0F6E56', padding: '12px 24px', borderRadius: '8px', fontSize: '14px', fontWeight: '600' }}>
                Enter classroom →
              </Link>
            </div>
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: '1rem' }}>
              {[
                { label: 'Lessons completed', value: '4' },
                { label: 'Hours learned', value: '3.5' },
                { label: 'Words mastered', value: '47' },
                { label: 'Day streak', value: '6 🔥' },
              ].map(stat => (
                <div key={stat.label} style={{ background: 'white', border: '1px solid #e5e5e5', borderRadius: '12px', padding: '1.25rem', textAlign: 'center' }}>
                  <div style={{ fontFamily: 'Georgia, serif', fontSize: '28px', fontWeight: '600', color: '#1a1a1a', marginBottom: '4px' }}>{stat.value}</div>
                  <div style={{ fontSize: '12px', color: '#999' }}>{stat.label}</div>
                </div>
              ))}
            </div>
          </div>
        )}

        {tab === 'messages' && (
          <div>
            <h1 style={{ fontFamily: 'Georgia, serif', fontSize: '26px', fontWeight: '600', color: '#1a1a1a', marginBottom: '2rem' }}>Messages</h1>
            <div style={{ display: 'grid', gridTemplateColumns: '240px 1fr', gap: '1rem', height: '500px' }}>
              <div style={{ background: 'white', border: '1px solid #e5e5e5', borderRadius: '12px', overflow: 'hidden' }}>
                <div style={{ padding: '1rem', borderBottom: '1px solid #e5e5e5', display: 'flex', alignItems: 'center', gap: '0.75rem', background: '#f9f9f7' }}>
                  <div style={{ width: '36px', height: '36px', borderRadius: '50%', background: '#E1F5EE', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '12px', fontWeight: '600', color: '#0F6E56' }}>SR</div>
                  <div>
                    <p style={{ fontSize: '14px', fontWeight: '500', color: '#1a1a1a', margin: 0 }}>Sarah R.</p>
                    <p style={{ fontSize: '12px', color: '#999', margin: 0 }}>Your tutor</p>
                  </div>
                </div>
              </div>
              <div style={{ background: 'white', border: '1px solid #e5e5e5', borderRadius: '12px', display: 'flex', flexDirection: 'column' }}>
                <div style={{ flex: 1, padding: '1.5rem' }}>
                  <div style={{ maxWidth: '70%' }}>
                    <div style={{ background: '#f5f5f0', borderRadius: '12px 12px 12px 0', padding: '0.75rem 1rem', fontSize: '14px', color: '#1a1a1a' }}>
                      Great session today! Remember to practise the flashcards I added.
                    </div>
                    <p style={{ fontSize: '11px', color: '#999', margin: '4px 0 0 4px' }}>Sarah · 6:52pm</p>
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

        {tab === 'lessons' && (
          <div>
            <h1 style={{ fontFamily: 'Georgia, serif', fontSize: '26px', fontWeight: '600', color: '#1a1a1a', marginBottom: '2rem' }}>My lessons</h1>
            <div style={{ background: '#0F6E56', borderRadius: '12px', padding: '1.25rem 1.5rem', marginBottom: '1.5rem', display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
              <div>
                <p style={{ fontSize: '12px', color: '#9FE1CB', margin: '0 0 4px', textTransform: 'uppercase', letterSpacing: '1px' }}>Next lesson · Today at 6:00pm</p>
                <p style={{ fontSize: '16px', fontWeight: '600', color: 'white', margin: 0 }}>British workplace small talk · with Sarah R.</p>
              </div>
              <Link href="/session/demo/room" style={{ textDecoration: 'none', background: 'white', color: '#0F6E56', padding: '10px 20px', borderRadius: '8px', fontSize: '13px', fontWeight: '600', flexShrink: 0 }}>
                Enter classroom
              </Link>
            </div>
            <h2 style={{ fontSize: '15px', fontWeight: '600', color: '#1a1a1a', marginBottom: '1rem' }}>Past lessons</h2>
            <div style={{ display: 'grid', gap: '0.75rem' }}>
              {[
                { topic: 'Pronunciation — the long British vowels', date: '3 Apr', duration: '50 min' },
                { topic: 'Business email register', date: '27 Mar', duration: '50 min' },
                { topic: 'Trial lesson — placement and goals', date: '20 Mar', duration: '25 min' },
              ].map((lesson, i) => (
                <div key={i} style={{ background: 'white', border: '1px solid #e5e5e5', borderRadius: '12px', padding: '1.25rem', display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
                  <div>
                    <p style={{ fontSize: '14px', fontWeight: '500', color: '#1a1a1a', margin: '0 0 4px' }}>{lesson.topic}</p>
                    <p style={{ fontSize: '13px', color: '#999', margin: 0 }}>with Sarah R. · {lesson.date} · {lesson.duration}</p>
                  </div>
                  <button style={{ fontSize: '13px', color: '#0F6E56', background: 'none', border: '1px solid #e5e5e5', borderRadius: '6px', padding: '6px 12px', cursor: 'pointer' }}>
                    View notes
                  </button>
                </div>
              ))}
            </div>
          </div>
        )}

        {tab === 'settings' && (
          <div style={{ display: 'grid', gridTemplateColumns: '200px 1fr', gap: '2rem' }}>
            <div>
              {['Account', 'Password', 'Email', 'Payment methods', 'Payment history', 'Autoconfirmation', 'Calendar', 'Notifications', 'Delete account'].map((item, i) => (
                <button key={item} style={{ display: 'block', width: '100%', textAlign: 'left', padding: '10px 12px', fontSize: '14px', color: i === 0 ? '#0F6E56' : '#444', background: 'none', border: 'none', cursor: 'pointer', borderLeft: i === 0 ? '3px solid #0F6E56' : '3px solid transparent', fontWeight: i === 0 ? '600' : '400' }}>
                  {item}
                </button>
              ))}
            </div>
            <div style={{ background: 'white', border: '1px solid #e5e5e5', borderRadius: '16px', padding: '2rem' }}>
              <h2 style={{ fontFamily: 'Georgia, serif', fontSize: '22px', fontWeight: '600', color: '#1a1a1a', marginBottom: '2rem' }}>Account settings</h2>
              <div style={{ marginBottom: '2rem', display: 'flex', alignItems: 'center', gap: '1.5rem' }}>
                <div style={{ width: '80px', height: '80px', borderRadius: '50%', background: '#E1F5EE', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '24px', fontWeight: '600', color: '#0F6E56' }}>
                  {firstName[0]}
                </div>
                <div>
                  <button style={{ border: '1px solid #e5e5e5', background: 'white', borderRadius: '8px', padding: '8px 16px', fontSize: '13px', cursor: 'pointer', marginBottom: '4px', display: 'block' }}>Upload photo</button>
                  <p style={{ fontSize: '12px', color: '#999', margin: 0 }}>Maximum 2MB · JPG or PNG</p>
                </div>
              </div>
              <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1rem', marginBottom: '1rem' }}>
                <div>
                  <label style={{ fontSize: '13px', fontWeight: '500', color: '#444', display: 'block', marginBottom: '6px' }}>First name</label>
                  <input defaultValue={firstName} style={{ width: '100%', border: '1px solid #e5e5e5', borderRadius: '8px', padding: '10px 14px', fontSize: '14px', boxSizing: 'border-box', outline: 'none' }} />
                </div>
                <div>
                  <label style={{ fontSize: '13px', fontWeight: '500', color: '#444', display: 'block', marginBottom: '6px' }}>Last name</label>
                  <input style={{ width: '100%', border: '1px solid #e5e5e5', borderRadius: '8px', padding: '10px 14px', fontSize: '14px', boxSizing: 'border-box', outline: 'none' }} />
                </div>
              </div>
              <div style={{ marginBottom: '1rem' }}>
                <label style={{ fontSize: '13px', fontWeight: '500', color: '#444', display: 'block', marginBottom: '6px' }}>Email address</label>
                <input defaultValue={user?.email} disabled style={{ width: '100%', border: '1px solid #e5e5e5', borderRadius: '8px', padding: '10px 14px', fontSize: '14px', boxSizing: 'border-box', background: '#f9f9f7', color: '#999' }} />
              </div>
              <div style={{ marginBottom: '2rem' }}>
                <label style={{ fontSize: '13px', fontWeight: '500', color: '#444', display: 'block', marginBottom: '6px' }}>Timezone</label>
                <select style={{ width: '100%', border: '1px solid #e5e5e5', borderRadius: '8px', padding: '10px 14px', fontSize: '14px', background: 'white' }}>
                  <option>Europe/London GMT +1:00</option>
                  <option>Europe/Paris GMT +2:00</option>
                  <option>Europe/Warsaw GMT +2:00</option>
                  <option>Europe/Berlin GMT +2:00</option>
                  <option>Asia/Tokyo GMT +9:00</option>
                  <option>America/Sao_Paulo GMT -3:00</option>
                </select>
              </div>
              <button style={{ background: '#0F6E56', color: 'white', border: 'none', borderRadius: '8px', padding: '12px 24px', fontSize: '14px', fontWeight: '600', cursor: 'pointer' }}>
                Save changes
              </button>
            </div>
          </div>
        )}

      </div>
    </main>
  )
}