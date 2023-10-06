import logo from "../../assets/logo/scotiabank-4.svg";
import lockIcon from "../../assets/icons/padlock.png";
import burguerIcon from "../../assets/icons/burger-menu.svg";
import "./header.scss";

const Header = () => {
  return (
    <header className="header">
      <nav className="nav">
        <div className="nav__logo">
          <img src={logo} alt="Scotiabank logo" />
        </div>

        <div className="nav__text">
          <img src={lockIcon} alt="Sign In icon" />
          <span>Sign In</span>
        </div>

        <div className="nav__mobile-menu">
          <img src={burguerIcon} alt="mobile menu button" />
        </div>
      </nav>

      <section className="header__hero">
        <h1>Investments</h1>
        <p>
          Reach your investment goals tomorrow while enjoying your life today
        </p>
      </section>
    </header>
  );
};

export { Header };
