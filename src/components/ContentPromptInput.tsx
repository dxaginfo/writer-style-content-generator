type ContentPromptInputProps = {
  value: string
  onChange: (value: string) => void
  onGenerate: () => void
  isGenerating: boolean
}

export function ContentPromptInput({ value, onChange, onGenerate, isGenerating }: ContentPromptInputProps) {
  return (
    <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow">
      <h2 className="text-xl font-semibold mb-4 text-gray-900 dark:text-white">Enter Content Prompt</h2>
      
      <div className="space-y-4">
        <textarea
          className="w-full h-32 p-2 border border-gray-300 rounded-md focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:text-white"
          placeholder="Describe what you want to create..."
          value={value}
          onChange={(e) => onChange(e.target.value)}
        />
        
        <button
          className="px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 disabled:opacity-50 disabled:cursor-not-allowed"
          onClick={onGenerate}
          disabled={isGenerating || !value.trim()}
        >
          {isGenerating ? 'Generating...' : 'Generate Content'}
        </button>
      </div>
    </div>
  )
}
