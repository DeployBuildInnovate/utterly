import Link from 'next/link'

const TUTORS = [
  {
    id: '1',
    name: 'Sarah R.',
    city: 'Leeds',
    bio: 'Warm, patient, and rigorous. I specialise in pronunciation and everyday conversation for adult learners. I have been teaching British English for 8 years and love helping learners find their confidence.',
    certifications: ['CELTA'],
    experience: 8,
    rating: 4.9,
    reviews: 134,
    specialisms: ['Pronunciation', 'Conversation', 'Business English'],
    available: true,
  },
  {
    id: '2',
    name: 'James O.',
    city: 'Bristol',
    bio: 'Former BBC journalist turned English teacher. I focus on clarity, register, and professional writing. If you need to sound polished and confident in English at work, I can help.',
    certifications: ['DELTA', 'CELTA'],
    experience: 14,
    rating: 5.0,
    reviews: 89,
    specialisms: ['Business English', 'Writing', 'Professional register'],
    available: true,
  },
  {
    id: '3',
    name: 'Priya M.',
    city: 'Manchester',
    bio: 'I love helping learners find their confidence in English. I specialise in grammar foundations and building fluency from the ground up. Patient, encouraging, and always prepared.',
    certifications: ['TEFL'],
    experience: 4,
    rating: 4.7,
    reviews: 41,
    specialisms: ['Grammar', 'Beginners', 'Confidence building'],
    available: false,
  },
  {
    id: '4',
    name: 'Tom W.',
    city: 'Edinburgh',
    bio: 'Interactive, energetic sessions focused on spoken fluency. I use real-world scenarios and love helping learners tackle British idiom and informal language.',
    certifications: ['CELTA'],
    experience: 6,
    rating: 4.8,
    reviews: 72,
    specialisms: ['Speaking', 'Fluency', 'Idioms'],
    available: true,
  },
  {
    id: '5',
    name: 'Anya B.',
    city: 'London',
    bio: 'Senior tutor with 18 years experience. I specialise in advanced learners who want to reach near-native fluency. Academic writing, C1 and C2 preparation, and professional British English.',
    certifications: ['DELTA', 'QTS'],
    experience: 18,
    rating: 5.0,
    reviews: 203,
    specialisms: ['Advanced learners', 'Academic writing', 'C1 and C2'],
    available: true,
  },
  {
    id: '6',
    name: 'Marcus C.',
    city: 'Birmingham',
    bio: 'Relaxed, encouraging, and great with nervous learners. I host the 5pm Teatime Club and specialise in conversation practice. Come as you are — we will work from there.',
    certifications: ['TEFL', 'CELTA'],
    experience: 5,
    rating: 4.9,
    reviews: 58,
    specialisms: ['Conversation', 'Beginners', 'Group teaching'],
    available: true,
  },
]

export default function TutorsPage() {
  return (
    <main style={{ fontFamily: 'Georgia, serif', maxWidth: '1100px', margin: '0 auto', padding: '0 2rem' }}>

      <nav style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', padding: '1.5rem 0', borderBottom: '1px solid #e5e5e5' }}>
        <Link href="/" style={{ textDecoration: 'none', fontSize: '24px', fontWeight: '600', letterSpacing: '-0.5px', color: '#1a1a1a' }}>
          Utt<em style={{ color: '#0F6E56', fontStyle: 'italic' }}>er</em>ly
        </Link>
        <div style={{ display: 'flex', gap: '2rem', fontSize: '14px' }}>
          <Link href="/tutors" style={{ textDecoration: 'none', color: '#0F6E56', fontWeight: '600' }}>Find a tutor</Link>
          <Link href="/club" style={{ textDecoration: 'none', color: '#666' }}>Teatime Club</Link>
          <Link href="/packs" style={{ textDecoration: 'none', color: '#666' }}>Learning packs</Link>
          <Link href="/tutors/apply" style={{ textDecoration: 'none', color: '#666' }}>Teach with us</Link>
        </div>
        <div style={{ display: 'flex', gap: '1rem', alignItems: 'center' }}>
          <Link href="/login" style={{ textDecoration: 'none', color: '#666', fontSize: '14px' }}>Sign in</Link>
          <Link href="/register" style={{ textDecoration: 'none', background: '#0F6E56', color: 'white', padding: '8px 20px', borderRadius: '8px', fontSize: '14px' }}>Get started</Link>
        </div>
      </nav>

      <section style={{ padding: '3rem 0 2rem' }}>
        <p style={{ fontSize: '11px', fontWeight: '500', letterSpacing: '2px', textTransform: 'uppercase', color: '#0F6E56', marginBottom: '0.75rem' }}>
          Native British English speakers
        </p>
        <h1 style={{ fontSize: '42px', fontWeight: '600', letterSpacing: '-1.5px', marginBottom: '0.75rem', color: '#1a1a1a' }}>
          Find your tutor
        </h1>
        <p style={{ fontSize: '16px', color: '#666', lineHeight: '1.6', maxWidth: '520px', margin: 0 }}>
          Browse native British English speakers trained by Utterly. Read their profiles, watch their videos, and book directly — no middleman, no markup.
        </p>
      </section>

      <div style={{ display: 'grid', gridTemplateColumns: '220px 1fr', gap: '3rem', paddingBottom: '4rem' }}>

        <aside>
          <div style={{ position: 'sticky', top: '2rem', background: '#f9f9f7', border: '1px solid #e5e5e5', borderRadius: '12px', padding: '1.5rem' }}>
            <h2 style={{ fontSize: '13px', fontWeight: '600', marginBottom: '1.5rem', color: '#1a1a1a', textTransform: 'uppercase', letterSpacing: '1px' }}>Filter</h2>

            <div style={{ marginBottom: '1.5rem' }}>
              <label style={{ fontSize: '11px', fontWeight: '500', textTransform: 'uppercase', letterSpacing: '1px', color: '#999', display: 'block', marginBottom: '0.75rem' }}>
                Your level
              </label>
              <select style={{ width: '100%', border: '1px solid #e5e5e5', borderRadius: '8px', padding: '8px 10px', fontSize: '13px', background: 'white', color: '#1a1a1a' }}>
                <option>Any level</option>
                <option>A1 — Beginner</option>
                <option>A2 — Elementary</option>
                <option>B1 — Intermediate</option>
                <option>B2 — Upper intermediate</option>
                <option>C1 — Advanced</option>
                <option>C2 — Proficient</option>
              </select>
            </div>

            <div style={{ marginBottom: '1.5rem' }}>
              <label style={{ fontSize: '11px', fontWeight: '500', textTransform: 'uppercase', letterSpacing: '1px', color: '#999', display: 'block', marginBottom: '0.75rem' }}>
                Specialism
              </label>
              {['Conversation', 'Business English', 'Pronunciation', 'Grammar', 'Writing', 'Exam prep'].map(s => (
                <label key={s} style={{ display: 'flex', alignItems: 'center', gap: '8px', fontSize: '13px', color: '#444', marginBottom: '8px', cursor: 'pointer' }}>
                  <input type="checkbox" style={{ accentColor: '#0F6E56' }} />
                  {s}
                </label>
              ))}
            </div>

            <div style={{ marginBottom: '1.5rem' }}>
              <label style={{ fontSize: '11px', fontWeight: '500', textTransform: 'uppercase', letterSpacing: '1px', color: '#999', display: 'block', marginBottom: '0.75rem' }}>
                Availability
              </label>
              <label style={{ display: 'flex', alignItems: 'center', gap: '8px', fontSize: '13px', color: '#444', cursor: 'pointer' }}>
                <input type="checkbox" style={{ accentColor: '#0F6E56' }} />
                Available now
              </label>
            </div>

            <button style={{ width: '100%', background: '#0F6E56', color: 'white', border: 'none', borderRadius: '8px', padding: '10px', fontSize: '13px', fontWeight: '500', cursor: 'pointer' }}>
              Apply filters
            </button>
          </div>
        </aside>

        <div>
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '1.5rem' }}>
            <p style={{ fontSize: '14px', color: '#666', margin: 0 }}>{TUTORS.length} tutors available</p>
            <select style={{ border: '1px solid #e5e5e5', borderRadius: '8px', padding: '6px 12px', fontSize: '13px', background: 'white', color: '#1a1a1a' }}>
              <option>Top rated</option>
              <option>Most reviews</option>
              <option>Most experienced</option>
            </select>
          </div>

          <div style={{ display: 'grid', gap: '1rem' }}>
            {TUTORS.map(tutor => (
              <div key={tutor.id} style={{ border: '1px solid #e5e5e5', borderRadius: '12px', padding: '1.5rem', background: 'white' }}>
                <div style={{ display: 'flex', alignItems: 'flex-start', gap: '1rem', marginBottom: '1rem' }}>
                  <div style={{ width: '52px', height: '52px', borderRadius: '50%', background: '#E1F5EE', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '14px', fontWeight: '600', color: '#0F6E56', flexShrink: 0 }}>
                    {tutor.name.split(' ').map((n: string) => n[0]).join('')}
                  </div>
                  <div style={{ flex: 1 }}>
                    <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', marginBottom: '2px' }}>
                      <h3 style={{ fontSize: '16px', fontWeight: '600', color: '#1a1a1a', margin: 0 }}>{tutor.name}</h3>
                      {tutor.available && (
                        <span style={{ fontSize: '11px', background: '#E1F5EE', color: '#0F6E56', padding: '2px 8px', borderRadius: '20px', fontWeight: '500' }}>
                          Available
                        </span>
                      )}
                    </div>
                    <p style={{ fontSize: '13px', color: '#999', margin: 0 }}>{tutor.city} · {tutor.experience} years · {tutor.certifications.join(', ')}</p>
                  </div>
                  <div style={{ textAlign: 'right', flexShrink: 0 }}>
                    <div style={{ fontSize: '14px', fontWeight: '500', color: '#1a1a1a' }}>★ {tutor.rating}</div>
                    <p style={{ fontSize: '12px', color: '#999', margin: 0 }}>{tutor.reviews} reviews</p>
                  </div>
                </div>

                <p style={{ fontSize: '14px', color: '#555', lineHeight: '1.6', marginBottom: '1rem' }}>{tutor.bio}</p>

                <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
                  <div style={{ display: 'flex', gap: '0.5rem', flexWrap: 'wrap' }}>
                    {tutor.specialisms.map((s: string) => (
                      <span key={s} style={{ fontSize: '12px', border: '1px solid #e5e5e5', padding: '3px 10px', borderRadius: '20px', color: '#777' }}>
                        {s}
                      </span>
                    ))}
                  </div>
                  <div style={{ display: 'flex', gap: '0.5rem', flexShrink: 0 }}>
                    <Link href={`/tutors/${tutor.id}`} style={{ textDecoration: 'none', border: '1px solid #e5e5e5', color: '#555', padding: '8px 16px', borderRadius: '8px', fontSize: '13px' }}>
                      View profile
                    </Link>
                    <Link href={`/tutors/${tutor.id}`} style={{ textDecoration: 'none', background: '#0F6E56', color: 'white', padding: '8px 16px', borderRadius: '8px', fontSize: '13px', fontWeight: '500' }}>
                      Book a trial
                    </Link>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      <footer style={{ padding: '1.5rem 0', borderTop: '1px solid #e5e5e5', display: 'flex', justifyContent: 'space-between', alignItems: 'center', fontSize: '12px', color: '#999' }}>
        <Link href="/" style={{ textDecoration: 'none', fontFamily: 'Georgia, serif', fontSize: '16px', fontWeight: '600', color: '#1a1a1a' }}>
          Utt<em style={{ color: '#0F6E56', fontStyle: 'italic' }}>er</em>ly
        </Link>
        <p style={{ margin: 0 }}>© 2026 Utterly · British English tutoring</p>
        <div style={{ display: 'flex', gap: '1.5rem' }}>
          {['About', 'Privacy', 'Terms', 'Contact'].map(l => (
            <Link key={l} href={`/${l.toLowerCase()}`} style={{ textDecoration: 'none', color: '#999' }}>{l}</Link>
          ))}
        </div>
      </footer>

    </main>
  )
}