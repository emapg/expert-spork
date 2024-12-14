"use client";

import { useState } from "react";
import { tools } from "@/lib/tools";
import { ToolLayout } from "@/components/tool-layout";
import { CodeEditor } from "@/components/code-editor";
import { minify } from "html-minifier-terser";

export default function HTMLMinifier() {
  const [input, setInput] = useState("");
  const [output, setOutput] = useState("");

  const processCode = async () => {
    try {
      const result = await minify(input, {
        collapseWhitespace: true,
        removeComments: true,
        minifyCSS: true,
        minifyJS: true
      });
      setOutput(result);
    } catch (error) {
      setOutput("Error: Invalid HTML code");
    }
  };

  const tool = tools.find(t => t.id === "html-minifier")!;

  return (
    <ToolLayout
      tool={tool}
      about={
        <p className="text-muted-foreground">
          Our HTML Minifier optimizes your HTML code by removing unnecessary whitespace,
          comments, and optimizing inline CSS and JavaScript. This results in smaller file
          sizes and faster page loads.
        </p>
      }
      features={
        <ul className="list-disc list-inside space-y-2 text-muted-foreground">
          <li>Whitespace removal</li>
          <li>Comment removal</li>
          <li>Inline CSS/JS optimization</li>
          <li>Attribute optimization</li>
          <li>Real-time minification</li>
        </ul>
      }
      howTo={
        <ol className="list-decimal list-inside space-y-2 text-muted-foreground">
          <li>Paste your HTML code in the input field</li>
          <li>Click the "Minify HTML" button</li>
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
        inputPlaceholder="Paste your HTML code here..."
        buttonText="Minify HTML"
      />
    </ToolLayout>
  );
}