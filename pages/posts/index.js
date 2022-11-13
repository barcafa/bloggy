import AllPosts from "../../components/posts/all-posts";

const DUMMY_POSTS = [{ 
  slug: 'blisko-morning',
  title: 'A morning in the life of Blisko',
  image: 'blisko-morning.jpg',
  excerpt: 'I wake up and....',
  date: '2022-11-13',
},
{ 
  slug: 'blisko-afternoon',
  title: 'An afternoon in the life of Blisko',
  image: 'blisko-morning.jpg',
  excerpt: 'After lunch I....',
  date: '2022-11-13',
},
{ 
  slug: 'blisko-evening',
  title: 'An evening in the life of Blisko',
  image: 'blisko-morning.jpg',
  excerpt: 'Evening is....',
  date: '2022-11-13',
},
{ 
  slug: 'blisko-night',
  title: 'A night in the life of Blisko',
  image: 'blisko-morning.jpg',
  excerpt: 'It is dark up and....',
  date: '2022-11-13',
}
];

export default function AllPostsPage() {
  return <AllPosts posts={DUMMY_POSTS} />
}