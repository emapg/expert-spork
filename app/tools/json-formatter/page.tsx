"use client";

import { ToolLayout } from "@/components/tool-layout";
import { CodeEditor } from "@/components/code-editor";
import { useCodeProcessor } from "@/lib/hooks/use-code-processor";
import { formatJSON } from "@/lib/utils/minifiers";
import { tools } from "@/lib/tools";

export default function JSONFormatter() {
  const {
    input,
    setInput,
    output,
    error,
    isProcessing,
    processCode
  } = useCodeProcessor({ processor: formatJSON });

  const tool = tools.find(t => t.id === "json-formatter")!;

  return (
    <ToolLayout
      tool={tool}
      about={
        <p className="text-muted-foreground">
          Format and validate your JSON data with our JSON formatter. This tool helps you
          make your JSON data more readable and ensures it follows the correct syntax.
        </p>
      }
      features={
        <ul className="list-disc list-inside space-y-2 text-muted-foreground">
          <li>Proper indentation</li>
          <li>JSON validation</li>
          <li>Syntax error detection</li>
          <li>Real-time formatting</li>
          <li>Easy copy functionality</li>
        </ul>
      }
      howTo={
        <ol className="list-decimal list-inside space-y-2 text-muted-foreground">
          <li>Paste your JSON data in the input field</li>
          <li>Click the "Format JSON" button</li>
          <li>Review the formatted JSON in the output field</li>
          <li>Copy the formatted JSON to use in your project</li>
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
        inputPlaceholder="Paste your JSON data here..."
        buttonText="Format JSON"
      />
    </ToolLayout>
  );
}