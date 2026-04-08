'use client'

import { useState } from 'react'
import Link from 'next/link'

export default function ProfilePage() {
  const [section, setSection] = useState('about')

  const sections = ['About', 'Photo', 'Video', 'Specialisms', 'Pricing', 'Qualifications']

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
            { label: 'My profile', href: '/dashboard/tutor/profile', active: true },
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

      <div style={{ maxWidth: '1100px', margin: '0 auto', padding: '2rem', display: 'grid', gridTemplateColumns: '220px 1fr 260px', gap: '2rem' }}>

        {/* Left nav */}
        <div>
          <div style={{ background: 'white', border: '1px solid #e5e5e5', borderRadius: '14px', overflow: 'hidden' }}>
            {sections.map((s, i) => (
              <button
                key={s}
                onClick={() => setSection(s.toLowerCase())}
                style={{
                  width: '100%',
                  padding: '0.875rem 1.25rem',
                  border: 'none',
                  borderBottom: i < sections.length - 1 ? '1px solid #f0f0f0' : 'none',
                  background: section === s.toLowerCase() ? '#F0FDF4' : 'white',
                  borderLeft: section === s.toLowerCase() ? '3px solid #0F6E56' : '3px solid transparent',
                  cursor: 'pointer',
                  textAlign: 'left',
                  fontSize: '14px',
                  fontWeight: section === s.toLowerCase() ? '600' : '400',
                  color: section === s.toLowerCase() ? '#0F6E56' : '#444',
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

          {section === 'about' && (
            <div>
              <h2 style={{ fontSize: '20px', fontWeight: '600', color: '#1a1a1a', marginBottom: '0.5rem' }}>About</h2>
              <p style={{ fontSize: '14px', color: '#666', marginBottom: '2rem', fontFamily: 'sans-serif', lineHeight: '1.6' }}>
                This is your public profile. Learners will read this when deciding whether to book with you.
              </p>
              <div style={{ marginBottom: '1.25rem' }}>
                <label style={{ fontSize: '13px', fontWeight: '500', color: '#444', display: 'block', marginBottom: '6px', fontFamily: 'sans-serif' }}>First name</label>
                <input defaultValue="Sarah" style={{ width: '100%', border: '1px solid #e5e5e5', borderRadius: '8px', padding: '10px 14px', fontSize: '14px', fontFamily: 'sans-serif', boxSizing: 'border-box', outline: 'none' }} />
              </div>
              <div style={{ marginBottom: '1.25rem' }}>
                <label style={{ fontSize: '13px', fontWeight: '500', color: '#444', display: 'block', marginBottom: '6px', fontFamily: 'sans-serif' }}>Last name initial</label>
                <input defaultValue="R." style={{ width: '100%', border: '1px solid #e5e5e5', borderRadius: '8px', padding: '10px 14px', fontSize: '14px', fontFamily: 'sans-serif', boxSizing: 'border-box', outline: 'none' }} />
              </div>
              <div style={{ marginBottom: '1.25rem' }}>
                <label style={{ fontSize: '13px', fontWeight: '500', color: '#444', display: 'block', marginBottom: '6px', fontFamily: 'sans-serif' }}>City</label>
                <input defaultValue="Leeds" style={{ width: '100%', border: '1px solid #e5e5e5', borderRadius: '8px', padding: '10px 14px', fontSize: '14px', fontFamily: 'sans-serif', boxSizing: 'border-box', outline: 'none' }} />
              </div>
              <div style={{ marginBottom: '1.25rem' }}>
                <label style={{ fontSize: '13px', fontWeight: '500', color: '#444', display: 'block', marginBottom: '6px', fontFamily: 'sans-serif' }}>Timezone</label>
                <select style={{ width: '100%', border: '1px solid #e5e5e5', borderRadius: '8px', padding: '10px 14px', fontSize: '14px', fontFamily: 'sans-serif', outline: 'none', background: 'white' }}>
                  <option>BST — Europe/London</option>
                </select>
              </div>
              <button style={{ background: '#0F6E56', color: 'white', border: 'none', borderRadius: '8px', padding: '10px 24px', fontSize: '14px', fontWeight: '600', cursor: 'pointer', fontFamily: 'sans-serif' }}>
                Save changes
              </button>
            </div>
          )}

          {section === 'photo' && (
            <div>
              <h2 style={{ fontSize: '20px', fontWeight: '600', color: '#1a1a1a', marginBottom: '0.5rem' }}>Profile photo</h2>
              <p style={{ fontSize: '14px', color: '#666', marginBottom: '2rem', fontFamily: 'sans-serif', lineHeight: '1.6' }}>
                A clear, well-lit photo of your face. Learners are much more likely to book tutors with a good profile photo.
              </p>
              <div style={{ display: 'flex', alignItems: 'center', gap: '2rem' }}>
                <div style={{ width: '100px', height: '100px', borderRadius: '50%', background: '#E1F5EE', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '28px', fontWeight: '600', color: '#0F6E56', fontFamily: 'sans-serif', flexShrink: 0 }}>
                  SR
                </div>
                <div>
                  <button style={{ background: '#0F6E56', color: 'white', border: 'none', borderRadius: '8px', padding: '10px 20px', fontSize: '14px', fontWeight: '600', cursor: 'pointer', fontFamily: 'sans-serif', marginBottom: '0.5rem', display: 'block' }}>
                    Upload photo
                  </button>
                  <p style={{ fontSize: '12px', color: '#999', margin: 0, fontFamily: 'sans-serif', lineHeight: '1.5' }}>
                    JPG or PNG. At least 400×400px. Face clearly visible, neutral background.
                  </p>
                </div>
              </div>
            </div>
          )}

          {section === 'video' && (
            <div>
              <h2 style={{ fontSize: '20px', fontWeight: '600', color: '#1a1a1a', marginBottom: '0.5rem' }}>Introduction video</h2>
              <p style={{ fontSize: '14px', color: '#666', marginBottom: '2rem', fontFamily: 'sans-serif', lineHeight: '1.6' }}>
                A 30 to 90 second video introducing yourself. This is the most important part of your profile — learners watch the video before they book. Record it directly here.
              </p>
              <div style={{ width: '100%', aspectRatio: '16/9', background: '#f5f5f0', border: '2px dashed #e5e5e5', borderRadius: '12px', display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', gap: '1rem', marginBottom: '1rem' }}>
                <div style={{ fontSize: '48px' }}>🎥</div>
                <p style={{ fontSize: '15px', fontWeight: '500', color: '#444', margin: 0, fontFamily: 'sans-serif' }}>No video yet</p>
                <p style={{ fontSize: '13px', color: '#999', margin: 0, fontFamily: 'sans-serif' }}>Record directly or upload an existing video</p>
              </div>
              <div style={{ display: 'flex', gap: '0.75rem' }}>
                <button style={{ background: '#0F6E56', color: 'white', border: 'none', borderRadius: '8px', padding: '10px 20px', fontSize: '14px', fontWeight: '600', cursor: 'pointer', fontFamily: 'sans-serif' }}>
                  Record video
                </button>
                <button style={{ background: 'white', color: '#555', border: '1px solid #e5e5e5', borderRadius: '8px', padding: '10px 20px', fontSize: '14px', cursor: 'pointer', fontFamily: 'sans-serif' }}>
                  Upload video
                </button>
              </div>
            </div>
          )}

          {section === 'specialisms' && (
            <div>
              <h2 style={{ fontSize: '20px', fontWeight: '600', color: '#1a1a1a', marginBottom: '0.5rem' }}>Specialisms and levels</h2>
              <p style={{ fontSize: '14px', color: '#666', marginBottom: '2rem', fontFamily: 'sans-serif', lineHeight: '1.6' }}>
                What you teach best and which levels you are comfortable with.
              </p>
              <div style={{ marginBottom: '1.5rem' }}>
                <label style={{ fontSize: '13px', fontWeight: '500', color: '#444', display: 'block', marginBottom: '0.75rem', fontFamily: 'sans-serif' }}>Specialisms</label>
                <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '0.5rem' }}>
                  {['Pronunciation', 'Conversation', 'Business English', 'Grammar', 'Writing', 'Exam prep', 'Fluency', 'Idioms', 'Listening'].map(s => (
                    <label key={s} style={{ display: 'flex', alignItems: 'center', gap: '8px', fontSize: '13px', color: '#444', cursor: 'pointer', fontFamily: 'sans-serif' }}>
                      <input type="checkbox" defaultChecked={['Pronunciation', 'Conversation', 'Business English'].includes(s)} style={{ accentColor: '#0F6E56' }} />
                      {s}
                    </label>
                  ))}
                </div>
              </div>
              <div style={{ marginBottom: '1.5rem' }}>
                <label style={{ fontSize: '13px', fontWeight: '500', color: '#444', display: 'block', marginBottom: '0.75rem', fontFamily: 'sans-serif' }}>Levels you teach</label>
                <div style={{ display: 'flex', gap: '0.5rem', flexWrap: 'wrap' }}>
                  {['A1', 'A2', 'B1', 'B2', 'C1', 'C2'].map(l => (
                    <label key={l} style={{ display: 'flex', alignItems: 'center', gap: '6px', fontSize: '13px', color: '#444', cursor: 'pointer', fontFamily: 'sans-serif', border: '1px solid #e5e5e5', borderRadius: '8px', padding: '6px 12px', background: ['A1', 'A2', 'B1', 'B2'].includes(l) ? '#E1F5EE' : 'white' }}>
                      <input type="checkbox" defaultChecked={['A1', 'A2', 'B1', 'B2'].includes(l)} style={{ accentColor: '#0F6E56' }} />
                      {l}
                    </label>
                  ))}
                </div>
              </div>
              <button style={{ background: '#0F6E56', color: 'white', border: 'none', borderRadius: '8px', padding: '10px 24px', fontSize: '14px', fontWeight: '600', cursor: 'pointer', fontFamily: 'sans-serif' }}>
                Save changes
              </button>
            </div>
          )}

          {section === 'pricing' && (
            <div>
              <h2 style={{ fontSize: '20px', fontWeight: '600', color: '#1a1a1a', marginBottom: '0.5rem' }}>Pricing</h2>
              <p style={{ fontSize: '14px', color: '#666', marginBottom: '2rem', fontFamily: 'sans-serif', lineHeight: '1.6' }}>
                Set your hourly rate. The minimum rate on Utterly is £16 per hour — the London Living Wage. You can charge more as you build your reputation and reviews.
              </p>
              <div style={{ background: '#F0FDF4', border: '1px solid #BBF7D0', borderRadius: '10px', padding: '1rem 1.25rem', marginBottom: '1.5rem' }}>
                <p style={{ fontSize: '13px', color: '#166534', margin: 0, fontFamily: 'sans-serif', lineHeight: '1.5' }}>
                  Your current commission rate is <strong>15%</strong>. This drops as you teach more hours — reaching 10% after 100 hours taught.
                </p>
              </div>
              <div style={{ marginBottom: '1.25rem' }}>
                <label style={{ fontSize: '13px', fontWeight: '500', color: '#444', display: 'block', marginBottom: '6px', fontFamily: 'sans-serif' }}>Your hourly rate</label>
                <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem' }}>
                  <span style={{ fontSize: '24px', fontWeight: '600', color: '#1a1a1a', fontFamily: 'sans-serif' }}>£</span>
                  <input
                    type="number"
                    defaultValue={16}
                    min={16}
                    style={{ width: '100px', border: '1px solid #e5e5e5', borderRadius: '8px', padding: '10px 14px', fontSize: '24px', fontFamily: 'sans-serif', outline: 'none', fontWeight: '600' }}
                  />
                  <span style={{ fontSize: '14px', color: '#999', fontFamily: 'sans-serif' }}>per hour</span>
                </div>
              </div>
              <div style={{ background: '#f9f9f7', border: '1px solid #e5e5e5', borderRadius: '10px', padding: '1rem 1.25rem', marginBottom: '1.5rem' }}>
                <p style={{ fontSize: '13px', color: '#666', margin: '0 0 4px', fontFamily: 'sans-serif' }}>At £16/hr with 15% commission:</p>
                <p style={{ fontSize: '15px', fontWeight: '600', color: '#1a1a1a', margin: 0, fontFamily: 'sans-serif' }}>You receive £13.60 per session</p>
              </div>
              <button style={{ background: '#0F6E56', color: 'white', border: 'none', borderRadius: '8px', padding: '10px 24px', fontSize: '14px', fontWeight: '600', cursor: 'pointer', fontFamily: 'sans-serif' }}>
                Save rate
              </button>
            </div>
          )}

          {section === 'qualifications' && (
            <div>
              <h2 style={{ fontSize: '20px', fontWeight: '600', color: '#1a1a1a', marginBottom: '0.5rem' }}>Qualifications</h2>
              <p style={{ fontSize: '14px', color: '#666', marginBottom: '2rem', fontFamily: 'sans-serif', lineHeight: '1.6' }}>
                Upload your GCSE certificate and any teaching qualifications. These are verified by Utterly and displayed on your public profile.
              </p>
              {[
                { title: 'GCSE English — C or above', sub: 'Required to teach on Utterly', uploaded: true, cert: 'GCSE Certificate 2012.pdf' },
                { title: 'Teaching qualification', sub: 'CELTA, DELTA, TEFL, or equivalent', uploaded: true, cert: 'CELTA Certificate.pdf' },
                { title: 'Utterly certification', sub: 'Earned through the Utterly training programme', uploaded: false, cert: '' },
              ].map(({ title, sub, uploaded, cert }) => (
                <div key={title} style={{ border: '1px solid #e5e5e5', borderRadius: '10px', padding: '1.25rem', marginBottom: '0.75rem', display: 'flex', alignItems: 'center', justifyContent: 'space-between', gap: '1rem' }}>
                  <div>
                    <p style={{ fontSize: '14px', fontWeight: '600', color: '#1a1a1a', margin: '0 0 2px', fontFamily: 'sans-serif' }}>{title}</p>
                    <p style={{ fontSize: '12px', color: '#999', margin: 0, fontFamily: 'sans-serif' }}>{uploaded ? cert : sub}</p>
                  </div>
                  {uploaded ? (
                    <span style={{ fontSize: '12px', background: '#E1F5EE', color: '#0F6E56', padding: '4px 12px', borderRadius: '20px', fontWeight: '600', fontFamily: 'sans-serif', whiteSpace: 'nowrap' }}>✓ Verified</span>
                  ) : (
                    <button style={{ background: 'white', color: '#555', border: '1px solid #e5e5e5', borderRadius: '8px', padding: '7px 14px', fontSize: '13px', cursor: 'pointer', fontFamily: 'sans-serif', whiteSpace: 'nowrap' }}>
                      Upload
                    </button>
                  )}
                </div>
              ))}
            </div>
          )}

        </div>

        {/* Right — profile preview */}
        <div>
          <div style={{ background: 'white', border: '1px solid #e5e5e5', borderRadius: '14px', padding: '1.25rem', position: 'sticky', top: '72px' }}>
            <p style={{ fontSize: '11px', fontWeight: '600', textTransform: 'uppercase', letterSpacing: '1px', color: '#999', margin: '0 0 1rem', fontFamily: 'sans-serif' }}>Profile preview</p>
            <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', marginBottom: '1rem' }}>
              <div style={{ width: '52px', height: '52px', borderRadius: '50%', background: '#E1F5EE', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '14px', fontWeight: '600', color: '#0F6E56', fontFamily: 'sans-serif', flexShrink: 0 }}>SR</div>
              <div>
                <p style={{ fontSize: '15px', fontWeight: '600', color: '#1a1a1a', margin: 0, fontFamily: 'sans-serif' }}>Sarah R.</p>
                <p style={{ fontSize: '12px', color: '#999', margin: 0, fontFamily: 'sans-serif' }}>Leeds · 8 years · CELTA</p>
                <p style={{ fontSize: '12px', color: '#f59e0b', margin: 0 }}>★ 4.9 · 134 reviews</p>
              </div>
            </div>
            <div style={{ display: 'flex', gap: '0.5rem', flexWrap: 'wrap', marginBottom: '1rem' }}>
              {['Pronunciation', 'Conversation', 'Business English'].map(s => (
                <span key={s} style={{ fontSize: '11px', border: '1px solid #e5e5e5', padding: '3px 8px', borderRadius: '20px', color: '#666', fontFamily: 'sans-serif' }}>{s}</span>
              ))}
            </div>
            <div style={{ borderTop: '1px solid #e5e5e5', paddingTop: '1rem', marginBottom: '1rem' }}>
              <span style={{ fontSize: '12px', background: '#FFF7ED', color: '#C2410C', padding: '3px 10px', borderRadius: '20px', fontFamily: 'sans-serif', fontWeight: '500' }}>Profile hidden</span>
              <p style={{ fontSize: '12px', color: '#999', margin: '0.5rem 0 0', fontFamily: 'sans-serif', lineHeight: '1.4' }}>Complete all sections to go live</p>
            </div>
            <Link href="/tutors/1" style={{ display: 'block', textAlign: 'center', border: '1px solid #0F6E56', color: '#0F6E56', padding: '8px', borderRadius: '8px', textDecoration: 'none', fontSize: '13px', fontWeight: '500', fontFamily: 'sans-serif' }}>
              Preview public profile
            </Link>
          </div>
        </div>

      </div>
    </main>
  )
}