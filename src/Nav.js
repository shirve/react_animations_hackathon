import { NavLink } from 'react-router-dom'

export const Nav = () => {
  return (
    <nav>
      <NavLink to="/framer-motion">framer-motion</NavLink>
      <NavLink to="/react-motion">react-motion</NavLink>
      <NavLink to="/react-spring">react-spring</NavLink>
      <NavLink to="/reanimated">reanimated</NavLink>
    </nav>
  )
}
