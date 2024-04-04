export async function fetchAutocompleteSuggestions() {
    const API_URL = 'http://localhost:3001';
    const response = await fetch(`${API_URL}/suggestions`);
    const data = await response.json();
    return data.suggestions;
}