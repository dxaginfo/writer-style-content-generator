import { ContentItem } from '../App'

type HistoryListProps = {
  items: ContentItem[]
  onItemClick: (item: ContentItem) => void
}

export function HistoryList({ items, onItemClick }: HistoryListProps) {
  if (items.length === 0) {
    return (
      <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow">
        <h2 className="text-xl font-semibold mb-4 text-gray-900 dark:text-white">History</h2>
        <p className="text-gray-500 dark:text-gray-400">No history yet. Generate some content to see it here.</p>
      </div>
    )
  }
  
  return (
    <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow">
      <h2 className="text-xl font-semibold mb-4 text-gray-900 dark:text-white">History</h2>
      
      <div className="space-y-4">
        {items.map((item) => (
          <div 
            key={item.id} 
            className="p-4 border border-gray-200 rounded-md hover:bg-gray-50 cursor-pointer dark:border-gray-700 dark:hover:bg-gray-700"
            onClick={() => onItemClick(item)}
          >
            <h3 className="font-medium text-gray-900 dark:text-white truncate">{item.prompt}</h3>
            <p className="text-sm text-gray-500 dark:text-gray-400 mt-1">{item.style.name}</p>
            <p className="text-xs text-gray-400 dark:text-gray-500 mt-1">
              {new Date(item.timestamp).toLocaleString()}
            </p>
          </div>
        ))}
      </div>
    </div>
  )
}
