'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'

const DAYS = ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun']
const HOURS = ['06:00', '07:00', '08:00', '09:00', '10:00', '11:00', '12:00', '13:00', '14:00', '15:00', '16:00', '17:00', '18:00', '19:00', '20:00', '21:00']

interface Booking {
  id: string
  starts_at: string
  ends_at: string
  topic: string
  status: string
  daily_room_url: string
  learner: { full_name: string }
  tutor: { full_name: string }
}

interface Availability {
  id: string
  day_of_week: number
  start_time: string
  end_time: string
}

export default function CalendarPage() {
  const [bookings, setBookings] = useState<Booking[]>([])
  const [availability, setAvailability] = useState<Availability[]>([])
  const [showAvailabilityModal, setShowAvailabilityModal] = useState(false)
  const [newSlot, setNewSlot] = useState({ day_of_week: 0, start_time: '09:00', end_time: '10:00' })
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    fetchData()
  }, [])

  async function fetchData() {
    setLoading(true)
    const [bookingsRes, availabilityRes] = await Promise.all([
      fetch('/api/bookings'),
      fetch('/api/availability'),
    ])
    const bookingsData = await bookingsRes.json()
    const availabilityData = await availabilityRes.json()
    if (Array.isArray(bookingsData)) setBookings(bookingsData)
    if (Array.isArray(availabilityData)) setAvailability(availabilityData)
    setLoading(false)
  }

  async function addAvailability() {
    const res = await fetch('/api/availability', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(newSlot),
    })
    if (res.ok) {
      setShowAvailabilityModal(false)
      fetchData()
    }
  }

  async function deleteAvailability(id: string) {
    await fetch(`/api/availability?id=${id}`, { method: 'DELETE' })
    fetchData()
  }

  function getBookingForSlot(dayIndex: number, hour: number) {
    return bookings.find(b => {
      const date = new Date(b.starts_at)
      const dayOfWeek = (date.getDay() + 6) % 7
      const bookingHour = date.getHours()
      return dayOfWeek === dayIndex && bookingHour === hour
    })
  }

  function getAvailabilityForSlot(dayIndex: number, hour: number) {
    return availability.find(a => {
      const startHour = parseInt(a.start_time.split(':')[0])
      const endHour = parseInt(a.end_time.split(':')[0])
      return a.day_of_week === dayIndex && hour >= startHour && hour < endHour
    })
  }

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
            <span style={{ fontSize: '15px', fontWeight: '600', color: '#1a1a1a', fontFamily: 'sans-serif' }}>£0.00</span>
          </div>
        </div>
      </nav>

      <div style={{ display: 'grid', gridTemplateColumns: '200px 1fr', height: 'calc(100vh - 56px)' }}>

        {/* Sidebar */}
        <div style={{ background: 'white', borderRight: '1px solid #e5e5e5', padding: '1.5rem', display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
          <button
            onClick={() => setShowAvailabilityModal(true)}
            style={{ background: '#0F6E56', color: 'white', border: 'none', borderRadius: '8px', padding: '10px 16px', fontSize: '13px', fontWeight: '600', cursor: 'pointer', fontFamily: 'sans-serif', marginBottom: '0.5rem' }}
          >
            + Set availability
          </button>

          {availability.length > 0 && (
            <div style={{ marginTop: '1rem' }}>
              <p style={{ fontSize: '11px', fontWeight: '600', textTransform: 'uppercase', letterSpacing: '1px', color: '#999', margin: '0 0 0.75rem', fontFamily: 'sans-serif' }}>Your availability</p>
              {availability.map(slot => (
                <div key={slot.id} style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', padding: '6px 0', borderBottom: '1px solid #f0f0f0' }}>
                  <span style={{ fontSize: '12px', color: '#444', fontFamily: 'sans-serif' }}>
                    {DAYS[slot.day_of_week]} {slot.start_time.slice(0, 5)}–{slot.end_time.slice(0, 5)}
                  </span>
                  <button
                    onClick={() => deleteAvailability(slot.id)}
                    style={{ background: 'none', border: 'none', cursor: 'pointer', color: '#DC2626', fontSize: '12px', fontFamily: 'sans-serif' }}
                  >
                    ✕
                  </button>
                </div>
              ))}
            </div>
          )}

          <div style={{ marginTop: '1.5rem' }}>
            <p style={{ fontSize: '11px', fontWeight: '600', textTransform: 'uppercase', letterSpacing: '1px', color: '#999', margin: '0 0 0.75rem', fontFamily: 'sans-serif' }}>Legend</p>
            {[
              { label: 'Booked session', colour: '#0F6E56' },
              { label: 'Available', colour: '#BBF7D0' },
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
          {loading ? (
            <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', height: '100%' }}>
              <p style={{ color: '#999', fontFamily: 'sans-serif' }}>Loading calendar...</p>
            </div>
          ) : (
            <>
              <div style={{ background: 'white', borderBottom: '1px solid #e5e5e5', display: 'grid', gridTemplateColumns: '60px repeat(7, 1fr)', position: 'sticky', top: 0, zIndex: 5 }}>
                <div />
                {DAYS.map(day => (
                  <div key={day} style={{ padding: '0.75rem', textAlign: 'center', borderLeft: '1px solid #f0f0f0' }}>
                    <p style={{ fontSize: '13px', fontWeight: '500', color: '#1a1a1a', margin: 0, fontFamily: 'sans-serif' }}>{day}</p>
                  </div>
                ))}
              </div>

              <div style={{ display: 'grid', gridTemplateColumns: '60px repeat(7, 1fr)' }}>
                {HOURS.map(hour => {
                  const hourNum = parseInt(hour.split(':')[0])
                  return (
                    <div key={hour} style={{ display: 'contents' }}>
                      <div style={{ padding: '0 8px', height: '60px', display: 'flex', alignItems: 'flex-start', paddingTop: '4px', background: 'white' }}>
                        <span style={{ fontSize: '11px', color: '#bbb', fontFamily: 'sans-serif' }}>{hour}</span>
                      </div>
                      {DAYS.map((day, dayIndex) => {
                        const booking = getBookingForSlot(dayIndex, hourNum)
                        const avail = getAvailabilityForSlot(dayIndex, hourNum)
                        return (
                          <div key={`${day}-${hour}`} style={{ height: '60px', borderLeft: '1px solid #f0f0f0', borderBottom: '1px solid #f5f5f0', position: 'relative', background: avail && !booking ? '#F0FDF4' : 'white' }}>
                            {booking && (
                              <a href={booking.daily_room_url || '#'} target="_blank" rel="noreferrer" style={{ textDecoration: 'none' }}>
                                <div style={{ position: 'absolute', top: '2px', left: '2px', right: '2px', bottom: '2px', background: '#E1F5EE', border: '1px solid #0F6E56', borderLeft: '3px solid #0F6E56', borderRadius: '6px', padding: '4px 6px', overflow: 'hidden' }}>
                                  <p style={{ fontSize: '11px', fontWeight: '600', color: '#0F6E56', margin: 0, fontFamily: 'sans-serif', overflow: 'hidden', whiteSpace: 'nowrap', textOverflow: 'ellipsis' }}>
                                    {booking.learner?.full_name || 'Session'}
                                  </p>
                                  <p style={{ fontSize: '10px', color: '#666', margin: 0, fontFamily: 'sans-serif' }}>{booking.topic}</p>
                                </div>
                              </a>
                            )}
                          </div>
                        )
                      })}
                    </div>
                  )
                })}
              </div>
            </>
          )}
        </div>
      </div>

      {/* Availability modal */}
      {showAvailabilityModal && (
        <div style={{ position: 'fixed', inset: 0, background: 'rgba(0,0,0,0.5)', display: 'flex', alignItems: 'center', justifyContent: 'center', zIndex: 50 }}>
          <div style={{ background: 'white', borderRadius: '16px', padding: '2rem', width: '400px' }}>
            <h2 style={{ fontSize: '20px', fontWeight: '600', marginBottom: '1.5rem', color: '#1a1a1a' }}>Add availability</h2>

            <div style={{ marginBottom: '1rem' }}>
              <label style={{ fontSize: '13px', fontWeight: '500', color: '#444', display: 'block', marginBottom: '6px', fontFamily: 'sans-serif' }}>Day</label>
              <select
                value={newSlot.day_of_week}
                onChange={e => setNewSlot(s => ({ ...s, day_of_week: parseInt(e.target.value) }))}
                style={{ width: '100%', border: '1px solid #e5e5e5', borderRadius: '8px', padding: '10px', fontSize: '14px', fontFamily: 'sans-serif', outline: 'none' }}
              >
                {DAYS.map((day, i) => (
                  <option key={day} value={i}>{day}</option>
                ))}
              </select>
            </div>

            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1rem', marginBottom: '1.5rem' }}>
              <div>
                <label style={{ fontSize: '13px', fontWeight: '500', color: '#444', display: 'block', marginBottom: '6px', fontFamily: 'sans-serif' }}>Start time</label>
                <input
                  type="time"
                  value={newSlot.start_time}
                  onChange={e => setNewSlot(s => ({ ...s, start_time: e.target.value }))}
                  style={{ width: '100%', border: '1px solid #e5e5e5', borderRadius: '8px', padding: '10px', fontSize: '14px', fontFamily: 'sans-serif', outline: 'none', boxSizing: 'border-box' }}
                />
              </div>
              <div>
                <label style={{ fontSize: '13px', fontWeight: '500', color: '#444', display: 'block', marginBottom: '6px', fontFamily: 'sans-serif' }}>End time</label>
                <input
                  type="time"
                  value={newSlot.end_time}
                  onChange={e => setNewSlot(s => ({ ...s, end_time: e.target.value }))}
                  style={{ width: '100%', border: '1px solid #e5e5e5', borderRadius: '8px', padding: '10px', fontSize: '14px', fontFamily: 'sans-serif', outline: 'none', boxSizing: 'border-box' }}
                />
              </div>
            </div>

            <div style={{ display: 'flex', gap: '0.75rem' }}>
              <button
                onClick={() => setShowAvailabilityModal(false)}
                style={{ flex: 1, border: '1px solid #e5e5e5', background: 'white', borderRadius: '8px', padding: '10px', fontSize: '14px', cursor: 'pointer', fontFamily: 'sans-serif', color: '#555' }}
              >
                Cancel
              </button>
              <button
                onClick={addAvailability}
                style={{ flex: 2, background: '#0F6E56', color: 'white', border: 'none', borderRadius: '8px', padding: '10px', fontSize: '14px', fontWeight: '600', cursor: 'pointer', fontFamily: 'sans-serif' }}
              >
                Save availability
              </button>
            </div>
          </div>
        </div>
      )}
    </main>
  )
}