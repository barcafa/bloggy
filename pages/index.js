import { Fragment } from "react";

import { getFeaturedPosts } from "../lib/post-util";
import FeaturedPosts from "../components/home-page/featured-posts";
import Hero from "../components/home-page/hero";

export function getStaticProps() {
  const featuredPosts = getFeaturedPosts();

  return {
    props: {
      posts: featuredPosts
    }
  }
}

export default function HomePage(props) {
  return (
    <Fragment>
      <Hero />
      <FeaturedPosts posts={props.posts}/>
    </Fragment>
  )
}
