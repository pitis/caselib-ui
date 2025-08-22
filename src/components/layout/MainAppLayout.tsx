import { IonContent, IonPage } from '@ionic/react'
import DesktopSidebar from './DesktopSidebar'
import Header from './Header'

interface DashboardLayoutProps {
  children: React.ReactNode
}

export default function MainAppLayout({ children }: DashboardLayoutProps) {
  return (
    <IonPage className="bg-background">
      <div className="min-h-full flex">
        <DesktopSidebar />

        <div className="flex-1 md:p-6">
          <Header />
          <IonContent>
            <div className="ion-padding p-6 md:p-0">{children}</div>
          </IonContent>
        </div>
      </div>
    </IonPage>
  )
}
