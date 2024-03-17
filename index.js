import Head from 'next/head';

export default function Home() {
  return (
    <div>
      <Head>
        <title>My Next.js App</title>
      </Head>
      <header>
        <h1>Welcome to My Next.js App</h1>
      </header>
      <main>
        <section>
          <h2>About Us</h2>
          <p>This is a simple Next.js application.</p>
        </section>
      </main>
      <footer>
        <p>&copy; 2024 My Next.js App</p>
      </footer>
    </div>
  );
}
