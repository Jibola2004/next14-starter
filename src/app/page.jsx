import Image from 'next/image';
import styles from './home.module.css';
const Home = () => {
  
  return <div className={styles.container}>
    <div className={styles.textContainer}>
      <h1 className={styles.title}>Creative Thought Agency</h1>
      <p className={styles.description}>A creative agency is your go-to partner for bringing bold ideas to life. Specializing in design,
         content creation, and strategic marketing,
         they work closely with you to craft a unique brand identity that truly reflects your vision.</p>
         <div className={styles.buttons}>
          <button className={styles.button}>Learn more</button>
          <button className={styles.button}>Contact us</button>
         </div>
         <div className={styles.brands}>
          <Image src='/brands.png' alt='brand' fill  className={styles.brandImg}/>
         </div>
    </div>
    <div className={styles.imgContainer}>
    <Image src='/hero.gif' alt='hero'  fill className={styles.heroImg}/></div>
     </div>;
};

export default Home;