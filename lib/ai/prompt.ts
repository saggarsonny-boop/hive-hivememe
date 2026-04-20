import { MemeTone, TEMPLATES, TONE_INSTRUCTIONS } from '../memes/templates'

export function buildMemePrompt(situation: string, tone: MemeTone): string {
  const templateList = Object.entries(TEMPLATES)
    .map(([key, t]) => `- ${key}: ${t.description} (parts: ${t.parts.join(', ')})`)
    .join('\n')

  return `You are a meme expert. Given a situation and a tone, generate exactly 3 different memes.

SITUATION: "${situation}"
TONE: ${tone} — ${TONE_INSTRUCTIONS[tone]}

AVAILABLE TEMPLATES:
${templateList}

Return ONLY a valid JSON array of exactly 3 objects. Each object must have:
- template: one of the template keys above
- topText: string (main top caption, or empty string)  
- bottomText: string (main bottom caption, or empty string)
- middleText: string (optional middle section text or empty string)
- label: string (very short label for the meme, e.g. "When your code works on first try")
- reasoning: string (one sentence why this template fits)

Use different templates for each of the 3. Keep text short — memes work best with brevity.
No markdown, no code fences, just the raw JSON array.`
}
