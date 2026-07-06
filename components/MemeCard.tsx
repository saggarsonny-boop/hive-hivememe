'use client'

import { MemeResult, MemeTemplate } from '@/lib/memes/templates'

interface Props {
  meme: MemeResult
}

export default function MemeCard({ meme }: Props) {
  return (
    <div className="meme-card-wrapper">
      <div className="meme-label">{meme.label}</div>
      <div className="meme-frame">
        <MemeVisual meme={meme} />
      </div>
      <style jsx>{`
        .meme-card-wrapper {
          background: #1a1a1a;
          border: 1px solid #333;
          border-radius: 12px;
          overflow: hidden;
        }
        .meme-label {
          padding: 10px 14px;
          font-size: 13px;
          color: #aaa;
          border-bottom: 1px solid #222;
        }
        .meme-frame {
          width: 100%;
          aspect-ratio: 1;
          position: relative;
          overflow: hidden;
        }
      `}</style>
    </div>
  )
}

function MemeVisual({ meme }: { meme: MemeResult }) {
  const t = meme.template as MemeTemplate

  if (t === 'drake') return <DrakeTemplate topText={meme.topText} bottomText={meme.bottomText} />
  if (t === 'this-is-fine') return <ThisIsFineTemplate caption={meme.topText || meme.bottomText} />
  if (t === 'expanding-brain') return <ExpandingBrainTemplate meme={meme} />
  if (t === 'woman-yelling-at-cat') return <WomanCatTemplate topText={meme.topText} bottomText={meme.bottomText} />
  if (t === 'stonks') return <StonksTemplate caption={meme.topText || meme.bottomText} />
  if (t === 'galaxy-brain') return <GalaxyBrainTemplate meme={meme} />
  if (t === 'gigachad') return <GigachadTemplate stance={meme.topText || meme.bottomText} />
  if (t === 'two-buttons') return <TwoButtonsTemplate meme={meme} />
  if (t === 'distracted-boyfriend') return <DistractedBoyfriendTemplate meme={meme} />
  if (t === 'fine-ill-do-it-myself') return <FineIllTemplate caption={meme.topText || meme.bottomText} />

  return <GenericTemplate meme={meme} />
}

function memeFont(size = 16) {
  return {
    fontFamily: 'Impact, "Arial Black", sans-serif',
    fontSize: size,
    fontWeight: 900,
    color: '#fff',
    textShadow: '2px 2px 0 #000, -2px -2px 0 #000, 2px -2px 0 #000, -2px 2px 0 #000',
    textTransform: 'uppercase' as const,
    lineHeight: 1.2,
  }
}

function DrakeTemplate({ topText, bottomText }: { topText: string; bottomText: string }) {
  return (
    <div style={{ width: '100%', height: '100%', background: '#f5f5f5', display: 'flex', flexDirection: 'column' }}>
      {[{ approve: false, text: topText }, { approve: true, text: bottomText }].map((row, i) => (
        <div key={i} style={{ flex: 1, display: 'flex', borderBottom: i === 0 ? '2px solid #ccc' : 'none' }}>
          <div style={{ width: '45%', background: row.approve ? '#ffe0b2' : '#ccc', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: 32 }}>
            {row.approve ? '😏' : '🙅'}
          </div>
          <div style={{ flex: 1, padding: 12, display: 'flex', alignItems: 'center', background: '#fff' }}>
            <span style={{ fontSize: 14, fontWeight: 700, color: '#111', lineHeight: 1.3 }}>{row.text}</span>
          </div>
        </div>
      ))}
    </div>
  )
}

function ThisIsFineTemplate({ caption }: { caption: string }) {
  return (
    <div style={{ width: '100%', height: '100%', background: 'linear-gradient(to bottom, #ff8c00 0%, #ff6600 60%, #333 60%, #333 100%)', display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'flex-end', padding: 16 }}>
      <div style={{ fontSize: 40, marginBottom: 8 }}>🐕🔥</div>
      <div style={{ ...memeFont(15), textAlign: 'center', background: 'rgba(0,0,0,0.5)', padding: '6px 12px', borderRadius: 6 }}>{caption || 'This is fine.'}</div>
    </div>
  )
}

function ExpandingBrainTemplate({ meme }: { meme: MemeResult }) {
  const steps = [meme.topText, meme.middleText || '', meme.bottomText, meme.label || ''].filter(Boolean).slice(0, 4)
  const bgColors = ['#1a1a2e', '#16213e', '#0f3460', '#533483']
  const brainSizes = ['🧠', '🧠✨', '🧠💫', '🧠🌌']
  return (
    <div style={{ width: '100%', height: '100%', display: 'flex', flexDirection: 'column' }}>
      {steps.map((s, i) => (
        <div key={i} style={{ flex: 1, background: bgColors[i], display: 'flex', alignItems: 'center', padding: '4px 10px', gap: 8, borderBottom: '1px solid rgba(255,255,255,0.1)' }}>
          <span style={{ fontSize: 20, flexShrink: 0 }}>{brainSizes[i]}</span>
          <span style={{ fontSize: 12, color: '#fff', lineHeight: 1.2 }}>{s}</span>
        </div>
      ))}
    </div>
  )
}

function WomanCatTemplate({ topText, bottomText }: { topText: string; bottomText: string }) {
  return (
    <div style={{ width: '100%', height: '100%', background: '#111', display: 'flex' }}>
      <div style={{ flex: 1, background: '#1e1e2e', display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', padding: 12, borderRight: '2px solid #333' }}>
        <div style={{ fontSize: 36, marginBottom: 8 }}>🤬</div>
        <div style={{ fontSize: 12, color: '#fff', textAlign: 'center', lineHeight: 1.3 }}>{topText}</div>
      </div>
      <div style={{ flex: 1, background: '#2e1e1e', display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', padding: 12 }}>
        <div style={{ fontSize: 36, marginBottom: 8 }}>🐱</div>
        <div style={{ fontSize: 12, color: '#fff', textAlign: 'center', lineHeight: 1.3 }}>{bottomText}</div>
      </div>
    </div>
  )
}

function StonksTemplate({ caption }: { caption: string }) {
  return (
    <div style={{ width: '100%', height: '100%', background: '#0a1628', display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', padding: 20, gap: 16 }}>
      <div style={{ fontSize: 48 }}>📈</div>
      <div style={{ fontSize: 14, color: '#00ff88', fontWeight: 700, textAlign: 'center', lineHeight: 1.4 }}>{caption}</div>
      <div style={{ fontSize: 28, fontWeight: 900, color: '#00ff88' }}>STONKS</div>
    </div>
  )
}

function GalaxyBrainTemplate({ meme }: { meme: MemeResult }) {
  const steps = [meme.topText, meme.middleText || '', meme.bottomText].filter(Boolean)
  return (
    <div style={{ width: '100%', height: '100%', background: 'linear-gradient(135deg, #0a0a1a, #1a0a2e)', display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', padding: 16, gap: 10 }}>
      {steps.map((s, i) => (
        <div key={i} style={{ background: `rgba(100,50,200,${0.2 + i * 0.2})`, border: `1px solid rgba(150,100,255,${0.3 + i * 0.2})`, borderRadius: 8, padding: '8px 12px', width: '100%', textAlign: 'center', fontSize: 12, color: '#e0d0ff', lineHeight: 1.3 }}>
          {i < steps.length - 1 && <span style={{ fontSize: 10, color: '#888', display: 'block', marginBottom: 2 }}>→</span>}
          {s}
        </div>
      ))}
      <div style={{ fontSize: 28 }}>🌌🧠</div>
    </div>
  )
}

function GigachadTemplate({ stance }: { stance: string }) {
  return (
    <div style={{ width: '100%', height: '100%', background: '#0a0a0a', display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', padding: 20, gap: 16 }}>
      <div style={{ fontSize: 56 }}>😎</div>
      <div style={{ ...memeFont(14), textAlign: 'center', color: '#fff' }}>{stance}</div>
      <div style={{ fontSize: 11, color: '#555', letterSpacing: 2, textTransform: 'uppercase' }}>GIGACHAD LOGIC</div>
    </div>
  )
}

function TwoButtonsTemplate({ meme }: { meme: MemeResult }) {
  return (
    <div style={{ width: '100%', height: '100%', background: '#1a1a2e', display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', padding: 16, gap: 12 }}>
      <div style={{ fontSize: 36 }}>😰</div>
      <div style={{ display: 'flex', gap: 10, width: '100%' }}>
        {[meme.topText, meme.bottomText].map((t, i) => (
          <div key={i} style={{ flex: 1, background: '#e74c3c', border: '3px solid #c0392b', borderRadius: 8, padding: '10px 8px', textAlign: 'center', fontSize: 12, color: '#fff', fontWeight: 700, cursor: 'default' }}>{t}</div>
        ))}
      </div>
      {meme.middleText && <div style={{ fontSize: 11, color: '#aaa', textAlign: 'center' }}>{meme.middleText}</div>}
    </div>
  )
}

function DistractedBoyfriendTemplate({ meme }: { meme: MemeResult }) {
  return (
    <div style={{ width: '100%', height: '100%', background: '#c8a96e', display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', gap: 8, padding: 16 }}>
      <div style={{ display: 'flex', gap: 16, alignItems: 'center', justifyContent: 'center' }}>
        <div style={{ textAlign: 'center' }}>
          <div style={{ fontSize: 32 }}>😡</div>
          <div style={{ background: '#e74c3c', color: '#fff', padding: '4px 8px', fontSize: 11, fontWeight: 700, borderRadius: 4, marginTop: 4 }}>{meme.bottomText}</div>
        </div>
        <div style={{ textAlign: 'center' }}>
          <div style={{ fontSize: 32 }}>😍👆</div>
          <div style={{ background: '#2ecc71', color: '#fff', padding: '4px 8px', fontSize: 11, fontWeight: 700, borderRadius: 4, marginTop: 4 }}>{meme.topText}</div>
        </div>
        <div style={{ textAlign: 'center' }}>
          <div style={{ fontSize: 32 }}>🚶</div>
          <div style={{ background: '#3498db', color: '#fff', padding: '4px 8px', fontSize: 11, fontWeight: 700, borderRadius: 4, marginTop: 4 }}>{meme.middleText}</div>
        </div>
      </div>
    </div>
  )
}

function FineIllTemplate({ caption }: { caption: string }) {
  return (
    <div style={{ width: '100%', height: '100%', background: '#1a1a1a', display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', padding: 20, gap: 16 }}>
      <div style={{ fontSize: 52 }}>💪</div>
      <div style={{ ...memeFont(14), textAlign: 'center' }}>{caption}</div>
      <div style={{ fontSize: 11, color: '#666', letterSpacing: 2, textTransform: 'uppercase' }}>Fine. I'll do it myself.</div>
    </div>
  )
}

function GenericTemplate({ meme }: { meme: MemeResult }) {
  return (
    <div style={{ width: '100%', height: '100%', background: '#111', display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', padding: 16, gap: 8 }}>
      {meme.topText && <div style={{ ...memeFont(15), textAlign: 'center' }}>{meme.topText}</div>}
      {meme.middleText && <div style={{ ...memeFont(13), textAlign: 'center' }}>{meme.middleText}</div>}
      {meme.bottomText && <div style={{ ...memeFont(15), textAlign: 'center' }}>{meme.bottomText}</div>}
    </div>
  )
}



<!-- Stripe Checkout Block -->
<div id="stripe-checkout-cta" style="margin: 2rem auto; padding: 2rem; border-radius: 12px; background: rgba(59,130,246,0.05); border: 1px solid rgba(59,130,246,0.2); text-align: center; font-family: sans-serif; max-width: 600px;">
    <h3 style="margin-top: 0; color: #fff;">Activate Premium License</h3>
    <p style="color: #9ca3af; font-size: 0.95rem; margin-bottom: 1.5rem;">Get instant access to all advanced capabilities and integration features.</p>
    <a href="https://buy.stripe.com/6oU00lb2L6F37bIazv0RG0J" target="_blank" style="display: inline-block; padding: 0.8rem 2rem; background: #3b82f6; color: #fff; font-weight: bold; border-radius: 8px; text-decoration: none; transition: background 0.2s;">Unlock Now</a>
</div>
