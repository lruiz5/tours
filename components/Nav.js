const Nav = () => {
  return (
    <div className="navigation">
      <input
        type="checkbox"
        className="navigation__checkbox"
        id="navi-toggle"
      />
      <label htmlFor="navi-toggle" className="navigation__button">
        <span className="navigation__icon">&nbsp;</span>
      </label>
      <div className="navigation__background">&nbsp;</div>
      <nav className="navigation__nav">
        <ul className="navigation__list">
          <li className="navigation__item">
            <a href="#" className="navigation__link">
              <span className="">01</span> About Natours
            </a>
          </li>
          <li className="navigation__item">
            <a href="#" className="navigation__link">
              <span className="">02</span> Your Benefits
            </a>
          </li>
          <li className="navigation__item">
            <a href="#" className="navigation__link">
              <span className="">03</span> Popular Tours
            </a>
          </li>
          <li className="navigation__item">
            <a href="#" className="navigation__link">
              <span className="">04</span> Stories
            </a>
          </li>
          <li className="navigation__item">
            <a href="#" className="navigation__link">
              <span className="">05</span> Book now
            </a>
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default Nav;
