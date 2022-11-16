import AllPosts from "../../components/posts/all-posts";
import { getAllPosts } from "../../lib/post-util";

export function getStaticProps() {
  const allPosts = getAllPosts();

  return {
    props: {
      posts: allPosts
    }
  }
}

export default function AllPostsPage(props) {
  return <AllPosts posts={props.posts} />
}