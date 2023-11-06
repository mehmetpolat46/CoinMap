import { Link, NavLink } from 'react-router-dom';

const HeaderView = () => {
  return (
    <header>
      <Link to={'/home'} className="h-logo">
        <img src="/public/a.png" alt="logo" />
        <h3 className="text-white"></h3>
      </Link>

      <div className="links">
        <NavLink to={'/'}>Log in</NavLink>
        <NavLink to={'/home '}>Home</NavLink>
      </div>
    </header>
  );
};

export default HeaderView;
