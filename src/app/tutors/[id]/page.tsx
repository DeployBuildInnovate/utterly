import Link from 'next/link'

const TUTORS = [
  {
    id: '1',
    name: 'Sarah R.',
    firstName: 'Sarah',
    city: 'Leeds',
    bio: 'Warm, patient, and rigorous. I specialise in pronunciation and everyday conversation for adult learners. I have been teaching British English for 8 years and love helping learners find their confidence.',
    longBio: 'I grew up in Leeds and have spent the last eight years helping adult learners speak British English with confidence. I trained with CELTA and have worked with learners from over 20 countries — from complete beginners to professionals preparing for British workplace environments. My sessions are structured but never rigid. I follow a lesson plan but I always make time for the conversations that matter to my learners. I believe pronunciation is the foundation of everything — if you sound right, you feel right, and when you feel right, you speak more freely. I will work on your specific sounds from day one.',
    certifications: ['CELTA'],
    experience: 8,
    rating: 4.9,
    reviews: 134,
    lessons: 892,
    rate: 16,
    responseTime: 'within 2 hours',
    specialisms: ['Pronunciation', 'Conversation', 'Business English'],
    available: true,
    languages: ['English'],
    teaches: ['A1', 'A2', 'B1', 'B2'],
    videoUrl: null,
    reviewList: [
      { name: 'Agnieszka W.', country: 'Poland', text: 'Sarah transformed my pronunciation in just six weeks. I can hear the difference myself now. Highly recommend.', rating: 5, date: 'March 2026' },
      { name: 'Marco T.', country: 'Italy', text: 'Very patient and clear. She always explains why, not just what. My confidence in meetings has improved enormously.', rating: 5, date: 'February 2026' },
      { name: 'Lena K.', country: 'Germany', text: 'Excellent tutor. Structured, warm, and always prepared. I look forward to every session.', rating: 5, date: 'January 2026' },
    ],
  },
  {
    id: '2',
    name: 'James O.',
    firstName: 'James',
    city: 'Bristol',
    bio: 'Former BBC journalist turned English teacher. I focus on clarity, register, and professional writing.',
    longBio: 'I spent fifteen years as a journalist and producer at the BBC before moving into teaching. That background shapes everything about how I teach. I am obsessed with clarity — saying exactly what you mean, in the right register, for the right audience. If you work in a professional environment and need to write better emails, present more confidently, or simply sound more authoritative in meetings, I am the tutor for you.',
    certifications: ['DELTA', 'CELTA'],
    experience: 14,
    rating: 5.0,
    reviews: 89,
    lessons: 634,
    rate: 22,
    responseTime: 'within 1 hour',
    specialisms: ['Business English', 'Writing', 'Professional register'],
    available: true,
    languages: ['English', 'French'],
    teaches: ['B1', 'B2', 'C1', 'C2'],
    videoUrl: null,
    reviewList: [
      { name: 'Hiroshi N.', country: 'Japan', text: 'James is exceptional. My written English has improved more in two months than in the previous two years.', rating: 5, date: 'March 2026' },
      { name: 'Valentina R.', country: 'Brazil', text: 'Outstanding teacher. His BBC background really shows — everything he teaches is precise and professional.', rating: 5, date: 'February 2026' },
    ],
  },
  {
    id: '3',
    name: 'Priya M.',
    firstName: 'Priya',
    city: 'Manchester',
    bio: 'I love helping learners find their confidence in English. Patient, encouraging, and always prepared.',
    longBio: 'I have been teaching English in Manchester for four years and I specialise in learners who are just starting out or who have tried before and lost confidence. My sessions are gentle, encouraging, and always well prepared. I never make learners feel embarrassed about mistakes — mistakes are how we learn.',
    certifications: ['TEFL'],
    experience: 4,
    rating: 4.7,
    reviews: 41,
    lessons: 287,
    rate: 16,
    responseTime: 'within 4 hours',
    specialisms: ['Grammar', 'Beginners', 'Confidence building'],
    available: false,
    languages: ['English', 'Hindi'],
    teaches: ['A1', 'A2', 'B1'],
    videoUrl: null,
    reviewList: [
      { name: 'Ahmed K.', country: 'UAE', text: 'Priya is wonderfully patient. I was very nervous at first but she made me feel at ease immediately.', rating: 5, date: 'January 2026' },
      { name: 'Sofia M.', country: 'Portugal', text: 'Great teacher for beginners. She explains everything clearly and never rushes.', rating: 4, date: 'December 2025' },
    ],
  },
  {
    id: '4',
    name: 'Tom W.',
    firstName: 'Tom',
    city: 'Edinburgh',
    bio: 'Interactive, energetic sessions focused on spoken fluency. Real-world British English.',
    longBio: 'I teach from Edinburgh and I specialise in spoken fluency — getting learners to think and speak in British English naturally and quickly. My sessions are fast-paced and interactive. We use real scenarios, role plays, and a lot of conversation. I love British idiom and informal language.',
    certifications: ['CELTA'],
    experience: 6,
    rating: 4.8,
    reviews: 72,
    lessons: 521,
    rate: 18,
    responseTime: 'within 3 hours',
    specialisms: ['Speaking', 'Fluency', 'Idioms'],
    available: true,
    languages: ['English', 'Spanish'],
    teaches: ['A2', 'B1', 'B2'],
    videoUrl: null,
    reviewList: [
      { name: 'Krzysztof P.', country: 'Poland', text: 'Tom is brilliant. His sessions are fun and I always leave feeling like I have genuinely improved.', rating: 5, date: 'March 2026' },
      { name: 'Anna L.', country: 'Czech Republic', text: 'Energetic and engaging. My spoken English has improved massively since working with Tom.', rating: 5, date: 'February 2026' },
    ],
  },
  {
    id: '5',
    name: 'Anya B.',
    firstName: 'Anya',
    city: 'London',
    bio: 'Senior tutor with 18 years experience. Advanced learners, C1 and C2 preparation.',
    longBio: 'I have been teaching British English in London for eighteen years. I work exclusively with advanced learners — B2 and above — who want to reach near-native fluency. My specialisms are academic writing, professional communication, and the subtle aspects of British English that most learners never master: register, nuance, cultural subtext.',
    certifications: ['DELTA', 'QTS'],
    experience: 18,
    rating: 5.0,
    reviews: 203,
    lessons: 1847,
    rate: 28,
    responseTime: 'within 1 hour',
    specialisms: ['Advanced learners', 'Academic writing', 'C1 and C2'],
    available: true,
    languages: ['English', 'Russian'],
    teaches: ['B2', 'C1', 'C2'],
    videoUrl: null,
    reviewList: [
      { name: 'Yuki T.', country: 'Japan', text: 'Anya is the best English teacher I have ever had. She is demanding but fair and the results speak for themselves.', rating: 5, date: 'March 2026' },
      { name: 'Lukas B.', country: 'Germany', text: 'Exceptional tutor. My academic writing is unrecognisable from what it was six months ago.', rating: 5, date: 'February 2026' },
      { name: 'Fatima A.', country: 'Morocco', text: 'I passed my C2 exam with distinction after working with Anya for four months. She is extraordinary.', rating: 5, date: 'January 2026' },
    ],
  },
  {
    id: '6',
    name: 'Marcus C.',
    firstName: 'Marcus',
    city: 'Birmingham',
    bio: 'Relaxed, encouraging, and great with nervous learners. Host of the 5pm Teatime Club.',
    longBio: 'I teach from Birmingham and I host the 5pm Teatime Club every evening. I specialise in nervous learners and group teaching — creating an environment where people feel comfortable enough to actually speak. My sessions are relaxed, warm, and always encouraging.',
    certifications: ['TEFL', 'CELTA'],
    experience: 5,
    rating: 4.9,
    reviews: 58,
    lessons: 412,
    rate: 16,
    responseTime: 'within 2 hours',
    specialisms: ['Conversation', 'Beginners', 'Group teaching'],
    available: true,
    languages: ['English'],
    teaches: ['A1', 'A2', 'B1', 'B2'],
    videoUrl: null,
    reviewList: [
      { name: 'Elena V.', country: 'Russia', text: 'Marcus made me feel completely at ease from the very first session. I finally feel confident speaking English.', rating: 5, date: 'March 2026' },
      { name: 'Pedro S.', country: 'Brazil', text: 'Wonderful teacher. The Teatime Club he hosts is the highlight of my week.', rating: 5, date: 'February 2026' },
    ],
  },
]

const DAYS = ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun']
const TIMES = ['9:00am', '10:00am', '11:00am', '12:00pm', '2:00pm', '3:00pm', '4:00pm', '6:00pm', '7:00pm', '8:00pm']

export default function TutorProfile({ params }: { params: { id: string } }) {
  const tutor = TUTORS.find(t => t.id === params.id) || TUTORS[0]
  const trialRate = Math.round(tutor.rate * 0.5)

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
        </div>
        <div style={{ display: 'flex', gap: '1rem', alignItems: 'center' }}>
          <Link href="/login" style={{ textDecoration: 'none', color: '#666', fontSize: '14px' }}>Sign in</Link>
          <Link href="/register" style={{ textDecoration: 'none', background: '#0F6E56', color: 'white', padding: '8px 20px', borderRadius: '8px', fontSize: '14px' }}>Get started</Link>
        </div>
      </nav>

      <div style={{ padding: '1rem 0 0' }}>
        <Link href="/tutors" style={{ textDecoration: 'none', fontSize: '13px', color: '#999' }}>← Back to tutors</Link>
      </div>

      <div style={{ display: 'grid', gridTemplateColumns: '1fr 320px', gap: '3rem', padding: '2rem 0 4rem', alignItems: 'start' }}>

        {/* Left */}
        <div>

          {/* Header */}
          <div style={{ display: 'flex', alignItems: 'flex-start', gap: '1.5rem', marginBottom: '1.5rem' }}>
            <div style={{ width: '88px', height: '88px', borderRadius: '50%', background: '#E1F5EE', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '24px', fontWeight: '600', color: '#0F6E56', flexShrink: 0 }}>
              {tutor.name.split(' ').map((n: string) => n[0]).join('')}
            </div>
            <div style={{ flex: 1 }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', marginBottom: '4px' }}>
                <h1 style={{ fontSize: '26px', fontWeight: '600', color: '#1a1a1a', margin: 0, letterSpacing: '-0.5px' }}>{tutor.name}</h1>
                {tutor.available
                  ? <span style={{ fontSize: '12px', background: '#E1F5EE', color: '#0F6E56', padding: '3px 10px', borderRadius: '20px', fontWeight: '500' }}>Available</span>
                  : <span style={{ fontSize: '12px', background: '#f5f5f0', color: '#999', padding: '3px 10px', borderRadius: '20px' }}>Fully booked</span>
                }
              </div>
              <p style={{ fontSize: '14px', color: '#666', margin: '0 0 8px' }}>
                {tutor.city} · {tutor.experience} years experience · {tutor.certifications.join(', ')}
              </p>
              <div style={{ display: 'flex', alignItems: 'center', gap: '1.5rem' }}>
                <span style={{ fontSize: '14px', color: '#1a1a1a' }}>★ <strong>{tutor.rating}</strong> ({tutor.reviews} reviews)</span>
                <span style={{ fontSize: '14px', color: '#666' }}>{tutor.lessons.toLocaleString()} lessons taught</span>
                <span style={{ fontSize: '14px', color: '#666' }}>Responds {tutor.responseTime}</span>
              </div>
            </div>
          </div>

          {/* Intro video */}
          <div style={{ marginBottom: '2rem' }}>
            <h2 style={{ fontSize: '16px', fontWeight: '600', color: '#1a1a1a', marginBottom: '0.75rem' }}>Introduction</h2>
            {tutor.videoUrl ? (
              <video controls style={{ width: '100%', borderRadius: '12px', background: '#000' }}>
                <source src={tutor.videoUrl} />
              </video>
            ) : (
              <div style={{ width: '100%', aspectRatio: '16/9', background: '#f5f5f0', border: '1px solid #e5e5e5', borderRadius: '12px', display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', gap: '0.5rem' }}>
                <div style={{ fontSize: '32px' }}>▶</div>
                <p style={{ fontSize: '14px', color: '#999', margin: 0 }}>Intro video coming soon</p>
              </div>
            )}
          </div>

          {/* About */}
          <div style={{ marginBottom: '2rem', paddingBottom: '2rem', borderBottom: '1px solid #e5e5e5' }}>
            <h2 style={{ fontSize: '16px', fontWeight: '600', color: '#1a1a1a', marginBottom: '0.75rem' }}>About {tutor.firstName}</h2>
            <p style={{ fontSize: '15px', color: '#444', lineHeight: '1.75', margin: 0 }}>{tutor.longBio}</p>
          </div>

          {/* Specialisms and levels */}
          <div style={{ marginBottom: '2rem', paddingBottom: '2rem', borderBottom: '1px solid #e5e5e5', display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '2rem' }}>
            <div>
              <h2 style={{ fontSize: '16px', fontWeight: '600', color: '#1a1a1a', marginBottom: '0.75rem' }}>Specialisms</h2>
              <div style={{ display: 'flex', gap: '0.5rem', flexWrap: 'wrap' }}>
                {tutor.specialisms.map((s: string) => (
                  <span key={s} style={{ fontSize: '13px', background: '#f5f5f0', border: '1px solid #e5e5e5', padding: '5px 12px', borderRadius: '20px', color: '#555' }}>
                    {s}
                  </span>
                ))}
              </div>
            </div>
            <div>
              <h2 style={{ fontSize: '16px', fontWeight: '600', color: '#1a1a1a', marginBottom: '0.75rem' }}>Teaches levels</h2>
              <div style={{ display: 'flex', gap: '0.5rem', flexWrap: 'wrap' }}>
                {tutor.teaches.map((l: string) => (
                  <span key={l} style={{ fontSize: '13px', background: '#E1F5EE', color: '#0F6E56', padding: '5px 12px', borderRadius: '20px', fontWeight: '500' }}>
                    {l}
                  </span>
                ))}
              </div>
            </div>
          </div>

          {/* Reviews */}
          <div>
            <h2 style={{ fontSize: '16px', fontWeight: '600', color: '#1a1a1a', marginBottom: '1rem' }}>
              Reviews <span style={{ color: '#999', fontWeight: '400', fontSize: '14px' }}>({tutor.reviews})</span>
            </h2>
            <div style={{ display: 'grid', gap: '1rem' }}>
              {tutor.reviewList.map((review, i) => (
                <div key={i} style={{ border: '1px solid #e5e5e5', borderRadius: '12px', padding: '1.25rem' }}>
                  <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: '0.5rem' }}>
                    <div>
                      <span style={{ fontSize: '14px', fontWeight: '500', color: '#1a1a1a' }}>{review.name}</span>
                      <span style={{ fontSize: '13px', color: '#999', marginLeft: '0.5rem' }}>· {review.country}</span>
                    </div>
                    <div style={{ textAlign: 'right' }}>
                      <div style={{ fontSize: '13px', color: '#f59e0b' }}>{'★'.repeat(review.rating)}</div>
                      <div style={{ fontSize: '12px', color: '#999' }}>{review.date}</div>
                    </div>
                  </div>
                  <p style={{ fontSize: '14px', color: '#555', lineHeight: '1.6', margin: 0 }}>&ldquo;{review.text}&rdquo;</p>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Right — booking panel */}
        <div style={{ position: 'sticky', top: '2rem' }}>
          <div style={{ border: '1px solid #e5e5e5', borderRadius: '16px', overflow: 'hidden' }}>

            {/* Rate */}
            <div style={{ padding: '1.5rem', borderBottom: '1px solid #e5e5e5' }}>
              <div style={{ display: 'flex', alignItems: 'baseline', gap: '0.5rem', marginBottom: '0.25rem' }}>
                <span style={{ fontFamily: 'Georgia, serif', fontSize: '32px', fontWeight: '600', color: '#1a1a1a' }}>£{tutor.rate}</span>
                <span style={{ fontSize: '14px', color: '#999' }}>/ hour</span>
              </div>
              <p style={{ fontSize: '13px', color: '#0F6E56', margin: 0 }}>Trial lesson from £{trialRate}</p>
            </div>

            {/* Availability */}
            <div style={{ padding: '1.5rem', borderBottom: '1px solid #e5e5e5' }}>
              <h3 style={{ fontSize: '14px', fontWeight: '600', color: '#1a1a1a', marginBottom: '1rem' }}>Choose a day</h3>
              <div style={{ display: 'grid', gridTemplateColumns: 'repeat(7, 1fr)', gap: '4px', marginBottom: '1rem' }}>
                {DAYS.map((day, i) => (
                  <button key={day} style={{
                    padding: '6px 4px',
                    border: '1px solid #e5e5e5',
                    borderRadius: '8px',
                    fontSize: '11px',
                    fontWeight: '500',
                    cursor: 'pointer',
                    background: i === 1 ? '#0F6E56' : 'white',
                    color: i === 1 ? 'white' : '#444',
                    fontFamily: 'sans-serif',
                  }}>
                    {day}
                  </button>
                ))}
              </div>
              <h3 style={{ fontSize: '14px', fontWeight: '600', color: '#1a1a1a', marginBottom: '0.75rem' }}>Available times</h3>
              <div style={{ display: 'grid', gridTemplateColumns: 'repeat(2, 1fr)', gap: '6px' }}>
                {TIMES.slice(0, 6).map((time, i) => (
                  <button key={time} style={{
                    padding: '8px',
                    border: '1px solid #e5e5e5',
                    borderRadius: '8px',
                    fontSize: '12px',
                    cursor: 'pointer',
                    background: i === 0 ? '#E1F5EE' : 'white',
                    color: i === 0 ? '#0F6E56' : '#444',
                    fontFamily: 'sans-serif',
                    fontWeight: i === 0 ? '600' : '400',
                  }}>
                    {time}
                  </button>
                ))}
              </div>
            </div>

            {/* Book buttons */}
            <div style={{ padding: '1.5rem' }}>
              <Link href="/register" style={{ display: 'block', textAlign: 'center', background: '#0F6E56', color: 'white', padding: '14px', borderRadius: '10px', textDecoration: 'none', fontSize: '15px', fontWeight: '600', marginBottom: '0.75rem', fontFamily: 'sans-serif' }}>
                Book a trial lesson · £{trialRate}
              </Link>
              <Link href="/register" style={{ display: 'block', textAlign: 'center', border: '1px solid #e5e5e5', color: '#555', padding: '12px', borderRadius: '10px', textDecoration: 'none', fontSize: '14px', fontFamily: 'sans-serif' }}>
                Book a full session · £{tutor.rate}
              </Link>
              <p style={{ fontSize: '12px', color: '#999', textAlign: 'center', marginTop: '1rem', lineHeight: '1.5' }}>
                Free cancellation up to 48 hours before your session
              </p>
            </div>

          </div>

          {/* Message tutor */}
          <button style={{ width: '100%', marginTop: '0.75rem', border: '1px solid #e5e5e5', background: 'white', borderRadius: '10px', padding: '12px', fontSize: '14px', color: '#555', cursor: 'pointer', fontFamily: 'sans-serif' }}>
            Message {tutor.firstName}
          </button>
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