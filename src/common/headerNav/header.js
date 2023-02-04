import './header.css';
import logo from '../../assets/logo.png'
const Header = () => {
  return (
    <>
      <nav className="grid-container">
        <div className="nav-icon">
          <a href="/">
            <img className="logo-icon" src={logo} alt="logo" />
          </a>
        </div>
        <div className="links-wrapper">
          <div className="nav-links">
            <a href="/" className="nav-item active">
              Home
            </a>
            <a
              href="/" //login ref here
              className="nav-item"
            >
              Login
            </a>
          </div>
        </div>
      </nav>
    </>
  );
};
export default Header;
