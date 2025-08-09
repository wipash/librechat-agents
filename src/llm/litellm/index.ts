import type { ChatOpenAICallOptions, OpenAIClient } from '@langchain/openai';
import { ChatOpenAI } from '@/llm/openai';

export interface ChatLiteLLMCallOptions extends ChatOpenAICallOptions {
  include_reasoning?: boolean;
}
export class ChatLiteLLM extends ChatOpenAI {
  // Override the getReasoningParams method to always add reasoning if the option is set
  getReasoningParams(
    options?: this['ParsedCallOptions']
  ): OpenAIClient.Reasoning | undefined {
    let reasoning: OpenAIClient.Reasoning | undefined;
    if (this.reasoning !== undefined) {
      reasoning = { ...reasoning, ...this.reasoning };
    }
    if (options?.reasoning !== undefined) {
      reasoning = { ...reasoning, ...options.reasoning };
    }
    return reasoning;
  }
}
