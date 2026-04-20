import Anthropic from '@anthropic-ai/sdk'
import { env } from '../env'

export function getAnthropicClient() {
	if (!env.ANTHROPIC_API_KEY) {
		throw new Error('ANTHROPIC_API_KEY is not configured')
	}
	return new Anthropic({ apiKey: env.ANTHROPIC_API_KEY })
}
