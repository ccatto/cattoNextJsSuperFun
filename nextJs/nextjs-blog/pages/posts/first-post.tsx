import Link from 'next/link';
import Head from 'next/head';
import Layout from '../../components/layout';

export default function FirstPost() {
    return (
      <Layout home>
        <Head>
          <title>First Post</title>
        </Head>
        <h1>First Post 2</h1>;
        <Link href="/">Back to home</Link>
      </Layout>
    );
  }