// pages/index.tsx

import Head from 'next/head';
import Image from 'next/image';

export default function Home() {
  return (
    <div>
      <Head>
        <title>My Next.js App</title>
      </Head>
      <header className="bg-gray-800 text-white py-4">
        <div className="container mx-auto px-4">
          <h1 className="text-3xl font-bold">Welcome to My Next.js App</h1>
        </div>
      </header>
      <main className="container mx-auto px-4 py-8">
        <section>
          <h2 className="text-2xl font-semibold mb-4">About Us</h2>
          <p className="text-lg">This is a simple Next.js application.</p>
        </section>
        <section>
          <h2 className="text-2xl font-semibold mt-8 mb-4">Featured Products</h2>
          {/* Add your featured products here */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            <div className="bg-white shadow-lg rounded-lg overflow-hidden">
              <Image
                src="/product1.jpg"
                alt="Product 1"
                width={400}
                height={300}
                className="object-cover w-full h-48"
              />
              <div className="p-6">
                <h3 className="text-xl font-semibold mb-2">Product 1</h3>
                <p className="text-gray-600">Description of Product 1</p>
              </div>
            </div>
            {/* Add more products as needed */}
          </div>
        </section>
      </main>
      <footer className="bg-gray-800 text-white py-4 mt-auto">
        <div className="container mx-auto px-4 text-center">
          <p>&copy; 2024 My Next.js App</p>
        </div>
      </footer>
    </div>
  );
}

