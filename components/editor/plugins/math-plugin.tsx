"use client";

import { useLexicalComposerContext } from "@lexical/react/LexicalComposerContext";
import { $insertNodes } from "lexical";
import katex from "katex";
import "katex/dist/katex.min.css";

export function MathPlugin() {
  const [editor] = useLexicalComposerContext();

  const insertMathEquation = (latex: string) => {
    editor.update(() => {
      const mathNode = {
        latex,
        type: "math",
        version: 1,
      };
      $insertNodes([mathNode]);
    });
  };

  return null;
}