import ScreenLayout from './ScreenLayout'

interface PreparationScreenProps {
  onContinue: () => void
}

export default function PreparationScreen({ onContinue }: PreparationScreenProps) {
  return (
    <ScreenLayout title="Preparation: Ensuring Your Safety and Readiness" onContinue={onContinue} continueText="Continue to Set Intentions">
      <p className="text-lg mb-6">
        Psilocybin therapy begins long before the medicine is administered. Participants undergo thorough psychological and medical screenings. This careful preparation minimizes risks and enhances benefits, ensuring you are mentally and physically prepared for the experience.
      </p>
      
      <div className="bg-blue-50 border-l-4 border-blue-400 p-6 my-6 rounded-r-lg">
        <h3 className="text-xl font-semibold text-blue-800 mb-3">Did you know?</h3>
        <p className="text-blue-700">
          Research demonstrates psilocybin as a promising treatment for depression, anxiety, substance use disorders, and end-of-life distress. However, individuals with conditions like schizophrenia, uncontrolled hypertension, or a family history of psychosis are typically excluded to ensure safety.
        </p>
      </div>
    </ScreenLayout>
  )
} 