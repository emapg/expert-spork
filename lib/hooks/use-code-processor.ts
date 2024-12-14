"use client";

import { useState } from 'react';

interface UseCodeProcessorProps {
  processor: (code: string) => Promise<string> | string;
}

export function useCodeProcessor({ processor }: UseCodeProcessorProps) {
  const [input, setInput] = useState('');
  const [output, setOutput] = useState('');
  const [error, setError] = useState<string | null>(null);
  const [isProcessing, setIsProcessing] = useState(false);

  const processCode = async () => {
    setError(null);
    setIsProcessing(true);
    try {
      const result = await processor(input);
      setOutput(result);
    } catch (err) {
      setError(err instanceof Error ? err.message : 'An error occurred');
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
    processCode
  };
}