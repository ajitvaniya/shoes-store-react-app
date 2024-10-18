import { Outlet } from 'react-router-dom';

import NavComponent from './components/NavComponent';

const Layout = () => {
  return (
    <>
      <NavComponent />
      <Outlet />
    </>
  );
};

export default Layout;
