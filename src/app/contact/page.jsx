import Image from 'next/image';
import styles from './contact.module.css'

const ContactPage =()=>{

    return (
    <div className={styles.container}>
     <div className={styles.imgContainer}>
        <Image src='/contact.png' alt='contact' fill />
     </div>
     <div className={styles.formContainer}>
        <form action="" className={styles.form}>
            <input type="text" placeholder='name and surname' />
            <input type="text" placeholder='email address' />
            <input type="text" placeholder='phone number (optional)' />
            <textarea name="" id="" placeholder='message me' rows={10} cols={10}></textarea>
            <button >Send </button>

        </form>
     </div>

    </div>)
}
export default ContactPage;
