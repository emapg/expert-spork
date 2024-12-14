import { FileCode2, Code2, Wand2, Shield, Database, FileJson, FileHtml, Braces } from "lucide-react";

export interface Tool {
  id: string;
  title: string;
  description: string;
  icon: React.ComponentType;
  href: string;
  category: "JavaScript" | "CSS" | "HTML" | "SQL" | "JSON" | "Other";
}

export const tools: Tool[] = [
  {
    id: "js-minifier",
    title: "JS Minifier",
    description: "Compress JavaScript code to reduce file size",
    icon: Code2,
    href: "/tools/js-minifier",
    category: "JavaScript"
  },
  {
    id: "css-minifier",
    title: "CSS Minifier",
    description: "Optimize CSS code for production",
    icon: FileCode2,
    href: "/tools/css-minifier",
    category: "CSS"
  },
  {
    id: "js-obfuscator",
    title: "JS Obfuscator",
    description: "Protect your JavaScript code",
    icon: Shield,
    href: "/tools/js-obfuscator",
    category: "JavaScript"
  },
  {
    id: "js-deobfuscator",
    title: "JS Deobfuscator",
    description: "Decode obfuscated JavaScript code",
    icon: Wand2,
    href: "/tools/js-deobfuscator",
    category: "JavaScript"
  },
  {
    id: "js-beautifier",
    title: "JS Beautifier",
    description: "Format and beautify JavaScript code",
    icon: Code2,
    href: "/tools/js-beautifier",
    category: "JavaScript"
  },
  {
    id: "html-minifier",
    title: "HTML Minifier",
    description: "Minify HTML code for faster loading",
    icon: FileHtml,
    href: "/tools/html-minifier",
    category: "HTML"
  },
  {
    id: "sql-formatter",
    title: "SQL Formatter",
    description: "Format and beautify SQL queries",
    icon: Database,
    href: "/tools/sql-formatter",
    category: "SQL"
  },
  {
    id: "json-formatter",
    title: "JSON Formatter",
    description: "Format and validate JSON data",
    icon: FileJson,
    href: "/tools/json-formatter",
    category: "JSON"
  },
  {
    id: "regex-tester",
    title: "Regex Tester",
    description: "Test and debug regular expressions",
    icon: Braces,
    href: "/tools/regex-tester",
    category: "Other"
  }
];