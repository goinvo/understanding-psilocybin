import ScreenLayout from './ScreenLayout'

interface AdministrationScreenProps {
  onContinue: () => void
}

export default function AdministrationScreen({ onContinue }: AdministrationScreenProps) {
  return (
    <ScreenLayout title="Your Psilocybin Journey Begins" onContinue={onContinue} continueText="Relax & Continue">
      <p className="text-lg mb-6">
        You are now comfortably settled in a calming, supportive environment. A trained facilitator administers a carefully measured dose of psilocybin.
      </p>
      
      <div className="bg-purple-50 border-l-4 border-purple-400 p-6 my-6 rounded-r-lg">
        <h3 className="text-xl font-semibold text-purple-800 mb-3">Educational Fact:</h3>
        <p className="text-purple-700">
          A meta-analysis suggests optimal psilocybin dosage for therapeutic effects ranges between 30-35 mg per 70 kg body weight. Proper dosing greatly influences therapeutic outcomes.
        </p>
      </div>
    </ScreenLayout>
  )
} 