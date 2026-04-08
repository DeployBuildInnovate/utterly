import Link from 'next/link'

export default function InsightsPage() {
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
            { label: 'Insights', href: '/dashboard/tutor/insights', active: true },
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
          <h1 style={{ fontSize: '26px', fontWeight: '600', letterSpacing: '-0.5px', margin: 0, color: '#1a1a1a' }}>Insights</h1>
          <select style={{ border: '1px solid #e5e5e5', borderRadius: '8px', padding: '8px 12px', fontSize: '13px', fontFamily: 'sans-serif', outline: 'none', background: 'white', color: '#1a1a1a' }}>
            <option>Last 30 days</option>
            <option>Last 90 days</option>
            <option>This year</option>
            <option>All time</option>
          </select>
        </div>

        {/* Overview */}
        <div style={{ background: '#F0FDF4', border: '1px solid #BBF7D0', borderRadius: '16px', padding: '1.5rem 2rem', marginBottom: '1.5rem' }}>
          <p style={{ fontSize: '13px', fontWeight: '600', color: '#0F6E56', margin: '0 0 1rem', fontFamily: 'sans-serif', textTransform: 'uppercase', letterSpacing: '1px' }}>Overview · Jan 7 – Apr 7</p>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: '1.5rem' }}>
            {[
              { label: 'Earnings', value: '£892', trend: '+12%', up: true },
              { label: 'Lessons taught', value: '54', trend: '+8%', up: true },
              { label: 'Active students', value: '5', trend: '-2%', up: false },
              { label: 'New students', value: '3', trend: '+50%', up: true },
            ].map(({ label, value, trend, up }) => (
              <div key={label}>
                <p style={{ fontSize: '12px', color: '#0F6E56', margin: '0 0 4px', fontFamily: 'sans-serif', opacity: 0.8 }}>{label}</p>
                <p style={{ fontSize: '28px', fontWeight: '600', color: '#1a1a1a', margin: '0 0 2px', fontFamily: 'sans-serif' }}>{value}</p>
                <p style={{ fontSize: '12px', color: up ? '#0F6E56' : '#DC2626', margin: 0, fontFamily: 'sans-serif', fontWeight: '500' }}>
                  {up ? '↑' : '↓'} {trend} vs previous period
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* Earnings chart placeholder */}
        <div style={{ background: 'white', border: '1px solid #e5e5e5', borderRadius: '14px', padding: '1.5rem', marginBottom: '1.5rem' }}>
          <h2 style={{ fontSize: '15px', fontWeight: '600', color: '#1a1a1a', margin: '0 0 1.25rem' }}>Earnings over time</h2>
          <div style={{ display: 'flex', alignItems: 'flex-end', gap: '8px', height: '120px', padding: '0 0 0.5rem' }}>
            {[
              { month: 'Jan', amount: 180 },
              { month: 'Feb', amount: 240 },
              { month: 'Mar', amount: 210 },
              { month: 'Apr', amount: 262 },
            ].map(({ month, amount }) => (
              <div key={month} style={{ flex: 1, display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '6px' }}>
                <span style={{ fontSize: '11px', color: '#0F6E56', fontFamily: 'sans-serif', fontWeight: '500' }}>£{amount}</span>
                <div style={{ width: '100%', background: '#E1F5EE', borderRadius: '6px 6px 0 0', height: `${(amount / 300) * 100}px`, position: 'relative' }}>
                  <div style={{ position: 'absolute', bottom: 0, left: 0, right: 0, background: '#0F6E56', borderRadius: '6px 6px 0 0', height: '100%' }} />
                </div>
                <span style={{ fontSize: '11px', color: '#999', fontFamily: 'sans-serif' }}>{month}</span>
              </div>
            ))}
          </div>
          <p style={{ fontSize: '12px', color: '#999', margin: '0.5rem 0 0', fontFamily: 'sans-serif' }}>
            Total this year: £892 · Next payout Friday 11 Apr: £167.22
          </p>
        </div>

        {/* Keys to success */}
        <div style={{ background: 'white', border: '1px solid #e5e5e5', borderRadius: '14px', padding: '1.5rem', marginBottom: '1.5rem' }}>
          <h2 style={{ fontSize: '15px', fontWeight: '600', color: '#1a1a1a', margin: '0 0 0.5rem' }}>Keys to success</h2>
          <p style={{ fontSize: '13px', color: '#666', margin: '0 0 1.25rem', fontFamily: 'sans-serif' }}>
            These metrics help you attract new learners and keep existing ones coming back.
          </p>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '1rem' }}>
            {[
              { label: 'Lessons rescheduled', value: '3%', target: 'Aim for less than 10%', good: true },
              { label: 'Lessons cancelled', value: '1%', target: 'Aim for less than 5%', good: true },
              { label: 'Lessons missed', value: '0', target: 'Aim for 0', good: true },
              { label: 'Reply rate within 24hrs', value: '100%', target: 'Aim for more than 90%', good: true },
              { label: 'Trial follow-ups', value: '67%', target: 'Aim for more than 90%', good: false },
              { label: 'Weekly lesson rate', value: '74%', target: 'Aim for more than 75%', good: false },
            ].map(({ label, value, target, good }) => (
              <div key={label} style={{ background: good ? '#F0FDF4' : '#FFF7ED', border: `1px solid ${good ? '#BBF7D0' : '#FED7AA'}`, borderRadius: '10px', padding: '1rem' }}>
                <p style={{ fontSize: '12px', color: good ? '#166534' : '#92400E', margin: '0 0 4px', fontFamily: 'sans-serif' }}>{label}</p>
                <p style={{ fontSize: '24px', fontWeight: '600', color: '#1a1a1a', margin: '0 0 4px', fontFamily: 'sans-serif' }}>{value}</p>
                <div style={{ display: 'flex', alignItems: 'center', gap: '6px' }}>
                  <span style={{ fontSize: '14px' }}>{good ? '✓' : '⚠'}</span>
                  <p style={{ fontSize: '11px', color: good ? '#166534' : '#92400E', margin: 0, fontFamily: 'sans-serif' }}>{target}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Live metrics */}
        <div style={{ background: 'white', border: '1px solid #e5e5e5', borderRadius: '14px', padding: '1.5rem' }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '8px', marginBottom: '1.25rem' }}>
            <span style={{ fontSize: '11px', fontWeight: '700', background: '#DC2626', color: 'white', padding: '2px 8px', borderRadius: '20px', fontFamily: 'sans-serif' }}>LIVE</span>
            <h2 style={{ fontSize: '15px', fontWeight: '600', color: '#1a1a1a', margin: 0 }}>Live metrics</h2>
          </div>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: '1rem' }}>
            {[
              { label: 'Popular time slots', value: '4', target: 'Aim for more than 10', good: false },
              { label: 'Average review rating', value: '4.9 ★', target: 'Aim for more than 4.8', good: true },
              { label: 'Profile score', value: '72%', target: 'Aim for more than 90%', good: false },
              { label: 'Rate per session', value: '£16', target: 'Market rate £16–25', good: true },
            ].map(({ label, value, target, good }) => (
              <div key={label} style={{ border: '1px solid #e5e5e5', borderRadius: '10px', padding: '1rem' }}>
                <p style={{ fontSize: '12px', color: '#999', margin: '0 0 4px', fontFamily: 'sans-serif' }}>{label}</p>
                <p style={{ fontSize: '22px', fontWeight: '600', color: '#1a1a1a', margin: '0 0 4px', fontFamily: 'sans-serif' }}>{value}</p>
                <div style={{ display: 'flex', alignItems: 'center', gap: '4px' }}>
                  <span style={{ fontSize: '12px' }}>{good ? '✓' : '⚠'}</span>
                  <p style={{ fontSize: '11px', color: good ? '#0F6E56' : '#92400E', margin: 0, fontFamily: 'sans-serif' }}>{target}</p>
                </div>
              </div>
            ))}
          </div>
          <p style={{ fontSize: '11px', color: '#999', margin: '1rem 0 0', fontFamily: 'sans-serif' }}>
            Live metrics updated {new Date().toLocaleDateString('en-GB', { day: 'numeric', month: 'short', year: 'numeric' })}
          </p>
        </div>

      </div>
    </main>
  )
}