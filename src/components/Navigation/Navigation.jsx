// import { NavLink } from 'react-router-dom';
// import { useAuth } from 'hooks';
// import { Outlet } from 'react-router-dom';
// import { Suspense } from 'react';
// //import css from './Navigation.module.css';

// export const Navigation = () => {
//   const { isLoggedIn } = useAuth();

//   return (
//     <nav>
//       <NavLink to="/">Home</NavLink>
//       {isLoggedIn ? (
//         <NavLink to="/contacts">Task</NavLink>
//       ) : (
//         <>
//           <NavLink to="/login">login</NavLink>
//           <NavLink to="/register">register</NavLink>
//         </>
//       )}
//       <Suspense>
//         <Outlet />
//       </Suspense>
//     </nav>
//   );
// };

import { NavLink } from 'react-router-dom';
import { useAuth } from 'hooks';
//import css from './Navigation.module.css';

export const Navigation = () => {
  const { isLoggedIn } = useAuth();

  return (
    <nav>
      {!isLoggedIn && (
        <NavLink
          //className={css.link}
          to="/"
        >
          Home
        </NavLink>
      )}
      {isLoggedIn && (
        <NavLink
          //className={css.link}
          to="/contacts"
        >
          Contacts
        </NavLink>
      )}
    </nav>
  );
};
