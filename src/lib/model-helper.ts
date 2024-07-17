export function getSelectedModel(): string {
  if (typeof window !== 'undefined') {
    const storedModel = localStorage.getItem('selectedModel');
    return storedModel || 'phi3:mini-128k';
  } else {
    // Default model
    return 'phi3:mini-128k';
  }
}