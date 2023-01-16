import React from 'react';
import Image from 'next/image';
import Layout from '../components/Layout';

function NotFoundPage() {
  return (
    <Layout title="Page Not Found">
      <div className="flex flex-col items-center mt-20">
        <Image
          src="/images/logo.png"
          width={70}
          height={70}
          className="bg-gray-800 rounded-2xl"
          alt="Not Found Logo"
        />

        <h1 className="my-5 text-6xl">Whoops!</h1>
        <h2 className="mb-5 text-4xl text-gray-400">
          This page does not exist
        </h2>
      </div>
    </Layout>
  );
}

export default NotFoundPage;
