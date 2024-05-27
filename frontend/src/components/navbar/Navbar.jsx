import "./navbar.scss";

export default function Navbar() {
  return (
    <nav>
      <div className="left">
        <a href="/">
          <img src="../../../public/img/GOJO-removebg-preview.png" alt="Logo" />
          <span>GOJO</span>
        </a>
        <a href="/">Home</a>
        <a href="/">About</a>
        <a href="/">Contact</a>
        <a href="/">Agents</a>
      </div>
      <div className="right">
        <a href="/">Sign in</a>
        <a href="/">Sign up</a>
      </div>
    </nav>
  );
}
