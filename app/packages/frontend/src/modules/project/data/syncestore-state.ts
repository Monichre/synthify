import { FlowNode } from "../types/flow-data";
import OpenAI from "openai";

export const initialSyncedStoreTaskState = {
  config: {} as {
    isInitialized: boolean;
  },
  chat: {} as {
    selectedServiceId: string;
    selectedModelId: string;
    messages: OpenAI.ChatCompletionMessageParam[];
  },
  nodes: {} as Record<string, FlowNode>,
};
