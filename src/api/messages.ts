import { MessageT, MessageBeingSentT, GetMessagesResponseT } from './';

const API_BASE_URL = process.env.NEXT_PUBLIC_API_URL || 'http://localhost:3001';

export const API_ENDPOINTS = {
  messages: `${API_BASE_URL}/api/messages`,
};

export async function apiFetch<T>(
  endpoint: string,
  options?: RequestInit
): Promise<T> {
  const response = await fetch(endpoint, {
    headers: {
      'Content-Type': 'application/json',
      ...options?.headers,
    },
    ...options,
  });

  if (response.status !== 200) {
    throw new Error(`API Error: ${response.status} ${response.statusText}`);
  }

  return response.json();
}

export const messagesApi = {
  getMessages: (page: number, limit: number) => {
    const url = new URL(API_ENDPOINTS.messages);
    url.searchParams.set('page', String(page));
    url.searchParams.set('limit', String(limit));

    return apiFetch<GetMessagesResponseT>(url.toString());
  },

  sendMessage: (message: MessageBeingSentT) => {
    return apiFetch<{
      message: MessageT
      status: string
    }>(API_ENDPOINTS.messages, {
      method: 'POST',
      body: JSON.stringify(message),
    })
  },
}