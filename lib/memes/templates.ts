export type MemeTemplate =
  | 'drake'
  | 'this-is-fine'
  | 'distracted-boyfriend'
  | 'expanding-brain'
  | 'woman-yelling-at-cat'
  | 'stonks'
  | 'galaxy-brain'
  | 'gigachad'
  | 'two-buttons'
  | 'fine-ill-do-it-myself'

export type MemeTone = 'funny' | 'dramatic' | 'petty' | 'wholesome'

export interface MemeResult {
  template: MemeTemplate
  topText: string
  bottomText: string
  middleText?: string
  label?: string
  reasoning: string
}

export const TEMPLATES: Record<MemeTemplate, { name: string; description: string; parts: string[] }> = {
  'drake': {
    name: 'Drake',
    description: 'Drake disapproves X, approves Y',
    parts: ['rejectText', 'approveText'],
  },
  'this-is-fine': {
    name: 'This Is Fine',
    description: 'Dog sitting in burning room saying everything is fine',
    parts: ['caption'],
  },
  'distracted-boyfriend': {
    name: 'Distracted Boyfriend',
    description: 'Guy distracted by something over his girlfriend',
    parts: ['guyLabel', 'girlfriendLabel', 'distractionLabel'],
  },
  'expanding-brain': {
    name: 'Expanding Brain',
    description: 'Four-panel escalating brain size for escalating bad ideas',
    parts: ['idea1', 'idea2', 'idea3', 'idea4'],
  },
  'woman-yelling-at-cat': {
    name: 'Woman Yelling at Cat',
    description: 'Woman yelling, confused-looking cat',
    parts: ['womanCaption', 'catCaption'],
  },
  'stonks': {
    name: 'Stonks',
    description: 'Business man in front of stock chart — logic makes it go up',
    parts: ['caption'],
  },
  'galaxy-brain': {
    name: 'Galaxy Brain',
    description: 'Convoluted reasoning reaches obvious or absurd conclusion',
    parts: ['step1', 'step2', 'step3', 'conclusion'],
  },
  'gigachad': {
    name: 'GigaChad',
    description: 'Chad affirming a bold contrarian stance',
    parts: ['stance'],
  },
  'two-buttons': {
    name: 'Two Buttons',
    description: 'Sweating over pressing one of two difficult options',
    parts: ['option1', 'option2', 'sweatLabel'],
  },
  'fine-ill-do-it-myself': {
    name: "Fine, I'll Do It Myself",
    description: 'Thanos deciding to take matters into own hands',
    parts: ['caption'],
  },
}

export const TONE_INSTRUCTIONS: Record<MemeTone, string> = {
  funny: 'Make it genuinely funny — good timing, subverted expectations, absurdism welcome.',
  dramatic: 'Lean into high drama, hyperbole, and emotional extremity. Treat small things as catastrophic.',
  petty: 'Passive-aggressive, sarcastic, throwing shade. Petty but accurate.',
  wholesome: 'Warm, kind, relatable, positive energy. Makes people feel seen without judgment.',
}
