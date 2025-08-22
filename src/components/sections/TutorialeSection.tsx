import { Badge } from '@/components/ui/badge'
import { useAppStore } from '@/stores/app'
import { ArrowLeft, ArrowRight, BadgeCheck, Eye, EyeOff } from 'lucide-react'
import { useState } from 'react'
import Tutorial from '../dashboard/Tutorial/Tutorial'
import { Button } from '../ui/button'
import { RippleButton } from '../ui/shadcn-io/ripple-button'

const tutorials = [
  {
    id: 1,
    title: 'Tutorial numărul 1',
    description: 'Lorem ipsum dolor sit amet consectetur. Cursus tincidunt sapien id cursus.',
    duration: '3 min',
    isCompleted: true,
    youtubeUrl: 'https://youtube.com/watch?v=example1',
  },
  {
    id: 2,
    title: 'Tutorial numărul 2',
    description: 'Lorem ipsum dolor sit amet consectetur. Cursus tincidunt sapien id cursus.',
    duration: '5 min',
    isCompleted: true,
    youtubeUrl: 'https://youtube.com/watch?v=example2',
  },
  {
    id: 3,
    title: 'Tutorial numărul 3',
    description: 'Lorem ipsum dolor sit amet consectetur. Cursus tincidunt sapien id cursus.',
    duration: '1 min',
    isCompleted: false,
    youtubeUrl: 'https://youtube.com/watch?v=example3',
  },
  {
    id: 4,
    title: 'Tutorial numărul 4',
    description: 'Lorem ipsum dolor sit amet consectetur. Cursus tincidunt sapien id cursus.',
    duration: '4 min',
    isCompleted: false,
    youtubeUrl: 'https://youtube.com/watch?v=example4',
  },
  {
    id: 5,
    title: 'Tutorial numărul 5',
    description: 'Lorem ipsum dolor sit amet consectetur. Cursus tincidunt sapien id cursus.',
    duration: '2 min',
    isCompleted: false,
    youtubeUrl: 'https://youtube.com/watch?v=example5',
  },
  {
    id: 6,
    title: 'Tutorial numărul 6',
    description: 'Lorem ipsum dolor sit amet consectetur. Cursus tincidunt sapien id cursus.',
    duration: '6 min',
    isCompleted: false,
    youtubeUrl: 'https://youtube.com/watch?v=example6',
  },
  {
    id: 7,
    title: 'Tutorial numărul 7',
    description: 'Lorem ipsum dolor sit amet consectetur. Cursus tincidunt sapien id cursus.',
    duration: '3 min',
    isCompleted: false,
    youtubeUrl: 'https://youtube.com/watch?v=example7',
  },
  {
    id: 8,
    title: 'Tutorial numărul 8',
    description: 'Lorem ipsum dolor sit amet consectetur. Cursus tincidunt sapien id cursus.',
    duration: '4 min',
    isCompleted: false,
    youtubeUrl: 'https://youtube.com/watch?v=example8',
  },
]

export default function TutorialeSection() {
  const [currentIndex, setCurrentIndex] = useState<number>(0)
  const { tutorialsCollapsed, setTutorialsCollapsed } = useAppStore()

  const completedCount = tutorials.filter((t) => t.isCompleted).length

  const canGoLeft = currentIndex > 0
  const canGoRight = currentIndex < tutorials.length - 3

  const visibleTutorials = tutorials.slice(currentIndex, currentIndex + 3)

  const handlePrevious = () => {
    if (canGoLeft) {
      setCurrentIndex(currentIndex - 1)
    }
  }

  const handleNext = () => {
    if (canGoRight) {
      setCurrentIndex(currentIndex + 1)
    }
  }

  const toggleTutorials = () => {
    setTutorialsCollapsed(!tutorialsCollapsed)
  }

  return (
    <div className="space-y-4">
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-2">
          <h2 className="text-xl font-semibold">Tutoriale</h2>
          <Badge variant="secondary" className="text-xs shadow-sm">
            <BadgeCheck />
            {completedCount}/{tutorials.length}
          </Badge>
        </div>

        {/* Navigation arrows */}
        <div className="flex items-center gap-1">
          <RippleButton
            variant="ghost"
            size="sm"
            className="text-muted-foreground hover:text-foreground"
            onClick={toggleTutorials}
          >
            {tutorialsCollapsed ? (
              <>
                <Eye className="size-4 mr-1" />
                Afișează tutoriale
              </>
            ) : (
              <>
                <EyeOff className="size-4 mr-1" />
                Ascunde tutoriale
              </>
            )}
          </RippleButton>
          {!tutorialsCollapsed && (
            <div className="flex items-center gap-1">
              <Button
                variant="outline"
                size="sm"
                onClick={handlePrevious}
                disabled={!canGoLeft}
                className="size-8 p-0"
              >
                <ArrowLeft className="size-4" />
              </Button>
              <Button
                variant="outline"
                size="sm"
                onClick={handleNext}
                disabled={!canGoRight}
                className="size-8 p-0"
              >
                <ArrowRight className="size-4" />
              </Button>
            </div>
          )}
        </div>
      </div>

      {!tutorialsCollapsed && (
        <>
          <div className="md:hidden animate-in slide-in-from-top-2 duration-300">
            <div className="flex gap-4 overflow-x-auto scrollbar-hide pb-2">
              {visibleTutorials.map((tutorial) => (
                <div key={tutorial.id} className="flex-none w-72">
                  <Tutorial key={tutorial.id} {...tutorial} />
                </div>
              ))}
            </div>
          </div>

          <div className="hidden md:grid grid-cols-3 gap-6 animate-in slide-in-from-top-2 duration-300">
            {visibleTutorials.map((tutorial) => (
              <Tutorial key={tutorial.id} {...tutorial} />
            ))}
          </div>
        </>
      )}
    </div>
  )
}
