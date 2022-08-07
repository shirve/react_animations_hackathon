import {
  FramerMotionPage,
  ReactMotionPage,
  ReactSpringPage,
  ReanimatedPage,
  WelcomePage,
} from 'pages'
import { Route, Routes } from 'react-router-dom'

import { Layout } from './layout'

function App() {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<WelcomePage />} />
        <Route path="framer-motion" element={<FramerMotionPage />} />
        <Route path="react-motion" element={<ReactMotionPage />} />
        <Route path="react-spring" element={<ReactSpringPage />} />
        <Route path="reanimated" element={<ReanimatedPage />} />
      </Route>
    </Routes>
  )
}

export default App
