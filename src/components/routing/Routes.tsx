import DashboardPage from '@/pages/Dashboard'
import DosareleMelePage from '@/pages/DosareleMele'
import LoginPage from '@/pages/Login'
import SignupDetailsPage from '@/pages/SignUpDetails'
import SignupPage from '@/pages/Signup'
import TermenePage from '@/pages/Termene'
import { useAuthStore } from '@/stores/auth'
import { IonRouterOutlet, IonTabBar, IonTabButton, IonTabs } from '@ionic/react'
import { IonReactRouter } from '@ionic/react-router'
import { Calendar, FileText, Home, Search } from 'lucide-react'
import { Redirect } from 'react-router-dom'
import MainAppLayout from '../layout/MainAppLayout'
import PrivateRoute from './PrivateRoute'
import PublicRoute from './PublicRoute'

const mobileNavItems = [
  { id: 'dashboard', label: 'Acasa', icon: 'home', component: DashboardPage },
  { id: 'dosarele-mele', label: 'Dosare', icon: 'folder', component: DosareleMelePage },
  { id: 'termene', label: 'Termene', icon: 'calendar' },
  { id: 'cautare', label: 'Cautare', icon: 'search' },
]

export default function AppRoutes() {
  const isAuthenticated = useAuthStore((store) => store.isAuthenticated)

  return (
    <IonReactRouter>
      <IonTabs>
        <IonRouterOutlet animated={false}>
          {/* Public routes (redirect to /dashboard if logged in) */}
          <PublicRoute path="/login" component={LoginPage} exact />
          <PublicRoute path="/signup" component={SignupPage} exact />
          <PublicRoute path="/signup-details" component={SignupDetailsPage} exact />

          {/* Private routes */}
          <MainAppLayout>
            <PrivateRoute path="/dashboard" component={DashboardPage} exact />
            <PrivateRoute path="/dosarele-mele" component={DosareleMelePage} exact />
            <PrivateRoute path="/termene" component={TermenePage} exact />
          </MainAppLayout>

          {/* <PrivateRoute path="/cautare" component={CautarePage} exact /> */}

          {/* Default redirect */}
          <Redirect exact path="/" to="/dashboard" />
        </IonRouterOutlet>

        {/* Tabs visible only on mobile */}
        {isAuthenticated && (
          <IonTabBar slot="bottom" className="md:hidden">
            {mobileNavItems.map((item) => (
              <IonTabButton key={item.id} tab={item.id} href={`/${item.id}`}>
                <TabIcon icon={item.icon} />
                {item.label}
              </IonTabButton>
            ))}
          </IonTabBar>
        )}
      </IonTabs>
    </IonReactRouter>
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
