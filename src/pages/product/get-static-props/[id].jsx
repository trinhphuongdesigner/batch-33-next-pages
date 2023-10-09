import React from 'react';
import Head from 'next/head';
import PropTypes from 'prop-types';

import axiosClient from '@/libraries/axiosClient';
import { useRouter } from 'next/router';

function ProductDetail(props) {
  const { product } = props;
  // const router = useRouter();

  return (
    <>
      <Head>
        <title>Ban chai da nang</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      {product && (
        <main>
          <p>
            <strong>name:</strong> {product.name}
          </p>
          <p>
            <strong>description:</strong> {product.description}
          </p>
          {/* <p>
            <strong>userId:</strong> {product.userId}
          </p> */}
          {/* <p>
            <strong>Discount:</strong> {post.discount}%
          </p>
          <p>
            <strong>Total:</strong> {post.total}
          </p>
          <p>
            <strong>Supplier name :</strong> {post.supplier.name}
          </p>
          <p>
            <strong>Supplier email :</strong> {post.supplier.email}
          </p>
          <p>
            <strong>Supplier address :</strong> {post.supplier.address}
          </p> */}
        </main>
      )}
    </>
  );
}

ProductDetail.propTypes = {
  post: PropTypes.instanceOf(Object),
};

ProductDetail.defaultProps = {
  post: {},
};

export default ProductDetail;

// SSG
// export async function getStaticPaths() {
//   try {
//     const response = await axiosClient.get('/products');

//     const paths = response.data.payload.map((p) => {
//       return {
//         params: { id: p._id},
//       }
//     })

//     return {
//       paths,
//       fallback: block,
//     }
//   } catch (error) {
//     console.log('««««« error »»»»»', error);
//   }
// }

export async function getStaticPaths() {
  // const response = await axiosClient.get(`/products/all`);

  return {
    paths: [], // trong trường hợp nhiều data
    // paths: response.data.payload.map((item) => ({ // Trong trường hợp ít data
    //   params: {
    //     id: item._id,
    //   },
    // })),
    // fallback: false, // dự liệu không biến động (không thêm mới, không chỉnh sửa)
    // fallback: blocking, || dữ liệu có tính biến động, nhiều dữ liệu - không trả về phiên bản draff
    fallback: true, // dữ liệu có tính biến động, nhiều dữ liệu - có trả về phiên bản draff
  };
}

export async function getStaticProps(req) {
  try {
    console.log('««««« req »»»»»', req);
    const { params } = req;
    const response = await axiosClient.get(`/products/${params.id}`);

    return {
      props: {
        product: response.data.payload,
      },

      revalidate: 10,
      // revalidate: 60 * 60 * 24 * 30,
    };
  } catch (error) {
    return {
      notFound: true,
    };
  }
}
