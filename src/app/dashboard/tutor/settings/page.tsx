'use client'

import { useState } from 'react'
import Link from 'next/link'

export default function SettingsPage() {
  const [section, setSection] = useState('password')

  const sections = ['Password', 'Notifications', 'Payout', 'Permissions', 'Delete account']

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
            { label: 'Library', href: '/dashboard/tutor/library', active: false },
            { label: 'Insights', href: '/dashboard/tutor/insights', active: false },
            { label: 'My profile', href: '/dashboard/tutor/profile', active: false },
            { label: 'Settings', href: '/dashboard/tutor/settings', active: true },
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

      <div style={{ maxWidth: '900px', margin: '0 auto', padding: '2rem', display: 'grid', gridTemplateColumns: '200px 1fr', gap: '2rem' }}>

        {/* Left nav */}
        <div>
          <div style={{ background: 'white', border: '1px solid #e5e5e5', borderRadius: '14px', overflow: 'hidden' }}>
            {sections.map((s, i) => (
              <button
                key={s}
                onClick={() => setSection(s.toLowerCase().replace(' ', '-'))}
                style={{
                  width: '100%',
                  padding: '0.875rem 1.25rem',
                  border: 'none',
                  borderBottom: i < sections.length - 1 ? '1px solid #f0f0f0' : 'none',
                  background: section === s.toLowerCase().replace(' ', '-') ? '#F0FDF4' : 'white',
                  borderLeft: section === s.toLowerCase().replace(' ', '-') ? '3px solid #0F6E56' : '3px solid transparent',
                  cursor: 'pointer',
                  textAlign: 'left',
                  fontSize: '14px',
                  fontWeight: section === s.toLowerCase().replace(' ', '-') ? '600' : '400',
                  color: s === 'Delete account' ? '#DC2626' : section === s.toLowerCase().replace(' ', '-') ? '#0F6E56' : '#444',
                  fontFamily: 'sans-serif',
                }}
              >
                {s}
              </button>
            ))}
          </div>
        </div>

        {/* Main content */}
        <div style={{ background: 'white', border: '1px solid #e5e5e5', borderRadius: '14px', padding: '2rem' }}>

          {section === 'password' && (
            <div>
              <h2 style={{ fontSize: '20px', fontWeight: '600', color: '#1a1a1a', marginBottom: '0.5rem' }}>Change password</h2>
              <p style={{ fontSize: '14px', color: '#666', marginBottom: '2rem', fontFamily: 'sans-serif' }}>
                Choose a strong password of at least 8 characters.
              </p>
              {['Current password', 'New password', 'Confirm new password'].map(label => (
                <div key={label} style={{ marginBottom: '1.25rem' }}>
                  <label style={{ fontSize: '13px', fontWeight: '500', color: '#444', display: 'block', marginBottom: '6px', fontFamily: 'sans-serif' }}>{label}</label>
                  <input type="password" style={{ width: '100%', border: '1px solid #e5e5e5', borderRadius: '8px', padding: '10px 14px', fontSize: '14px', fontFamily: 'sans-serif', boxSizing: 'border-box', outline: 'none' }} />
                </div>
              ))}
              <Link href="/forgot-password" style={{ fontSize: '13px', color: '#0F6E56', textDecoration: 'none', fontFamily: 'sans-serif', display: 'block', marginBottom: '1.5rem' }}>
                Forgot your password?
              </Link>
              <button style={{ background: '#0F6E56', color: 'white', border: 'none', borderRadius: '8px', padding: '10px 24px', fontSize: '14px', fontWeight: '600', cursor: 'pointer', fontFamily: 'sans-serif' }}>
                Save changes
              </button>
            </div>
          )}

          {section === 'notifications' && (
            <div>
              <h2 style={{ fontSize: '20px', fontWeight: '600', color: '#1a1a1a', marginBottom: '0.5rem' }}>Notifications</h2>
              <p style={{ fontSize: '14px', color: '#666', marginBottom: '2rem', fontFamily: 'sans-serif' }}>
                Choose when and how you hear from us.
              </p>
              {[
                { label: 'New booking', sub: 'When a learner books a session with you', on: true },
                { label: 'Booking reminder', sub: '24 hours before each session', on: true },
                { label: 'New message', sub: 'When a learner sends you a message', on: true },
                { label: 'Session confirmed', sub: 'When a learner confirms a completed session', on: true },
                { label: 'Cancellation', sub: 'When a learner cancels a booking', on: true },
                { label: 'Payout processed', sub: 'When your weekly payout is sent', on: true },
                { label: 'Platform updates', sub: 'News and updates from Utterly', on: false },
              ].map(({ label, sub, on }) => (
                <div key={label} style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', padding: '1rem 0', borderBottom: '1px solid #f0f0f0' }}>
                  <div>
                    <p style={{ fontSize: '14px', fontWeight: '500', color: '#1a1a1a', margin: '0 0 2px', fontFamily: 'sans-serif' }}>{label}</p>
                    <p style={{ fontSize: '12px', color: '#999', margin: 0, fontFamily: 'sans-serif' }}>{sub}</p>
                  </div>
                  <div style={{ width: '44px', height: '24px', background: on ? '#0F6E56' : '#e5e5e5', borderRadius: '12px', position: 'relative', cursor: 'pointer', flexShrink: 0 }}>
                    <div style={{ width: '18px', height: '18px', background: 'white', borderRadius: '50%', position: 'absolute', top: '3px', left: on ? '23px' : '3px', transition: 'left 0.2s' }} />
                  </div>
                </div>
              ))}
              <button style={{ background: '#0F6E56', color: 'white', border: 'none', borderRadius: '8px', padding: '10px 24px', fontSize: '14px', fontWeight: '600', cursor: 'pointer', fontFamily: 'sans-serif', marginTop: '1.5rem' }}>
                Save preferences
              </button>
            </div>
          )}

          {section === 'payout' && (
            <div>
              <h2 style={{ fontSize: '20px', fontWeight: '600', color: '#1a1a1a', marginBottom: '0.5rem' }}>Payout settings</h2>
              <p style={{ fontSize: '14px', color: '#666', marginBottom: '2rem', fontFamily: 'sans-serif', lineHeight: '1.6' }}>
                Your earnings are paid every Friday directly to your bank account via Stripe. Payments typically arrive within 1–2 business days.
              </p>
              <div style={{ background: '#F0FDF4', border: '1px solid #BBF7D0', borderRadius: '10px', padding: '1.25rem', marginBottom: '1.5rem' }}>
                <p style={{ fontSize: '13px', fontWeight: '600', color: '#0F6E56', margin: '0 0 4px', fontFamily: 'sans-serif' }}>Bank account connected</p>
                <p style={{ fontSize: '13px', color: '#166534', margin: 0, fontFamily: 'sans-serif' }}>Lloyds Bank · ****4521 · Next payout Friday 11 Apr · £167.22</p>
              </div>
              <button style={{ background: 'white', color: '#555', border: '1px solid #e5e5e5', borderRadius: '8px', padding: '10px 20px', fontSize: '14px', cursor: 'pointer', fontFamily: 'sans-serif', marginBottom: '2rem' }}>
                Change bank account
              </button>
              <h3 style={{ fontSize: '16px', fontWeight: '600', color: '#1a1a1a', marginBottom: '1rem' }}>Payout history</h3>
              {[
                { date: 'Fri 4 Apr 2026', amount: '£144.00', status: 'Paid' },
                { date: 'Fri 28 Mar 2026', amount: '£128.00', status: 'Paid' },
                { date: 'Fri 21 Mar 2026', amount: '£160.00', status: 'Paid' },
              ].map(({ date, amount, status }) => (
                <div key={date} style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', padding: '0.875rem 0', borderBottom: '1px solid #f0f0f0' }}>
                  <span style={{ fontSize: '14px', color: '#444', fontFamily: 'sans-serif' }}>{date}</span>
                  <span style={{ fontSize: '14px', fontWeight: '600', color: '#1a1a1a', fontFamily: 'sans-serif' }}>{amount}</span>
                  <span style={{ fontSize: '12px', background: '#E1F5EE', color: '#0F6E56', padding: '3px 10px', borderRadius: '20px', fontFamily: 'sans-serif', fontWeight: '500' }}>{status}</span>
                </div>
              ))}
            </div>
          )}

          {section === 'permissions' && (
            <div>
              <h2 style={{ fontSize: '20px', fontWeight: '600', color: '#1a1a1a', marginBottom: '0.5rem' }}>Permissions</h2>
              <p style={{ fontSize: '14px', color: '#666', marginBottom: '2rem', fontFamily: 'sans-serif', lineHeight: '1.6' }}>
                Control how your data is used on the Utterly platform.
              </p>
              {[
                { label: 'Session recording', sub: 'Allow sessions to be recorded for quality and learning purposes. Learners are notified.', on: true },
                { label: 'Transcript processing', sub: 'Allow session transcripts to be processed to generate lesson insights and reports.', on: true },
                { label: 'Profile visibility', sub: 'Make your profile visible to learners searching on Utterly.', on: false },
                { label: 'Marketing emails', sub: 'Receive tips and resources to help you grow as a tutor.', on: false },
              ].map(({ label, sub, on }) => (
                <div key={label} style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', padding: '1rem 0', borderBottom: '1px solid #f0f0f0' }}>
                  <div style={{ flex: 1, paddingRight: '2rem' }}>
                    <p style={{ fontSize: '14px', fontWeight: '500', color: '#1a1a1a', margin: '0 0 2px', fontFamily: 'sans-serif' }}>{label}</p>
                    <p style={{ fontSize: '12px', color: '#999', margin: 0, fontFamily: 'sans-serif', lineHeight: '1.5' }}>{sub}</p>
                  </div>
                  <div style={{ width: '44px', height: '24px', background: on ? '#0F6E56' : '#e5e5e5', borderRadius: '12px', position: 'relative', cursor: 'pointer', flexShrink: 0 }}>
                    <div style={{ width: '18px', height: '18px', background: 'white', borderRadius: '50%', position: 'absolute', top: '3px', left: on ? '23px' : '3px' }} />
                  </div>
                </div>
              ))}
              <button style={{ background: '#0F6E56', color: 'white', border: 'none', borderRadius: '8px', padding: '10px 24px', fontSize: '14px', fontWeight: '600', cursor: 'pointer', fontFamily: 'sans-serif', marginTop: '1.5rem' }}>
                Save permissions
              </button>
            </div>
          )}

          {section === 'delete-account' && (
            <div>
              <h2 style={{ fontSize: '20px', fontWeight: '600', color: '#DC2626', marginBottom: '0.5rem' }}>Delete account</h2>
              <p style={{ fontSize: '14px', color: '#666', marginBottom: '1.5rem', fontFamily: 'sans-serif', lineHeight: '1.6' }}>
                Deleting your account is permanent and cannot be undone. All your data, sessions, and earnings history will be removed.
              </p>
              <div style={{ background: '#FEF2F2', border: '1px solid #FECACA', borderRadius: '10px', padding: '1.25rem', marginBottom: '1.5rem' }}>
                <p style={{ fontSize: '13px', color: '#DC2626', margin: 0, fontFamily: 'sans-serif', lineHeight: '1.5' }}>
                  Before deleting, please make sure you have no upcoming sessions or pending payouts. Any learners with booked sessions will need to be reassigned.
                </p>
              </div>
              <button style={{ background: '#DC2626', color: 'white', border: 'none', borderRadius: '8px', padding: '10px 24px', fontSize: '14px', fontWeight: '600', cursor: 'pointer', fontFamily: 'sans-serif' }}>
                Delete my account
              </button>
            </div>
          )}

        </div>
      </div>
    </main>
  )
}