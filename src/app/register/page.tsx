'use client'

import { useState } from 'react'
import Link from 'next/link'
import { createClient } from '@/lib/supabase/client'
import { useRouter } from 'next/navigation'

export const dynamic = 'force-dynamic'
export default function RegisterPage() {
  const [step, setStep] = useState(1)
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState('')
  const [form, setForm] = useState({
    name: '',
    email: '',
    password: '',
    level: '',
    goals: [] as string[],
  })

  const router = useRouter()
  const supabase = createClient()

  const goals = [
    'Speak more confidently at work',
    'Prepare for a job interview',
    'Move to the UK',
    'Improve my pronunciation',
    'Understand British culture',
    'Pass an English exam',
    'Everyday conversation',
    'Business and professional English',
  ]

  function toggleGoal(goal: string) {
    setForm(f => ({
      ...f,
      goals: f.goals.includes(goal)
        ? f.goals.filter(g => g !== goal)
        : [...f.goals, goal],
    }))
  }

  async function handleRegister() {
    setLoading(true)
    setError('')
    try {
      const { data, error: signUpError } = await supabase.auth.signUp({
        email: form.email,
        password: form.password,
        options: {
          data: {
            full_name: form.name,
            role: 'learner',
          }
        }
      })
      if (signUpError) throw signUpError
      if (data.user) {
        await supabase.from('profiles').insert({
          id: data.user.id,
          full_name: form.name,
          role: 'learner',
          level: form.level,
        })
      }
      setStep(2)
    } catch (err: unknown) {
      setError(err instanceof Error ? err.message : 'Something went wrong')
    } finally {
      setLoading(false)
    }
  }

  async function handleFinish() {
    router.push('/tutors')
  }

  return (
    <main style={{ fontFamily: 'Georgia, serif', minHeight: '100vh', background: '#f9f9f7', display: 'flex', flexDirection: 'column' }}>

      <nav style={{ background: 'white', borderBottom: '1px solid #e5e5e5', padding: '1rem 2rem', display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
        <Link href="/" style={{ textDecoration: 'none', fontSize: '22px', fontWeight: '600', letterSpacing: '-0.5px', color: '#1a1a1a' }}>
          Utt<em style={{ color: '#0F6E56', fontStyle: 'italic' }}>er</em>ly
        </Link>
        <p style={{ fontSize: '14px', color: '#666', margin: 0, fontFamily: 'sans-serif' }}>
          Already have an account?{' '}
          <Link href="/login" style={{ color: '#0F6E56', textDecoration: 'none', fontWeight: '500' }}>Sign in</Link>
        </p>
      </nav>

      <div style={{ flex: 1, display: 'flex', alignItems: 'center', justifyContent: 'center', padding: '3rem 2rem' }}>
        <div style={{ width: '100%', maxWidth: '460px' }}>

          <div style={{ display: 'flex', gap: '8px', marginBottom: '2rem', justifyContent: 'center' }}>
            {[1, 2, 3].map(s => (
              <div key={s} style={{ width: '32px', height: '4px', borderRadius: '2px', background: s <= step ? '#0F6E56' : '#e5e5e5' }} />
            ))}
          </div>

          <div style={{ background: 'white', border: '1px solid #e5e5e5', borderRadius: '16px', padding: '2.5rem' }}>

            {step === 1 && (
              <div>
                <h1 style={{ fontSize: '26px', fontWeight: '600', letterSpacing: '-0.5px', marginBottom: '0.5rem', color: '#1a1a1a' }}>
                  Create your account
                </h1>
                <p style={{ fontSize: '15px', color: '#666', marginBottom: '2rem', fontFamily: 'sans-serif' }}>
                  Start learning British English with a real tutor.
                </p>

                {error && (
                  <div style={{ background: '#FEF2F2', border: '1px solid #FECACA', borderRadius: '8px', padding: '0.75rem 1rem', marginBottom: '1rem' }}>
                    <p style={{ fontSize: '13px', color: '#DC2626', margin: 0, fontFamily: 'sans-serif' }}>{error}</p>
                  </div>
                )}

                <div style={{ marginBottom: '1rem' }}>
                  <label style={{ fontSize: '13px', fontWeight: '500', color: '#444', display: 'block', marginBottom: '6px', fontFamily: 'sans-serif' }}>Full name</label>
                  <input
                    type="text"
                    value={form.name}
                    onChange={e => setForm(f => ({ ...f, name: e.target.value }))}
                    placeholder="Your name"
                    style={{ width: '100%', border: '1px solid #e5e5e5', borderRadius: '8px', padding: '11px 14px', fontSize: '15px', fontFamily: 'sans-serif', boxSizing: 'border-box', outline: 'none' }}
                  />
                </div>

                <div style={{ marginBottom: '1rem' }}>
                  <label style={{ fontSize: '13px', fontWeight: '500', color: '#444', display: 'block', marginBottom: '6px', fontFamily: 'sans-serif' }}>Email address</label>
                  <input
                    type="email"
                    value={form.email}
                    onChange={e => setForm(f => ({ ...f, email: e.target.value }))}
                    placeholder="you@example.com"
                    style={{ width: '100%', border: '1px solid #e5e5e5', borderRadius: '8px', padding: '11px 14px', fontSize: '15px', fontFamily: 'sans-serif', boxSizing: 'border-box', outline: 'none' }}
                  />
                </div>

                <div style={{ marginBottom: '2rem' }}>
                  <label style={{ fontSize: '13px', fontWeight: '500', color: '#444', display: 'block', marginBottom: '6px', fontFamily: 'sans-serif' }}>Password</label>
                  <input
                    type="password"
                    value={form.password}
                    onChange={e => setForm(f => ({ ...f, password: e.target.value }))}
                    placeholder="At least 8 characters"
                    style={{ width: '100%', border: '1px solid #e5e5e5', borderRadius: '8px', padding: '11px 14px', fontSize: '15px', fontFamily: 'sans-serif', boxSizing: 'border-box', outline: 'none' }}
                  />
                </div>

                <button
                  onClick={handleRegister}
                  disabled={!form.name || !form.email || !form.password || loading}
                  style={{ width: '100%', background: '#0F6E56', color: 'white', border: 'none', borderRadius: '10px', padding: '14px', fontSize: '15px', fontWeight: '600', cursor: 'pointer', fontFamily: 'sans-serif', opacity: (!form.name || !form.email || !form.password || loading) ? 0.6 : 1 }}
                >
                  {loading ? 'Creating account...' : 'Continue'}
                </button>
              </div>
            )}

            {step === 2 && (
              <div>
                <h2 style={{ fontSize: '24px', fontWeight: '600', letterSpacing: '-0.5px', marginBottom: '0.5rem', color: '#1a1a1a' }}>
                  What is your English level?
                </h2>
                <p style={{ fontSize: '14px', color: '#666', marginBottom: '1.5rem', fontFamily: 'sans-serif' }}>
                  Choose the closest level. We will confirm this with a short placement test.
                </p>

                <div style={{ display: 'grid', gap: '0.5rem', marginBottom: '2rem' }}>
                  {[
                    { value: 'A1', label: 'A1 — Beginner', sub: 'I know very little English' },
                    { value: 'A2', label: 'A2 — Elementary', sub: 'I know some basic words and phrases' },
                    { value: 'B1', label: 'B1 — Intermediate', sub: 'I can manage most everyday situations' },
                    { value: 'B2', label: 'B2 — Upper intermediate', sub: 'I am fairly fluent but want to improve' },
                    { value: 'C1', label: 'C1 — Advanced', sub: 'I am confident but want near-native fluency' },
                    { value: 'C2', label: 'C2 — Proficient', sub: 'I want to perfect the finer details' },
                  ].map(({ value, label, sub }) => (
                    <button
                      key={value}
                      onClick={() => setForm(f => ({ ...f, level: value }))}
                      style={{
                        border: `2px solid ${form.level === value ? '#0F6E56' : '#e5e5e5'}`,
                        borderRadius: '10px',
                        padding: '0.875rem 1rem',
                        background: form.level === value ? '#F0FDF4' : 'white',
                        cursor: 'pointer',
                        textAlign: 'left',
                        display: 'flex',
                        justifyContent: 'space-between',
                        alignItems: 'center',
                        gap: '1rem',
                      }}
                    >
                      <span style={{ fontSize: '14px', fontWeight: '600', color: '#1a1a1a', fontFamily: 'sans-serif' }}>{label}</span>
                      <span style={{ fontSize: '12px', color: '#999', fontFamily: 'sans-serif', textAlign: 'right' }}>{sub}</span>
                    </button>
                  ))}
                </div>

                <button
                  onClick={() => setStep(3)}
                  disabled={!form.level}
                  style={{ width: '100%', background: '#0F6E56', color: 'white', border: 'none', borderRadius: '10px', padding: '14px', fontSize: '15px', fontWeight: '600', cursor: 'pointer', fontFamily: 'sans-serif', opacity: !form.level ? 0.5 : 1 }}
                >
                  Continue
                </button>
              </div>
            )}

            {step === 3 && (
              <div>
                <h2 style={{ fontSize: '24px', fontWeight: '600', letterSpacing: '-0.5px', marginBottom: '0.5rem', color: '#1a1a1a' }}>
                  What are your goals?
                </h2>
                <p style={{ fontSize: '14px', color: '#666', marginBottom: '1.5rem', fontFamily: 'sans-serif' }}>
                  Select everything that applies.
                </p>

                <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '0.5rem', marginBottom: '2rem' }}>
                  {goals.map(goal => (
                    <button
                      key={goal}
                      onClick={() => toggleGoal(goal)}
                      style={{
                        border: `2px solid ${form.goals.includes(goal) ? '#0F6E56' : '#e5e5e5'}`,
                        borderRadius: '10px',
                        padding: '0.875rem 0.75rem',
                        background: form.goals.includes(goal) ? '#F0FDF4' : 'white',
                        cursor: 'pointer',
                        textAlign: 'left',
                        fontSize: '13px',
                        color: form.goals.includes(goal) ? '#0F6E56' : '#444',
                        fontFamily: 'sans-serif',
                        lineHeight: '1.4',
                        fontWeight: form.goals.includes(goal) ? '500' : '400',
                      }}
                    >
                      {goal}
                    </button>
                  ))}
                </div>

                <button
                  onClick={handleFinish}
                  style={{ width: '100%', background: '#0F6E56', color: 'white', border: 'none', borderRadius: '10px', padding: '14px', fontSize: '15px', fontWeight: '600', cursor: 'pointer', fontFamily: 'sans-serif' }}
                >
                  Find my tutor →
                </button>
              </div>
            )}

          </div>

          <p style={{ fontSize: '12px', color: '#999', textAlign: 'center', marginTop: '1.5rem', fontFamily: 'sans-serif' }}>
            By continuing you agree to our{' '}
            <Link href="/terms" style={{ color: '#666', textDecoration: 'none' }}>Terms</Link>
            {' '}and{' '}
            <Link href="/privacy" style={{ color: '#666', textDecoration: 'none' }}>Privacy Policy</Link>
          </p>

        </div>
      </div>
    </main>
  )
}