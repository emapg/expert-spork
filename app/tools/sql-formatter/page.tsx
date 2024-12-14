"use client";

import { useState } from "react";
import { tools } from "@/lib/tools";
import { ToolLayout } from "@/components/tool-layout";
import { CodeEditor } from "@/components/code-editor";
import { format } from "sql-formatter";

export default function SQLFormatter() {
  const [input, setInput] = useState("");
  const [output, setOutput] = useState("");

  const processCode = () => {
    try {
      const formatted = format(input, {
        language: "sql",
        uppercase: true,
        indentStyle: "standard"
      });
      setOutput(formatted);
    } catch (error) {
      setOutput("Error: Invalid SQL code");
    }
  };

  const tool = tools.find(t => t.id === "sql-formatter")!;

  return (
    <ToolLayout
      tool={tool}
      about={
        <p className="text-muted-foreground">
          Our SQL Formatter helps you format and beautify SQL queries for better readability.
          It supports multiple SQL dialects and provides consistent formatting rules.
        </p>
      }
      features={
        <ul className="list-disc list-inside space-y-2 text-muted-foreground">
          <li>Multiple SQL dialect support</li>
          <li>Keyword capitalization</li>
          <li>Consistent indentation</li>
          <li>Query structure optimization</li>
          <li>Real-time formatting</li>
        </ul>
      }
      howTo={
        <ol className="list-decimal list-inside space-y-2 text-muted-foreground">
          <li>Paste your SQL query in the input field</li>
          <li>Click the "Format SQL" button</li>
          <li>Copy the formatted query from the output field</li>
          <li>Use the formatted SQL in your project</li>
        </ol>
      }
    >
      <CodeEditor
        input={input}
        output={output}
        onInputChange={setInput}
        onProcess={processCode}
        inputPlaceholder="Paste your SQL query here..."
        buttonText="Format SQL"
      />
    </ToolLayout>
  );
}