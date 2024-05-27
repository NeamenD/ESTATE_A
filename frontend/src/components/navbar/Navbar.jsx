import "./navbar.scss";

export default function Navbar() {
  return (
    <nav>
      <div className="left">
        <a href="/" className="logo">
          <img src="../../../public/img/GOJO-removebg-preview.png" alt="Logo" />
          {/* <span>GOJO</span> */}
        </a>
        <a href="/">Home</a>
        <a href="/">About</a>
        <a href="/">Contact</a>
        <a href="/">Agents</a>
      </div>
      <div className="right">
        <a href="/">Sign in</a>
        <a href="/" className="register">
          Sign up
        </a>
        <div className="menuIcon">
          <img src="../../../public/img/menu.png" alt="Menu bar icons" />
        </div>

        <div className="menu">
          <a href="/">Home</a>
          <a href="/">About</a>
          <a href="/">Contact</a>
          <a href="/">Agents</a>
          <a href="/">Sign in</a>
          <a href="/">Sign up</a>
        </div>
      </div>
    </nav>
  );
}
