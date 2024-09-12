

import { getPostDetails,getPostIdList } from "@/components/postsdata/getposts";

export async function getStaticPaths() {
  const paths = await getPostIdList();
  return {
    paths,
    fallback: false,
  };
}

export async function getStaticProps({ params }) {
  // const postData = await getPostDetails(params.id);
  const response = await fetch(`https://fakestoreapi.com/products/${params.id}`);
        const products = await response.json();
  return {
    props: {
      products,
    },
  };
}

export default function Post({ products }) {
  return (
    <div className='bg-gray-800 h-screen p-16 text-gray-100'>
      <div className='text-center font-bold text-3xl'>
        {products.title}
      </div>
    </div>
  );
}