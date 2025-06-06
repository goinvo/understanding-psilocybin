import ScreenLayout from './ScreenLayout'

interface ChallengesScreenProps {
  onContinue: () => void
}

export default function ChallengesScreen({ onContinue }: ChallengesScreenProps) {
  return (
    <ScreenLayout title="Facing Difficult Moments" onContinue={onContinue} continueText="Navigate & Continue">
      <p className="text-lg mb-6">
        It is normal to encounter challenging emotions or difficult thoughts during your psilocybin journey. Your facilitators guide you with proven therapeutic techniques, ensuring safety and emotional grounding.
      </p>
      
      <div className="bg-orange-50 border-l-4 border-orange-400 p-6 my-6 rounded-r-lg">
        <h3 className="text-xl font-semibold text-orange-800 mb-3">Important Safety Insight:</h3>
        <p className="text-orange-700">
          Research underscores the necessity of a structured, supervised environment. When unsupervised, adverse reactions such as anxiety, paranoia, or emotional distress significantly increase. Proper therapeutic support dramatically mitigates these risks.
        </p>
      </div>
    </ScreenLayout>
  )
} 