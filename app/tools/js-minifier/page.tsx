"use client";

import { useState } from "react";
import { tools } from "@/lib/tools";
import { ToolLayout } from "@/components/tool-layout";
import { CodeEditor } from "@/components/code-editor";
import { minify } from "terser";

export default function JSMinifier() {
  const [input, setInput] = useState("");
  const [output, setOutput] = useState("");

  const processCode = async () => {
    try {
      const result = await minify(input, {
        compress: true,
        mangle: true
      });
      setOutput(result.code || "");
    } catch (error) {
      setOutput("Error: Invalid JavaScript code");
    }
  };

  const tool = tools.find(t => t.id === "js-minifier")!;

  return (
    <ToolLayout
      tool={tool}
      about={
        <p className="text-muted-foreground">
          Our JavaScript Minifier uses Terser to reduce the size of your JavaScript files
          by removing unnecessary characters without changing the code's functionality.
          This process improves load times and reduces bandwidth usage.
        </p>
      }
      features={
        <ul className="list-disc list-inside space-y-2 text-muted-foreground">
          <li>Advanced code compression</li>
          <li>Variable name mangling</li>
          <li>Dead code elimination</li>
          <li>Preserves code functionality</li>
          <li>Real-time minification</li>
        </ul>
      }
      howTo={
        <ol className="list-decimal list-inside space-y-2 text-muted-foreground">
          <li>Paste your JavaScript code in the input field</li>
          <li>Click the "Minify JavaScript" button</li>
          <li>Copy the minified code from the output field</li>
          <li>Use the minified code in your project</li>
        </ol>
      }
    >
      <CodeEditor
        input={input}
        output={output}
        onInputChange={setInput}
        onProcess={processCode}
        inputPlaceholder="Paste your JavaScript code here..."
        buttonText="Minify JavaScript"
      />
    </ToolLayout>
  );
}