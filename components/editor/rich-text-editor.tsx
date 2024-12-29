"use client";

import { LexicalComposer } from "@lexical/react/LexicalComposer";
import { RichTextPlugin } from "@lexical/react/LexicalRichTextPlugin";
import { ContentEditable } from "@lexical/react/LexicalContentEditable";
import { HistoryPlugin } from "@lexical/react/LexicalHistoryPlugin";
import { AutoFocusPlugin } from "@lexical/react/LexicalAutoFocusPlugin";
import { OnChangePlugin } from '@lexical/react/LexicalOnChangePlugin';
import { MarkdownShortcutPlugin } from '@lexical/react/LexicalMarkdownShortcutPlugin';
import LexicalErrorBoundary from "@lexical/react/LexicalErrorBoundary";
import { ToolbarPlugin } from "./plugins/toolbar-plugin";
import { CodeHighlightPlugin } from "./plugins/code-highlight-plugin";
import { ListPlugin } from "./plugins/list-plugin";
import { LinkPlugin } from "./plugins/link-plugin";
import { MathPlugin } from "./plugins/math-plugin";
import { editorConfig } from "./config/editor-config";

function Placeholder() {
  return (
    <div className="absolute top-[72px] left-3 text-muted-foreground pointer-events-none">
      Start writing your article...
    </div>
  );
}

interface RichTextEditorProps {
  onChange?: (content: string) => void;
  initialContent?: string;
}

export function RichTextEditor({ onChange, initialContent }: RichTextEditorProps) {
  return (
    <LexicalComposer initialConfig={editorConfig}>
      <div className="relative min-h-[400px] border rounded-md">
        <ToolbarPlugin />
        <div className="p-4">
          <RichTextPlugin
            contentEditable={<ContentEditable className="min-h-[300px] outline-none" />}
            placeholder={<Placeholder />}
            ErrorBoundary={LexicalErrorBoundary}
          />
          <HistoryPlugin />
          <AutoFocusPlugin />
          <ListPlugin />
          <LinkPlugin />
          <CodeHighlightPlugin />
          <MathPlugin />
          <MarkdownShortcutPlugin />
          {onChange && <OnChangePlugin onChange={onChange} />}
        </div>
      </div>
    </LexicalComposer>
  );
}