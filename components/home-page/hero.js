import Image from 'next/image';
import classes from './hero.module.css';

export default function Hero() {
  return (
    <section className={classes.hero}>
      <div className={classes.image}>
        <Image 
          src="/images/site/blisko.jpg" 
          alt="An image showing Blisko" 
          width={300} 
          height={300}
        />
      </div>
      <h1>Hello, I'm Blisko</h1>
      <p>I do things and I write words</p>
    </section>
  )
}