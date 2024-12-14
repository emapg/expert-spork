"use client";

import { useState } from "react";
import { ToolLayout } from "@/components/tool-layout";
import { tools } from "@/lib/tools";
import { Card } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Switch } from "@/components/ui/switch";

export default function RegexTester() {
  const [pattern, setPattern] = useState("");
  const [flags, setFlags] = useState("g");
  const [testString, setTestString] = useState("");
  const [matches, setMatches] = useState<string[]>([]);
  const [error, setError] = useState<string | null>(null);

  const testRegex = () => {
    setError(null);
    try {
      const regex = new RegExp(pattern, flags);
      const results = Array.from(testString.matchAll(regex), m => m[0]);
      setMatches(results);
    } catch (err) {
      setError(err instanceof Error ? err.message : 'Invalid regular expression');
      setMatches([]);
    }
  };

  const tool = tools.find(t => t.id === "regex-tester")!;

  return (
    <ToolLayout
      tool={tool}
      about={
        <p className="text-muted-foreground">
          Test and debug your regular expressions in real-time. Our Regex Tester
          helps you validate patterns and see matches instantly.
        </p>
      }
      features={
        <ul className="list-disc list-inside space-y-2 text-muted-foreground">
          <li>Real-time testing</li>
          <li>Match highlighting</li>
          <li>Regex flag support</li>
          <li>Error detection</li>
          <li>Match count display</li>
        </ul>
      }
      howTo={
        <ol className="list-decimal list-inside space-y-2 text-muted-foreground">
          <li>Enter your regular expression pattern</li>
          <li>Set the desired flags</li>
          <li>Input the test string</li>
          <li>View matches in real-time</li>
        </ol>
      }
    >
      <Card className="p-6">
        <div className="space-y-6">
          <div className="grid gap-4">
            <div>
              <Label>Regular Expression Pattern</Label>
              <Input
                value={pattern}
                onChange={(e) => {
                  setPattern(e.target.value);
                  testRegex();
                }}
                placeholder="Enter regex pattern..."
                className="font-mono"
              />
            </div>

            <div className="flex gap-4 items-center">
              <Label>Flags:</Label>
              {['g', 'i', 'm', 's', 'u', 'y'].map((flag) => (
                <div key={flag} className="flex items-center space-x-2">
                  <Switch
                    checked={flags.includes(flag)}
                    onCheckedChange={(checked) => {
                      const newFlags = checked
                        ? flags + flag
                        : flags.replace(flag, '');
                      setFlags(newFlags);
                      testRegex();
                    }}
                  />
                  <Label>{flag}</Label>
                </div>
              ))}
            </div>

            <div>
              <Label>Test String</Label>
              <Textarea
                value={testString}
                onChange={(e) => {
                  setTestString(e.target.value);
                  testRegex();
                }}
                placeholder="Enter test string..."
                className="h-[200px]"
              />
            </div>

            {error && (
              <div className="text-destructive">{error}</div>
            )}

            <div>
              <Label>Matches ({matches.length})</Label>
              <Textarea
                value={matches.join('\n')}
                readOnly
                className="h-[200px] font-mono"
              />
            </div>
          </div>
        </div>
      </Card>
    </ToolLayout>
  );
}