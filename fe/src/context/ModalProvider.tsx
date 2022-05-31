import React, { createContext, Dispatch, SetStateAction, useContext, useState } from 'react';

type ActiveState = boolean;
type DispatchActiveType = Dispatch<SetStateAction<ActiveState>>;
type ContentState = string;
type DispatchContentType = Dispatch<SetStateAction<ContentState>>;

export const ActiveContext = createContext<ActiveState>(false);
export const SetActiveContext = createContext<DispatchActiveType>(() => false);
export const ContentContext = createContext<ContentState>('');
export const SetContentContext = createContext<DispatchContentType>(() => '');

export function ModalProvider({ children }: { children: React.ReactNode }) {
  const [show, setShow] = useState<ActiveState>(false);
  const [content, setContent] = useState<ContentState>('');

  return (
    <ActiveContext.Provider value={show}>
      <SetActiveContext.Provider value={setShow}>
        <ContentContext.Provider value={content}>
          <SetContentContext.Provider value={setContent}>{children} </SetContentContext.Provider>
        </ContentContext.Provider>
      </SetActiveContext.Provider>
    </ActiveContext.Provider>
  );
}

export function useActiveModal() {
  const active = useContext(ActiveContext);
  return active;
}

export function useSetActiveModal() {
  const setActive = useContext(SetActiveContext);
  if (!setActive) throw new Error('Cannot find SetActiveModalProvider');
  return setActive;
}

export function useContentModal() {
  const active = useContext(ContentContext);
  return active;
}

export function useSetContentModal() {
  const setActive = useContext(SetContentContext);
  if (!setActive) throw new Error('Cannot find SetContentModalProvider');
  return setActive;
}
