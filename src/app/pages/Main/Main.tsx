import styles from './Main.module.scss'
import Image from 'next/image';
const Main = () => {
    return (
        <div className={styles.main}>
            <div className={styles.photo}>
                <Image
                src="/SK.jpg"
                width={500}
                height={500}
                alt="Picture of the author"
            /></div>
            <div className={styles.greetings}>
                <h2 className={styles.hello}>Привет, я</h2>
                <h1 className={styles.sergey}>Сергей</h1>
                <h2 className={styles.frontend}>Frontend</h2>
                <h2 className={styles.developer}>Developer</h2>
            </div>
        </div>
    )
}

export default Main