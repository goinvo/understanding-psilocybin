import ScreenLayout from './ScreenLayout'

interface IntegrationScreenProps {
  onContinue: () => void
}

export default function IntegrationScreen({ onContinue }: IntegrationScreenProps) {
  return (
    <ScreenLayout title="Reflecting and Integrating Insights" onContinue={onContinue} continueText="Begin Integration">
      <p className="text-lg mb-6">
        As your session concludes, you slowly return to baseline consciousness. The integration process begins, involving discussions with your facilitator to interpret and integrate your insights.
      </p>
      
      <div className="bg-teal-50 border-l-4 border-teal-400 p-6 my-6 rounded-r-lg">
        <h3 className="text-xl font-semibold text-teal-800 mb-3">Did You Know?</h3>
        <p className="text-teal-700">
          Integration—processing insights post-session—is essential to maximize long-term therapeutic benefits. Clinical models consistently highlight the value of structured post-session counseling to sustain the psychological gains achieved during the psilocybin journey.
        </p>
      </div>
    </ScreenLayout>
  )
} 