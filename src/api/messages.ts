import { MessageT, MessageBeingSentT, GetMessagesResponseT } from './';

const API_URL = process.env.API_URL || '';
const API_PORT = process.env.API_PORT || '';

export const API_ENDPOINTS = {
  messages: `/api/messages`,
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

    const params = new URLSearchParams({ page: String(page), limit: String(limit) });
    let url = `${API_ENDPOINTS.messages}?${params.toString()}`;
    if (typeof window === 'undefined') {
      url = `http://${API_URL}${API_PORT ? `:${API_PORT}` : ''}${url}`;
    }

    return apiFetch<GetMessagesResponseT>(url);
  },

  sendMessage: (message: MessageBeingSentT) => {
    return apiFetch<{
      message: MessageT
      status: string
    }>(API_ENDPOINTS.messages, {
      method: 'POST',
      body: JSON.stringify(message),
    });
  },
};