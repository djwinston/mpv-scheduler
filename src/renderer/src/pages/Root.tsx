import NavToolBar from '@renderer/components/NavToolBar'
import { Outlet } from 'react-router-dom'

const Root = (): JSX.Element => {
  return (
    <div>
      <NavToolBar />
      <Outlet />
    </div>
  )
}

export default Root
