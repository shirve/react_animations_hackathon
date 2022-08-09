import { WelcomePage } from 'pages'
import { Route, Routes } from 'react-router-dom'

import { Layout, navRoutes } from './layout'

function App() {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<WelcomePage />} />
        {navRoutes.map(({ to, Component }) => (
          <Route key={to} path={to} element={<Component />} />
        ))}
      </Route>
    </Routes>
  )
}

export default App
