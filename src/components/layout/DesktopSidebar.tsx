import { cn } from '@/lib/utils'
import { Calendar, FileText, Home, Search } from 'lucide-react'
import { Link, useLocation } from 'react-router-dom'
import UserProfile from '../UserProfile/UserProfile'

export default function DesktopSidebar() {
  const location = useLocation()

  return (
    <div className="hidden md:flex flex-col w-64 bg-white border-2 border-border rounded-2xl m-2 p-4">
      <div className="flex items-center gap-2 mb-8">
        <img src="/assets/logos/caselib_logo_white.svg" alt="caselib logo" />
      </div>

      <nav className="space-y-2">
        {[
          { id: 'acasa', label: 'Acasa', icon: 'home', link: '/dashboard' },
          { id: 'dosarele-mele', label: 'Dosarele mele', icon: 'folder', link: '/dosarele-mele' },
          {
            id: 'termenele-mele',
            label: 'Termene',
            icon: 'calendar',
            link: '/termene',
          },
          { id: 'cautare', label: 'Cautare dosare', icon: 'search', link: '/cautare' },
        ].map((item) => {
          const isActive = location.pathname.startsWith(item.link)

          return (
            <Link
              key={item.id}
              to={item.link}
              className={cn(
                'w-full flex items-center gap-3 px-3 py-2 rounded-lg text-left transition-colors cursor-pointer font-semibold',
                isActive
                  ? 'bg-blue-50 text-blue-700'
                  : 'text-muted-foreground hover:text-foreground hover:bg-accent',
              )}
            >
              <TabIcon icon={item.icon} />
              <span className="text-sm font-medium">{item.label}</span>
            </Link>
          )
        })}
      </nav>

      <div className="mt-auto">
        <UserProfile />
      </div>
    </div>
  )
}

function TabIcon({ icon }: { icon: string }) {
  switch (icon) {
    case 'home':
      return <Home className="size-5" />
    case 'folder':
      return <FileText className="size-5" />
    case 'calendar':
      return <Calendar className="size-5" />
    case 'search':
      return <Search className="size-5" />
    default:
      return null
  }
}
