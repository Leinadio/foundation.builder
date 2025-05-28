// dictionary-provider.tsx
"use client";

import { getDictionary } from "@/app/[lang]/dictionaries";
import React from "react";

type Dictionary = Awaited<ReturnType<typeof getDictionary>>;

export const DictionaryContext = React.createContext<Dictionary | null>(null);

export default function DictionaryProvider({
  dictionary,
  children,
}: {
  dictionary: Dictionary;
  children: React.ReactNode;
}) {
  return (
    <DictionaryContext.Provider value={dictionary}>
      {children}
    </DictionaryContext.Provider>
  );
}
