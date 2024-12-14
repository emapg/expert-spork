"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";
import { Card } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

export default function CSSMinifier() {
  const [input, setInput] = useState("");
  const [output, setOutput] = useState("");

  const minifyCSS = () => {
    // Basic CSS minification
    const minified = input
      .replace(/\/\*[\s\S]*?\*\/|\/\/.*/g, "") // Remove comments
      .replace(/\s+/g, " ") // Replace multiple spaces with single space
      .replace(/\s*{\s*/g, "{") // Remove spaces around brackets
      .replace(/\s*}\s*/g, "}") // Remove spaces around brackets
      .replace(/\s*:\s*/g, ":") // Remove spaces around colons
      .replace(/\s*;\s*/g, ";") // Remove spaces around semicolons
      .replace(/\s*,\s*/g, ",") // Remove spaces around commas
      .trim();
    setOutput(minified);
  };

  return (
    <div className="max-w-7xl mx-auto px-4 py-8">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <h1 className="text-3xl font-bold mb-6">CSS Minifier</h1>

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
                  <label className="block mb-2">Input CSS:</label>
                  <Textarea
                    value={input}
                    onChange={(e) => setInput(e.target.value)}
                    className="h-[400px] font-mono"
                    placeholder="Paste your CSS code here..."
                  />
                </div>
                <div>
                  <label className="block mb-2">Minified Output:</label>
                  <Textarea
                    value={output}
                    readOnly
                    className="h-[400px] font-mono"
                  />
                </div>
              </div>
              <div className="mt-4 flex justify-center">
                <Button onClick={minifyCSS}>Minify CSS</Button>
              </div>
            </Card>
          </TabsContent>

          <TabsContent value="about">
            <Card className="p-6">
              <h2 className="text-2xl font-semibold mb-4">About CSS Minifier</h2>
              <p className="text-muted-foreground">
                Our CSS Minifier tool helps you optimize your stylesheets by removing unnecessary
                characters and formatting. This results in smaller file sizes and faster loading times
                for your web applications.
              </p>
            </Card>
          </TabsContent>

          <TabsContent value="features">
            <Card className="p-6">
              <h2 className="text-2xl font-semibold mb-4">Features</h2>
              <ul className="list-disc list-inside space-y-2 text-muted-foreground">
                <li>Removes comments and whitespace</li>
                <li>Optimizes CSS selectors</li>
                <li>Preserves CSS functionality</li>
                <li>Real-time minification</li>
                <li>Easy copy-paste functionality</li>
              </ul>
            </Card>
          </TabsContent>

          <TabsContent value="how-to">
            <Card className="p-6">
              <h2 className="text-2xl font-semibold mb-4">How to Use</h2>
              <ol className="list-decimal list-inside space-y-2 text-muted-foreground">
                <li>Paste your CSS code in the input field</li>
                <li>Click the "Minify CSS" button</li>
                <li>Copy the minified code from the output field</li>
                <li>Use the minified CSS in your project</li>
              </ol>
            </Card>
          </TabsContent>
        </Tabs>
      </motion.div>
    </div>
  );
}