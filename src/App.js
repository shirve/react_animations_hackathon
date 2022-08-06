import {
  FramerMotionPage,
  ReactMotionPage,
  ReactSpringPage,
  ReanimatedPage,
} from 'pages'
import { Route, Routes } from 'react-router-dom'

import { Nav } from './Nav'
import { Welcome } from './Welcome'

function App() {
  return (
    <div>
      <Nav />
      <Routes>
        <Route index element={<Welcome />} />
        <Route path="/framer-motion" element={<FramerMotionPage />} />
        <Route path="/react-motion" element={<ReactMotionPage />} />
        <Route path="/react-spring" element={<ReactSpringPage />} />
        <Route path="/reanimated" element={<ReanimatedPage />} />
      </Routes>
    </div>
  )
}

export default App
