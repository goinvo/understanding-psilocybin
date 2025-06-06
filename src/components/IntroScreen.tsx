import ScreenLayout from './ScreenLayout'

interface IntroScreenProps {
  onContinue: () => void
}

export default function IntroScreen({ onContinue }: IntroScreenProps) {
  return (
    <ScreenLayout title="Welcome to Your Psilocybin Therapy Experience" onContinue={onContinue}>
      <p className="text-lg mb-6">
        Today, you'll be guided through a therapeutic journey using psilocybin. This experience is fully legal and supervised by trained professionals, aligned with current medical and legislative standards. Along the way, you'll learn about psilocybin-assisted therapy and the important considerations around its legalization.
      </p>
    </ScreenLayout>
  )
} 