"use client";

import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";

interface CodeEditorProps {
  input: string;
  output: string;
  onInputChange: (value: string) => void;
  onProcess: () => void;
  inputPlaceholder?: string;
  buttonText: string;
}

export function CodeEditor({
  input,
  output,
  onInputChange,
  onProcess,
  inputPlaceholder,
  buttonText
}: CodeEditorProps) {
  return (
    <div>
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
        <div>
          <label className="block mb-2">Input:</label>
          <Textarea
            value={input}
            onChange={(e) => onInputChange(e.target.value)}
            className="h-[400px] font-mono"
            placeholder={inputPlaceholder}
          />
        </div>
        <div>
          <label className="block mb-2">Output:</label>
          <Textarea
            value={output}
            readOnly
            className="h-[400px] font-mono"
          />
        </div>
      </div>
      <div className="mt-4 flex justify-center">
        <Button onClick={onProcess}>{buttonText}</Button>
      </div>
    </div>
  );
}