export function applyNbsp(text: string): string {
  return text.replace(/\b(w|z|i|o|u|a|do|na|że|ale|oraz|czy|od|pod)\s+(?=\S)/gi, '$1\u00A0')
}
