import { createBrowserRouter, createRoutesFromElements, Route, RouterProvider, Navigate } from 'react-router-dom'

import Root from '@renderer/pages/Root'
import Dashboard from '@renderer/pages/Dashboard'
import Demo from '@renderer/pages/Demo'

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/*" element={<Root />}>
      <Route path="dashboard" element={<Dashboard />} />
      <Route path="demo" element={<Demo />} />
      <Route path="*" element={<Navigate to="dashboard" />} />
    </Route>
  )
)

function App(): JSX.Element {
  return <RouterProvider router={router} />
}

export default App
