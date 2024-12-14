"use client";

import { useState } from 'react';
import { ProcessorResult, processCode } from '@/lib/utils/code-processors';

interface UseToolOptions {
  processor: (code: string) => Promise<string> | string;
}

export function useTool({ processor }: UseToolOptions) {
  const [input, setInput] = useState('');
  const [output, setOutput] = useState('');
  const [error, setError] = useState<string | null>(null);
  const [isProcessing, setIsProcessing] = useState(false);

  const process = async () => {
    if (!input.trim()) {
      setError('Please enter some code to process');
      return;
    }

    setIsProcessing(true);
    setError(null);

    try {
      const result: ProcessorResult = await processCode(input, processor);
      
      if (result.error) {
        setError(result.error);
        setOutput('');
      } else {
        setOutput(result.code);
      }
    } catch (err) {
      setError(err instanceof Error ? err.message : 'An unexpected error occurred');
      setOutput('');
    } finally {
      setIsProcessing(false);
    }
  };

  return {
    input,
    setInput,
    output,
    error,
    isProcessing,
    process
  };
}