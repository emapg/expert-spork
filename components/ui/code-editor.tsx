"use client";

import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import { Alert, AlertDescription } from "@/components/ui/alert";
import { Loader2, Copy, Check } from "lucide-react";
import { useState } from "react";

interface CodeEditorProps {
  input: string;
  output: string;
  error?: string | null;
  isProcessing?: boolean;
  onInputChange: (value: string) => void;
  onProcess: () => void;
  inputPlaceholder?: string;
  buttonText: string;
}

export function CodeEditor({
  input,
  output,
  error,
  isProcessing,
  onInputChange,
  onProcess,
  inputPlaceholder,
  buttonText
}: CodeEditorProps) {
  const [copied, setCopied] = useState(false);

  const copyToClipboard = async () => {
    if (output) {
      await navigator.clipboard.writeText(output);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    }
  };

  return (
    <div className="space-y-4">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
        <div className="space-y-2">
          <label className="text-sm font-medium">Input:</label>
          <Textarea
            value={input}
            onChange={(e) => onInputChange(e.target.value)}
            className="h-[400px] font-mono"
            placeholder={inputPlaceholder}
          />
        </div>
        <div className="space-y-2">
          <div className="flex justify-between items-center">
            <label className="text-sm font-medium">Output:</label>
            {output && (
              <Button
                variant="ghost"
                size="sm"
                onClick={copyToClipboard}
                className="h-8"
              >
                {copied ? (
                  <Check className="h-4 w-4 mr-2" />
                ) : (
                  <Copy className="h-4 w-4 mr-2" />
                )}
                {copied ? "Copied!" : "Copy"}
              </Button>
            )}
          </div>
          <Textarea
            value={output}
            readOnly
            className="h-[400px] font-mono"
          />
        </div>
      </div>

      {error && (
        <Alert variant="destructive">
          <AlertDescription>{error}</AlertDescription>
        </Alert>
      )}

      <div className="flex justify-center">
        <Button 
          onClick={onProcess} 
          disabled={isProcessing}
          className="min-w-[200px]"
        >
          {isProcessing && <Loader2 className="mr-2 h-4 w-4 animate-spin" />}
          {buttonText}
        </Button>
      </div>
    </div>
  );
}