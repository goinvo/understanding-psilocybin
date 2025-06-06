'use client'

import { useState } from 'react'
import IntroScreen from '@/components/IntroScreen'
import PreparationScreen from '@/components/PreparationScreen'
import IntentionsScreen from '@/components/IntentionsScreen'
import AdministrationScreen from '@/components/AdministrationScreen'
import SessionScreen from '@/components/SessionScreen'
import ChallengesScreen from '@/components/ChallengesScreen'
import IntegrationScreen from '@/components/IntegrationScreen'
import LegalizationScreen from '@/components/LegalizationScreen'
import EquityScreen from '@/components/EquityScreen'
import ResearchScreen from '@/components/ResearchScreen'
import ConclusionScreen from '@/components/ConclusionScreen'

const screens = [
  'intro',
  'preparation', 
  'intentions',
  'administration',
  'session',
  'challenges',
  'integration',
  'legalization',
  'equity',
  'research',
  'conclusion'
] as const

type Screen = typeof screens[number]

export default function Home() {
  const [currentScreen, setCurrentScreen] = useState<Screen>('intro')
  const [selectedIntention, setSelectedIntention] = useState<string>('')

  const nextScreen = () => {
    const currentIndex = screens.indexOf(currentScreen)
    if (currentIndex < screens.length - 1) {
      setCurrentScreen(screens[currentIndex + 1])
    }
  }

  const renderScreen = () => {
    switch (currentScreen) {
      case 'intro':
        return <IntroScreen onContinue={nextScreen} />
      case 'preparation':
        return <PreparationScreen onContinue={nextScreen} />
      case 'intentions':
        return <IntentionsScreen onContinue={nextScreen} onSetIntention={setSelectedIntention} />
      case 'administration':
        return <AdministrationScreen onContinue={nextScreen} />
      case 'session':
        return <SessionScreen onContinue={nextScreen} />
      case 'challenges':
        return <ChallengesScreen onContinue={nextScreen} />
      case 'integration':
        return <IntegrationScreen onContinue={nextScreen} />
      case 'legalization':
        return <LegalizationScreen onContinue={nextScreen} />
      case 'equity':
        return <EquityScreen onContinue={nextScreen} />
      case 'research':
        return <ResearchScreen onContinue={nextScreen} />
      case 'conclusion':
        return <ConclusionScreen selectedIntention={selectedIntention} />
      default:
        return <IntroScreen onContinue={nextScreen} />
    }
  }

  return (
    <main className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100 flex items-center justify-center p-4">
      <div className="max-w-4xl w-full">
        {renderScreen()}
      </div>
    </main>
  )
} 