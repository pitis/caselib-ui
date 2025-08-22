import { IonApp, setupIonicReact } from '@ionic/react'

/* Core CSS required for Ionic components to work properly */
import '@ionic/react/css/core.css'

/* Basic CSS for apps built with Ionic */
// import '@ionic/react/css/normalize.css'
import '@ionic/react/css/structure.css'
// import '@ionic/react/css/typography.css'

/* Optional CSS utils that can be commented out */
// import '@ionic/react/css/display.css'
// import '@ionic/react/css/flex-utils.css'
// import '@ionic/react/css/float-elements.css'
// import '@ionic/react/css/padding.css'
// import '@ionic/react/css/text-alignment.css'
// import '@ionic/react/css/text-transformation.css'

/**
 * Ionic Dark Mode
 * -----------------------------------------------------
 * For more info, please see:
 * https://ionicframework.com/docs/theming/dark-mode
 */

// import '@ionic/react/css/palettes/dark.always.css'
// import '@ionic/react/css/palettes/dark.class.css'
// import '@ionic/react/css/palettes/dark.system.css'

/* Theme variables */
import './theme/variables.css'

import { useEffect } from 'react'

import { QueryClient, QueryClientProvider } from '@tanstack/react-query'
import AppRoutes from './components/routing/Routes'
import { useAuthStore } from './stores/auth'

setupIonicReact()

const queryClient = new QueryClient()

const App: React.FC = () => {
  const checkAuthStatus = useAuthStore((store) => store.checkAuthStatus)
  const user = useAuthStore((store) => store.user)

  console.log(user)

  useEffect(() => {
    checkAuthStatus()
  }, [checkAuthStatus])

  return (
    <QueryClientProvider client={queryClient}>
      <IonApp>
        <AppRoutes />
      </IonApp>
    </QueryClientProvider>
  )
}

export default App
