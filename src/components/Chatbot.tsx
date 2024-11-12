import React, { useState } from 'react';
import { useStore } from '../store/useStore';
import axios from 'axios';

export function Chatbot() {
  const [input, setInput] = useState('');
  const [response, setResponse] = useState('');
  const [loading, setLoading] = useState(false);
  const selectedPatient = useStore((state) => state.selectedPatient);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    try {
      const apiKey = import.meta.env.VITE_OPENAI_API_KEY;
      if (!apiKey) {
        throw new Error('OpenAI API key is not set in environment variables.');
      }

      const result = await axios.post(
        'https://api.openai.com/v1/chat/completions',
        {
          model: 'gpt-4o-mini',
          messages: [
            { role: 'system', content: 'You are a helpful assistant that answers general questions about dentistry. Please only respond with brief answers, no longer than 3 sentences.' },
            { role: 'user', content: input }
          ],
          temperature: 0.0,
        },
        {
          headers: {
            'Authorization': `Bearer ${apiKey}`,
            'Content-Type': 'application/json',
          },
        }
      );

      if (
        result.data &&
        result.data.choices &&
        result.data.choices.length > 0 &&
        result.data.choices[0].message
      ) {
        setResponse(result.data.choices[0].message.content);
      } else {
        setResponse('No response received from AI.');
      }
    } catch (error: any) {
      if (axios.isAxiosError(error)) {
        const errorMessage = error.response?.data?.error?.message || error.message;
        console.error('Axios error:', errorMessage);
        setResponse(`Error fetching response from AI: ${errorMessage}`);
      } else {
        console.error('Unexpected error:', error);
        setResponse(`Unexpected error: ${error.message}`);
      }
    } finally {
      setLoading(false);
    }
    setInput('');
  };

  return (
    <div className="fixed bottom-4 right-4 w-80 bg-white rounded-lg shadow-xl">
      <div className="p-4 border-b">
        <h3 className="text-lg font-medium">Dental Assistant AI</h3>
      </div>
      <div className="h-64 overflow-y-auto p-4">
        <div className="space-y-4">
          {selectedPatient && (
            <div className="bg-gray-100 p-3 rounded-lg">
              <p className="text-sm">
                Currently viewing: {selectedPatient.name}
                <br />
                Next appointment:{' '}
                {selectedPatient.appointments
                  .filter((apt) => apt.status === 'scheduled')
                  .sort((a, b) => new Date(a.date).getTime() - new Date(b.date).getTime())[0]?.date}
              </p>
            </div>
          )}
          {response && (
            <div className="bg-gray-100 p-3 rounded-lg">
              <p className="text-sm">{response}</p>
            </div>
          )}
          {loading && (
            <div className="bg-gray-100 p-3 rounded-lg">
              <p className="text-sm">Loading...</p>
            </div>
          )}
        </div>
      </div>
      <form onSubmit={handleSubmit} className="p-4 border-t">
        <div className="flex space-x-2">
          <input
            type="text"
            value={input}
            onChange={(e) => setInput(e.target.value)}
            placeholder="Ask a question..."
            className="flex-1 rounded-md border-gray-300 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
            onKeyDown={(e) => {
              if (e.key === 'Enter') {
                handleSubmit(e);
                setInput('');
              }
            }}
          />
          <button
            type="submit"
            className="px-4 py-2 bg-indigo-600 text-white rounded-md hover:bg-indigo-700"
          >
            Send
          </button>
        </div>
      </form>
    </div>
  );
}