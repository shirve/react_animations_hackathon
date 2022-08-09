import {
  FramerMotionPage,
  GSAPPage,
  ReactMotionPage,
  ReactSpringPage,
  ReanimatedPage,
} from 'pages'

export const navRoutes = [
  { name: 'framer-motion', to: '/framer-motion', Component: FramerMotionPage },
  { name: 'react-motion', to: '/react-motion', Component: ReactMotionPage },
  { name: 'react-spring', to: '/react-spring', Component: ReactSpringPage },
  { name: 'gsap', to: '/react-spring', Component: GSAPPage },
  { name: 'reanimated', to: '/reanimated', Component: ReanimatedPage },
]
