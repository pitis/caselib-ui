import { useAuthStore } from '@/stores/auth'
import { AppRouteProps } from '@/types/AppRouteProps'
import { IonSpinner } from '@ionic/react'
import { Redirect, Route } from 'react-router-dom'

const PrivateRoute: React.FC<AppRouteProps> = ({ component: Component, ...rest }) => {
  const { isLoading, isAuthenticated } = useAuthStore()

  if (isLoading) {
    return <IonSpinner name="circles" />
  }

  return (
    <Route
      {...rest}
      render={(props) => (isAuthenticated ? <Component {...props} /> : <Redirect to="/login" />)}
    />
  )
}

export default PrivateRoute
