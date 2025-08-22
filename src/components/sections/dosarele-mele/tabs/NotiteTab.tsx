import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { ArrowUpDown, Calendar, Edit, FileText, Search, Trash2 } from 'lucide-react'

const notesData = [
  {
    id: 1,
    title: 'Nume notiță care poate fi lung, sau chiar ex...',
    date: '24 iulie 2023',
    time: '10:30',
    hasDeadline: false,
  },
  {
    id: 2,
    title: 'Nume notiță care poate fi lung, sau chiar ex...',
    date: '24 iulie 2023',
    time: '10:30',
    hasDeadline: true,
    deadline: '24 Apr 2025',
  },
  {
    id: 3,
    title: 'Nume notiță care poate fi lung, sau chiar ex...',
    date: '24 iulie 2023',
    time: '10:30',
    hasDeadline: true,
    deadline: '24 Apr 2025',
  },
  {
    id: 4,
    title: 'Nume notiță care poate fi lung, sau chiar ex...',
    date: '24 iulie 2023',
    time: '10:30',
    hasDeadline: true,
    deadline: '24 Apr 2025',
  },
  {
    id: 5,
    title: 'Nume notiță care poate fi lung, sau chiar ex...',
    date: '24 iulie 2023',
    time: '10:30',
    hasDeadline: false,
  },
  {
    id: 6,
    title: 'Nume notiță care poate fi lung, sau chiar ex...',
    date: '24 iulie 2023',
    time: '10:30',
    hasDeadline: true,
    deadline: '24 Apr 2025',
  },
]

export default function NotiteTab() {
  return (
    <div className="space-y-6">
      {/* Notes Header */}
      <div className="flex items-center justify-between gap-4">
        <div className="relative flex-1 max-w-md">
          <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-gray-400" />
          <Input placeholder="Cauta notita" className="pl-10 bg-white border-gray-200" />
        </div>
        <div className="flex items-center gap-3">
          <Button variant="outline" size="sm" className="flex items-center gap-2 bg-transparent">
            <ArrowUpDown className="h-4 w-4" />
            Sorteaza
          </Button>
          <Button size="sm" className="bg-blue-600 hover:bg-blue-700">
            Adauga notita
          </Button>
        </div>
      </div>

      {/* Notes Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {notesData.map((note) => (
          <div
            key={note.id}
            className="bg-white rounded-lg border border-gray-200 p-4 hover:shadow-sm transition-shadow group relative"
          >
            <div className="mb-3">
              <FileText className="h-5 w-5 text-gray-400" />
            </div>

            <h3 className="font-medium text-gray-900 mb-2 line-clamp-2">{note.title}</h3>

            <div className="text-sm text-gray-500 mb-3">
              {note.date} • {note.time}
            </div>

            <div className="flex items-center justify-between text-sm text-gray-600 rounded-md px-3 py-2">
              <div className="flex items-center gap-2">
                <Calendar className="size-4" />
                <span>Termen asociat: {note.deadline}</span>
              </div>
              <div className="flex items-center gap-1">
                <Button variant="outline" size="sm" className="h-8 w-8 p-0 hover:bg-gray-100">
                  <Edit className="size-4 text-gray-500" />
                </Button>
                <Button
                  variant="destructive"
                  size="sm"
                  className="h-8 w-8 p-0 hover:bg-red-50 hover:text-red-600"
                >
                  <Trash2 className="size-4" />
                </Button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}
