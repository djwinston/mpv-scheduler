import { NavLink } from 'react-router-dom'

const NavToolBar = (): JSX.Element => {
  return (
    <nav className="mb-3">
      <NavLink className="btn btn-primary" to="/dashboard">
        Dashboard
      </NavLink>
      <NavLink className="btn btn-primary" to="/demo">
        Demo
      </NavLink>
    </nav>
  )
}
export default NavToolBar
