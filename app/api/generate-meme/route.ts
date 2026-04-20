import { NextRequest, NextResponse } from 'next/server'
import { anthropic } from '@/lib/ai/client'
import { buildMemePrompt } from '@/lib/ai/prompt'
import { MemeTone, MemeResult } from '@/lib/memes/templates'

export const runtime = 'nodejs'

export async function POST(req: NextRequest) {
  try {
    const { situation, tone } = await req.json() as { situation: string; tone: MemeTone }

    if (!situation?.trim()) {
      return NextResponse.json({ error: 'Situation is required' }, { status: 400 })
    }

    const validTones: MemeTone[] = ['funny', 'dramatic', 'petty', 'wholesome']
    if (!validTones.includes(tone)) {
      return NextResponse.json({ error: 'Invalid tone' }, { status: 400 })
    }

    const message = await anthropic.messages.create({
      model: 'claude-opus-4-5',
      max_tokens: 1024,
      messages: [
        {
          role: 'user',
          content: buildMemePrompt(situation.trim().slice(0, 500), tone),
        },
      ],
    })

    const raw = message.content[0].type === 'text' ? message.content[0].text : ''

    let memes: MemeResult[]
    try {
      memes = JSON.parse(raw)
      if (!Array.isArray(memes) || memes.length === 0) throw new Error('bad shape')
    } catch {
      return NextResponse.json({ error: 'Failed to parse meme response' }, { status: 500 })
    }

    return NextResponse.json({ memes: memes.slice(0, 3) })
  } catch (err) {
    console.error('generate-meme error:', err)
    return NextResponse.json({ error: 'Internal server error' }, { status: 500 })
  }
}
