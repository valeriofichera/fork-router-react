import { NavLink } from "react-router-dom";

export default function Header() {
  return (
    <header>
      <NavLink to="/">Homepage</NavLink>
      <br />
      <NavLink to="/about">About</NavLink>
      <br />
      <NavLink to="/team">Team</NavLink>
    </header>
  );
}
