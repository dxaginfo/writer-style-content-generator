import { WritingStyle } from '../App'

type WritingStyleSelectorProps = {
  styles: WritingStyle[]
  selectedStyle: string
  onStyleChange: (styleId: string) => void
}

export function WritingStyleSelector({ styles, selectedStyle, onStyleChange }: WritingStyleSelectorProps) {
  return (
    <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow">
      <h2 className="text-xl font-semibold mb-4 text-gray-900 dark:text-white">Select Writing Style</h2>
      
      <div className="space-y-4">
        {styles.map((style) => (
          <div key={style.id} className="flex items-start">
            <div className="flex items-center h-5">
              <input
                id={`style-${style.id}`}
                type="radio"
                checked={selectedStyle === style.id}
                onChange={() => onStyleChange(style.id)}
                className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 dark:bg-gray-700 dark:border-gray-600"
              />
            </div>
            <div className="ml-3 text-sm">
              <label htmlFor={`style-${style.id}`} className="font-medium text-gray-900 dark:text-white">
                {style.name}
              </label>
              <p className="text-gray-500 dark:text-gray-400">{style.description}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}
