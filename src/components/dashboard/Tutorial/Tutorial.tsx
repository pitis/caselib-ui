import { Badge } from '@/components/ui/badge'
import { Card } from '@/components/ui/card'
import { Check, ExternalLink } from 'lucide-react'

interface TutorialCardProps {
  id: number
  title: string
  description: string
  duration: string
  isCompleted: boolean
  youtubeUrl: string
  thumbnail?: string
}

export default function Tutorial({
  title,
  description,
  duration,
  isCompleted,
  youtubeUrl,
  thumbnail,
}: TutorialCardProps) {
  const handleClick = () => {
    window.open(youtubeUrl, '_blank')
  }

  return (
    <div className="space-y-3">
      {/* Thumbnail */}
      <Card
        className={`aspect-video rounded-lg relative overflow-hidden cursor-pointer transition-all hover:shadow-md ${
          isCompleted ? 'bg-gray-400' : 'bg-gray-100'
        }`}
        onClick={handleClick}
      >
        {/* Background gradient for completed tutorials */}
        {isCompleted && (
          <div className="absolute inset-0 bg-gradient-to-br from-gray-400 to-gray-500" />
        )}

        {/* Thumbnail image or placeholder */}
        <div className="absolute inset-0 flex items-center justify-center">
          {thumbnail ? (
            <img
              src={thumbnail || '/placeholder.svg'}
              alt={title}
              className="w-full h-full object-cover"
            />
          ) : (
            <div className="flex items-center justify-center text-gray-600">
              {/* <Check className="size-6 text-green-600" /> */}
            </div>
          )}
        </div>

        {/* Completion checkmark */}
        {isCompleted && (
          <div className="absolute inset-0 flex items-center justify-center z-10">
            <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center">
              <Check className="w-6 h-6 text-green-600" />
            </div>
          </div>
        )}

        {/* Duration badge for uncompleted tutorials */}
        {!isCompleted && (
          <Badge
            variant="secondary"
            className="absolute top-2 right-2 bg-white/90 text-gray-700 text-xs"
          >
            <div className="bg-green-500 rounded-4xl size-1.5" />
            {duration}
          </Badge>
        )}
      </Card>

      {/* Content below thumbnail */}
      <div
        className="space-y-2 cursor-pointer hover:text-blue-600 transition-colors"
        onClick={handleClick}
      >
        <div className="flex items-start justify-between">
          <h3 className="font-medium text-gray-900 hover:text-blue-600 transition-colors">
            {title}
          </h3>
          <ExternalLink className="size-5 text-gray-400 flex-shrink-0 ml-2" />
        </div>
        <p className="text-sm text-gray-600">{description}</p>
      </div>
    </div>
  )
}
