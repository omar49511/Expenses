// import { Button } from "../Button/Button";
export default function LoginForm() {
  return (
    <form>
      <h2>Login Form</h2>
      <label htmlFor="email">Email</label>
      <input id="email" name="email" type="email" />

      <label htmlFor="password">Password</label>
      <input id="password" name="password" type="password" />

      <a href="/forgot-password">Forgot Password</a>

      <button type="submit">Login</button>
      <button type="button">Create Account</button>
    </form>
  );
}
