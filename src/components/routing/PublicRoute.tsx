import { useAuthStore } from '@/stores/auth'
import { AppRouteProps } from '@/types/AppRouteProps'
import { IonSpinner } from '@ionic/react'
import { Redirect, Route } from 'react-router-dom'

const PublicRoute: React.FC<AppRouteProps> = ({ component: Component, ...rest }) => {
  const { isAuthenticated, isLoading } = useAuthStore()

  if (isLoading) {
    return <IonSpinner name="circles" />
  }

  return (
    <Route
      {...rest}
      render={(props) =>
        isAuthenticated ? <Redirect to="/dashboard" /> : <Component {...props} />
      }
    />
  )
}

export default PublicRoute
