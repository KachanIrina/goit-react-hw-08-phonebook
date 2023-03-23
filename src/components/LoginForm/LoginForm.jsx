import { useReducer } from 'react';
import { useDispatch } from 'react-redux';
import { logIn } from 'redux/auth/operations';
import css from './LoginForm.module.css';

function reducer(state, action) {
  switch (action.type) {
    case 'email':
      return {
        ...state,
        email: action.payload,
      };
    case 'password':
      return {
        ...state,
        password: action.payload,
      };
    default:
      return state;
  }
}

export const LoginForm = () => {
  const [state, setState] = useReducer(reducer, {
    email: '',
    password: '',
  });

  const dispatch = useDispatch();

  const handleChangeInput = e => {
    setState({ type: e.target.name, payload: e.target.value });
  };

  const handleSubmit = e => {
    e.preventDefault();
    dispatch(logIn(state));
  };

  return (
    <form action="" onSubmit={handleSubmit} className={css.loginForm}>
      <label htmlFor="">
        email
        <input
          onChange={handleChangeInput}
          name="email"
          type="email"
          className={css.loginInput}
        />
      </label>
      <label htmlFor="">
        password
        <input
          onChange={handleChangeInput}
          name="password"
          type="password"
          className={css.loginInput}
        />
      </label>
      <button type="submit" className={css.loginBtn}>
        login
      </button>
    </form>
  );
};
