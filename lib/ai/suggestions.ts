import { OpenAIStream } from '@/lib/ai/openai-stream';

export async function getContentSuggestions(content: string) {
  if (!content?.trim()) {
    return null;
  }

  if (!process.env.NEXT_PUBLIC_OPENAI_API_KEY) {
    throw new Error('OpenAI API key is not configured');
  }

  try {
    const prompt = `
      Analyze this technical article content and provide suggestions for improvement:
      1. Grammar and style improvements
      2. Technical accuracy
      3. Structure and organization
      4. SEO optimization

      Content: ${content}

      Please provide specific, actionable suggestions in a clear format.
    `;

    const stream = await OpenAIStream(prompt);
    const reader = stream.getReader();
    const decoder = new TextDecoder();
    let result = '';

    while (true) {
      const { done, value } = await reader.read();
      if (done) break;
      result += decoder.decode(value);
    }

    return result || 'No suggestions available for the current content.';
  } catch (error) {
    console.error('Error getting AI suggestions:', error);
    throw new Error('Unable to generate suggestions. Please try again later.');
  }
}