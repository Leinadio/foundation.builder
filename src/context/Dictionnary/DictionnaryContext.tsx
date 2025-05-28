"use client";

import React from "react";
import { DictionaryContext } from "./DictionnaryProvider";
import { Dictionary } from "@/app/[lang]/dictionaries";

export function useDictionary(): {
  dictionary: Dictionary;
} {
  const dictionary = React.useContext(DictionaryContext);
  if (dictionary === null) {
    throw new Error(
      "useDictionary hook must be used within DictionaryProvider"
    );
  }

  return {
    dictionary,
  };
}
