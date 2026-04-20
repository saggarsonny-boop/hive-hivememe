# ENGINE_GRAMMAR.md — HiveMeme

## GrapplerHook Metadata
```
engine: HiveMeme
repo: hive-hivememe
domain: hivememe.hive.baby
status: building
tier: 2
stack: Next.js + Anthropic
purpose: Instant meme generator — three CSS-rendered variants per situation
```

## Core Loop
1. User describes a situation (text, 500 chars max)
2. Selects a tone: Funny / Dramatic / Petty / Wholesome
3. AI returns 3 meme objects (template + text fields) as JSON
4. Three CSS-rendered meme cards appear instantly
5. Tap card to copy text; regenerate for 3 more

## Templates (10, CSS-only, no image dependencies)
- Drake — approves/disapproves split
- This Is Fine — dog in burning room
- Distracted Boyfriend — three-label redirect
- Expanding Brain — 4-panel escalating absurdity
- Woman Yelling at Cat — split panel reaction
- Stonks — upward-charting logic
- Galaxy Brain — convoluted 3-step reasoning
- GigaChad — bold contrarian stance
- Two Buttons — sweating over two options
- Fine I'll Do It Myself — solo determination

## Tones
- Funny: subverted expectations, absurdism
- Dramatic: hyperbole, catastrophising small things
- Petty: passive-aggressive, accurate shade
- Wholesome: warm, relatable, kind

## Routes
- GET / — static page
- POST /api/generate-meme — returns { memes: MemeResult[] }

## Onboarding Stack
- First-visit card: "Describe any situation. Get 3 memes in seconds."
- Rotating placeholders: real situations from real life
- No auto-demo required (interaction is instant)

## Standards
- No ads. No investors. No agenda.
- Free at base tier, forever.
