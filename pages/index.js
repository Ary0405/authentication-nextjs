import Head from 'next/head';
import Register from '../components/Register';
import Login from '../components/Login';

export default function Home({ products }) {
  return (
    <div>
      <Head>
        <title>PlanetScale Next.js Quickstart</title>
        <meta name="description" content="Authentication Test" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <h1>Register</h1>
      <Register />
      <br />
      <hr />
      <h1>Login</h1>
      <Login />
      <footer></footer>
    </div>
  );
}