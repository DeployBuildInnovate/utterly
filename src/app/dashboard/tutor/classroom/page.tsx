'use client'

import { useState } from 'react'
import Link from 'next/link'

export default function ClassroomPage() {
  const [micOn, setMicOn] = useState(true)
  const [camOn, setCamOn] = useState(true)

  return (
    <main style={{ fontFamily: 'sans-serif', minHeight: '100vh', background: 'white', display: 'flex', flexDirection: 'column' }}>

      <nav style={{ background: 'white', borderBottom: '1px solid #e5e5e5', padding: '0 2rem', display: 'flex', alignItems: 'center', justifyContent: 'space-between', height: '56px' }}>
        <Link href="/" style={{ textDecoration: 'none', fontSize: '20px', fontWeight: '600', letterSpacing: '-0.5px', color: '#1a1a1a', fontFamily: 'Georgia, serif' }}>
          Utt<em style={{ color: '#0F6E56', fontStyle: 'italic' }}>er</em>ly
        </Link>
        <div style={{ display: 'flex', gap: '0', fontSize: '14px', flex: 1, marginLeft: '2rem' }}>
          {[
            { label: 'Home', href: '/dashboard/tutor', active: false },
            { label: 'Messages', href: '/dashboard/tutor/messages', active: false },
            { label: 'Calendar', href: '/dashboard/tutor/calendar', active: false },
            { label: 'Students', href: '/dashboard/tutor/students', active: false },
            { label: 'Classroom', href: '/dashboard/tutor/classroom', active: true },
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
            <span style={{ fontSize: '12px', color: '#999' }}>Balance</span>
            <span style={{ fontSize: '15px', fontWeight: '600', color: '#1a1a1a' }}>£167.22</span>
          </div>
          <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
            <div style={{ width: '34px', height: '34px', borderRadius: '50%', background: '#E1F5EE', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '12px', fontWeight: '600', color: '#0F6E56' }}>SR</div>
            <span style={{ fontSize: '13px', color: '#444' }}>Sarah R.</span>
          </div>
        </div>
      </nav>

      <div style={{ flex: 1, display: 'flex', alignItems: 'center', justifyContent: 'center', padding: '3rem 2rem' }}>
        <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', maxWidth: '480px', width: '100%' }}>

          <h1 style={{ fontSize: '24px', fontWeight: '600', color: '#1a1a1a', marginBottom: '0.5rem', fontFamily: 'Georgia, serif', textAlign: 'center' }}>
            Ready to teach?
          </h1>
          <p style={{ fontSize: '14px', color: '#999', marginBottom: '2rem', textAlign: 'center' }}>
            Check your camera and microphone then enter the classroom.
          </p>

          {/* Camera window */}
          <div style={{ width: '100%', aspectRatio: '4/3', background: '#e8f0e8', borderRadius: '12px', marginBottom: '1.25rem', position: 'relative', overflow: 'hidden', border: '1px solid #ddd' }}>
            <div style={{ width: '100%', height: '100%', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
              <div style={{ width: '80px', height: '80px', borderRadius: '50%', background: '#c8dcc8', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '32px' }}>
                👤
              </div>
            </div>
            <div style={{ position: 'absolute', top: '12px', left: '12px', display: 'flex', alignItems: 'center', gap: '6px', background: 'white', borderRadius: '20px', padding: '4px 10px', border: '1px solid #e5e5e5' }}>
              <div style={{ width: '8px', height: '8px', borderRadius: '50%', background: '#0F6E56' }} />
              <span style={{ fontSize: '11px', color: '#444', fontWeight: '500' }}>Live preview</span>
            </div>
            <div style={{ position: 'absolute', bottom: '12px', left: '12px', background: 'white', borderRadius: '6px', padding: '4px 10px', border: '1px solid #e5e5e5' }}>
              <span style={{ fontSize: '12px', color: '#444' }}>Sarah R. (you)</span>
            </div>
          </div>

          {/* Controls */}
          <div style={{ display: 'flex', gap: '0.75rem', marginBottom: '2rem' }}>
            <button onClick={() => setMicOn(!micOn)} title={micOn ? 'Mute' : 'Unmute'} style={{ width: '52px', height: '52px', borderRadius: '10px', background: micOn ? '#f5f5f0' : '#FEE2E2', border: `1px solid ${micOn ? '#e5e5e5' : '#FCA5A5'}`, cursor: 'pointer', fontSize: '20px', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
              {micOn ? '🎤' : '🔇'}
            </button>
            <button onClick={() => setCamOn(!camOn)} title={camOn ? 'Camera off' : 'Camera on'} style={{ width: '52px', height: '52px', borderRadius: '10px', background: camOn ? '#f5f5f0' : '#FEE2E2', border: `1px solid ${camOn ? '#e5e5e5' : '#FCA5A5'}`, cursor: 'pointer', fontSize: '20px', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
              {camOn ? '📹' : '📷'}
            </button>
            <button title="Settings" style={{ width: '52px', height: '52px', borderRadius: '10px', background: '#f5f5f0', border: '1px solid #e5e5e5', cursor: 'pointer', fontSize: '20px', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
              ⚙️
            </button>
          </div>

          {/* Enter button */}
          <Link href="/session/1/room" style={{ display: 'block', width: '100%', textAlign: 'center', background: '#0F6E56', color: 'white', padding: '16px', borderRadius: '10px', textDecoration: 'none', fontSize: '16px', fontWeight: '700', boxSizing: 'border-box' }}>
            Enter classroom →
          </Link>

          <p style={{ fontSize: '12px', color: '#999', textAlign: 'center', marginTop: '0.75rem' }}>
            Select your student from inside the classroom
          </p>
        </div>
      </div>
    </main>
  )
}