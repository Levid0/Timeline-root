import { Outlet, Link } from "react-router-dom";
import logo from "../images/logo.png"
const Layout = () => {
  return (
    <>
    <img src={logo} alt="logo" class="absolute top-right"></img>
      <nav class="absolute">
        <ul>
          <li>
            <Link to="/">Home</Link>

          </li>
        </ul>
      </nav>

      <Outlet />
    </>
  )
};

export default Layout;