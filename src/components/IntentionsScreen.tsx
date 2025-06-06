import { useState } from 'react'
import ScreenLayout from './ScreenLayout'

interface IntentionsScreenProps {
  onContinue: () => void
  onSetIntention: (intention: string) => void
}

const intentions = [
  'Anxiety Relief',
  'Depression Management', 
  'Addiction Treatment',
  'Spiritual Growth'
]

export default function IntentionsScreen({ onContinue, onSetIntention }: IntentionsScreenProps) {
  const [selectedIntention, setSelectedIntention] = useState<string>('')

  const handleIntentionSelect = (intention: string) => {
    setSelectedIntention(intention)
    onSetIntention(intention)
  }

  const handleContinue = () => {
    if (selectedIntention) {
      onContinue()
    }
  }

  return (
    <ScreenLayout title="Clarifying Your Therapeutic Goals" onContinue={selectedIntention ? handleContinue : undefined} showContinue={!!selectedIntention}>
      <p className="text-lg mb-6">
        Setting clear intentions helps focus your psilocybin experience. Today, you may aim to ease anxiety, reduce symptoms of depression, overcome addictions, or find spiritual meaning.
      </p>
      
      <div className="bg-green-50 border-l-4 border-green-400 p-6 my-6 rounded-r-lg">
        <h3 className="text-xl font-semibold text-green-800 mb-3">Insight:</h3>
        <p className="text-green-700">
          Clinical evidence shows that psilocybin significantly reduces depression severity, anxiety, and addiction cravings in controlled therapeutic environments.
        </p>
      </div>

      <div className="my-8">
        <h3 className="text-xl font-semibold mb-4">Set Your Intention:</h3>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {intentions.map((intention) => (
            <button
              key={intention}
              onClick={() => handleIntentionSelect(intention)}
              className={`p-4 rounded-lg border-2 transition-all ${
                selectedIntention === intention
                  ? 'border-blue-500 bg-blue-50 text-blue-800 font-semibold'
                  : 'border-gray-200 hover:border-blue-300 hover:bg-blue-25'
              }`}
            >
              {intention}
            </button>
          ))}
        </div>
      </div>
    </ScreenLayout>
  )
} 