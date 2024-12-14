"use client";

import { minify as terserMinify } from 'terser';
import { minify as htmlMinify } from 'html-minifier-terser';
import * as JavaScriptObfuscator from 'javascript-obfuscator';
import { format as sqlFormat } from 'sql-formatter';
import { format as prettierFormat } from 'prettier';

export interface ProcessorResult {
  code: string;
  error?: string;
}

export async function processCode<T>(
  code: string,
  processor: (code: string) => Promise<T> | T
): Promise<ProcessorResult> {
  try {
    const result = await processor(code);
    return { code: result as string };
  } catch (error) {
    return {
      code: '',
      error: error instanceof Error ? error.message : 'An error occurred'
    };
  }
}

export const processors = {
  async minifyJS(code: string) {
    const result = await terserMinify(code, {
      compress: true,
      mangle: true
    });
    return result.code || '';
  },

  async minifyHTML(code: string) {
    return htmlMinify(code, {
      collapseWhitespace: true,
      removeComments: true,
      minifyCSS: true,
      minifyJS: true
    });
  },

  minifyCSS(code: string) {
    return code
      .replace(/\/\*[\s\S]*?\*\/|\/\/.*/g, '')
      .replace(/\s+/g, ' ')
      .replace(/\s*{\s*/g, '{')
      .replace(/\s*}\s*/g, '}')
      .replace(/\s*:\s*/g, ':')
      .replace(/\s*;\s*/g, ';')
      .replace(/\s*,\s*/g, ',')
      .trim();
  },

  obfuscateJS(code: string) {
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
  },

  formatSQL(code: string) {
    return sqlFormat(code, {
      language: 'sql',
      uppercase: true,
      indentStyle: 'standard'
    });
  },

  async formatJSON(code: string) {
    const parsed = JSON.parse(code);
    return JSON.stringify(parsed, null, 2);
  },

  async beautifyJS(code: string) {
    return prettierFormat(code, {
      parser: 'babel',
      semi: true,
      singleQuote: true
    });
  }
};