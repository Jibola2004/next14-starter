import Image from 'next/image';
import styles from './singlepost.module.css';

const SinglePostPage = ()=>{

    return (
    <div className={styles.container}>
        <div className={styles.imgContainer}>
            <Image src='/post1.jpg' alt='single post picture' fill className={styles.image} />
        </div>
        <div className={styles.textContainer}>
            <h1 className={styles.title}>Title</h1>
            <div className={styles.detail}>
             <Image  src='/post1.jpg' alt='image' className={styles.avatar} width={50} height={50}/>
           
            <div className={styles.detailText}>
                <span className={styles.detailTitle}>Author</span>
                <span className={styles.detailValue}>Terry Jefferson</span>
            </div>
            <div className={styles.detailText}>
                <span className={styles.detailTitle}>Published</span>
                <span className={styles.detailValue}>11-04T09:30</span>
            </div>
            </div>
            <div className={styles.content}>
          Inside, the shelves were lined with ancient tomes, each one more curious than the last.
           The scent of old paper and ink filled the air, mingling with the faint aroma of lavender.
            A small, intricately carved wooden box sat on the counter, its lid slightly ajar,
             revealing a glimmer of something hidden within
          </div>
        </div>
          

    </div>)
}
export default SinglePostPage;