import ScreenLayout from './ScreenLayout'

interface EquityScreenProps {
  onContinue: () => void
}

export default function EquityScreen({ onContinue }: EquityScreenProps) {
  return (
    <ScreenLayout title="Ensuring Equitable Access" onContinue={onContinue} continueText="Understand Equity Efforts">
      <p className="text-lg mb-6">
        Equity in psychedelic therapy is essential. Current models strive to avoid replicating cannabis industry pitfalls—like high entry costs limiting accessibility. Effective policies ensure diverse populations, including veterans, first responders, and historically underserved communities, gain equitable access to psilocybin therapy.
      </p>
    </ScreenLayout>
  )
} 