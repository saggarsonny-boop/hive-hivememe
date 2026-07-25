'use client'

import { useState } from 'react'
import { MemeTone, MemeResult } from '@/lib/memes/templates'
import MemeCard from '@/components/MemeCard'

const TONES: { value: MemeTone; label: string; emoji: string }[] = [
  { value: 'funny', label: 'Funny', emoji: '😂' },
  { value: 'dramatic', label: 'Dramatic', emoji: '😱' },
  { value: 'petty', label: 'Petty', emoji: '💅' },
  { value: 'wholesome', label: 'Wholesome', emoji: '🥺' },
]

const PLACEHOLDERS = [
  'My code worked on the first try',
  'I said I\'d sleep at 10pm but it\'s 3am',
  'Ordered food delivery — it arrived cold',
  'Tried to adult today and failed',
  'My teammate pushed directly to main again',
  'Said "almost done" and it\'s been 3 hours',
]

export default function MemeExperience() {
  const [situation, setSituation] = useState('')
  const [tone, setTone] = useState<MemeTone>('funny')
  const [loading, setLoading] = useState(false)
  const [memes, setMemes] = useState<MemeResult[]>([])
  const [error, setError] = useState('')
  const [placeholderIdx] = useState(() => Math.floor(Math.random() * PLACEHOLDERS.length))

  const generate = async () => {
    if (!situation.trim() || loading) return
    setLoading(true)
    setError('')
    setMemes([])
    try {
      const res = await fetch('/api/generate-meme', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ situation: situation.trim(), tone }),
      })
      const data = await res.json()
      if (!res.ok) throw new Error(data.error || 'Failed to generate memes')
      setMemes(data.memes)
    } catch (e: unknown) {
      setError(e instanceof Error ? e.message : 'Something went wrong')
    } finally {
      setLoading(false)
    }
  }

  return (
    <div style={{ maxWidth: 700, margin: '0 auto', padding: '40px 20px' }}>
      {/* Header */}
      <div style={{ textAlign: 'center', marginBottom: 40 }}>
        <div style={{ fontSize: 48, marginBottom: 12 }}>😂</div>
        <h1 style={{ fontSize: 28, fontWeight: 900, color: '#fff', marginBottom: 8 }}>HiveMeme</h1>
        <p style={{ color: '#888', fontSize: 15 }}>Turn any situation into a meme. Three options, instantly.</p>
      </div>

      {/* Situation input */}
      <div style={{ marginBottom: 16 }}>
        <textarea
          value={situation}
          onChange={e => setSituation(e.target.value)}
          placeholder={PLACEHOLDERS[placeholderIdx]}
          rows={3}
          maxLength={500}
          style={{
            width: '100%',
            background: '#1a1a1a',
            border: '1px solid #333',
            borderRadius: 10,
            padding: '14px 16px',
            color: '#fff',
            fontSize: 15,
            resize: 'none',
            outline: 'none',
          }}
          onKeyDown={e => { if (e.key === 'Enter' && (e.metaKey || e.ctrlKey)) generate() }}
        />
        <div style={{ textAlign: 'right', fontSize: 12, color: '#555', marginTop: 4 }}>{situation.length}/500</div>
      </div>

      {/* Tone selector */}
      <div style={{ display: 'flex', gap: 10, marginBottom: 20, flexWrap: 'wrap' }}>
        {TONES.map(t => (
          <button
            key={t.value}
            onClick={() => setTone(t.value)}
            style={{
              flex: '1 1 auto',
              padding: '10px 14px',
              background: tone === t.value ? '#f5c518' : '#1a1a1a',
              color: tone === t.value ? '#000' : '#ccc',
              border: `1px solid ${tone === t.value ? '#f5c518' : '#333'}`,
              borderRadius: 8,
              fontWeight: 700,
              cursor: 'pointer',
              fontSize: 14,
              transition: 'all 0.15s',
            }}
          >
            {t.emoji} {t.label}
          </button>
        ))}
      </div>

      {/* Generate button */}
      <button
        onClick={generate}
        disabled={!situation.trim() || loading}
        style={{
          width: '100%',
          padding: '14px',
          background: situation.trim() && !loading ? '#f5c518' : '#2a2a2a',
          color: situation.trim() && !loading ? '#000' : '#555',
          border: 'none',
          borderRadius: 10,
          fontWeight: 900,
          fontSize: 16,
          cursor: situation.trim() && !loading ? 'pointer' : 'not-allowed',
          marginBottom: 24,
          transition: 'all 0.15s',
        }}
      >
        {loading ? 'Generating memes...' : 'Make My Meme'}
      </button>

      {/* Error */}
      {error && (
        <div style={{ background: '#2a1a1a', border: '1px solid #8b1c1c', borderRadius: 8, padding: '12px 16px', color: '#ff6b6b', marginBottom: 20, fontSize: 14 }}>
          {error}
        </div>
      )}

      {/* Loading */}
      {loading && (
        <div style={{ textAlign: 'center', padding: '40px 0', color: '#666' }}>
          <div style={{ fontSize: 32, marginBottom: 12 }}>🎭</div>
          <div>Cooking up 3 memes...</div>
        </div>
      )}

      {/* Results */}
      {memes.length > 0 && (
        <div style={{ display: 'flex', flexDirection: 'column', gap: 20 }}>
          <div style={{ fontSize: 14, color: '#888', textAlign: 'center' }}>Pick your favourite — tap to copy</div>
          {memes.map((meme, i) => (
            <div key={i} onClick={() => navigator.clipboard?.writeText(`${meme.topText} | ${meme.bottomText}`)} style={{ cursor: 'pointer' }}>
              <MemeCard meme={meme} />
            </div>
          ))}
          <button
            onClick={generate}
            style={{ padding: '10px', background: 'transparent', border: '1px solid #444', borderRadius: 8, color: '#aaa', cursor: 'pointer', fontSize: 13 }}
          >
            🔄 Generate 3 more
          </button>
        </div>
      )}

      {/* Footer */}
      <div style={{ textAlign: 'center', marginTop: 48, fontSize: 12, color: '#444', lineHeight: 1.8 }}>
        <div>No ads. No investors. No agenda.</div>
        <div style={{ marginTop: 4 }}>
          <a href="https://hive.baby" style={{ color: '#555' }}>hive.baby</a>
        </div>
      </div>
    </div>
  )
}
