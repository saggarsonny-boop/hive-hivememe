function requireEnv(key: string): string {
  const val = process.env[key]
  if (!val) throw new Error(`Missing required env var: ${key}`)
  return val
}

export const env = {
  ANTHROPIC_API_KEY: requireEnv('ANTHROPIC_API_KEY'),
}
