export function getSelectedModel(): string {
  if (typeof window !== 'undefined') {
    const storedModel = localStorage.getItem('selectedModel');
    return storedModel || 'llama3:8b';
  } else {
    // Default model
    return 'llama3:8b';
  }
}