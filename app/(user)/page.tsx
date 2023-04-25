import BlogList from "@/components/BlogList";
import { client } from "@/lib/sanity.client";
import { groq } from "next-sanity";

const query = groq`
  *[_type=='post'] {
    ...,
    author->,
    categories[]->
  } | order(_createdAt desc)
`;

export const revalidate = 60; //update every 60 seconds

export default async function Home() {
  const posts = await client.fetch(query);
  console.log(posts.length);

  return (
    <div className="">
      <div>page</div>
      {posts.length > 0 && <BlogList posts={posts} />}
    </div>
  );
}
