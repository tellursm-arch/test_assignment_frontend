'use client'
import { createContext, useContext, ReactNode, useMemo } from 'react'
import { ChatStore } from '@/store/ChatStore'
import type { MessageT } from '@/api/index'

const StoreContext = createContext<ChatStore | null>(null);

interface StoreProviderProps {
  children: ReactNode,
  initialMessages: MessageT[],
};

export function ChatStoreProvider({ children, initialMessages }: StoreProviderProps) {
  const store = useMemo(() => new ChatStore(initialMessages), [initialMessages]);

  return (
    <StoreContext.Provider value={store}>
      {children}
    </StoreContext.Provider>
  )
}

export function useChatStore(): ChatStore | null {
  const store = useContext(StoreContext);

  return store;
}
