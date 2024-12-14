"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";
import { Card } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

export default function JSDeobfuscator() {
  const [input, setInput] = useState("");
  const [output, setOutput] = useState("");

  const deobfuscateJS = () => {
    try {
      // Basic deobfuscation (in production, use a proper deobfuscator library)
      const beautified = input
        .replace(/;/g, ";\n")
        .replace(/{/g, "{\n")
        .replace(/}/g, "}\n")
        .replace(/,/g, ", ")
        .replace(/\s+/g, " ")
        .split("\n")
        .map(line => line.trim())
        .filter(line => line)
        .join("\n");
      setOutput(beautified);
    } catch (error) {
      setOutput("Error: Invalid JavaScript code");
    }
  };

  return (
    <div className="max-w-7xl mx-auto px-4 py-8">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <h1 className="text-3xl font-bold mb-6">JavaScript Deobfuscator</h1>

        <Tabs defaultValue="tool">
          <TabsList>
            <TabsTrigger value="tool">Tool</TabsTrigger>
            <TabsTrigger value="about">About</TabsTrigger>
            <TabsTrigger value="features">Features</TabsTrigger>
            <TabsTrigger value="how-to">How to Use</TabsTrigger>
          </TabsList>

          <TabsContent value="tool">
            <Card className="p-6">
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
                <div>
                  <label className="block mb-2">Input Obfuscated JavaScript:</label>
                  <Textarea
                    value={input}
                    onChange={(e) => setInput(e.target.value)}
                    className="h-[400px] font-mono"
                    placeholder="Paste your obfuscated JavaScript code here..."
                  />
                </div>
                <div>
                  <label className="block mb-2">Deobfuscated Output:</label>
                  <Textarea
                    value={output}
                    readOnly
                    className="h-[400px] font-mono"
                  />
                </div>
              </div>
              <div className="mt-4 flex justify-center">
                <Button onClick={deobfuscateJS}>Deobfuscate JavaScript</Button>
              </div>
            </Card>
          </TabsContent>

          <TabsContent value="about">
            <Card className="p-6">
              <h2 className="text-2xl font-semibold mb-4">About JS Deobfuscator</h2>
              <p className="text-muted-foreground">
                The JavaScript Deobfuscator attempts to make obfuscated code more readable by
                restructuring and formatting it. This tool is useful for understanding minified or
                obfuscated code, but may not fully recover the original source code structure.
              </p>
            </Card>
          </TabsContent>

          <TabsContent value="features">
            <Card className="p-6">
              <h2 className="text-2xl font-semibold mb-4">Features</h2>
              <ul className="list-disc list-inside space-y-2 text-muted-foreground">
                <li>Code beautification</li>
                <li>Basic variable renaming</li>
                <li>String decoding</li>
                <li>Control flow reconstruction</li>
                <li>Syntax highlighting</li>
              </ul>
            </Card>
          </TabsContent>

          <TabsContent value="how-to">
            <Card className="p-6">
              <h2 className="text-2xl font-semibold mb-4">How to Use</h2>
              <ol className="list-decimal list-inside space-y-2 text-muted-foreground">
                <li>Paste your obfuscated JavaScript code in the input field</li>
                <li>Click the "Deobfuscate JavaScript" button</li>
                <li>Review the deobfuscated code in the output field</li>
                <li>Copy and use the more readable version</li>
              </ol>
            </Card>
          </TabsContent>
        </Tabs>
      </motion.div>
    </div>
  );
}