import PostHeader from "./post-header";
import classes from "./post-content.module.css";

export const DUMMY_POST = { 
  slug: 'blisko-morning',
  title: 'A morning in the life of Blisko',
  image: 'blisko-morning.jpg',
  date: '2022-11-13',
  content: '# The Blisko morning post'
}

export default function PostContent() {
  const imagePath = `/images/posts/${DUMMY_POST.slug}/${DUMMY_POST.image}`;

  return (
    <article className={classes.content}>
      <PostHeader title={DUMMY_POST.title} image={imagePath} />
      {DUMMY_POST.content}
    </article>
  )
}