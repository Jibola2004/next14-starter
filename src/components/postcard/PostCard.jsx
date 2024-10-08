
import Image from 'next/image';
import styles from './postcard.module.css';
import Link from 'next/link';
const PostCard = ({post}) => {

    return (
        <div className={styles.container}>
          <div className={styles.top}>
            <div className={styles.imgContainer}>
                <Image src='/post1.jpg' alt="post" fill className={styles.image} />
            </div>
            <span className={styles.date}>01.01.2009</span>
          </div>
          <div className={styles.bottom}>
            <h1 className={styles.title}>{post.title}</h1>
            <p className={styles.description}>{post.body}</p>
            <Link className={styles.links} href={`/blog/${post.id}`}>READ MORE</Link>
          </div>
        </div>
    )
};

export default PostCard;
