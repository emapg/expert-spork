"use client";

import { minify as terserMinify } from 'terser';
import { minify as htmlMinify } from 'html-minifier-terser';
import * as JavaScriptObfuscator from 'javascript-obfuscator';
import { format as sqlFormat } from 'sql-formatter';
import { format as prettierFormat } from 'prettier';

export async function minifyJavaScript(code: string): Promise<string> {
  try {
    const result = await terserMinify(code, {
      compress: true,
      mangle: true
    });
    return result.code || '';
  } catch (error) {
    throw new Error('Invalid JavaScript code');
  }
}

export async function minifyHTML(code: string): Promise<string> {
  try {
    return await htmlMinify(code, {
      collapseWhitespace: true,
      removeComments: true,
      minifyCSS: true,
      minifyJS: true
    });
  } catch (error) {
    throw new Error('Invalid HTML code');
  }
}

export function minifyCSS(code: string): string {
  try {
    return code
      .replace(/\/\*[\s\S]*?\*\/|\/\/.*/g, '')
      .replace(/\s+/g, ' ')
      .replace(/\s*{\s*/g, '{')
      .replace(/\s*}\s*/g, '}')
      .replace(/\s*:\s*/g, ':')
      .replace(/\s*;\s*/g, ';')
      .replace(/\s*,\s*/g, ',')
      .trim();
  } catch (error) {
    throw new Error('Invalid CSS code');
  }
}

export function obfuscateJavaScript(code: string): string {
  try {
    const result = JavaScriptObfuscator.obfuscate(code, {
      compact: true,
      controlFlowFlattening: true,
      controlFlowFlatteningThreshold: 0.75,
      numbersToExpressions: true,
      simplify: true,
      stringArrayShuffle: true,
      splitStrings: true,
      stringArrayThreshold: 0.75
    });
    return result.getObfuscatedCode();
  } catch (error) {
    throw new Error('Invalid JavaScript code');
  }
}

export function formatSQL(code: string): string {
  try {
    return sqlFormat(code, {
      language: 'sql',
      uppercase: true,
      indentStyle: 'standard'
    });
  } catch (error) {
    throw new Error('Invalid SQL code');
  }
}

export async function formatJSON(code: string): Promise<string> {
  try {
    const parsed = JSON.parse(code);
    return JSON.stringify(parsed, null, 2);
  } catch (error) {
    throw new Error('Invalid JSON code');
  }
}

export async function beautifyJavaScript(code: string): Promise<string> {
  try {
    return await prettierFormat(code, {
      parser: 'babel',
      semi: true,
      singleQuote: true
    });
  } catch (error) {
    throw new Error('Invalid JavaScript code');
  }
}