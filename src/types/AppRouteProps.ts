import { ComponentType } from 'react'
import { RouteProps } from 'react-router-dom'

export type AppRouteProps = RouteProps & {
  component: ComponentType<unknown>
}
