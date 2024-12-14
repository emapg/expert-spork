"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";
import { Card } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import * as JavaScriptObfuscator from 'javascript-obfuscator';

export default function JSObfuscator() {
  const [input, setInput] = useState("");
  const [output, setOutput] = useState("");

  const obfuscateJS = () => {
    try {
      const obfuscationResult = JavaScriptObfuscator.obfuscate(input, {
        compact: true,
        controlFlowFlattening: true,
        controlFlowFlatteningThreshold: 0.75,
        numbersToExpressions: true,
        simplify: true,
        stringArrayShuffle: true,
        splitStrings: true,
        stringArrayThreshold: 0.75
      });
      setOutput(obfuscationResult.getObfuscatedCode());
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
        <h1 className="text-3xl font-bold mb-6">JavaScript Obfuscator</h1>

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
                  <label className="block mb-2">Input JavaScript:</label>
                  <Textarea
                    value={input}
                    onChange={(e) => setInput(e.target.value)}
                    className="h-[400px] font-mono"
                    placeholder="Paste your JavaScript code here..."
                  />
                </div>
                <div>
                  <label className="block mb-2">Obfuscated Output:</label>
                  <Textarea
                    value={output}
                    readOnly
                    className="h-[400px] font-mono"
                  />
                </div>
              </div>
              <div className="mt-4 flex justify-center">
                <Button onClick={obfuscateJS}>Obfuscate JavaScript</Button>
              </div>
            </Card>
          </TabsContent>

          <TabsContent value="about">
            <Card className="p-6">
              <h2 className="text-2xl font-semibold mb-4">About JS Obfuscator</h2>
              <p className="text-muted-foreground">
                The JavaScript Obfuscator transforms your code into a more complex version that's harder
                to understand and reverse engineer, while maintaining the same functionality. This helps
                protect your intellectual property and prevent unauthorized access to your source code.
              </p>
            </Card>
          </TabsContent>

          <TabsContent value="features">
            <Card className="p-6">
              <h2 className="text-2xl font-semibold mb-4">Features</h2>
              <ul className="list-disc list-inside space-y-2 text-muted-foreground">
                <li>Variable name transformation</li>
                <li>String encryption</li>
                <li>Control flow flattening</li>
                <li>Dead code injection</li>
                <li>Source map generation</li>
                <li>Multiple obfuscation levels</li>
              </ul>
            </Card>
          </TabsContent>

          <TabsContent value="how-to">
            <Card className="p-6">
              <h2 className="text-2xl font-semibold mb-4">How to Use</h2>
              <ol className="list-decimal list-inside space-y-2 text-muted-foreground">
                <li>Paste your JavaScript code in the input field</li>
                <li>Click the "Obfuscate JavaScript" button</li>
                <li>Copy the obfuscated code from the output field</li>
                <li>Test the obfuscated code in your environment</li>
              </ol>
            </Card>
          </TabsContent>
        </Tabs>
      </motion.div>
    </div>
  );
}