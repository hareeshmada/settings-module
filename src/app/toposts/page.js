import Link from 'next/link';

// Define the configuration directly in this file or import if preferred
// const config = {
//   posts: [
//     { id: '1', title: 'First Post', content: 'This is the first post.' },
//     { id: '2', title: 'Second Post', content: 'This is the second post.' },
//     { id: '3', title: 'third Post', content: 'This is the third post.' },
//     // Add more posts as needed
//   ],
// };

export default async function Home() {
  // Fetch posts from the configuration
  const response=await fetch('https://fakestoreapi.com/products')
const posts=await response.json();
  return (
    <div>
      <h1>Home Page</h1>
      <ul>
        {posts.map(post => (
          <li key={post.id}>
            <Link href={`/posts/${post.id}`}>
              {post.title}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}
