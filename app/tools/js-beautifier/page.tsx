"use client";

import { ToolLayout } from "@/components/tool-layout";
import { CodeEditor } from "@/components/code-editor";
import { useCodeProcessor } from "@/lib/hooks/use-code-processor";
import { beautifyJavaScript } from "@/lib/utils/minifiers";
import { tools } from "@/lib/tools";

export default function JSBeautifier() {
  const {
    input,
    setInput,
    output,
    error,
    isProcessing,
    processCode
  } = useCodeProcessor({ processor: beautifyJavaScript });

  const tool = tools.find(t => t.id === "js-beautifier")!;

  return (
    <ToolLayout
      tool={tool}
      about={
        <p className="text-muted-foreground">
          Make your JavaScript code more readable with our JavaScript Beautifier.
          This tool formats your code with proper indentation and consistent style.
        </p>
      }
      features={
        <ul className="list-disc list-inside space-y-2 text-muted-foreground">
          <li>Consistent formatting</li>
          <li>Proper indentation</li>
          <li>Semicolon handling</li>
          <li>Quote style normalization</li>
          <li>Syntax error detection</li>
        </ul>
      }
      howTo={
        <ol className="list-decimal list-inside space-y-2 text-muted-foreground">
          <li>Paste your JavaScript code in the input field</li>
          <li>Click the "Beautify JavaScript" button</li>
          <li>Review the formatted code in the output field</li>
          <li>Copy the beautified code to use in your project</li>
        </ol>
      }
    >
      <CodeEditor
        input={input}
        output={output}
        error={error}
        isProcessing={isProcessing}
        onInputChange={setInput}
        onProcess={processCode}
        inputPlaceholder="Paste your JavaScript code here..."
        buttonText="Beautify JavaScript"
      />
    </ToolLayout>
  );
}