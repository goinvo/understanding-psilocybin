import ScreenLayout from './ScreenLayout'

interface SessionScreenProps {
  onContinue: () => void
}

export default function SessionScreen({ onContinue }: SessionScreenProps) {
  return (
    <ScreenLayout title="The Journey Unfolds" onContinue={onContinue} continueText="Explore Inner Insights">
      <p className="text-lg mb-6">
        You begin experiencing perceptual shifts, heightened emotions, and deep introspection. Throughout, trained facilitators are by your side, supporting you through any emotional challenges.
      </p>
      
      <div className="bg-indigo-50 border-l-4 border-indigo-400 p-6 my-6 rounded-r-lg">
        <h3 className="text-xl font-semibold text-indigo-800 mb-3">Insight from Legal Models:</h3>
        <p className="text-indigo-700">
          Oregon and Colorado pioneered state-regulated therapeutic use of psilocybin, emphasizing safe settings, thorough facilitator training, and robust data collection to monitor public safety and treatment effectiveness.
        </p>
      </div>
    </ScreenLayout>
  )
} 