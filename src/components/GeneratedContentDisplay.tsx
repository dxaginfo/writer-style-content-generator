type GeneratedContentDisplayProps = {
  content: string
}

export function GeneratedContentDisplay({ content }: GeneratedContentDisplayProps) {
  if (!content) {
    return null
  }
  
  return (
    <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow">
      <h2 className="text-xl font-semibold mb-4 text-gray-900 dark:text-white">Generated Content</h2>
      
      <div className="p-4 bg-gray-50 dark:bg-gray-700 rounded border border-gray-200 dark:border-gray-600">
        <pre className="whitespace-pre-wrap text-gray-800 dark:text-gray-200 font-sans">
          {content}
        </pre>
      </div>
    </div>
  )
}
