import ScreenLayout from './ScreenLayout'

interface ResearchScreenProps {
  onContinue: () => void
}

export default function ResearchScreen({ onContinue }: ResearchScreenProps) {
  return (
    <ScreenLayout title="Areas for Continued Research" onContinue={onContinue} continueText="Explore Ongoing Research">
      <p className="text-lg mb-6">
        While existing research is promising, ongoing studies aim to address gaps, including:
      </p>
      
      <ul className="space-y-3 my-6 text-gray-700">
        <li className="flex items-start">
          <span className="text-blue-500 mr-3 mt-1">•</span>
          Optimal dosing across diverse populations.
        </li>
        <li className="flex items-start">
          <span className="text-blue-500 mr-3 mt-1">•</span>
          Long-term psychological outcomes.
        </li>
        <li className="flex items-start">
          <span className="text-blue-500 mr-3 mt-1">•</span>
          Broader inclusion of diverse demographic groups to ensure generalizable benefits.
        </li>
      </ul>
      
      <p className="text-gray-700">
        State legislatures, universities, and research institutions continue investigating these questions to refine therapeutic models further.
      </p>
    </ScreenLayout>
  )
} 