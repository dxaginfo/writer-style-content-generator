import { useState } from 'react'
import { WritingStyleSelector } from './components/WritingStyleSelector'
import { ContentPromptInput } from './components/ContentPromptInput'
import { GeneratedContentDisplay } from './components/GeneratedContentDisplay'
import { HistoryList } from './components/HistoryList'
import { ExportOptions } from './components/ExportOptions'
import { Header } from './components/Header'

export type WritingStyle = {
  id: string
  name: string
  description: string
}

export type ContentItem = {
  id: string
  prompt: string
  content: string
  style: WritingStyle
  timestamp: Date
}

const WRITING_STYLES: WritingStyle[] = [
  {
    id: 'tim-ferriss',
    name: 'Super Writer GPT (Tim Ferriss Style)',
    description: 'Clear, direct writing with actionable insights and step-by-step breakdowns.'
  },
  {
    id: 'tim-ferriss-james-clear',
    name: 'Super Writer GPT (Tim Ferriss Style) + James Clear (20%)',
    description: 'Direct writing with actionable insights, plus Clear's focus on habit formation and marginal gains.'
  },
  {
    id: 'shane-parrish',
    name: 'Insight Writer GPT (Shane Parrish Style)',
    description: 'Mental models and frameworks for better decision making and clearer thinking.'
  },
  {
    id: 'mark-manson',
    name: 'Brutally Honest GPT (Mark Manson Style)',
    description: 'No-nonsense, direct approach to life's problems with counter-intuitive perspectives.'
  },
  {
    id: 'david-perell',
    name: 'Idea Curator GPT (David Perell Style)',
    description: 'Connecting disparate ideas and exploring the intersection of topics across domains.'
  }
]

function App() {
  const [selectedStyle, setSelectedStyle] = useState<WritingStyle>(WRITING_STYLES[0])
  const [prompt, setPrompt] = useState('')
  const [generatedContent, setGeneratedContent] = useState('')
  const [history, setHistory] = useState<ContentItem[]>([])
  const [isGenerating, setIsGenerating] = useState(false)

  const handleStyleChange = (styleId: string) => {
    const style = WRITING_STYLES.find(s => s.id === styleId)
    if (style) {
      setSelectedStyle(style)
    }
  }

  const handlePromptChange = (value: string) => {
    setPrompt(value)
  }

  const generateContent = () => {
    if (!prompt.trim()) return
    
    setIsGenerating(true)
    
    // This would normally call an API, but for this demo we'll simulate it
    setTimeout(() => {
      const newContent = `This is generated content for "${prompt}" in the style of ${selectedStyle.name}.\n\nLorem ipsum dolor sit amet, consectetur adipiscing elit. Sed non risus. Suspendisse lectus tortor, dignissim sit amet, adipiscing nec, ultricies sed, dolor. Cras elementum ultrices diam. Maecenas ligula massa, varius a, semper congue, euismod non, mi.`
      
      setGeneratedContent(newContent)
      
      // Add to history
      const newHistoryItem: ContentItem = {
        id: Date.now().toString(),
        prompt,
        content: newContent,
        style: selectedStyle,
        timestamp: new Date()
      }
      
      setHistory([newHistoryItem, ...history])
      setIsGenerating(false)
    }, 1500)
  }

  const loadFromHistory = (item: ContentItem) => {
    setPrompt(item.prompt)
    setGeneratedContent(item.content)
    const style = WRITING_STYLES.find(s => s.id === item.style.id)
    if (style) {
      setSelectedStyle(style)
    }
  }

  return (
    <div className="min-h-screen bg-gray-100 dark:bg-gray-900">
      <Header />
      
      <main className="container mx-auto px-4 py-8">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          <div className="lg:col-span-2 space-y-6">
            <WritingStyleSelector 
              styles={WRITING_STYLES} 
              selectedStyle={selectedStyle.id} 
              onStyleChange={handleStyleChange} 
            />
            
            <ContentPromptInput 
              value={prompt} 
              onChange={handlePromptChange}
              onGenerate={generateContent}
              isGenerating={isGenerating}
            />
            
            <GeneratedContentDisplay content={generatedContent} />
            
            <ExportOptions content={generatedContent} disabled={!generatedContent} />
          </div>
          
          <div className="lg:col-span-1">
            <HistoryList items={history} onItemClick={loadFromHistory} />
          </div>
        </div>
      </main>
    </div>
  )
}

export default App
