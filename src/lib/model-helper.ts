export function getSelectedModel(): string {
  if (typeof window !== 'undefined') {
    const storedModel = localStorage.getItem('selectedModel');
    return storedModel || '';
  } else {
    // Default model
    return '';
  }
}