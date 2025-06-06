interface ScreenLayoutProps {
  title: string
  children: React.ReactNode
  onContinue?: () => void
  continueText?: string
  showContinue?: boolean
}

export default function ScreenLayout({ 
  title, 
  children, 
  onContinue, 
  continueText = "Continue", 
  showContinue = true 
}: ScreenLayoutProps) {
  return (
    <div className="bg-white rounded-2xl shadow-2xl p-8 md:p-12 max-w-4xl mx-auto">
      <div className="text-center mb-8">
        <h1 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">
          {title}
        </h1>
      </div>
      
      <div className="prose prose-lg max-w-none text-gray-700 leading-relaxed">
        {children}
      </div>
      
      {showContinue && onContinue && (
        <div className="text-center mt-8">
          <button
            onClick={onContinue}
            className="bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700 text-white font-semibold py-3 px-8 rounded-lg shadow-lg transform transition hover:scale-105 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50"
          >
            {continueText}
          </button>
        </div>
      )}
    </div>
  )
} 