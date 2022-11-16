import PostContent from "../../components/posts/post-detail/post-content";
import { getPostsData, getPostsFiles } from "../../lib/post-util";


export function getStaticProps(context) {
  const { params } = context;
  const { slug } = params;
  
  const postData = getPostsData(slug);

  return {
    props: {
      post: postData 
    },
    revalidate: 600
  };
}

export function getStaticPaths() {
  const postsFilesNames = getPostsFiles();
  const slugs = postsFilesNames.map(fileName => fileName.replace(/\.md$/, ''));

  return {
    paths: slugs.map(slug => ({ params: {slug: slug } })),
    fallback: true
  }
}

export default function PostDetailPage(props) {
  return (
    <PostContent post={props.post}/>
  )
}