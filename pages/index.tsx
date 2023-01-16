import type { GetStaticProps, NextPage } from 'next';

import Layout from '../components/Layout';

import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';

type Post = {
  slug: string;
  frontmatter: {
    title: string;
    date: string;
    excerpt: string;
    cover_image: string;
    category: string;
    author: string;
    author_image: string;
  };
};

type Props = {
  posts: Post[];
};

const Home: NextPage<Props> = ({ posts }) => {
  return (
    <Layout>
      <h1>Hello World</h1>
    </Layout>
  );
};

export default Home;

export async function getStaticProps() {
  const files = fs.readdirSync(path.join('posts'));

  const posts = files.map((filename) => {
    const slug = filename.replace('.md', '');

    const markdownWithMeta = fs.readFileSync(path.join('posts', filename), {
      encoding: 'utf8',
    });

    const { data: frontmatter } = matter(markdownWithMeta);

    return {
      slug,
      frontmatter,
    };
  });

  console.log(posts);

  return {
    props: { posts },
  };
}
