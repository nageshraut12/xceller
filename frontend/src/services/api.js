const API_BASE = import.meta.env.VITE_API_URL || '/api';

export async function submitContactForm(payload) {
  const response = await fetch(`${API_BASE}/contact`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(payload)
  });

  const data = await response.json();

  if (!response.ok) {
    throw new Error(data.message || 'Unable to submit the form right now.');
  }

  return data;
}
