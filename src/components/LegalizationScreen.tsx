import ScreenLayout from './ScreenLayout'

interface LegalizationScreenProps {
  onContinue: () => void
}

export default function LegalizationScreen({ onContinue }: LegalizationScreenProps) {
  return (
    <ScreenLayout title="Understanding Legal Pathways" onContinue={onContinue} continueText="Learn More about Legal Models">
      <p className="text-lg mb-6">
        Your session today represents a model of legal access to psilocybin. Legal pathways include medical, religious, and wellness frameworks, each governed by distinct regulations:
      </p>
      
      <div className="space-y-4 my-6">
        <div className="bg-blue-50 border border-blue-200 p-4 rounded-lg">
          <h3 className="text-lg font-semibold text-blue-800 mb-2">Medical:</h3>
          <p className="text-blue-700">
            Administered within FDA-regulated environments, typically for diagnosed mental health conditions.
          </p>
        </div>
        
        <div className="bg-green-50 border border-green-200 p-4 rounded-lg">
          <h3 className="text-lg font-semibold text-green-800 mb-2">Religious:</h3>
          <p className="text-green-700">
            Sacramental use in specific, federally-recognized spiritual groups.
          </p>
        </div>
        
        <div className="bg-purple-50 border border-purple-200 p-4 rounded-lg">
          <h3 className="text-lg font-semibold text-purple-800 mb-2">Wellness:</h3>
          <p className="text-purple-700">
            State-regulated frameworks (e.g., Oregon's Measure 109) offering supervised experiences without requiring a medical diagnosis.
          </p>
        </div>
      </div>
      
      <p className="text-gray-700">
        Understanding these frameworks helps reduce legal risks and enhances safe, informed use.
      </p>
    </ScreenLayout>
  )
} 