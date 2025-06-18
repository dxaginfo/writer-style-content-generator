type ExportOptionsProps = {
  content: string
  disabled: boolean
}

export function ExportOptions({ content, disabled }: ExportOptionsProps) {
  const handleCopyToClipboard = () => {
    navigator.clipboard.writeText(content)
  }
  
  const handleDownloadAsText = () => {
    const blob = new Blob([content], { type: 'text/plain' })
    const url = URL.createObjectURL(blob)
    const a = document.createElement('a')
    a.href = url
    a.download = `generated-content-${new Date().toISOString().slice(0, 10)}.txt`
    document.body.appendChild(a)
    a.click()
    document.body.removeChild(a)
    URL.revokeObjectURL(url)
  }
  
  return (
    <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow">
      <h2 className="text-xl font-semibold mb-4 text-gray-900 dark:text-white">Export Options</h2>
      
      <div className="flex flex-wrap gap-4">
        <button
          className="px-4 py-2 bg-gray-200 text-gray-800 rounded-md hover:bg-gray-300 focus:outline-none focus:ring-2 focus:ring-gray-300 focus:ring-offset-2 disabled:opacity-50 disabled:cursor-not-allowed dark:bg-gray-700 dark:text-gray-200 dark:hover:bg-gray-600"
          onClick={handleCopyToClipboard}
          disabled={disabled}
        >
          Copy to Clipboard
        </button>
        
        <button
          className="px-4 py-2 bg-gray-200 text-gray-800 rounded-md hover:bg-gray-300 focus:outline-none focus:ring-2 focus:ring-gray-300 focus:ring-offset-2 disabled:opacity-50 disabled:cursor-not-allowed dark:bg-gray-700 dark:text-gray-200 dark:hover:bg-gray-600"
          onClick={handleDownloadAsText}
          disabled={disabled}
        >
          Download as Text
        </button>
      </div>
    </div>
  )
}
