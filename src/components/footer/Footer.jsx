import styles from './footer.module.css';

const Footer = () => {

    return<div className={styles.container}>
        <div className={styles.logo}>
            jibsdev
        </div>
        <div className={styles.text}>
            Lama creative though &copy; All right reserved.
        </div>

    </div>
};

export default Footer;