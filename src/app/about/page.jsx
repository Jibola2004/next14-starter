import Image from "next/image";
import styles from './about.module.css';

const AboutPage =()=>{

    return (
    <div className={styles.container}>
        <div className={styles.textContainer}>
            <h2 className={styles.subTitle}>About Agency</h2>
            <h1 className={styles.title}>we create digital ideas that are,bigger,braver and save for use</h1>
            <p className={styles.description}> Whether it’s developing a visually stunning website, managing your social media presence,
                 or launching a captivating ad campaign,
                 a creative agency combines creativity with strategy to connect with your audience on a deeper level</p>
                 <div className={styles.boxes}>
                    <div className={styles.box}>
                        <h1>10 K+</h1>
                        <p>years of experience</p>
                    </div>
                    <div className={styles.box}>
                    <h1>10 K+</h1>
                    <p>years of experience</p>
                    </div>
                    <div className={styles.box}>
                    <h1>10 K+</h1>
                    <p>years of experience</p>
                    </div>
                 </div>
        </div> 
        
        <div className={styles.imgContainer}>
       <Image src='/about.png' alt="about" fill className={styles.image} /></div>

    </div>)
}
export default AboutPage;
