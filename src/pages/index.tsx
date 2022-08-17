import { useRouter } from 'next/router';

import { useAuth } from '../contexts/AuthContext';

export default function HomePage() {
  const router = useRouter();
  const { authenticated, login } = useAuth();

  function handleLogin() {
    login();
    router.push('/dashboard');
  }

  return (
    <div>
      <h1>Home Page</h1>

      <p>Description Home page</p>

      <button onClick={() => router.push('/contact')}>Contact</button>

      <p>User is logged: {authenticated ? 'Logged' : 'Not Logged'}</p>
      <button onClick={handleLogin}>Login</button>
    </div>
  );
}
