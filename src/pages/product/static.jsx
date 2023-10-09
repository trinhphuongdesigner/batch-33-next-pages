import React from 'react';
import Head from 'next/head';
import Link from 'next/link';
import axiosClient from '@/libraries/axiosClient';

function Products({products}) {
  return (
    <>
      <Head>
        <title>Hello</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      {
        products.length > 0 ? (
          <div style={{display: 'flex', flexDirection: 'column'}}>
            {products.map((p) => <Link style={{ height: '500px' }} key={p._id} href={`/products/${p._id}`}><h1>{p.name}</h1></Link>)}
          </div>
        ) : <small>Không có sản phẩm</small>
      }
    </>
  );
}

export default Products;

export async function getServerSideProps() {
  try {
    const response = await axiosClient.get("/products/all");

    return {
      props: {
        products: response.data.payload,
      },

      // revalidate: 24 * 60 * 60,
    };
  } catch (error) {
    return {
      notFound: true,
    };
  }
}