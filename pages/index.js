import Head from 'next/head';
import prisma from '../lib/prisma';
import Register from '../components/Register';

export default function Home({ products }) {
  return (
    <div>
      <Head>
        <title>PlanetScale Next.js Quickstart</title>
        <meta name="description" content="Authentication Test" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Register />
      <footer></footer>
    </div>
  );
}

export async function getStaticProps(context) {
  const data = await prisma.product.findMany({
    include: {
      category: true,
    },
  });

  //convert decimal value to string to pass through as json
  const products = data.map((product) => ({
    ...product,
    price: product.price.toString(),
  }));
  return {
    props: { products },
  };
}
