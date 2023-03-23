import { useReducer } from 'react';
import { useDispatch } from 'react-redux';
import { register } from 'redux/auth/operations';
import css from './RegisterForm.module.css';

function reducer(state, action) {
  switch (action.type) {
    case 'name':
      return {
        ...state,
        name: action.payload,
      };
    case 'password':
      return {
        ...state,
        password: action.payload,
      };
    case 'email':
      return {
        ...state,
        email: action.payload,
      };
    default:
      return state;
  }
}

export const RegisterForm = () => {
  const [state, setState] = useReducer(reducer, {
    name: '',
    email: '',
    password: '',
  });

  const dispatch = useDispatch();

  const handleChangeInput = e => {
    setState({ type: e.target.name, payload: e.target.value });
  };

  const handleSubmit = e => {
    e.preventDefault();
    dispatch(register(state));
  };

  return (
    <form action="" onSubmit={handleSubmit} className={css.registerForm}>
      <label htmlFor="">
        Name
        <input
          onChange={handleChangeInput}
          name="name"
          type="text"
          className={css.registerInput}
        />
      </label>
      <label htmlFor="">
        Email
        <input
          onChange={handleChangeInput}
          name="email"
          type="email"
          className={css.registerInput}
        />
      </label>
      <label htmlFor="">
        Password
        <input
          onChange={handleChangeInput}
          name="password"
          type="password"
          className={css.registerInput}
        />
      </label>
      <button type="submit" className={css.registerBtn}>
        register
      </button>
    </form>
  );
};
