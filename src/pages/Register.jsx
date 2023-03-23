import { RegisterForm } from '../components/RegisterForm/RegisterForm';

export default function Register() {
  return (
    <div
      style={{
        display: 'flex',
        alignItems: 'center',
        flexDirection: 'column',
      }}
    >
      <h1>Registration</h1>
      <RegisterForm />
    </div>
  );
}
