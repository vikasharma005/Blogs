import { nodes } from "./nodes";

export const editorConfig = {
  namespace: "ieee-blog-editor",
  nodes,
  theme: {
    paragraph: "mb-2",
    text: {
      bold: "font-bold",
      italic: "italic",
      underline: "underline",
    },
    heading: {
      h1: "text-3xl font-bold mb-4",
      h2: "text-2xl font-bold mb-3",
      h3: "text-xl font-bold mb-2",
    },
    list: {
      ul: "list-disc list-inside mb-4",
      ol: "list-decimal list-inside mb-4",
    },
    code: "font-mono bg-muted p-2 rounded",
  },
  onError: (error: Error) => {
    console.error(error);
  },
};