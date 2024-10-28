export function parse2json(inputString: string): Record<string, any> | null {
  // Remove the markdown code block delimiters if present
  const cleanedString = inputString.replace(/^```json\n|\n```$/g, '');
  
  // Parse the string as JSON
  try {
    const jsonObject = JSON.parse(cleanedString);
    return jsonObject as Record<string, any>;
  } catch (error) {
    console.error("Error parsing JSON:", error);
    return null;
  }
}
