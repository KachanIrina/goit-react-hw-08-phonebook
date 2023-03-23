import { LoginForm } from '../components/LoginForm/LoginForm';
export default function Login() {
  return (
    <div
      style={{
        display: 'flex',
        alignItems: 'center',
        flexDirection: 'column',
      }}
    >
      <h1>Login</h1>
      <LoginForm />
    </div>
  );
}
