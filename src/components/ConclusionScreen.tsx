import ScreenLayout from './ScreenLayout'

interface ConclusionScreenProps {
  selectedIntention: string
}

export default function ConclusionScreen({ selectedIntention }: ConclusionScreenProps) {
  return (
    <ScreenLayout title="Your Psilocybin Experience Concludes" showContinue={false}>
      <p className="text-lg mb-6">
        You have successfully completed your therapeutic psilocybin journey. We hope this interactive experience has deepened your understanding of psilocybin therapy, its scientific basis, and the legal landscape governing its use.
      </p>
      
      {selectedIntention && (
        <div className="bg-gradient-to-r from-blue-50 to-indigo-50 border border-blue-200 p-6 my-6 rounded-lg">
          <h3 className="text-lg font-semibold text-blue-800 mb-2">Your Journey Focus:</h3>
          <p className="text-blue-700">
            Today, you focused on <strong>{selectedIntention}</strong>. The insights and perspectives gained through this experience can serve as a foundation for continued growth and healing.
          </p>
        </div>
      )}
      
      <p className="text-lg mb-6">
        Psilocybin therapy, when responsibly regulated and administered, holds remarkable promise for mental health treatment and personal growth. Ongoing education, research, and thoughtful legalization will be key to safely unlocking its full potential.
      </p>
      
      <div className="text-center mt-8">
        <p className="text-xl font-semibold text-gray-800 mb-4">
          Thank you for exploring this transformative therapy experience with us.
        </p>
        <div className="bg-gray-100 p-4 rounded-lg">
          <p className="text-gray-600 text-sm">
            End of Prototype
          </p>
        </div>
      </div>
    </ScreenLayout>
  )
} 