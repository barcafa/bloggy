import { Fragment } from "react";

import { getFeaturedPosts } from "../lib/post-util";
import FeaturedPosts from "../components/home-page/featured-posts";
import Hero from "../components/home-page/hero";
import Head from "next/head";

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
      <Head>
        <title>Blisko blog</title>
        <meta name='description' content='Blablabla'/> 
      </Head>
      <Hero />
      <FeaturedPosts posts={props.posts}/>
    </Fragment>
  )
}
