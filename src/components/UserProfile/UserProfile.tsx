import {
  Bell,
  Calendar,
  Cookie,
  Crown,
  Ellipsis,
  ListChecks,
  LogOut,
  ShieldCheck,
  User,
  Users,
} from 'lucide-react'
import { useState } from 'react'
import { RippleButton } from '../ui/shadcn-io/ripple-button'

export default function UserProfile() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  return (
    <div className="relative">
      <div className="flex items-center gap-3 p-3 rounded-lg border border-border bg-card/50 hover:bg-card transition-colors">
        <div className="relative">
          <div className="w-10 h-10 rounded-full bg-muted flex items-center justify-center text-sm font-semibold">
            OM
          </div>
          <div className="absolute -bottom-0.5 -right-0.5 w-3 h-3 bg-green-500 rounded-full border-2 border-background"></div>
        </div>

        <div className="flex-1 min-w-0">
          <p className="text-sm font-medium text-foreground truncate">Olivia Maria</p>
          <p className="text-xs text-muted-foreground truncate">olivia@caselib.ro</p>
        </div>

        <RippleButton
          variant="outline"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          className="p-1 rounded-md cursor-pointer hover:bg-accent transition-colors"
        >
          <Ellipsis />
        </RippleButton>
      </div>

      {isMenuOpen && (
        <>
          <div className="fixed inset-0 z-10" onClick={() => setIsMenuOpen(false)} />
          <div className="absolute bottom-full left-0 right-0 mb-2 bg-popover border border-border rounded-lg shadow-lg z-20 px-3 py-4 min-w-[280px]">
            {/* Header */}
            <h3 className="text-sm font-medium text-muted-foreground mb-2">Setari</h3>

            {/* Main Settings Section */}
            <div className="space-y-1 mb-4">
              <button className="w-full px-1 py-2 text-left text-sm hover:bg-accent/50 transition-colors flex items-center gap-3 rounded-md cursor-pointer">
                <User className="w-4 h-4 text-muted-foreground" />
                <span className="text-foreground">Profil</span>
              </button>

              <button className="w-full px-1 py-2 text-left text-sm hover:bg-accent/50 transition-colors flex items-center gap-3 rounded-md cursor-pointer">
                <Users className="w-4 h-4 text-muted-foreground" />
                <span className="text-foreground flex-1">Subscriptie</span>
                <span className="inline-flex items-center gap-1 px-2 py-1 rounded-full bg-blue-100 text-blue-700 text-xs font-medium">
                  <Crown className="w-3 h-3" />
                  Premium
                </span>
              </button>

              <button className="w-full px-1 py-2 text-left text-sm hover:bg-accent/50 transition-colors flex items-center gap-3 rounded-md cursor-pointer">
                <Bell className="w-4 h-4 text-muted-foreground" />
                <span className="text-foreground">Notificari</span>
              </button>

              <button className="w-full px-1 py-2 text-left text-sm hover:bg-accent/50 transition-colors flex items-center gap-3 rounded-md cursor-pointer">
                <Calendar className="w-4 h-4 text-muted-foreground" />
                <span className="text-foreground">Sync calendar termene</span>
              </button>

              {/* Highlighted notification permission */}
              {/* <div className="p-3 bg-accent/30 rounded-md cursor-pointer border border-border/50"> */}
              <RippleButton
                variant="outline"
                className="w-full text-left text-sm flex items-center gap-3"
              >
                <Bell className="w-4 h-4 text-muted-foreground" />
                <span className="text-foreground">Permite notificări</span>
              </RippleButton>
              {/* </div> */}
            </div>

            {/* Useful Links Section */}
            <div className="border-t border-border pt-4">
              <h4 className="text-xs font-medium text-muted-foreground mb-3">Link-uri utile</h4>

              <div className="space-y-1 mb-4">
                <button className="w-full px-1 py-2 text-left text-sm hover:bg-accent/50 transition-colors flex items-center gap-3 rounded-md cursor-pointer">
                  <ShieldCheck className="w-4 h-4 text-muted-foreground" />
                  <span className="text-foreground">Politica de confidentialitate</span>
                </button>

                <button className="w-full px-1 py-2 text-left text-sm hover:bg-accent/50 transition-colors flex items-center gap-3 rounded-md cursor-pointer">
                  <ListChecks className="w-4 h-4 text-muted-foreground" />
                  <span className="text-foreground">Termeni si conditii</span>
                </button>

                <button className="w-full px-1 py-2 text-left text-sm hover:bg-accent/50 transition-colors flex items-center gap-3 rounded-md cursor-pointer">
                  <Cookie className="w-4 h-4 text-muted-foreground" />
                  <span className="text-foreground">Politica de cookies</span>
                </button>
              </div>
            </div>

            {/* Logout */}
            <div className="border-t border-border pt-4">
              <button className="w-full px-1 py-2 text-left text-sm hover:bg-accent/50 transition-colors flex items-center gap-3 rounded-md cursor-pointer text-red-600 hover:text-red-700">
                <LogOut className="w-4 h-4" />
                <span>Logout</span>
              </button>
            </div>
          </div>
        </>
      )}
    </div>
  )
}
