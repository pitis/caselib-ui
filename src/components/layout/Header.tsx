import { IonHeader, IonToolbar } from '@ionic/react'
import { Bell, Search, UserRound } from 'lucide-react'
import { Input } from '../ui/input'
import { RippleButton } from '../ui/shadcn-io/ripple-button'

export default function Header() {
  return (
    <IonHeader
      style={
        {
          '--ion-box-shadow': 'none',
          boxShadow: 'none',
          '--background': 'var(--background)',
        } as React.CSSProperties
      }
      className="shadow-none bg-background mb-4"
    >
      <IonToolbar>
        <div className="space-y-6">
          <div className="flex items-center justify-between">
            <div>
              <h1 className="text-2xl font-semibold text-foreground">Bine ai revenit, Olivia</h1>
              <p className="text-sm text-muted-foreground">16 Mai, 2025</p>
            </div>
            <div className="flex items-center gap-2">
              <div className="hidden md:block relative min-w-80 ">
                <Search className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />
                <Input type="search" placeholder="Cauta dosar" className="pl-9 !bg-white" />
              </div>
              <RippleButton variant="outline" className="hidden md:block">
                <UserRound />
              </RippleButton>
              <RippleButton variant="outline">
                <Bell />
              </RippleButton>
            </div>
          </div>
        </div>
      </IonToolbar>
    </IonHeader>
  )
}
