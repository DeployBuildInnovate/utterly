'use client'

import { useState } from 'react'
import Link from 'next/link'
import { createClient } from '@/lib/supabase/client'
import { useRouter } from 'next/navigation'

export default function LoginPage() {
  const [form, setForm] = useState({ email: '', password: '' })
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState('')

  const router = useRouter()
  const supabase = createClient()

  async function handleLogin() {
    setLoading(true)
    setError('')
    try {
      const { error: signInError } = await supabase.auth.signInWithPassword({
        email: form.email,
        password: form.password,
      })
      if (signInError) throw signInError
      router.push('/dashboard/tutor')
    } catch (err: unknown) {
      setError(err instanceof Error ? err.message : 'Invalid email or password')
    } finally {
      setLoading(false)
    }
  }

  return (
    <main style={{ fontFamily: 'Georgia, serif', minHeight: '100vh', background: '#f9f9f7', display: 'flex', flexDirection: 'column' }}>

      <nav style={{ background: 'white', borderBottom: '1px solid #e5e5e5', padding: '1rem 2rem', display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
        <Link href="/" style={{ textDecoration: 'none', fontSize: '22px', fontWeight: '600', letterSpacing: '-0.5px', color: '#1a1a1a' }}>
          Utt<em style={{ color: '#0F6E56', fontStyle: 'italic' }}>er</em>ly
        </Link>
        <p style={{ fontSize: '14px', color: '#666', margin: 0, fontFamily: 'sans-serif' }}>
          Don&apos;t have an account?{' '}
          <Link href="/register" style={{ color: '#0F6E56', textDecoration: 'none', fontWeight: '500' }}>Get started</Link>
        </p>
      </nav>

      <div style={{ flex: 1, display: 'flex', alignItems: 'center', justifyContent: 'center', padding: '3rem 2rem' }}>
        <div style={{ width: '100%', maxWidth: '420px' }}>

          <div style={{ background: 'white', border: '1px solid #e5e5e5', borderRadius: '16px', padding: '2.5rem' }}>
            <h1 style={{ fontSize: '26px', fontWeight: '600', letterSpacing: '-0.5px', marginBottom: '0.5rem', color: '#1a1a1a' }}>
              Welcome back
            </h1>
            <p style={{ fontSize: '15px', color: '#666', marginBottom: '2rem', fontFamily: 'sans-serif' }}>
              Sign in to your Utterly account
            </p>

            {error && (
              <div style={{ background: '#FEF2F2', border: '1px solid #FECACA', borderRadius: '8px', padding: '0.75rem 1rem', marginBottom: '1rem' }}>
                <p style={{ fontSize: '13px', color: '#DC2626', margin: 0, fontFamily: 'sans-serif' }}>{error}</p>
              </div>
            )}

            <div style={{ marginBottom: '1rem' }}>
              <label style={{ fontSize: '13px', fontWeight: '500', color: '#444', display: 'block', marginBottom: '6px', fontFamily: 'sans-serif' }}>
                Email address
              </label>
              <input
                type="email"
                value={form.email}
                onChange={e => setForm(f => ({ ...f, email: e.target.value }))}
                placeholder="you@example.com"
                style={{ width: '100%', border: '1px solid #e5e5e5', borderRadius: '8px', padding: '11px 14px', fontSize: '15px', fontFamily: 'sans-serif', boxSizing: 'border-box', outline: 'none' }}
              />
            </div>

            <div style={{ marginBottom: '0.5rem' }}>
              <label style={{ fontSize: '13px', fontWeight: '500', color: '#444', display: 'block', marginBottom: '6px', fontFamily: 'sans-serif' }}>
                Password
              </label>
              <input
                type="password"
                value={form.password}
                onChange={e => setForm(f => ({ ...f, password: e.target.value }))}
                placeholder="Your password"
                onKeyDown={e => e.key === 'Enter' && handleLogin()}
                style={{ width: '100%', border: '1px solid #e5e5e5', borderRadius: '8px', padding: '11px 14px', fontSize: '15px', fontFamily: 'sans-serif', boxSizing: 'border-box', outline: 'none' }}
              />
            </div>

            <div style={{ textAlign: 'right', marginBottom: '2rem' }}>
              <Link href="/forgot-password" style={{ fontSize: '13px', color: '#0F6E56', textDecoration: 'none', fontFamily: 'sans-serif' }}>
                Forgot password?
              </Link>
            </div>

            <button
              onClick={handleLogin}
              disabled={!form.email || !form.password || loading}
              style={{ width: '100%', background: '#0F6E56', color: 'white', border: 'none', borderRadius: '10px', padding: '14px', fontSize: '15px', fontWeight: '600', cursor: 'pointer', fontFamily: 'sans-serif', marginBottom: '1rem', opacity: (!form.email || !form.password || loading) ? 0.6 : 1 }}
            >
              {loading ? 'Signing in...' : 'Sign in'}
            </button>

            <div style={{ position: 'relative', textAlign: 'center', marginBottom: '1rem' }}>
              <div style={{ position: 'absolute', top: '50%', left: 0, right: 0, height: '1px', background: '#e5e5e5' }} />
              <span style={{ position: 'relative', background: 'white', padding: '0 12px', fontSize: '13px', color: '#999', fontFamily: 'sans-serif' }}>or</span>
            </div>

            <button style={{ width: '100%', border: '1px solid #e5e5e5', background: 'white', borderRadius: '10px', padding: '13px', fontSize: '14px', cursor: 'pointer', fontFamily: 'sans-serif', color: '#444', display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '10px' }}>
              <span style={{ fontSize: '18px' }}>G</span>
              Continue with Google
            </button>
          </div>

          <p style={{ fontSize: '12px', color: '#999', textAlign: 'center', marginTop: '1.5rem', fontFamily: 'sans-serif' }}>
            By signing in you agree to our{' '}
            <Link href="/terms" style={{ color: '#666', textDecoration: 'none' }}>Terms</Link>
            {' '}and{' '}
            <Link href="/privacy" style={{ color: '#666', textDecoration: 'none' }}>Privacy Policy</Link>
          </p>
        </div>
      </div>
    </main>
  )
}