import css from './LoginForm.module.css';
import { useId } from 'react';

export default function LoginForm({ onLogin }) {
  const loginId = useId();
  const passwordId = useId();
  const handleSubmit = evt => {
    evt.preventDefault();
    console.log(evt);
    const form = evt.target;
    const { login, password } = form.elements;
    console.log(login, password);

    onLogin({
      Login: login.value,
      Password: password.value,
    });
    // console.log(login.value, password.value);
    form.reset();
  };

  return (
    <form onSubmit={handleSubmit} className={css.form}>
      <input className={css.input} id={loginId} type="text" name="login" />
      <input
        className={css.input}
        id={passwordId}
        type="password"
        name="password"
      />
      <button type="submit">Log in</button>
    </form>
  );
}
